function Hero() {
  const scrollToContact = (e) => {
    e.preventDefault()
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <p className="hero-subtitle">Profesjonalny makijaż</p>
        <h1 className="hero-title">
          Podkreśl swoje <span className="highlight">naturalne piękno</span>
        </h1>
        <p className="hero-description">
          Tworzę makijaże, które podkreślają Twoją indywidualność i sprawiają,
          że czujesz się wyjątkowo w każdej chwili.
        </p>
        <div className="hero-buttons">
          <a href="#contact" className="btn btn-primary" onClick={scrollToContact}>
            Umów wizytę
          </a>
          <a href="#portfolio" className="btn btn-secondary" onClick={(e) => {
            e.preventDefault()
            document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })
          }}>
            Zobacz portfolio
          </a>
        </div>
      </div>
      <div className="hero-scroll">
        <span>Przewiń w dół</span>
        <div className="scroll-indicator"></div>
      </div>
    </section>
  )
}

export default Hero
