import './WorkExperience.css';

export default function WorkExperience() {
  return (
    <section id="experience" className="app-container">
      <div className="section-header">
        <h2 className="section-title">Work Experience</h2>
        <p className="section-subtitle">Professional history collaborating in teams and building interactive products.</p>
      </div>

      <div className="experience-container">
        <div className="glass-card experience-card">
          <div className="experience-header">
            <div>
              <h3 className="company-title">English Club</h3>
              <div className="company-role">Frontend Developer</div>
            </div>
            <span className="badge badge-primary experience-date">November 2025</span>
          </div>

          <p className="company-description">
            A language learning platform focused on real-time oral sentence construction and interactive feedback to improve English proficiency.
          </p>

          <ul className="achievements-list">
            <li className="achievement-item">
              <div className="achievement-icon-wrapper">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div className="achievement-text">
                Co-built the reading comprehension module in <span className="highlight-stat">React</span> alongside a teammate, as part of a language-learning platform for real-time oral practice.
              </div>
            </li>

            <li className="achievement-item">
              <div className="achievement-icon-wrapper">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div className="achievement-text">
                Connected the reading module's frontend to the backend using <span className="highlight-stat">Axios</span>, learning the library from scratch within <span className="highlight-secondary">3 days</span> to meet a hard project deadline.
              </div>
            </li>

            <li className="achievement-item">
              <div className="achievement-icon-wrapper">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div className="achievement-text">
                Increased session completion <span className="highlight-stat">50%</span> among <span className="highlight-secondary">6 active pilot users</span> by redesigning the student dashboard UI.
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
