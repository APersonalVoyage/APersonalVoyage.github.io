export default function Contact() {
  return (
    <section id="contact" className="modern-section">
      {/* Section Background */}
      <div className="section-background">
        <div className="section-particles"></div>
        <div className="floating-geometry">
          <div className="geo-shape shape-10"></div>
          <div className="geo-shape shape-11"></div>
          <div className="geo-shape shape-12"></div>
        </div>
      </div>

      {/* Section Container */}
      <div className="section-wrapper">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-subtitle">Connect Across the Cosmos</div>
          <h1 className="section-title">Get in Touch</h1>
          <div className="title-decoration">
            <div className="decoration-line"></div>
            <div className="decoration-star">✦</div>
            <div className="decoration-line"></div>
          </div>
          <p className="section-description">
            Let's explore the universe together. Whether you want to discuss gravitational waves, 
            collaborate on research, or simply share your passion for physics, I'd love to hear from you.
          </p>
        </div>

        {/* Contact Content */}
        <div className="contact-layout">
          
          {/* Contact Information */}
          <div className="contact-info-section">
            <div className="contact-card">
              <div className="contact-icon-wrapper">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-details">
                <h3>Email</h3>
                <p>
                  <a href="mailto:abhishek@alphago.in">abhishek@alphago.in</a>
                </p>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon-wrapper">
                <i className="fab fa-linkedin"></i>
              </div>
              <div className="contact-details">
                <h3>LinkedIn</h3>
                <p>
                  <a href="https://www.linkedin.com/in/abhishek-karkola-9bb47a163/" target="_blank" rel="noopener noreferrer">
                    Connect professionally
                  </a>
                </p>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon-wrapper">
                <i className="fab fa-github"></i>
              </div>
              <div className="contact-details">
                <h3>GitHub</h3>
                <p>
                  <a href="https://github.com/APersonalVoyage" target="_blank" rel="noopener noreferrer">
                    Explore my code
                  </a>
                </p>
              </div>
            </div>

            <div className="contact-quote">
              <blockquote>
                "The cosmos is within us. We are made of star-stuff. We are a way for the universe to know itself."
              </blockquote>
              <cite>— Carl Sagan</cite>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-section">
            <div className="form-container">
              <div className="form-header">
                <h3>Send a Message</h3>
                <p>Share your thoughts, questions, or collaboration ideas</p>
              </div>

              <form id="contact-form" className="modern-contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required 
                      placeholder=" "
                    />
                    <label htmlFor="name">
                      <i className="fas fa-user"></i>
                      <span>Your Name</span>
                    </label>
                    <div className="form-line"></div>
                  </div>

                  <div className="form-group">
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required 
                      placeholder=" "
                    />
                    <label htmlFor="email">
                      <i className="fas fa-envelope"></i>
                      <span>Email Address</span>
                    </label>
                    <div className="form-line"></div>
                  </div>
                </div>

                <div className="form-group">
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    required 
                    placeholder=" "
                  />
                  <label htmlFor="subject">
                    <i className="fas fa-tag"></i>
                    <span>Subject</span>
                  </label>
                  <div className="form-line"></div>
                </div>

                <div className="form-group">
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="5" 
                    required 
                    placeholder=" "
                  ></textarea>
                  <label htmlFor="message">
                    <i className="fas fa-comment"></i>
                    <span>Your Message</span>
                  </label>
                  <div className="form-line"></div>
                </div>

                <button type="submit" className="submit-btn">
                  <span className="btn-content">
                    <i className="fas fa-paper-plane"></i>
                    <span>Send Message</span>
                  </span>
                  <div className="btn-effects">
                    <div className="btn-ripple"></div>
                    <div className="btn-particles"></div>
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="contact-cta">
          <div className="cta-content">
            <h3>Ready to Explore Together?</h3>
            <p>Join me on this incredible journey through space, time, and the wonders of gravitational wave physics.</p>
            <div className="cta-links">
              <a href="https://www.linkedin.com/in/abhishek-karkola-9bb47a163/" className="cta-link">
                <i className="fab fa-linkedin"></i>
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/APersonalVoyage" className="cta-link">
                <i className="fab fa-github"></i>
                <span>GitHub</span>
              </a>
              <a href="https://www.instagram.com/apersonalvoyage/" className="cta-link">
                <i className="fab fa-instagram"></i>
                <span>Instagram</span>
              </a>
              <a href="https://twitter.com/APersonalVoyage" className="cta-link">
                <i className="fab fa-twitter"></i>
                <span>Twitter</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 