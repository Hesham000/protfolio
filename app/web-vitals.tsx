"use client";

import { useEffect } from 'react';

export function WebVitals() {
  useEffect(() => {
    // Only load web vitals in development or when explicitly enabled
    if (process.env.NODE_ENV === 'development' || process.env.NEXT_PUBLIC_ENABLE_WEB_VITALS === 'true') {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(console.log, { reportAllChanges: true });
        getFID(console.log);
        getFCP(console.log);
        getLCP(console.log, { reportAllChanges: true });
        getTTFB(console.log);
      }).catch(() => {
        // Silently fail if web-vitals is not available
      });
    }
  }, []);

  return null;
} 