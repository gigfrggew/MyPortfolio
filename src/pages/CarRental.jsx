import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../pages/HandGestureProject.css';


// ── Replace this with the real APK download URL when ready ──
const APK_DOWNLOAD_URL = 'https://rent-yr-car.netlify.app/';

const tags = ['React', 'MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT Auth'];

// ── Lightbox component ──
const Lightbox = ({ image, onClose }) => {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    <div className="hg-lightbox" onClick={onClose}>
      <button className="hg-lightbox-close" onClick={onClose} aria-label="Close">✕</button>
      <img
        src={image.src}
        alt={image.alt}
        className="hg-lightbox-img"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
};

const CarRental = () => {
  const navigate = useNavigate();
  const [lightboxImg, setLightboxImg] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setVisible(true), 80);
  }, []);

  return (
    <>
      {/* Background (matches portfolio style) */}
      <div className="page-bg">
        <div className="hg-bg-grid" />
      </div>

      <div className={`hg-page ${visible ? 'hg-page--visible' : ''}`}>

        {/* ── Back Button ── */}
        <button className="hg-back-btn" onClick={() => navigate(-1)} aria-label="Go back">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5" /><path d="M12 5l-7 7 7 7" />
          </svg>
          Back
        </button>

        {/* ── Project Hero ── */}
        <header className="hg-hero">
          <h1 className="hg-project-title">RYC-Rent Your Car</h1>
          <div className="hg-tags">
            {tags.map((tag) => (
              <span key={tag} className="hg-tag">{tag}</span>
            ))}
          </div>
          <div className="hg-hero-underline" />
        </header>

        <main className="hg-main">


          {/* ══════════════ SECTION 1 · OVERVIEW ══════════════ */}
          <section className="hg-section" id="overview">
            <div className="hg-section-label">
              <span className="hg-section-number">01</span>
              <h2 className="hg-section-heading">Overview</h2>
              <div className="hg-section-line" />
            </div>

            <div className="hg-overview-card">
              <p className="hg-overview-text">
                Developed a full-stack car rental application using the MERN stack that enables users to browse available cars and make bookings online.
                Implemented features for selecting pickup location, date, and confirming reservations through a user-friendly React interface.
                Built RESTful APIs using Node.js and Express.js to handle booking logic, user authentication, and data management.
                Integrated MongoDB for storing user, car, and booking data efficiently.
                Designed an admin panel to manage car listings and bookings, ensuring smooth system operations and scalability.
              </p>
            </div>
          </section>

          {/* ══════════════ SECTION 2 · FEATURES ══════════════ */}
          <section className="hg-section" id="features">

            {/* Heading OUTSIDE */}
            <div className="hg-section-label">
              <span className="hg-section-number">02</span>
              <h2 className="hg-section-heading">Features</h2>
              <div className="hg-section-line" />
            </div>

            {/* Card ONLY for content */}
            <div className="hg-features-card">
              <ul className="hg-features-list">
                <li>Built a full-stack car rental platform using the MERN stack (MongoDB, Express.js, React.js, Node.js).</li>
                <li>Developed responsive UI for browsing cars, viewing details, and booking rentals.</li>
                <li>Implemented user authentication and authorization using JWT.</li>
                <li>Created RESTful APIs for managing users, cars, and booking operations.</li>
                <li>Integrated MongoDB database for storing car listings, user data, and booking records.</li>
                <li>Enabled users to select pickup location, date, and confirm bookings بسهولة.</li>
                <li>Designed an admin dashboard to add, update, and manage car listings and bookings.</li>
                <li>Ensured smooth user experience with real-time updates and efficient data handling.</li>
              </ul>
            </div>

          </section>

          {/* ══════════════ SECTION 3 · PREVIEW ══════════════ */}
          <section className="hg-section" id="preview">
            <div className="hg-section-label">
              <span className="hg-section-number">03</span>
              <h2 className="hg-section-heading">Preview</h2>
              <div className="hg-section-line" />
            </div>

            <div className="hg-preview-card">

              <p className="hg-preview-title">Click Below to Access the Web Site</p>

              <a
                href={APK_DOWNLOAD_URL}
                className="hg-download-btn"
                aria-label="Preview the Website"
              >
                Preview
              </a>

            </div>
          </section>

        </main>
      </div>

      {/* Lightbox */}
      {lightboxImg && (
        <Lightbox image={lightboxImg} onClose={() => setLightboxImg(null)} />
      )}
    </>
  );
};

export default CarRental;
