import React from 'react';

// Mail icon
const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

// LinkedIn icon
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

// GitHub icon
const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h2 className="hero-greeting">
          Hello! <span className="wave-emoji">👋</span>
        </h2>
        <h1 className="hero-name">
          I'm{' '}
          <span className="name-highlight">Bharath B Shetty</span>
        </h1>
        <p className="hero-subtitle">Software Enthusiast</p>
        <div className="hero-socials">
          <a
            href="mailto:shettybharath004@gmail.com"
            className="social-link"
            aria-label="Send Email"
            title="Email"
          >
            <MailIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/bharathshetty444"
            className="social-link"
            aria-label="LinkedIn Profile"
            title="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://github.com/gigfrggew"
            className="social-link"
            aria-label="GitHub Profile"
            title="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
