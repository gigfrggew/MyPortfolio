import React, { useEffect, useRef } from 'react';

const skills = ['JavaScript', 'React', 'HTML', 'CSS', 'Java', 'Git', 'SQL'];

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
            Final-year Computer Science Engineering student with a good foundation
            in front-end web development comprising of HTML, CSS, JavaScript, and
            beginner-level experience with React.js. Passionate about building
            responsive, scalable, and user-friendly applications. Eager to
            contribute to impactful projects and grow within a collaborative
            development environment.
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
