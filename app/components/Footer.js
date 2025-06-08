import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="modern-footer">
      <div className="footer-background">
        <div className="footer-stars"></div>
        <div className="footer-stars-2"></div>
        <div className="footer-stars-3"></div>
      </div>
      
      <div className="footer-content">
        {/* Carl Sagan Quote Section */}
        <div className="quote-section">
          <div className="quote-container">
            <blockquote className="sagan-quote">
              <span className="quote-mark">"</span>
              <span className="quote-text">The cosmos is within us. We are made of star-stuff.</span>
              <span className="quote-mark">"</span>
            </blockquote>
            <cite className="quote-author">— Carl Edward Sagan</cite>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="footer-nav">
          <div className="nav-links-container">
            <ul className="footer-nav-links">
              <li><a href="#about" className="footer-link">About</a></li>
              <li><a href="#research" className="footer-link">Research</a></li>
              <li><Link href="/blog" className="footer-link">Blog</Link></li>
              <li><a href="#projects" className="footer-link">Projects</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
            </ul>
          </div>
        </nav>

        {/* Social Links */}
        <div className="footer-social">
          <div className="social-links">
            <a href="https://www.linkedin.com/in/abhishek-karkola-9bb47a163/" className="social-link" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/APersonalVoyage" className="social-link" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.instagram.com/apersonalvoyage/" className="social-link" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://twitter.com/APersonalVoyage" className="social-link" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="mailto:abhishek.karkola@gmail.com" className="social-link" aria-label="Email">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p className="copyright">
            © {new Date().getFullYear()} Abhishek Karkola. Crafted with passion for exploration.
          </p>
        </div>
      </div>
    </footer>
  );
} 