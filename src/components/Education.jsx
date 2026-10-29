import { education } from '../data/education';

export default function Education() {
  return (
    <section className="section education" id="education">
      <div className="container">
        <div className="section-header">
          <p className="section-label">My Academic Path</p>
          <h2 className="section-title">Edu<span className="accent">cation</span></h2>
          <div className="section-line"></div>
        </div>

        <div className="timeline">
          {education.map((item, i) => (
            <div className="timeline-item" key={i}>
              <div className="timeline-dot"></div>
              <div className="timeline-card">
                <div className="timeline-header">
                  <div className="timeline-icon">
                    <i className={item.icon}></i>
                  </div>
                  <div className="timeline-meta">
                    <span className="timeline-date">
                      <i className="fas fa-calendar"></i> {item.date}
                    </span>
                    <span className="timeline-badge">{item.badge}</span>
                  </div>
                </div>
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-institution">
                  <i className={item.institutionIcon}></i> {item.institution}
                </p>
                <p className="timeline-detail">{item.detail}</p>
                <div className="timeline-highlights">
                  {item.highlights.map((h, j) => (
                    <span key={j}>
                      <i className={h.icon}></i> {h.text}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
