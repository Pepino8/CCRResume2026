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
      date: 'Marzo 2025 - Presente',
      award: '1er Lugar, Expo Ingeniería',
      description: 'Aplicación móvil que provee información en tiempo real sobre rutas y horarios de autobuses en Ensenada, México, mejorando significativamente la accesibilidad del transporte público.',
      bullets: [
        'Construí el 90% de las pantallas frontend desde cero usando React Native (Expo, TypeScript) dentro de un equipo Scrum de 6 personas en 6 sprints.',
        'Implementé mapas interactivos con Mapbox y gestioné estados complejos en tiempo real con Zustand.',
        'Validé el producto con más de 100 estudiantes en Ensenada, logrando un 60% de mejora en la percepción de accesibilidad del transporte.'
      ],
      tags: ['React Native', 'Expo', 'TypeScript', 'Mapbox', 'Zustand', 'Scrum', 'UX/UI'],
      extraDetails: {
        architecture: 'Arquitectura limpia en React Native + Store Centralizado de Zustand. Sincronización continua de GPS mediante sockets y Renderizado GeoJSON dinámico en Mapbox SDK.',
        impact: 'Logró agilizar los tiempos de espera de los estudiantes de CETYS al proveer predicciones certeras y visuales del transporte.',
        metrics: [
          { label: 'Pantallas Creadas', value: '90%' },
          { label: 'Usuarios de Prueba', value: '100+' },
          { label: 'Mejora en Acceso', value: '60%' }
        ]
      }
    },
    {
      id: 'leetarena',
      title: 'LeetArena',
      category: 'frontend',
      categoryLabel: 'Web App',
      date: 'Septiembre 2025 - Presente',
      description: 'Plataforma web competitiva en tiempo real para organizar torneos y entrenamientos de programación de estilo LeetCode entre entusiastas y miembros del club.',
      bullets: [
        'Diseñé y construí la interfaz de usuario completa en React (Vite) para una plataforma activa de más de 40 competidores del club universitario.',
        'Creé componentes altamente reutilizables y layouts dinámicos optimizando los tiempos de render para tablas de clasificación en vivo.'
      ],
      tags: ['React', 'Vite', 'TypeScript', 'CSS Modules', 'Tailwind', 'Realtime UI'],
      extraDetails: {
        architecture: 'Desarrollado sobre Vite para carga ultra-rápida. Componentes de UI modulares y optimizados para evitar re-renders masivos al actualizar rankings en tiempo real.',
        impact: 'Fomentó la participación activa en el club de programación algorítmica de CETYS, sirviendo de práctica real para competencias ICPC.',
        metrics: [
          { label: 'Miembros Activos', value: '40+' },
          { label: 'Tiempo de Carga', value: '< 1s' },
          { label: 'Componentes Reutilizables', value: '15+' }
        ]
      }
    },
    {
      id: 'rachel-autoposter',
      title: 'Rachel AutoPoster',
      category: 'fullstack',
      categoryLabel: 'Fullstack App',
      date: 'Julio 2025 - Presente',
      description: 'Sistema completo diseñado para automatizar y optimizar la publicación y gestión de pedidos de GameFlip, reduciendo tiempos operativos al mínimo.',
      bullets: [
        'Reduje el tiempo de integración de características en un 75% (de 1 mes a 1 semana) mediante una arquitectura modular en Node.js y Express.',
        'Aseguré y documenté 21 endpoints RESTful en SQLite aplicando limitadores de tasa (rate limiting) de 100 peticiones por cada 15 minutos por IP.',
        'Reduje el tiempo de despliegue de 3 minutos a solo 30 segundos (83% más rápido) configurando un flujo de CI/CD automatizado con Docker y Render.',
        'Creé 12 componentes interactivos reutilizables en React (Vite) + Tailwind/MUI para carga de imágenes, búsquedas y paneles de administración.'
      ],
      tags: ['Node.js', 'Express', 'SQLite', 'Docker', 'React', 'Vite', 'CI/CD', 'MUI'],
      extraDetails: {
        architecture: 'Separación completa de base de datos e interfaz con API REST modular en Express, persistida en SQLite con transacciones ACID. Contenedores Docker orquestados para despliegues automatizados.',
        impact: 'Automatización total de inventarios digitales, evitando retrasos de publicación manual y previniendo ataques de denegación de servicio.',
        metrics: [
          { label: 'Endpoints CRUD', value: '21' },
          { label: 'Integración veloz', value: '-75%' },
          { label: 'Despliegue CI/CD', value: '30s' }
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
        <h2 className="section-title">Proyectos Destacados</h2>
        <p className="section-subtitle">Una selección de mis trabajos más representativos en desarrollo web, móvil e integraciones fullstack.</p>
      </div>

      <div className="projects-filter-bar">
        <button 
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          Todos
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
                  {isExpanded ? 'Ocultar Detalles' : 'Ver Detalles y Métricas'}
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
                    <strong>Arquitectura:</strong> {project.extraDetails.architecture}
                  </div>
                  <div>
                    <strong>Impacto:</strong> {project.extraDetails.impact}
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
