export default function About({ handleScrollTo }) {
  return (
    <section id="about" className="modern-section">
      {/* Section Background */}
      <div className="section-background">
        <div className="section-particles"></div>
        <div className="floating-geometry">
          <div className="geo-shape shape-1"></div>
          <div className="geo-shape shape-2"></div>
          <div className="geo-shape shape-3"></div>
        </div>
      </div>

      {/* Section Container */}
      <div className="section-wrapper">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-subtitle">Journey Through Space and Time</div>
          <h1 className="section-title">About Me</h1>
          <div className="title-decoration">
            <div className="decoration-line"></div>
            <div className="decoration-star">✦</div>
            <div className="decoration-line"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="about-container">
          {/* Profile Image Section */}
          <div className="about-image-section">
            <div className="image-constellation">
              <div className="constellation-frame">
                <img 
                  src="/assets/Profile_Pic2.JPG" 
                  alt="Abhishek Karkola - About" 
                  className="about-image" 
                />
                <div className="image-glow"></div>
              </div>
              
              {/* Floating Information Cards */}
              <div className="info-cards">
                <div className="info-card card-1">
                  <div className="card-icon">🎓</div>
                  <div className="card-content">
                    <h4>Education</h4>
                    <p>MSc Gravitational Physics</p>
                  </div>
                </div>
                
                <div className="info-card card-2">
                  <div className="card-icon">🔬</div>
                  <div className="card-content">
                    <h4>Research</h4>
                    <p>Cardiff University</p>
                  </div>
                </div>
                
                <div className="info-card card-3">
                  <div className="card-icon">⚡</div>
                  <div className="card-content">
                    <h4>Current Role</h4>
                    <p>Data Engineer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="about-content">
            <div className="content-intro">
              <h3 className="intro-title">Exploring the Cosmic Frontier</h3>
              <p className="intro-text">
                Bridging the gap between theoretical physics and cutting-edge technology
              </p>
            </div>

            <div className="story-sections">
              <div className="story-section">
                <div className="section-icon">🌌</div>
                <h4>The Journey Begins</h4>
                <p>I'm a <strong>Gravitational Wave Physicist</strong> with a passion for exploring the most fascinating forces in our universe. Currently working as a Data Automation Engineer at Legal and General, I bring my analytical mindset from physics to solve complex data challenges.</p>
              </div>

              <div className="story-section">
                <div className="section-icon">🎯</div>
                <h4>Academic Excellence</h4>
                <p>My academic journey includes an <strong>MSc in Gravitational Physics from Cardiff University</strong>, awarded through a merit-based scholarship. My studies focused on the detection and analysis of gravitational waves—ripples in spacetime caused by violent cosmic events like black hole mergers and neutron star collisions.</p>
              </div>

              <div className="story-section">
                <div className="section-icon">🔍</div>
                <h4>Research Impact</h4>
                <p>During my time at Cardiff, I conducted research on <strong>Gravitational Wave Constraints on Modified Gravity</strong> with Dr. Ian Harrison, exploring how these cosmic messengers can help us test Einstein's theory of General Relativity and potentially discover new physics. I also worked on <strong>Parameter Estimation of Gravitational-wave Sources</strong> with Dr. Vivian Raymond, developing techniques to extract physical properties of distant cosmic events from their gravitational wave signals.</p>
              </div>

              <div className="story-section">
                <div className="section-icon">🧠</div>
                <h4>Expertise & Passion</h4>
                <p>My fascination with the cosmos extends to other areas of theoretical physics, including <strong>General Relativity, Cosmology, and Numerical Relativity</strong>. My expertise in tensor mathematics and linear algebra forms the foundation of my approach to understanding spacetime.</p>
              </div>

              <div className="story-section">
                <div className="section-icon">📚</div>
                <h4>Teaching & Sharing Knowledge</h4>
                <p>Beyond research, I've contributed as a Teaching Assistant in Computational Physics, sharing my knowledge of Python and scientific computing. My technical toolkit includes expertise in high-performance computing environments necessary for gravitational wave data analysis.</p>
              </div>

              <div className="story-section">
                <div className="section-icon">💭</div>
                <h4>Connect & Explore</h4>
                <p>I'm passionate about communicating complex physics concepts and sharing my insights about the universe through my blog. Feel free to connect if you'd like to discuss anything from black holes to quantum gravity—I'm always eager to explore the mysteries of our cosmos!</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrow */}
        <div className="section-navigation">
          <button 
            className="nav-arrow" 
            onClick={() => handleScrollTo('#research')}
            aria-label="Navigate to Research section"
          >
            <span className="arrow-text">Explore My Research</span>
            <i className="fas fa-chevron-down"></i>
          </button>
        </div>
      </div>
    </section>
  );
} 