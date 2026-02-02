import { useState } from 'react'

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: 'Magdalena K.',
      role: 'Panna Młoda',
      text: 'Anna wykonała mój makijaż ślubny i jestem zachwycona! Makijaż przetrwał cały dzień i wieczór, a ja czułam się piękna. Polecam z całego serca!',
      rating: 5
    },
    {
      id: 2,
      name: 'Katarzyna W.',
      role: 'Klientka',
      text: 'Profesjonalizm na najwyższym poziomie. Anna doskonale dobrała kolory do mojej karnacji i kreacji. Makijaż był dokładnie taki, jak sobie wymarzyłam.',
      rating: 5
    },
    {
      id: 3,
      name: 'Joanna M.',
      role: 'Modelka',
      text: 'Współpracuję z Anną przy sesjach zdjęciowych i zawsze mogę liczyć na perfekcyjny makijaż. Jest kreatywna, precyzyjna i świetnie rozumie potrzeby fotografa.',
      rating: 5
    },
    {
      id: 4,
      name: 'Aleksandra P.',
      role: 'Panna Młoda',
      text: 'Dziękuję za cudowny makijaż na mój wielki dzień! Anna jest nie tylko świetną makijażystką, ale też wspaniałą osobą, która potrafi uspokoić przedślubne nerwy.',
      rating: 5
    }
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Opinie</span>
          <h2 className="section-title">Co mówią klientki</h2>
          <p className="section-description">
            Przeczytaj opinie osób, które skorzystały z moich usług
          </p>
        </div>

        <div className="testimonials-slider">
          <button className="slider-btn prev" onClick={prevTestimonial} aria-label="Previous">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <div className="testimonials-track">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`testimonial-card ${index === currentIndex ? 'active' : ''}`}
              >
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="author-info">
                    <span className="author-name">{testimonial.name}</span>
                    <span className="author-role">{testimonial.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="slider-btn next" onClick={nextTestimonial} aria-label="Next">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>

        <div className="testimonials-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
