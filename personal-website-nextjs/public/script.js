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

// Add smooth reveal for sections as you scroll
document.addEventListener('DOMContentLoaded', function() {
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
});

  