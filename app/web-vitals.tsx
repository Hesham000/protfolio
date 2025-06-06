"use client";

import { useEffect } from 'react';

export function WebVitals() {
  useEffect(() => {
    // Only load web vitals in development or when explicitly enabled
    if (process.env.NODE_ENV === 'development' || process.env.NEXT_PUBLIC_ENABLE_WEB_VITALS === 'true') {
      import('web-vitals').then(({ onCLS, onINP, onFCP, onLCP, onTTFB }) => {
        onCLS(console.log, { reportAllChanges: true });
        onINP(console.log);
        onFCP(console.log);
        onLCP(console.log, { reportAllChanges: true });
        onTTFB(console.log);
      }).catch(() => {
        // Silently fail if web-vitals is not available
      });
    }
  }, []);

  return null;
} 