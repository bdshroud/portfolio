import { projects } from '../data/projects';

export default function ProjectDetail({ projectId, onBack, onSelectProject }) {
  const project = projects.find(p => p.id === projectId);
  if (!project) return null;
  const { detail } = project;
  const otherProjects = detail.otherProjects
    .map(id => projects.find(p => p.id === id))
    .filter(Boolean);

  return (
    <div className="project-page" style={{ paddingTop: '72px' }}>
      <div className="container">
        <div className="back-nav" style={{ paddingTop: '28px' }}>
          <button className="back-btn" onClick={onBack}>
            <i className="fas fa-arrow-left"></i> Back to Projects
          </button>
        </div>

        <div className="project-detail-hero">
          <div className="project-detail-meta">
            {detail.badges.map((b, i) => (
              <span key={i} className={`detail-badge${b.includes('🟢') ? ' live' : ''}`}>
                {b}
              </span>
            ))}
          </div>
          <h1 className="project-detail-title">
            {detail.bigTitle}
            <br />
            <span className="accent">{detail.bigSubtitle}</span>
          </h1>
          <p className="project-detail-desc">{detail.fullDesc}</p>
          <div className="project-detail-links">
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <i className="fas fa-external-link-alt"></i> Live Demo
              </a>
            )}
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              <i className="fab fa-github"></i> GitHub
            </a>
          </div>
        </div>

        <div className="project-main-image">
          <img
            src={project.image}
            alt={project.title}
            onError={e => {
              e.currentTarget.src = project.placeholder;
            }}
          />
        </div>

        <div className="project-content-grid">
          <div className="project-main-content">
            <div className="project-section">
              <h2>
                <i className="fas fa-align-left"></i> Project Overview
              </h2>
              <p>{detail.overview}</p>
            </div>

            <div className="project-section">
              <h2>
                <i className="fas fa-star"></i> Key Features
              </h2>
              <ul>
                {detail.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>

            <div className="project-section">
              <h2>
                <i className="fas fa-exclamation-triangle"></i> Challenges Faced
              </h2>
              <ul>
                {detail.challenges.map((c, i) => (
                  <li key={i}>
                    <strong>{c.title}</strong> — {c.desc}
                  </li>
                ))}
              </ul>
            </div>

            <div className="project-section">
              <h2>
                <i className="fas fa-rocket"></i> Future Improvements
              </h2>
              <ul>
                {detail.improvements.map((imp, i) => (
                  <li key={i}>{imp}</li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="project-sidebar">
            <div className="sidebar-card">
              <h3>
                <i className="fas fa-layer-group"></i> Tech Stack
              </h3>
              <div className="tech-list">
                {detail.techStack.map((t, i) => (
                  <div className="tech-item" key={i}>
                    <div className="tech-icon">
                      {t.iconClass ? (
                        <i
                          className={t.iconClass}
                          style={t.iconColor ? { color: t.iconColor } : {}}
                        ></i>
                      ) : (
                        <img src={t.icon} alt={t.name} />
                      )}
                    </div>
                    <div>
                      <div className="tech-name">{t.name}</div>
                      <div className="tech-role">{t.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="sidebar-card">
              <h3>
                <i className="fas fa-info-circle"></i> Project Info
              </h3>
              <div className="info-list">
                {Object.entries(detail.info).map(([k, v]) => (
                  <div className="info-row" key={k}>
                    <span className="info-label">{k.charAt(0).toUpperCase() + k.slice(1)}</span>
                    <span className={`info-value${typeof v === 'string' && v.includes('🟢') ? ' live-badge' : ''}`}>
                      {v}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>

      {otherProjects.length > 0 && (
        <section className="other-projects">
          <div className="container">
            <div className="section-header">
              <p className="section-label">Explore More</p>
              <h2 className="section-title">
                Other <span className="accent">Projects</span>
              </h2>
              <div className="section-line"></div>
            </div>
            <div className="other-projects-grid">
              {otherProjects.map(p => (
                <button
                  key={p.id}
                  className="mini-project-card"
                  onClick={() => {
                    onSelectProject(p.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    display: 'block',
                    width: '100%',
                    textAlign: 'left'
                  }}
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    onError={e => {
                      e.currentTarget.src = p.placeholder;
                    }}
                  />
                  <div className="mini-card-body">
                    <h4>{p.title}</h4>
                    <p>{p.tags.join(' · ')}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
