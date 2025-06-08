'use client';

import { useEffect } from 'react';
import Script from 'next/script';
import './styles/home.css';

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Research from './components/Research';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {

  const handleScrollTo = (selector) => {
    const targetElement = document.querySelector(selector);
    if (targetElement) {
        const navHeight = 80;
        const offsetPosition = targetElement.offsetTop - navHeight - 20;
        
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
  };

  useEffect(() => {
    function createStars() {
        const container = document.body;
        const starCount = 100;
        
        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            const size = Math.random() * 2;
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            star.style.setProperty('--duration', `${3 + Math.random() * 4}s`);
            star.style.setProperty('--delay', `${Math.random() * 2}s`);
            container.appendChild(star);
        }
    }
    
    createStars();
        
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            handleScrollTo(targetId);
        });
    });
    
    function handleScroll() {
        let scrollTop = window.scrollY;
        let docHeight = document.documentElement.scrollHeight;
        let winHeight = window.innerHeight;
        let scrollPercent = scrollTop / (docHeight - winHeight);
        let progressBar = document.querySelector('.scroll-progress-bar');
        if(progressBar) {
            progressBar.style.width = scrollPercent * 100 + '%';
        }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.querySelectorAll('.star').forEach(s => s.remove());
    }
  }, []);

  return (
    <>
      <div className="scroll-progress-container">
        <div className="scroll-progress-bar"></div>
      </div>
      <Navigation />
      <Hero handleScrollTo={handleScrollTo} />
      <About handleScrollTo={handleScrollTo} />
      <Research handleScrollTo={handleScrollTo} />
      <Projects handleScrollTo={handleScrollTo} />
      <Contact />
      <Footer />
      
      <Script src="/script.js" />
      <Script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js" />
      <Script id="particles-config">
        {`
          particlesJS("particles-js", {
              particles: {
                  number: { value: 100, density: { enable: true, value_area: 800 } },
                  color: { value: ["#6e44ff", "#4cc9f0", "#f72585"] },
                  shape: { type: "circle" },
                  opacity: { value: 0.5, random: true },
                  size: { value: 3, random: true },
                  line_linked: { 
                      enable: true, 
                      distance: 150, 
                      color: "#4cc9f0", 
                      opacity: 0.3, 
                      width: 1 
                  },
                  move: { 
                      enable: true, 
                      speed: 1.5, 
                      direction: "none", 
                      random: true, 
                      straight: false, 
                      out_mode: "out" 
                  }
              },
              interactivity: {
                  detect_on: "canvas",
                  events: { 
                      onhover: { enable: true, mode: "repulse" }, 
                      onclick: { enable: true, mode: "push" } 
                  },
                  modes: { 
                      repulse: { distance: 100, duration: 0.4 }, 
                      push: { particles_nb: 4 } 
                  }
              }
          });
        `}
      </Script>
      <button id="back-to-top" title="Back to Top">↑</button>
      <div id="particles-js"></div>
    </>
  );
}
