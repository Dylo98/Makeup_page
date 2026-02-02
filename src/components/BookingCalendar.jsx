import { useState, useEffect, useCallback } from 'react'

// iCalendar parser utility
const parseICalendar = (icsData) => {
  const events = []
  const lines = icsData.split(/\r?\n/)
  let currentEvent = null

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i]

    // Handle line folding (lines starting with space/tab are continuations)
    while (i + 1 < lines.length && (lines[i + 1].startsWith(' ') || lines[i + 1].startsWith('\t'))) {
      line += lines[i + 1].substring(1)
      i++
    }

    if (line === 'BEGIN:VEVENT') {
      currentEvent = {}
    } else if (line === 'END:VEVENT' && currentEvent) {
      if (currentEvent.start) {
        events.push(currentEvent)
      }
      currentEvent = null
    } else if (currentEvent) {
      const [key, ...valueParts] = line.split(':')
      const value = valueParts.join(':')

      if (key.startsWith('DTSTART')) {
        currentEvent.start = parseICalDate(value)
      } else if (key.startsWith('DTEND')) {
        currentEvent.end = parseICalDate(value)
      } else if (key === 'SUMMARY') {
        currentEvent.summary = value
      }
    }
  }

  return events
}

const parseICalDate = (dateStr) => {
  // Handle formats: 20240115T100000Z, 20240115T100000, 20240115
  const cleaned = dateStr.replace(/[^0-9T]/g, '')

  if (cleaned.length >= 8) {
    const year = parseInt(cleaned.substring(0, 4))
    const month = parseInt(cleaned.substring(4, 6)) - 1
    const day = parseInt(cleaned.substring(6, 8))

    if (cleaned.length >= 15) {
      const hour = parseInt(cleaned.substring(9, 11))
      const minute = parseInt(cleaned.substring(11, 13))
      return new Date(year, month, day, hour, minute)
    }

    return new Date(year, month, day)
  }

  return null
}

// Polish day and month names
const DAYS_SHORT = ['Nd', 'Pn', 'Wt', 'Śr', 'Cz', 'Pt', 'Sb']
const MONTHS = [
  'Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec',
  'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'
]

// Default working hours
const DEFAULT_TIME_SLOTS = [
  '09:00', '10:00', '11:00', '12:00', '13:00',
  '14:00', '15:00', '16:00', '17:00', '18:00'
]

