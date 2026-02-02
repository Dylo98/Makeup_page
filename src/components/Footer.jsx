function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <a href="#hero" className="footer-logo">
              <span className="logo-text">Anna Kowalska</span>
              <span className="logo-subtitle">Makeup Artist</span>
            </a>
            <p className="footer-tagline">
              Profesjonalny makijaż, który podkreśla Twoje naturalne piękno.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Menu</h4>
              <ul>
                <li><a href="#about">O mnie</a></li>
                <li><a href="#services">Usługi</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#testimonials">Opinie</a></li>
                <li><a href="#contact">Kontakt</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Usługi</h4>
              <ul>
                <li><a href="#services">Makijaż ślubny</a></li>
                <li><a href="#services">Makijaż wieczorowy</a></li>
                <li><a href="#services">Makijaż do sesji</a></li>
                <li><a href="#services">Lekcje makijażu</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Kontakt</h4>
              <ul>
                <li>
                  <a href="tel:+48123456789">+48 123 456 789</a>
                </li>
                <li>
                  <a href="mailto:kontakt@annakowalska.pl">kontakt@annakowalska.pl</a>
                </li>
                <li>Warszawa i okolice</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} Anna Kowalska. Wszystkie prawa zastrzeżone.
          </p>
          <div className="footer-social">
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
    </footer>
  )
}

export default Footer
