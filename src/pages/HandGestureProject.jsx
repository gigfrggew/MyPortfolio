import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../pages/HandGestureProject.css';


// ── Replace this with the real APK download URL when ready ──
const APK_DOWNLOAD_URL = 'https://drive.google.com/uc?export=download&id=1AfqjT17-2Y19pqurXyIUvJOONQYlJWZj';

const tags = ['TensorFlow', 'OpenCV', 'MediaPipe', 'Machine Learning', 'Kotlin'];

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

const HandGestureProject = () => {
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
          <h1 className="hg-project-title">Gestura:Gesture-Based Control for Android Devices</h1>
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
                Developed a real-time hand gesture recognition system that enables touch-free control
                on Android devices. Created a custom gesture dataset using OpenCV and MediaPipe and
                trained a DNN-based deep learning model achieving over <strong>98% accuracy</strong>.
                Built an Android app by importing the trained ML model. Implemented real-time
                gesture-to-action mapping such as swiping, scrolling, toggling between apps,
                screenshot, AI Summary, virtual touch simulation, etc. with an interactive UI.
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
                <li>Built a custom hand gesture dataset using OpenCV and MediaPipe.</li>
                <li>Applied preprocessing (BGR→RGB, landmark normalization).</li>
                <li>Trained an ANN model with 98%+ accuracy using TensorFlow.</li>
                <li>Converted the model to TensorFlow Lite (TFLite).</li>
                <li>Developed the Android app using Kotlin.</li>
                <li>Designed an interactive UI with tutorials and 3D gesture guides.</li>
                <li>Integrated an AI assistant for user support.</li>
                <li>Enabled real-time touch-free gesture control.</li>
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
              <div className="hg-preview-icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                  <path d="M12 18h.01" />
                </svg>
              </div>

              <h3 className="hg-preview-title">Try the App</h3>
              <p className="hg-preview-sub">
                Experience real-time hand gesture control directly on your phone.
              </p>

              <a
                href={APK_DOWNLOAD_URL}
                className="hg-download-btn"
                download="HandGestureApp.apk"
                aria-label="Download the Android APK"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download the App
              </a>

              <div className="hg-android-note" role="note">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                <span>
                  This app is suitable for <strong>Android devices only</strong>.
                  Ensure all required <strong>permissions</strong> are granted for seamless interaction.
                  <br />
                  ⚠️ If a Google Drive warning appears, click <strong>"Download anyway"</strong> to proceed.
                </span>
              </div>
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

export default HandGestureProject;
