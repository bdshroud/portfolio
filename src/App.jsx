import { useState, useEffect } from 'react';
import { useTheme } from './hooks/useTheme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';

function getProjectIdFromLocation() {
  if (typeof window === 'undefined') return null;
  const hash = window.location.hash;
  const match = hash.match(/#project[=-](\d+)/i);
  if (match) return parseInt(match[1], 10);
  const params = new URLSearchParams(window.location.search);
  const p = params.get('project');
  if (p && !isNaN(p)) return parseInt(p, 10);
  return null;
}

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [activeProject, setActiveProject] = useState(() => getProjectIdFromLocation());

  useEffect(() => {
    const onLocationChange = () => {
      const id = getProjectIdFromLocation();
      setActiveProject(id);
    };
    window.addEventListener('hashchange', onLocationChange);
    window.addEventListener('popstate', onLocationChange);
    return () => {
      window.removeEventListener('hashchange', onLocationChange);
      window.removeEventListener('popstate', onLocationChange);
    };
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeProject]);

  const handleSelectProject = (id) => {
    setActiveProject(id);
    if (id !== null) {
      window.location.hash = `project-${id}`;
    } else {
      if (window.location.hash.startsWith('#project')) {
        window.history.pushState(null, '', window.location.pathname + '#projects');
      }
    }
  };

  return (
    <>
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        projectPage={activeProject !== null}
        onLogoClick={() => handleSelectProject(null)}
      />

      {activeProject !== null ? (
        <>
          <ProjectDetail
            projectId={activeProject}
            onBack={() => handleSelectProject(null)}
            onSelectProject={handleSelectProject}
          />
          <footer className="footer">
            <div className="container">
              <div className="footer-bottom">
                <p>© {new Date().getFullYear()} Mohammad Yasin. All rights reserved.</p>
                <button
                  onClick={() => handleSelectProject(null)}
                  className="back-to-top"
                  aria-label="Back to projects"
                >
                  <i className="fas fa-arrow-left"></i>
                </button>
              </div>
            </div>
          </footer>
        </>
      ) : (
        <>
          <main>
            <Hero />
            <About />
            <Skills />
            <Education />
            <Experience />
            <Projects onViewDetail={handleSelectProject} />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
