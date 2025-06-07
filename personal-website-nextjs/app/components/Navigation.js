'use client';

import Link from 'next/link';

export default function Navigation() {
  
  function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  return (
    <>
      <nav id="desktop-nav">
        {/* Modern Logo with Ship Icon */}
        <div className="logo-container">
          <div className="logo">
            <div className="logo-icon">
              <svg className="ship-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 15L45 25H55L50 15Z" className="sail-main"/>
                <path d="M45 25L40 35H50L45 25Z" className="sail-secondary"/>
                <path d="M55 25L60 35H50L55 25Z" className="sail-secondary"/>
                <path d="M20 70C20 65 25 60 50 60C75 60 80 65 80 70L85 75H15L20 70Z" className="hull"/>
                <path d="M50 35V60" className="mast"/>
                <circle cx="85" cy="20" r="3" className="star star-1"/>
                <circle cx="15" cy="25" r="2" className="star star-2"/>
                <circle cx="90" cy="40" r="2" className="star star-3"/>
              </svg>
            </div>
            <div className="logo-text">
              <span className="logo-main">A Personal</span>
              <span className="logo-sub">Voyage</span>
            </div>
          </div>
          
          {/* Animated Elements */}
          <div className="voyage-trail">
            <div className="trail-dot trail-dot-1"></div>
            <div className="trail-dot trail-dot-2"></div>
            <div className="trail-dot trail-dot-3"></div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="nav-container">
          <ul className="nav-links">
            <li className="nav-item">
              <a href="#about" className="nav-link">
                <span className="nav-text">About</span>
                <div className="nav-hover-effect"></div>
              </a>
            </li>
            <li className="nav-item">
              <a href="#research" className="nav-link">
                <span className="nav-text">Research</span>
                <div className="nav-hover-effect"></div>
              </a>
            </li>
            <li className="nav-item">
              <Link href="/blog" className="nav-link active">
                <span className="nav-text">Blog</span>
                <div className="nav-hover-effect"></div>
              </Link>
            </li>
            <li className="nav-item">
              <a href="#projects" className="nav-link">
                <span className="nav-text">Projects</span>
                <div className="nav-hover-effect"></div>
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">
                <span className="nav-text">Contact</span>
                <div className="nav-hover-effect"></div>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav id="hamburger-nav">
        <div className="mobile-logo">
          <div className="mobile-logo-icon">
            <svg viewBox="0 0 50 50" fill="none">
              <path d="M25 8L22 15H28L25 8Z" className="sail-main"/>
              <path d="M22 15L20 22H25L22 15Z" className="sail-secondary"/>
              <path d="M28 15L30 22H25L28 15Z" className="sail-secondary"/>
              <path d="M10 35C10 32 12 30 25 30C38 30 40 32 40 35L42 37H8L10 35Z" className="hull"/>
              <path d="M25 18V30" className="mast"/>
            </svg>
          </div>
          <span>A Personal Voyage</span>
        </div>
        
        <div className="hamburger-menu">
          <div className="hamburger-icon" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="menu-links">
            <li><a href="#about" onClick={toggleMenu}>About</a></li>
            <li><a href="#research" onClick={toggleMenu}>Research</a></li>
            <li><Link href="/blog" onClick={toggleMenu}>Blog</Link></li>
            <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
          </div>
        </div>
      </nav>
    </>
  );
} 