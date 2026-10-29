import { useState, useRef, useEffect } from 'react';
import { skillsData } from '../data/skills';

function SkillCard({ skill, animate }) {
  return (
    <div className="skill-card">
      <div className="skill-icon">
        {skill.iconClass ? (
          <i className={skill.iconClass}></i>
        ) : (
          <img src={skill.icon} alt={skill.name} />
        )}
      </div>
      <h4>{skill.name}</h4>
      <div className="skill-bar">
        <div
          className={`skill-fill${animate ? ' animated' : ''}`}
          style={{ width: animate ? `${skill.level}%` : '0%' }}
        ></div>
      </div>
      <span className="skill-percent">{skill.level}%</span>
    </div>
  );
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState('frontend');
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setAnimate(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const handleTab = tab => {
    setAnimate(false);
    setActiveTab(tab);
    setTimeout(() => setAnimate(true), 50);
  };

  const tabs = [
    { id: 'frontend', icon: 'fas fa-paint-brush', label: 'Frontend' },
    { id: 'backend', icon: 'fas fa-server', label: 'Backend' },
    { id: 'tools', icon: 'fas fa-tools', label: 'Tools & Others' }
  ];

  return (
    <section className="section skills" id="skills" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <p className="section-label">What I Work With</p>
          <h2 className="section-title">My <span className="accent">Skills</span></h2>
          <div className="section-line"></div>
        </div>

        <div className="skills-tabs">
          {tabs.map(t => (
            <button
              key={t.id}
              className={`skill-tab${activeTab === t.id ? ' active' : ''}`}
              onClick={() => handleTab(t.id)}
            >
              <i className={t.icon}></i> {t.label}
            </button>
          ))}
        </div>

        <div className="skills-panel active">
          <div className="skills-grid">
            {skillsData[activeTab].map(skill => (
              <SkillCard key={skill.name} skill={skill} animate={animate} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
