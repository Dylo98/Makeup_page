import { useState } from 'react'
import BookingCalendar from './BookingCalendar'

// KONFIGURACJA: Ustaw tutaj link do publicznego kalendarza iCloud
// Aby uzyskać link:
// 1. Otwórz Kalendarz na iPhone/Mac
// 2. Wybierz kalendarz, który chcesz udostępnić
// 3. Kliknij "Udostępnij kalendarz" (Share Calendar)
// 4. Włącz "Kalendarz publiczny" (Public Calendar)
// 5. Skopiuj link i wklej poniżej
const CALENDAR_URL = null // np. 'https://p123-caldav.icloud.com/published/2/xxx...'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    datetime: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleDateTimeSelect = (datetime) => {
    setFormData({
      ...formData,
      datetime: datetime
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    alert('Dziękuję za wiadomość! Odpowiem najszybciej jak to możliwe.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      datetime: '',
      message: ''
    })
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Kontakt</span>
          <h2 className="section-title">Umów się na wizytę</h2>
          <p className="section-description">
            Wybierz dogodny termin z kalendarza poniżej i wypełnij formularz, aby zarezerwować wizytę.
            Odpowiadam na wiadomości w ciągu 24 godzin.
          </p>
        </div>

        <div className="contact-calendar-section">
          <BookingCalendar
            onDateTimeSelect={handleDateTimeSelect}
            selectedDateTime={formData.datetime}
            calendarUrl={CALENDAR_URL}
          />
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <h3 className="contact-info-title">Dane kontaktowe</h3>
            <p className="contact-description">
              Masz pytania lub chcesz zarezerwować termin? Skontaktuj się ze mną!
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div className="contact-text">
                  <span className="contact-label">Telefon</span>
                  <a href="tel:+48123456789">+48 123 456 789</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div className="contact-text">
                  <span className="contact-label">Email</span>
                  <a href="mailto:kontakt@annakowalska.pl">kontakt@annakowalska.pl</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className="contact-text">
                  <span className="contact-label">Lokalizacja</span>
                  <span>Warszawa i okolice</span>
                </div>
              </div>
            </div>

            <div className="contact-social">
              <span className="social-label">Znajdziesz mnie też na:</span>
              <div className="social-links">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Imię i nazwisko *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Anna Nowak"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="anna@example.com"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Telefon</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+48 123 456 789"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="service">Rodzaj usługi *</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Wybierz usługę</option>
                    <option value="bridal">Makijaż ślubny</option>
                    <option value="evening">Makijaż wieczorowy</option>
                    <option value="photoshoot">Makijaż do sesji</option>
                    <option value="lesson">Lekcja makijażu</option>
                    <option value="group">Makijaż grupowy</option>
                    <option value="daily">Makijaż dzienny</option>
                    <option value="other">Inne</option>
                  </select>
                </div>
              </div>

              {formData.datetime && (
                <div className="form-group">
                  <label>Wybrany termin</label>
                  <div className="selected-booking-datetime">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    <span>{formData.datetime.replace(' ', ' o godzinie ')}</span>
                  </div>
                </div>
              )}

              {!formData.datetime && (
                <div className="form-group">
                  <label>Wybrany termin</label>
                  <p className="form-hint">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    Wybierz termin z kalendarza powyżej
                  </p>
                </div>
              )}

              <div className="form-group">
                <label htmlFor="message">Wiadomość *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder="Opisz swoje oczekiwania..."
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-full">
                Wyślij wiadomość
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
