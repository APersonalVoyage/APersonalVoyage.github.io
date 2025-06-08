export default function Projects({ handleScrollTo }) {
  return (
    <section id="projects" className="modern-section">
      {/* Section Background */}
      <div className="section-background">
        <div className="section-particles"></div>
        <div className="floating-geometry">
          <div className="geo-shape shape-7"></div>
          <div className="geo-shape shape-8"></div>
          <div className="geo-shape shape-9"></div>
        </div>
      </div>

      {/* Section Container */}
      <div className="section-wrapper">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-subtitle">Breakthrough Research</div>
          <h1 className="section-title">My Research Work</h1>
          <div className="title-decoration">
            <div className="decoration-line"></div>
            <div className="decoration-star">✦</div>
            <div className="decoration-line"></div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          
          {/* Project 1 */}
          <div className="project-card">
            <div className="project-header">
              <div className="project-image-container">
                <img 
                  src="/assets/10-Figure2-1.png" 
                  alt="Gravitational Wave Constraints" 
                  className="project-image"
                />
                <div className="image-overlay">
                  <div className="overlay-icon">🌊</div>
                </div>
              </div>
            </div>
            
            <div className="project-content">
              <div className="project-category">Gravitational Physics</div>
              <h3 className="project-title">Updating Gravitational Wave Constraints on Modified Gravity</h3>
              <p className="project-description">
                Investigated how gravitational wave observations can test and constrain modifications to Einstein's theory of General Relativity, potentially revealing new physics at cosmological scales.
              </p>
              
              <div className="project-tags">
                <span className="tag">General Relativity</span>
                <span className="tag">Modified Gravity</span>
                <span className="tag">Cosmology</span>
              </div>
              
              <div className="project-actions">
                <button 
                  className="project-btn btn-primary" 
                  onClick={() => window.location.href='https://github.com/APersonalVoyage/MSc_Thesis'}
                >
                  <i className="fab fa-github"></i>
                  <span>GitHub</span>
                </button>
                <button 
                  className="project-btn btn-secondary" 
                  onClick={() => window.location.href='https://github.com/APersonalVoyage/MSc_Thesis/blob/main/Abhishek_Msc_Dissertation%20.pdf'}
                >
                  <i className="fas fa-file-pdf"></i>
                  <span>Thesis</span>
                </button>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-card">
            <div className="project-header">
              <div className="project-image-container">
                <img 
                  src="/assets/Screenshot 2023-08-24 at 6.01.41 PM.png" 
                  alt="Parameter Estimation" 
                  className="project-image"
                />
                <div className="image-overlay">
                  <div className="overlay-icon">📊</div>
                </div>
              </div>
            </div>
            
            <div className="project-content">
              <div className="project-category">Data Analysis</div>
              <h3 className="project-title">Parameter Estimation of Gravitational-wave Sources</h3>
              <p className="project-description">
                Developed advanced Bayesian inference techniques to extract physical properties of cosmic events from gravitational wave signals, improving our understanding of black hole and neutron star mergers.
              </p>
              
              <div className="project-tags">
                <span className="tag">Bayesian Analysis</span>
                <span className="tag">MCMC</span>
                <span className="tag">Data Science</span>
              </div>
              
              <div className="project-actions">
                <button 
                  className="project-btn btn-primary" 
                  onClick={() => window.location.href='https://github.com/APersonalVoyage/Parameter_Estimation_2022'}
                >
                  <i className="fab fa-github"></i>
                  <span>GitHub</span>
                </button>
                <button 
                  className="project-btn btn-secondary" 
                  onClick={() => window.location.href='https://github.com/APersonalVoyage/Parameter_Estimation_2022'}
                >
                  <i className="fas fa-chart-line"></i>
                  <span>Analysis</span>
                </button>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="project-card">
            <div className="project-header">
              <div className="project-image-container">
                <img 
                  src="/assets/Screenshot 2023-08-24 at 6.12.29 PM.png" 
                  alt="Data Analysis Project" 
                  className="project-image"
                />
                <div className="image-overlay">
                  <div className="overlay-icon">💾</div>
                </div>
              </div>
            </div>
            
            <div className="project-content">
              <div className="project-category">Data Engineering</div>
              <h3 className="project-title">Advanced Data Analysis Pipeline</h3>
              <p className="project-description">
                Built comprehensive data processing pipelines for large-scale gravitational wave datasets, implementing machine learning algorithms for signal detection and noise characterization.
              </p>
              
              <div className="project-tags">
                <span className="tag">Python</span>
                <span className="tag">Machine Learning</span>
                <span className="tag">HPC</span>
              </div>
              
              <div className="project-actions">
                <button 
                  className="project-btn btn-primary" 
                  onClick={() => window.location.href='https://github.com/APersonalVoyage/Data-Analysis-2022'}
                >
                  <i className="fab fa-github"></i>
                  <span>GitHub</span>
                </button>
                <button 
                  className="project-btn btn-secondary" 
                  onClick={() => window.location.href='https://github.com/APersonalVoyage/Data-Analysis-2022'}
                >
                  <i className="fas fa-code"></i>
                  <span>Source Code</span>
                </button>
              </div>
            </div>
          </div>

          {/* Project 4 */}
          <div className="project-card">
            <div className="project-header">
              <div className="project-image-container">
                <img 
                  src="/assets/Screenshot 2023-08-24 at 6.26.45 PM.png" 
                  alt="Personal Website" 
                  className="project-image"
                />
                <div className="image-overlay">
                  <div className="overlay-icon">🌐</div>
                </div>
              </div>
            </div>
            
            <div className="project-content">
              <div className="project-category">Web Development</div>
              <h3 className="project-title">Space Physics Communication Platform</h3>
              <p className="project-description">
                Created this website to share my research in gravitational wave physics and cosmology, making complex physics concepts accessible to a wider audience through modern web technologies.
              </p>
              
              <div className="project-tags">
                <span className="tag">Next.js</span>
                <span className="tag">React</span>
                <span className="tag">Science Communication</span>
              </div>
              
              <div className="project-actions">
                <button 
                  className="project-btn btn-primary" 
                  onClick={() => window.location.href='https://github.com/APersonalVoyage/APersonalVoyage.github.io'}
                >
                  <i className="fab fa-github"></i>
                  <span>GitHub</span>
                </button>
                <button 
                  className="project-btn btn-secondary" 
                  onClick={() => window.location.href='https://apersonalvoyage.github.io/'}
                >
                  <i className="fas fa-external-link-alt"></i>
                  <span>Live Site</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="projects-cta">
          <h3>Interested in Collaboration?</h3>
          <p>I'm always open to discussing new research opportunities, academic collaborations, or sharing insights about gravitational wave physics.</p>
          <button 
            className="cta-button"
            onClick={() => handleScrollTo('#contact')}
          >
            <span>Let's Connect</span>
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>

        {/* Navigation Arrow */}
        <div className="section-navigation">
          <button 
            className="nav-arrow" 
            onClick={() => handleScrollTo('#contact')}
            aria-label="Navigate to Contact section"
          >
            <span className="arrow-text">Get In Touch</span>
            <i className="fas fa-chevron-down"></i>
          </button>
        </div>
      </div>
    </section>
  );
} 