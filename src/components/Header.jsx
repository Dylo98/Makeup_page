import { useState } from 'react'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (e, sectionId) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="header">
      <div className="header-container">
        <a href="#hero" className="logo" onClick={(e) => scrollToSection(e, 'hero')}>
          <span className="logo-text">Anna Kowalska</span>
          <span className="logo-subtitle">Makeup Artist</span>
        </a>

        <button
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')}>O mnie</a></li>
            <li><a href="#services" onClick={(e) => scrollToSection(e, 'services')}>Usługi</a></li>
            <li><a href="#portfolio" onClick={(e) => scrollToSection(e, 'portfolio')}>Portfolio</a></li>
            <li><a href="#testimonials" onClick={(e) => scrollToSection(e, 'testimonials')}>Opinie</a></li>
            <li><a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="nav-cta">Kontakt</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
