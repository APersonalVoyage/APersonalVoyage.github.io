export default function Research({ handleScrollTo }) {
  return (
    <section id="research" className="modern-section">
      {/* Section Background */}
      <div className="section-background">
        <div className="section-particles"></div>
        <div className="floating-geometry">
          <div className="geo-shape shape-4"></div>
          <div className="geo-shape shape-5"></div>
          <div className="geo-shape shape-6"></div>
        </div>
      </div>

      {/* Section Container */}
      <div className="section-wrapper">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-subtitle">Scientific Exploration</div>
          <h1 className="section-title">My Areas of Focus</h1>
          <div className="title-decoration">
            <div className="decoration-line"></div>
            <div className="decoration-star">✦</div>
            <div className="decoration-line"></div>
          </div>
        </div>

        {/* Research Grid */}
        <div className="research-grid">
          
          {/* Gravitational Physics Section */}
          <div className="research-category">
            <div className="category-header">
              <div className="category-icon">🌊</div>
              <h2 className="category-title">Gravitational Physics</h2>
              <p className="category-description">Understanding the fabric of spacetime through Einstein's masterpiece</p>
            </div>
            
            <div className="skills-grid">
              <div className="skill-item">
                <div className="skill-icon">📐</div>
                <div className="skill-content">
                  <h3>General Relativity</h3>
                  <div className="skill-progress">
                    <div className="progress-bar" style={{ '--width': '95%' }}></div>
                  </div>
                  <span className="skill-level">Advanced</span>
                </div>
              </div>

              <div className="skill-item">
                <div className="skill-icon">🧮</div>
                <div className="skill-content">
                  <h3>Tensor Mathematics</h3>
                  <div className="skill-progress">
                    <div className="progress-bar" style={{ '--width': '95%' }}></div>
                  </div>
                  <span className="skill-level">Advanced</span>
                </div>
              </div>

              <div className="skill-item">
                <div className="skill-icon">🔄</div>
                <div className="skill-content">
                  <h3>Modified Gravity</h3>
                  <div className="skill-progress">
                    <div className="progress-bar" style={{ '--width': '85%' }}></div>
                  </div>
                  <span className="skill-level">Experienced</span>
                </div>
              </div>

              <div className="skill-item">
                <div className="skill-icon">〰️</div>
                <div className="skill-content">
                  <h3>Wave Mechanics</h3>
                  <div className="skill-progress">
                    <div className="progress-bar" style={{ '--width': '90%' }}></div>
                  </div>
                  <span className="skill-level">Advanced</span>
                </div>
              </div>

              <div className="skill-item">
                <div className="skill-icon">💻</div>
                <div className="skill-content">
                  <h3>Numerical Relativity</h3>
                  <div className="skill-progress">
                    <div className="progress-bar" style={{ '--width': '75%' }}></div>
                  </div>
                  <span className="skill-level">Intermediate</span>
                </div>
              </div>

              <div className="skill-item">
                <div className="skill-icon">🌌</div>
                <div className="skill-content">
                  <h3>GW Astrophysics</h3>
                  <div className="skill-progress">
                    <div className="progress-bar" style={{ '--width': '90%' }}></div>
                  </div>
                  <span className="skill-level">Advanced</span>
                </div>
              </div>
            </div>
          </div>

          {/* Cosmology & Astrophysics Section */}
          <div className="research-category">
            <div className="category-header">
              <div className="category-icon">🌠</div>
              <h2 className="category-title">Cosmology & Astrophysics</h2>
              <p className="category-description">Exploring the cosmos from black holes to the edge of the universe</p>
            </div>
            
            <div className="skills-grid">
              <div className="skill-item">
                <div className="skill-icon">⚫</div>
                <div className="skill-content">
                  <h3>Black Hole Physics</h3>
                  <div className="skill-progress">
                    <div className="progress-bar" style={{ '--width': '85%' }}></div>
                  </div>
                  <span className="skill-level">Experienced</span>
                </div>
              </div>

              <div className="skill-item">
                <div className="skill-icon">🔄</div>
                <div className="skill-content">
                  <h3>Compact Binaries</h3>
                  <div className="skill-progress">
                    <div className="progress-bar" style={{ '--width': '90%' }}></div>
                  </div>
                  <span className="skill-level">Advanced</span>
                </div>
              </div>

              <div className="skill-item">
                <div className="skill-icon">🌐</div>
                <div className="skill-content">
                  <h3>Cosmological Models</h3>
                  <div className="skill-progress">
                    <div className="progress-bar" style={{ '--width': '75%' }}></div>
                  </div>
                  <span className="skill-level">Intermediate</span>
                </div>
              </div>

              <div className="skill-item">
                <div className="skill-icon">🔮</div>
                <div className="skill-content">
                  <h3>Dark Energy</h3>
                  <div className="skill-progress">
                    <div className="progress-bar" style={{ '--width': '70%' }}></div>
                  </div>
                  <span className="skill-level">Intermediate</span>
                </div>
              </div>

              <div className="skill-item">
                <div className="skill-icon">⭐</div>
                <div className="skill-content">
                  <h3>Neutron Stars</h3>
                  <div className="skill-progress">
                    <div className="progress-bar" style={{ '--width': '75%' }}></div>
                  </div>
                  <span className="skill-level">Intermediate</span>
                </div>
              </div>

              <div className="skill-item">
                <div className="skill-icon">🌟</div>
                <div className="skill-content">
                  <h3>Early Universe</h3>
                  <div className="skill-progress">
                    <div className="progress-bar" style={{ '--width': '60%' }}></div>
                  </div>
                  <span className="skill-level">Basic</span>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Skills Section */}
          <div className="research-category">
            <div className="category-header">
              <div className="category-icon">⚡</div>
              <h2 className="category-title">Technical Expertise</h2>
              <p className="category-description">Computational tools and technologies for modern physics research</p>
            </div>
            
            <div className="technical-skills">
              <div className="tech-skill">
                <div className="tech-header">
                  <span className="tech-name">Python Scientific Stack</span>
                  <span className="tech-percentage">95%</span>
                </div>
                <div className="tech-bar">
                  <div className="tech-progress" style={{ width: '95%' }}></div>
                </div>
              </div>

              <div className="tech-skill">
                <div className="tech-header">
                  <span className="tech-name">High Performance Computing</span>
                  <span className="tech-percentage">85%</span>
                </div>
                <div className="tech-bar">
                  <div className="tech-progress" style={{ width: '85%' }}></div>
                </div>
              </div>

              <div className="tech-skill">
                <div className="tech-header">
                  <span className="tech-name">LIGO/Virgo Data Analysis</span>
                  <span className="tech-percentage">90%</span>
                </div>
                <div className="tech-bar">
                  <div className="tech-progress" style={{ width: '90%' }}></div>
                </div>
              </div>

              <div className="tech-skill">
                <div className="tech-header">
                  <span className="tech-name">Numerical Simulations</span>
                  <span className="tech-percentage">80%</span>
                </div>
                <div className="tech-bar">
                  <div className="tech-progress" style={{ width: '80%' }}></div>
                </div>
              </div>

              <div className="tech-skill">
                <div className="tech-header">
                  <span className="tech-name">Statistical Analysis</span>
                  <span className="tech-percentage">90%</span>
                </div>
                <div className="tech-bar">
                  <div className="tech-progress" style={{ width: '90%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrow */}
        <div className="section-navigation">
          <button 
            className="nav-arrow" 
            onClick={() => handleScrollTo('#projects')}
            aria-label="Navigate to Projects section"
          >
            <span className="arrow-text">View My Projects</span>
            <i className="fas fa-chevron-down"></i>
          </button>
        </div>
      </div>
    </section>
  );
} 