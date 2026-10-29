export default function About() {
  const stats = [
    { num: '5+', text: 'Years Experience' },
    { num: '61+', text: 'Projects Done' },
    { num: 'Open', text: 'For Hire' }
  ];

  const tags = [
    { icon: 'fas fa-robot', label: 'AI/ML' },
    { icon: 'fas fa-code', label: 'Open Source' },
    { icon: 'fas fa-globe', label: 'Bangladesh' },
    { icon: 'fas fa-server', label: 'Backend' },
    { icon: 'fas fa-paint-brush', label: 'UI Design' },
    { icon: 'fas fa-rocket', label: 'Startups' }
  ];

  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Get to Know Me</p>
          <h2 className="section-title">About <span className="accent">Me</span></h2>
          <div className="section-line"></div>
        </div>

        <div className="about-grid">
          <div className="about-image-col">
            <div className="about-image-frame">
              <img
                src="/images/me.jpg"
                alt="Mohammad Yasin"
                onError={e => {
                  e.currentTarget.src = 'https://avatars.githubusercontent.com/u/67956315?v=4';
                }}
              />
              <div className="about-image-decor"></div>
            </div>
            <div className="about-stats">
              {stats.map(s => (
                <div className="stat-item" key={s.text}>
                  <span className="stat-num">{s.num}</span>
                  <span className="stat-text">{s.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about-content-col">
            <h3 className="about-sub">Full Stack &amp; AI Software Developer</h3>
            <p className="about-text">
              Hi there! I'm <strong>Mohammad Yasin</strong>, a professional Full Stack &amp; AI Software Developer based in Bangladesh.
              I provide custom AI software and modern web development services, and work with clients globally via{' '}
              <a href="https://next-gentech.co.uk" target="_blank" rel="noopener noreferrer">next-gentech.co.uk</a>.
            </p>
            <p className="about-text">
              I specialize in building end-to-end web applications and AI-powered solutions that solve real-world problems.
              From architecting robust backend APIs to crafting intuitive frontends — I care deeply about code quality,
              performance, and delivering real value to clients.
            </p>
            <p className="about-text">
              With over 61 public repositories on GitHub and deep experience across TypeScript, JavaScript, React, Node.js,
              and AI integrations, I'm constantly learning and pushing the boundaries of what's possible on the web.
            </p>

            <div className="about-tags">
              {tags.map(t => (
                <span className="tag" key={t.label}>
                  <i className={t.icon}></i> {t.label}
                </span>
              ))}
            </div>

            <div className="about-cta">
              <a href="#contact" className="btn btn-primary">
                <i className="fas fa-envelope"></i> Let's Talk
              </a>
              <a href="/Resume.pdf" className="btn btn-ghost" download="Mohammad_Yasin_Resume.pdf">
                <i className="fas fa-file-pdf"></i> My Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
