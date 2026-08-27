import { useState } from 'react';
import './Projects.css';

interface Project {
  id: string;
  title: string;
  category: 'mobile' | 'frontend' | 'fullstack';
  categoryLabel: string;
  date: string;
  award?: string;
  description: string;
  bullets: string[];
  tags: string[];
  extraDetails: {
    architecture: string;
    impact: string;
    metrics: { label: string; value: string }[];
  };
}

export default function Projects() {
  const [filter, setFilter] = useState<'all' | 'mobile' | 'frontend' | 'fullstack'>('all');
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);

  const projects: Project[] = [
    {
      id: 'smart-bussing',
      title: 'Smart Bussing',
      category: 'mobile',
      categoryLabel: 'Mobile App',
      date: 'March 2025 - Present',
      award: '1st Place, Engineering Expo',
      description: 'A mobile application that provides real-time information on bus routes and times in Ensenada, Mexico, significantly improving public transit accessibility.',
      bullets: [
        'Built 90% of the front-end screens from scratch using React Native (Expo, TypeScript) within a 6-person Scrum team across 6 sprints.',
        'Implemented interactive maps with Mapbox and managed complex real-time states with Zustand.',
        'Validated the product with over 100 student testers in Ensenada, driving a 60% improvement in perceived transit accessibility.'
      ],
      tags: ['React Native', 'Expo', 'TypeScript', 'Mapbox', 'Zustand', 'Scrum', 'UX/UI'],
      extraDetails: {
        architecture: 'Clean architecture in React Native + centralized Zustand store. Continuous GPS synchronization using websockets and dynamic GeoJSON rendering on Mapbox SDK.',
        impact: 'Successfully reduced CETYS student wait times by providing accurate and visual transit predictions.',
        metrics: [
          { label: 'Screens Built', value: '90%' },
          { label: 'Test Users', value: '100+' },
          { label: 'Accessibility Gain', value: '60%' }
        ]
      }
    },
    {
      id: 'leetarena',
      title: 'LeetArena',
      category: 'frontend',
      categoryLabel: 'Web App',
      date: 'September 2025 - Present',
      description: 'Real-time competitive web platform for organizing LeetCode-style programming tournaments and training for club members and enthusiasts.',
      bullets: [
        'Designed and built the complete user interface in React (Vite) for an active platform of over 40 university club competitors.',
        'Created highly reusable components and dynamic layouts, optimizing render times for live leaderboards.'
      ],
      tags: ['React', 'Vite', 'TypeScript', 'CSS Modules', 'Tailwind', 'Realtime UI'],
      extraDetails: {
        architecture: 'Developed on top of Vite for ultra-fast load speeds. Modular UI components optimized to prevent massive re-renders during real-time ranking updates.',
        impact: 'Fostered active participation in the CETYS algorithmic programming club, serving as practical prep for ICPC competitions.',
        metrics: [
          { label: 'Active Members', value: '40+' },
          { label: 'Load Time', value: '< 1s' },
          { label: 'Reusable Components', value: '15+' }
        ]
      }
    },
    {
      id: 'rachel-autoposter',
      title: 'Rachel AutoPoster',
      category: 'fullstack',
      categoryLabel: 'Fullstack App',
      date: 'July 2025 - Present',
      description: 'Comprehensive system designed to automate and optimize the posting and management of GameFlip orders, reducing manual operations to a minimum.',
      bullets: [
        'Cut feature integration time by 75% (from 1 month to 1 week) by architecting a modular full-stack API in Node.js and Express.',
        'Secured and documented 21 RESTful SQLite endpoints, applying rate limiting capped at 100 requests per 15 minutes per IP.',
        'Cut deployment time from 3 minutes to just 30 seconds (83% faster) by setting up a Docker-based automated CI/CD pipeline on Render.',
        'Created 12 reusable React (Vite) + Tailwind/MUI frontend components for image upload, searchable listings, and dashboard views.'
      ],
      tags: ['Node.js', 'Express', 'SQLite', 'Docker', 'React', 'Vite', 'CI/CD', 'MUI'],
      extraDetails: {
        architecture: 'Complete decoupling of database and interface with modular Express REST API, persisted on SQLite with ACID transactions. Orchestrated Docker containers for automated releases.',
        impact: 'Complete digital inventory automation, preventing manual publishing delays and securing endpoints against denial of service attacks.',
        metrics: [
          { label: 'CRUD Endpoints', value: '21' },
          { label: 'Integration Speedup', value: '-75%' },
          { label: 'CI/CD Deploy', value: '30s' }
        ]
      }
    }
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  const toggleDetails = (id: string) => {
    if (expandedProjectId === id) {
      setExpandedProjectId(null);
    } else {
      setExpandedProjectId(id);
    }
  };

  return (
    <section id="projects" className="app-container">
      <div className="section-header">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">A selection of my most representative works in web, mobile, and full-stack integrations.</p>
      </div>

      <div className="projects-filter-bar">
        <button 
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button 
          className={`filter-btn ${filter === 'mobile' ? 'active' : ''}`}
          onClick={() => setFilter('mobile')}
        >
          Mobile
        </button>
        <button 
          className={`filter-btn ${filter === 'frontend' ? 'active' : ''}`}
          onClick={() => setFilter('frontend')}
        >
          Frontend
        </button>
        <button 
          className={`filter-btn ${filter === 'fullstack' ? 'active' : ''}`}
          onClick={() => setFilter('fullstack')}
        >
          Fullstack
        </button>
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project) => {
          const isExpanded = expandedProjectId === project.id;
          return (
            <div className="glass-card project-card" key={project.id}>
              <div className="project-card-header">
                <div>
                  <span className="project-category">{project.categoryLabel}</span>
                  <h3 className="project-title">{project.title}</h3>
                </div>
                {project.award && (
                  <span className="project-award">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                    {project.award}
                  </span>
                )}
              </div>

              <p className="project-description">{project.description}</p>

              <ul className="project-bullet-list">
                {project.bullets.map((bullet, idx) => (
                  <li className="project-bullet-item" key={idx}>
                    <span className="project-bullet-icon">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span className="badge" key={tag}>{tag}</span>
                ))}
              </div>

              <div className="project-actions">
                <button 
                  className="project-details-btn"
                  onClick={() => toggleDetails(project.id)}
                >
                  {isExpanded ? 'Hide Details' : 'View Details & Metrics'}
                  <svg 
                    width="14" 
                    height="14" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.5"
                    style={{ transform: isExpanded ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
                <span className="badge badge-secondary">{project.date}</span>
              </div>

              {isExpanded && (
                <div className="project-details-panel">
                  <div>
                    <strong>Architecture:</strong> {project.extraDetails.architecture}
                  </div>
                  <div>
                    <strong>Impact:</strong> {project.extraDetails.impact}
                  </div>
                  <div className="details-stat-grid" style={{ marginTop: '8px' }}>
                    {project.extraDetails.metrics.map((m, i) => (
                      <div className="details-stat-box" key={i}>
                        <div className="details-stat-val">{m.value}</div>
                        <div className="details-stat-lbl">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
