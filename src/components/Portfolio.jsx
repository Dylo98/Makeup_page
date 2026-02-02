import { useState } from 'react'

function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'Wszystkie' },
    { id: 'bridal', name: 'Ślubne' },
    { id: 'evening', name: 'Wieczorowe' },
    { id: 'photoshoot', name: 'Sesje' }
  ]

  const portfolioItems = [
    { id: 1, category: 'bridal', title: 'Makijaż ślubny klasyczny' },
    { id: 2, category: 'evening', title: 'Glamour wieczorowy' },
    { id: 3, category: 'photoshoot', title: 'Sesja edytorialna' },
    { id: 4, category: 'bridal', title: 'Ślubny romantyczny' },
    { id: 5, category: 'evening', title: 'Smoky eyes' },
    { id: 6, category: 'photoshoot', title: 'Beauty session' },
    { id: 7, category: 'bridal', title: 'Ślubny naturalny' },
    { id: 8, category: 'evening', title: 'Red carpet look' }
  ]

  const filteredItems = activeCategory === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory)

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">Moje realizacje</h2>
          <p className="section-description">
            Zobacz wybrane prace z mojego portfolio
          </p>
        </div>

        <div className="portfolio-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredItems.map(item => (
            <div key={item.id} className="portfolio-item">
              <div className="portfolio-image">
                <div className="portfolio-placeholder">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                  </svg>
                </div>
              </div>
              <div className="portfolio-overlay">
                <h3 className="portfolio-title">{item.title}</h3>
                <span className="portfolio-category">
                  {categories.find(c => c.id === item.category)?.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="portfolio-cta">
          <p>Chcesz zobaczyć więcej moich prac?</p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            Odwiedź mój Instagram
          </a>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
