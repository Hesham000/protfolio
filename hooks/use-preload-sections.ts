import { useEffect, useCallback } from 'react';

export const usePreloadSections = (isEnabled: boolean = true) => {
  const preloadSection = useCallback((sectionName: string, chunkName: string) => {
    return import(
      /* webpackPrefetch: true */
      `../components/main/${sectionName}`
    ).catch(() => {
      // Silently fail if preload doesn't work
    });
  }, []);

  useEffect(() => {
    if (!isEnabled) return;

    let preloadTimer: NodeJS.Timeout;
    let hasScrolled = false;

    // Preload hero section immediately (above the fold)
    preloadSection('hero', 'hero-section');

    const handleScroll = () => {
      if (!hasScrolled) {
        hasScrolled = true;
        
        // User started scrolling, preload next sections
        preloadSection('about', 'about-section');
        
        // Preload other sections with delays to avoid overwhelming
        setTimeout(() => preloadSection('skills', 'skills-section'), 500);
        setTimeout(() => preloadSection('encryption', 'encryption-section'), 1000);
        setTimeout(() => preloadSection('projects', 'projects-section'), 1500);
        setTimeout(() => preloadSection('contact', 'contact-section'), 2000);
      }
    };

    const handleUserInteraction = () => {
      // User interacted, they're likely to explore more
      if (!hasScrolled) {
        preloadSection('about', 'about-section');
        setTimeout(() => preloadSection('skills', 'skills-section'), 200);
      }
    };

    // Preload sections after initial load is complete
    preloadTimer = setTimeout(() => {
      if (!hasScrolled) {
        // If user hasn't scrolled after 2 seconds, preload first few sections
        preloadSection('about', 'about-section');
        setTimeout(() => preloadSection('skills', 'skills-section'), 300);
      }
    }, 2000);

    // Listen for scroll and user interactions
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleUserInteraction, { once: true });
    window.addEventListener('touchstart', handleUserInteraction, { once: true });
    window.addEventListener('keydown', handleUserInteraction, { once: true });

    return () => {
      clearTimeout(preloadTimer);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleUserInteraction);
      window.removeEventListener('touchstart', handleUserInteraction);
      window.removeEventListener('keydown', handleUserInteraction);
    };
  }, [isEnabled, preloadSection]);
}; 