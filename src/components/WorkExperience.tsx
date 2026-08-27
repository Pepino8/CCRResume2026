import './WorkExperience.css';

export default function WorkExperience() {
  return (
    <section id="experience" className="app-container">
      <div className="section-header">
        <h2 className="section-title">Experiencia Laboral</h2>
        <p className="section-subtitle">Trayectoria profesional colaborando en equipos y creando productos interactivos.</p>
      </div>

      <div className="experience-container">
        <div className="glass-card experience-card">
          <div className="experience-header">
            <div>
              <h3 className="company-title">English Club</h3>
              <div className="company-role">Frontend Developer</div>
            </div>
            <span className="badge badge-primary experience-date">Noviembre 2025</span>
          </div>

          <p className="company-description">
            Plataforma de aprendizaje de idiomas enfocada en la construcción de oraciones orales en tiempo real y retroalimentación interactiva para mejorar la fluidez en inglés.
          </p>

          <ul className="achievements-list">
            <li className="achievement-item">
              <div className="achievement-icon-wrapper">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div className="achievement-text">
                Co-construí el módulo de comprensión lectora en <span className="highlight-stat">React</span> junto con un compañero, como parte de una plataforma de aprendizaje de idiomas para práctica oral en tiempo real.
              </div>
            </li>

            <li className="achievement-item">
              <div className="achievement-icon-wrapper">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div className="achievement-text">
                Conecté el frontend del módulo de lectura con el backend utilizando <span className="highlight-stat">Axios</span>, aprendiendo la biblioteca desde cero en solo <span className="highlight-secondary">3 días</span> para cumplir con una fecha límite de entrega crítica.
              </div>
            </li>

            <li className="achievement-item">
              <div className="achievement-icon-wrapper">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div className="achievement-text">
                Aumenté la finalización de sesiones en un <span className="highlight-stat">50%</span> entre <span className="highlight-secondary">6 usuarios piloto activos</span> mediante el rediseño de la interfaz de usuario del panel de estudiantes.
              </div>
            </li>
          </ul>

          <div style={{ marginTop: '24px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <span className="badge">React</span>
            <span className="badge">Axios</span>
            <span className="badge">UI Redesign</span>
            <span className="badge">REST APIs</span>
            <span className="badge">Scrum Collaboration</span>
          </div>
        </div>
      </div>
    </section>
  );
}
