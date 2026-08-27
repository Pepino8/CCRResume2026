import { useEffect, useState } from 'react';
import './Hero.css';

export default function Hero() {
  const titles = [
    'Ingeniero de Software',
    'Desarrollador Frontend',
    'Fullstack Developer',
    'Ganador de Hackathons'
  ];

  const [currentTitleIdx, setCurrentTitleIdx] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const fullText = titles[currentTitleIdx];

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(100);

        if (currentText === fullText) {
          // Pause at peak
          timer = setTimeout(() => setIsDeleting(true), 1500);
          return;
        }
      } else {
        // Deleting
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(50);

        if (currentText === '') {
          setIsDeleting(false);
          setCurrentTitleIdx((prev) => (prev + 1) % titles.length);
          return;
        }
      }

      timer = setTimeout(handleTyping, typingSpeed);
    };

    timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentTitleIdx, typingSpeed]);

  return (
    <section id="about" className="hero-section app-container animate-fade-in">
      <div className="hero-content">
        <span className="hero-subtitle">Hola, mi nombre es</span>
        <h1 className="hero-title">
          <span className="text-gradient">Cristobal Coronado</span>
        </h1>
        <div className="hero-typing">
          <span>{currentText}</span>
          <span className="hero-cursor"></span>
        </div>
        <p className="hero-description">
          Estudiante de Ingeniería de Software en CETYS Universidad, apasionado por crear aplicaciones web y móviles de alto impacto. Especializado en React, React Native y Node.js, con experiencia liderando el desarrollo frontend en equipos Scrum y diseñando soluciones full-stack escalables.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            Ver Proyectos
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
          <a href="#contact" className="btn btn-secondary">Contactar</a>
        </div>

        <div className="hero-socials">
          <a href="https://github.com/Pepino8" target="_blank" rel="noopener noreferrer" className="social-link" title="GitHub">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/cristobal-coronado-abb229333/" target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          <a href="mailto:cristobal.coronado@cetys.edu.mx" className="social-link" title="Email">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </a>
          <a href="tel:+526462568363" className="social-link" title="Teléfono">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </a>
        </div>
      </div>

      <div className="hero-visual">
        {/* Profile Card */}
        <div className="glass-card profile-card">
          <div className="profile-header">
            <div className="profile-avatar-container">
              CC
            </div>
            <div className="profile-info">
              <h3>Cristobal Coronado</h3>
              <p>Software Engineering @ CETYS</p>
            </div>
          </div>
        </div>

        {/* Education Card */}
        <div className="glass-card education-card">
          <div className="edu-icon-wrapper">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
              <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
            </svg>
          </div>
          <div className="edu-details">
            <h4>CETYS Universidad</h4>
            <p>Bachelor of Science in Software Engineering</p>
            <div className="edu-meta">
              <span>Graduación: Julio 2027</span>
              <span>Promedio: 94/100</span>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="stats-bar">
          <div className="stat-item">
            <div className="stat-num">1ro</div>
            <div className="stat-label">Expo CETYS</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">100+</div>
            <div className="stat-label">Tesores</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">+50%</div>
            <div className="stat-label">Eficiencia</div>
          </div>
        </div>
      </div>
    </section>
  );
}
