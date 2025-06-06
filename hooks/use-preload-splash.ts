import { useEffect } from 'react';

export const usePreloadSplash = () => {
  useEffect(() => {
    // Preload the splash screen component after initial render
    const preloadSplash = () => {
      // Check if we should show splash screen
      const hasVisited = localStorage.getItem('portfolio-visited');
      
      if (!hasVisited) {
        // Only preload if user hasn't visited before
        import(
          /* webpackChunkName: "splash-screen" */
          /* webpackPreload: true */
          '../components/main/splash-screen'
        ).catch(() => {
          // Silently fail if preload doesn't work
        });
      }
    };

    // Preload after a short delay to avoid blocking initial render
    const timeoutId = setTimeout(preloadSplash, 100);
    
    return () => clearTimeout(timeoutId);
  }, []);
}; 