function BookingCalendar({ onDateTimeSelect, selectedDateTime, calendarUrl }) {
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)
  const [busySlots, setBusySlots] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [calendarError, setCalendarError] = useState(null)

  // Fetch and parse iCalendar data
  const fetchCalendarData = useCallback(async (url) => {
    if (!url) return

    setIsLoading(true)
    setCalendarError(null)

    try {
      // Use a CORS proxy for fetching iCalendar data
      // In production, you'd want your own backend proxy
      const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`

      const response = await fetch(proxyUrl)
      if (!response.ok) {
        throw new Error('Nie udało się pobrać kalendarza')
      }

      const icsData = await response.text()
      const events = parseICalendar(icsData)

      // Convert events to busy slots
      const slots = events.map(event => ({
        start: event.start,
        end: event.end || new Date(event.start.getTime() + 60 * 60 * 1000), // Default 1 hour
        summary: event.summary
      }))

      setBusySlots(slots)
    } catch (error) {
      console.error('Calendar fetch error:', error)
      setCalendarError('Nie udało się załadować kalendarza. Terminy mogą być niedokładne.')
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    if (calendarUrl) {
      fetchCalendarData(calendarUrl)

      // Automatyczne odświeżanie co 5 minut
      const interval = setInterval(() => {
        fetchCalendarData(calendarUrl)
      }, 5 * 60 * 1000)

      return () => clearInterval(interval)
    }
  }, [calendarUrl, fetchCalendarData])

  // Parse initial selectedDateTime if provided
  useEffect(() => {
    if (selectedDateTime) {
      const [datePart, timePart] = selectedDateTime.split(' ')
      if (datePart) {
        const [year, month, day] = datePart.split('-').map(Number)
        setSelectedDate(new Date(year, month - 1, day))
      }
      if (timePart) {
        setSelectedTime(timePart)
      }
    }
  }, [selectedDateTime])

  // Get days in month
  const getDaysInMonth = (date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDay = firstDay.getDay()

    return { daysInMonth, startingDay }
  }

  // Check if a date is in the past
  const isPastDate = (date) => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    return date < today
  }

  // Check if a time slot is busy
  const isSlotBusy = (date, time) => {
    if (!date) return false

    const [hours, minutes] = time.split(':').map(Number)
    const slotStart = new Date(date)
    slotStart.setHours(hours, minutes, 0, 0)
    const slotEnd = new Date(slotStart.getTime() + 60 * 60 * 1000) // 1 hour slot

    return busySlots.some(busy => {
      if (!busy.start) return false
      const busyStart = busy.start
      const busyEnd = busy.end

      // Check for overlap
      return slotStart < busyEnd && slotEnd > busyStart
    })
  }

  // Check if a time slot is in the past (for today)
  const isTimeSlotPast = (date, time) => {
    if (!date) return false

    const today = new Date()
    const [hours, minutes] = time.split(':').map(Number)
    const slotTime = new Date(date)
    slotTime.setHours(hours, minutes, 0, 0)

    // Only check for today's date
    if (date.toDateString() === today.toDateString()) {
      return slotTime <= today
    }

    return false
  }

  // Get number of available slots for a date
  const getAvailableSlotsCount = (date) => {
    if (isPastDate(date)) return 0

    return DEFAULT_TIME_SLOTS.filter(time =>
      !isSlotBusy(date, time) && !isTimeSlotPast(date, time)
    ).length
  }

  // Handle date selection
  const handleDateSelect = (day) => {
    const newDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day)
    if (isPastDate(newDate)) return

    setSelectedDate(newDate)
    setSelectedTime(null) // Reset time when date changes
  }

  // Handle time selection
  const handleTimeSelect = (time) => {
    if (isSlotBusy(selectedDate, time) || isTimeSlotPast(selectedDate, time)) return

    setSelectedTime(time)

    if (selectedDate && onDateTimeSelect) {
      const year = selectedDate.getFullYear()
      const month = String(selectedDate.getMonth() + 1).padStart(2, '0')
      const day = String(selectedDate.getDate()).padStart(2, '0')
      onDateTimeSelect(`${year}-${month}-${day} ${time}`)
    }
  }

  // Navigate months
  const goToPreviousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))
  }

  const goToNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))
  }

  // Check if previous month button should be disabled
  const isPrevMonthDisabled = () => {
    const today = new Date()
    return currentMonth.getFullYear() === today.getFullYear() &&
           currentMonth.getMonth() <= today.getMonth()
  }

  const { daysInMonth, startingDay } = getDaysInMonth(currentMonth)

  // Generate calendar days
  const calendarDays = []

  // Empty cells for days before the first day of the month
  for (let i = 0; i < startingDay; i++) {
    calendarDays.push(<div key={`empty-${i}`} className="calendar-day empty"></div>)
  }

  // Days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day)
    const isPast = isPastDate(date)
    const isSelected = selectedDate &&
                       selectedDate.getDate() === day &&
                       selectedDate.getMonth() === currentMonth.getMonth() &&
                       selectedDate.getFullYear() === currentMonth.getFullYear()
    const isToday = new Date().toDateString() === date.toDateString()
    const availableSlots = getAvailableSlotsCount(date)
    const hasNoSlots = availableSlots === 0

    let className = 'calendar-day'
    if (isPast) className += ' past'
    if (isSelected) className += ' selected'
    if (isToday) className += ' today'
    if (hasNoSlots && !isPast) className += ' fully-booked'

    calendarDays.push(
      <button
        key={day}
        className={className}
        onClick={() => handleDateSelect(day)}
        disabled={isPast}
        title={hasNoSlots && !isPast ? 'Brak wolnych terminów' : `${availableSlots} wolnych terminów`}
      >
        <span className="day-number">{day}</span>
        {!isPast && !hasNoSlots && (
          <span className="availability-indicator" data-slots={availableSlots}>
            {availableSlots}
          </span>
        )}
      </button>
    )
  }

  return (
    <div className="booking-calendar">
      <div className="calendar-header">
        <h3 className="calendar-title">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
          Wybierz termin
        </h3>
        {isLoading && <span className="calendar-loading">Ładowanie...</span>}
        {calendarError && <span className="calendar-error">{calendarError}</span>}
      </div>

      <div className="calendar-container">
        <div className="calendar-nav">
          <button
            className="calendar-nav-btn"
            onClick={goToPreviousMonth}
            disabled={isPrevMonthDisabled()}
            aria-label="Poprzedni miesiąc"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <span className="calendar-month-year">
            {MONTHS[currentMonth.getMonth()]} {currentMonth.getFullYear()}
          </span>
          <button
            className="calendar-nav-btn"
            onClick={goToNextMonth}
            aria-label="Następny miesiąc"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>

        <div className="calendar-weekdays">
          {DAYS_SHORT.map(day => (
            <div key={day} className="weekday">{day}</div>
          ))}
        </div>

        <div className="calendar-grid">
          {calendarDays}
        </div>

        <div className="calendar-legend">
          <div className="legend-item">
            <span className="legend-dot available"></span>
            <span>Dostępny</span>
          </div>
          <div className="legend-item">
            <span className="legend-dot busy"></span>
            <span>Zajęty</span>
          </div>
          <div className="legend-item">
            <span className="legend-dot selected"></span>
            <span>Wybrany</span>
          </div>
        </div>
      </div>

      {selectedDate && (
        <div className="time-slots-container">
          <h4 className="time-slots-title">
            Dostępne godziny - {selectedDate.getDate()} {MONTHS[selectedDate.getMonth()]}
          </h4>
          <div className="time-slots-grid">
            {DEFAULT_TIME_SLOTS.map(time => {
              const isBusy = isSlotBusy(selectedDate, time)
              const isPast = isTimeSlotPast(selectedDate, time)
              const isSelected = selectedTime === time
              const isDisabled = isBusy || isPast

              let className = 'time-slot'
              if (isDisabled) className += ' disabled'
              if (isBusy) className += ' busy'
              if (isSelected) className += ' selected'

              return (
                <button
                  key={time}
                  className={className}
                  onClick={() => handleTimeSelect(time)}
                  disabled={isDisabled}
                  title={isBusy ? 'Termin zajęty' : isPast ? 'Termin minął' : 'Dostępny'}
                >
                  {time}
                  {isBusy && (
                    <svg className="busy-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  )}
                </button>
              )
            })}
          </div>
        </div>
      )}

      {selectedDate && selectedTime && (
        <div className="selected-datetime">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
          <span>
            Wybrany termin: <strong>{selectedDate.getDate()} {MONTHS[selectedDate.getMonth()]} {selectedDate.getFullYear()}</strong> o godzinie <strong>{selectedTime}</strong>
          </span>
        </div>
      )}

      <div className="calendar-instructions">
        <p>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
          Liczby na dniach pokazują ilość wolnych terminów. Kliknij dzień, aby wybrać godzinę.
        </p>
      </div>
    </div>
  )
}

export default BookingCalendar
