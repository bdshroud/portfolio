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

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeProject]);

  return (
    <>
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        projectPage={activeProject !== null}
        onLogoClick={() => setActiveProject(null)}
      />

      {activeProject !== null ? (
        <>
          <ProjectDetail
            projectId={activeProject}
            onBack={() => setActiveProject(null)}
            onSelectProject={setActiveProject}
          />
          <footer className="footer">
            <div className="container">
              <div className="footer-bottom">
                <p>© {new Date().getFullYear()} Mohammad Yasin. All rights reserved.</p>
                <button
                  onClick={() => setActiveProject(null)}
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
            <Projects onViewDetail={setActiveProject} />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
