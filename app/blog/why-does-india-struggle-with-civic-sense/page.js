'use client';
import Head from 'next/head';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import '../../styles/blog.css';
import { useEffect } from 'react';

export default function BlogPost2() {
  useEffect(() => {
    // Reading progress indicator
    const updateReadingProgress = () => {
      const article = document.querySelector('.single-blog-article');
      const scrollTop = window.scrollY;
      const docHeight = article.offsetHeight;
      const winHeight = window.innerHeight;
      const scrollPercent = scrollTop / (docHeight - winHeight);
      const scrollPercentRounded = Math.round(scrollPercent * 100);
      const progressBar = document.querySelector('.reading-progress-bar');
      if (progressBar) {
        progressBar.style.width = `${Math.min(scrollPercentRounded, 100)}%`;
      }
    };

    // Scroll to top functionality
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const showScrollButton = () => {
      const scrollButton = document.querySelector('.scroll-to-top');
      if (window.scrollY > 300) {
        scrollButton?.classList.add('visible');
      } else {
        scrollButton?.classList.remove('visible');
      }
    };

    // Add scroll event listeners
    window.addEventListener('scroll', updateReadingProgress);
    window.addEventListener('scroll', showScrollButton);

    // Add scroll to top button
    const scrollButton = document.createElement('div');
    scrollButton.className = 'scroll-to-top';
    scrollButton.innerHTML = '↑';
    scrollButton.style.fontSize = '20px';
    scrollButton.style.color = '#4cc9f0';
    scrollButton.style.fontWeight = 'bold';
    scrollButton.addEventListener('click', scrollToTop);
    document.body.appendChild(scrollButton);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', updateReadingProgress);
      window.removeEventListener('scroll', showScrollButton);
      scrollButton?.remove();
    };
  }, []);

  return (
    <>
      <Navigation />
      
      {/* Reading Progress Indicator */}
      <div className="reading-progress">
        <div className="reading-progress-bar"></div>
      </div>

      <Head>
        <title>Why Does India Struggle with Civic Sense? | My Blog</title>
        <meta name="description" content="A historical, cultural, and personal perspective on India's challenges with civic sense." />
      </Head>

      <main className="single-blog-post-main">
        <div className="single-blog-background">
          <div className="single-blog-particles"></div>
          <div className="blog-floating-geometry">
            <div className="blog-geo-shape blog-shape-1"></div>
            <div className="blog-geo-shape blog-shape-2"></div>
            <div className="blog-geo-shape blog-shape-3"></div>
            <div className="blog-geo-shape blog-shape-4"></div>
            <div className="blog-geo-shape blog-shape-5"></div>
          </div>
        </div>
        
        <div className="single-blog-container">
          <div className="single-blog-article">
            <div className="single-blog-header">
              <h1 className="single-blog-title">Why Does India Struggle with Civic Sense? A Historical, Cultural, and Personal Perspective</h1>
              <p className="single-blog-intro">
                Civic sense plays a crucial role in shaping a society, yet in India, a lack of it is evident everywhere—from littered streets to vandalized public property. This article delves into the historical and cultural roots of this issue, exploring colonial legacies, societal attitudes, and personal experiences that highlight why civic responsibility remains elusive.
              </p>
            </div>
            
            <div className="single-blog-content">
              <h2 className="single-blog-heading">The Colonial Hangover: A Deep-Rooted Distrust</h2>
              <p className="single-blog-paragraph">
                For centuries, India was ruled by foreign powers. The British Raj, in particular, created a system where the state was an oppressive machinery, not a protector of public welfare. Laws were enforced to control the populace, not to foster a sense of shared ownership. As a result, Indians developed a deep-seated mistrust of authority. Following rules felt like submitting to a foreign power, and breaking them was a subtle act of defiance. This historical baggage has lingered, contributing to a transactional relationship with the state. Many citizens view public property not as their own but as belonging to a distant, often corrupt, government.
              </p>

              <h2 className="single-blog-heading">Personal Experience: The Temple and the Train Station</h2>
              <p className="single-blog-paragraph">
                I remember visiting a magnificent temple in South India. The premises were immaculate, with devotees carefully ensuring no litter was left behind. The sense of reverence was palpable. Just a few kilometers away, the local train station was a scene of chaos—spit-stained walls, overflowing bins, and garbage strewn across the tracks. Why the stark difference? The temple was seen as a sacred, personal space, while the train station was just "sarkari" (government) property. This dichotomy is at the heart of India's civic sense problem. We take immense pride in our personal spaces—our homes, our places of worship—but that sense of ownership rarely extends to the public sphere.
              </p>

              <h2 className="single-blog-heading">Cultural Factors: The "Chalta Hai" Attitude</h2>
              <p className="single-blog-paragraph">
                The phrase "chalta hai" (it's okay/it'll do) encapsulates a uniquely Indian approach to life—a blend of resilience, adaptability, and, unfortunately, tolerance for mediocrity. While this attitude helps people navigate the daily struggles of a complex country, it also fosters a collective shrug when it comes to civic duties. A little garbage on the street? Chalta hai. A broken traffic light? Chalta hai. This acceptance of inadequacy prevents us from demanding better standards from ourselves and from our leaders.
              </p>

              <h2 className="single-blog-heading">The Way Forward: From Subjects to Citizens</h2>
              <p className="single-blog-paragraph">
                The solution is not just about stricter laws or cleaner cities; it's about a fundamental shift in mindset.
              </p>
              
              <ul className="single-blog-list">
                <li className="single-blog-list-item">
                  <strong>Education is Key:</strong> Civic education needs to be integrated into our schooling system, teaching children from a young age that public spaces belong to everyone.
                </li>
                <li className="single-blog-list-item">
                  <strong>Lead by Example:</strong> Political and community leaders must demonstrate a commitment to civic responsibility. When people see their leaders respecting public property, they are more likely to follow suit.
                </li>
                <li className="single-blog-list-item">
                  <strong>Foster Community Ownership:</strong> Initiatives that encourage local communities to take charge of their neighborhoods—like beautification drives or waste management programs—can help build a sense of collective ownership.
                </li>
              </ul>
              
              <p className="single-blog-paragraph">
                Ultimately, the struggle for civic sense in India is a struggle for a new kind of citizenship—one that moves beyond the colonial-era mindset of subjects and embraces the role of active, responsible stakeholders in a shared future. It's a long road, but it's a journey worth taking.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
}