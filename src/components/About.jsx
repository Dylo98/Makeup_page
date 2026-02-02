function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-image">
            <div className="about-image-wrapper">
              <div className="about-image-placeholder">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <span>Zdjęcie</span>
              </div>
            </div>
            <div className="about-experience">
              <span className="experience-number">10+</span>
              <span className="experience-text">lat doświadczenia</span>
            </div>
          </div>

          <div className="about-content">
            <span className="section-label">O mnie</span>
            <h2 className="section-title">Cześć, jestem Anna!</h2>
            <p className="about-text">
              Od ponad 10 lat zajmuję się profesjonalnym makijażem. Moja przygoda z branżą beauty
              rozpoczęła się od pasji do podkreślania naturalnego piękna każdej kobiety.
            </p>
            <p className="about-text">
              Ukończyłam prestiżowe kursy makijażu w Polsce i za granicą. Stale poszerzam swoją
              wiedzę, śledząc najnowsze trendy i techniki, aby oferować usługi na najwyższym poziomie.
            </p>
            <p className="about-text">
              Każda twarz jest dla mnie jak płótno, na którym tworzę dzieło sztuki. Moim celem
              jest sprawić, abyś poczuła się piękna i pewna siebie.
            </p>

            <div className="about-stats">
              <div className="stat">
                <span className="stat-number">500+</span>
                <span className="stat-label">Zadowolonych klientek</span>
              </div>
              <div className="stat">
                <span className="stat-number">200+</span>
                <span className="stat-label">Makijaży ślubnych</span>
              </div>
              <div className="stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Sesji zdjęciowych</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
