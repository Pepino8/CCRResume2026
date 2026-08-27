import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  const [theme, setTheme] = useState<string>(() => {
    const saved = localStorage.getItem('theme');
    return saved || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="app-wrapper">
      {/* Background Decorative Elements */}
      <div className="glow-blob blob-1"></div>
      <div className="glow-blob blob-2"></div>
      <div className="glow-blob blob-3"></div>

      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main className="main-content">
        <Hero />
        <WorkExperience />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <footer className="footer">
        <div className="app-container">
          <p>
            Diseñado y desarrollado con{' '}
            <span className="footer-heart">❤️</span> por Cristobal Coronado Romo © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
