import { useEffect } from 'react';

export const usePreloadLayout = (shouldPreload: boolean = false) => {
  useEffect(() => {
    if (!shouldPreload) return;

    // Preload navbar and footer after splash screen
    const preloadComponents = () => {
      // Preload navbar
      import(
        /* webpackChunkName: "navbar" */
        /* webpackPrefetch: true */
        '../components/main/navbar'
      ).catch(() => {
        // Silently fail if preload doesn't work
      });

      // Preload footer
      import(
        /* webpackChunkName: "footer" */
        /* webpackPrefetch: true */
        '../components/main/footer'
      ).catch(() => {
        // Silently fail if preload doesn't work
      });
    };

    // Small delay to avoid blocking the main thread
    const timeoutId = setTimeout(preloadComponents, 50);
    
    return () => clearTimeout(timeoutId);
  }, [shouldPreload]);
}; 