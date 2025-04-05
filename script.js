function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

// Smooth scroll progress bar
window.addEventListener('scroll', function() {
  let scrollTop = window.scrollY;
  let docHeight = document.documentElement.scrollHeight;
  let winHeight = window.innerHeight;
  let scrollPercent = scrollTop / (docHeight - winHeight);
  document.querySelector('.scroll-progress-bar').style.width = scrollPercent * 100 + '%';
});

// Back to top button with smooth behavior
window.onscroll = function() {
  const backToTopBtn = document.getElementById('back-to-top');
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    backToTopBtn.style.display = 'block';
    backToTopBtn.classList.add('visible');
  } else {
    backToTopBtn.classList.remove('visible');
  }
};

// When the button is clicked, add smooth scroll to top
document.getElementById('back-to-top').addEventListener('click', function() {
  window.scrollTo({top: 0, behavior: 'smooth'});
});

// Create starfield background
function createStars() {
  const container = document.body;
  const starCount = 100;
  
  for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    
    // Random position
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    
    // Random size
    const size = Math.random() * 2;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    
    // Random animation duration and delay
    star.style.setProperty('--duration', `${3 + Math.random() * 4}s`);
    star.style.setProperty('--delay', `${Math.random() * 2}s`);
    
    container.appendChild(star);
  }
}

// Initialize page when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Create stars
  createStars();
  
  // Intersection Observer for smooth section reveals
  const sections = document.querySelectorAll('section');
  
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  sections.forEach(section => {
    section.classList.add('hidden-section');
    observer.observe(section);
  });
  
  // Smooth scrolling for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        // Add proper offset to account for fixed navbar
        const navHeight = document.querySelector('nav').offsetHeight;
        const offsetPosition = targetElement.offsetTop - navHeight - 20;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Gravity-wave effect for profile image
  const profileImage = document.querySelector('.section__pic');
  if (profileImage) {
    profileImage.addEventListener('mouseover', function() {
      this.classList.add('gw-animate');
    });
    
    profileImage.addEventListener('mouseout', function() {
      this.classList.remove('gw-animate');
    });
  }
  
  // Set active class for current section in navigation
  const navLinks = document.querySelectorAll('.nav-links a');
  
  window.addEventListener('scroll', function() {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollY >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(current)) {
        link.classList.add('active');
      }
    });
  });
});

// Initialize particles.js with space theme colors
document.addEventListener('DOMContentLoaded', function() {
  if (typeof particlesJS !== 'undefined') {
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
  }
});

  