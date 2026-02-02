function Services() {
  const services = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      ),
      title: 'Makijaż ślubny',
      description: 'Perfekcyjny makijaż na Twój wyjątkowy dzień. Trwały, elegancki i dopasowany do Twojego stylu.',
      price: 'od 350 zł',
      features: ['Próbny makijaż', 'Produkty premium', 'Dojazd w cenie']
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10"></circle>
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
        </svg>
      ),
      title: 'Makijaż wieczorowy',
      description: 'Wyrazisty makijaż na specjalne okazje - bale, gale, przyjęcia i imprezy.',
      price: 'od 200 zł',
      features: ['Trwała formuła', 'Dopasowany do kreacji', 'Korekta konturu']
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <circle cx="8.5" cy="8.5" r="1.5"></circle>
          <polyline points="21 15 16 10 5 21"></polyline>
        </svg>
      ),
      title: 'Makijaż do sesji',
      description: 'Profesjonalny makijaż fotograficzny i do sesji wideo. Idealny do każdego ujęcia.',
      price: 'od 250 zł',
      features: ['HD ready', 'Współpraca z fotografem', 'Poprawki w trakcie']
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
          <path d="M2 17l10 5 10-5"></path>
          <path d="M2 12l10 5 10-5"></path>
        </svg>
      ),
      title: 'Lekcja makijażu',
      description: 'Indywidualna nauka makijażu dostosowana do Twoich potrzeb i umiejętności.',
      price: 'od 300 zł',
      features: ['2h lekcji', 'Lista produktów', 'Techniki dopasowane do Ciebie']
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      title: 'Makijaż grupowy',
      description: 'Usługi dla grup - wieczory panieńskie, druhen, matki i teściowej.',
      price: 'od 150 zł/os',
      features: ['Rabaty grupowe', 'Dojazd do lokalizacji', 'Elastyczne terminy']
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>
      ),
      title: 'Makijaż dzienny',
      description: 'Naturalny, lekki makijaż na co dzień lub spotkania biznesowe.',
      price: 'od 120 zł',
      features: ['Naturalny efekt', 'Szybka realizacja', 'Produkty mineralne']
    }
  ]

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Oferta</span>
          <h2 className="section-title">Moje usługi</h2>
          <p className="section-description">
            Oferuję szeroki zakres usług makijażowych dostosowanych do Twoich potrzeb
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, i) => (
                  <li key={i}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="service-price">{service.price}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
