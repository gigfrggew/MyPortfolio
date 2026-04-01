import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'projects', 'education'];
      let current = '';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <a
            href="#about"
            onClick={scrollTo('about')}
            className={activeSection === 'about' ? 'active' : ''}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#projects"
            onClick={scrollTo('projects')}
            className={activeSection === 'projects' ? 'active' : ''}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#education"
            onClick={scrollTo('education')}
            className={activeSection === 'education' ? 'active' : ''}
          >
            Education
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
