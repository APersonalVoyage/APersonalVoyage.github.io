'use client';
import Head from 'next/head';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import '../../styles/blog.css';
import { useEffect } from 'react';

export default function BlogPost1() {
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
        <title>Leadership, Morality, and the Struggle for Humanity | My Blog</title>
        <meta name="description" content="Exploring leadership and morality through Dostoevsky's Crime and Punishment." />
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
              <h1 className="single-blog-title">Leadership, Morality, and the Struggle for Humanity</h1>
              <p className="single-blog-intro">
                From ancient kings to modern billionaires, leadership has shaped societies and determined the fates of millions. Yet, the question remains: what makes a leader just, and what happens when power is used as a means rather than a responsibility? Fyodor Dostoevsky&apos;s <strong>Crime and Punishment</strong> offers a profound starting point to explore these questions, revealing how moral failures at the individual level reflect broader societal flaws.
              </p>
            </div>
            
            <div className="single-blog-content">
              <h2 className="single-blog-heading">Dostoevsky's Moral Critique</h2>
              <p className="single-blog-paragraph">
                In <strong>Crime and Punishment</strong>, Raskolnikov, a poor student, murders a pawnbroker to test a theory: could he justify his crime by arguing it served the greater good? After all, the pawnbroker was cruel, and her wealth could be used to help others. This idea is rooted in utilitarianism, where the morality of an action is judged by its outcome. However, Dostoevsky masterfully shows how this logic fails. Raskolnikov's guilt and psychological torment demonstrate that human life cannot be reduced to a calculation. The act of murder, regardless of its supposed benefits, dehumanizes both the victim and the perpetrator.
              </p>

              <h3 className="single-blog-subheading">The Leader's Burden</h3>
              <p className="single-blog-paragraph">
                This brings us to the core of leadership. A just leader, like a morally conscious individual, understands that certain lines cannot be crossed. They recognize the inherent worth of every person and do not see them as pawns in a larger game. When a leader starts believing that their vision justifies any means, they are on the same perilous path as Raskolnikov. The suffering of a few may seem acceptable for the prosperity of many, but this reasoning opens the door to tyranny. History is filled with examples of leaders who, driven by ideology or a sense of exceptionalism, inflicted immense suffering. From the colonial rulers who exploited entire nations for "civilizing" missions to the authoritarian regimes of the 20th century, the story is tragically similar. They all believed their ends justified their means.
              </p>

              <h2 className="single-blog-heading">The Social Contract and Its Failures</h2>
              <p className="single-blog-paragraph">
                In India, the struggle with leadership and civic sense is particularly complex. The social contract—the implicit agreement among people to cooperate for social benefits—often feels fragile. The legacy of colonialism, which created a deep-rooted mistrust of authority, is partly to blame. For centuries, the state was an external force, not a representation of the people's will. This historical context has contributed to a transactional relationship with rules and regulations. People often follow rules out of fear of punishment, not because they believe in them.
              </p>
              
              <ul className="single-blog-list">
                <li className="single-blog-list-item">
                  <strong>Colonial Hangover:</strong> The "mai-baap" culture, where the state is seen as a paternalistic provider, discourages active citizenship and encourages dependency.
                </li>
                <li className="single-blog-list-item">
                  <strong>Erosion of Trust:</strong> Widespread corruption and political opportunism have further eroded public trust. When leaders are seen as self-serving, the motivation for citizens to act responsibly diminishes.
                </li>
                <li className="single-blog-list-item">
                  <strong>Individualism vs. Collectivism:</strong> While Indian culture has strong collectivist traditions, they are often limited to family and community. A broader sense of civic duty toward the nation remains underdeveloped.
                </li>
              </ul>

              <h2 className="single-blog-heading">The Path Forward: A New Generation of Leadership</h2>
              <p className="single-blog-paragraph">
                So, where do we go from here? The solution is not simple, but it starts with redefining leadership. We need leaders who are not just managers or visionaries but also moral compasses. They must operate with empathy, integrity, and a deep-seated respect for human dignity. This kind of leadership is not about power but responsibility—a responsibility to uphold the social contract and foster a culture of mutual respect. For citizens, the path involves moving from passive subjects to active participants. It means holding leaders accountable, demanding transparency, and, most importantly, cultivating a sense of ownership over our shared spaces.
              </p>
              <p className="single-blog-paragraph">
                Dostoevsky's warning remains as relevant as ever: the moment we begin to see people as obstacles or tools, we have already lost our humanity. A just society is built not on grand theories but on the simple, unwavering belief in the value of every individual. Whether you are a leader of a nation or a citizen in a community, this is a principle worth fighting for.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
} 