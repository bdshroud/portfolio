import { useTypewriter } from '../hooks/useTypewriter';

export default function Hero() {
  const typed = useTypewriter();

  return (
    <section className="hero" id="home">
      <div className="hero-bg-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          <p className="hero-greeting">👋 Hello, I'm</p>
          <h1 className="hero-name">Mohammad Yasin</h1>
          <div className="hero-typewriter">
            <span className="typewriter-prefix">I'm a </span>
            <span className="typewriter-text">{typed}</span>
            <span className="typewriter-cursor">|</span>
          </div>
          <p className="hero-description">
            I build professional Full Stack &amp; AI-powered software solutions.
            Passionate about custom AI software, clean architecture, and delivering real-world digital products.
          </p>

          <div className="hero-cta">
            <a href="/Resume.pdf" className="btn btn-primary" download="Mohammad_Yasin_Resume.pdf">
              <i className="fas fa-download"></i> Download Resume
            </a>
            <a href="#projects" className="btn btn-outline">
              <i className="fas fa-eye"></i> View My Work
            </a>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/bdshroud" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://next-gentech.co.uk" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Website">
              <i className="fas fa-globe"></i>
            </a>
            <a href="https://twitter.com/bdShroud" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Twitter/X">
              <i className="fab fa-x-twitter"></i>
            </a>
            <a href="mailto:business.bdshroud@gmail.com" className="social-link" aria-label="Email">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <div className="hero-image-ring ring-1"></div>
          <div className="hero-image-ring ring-2"></div>
          <div className="hero-image-ring ring-3"></div>
          <div className="hero-photo">
            <img
              src="/images/me.jpg"
              alt="Mohammad Yasin - Full Stack & AI Developer"
              onError={e => {
                e.currentTarget.src = 'https://avatars.githubusercontent.com/u/67956315?v=4';
              }}
            />
          </div>
          <div className="hero-badge badge-exp">
            <span className="badge-num">5+</span>
            <span className="badge-label">Years Exp.</span>
          </div>
          <div className="hero-badge badge-proj">
            <span className="badge-num">61+</span>
            <span className="badge-label">Projects</span>
          </div>
        </div>
      </div>

      <a href="#about" className="scroll-down" aria-label="Scroll down">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
      </a>
    </section>
  );
}
