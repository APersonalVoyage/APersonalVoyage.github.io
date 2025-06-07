'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function BlogPage() {
  useEffect(() => {
    const filterTabs = document.querySelectorAll('.filter-tab');
    const postCards = document.querySelectorAll('.post-card');
    
    filterTabs.forEach(tab => {
      tab.addEventListener('click', function() {
        filterTabs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        
        const filter = this.dataset.filter;
        postCards.forEach(card => {
          if (filter === 'all' || card.dataset.category === filter) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
    
    const searchInput = document.querySelector('.search-box input');
    const searchButton = document.querySelector('.search-box button');
    
    function performSearch() {
      const searchTerm = searchInput.value.toLowerCase();
      
      postCards.forEach(card => {
        const title = card.querySelector('.post-card-title').textContent.toLowerCase();
        const excerpt = card.querySelector('.post-card-excerpt').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || excerpt.includes(searchTerm)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    }
    
    if (searchButton && searchInput) {
      searchButton.addEventListener('click', performSearch);
      searchInput.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') {
          performSearch();
        }
      });
    }
  }, []);

  return (
    <>
      <Navigation />
      
      <main className="blog-main modern-section">
        {/* Section Background */}
        <div className="section-background">
          <div className="section-particles"></div>
          <div className="floating-geometry">
            <div className="geo-shape shape-1"></div>
            <div className="geo-shape shape-2"></div>
            <div className="geo-shape shape-3"></div>
            <div className="geo-shape shape-4"></div>
            <div className="geo-shape shape-5"></div>
            <div className="geo-shape shape-6"></div>
            <div className="geo-shape shape-7"></div>
            <div className="geo-shape shape-8"></div>
            <div className="geo-shape shape-9"></div>
            <div className="geo-shape shape-10"></div>
            <div className="geo-shape shape-11"></div>
            <div className="geo-shape shape-12"></div>
          </div>
        </div>

        <div className="section-wrapper">
          {/* Blog Header */}
          <div className="section-header">
            <p className="section-subtitle">Personal Thoughts & Explorations</p>
            <h1 className="section-title">Welcome to My Blog</h1>
            <div className="title-decoration">
              <div className="decoration-line"></div>
              <span className="decoration-star">✦</span>
              <div className="decoration-line"></div>
            </div>
            <p className="section-description">
              Delve into thoughts, philosophies, and explorations on life, leadership, and beyond.
            </p>
          </div>

          {/* Blog Content */}
          <div className="blog-containers">
            {/* Blog Post 1 */}
            <article className="blog-details">
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="post-category philosophy">
                    <i className="fas fa-book"></i>
                    Philosophy
                  </span>
                  <span className="post-date">
                    <i className="fas fa-calendar"></i>
                    Recent Post
                  </span>
                </div>
                
                <h2 className="project-title">
                  <a href="/blog_post_1" className="blog-link">
                    1. Leadership, Morality, and the Struggle for Humanity
                  </a>
                </h2>
                
                <p className="blog-summary">
                  From ancient kings to modern billionaires, leadership has shaped societies and determined the fates of millions. Yet, the question remains: what makes a leader just, and what happens when power is used as a means rather than a responsibility? Fyodor Dostoevsky's <strong>Crime and Punishment</strong> offers a profound starting point to explore these questions, revealing how moral failures at the individual level reflect broader societal flaws.
                </p>
                
                <div className="tags">
                  <span className="tag">Leadership</span>
                  <span className="tag">Philosophy</span>
                  <span className="tag">Dostoevsky</span>
                  <span className="tag">Morality</span>
                </div>
                
                <a href="/blog_post_1" className="read-more">
                  Read Full Article <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </article>

            {/* Blog Post 2 */}
            <article className="blog-details">
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="post-category society">
                    <i className="fas fa-globe"></i>
                    Society
                  </span>
                  <span className="post-date">
                    <i className="fas fa-calendar"></i>
                    Recent Post
                  </span>
                </div>
                
                <h2 className="project-title">
                  <a href="/blog_post_2" className="blog-link">
                    2. Why Does India Struggle with Civic Sense? A Historical, Cultural, and Personal Perspective
                  </a>
                </h2>
                
                <p className="blog-summary">
                  Civic sense plays a crucial role in shaping a society, yet in India, a lack of it is evident everywhere—from littered streets to vandalized public property. This article delves into the historical and cultural roots of this issue, exploring colonial legacies, societal attitudes, and personal experiences that highlight why civic responsibility remains elusive.
                </p>
                
                <div className="tags">
                  <span className="tag">India</span>
                  <span className="tag">Society</span>
                  <span className="tag">Culture</span>
                  <span className="tag">History</span>
                </div>
                
                <a href="/blog_post_2" className="read-more">
                  Read Full Article <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </article>
          </div>

          {/* Newsletter Subscription */}
          <div className="newsletter-container">
            <h3>Stay Updated</h3>
            <p>Subscribe to get notified about new blog posts and insights</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email address" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
} 