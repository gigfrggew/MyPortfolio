import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

// Arrow icon for project link button
const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7" />
    <path d="M7 7h10v10" />
  </svg>
);

const projects = [
  {
    id: '01',
    title: 'Gestura: Gesture-Based Control for Android Devices',
    description:
      'This project allows people to control their mobile phone using simple hand movements instead of touching the screen. By just moving their hand in front of the camera, users can perform actions like scrolling, clicking, or navigating between apps. It works in real time and does not require any extra devices or sensors. The system is designed to be easy to use,  where touching the phone is difficult or not safe.Overall, it aims to make use of   smartphone conveineint in every situations',
    tags: ['TensorFlow', 'Opencv', 'Mediapipe', 'Machine Learning', 'Kotlin'],
    link: 'https://github.com/gigfrggew',
    detailPath: '/projects/hand-gesture-recognition',
  },
  {
    id: '02',
    title: 'RYC-Rent Your Car',
    description:
      'developed a car rental application that allows users to easily browse and book cars online.' +
      'Users can select a car, choose their pickup date and location, and confirm their booking within a few steps.' +
      'The platform also lets users view their past bookings and manage their reservations. Additionally,' +
      'an admin panel is available to add new cars and manage bookings. Overall, it provides a simple and,' +
      'convenient way for people to rent cars without visiting a physical office.',
    tags: ['React', 'MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT Auth'],
    link: 'https://github.com/gigfrggew',
    detailPath: '/projects/car-rental',
  },
];

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const navigate = useNavigate();

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
    <div
      ref={ref}
      className="project-card fade-in"
      onClick={() => {
        if (project.detailPath) {
          navigate(project.detailPath);
        }
      }}
      style={{ cursor: project.detailPath ? 'pointer' : 'default' }}
    >
      <div className="project-header">
        <div>
          <span className="project-number">{project.id}</span>
          <h3 className="project-title">{project.title}</h3>
        </div>

        {/* GitHub / Link Button */}
        <button
          className="project-link-btn"
          onClick={(e) => {
            e.stopPropagation();
            if (project.detailPath) {
              navigate(project.detailPath);   // ✅ go to project page
            } else if (project.link) {
              window.open(project.link, '_blank'); // fallback to GitHub
            }
          }}
          aria-label={`View ${project.title}`}
        >
          <ArrowIcon />
        </button>
      </div>

      <p className="project-description">{project.description}</p>

      <div className="tech-tags">
        {project.tags.map((tag) => (
          <span key={tag} className="tech-tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-layout">
        <div className="section-title-block">
          <h2 className="section-title">Projects</h2>
          <div className="section-title-underline" />
        </div>

        <div className="projects-list">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;