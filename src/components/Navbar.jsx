import { useState, useEffect } from 'react';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' }
];

export default function Navbar({ theme, toggleTheme, projectPage = false, onLogoClick }) {
  const [scrolled, setScrolled] = useState(projectPage);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    if (projectPage) {
      setScrolled(true);
      return;
    }
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [projectPage]);

  useEffect(() => {
    if (projectPage) return;
    const sections = document.querySelectorAll('section[id]');
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { rootMargin: '-40% 0px -50% 0px' }
    );
    sections.forEach(s => obs.observe(s));
    return () => obs.disconnect();
  }, [projectPage]);

  const closeMenu = () => setMenuOpen(false);

  const handleLinkClick = (e, href) => {
    closeMenu();
    if (projectPage) {
      e.preventDefault();
      if (onLogoClick) onLogoClick();
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    }
  };

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
      <div className="nav-container">
        <a
          href="#home"
          className="nav-logo"
          onClick={(e) => {
            if (projectPage && onLogoClick) {
              e.preventDefault();
              onLogoClick();
            }
            closeMenu();
          }}
        >
          <span className="logo-bracket">&lt;</span>Mohammad{' '}
          <span className="logo-accent">Yasin</span>
          <span className="logo-bracket"> /&gt;</span>
        </a>

        <ul className={`nav-menu${menuOpen ? ' open' : ''}`} id="nav-menu">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className={`nav-link${!projectPage && activeSection === href.slice(1) ? ' active' : ''}`}
                onClick={(e) => handleLinkClick(e, href)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle dark mode">
            <i className={`fas fa-${theme === 'dark' ? 'sun' : 'moon'}`}></i>
          </button>
          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            id="hamburger"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(o => !o)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
}
