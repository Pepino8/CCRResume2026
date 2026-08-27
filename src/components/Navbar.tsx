import { useState } from 'react';
import './Navbar.css';

interface NavbarProps {
  theme: string;
  toggleTheme: () => void;
}

export default function Navbar({ theme, toggleTheme }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        <div className="navbar-logo">
          Cristobal<span>Coronado</span>
        </div>

        <nav>
          <ul className={`navbar-links ${mobileMenuOpen ? 'active' : ''}`}>
            <li className="navbar-link">
              <a href="#about" onClick={() => setMobileMenuOpen(false)}>Sobre Mí</a>
            </li>
            <li className="navbar-link">
              <a href="#experience" onClick={() => setMobileMenuOpen(false)}>Experiencia</a>
            </li>
            <li className="navbar-link">
              <a href="#projects" onClick={() => setMobileMenuOpen(false)}>Proyectos</a>
            </li>
            <li className="navbar-link">
              <a href="#skills" onClick={() => setMobileMenuOpen(false)}>Habilidades</a>
            </li>
            <li className="navbar-link">
              <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contacto</a>
            </li>
          </ul>
        </nav>

        <div className="navbar-actions">
          {/* Print CV */}
          <button 
            className="icon-btn" 
            onClick={handlePrint}
            title="Imprimir / Guardar PDF"
            aria-label="Imprimir CV"
          >
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <polyline points="6 9 6 2 18 2 18 9"></polyline>
              <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
              <rect x="6" y="14" width="12" height="8"></rect>
            </svg>
          </button>

          {/* Theme Toggle */}
          <button 
            className="icon-btn theme-toggle" 
            onClick={toggleTheme}
            title={theme === 'dark' ? 'Modo Claro' : 'Modo Oscuro'}
            aria-label="Cambiar tema"
          >
            {theme === 'dark' ? (
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            ) : (
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            className="icon-btn mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            title="Menu"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? (
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
