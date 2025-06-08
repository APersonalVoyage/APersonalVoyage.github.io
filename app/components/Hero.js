export default function Hero({ handleScrollTo }) {
  return (
    <section id="profile" className="hero-section">
      {/* Cosmic Background Elements */}
      <div className="hero-background">
        <div className="cosmic-particles"></div>
        <div className="floating-elements">
          <div className="cosmic-ring ring-1"></div>
          <div className="cosmic-ring ring-2"></div>
          <div className="cosmic-ring ring-3"></div>
        </div>
        <div className="hero-stars">
          <div className="star-small star-1"></div>
          <div className="star-small star-2"></div>
          <div className="star-medium star-3"></div>
          <div className="star-small star-4"></div>
          <div className="star-medium star-5"></div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="hero-container">
        
        {/* Profile Image Section */}
        <div className="hero-image-section">
          <div className="image-frame">
            <div className="frame-glow"></div>
            <img 
              src="/assets/My_profile-fotor-20230824122059.png" 
              alt="Abhishek Karkola - Gravitational Wave Physicist" 
              className="hero-image" 
            />
            <div className="orbital-rings">
              <div className="orbit orbit-1">
                <div className="planet planet-1"></div>
              </div>
              <div className="orbit orbit-2">
                <div className="planet planet-2"></div>
              </div>
              <div className="orbit orbit-3">
                <div className="planet planet-3"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Text Content Section */}
        <div className="hero-content">
          <div className="intro-animation">
            <p className="hero-greeting">
              <span className="greeting-icon">👋</span>
              Hello, I'm
            </p>
            
            <h1 className="hero-title">
              <span className="title-word title-word-1">Abhishek</span>
              <span className="title-word title-word-2">Karkola</span>
            </h1>
            
            <div className="hero-subtitle-container">
              <div className="subtitle-decoration"></div>
              <p className="hero-subtitle">
                <span className="subtitle-highlight">Gravitational Wave</span>
                <span className="subtitle-base">Physicist</span>
              </p>
              <div className="subtitle-decoration"></div>
            </div>

            <div className="hero-description">
              <p>Exploring the cosmic dance of spacetime through gravitational waves, 
              bridging the gap between theoretical physics and cutting-edge technology.</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="hero-actions">
            <button 
              className="hero-btn btn-primary" 
              onClick={() => window.open('/assets/Abhishek_CV.pdf')}
            >
              <span className="btn-text">Download CV</span>
              <div className="btn-ripple"></div>
            </button>
            <button 
              className="hero-btn btn-secondary" 
              onClick={() => handleScrollTo('#contact')}
            >
              <span className="btn-text">Let's Connect</span>
              <div className="btn-ripple"></div>
            </button>
          </div>

          {/* Social Links */}
          <div className="hero-socials">
            <div className="socials-label">Join the Journey</div>
            <div className="social-links-grid">
              <a 
                href="https://www.linkedin.com/in/abhishek-karkola-9bb47a163/" 
                className="social-link linkedin"
                aria-label="LinkedIn Profile"
              >
                <i className="fab fa-linkedin-in"></i>
                <span className="social-tooltip">LinkedIn</span>
              </a>
              <a 
                href="https://github.com/APersonalVoyage" 
                className="social-link github"
                aria-label="GitHub Profile"
              >
                <i className="fab fa-github"></i>
                <span className="social-tooltip">GitHub</span>
              </a>
              <a 
                href="https://www.instagram.com/apersonalvoyage/" 
                className="social-link instagram"
                aria-label="Instagram Profile"
              >
                <i className="fab fa-instagram"></i>
                <span className="social-tooltip">Instagram</span>
              </a>
              <a 
                href="https://twitter.com/APersonalVoyage" 
                className="social-link twitter"
                aria-label="Twitter Profile"
              >
                <i className="fab fa-twitter"></i>
                <span className="social-tooltip">Twitter</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-text">Explore the Journey</div>
        <div className="scroll-arrow">
          <i className="fas fa-chevron-down"></i>
        </div>
      </div>
    </section>
  );
} 