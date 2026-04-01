import React, { useEffect, useRef } from 'react';

const educationData = [
  {
    id: 1,
    degree: 'Bachelor of Engineering in Computer Science',
    institution: 'Shri Madhwa Vadiraja Institute of Technology Bantakal Udupi',
    year: '2022-\n2026',
    details: ['Secured 8.15 CGPA', 'Participated in 5+ NSS activity'],
  },
  {
    id: 2,
    degree: 'High school & Secondary Education',
    institution: "St.Cecily's High school and PU  Udupi",
    year: '2017 -\n2022',
    details: [
      'Secured 82% in 10th standard',
      'Secured 90.3% in 12th standard',
    ],
  },
];

const EducationCard = ({ edu, index }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, index * 120);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div ref={ref} className="education-card fade-in">
      <div className="education-header">
        <h3 className="education-degree">{edu.degree}</h3>
        <span className="education-year" style={{ whiteSpace: 'pre-line' }}>
          {edu.year}
        </span>
      </div>
      <p className="education-institution">{edu.institution}</p>
      <ul className="education-details">
        {edu.details.map((detail, i) => (
          <li key={i}>{detail}</li>
        ))}
      </ul>
    </div>
  );
};

const Education = () => {
  return (
    <section id="education" className="education-section">
      <div className="education-layout">
        <div className="section-title-block">
          <h2 className="section-title">Education</h2>
          <div className="section-title-underline" />
        </div>
        <div className="education-list">
          {educationData.map((edu, index) => (
            <EducationCard key={edu.id} edu={edu} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
