export default function Footer() {
  const quickLinks = ['home', 'about', 'skills', 'education', 'experience', 'projects', 'contact'];

  const projectLinks = [
    { label: 'Wanderlust', url: 'https://wanderlust-client-live.vercel.app' },
    { label: 'DevStack', url: 'https://silver-capybara-67135d.netlify.app/' },
    { label: 'News24', url: 'https://github.com/bdshroud/News24' },
    { label: 'Bazardor BD', url: 'https://bazardorbdaily.vercel.app' },
    { label: 'Movie Explorer', url: 'https://live-movie-explorer.netlify.app/' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#home" className="nav-logo">
              <span className="logo-bracket">&lt;</span>Mohammad{' '}
              <span className="logo-accent">Yasin</span>
              <span className="logo-bracket"> /&gt;</span>
            </a>
            <p>Building professional Full Stack &amp; AI solutions — one project at a time.</p>
            <div className="footer-socials">
              <a href="https://github.com/bdshroud" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://next-gentech.co.uk" target="_blank" rel="noopener noreferrer" aria-label="Website">
                <i className="fas fa-globe"></i>
              </a>
              <a href="https://wa.me/8801771472632" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="https://twitter.com/bdShroud" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <i className="fab fa-x-twitter"></i>
              </a>
              <a href="mailto:business.bdshroud@gmail.com" aria-label="Email">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map(s => (
                <li key={s}>
                  <a href={`#${s}`}>{s.charAt(0).toUpperCase() + s.slice(1)}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-links">
            <h4>Projects</h4>
            <ul>
              {projectLinks.map(p => (
                <li key={p.label}>
                  <a href={p.url} target="_blank" rel="noopener noreferrer">
                    {p.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Say Hello</h4>
            <p>
              <i className="fas fa-envelope"></i> business.bdshroud@gmail.com
            </p>
            <p>
              <i className="fas fa-phone-alt"></i> <a href="tel:+8801771472632" style={{ color: 'inherit' }}>+880 1771-472632</a>
            </p>
            <p>
              <i className="fab fa-whatsapp"></i>{' '}
              <a href="https://wa.me/8801771472632" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                +880 1771-472632 (WhatsApp)
              </a>
            </p>
            <p>
              <i className="fas fa-globe"></i> next-gentech.co.uk
            </p>
            <p>
              <i className="fas fa-map-marker-alt"></i> Bangladesh
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Mohammad Yasin. Designed &amp; Built with{' '}
            <i className="fas fa-heart"></i> from Bangladesh.
          </p>
          <a href="#home" className="back-to-top" aria-label="Back to top">
            <i className="fas fa-arrow-up"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
