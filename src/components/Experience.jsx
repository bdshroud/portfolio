import { experience } from '../data/experience';

export default function Experience() {
  return (
    <section className="section experience" id="experience">
      <div className="container">
        <div className="section-header">
          <p className="section-label">My Journey So Far</p>
          <h2 className="section-title">Work <span className="accent">Experience</span></h2>
          <div className="section-line"></div>
        </div>

        <div className="timeline">
          {experience.map((item, i) => (
            <div className="timeline-item" key={i}>
              <div className={`timeline-dot${item.pulse ? ' pulse' : ''}`}></div>
              <div className="timeline-card">
                <div className="timeline-header">
                  <div className={`timeline-icon${item.iconClass ? ' ' + item.iconClass : ''}`}>
                    <i className={item.icon}></i>
                  </div>
                  <div className="timeline-meta">
                    <span className="timeline-date">
                      <i className="fas fa-calendar"></i> {item.date}
                    </span>
                    <span className={`timeline-badge${item.badgeClass ? ' ' + item.badgeClass : ''}`}>
                      {item.badge}
                    </span>
                  </div>
                </div>
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-institution">
                  <i className={item.companyIcon}></i> {item.company}
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
