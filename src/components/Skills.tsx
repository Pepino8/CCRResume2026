import './Skills.css';

export default function Skills() {
  const languages = [
    { name: 'Java', level: 'Advanced', levelLabel: 'Avanzado', val: 90 },
    { name: 'JavaScript', level: 'Advanced', levelLabel: 'Avanzado', val: 90 },
    { name: 'TypeScript', level: 'Advanced', levelLabel: 'Avanzado', val: 90 },
    { name: 'Python', level: 'Advanced', levelLabel: 'Avanzado', val: 85 },
    { name: 'SQL', level: 'Advanced', levelLabel: 'Avanzado', val: 85 },
    { name: 'Swift', level: 'Proficient', levelLabel: 'Intermedio', val: 70 },
    { name: 'C', level: 'Beginner', levelLabel: 'Principiante', val: 45 },
    { name: 'C++', level: 'Beginner', levelLabel: 'Principiante', val: 40 },
  ];

  const frameworks = [
    'React',
    'React Native',
    'Next.js',
    'Node.js',
    'Express',
    'Spring / Spring Boot',
    'PostgreSQL',
    'MongoDB',
    'RESTful APIs',
    'JWT',
    'Docker',
    'CI/CD (Render deploy)',
    'JUnit',
    'Git/GitHub',
    'Vercel',
    'NumPy',
    'SymPy',
    'JSON',
  ];

  const awards = [
    {
      title: '1er Lugar, Expo Ingeniería CETYS',
      year: '2026',
      desc: 'Ganador de la competencia académica anual de CETYS Universidad con proyecto de ingeniería.',
    },
    {
      title: '1er Lugar, Expo Ingeniería CETYS',
      year: '2025',
      desc: 'Máximo galardón académico de proyectos por el desarrollo de Smart Bussing.',
    },
    {
      title: '3er Lugar, NASA Space Apps Challenge',
      year: '2024',
      desc: 'Hackathon internacional resolviendo retos espaciales y científicos de la NASA.',
    },
    {
      title: 'Participación Destacada, ICPC',
      year: '2025',
      desc: 'Competidor activo en el International Collegiate Programming Contest.',
    },
  ];

  return (
    <section id="skills" className="app-container">
      <div className="section-header">
        <h2 className="section-title">Habilidades y Logros</h2>
        <p className="section-subtitle">Dominio técnico de lenguajes, frameworks, herramientas de desarrollo y reconocimientos.</p>
      </div>

      <div className="skills-grid">
        {/* Column 1: Languages */}
        <div className="glass-card" style={{ padding: '24px' }}>
          <h3 className="skills-column-title">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
            Lenguajes
          </h3>

          <div className="lang-items">
            {languages.map((lang) => (
              <div className="lang-group" key={lang.name}>
                <div className="lang-row">
                  <span className="lang-name">{lang.name}</span>
                  <span className={`lang-level-badge level-${lang.level.toLowerCase()}`}>
                    {lang.levelLabel}
                  </span>
                </div>
                <div className="progress-bar-bg">
                  <div 
                    className={`progress-bar-fill fill-${lang.level.toLowerCase()}`}
                    style={{ width: `${lang.val}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Column 2: Frameworks & Tools */}
        <div className="glass-card" style={{ padding: '24px' }}>
          <h3 className="skills-column-title">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
            </svg>
            Frameworks y Herramientas
          </h3>

          <div className="tools-cloud">
            {frameworks.map((tool) => (
              <span className="tool-tag" key={tool}>
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Column 3: Awards */}
        <div className="glass-card" style={{ padding: '24px' }}>
          <h3 className="skills-column-title">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="8" r="7"></circle>
              <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
            </svg>
            Premios y Logros
          </h3>

          <div className="awards-list">
            {awards.map((award, index) => (
              <div className="award-card" key={index}>
                <div className="award-icon-box">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                    <path d="M4 22h16"></path>
                    <path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34"></path>
                    <path d="M12 2a4 4 0 0 0-4 4v5c0 2.2 1.8 4 4 4s4-1.8 4-4V6a4 4 0 0 0-4-4z"></path>
                  </svg>
                </div>
                <div className="award-info">
                  <h4>{award.title}</h4>
                  <p>{award.desc}</p>
                  <span className="badge" style={{ marginTop: '6px', fontSize: '0.7rem', padding: '2px 6px' }}>{award.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
