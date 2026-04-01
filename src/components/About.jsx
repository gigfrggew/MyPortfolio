import React, { useEffect, useRef } from 'react';

const skills = ['HTML','CSS','JavaScript','React','Java','SQL','C#','Git'];

const About = () => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="about-layout">
        <div className="section-title-block">
          <h2 className="section-title">About</h2>
          <div className="section-title-underline" />
        </div>
        <div ref={ref} className="about-text-block fade-in">
          <p>
            Final-year Computer Science Engineering student with a strong foundation in front-end development, particularly using React.js.
             Interested in building full-stack applications and creating responsive, scalable, and user-friendly solutions. 
            Enthusiastic about learning emerging technologies and contributing to impactful, real-world projects.
          </p>
          <div className="skills-grid">
            {skills.map((skill) => (
              <span key={skill} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
