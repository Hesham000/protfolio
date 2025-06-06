"use client";

import { lazy, Suspense, useEffect, useState } from "react";
import { StarsCanvas } from "../main/star-background";

// Lazy load navbar and footer components with webpack optimization
const Navbar = lazy(() => 
  import(
    /* webpackChunkName: "navbar" */
    /* webpackPrefetch: true */
    "../main/navbar"
  ).then(module => ({ default: module.Navbar }))
);

const Footer = lazy(() => 
  import(
    /* webpackChunkName: "footer" */
    /* webpackPrefetch: true */
    "../main/footer"
  ).then(module => ({ default: module.Footer }))
);

// Simple loading fallbacks with proper sizing
const NavbarFallback = () => (
  <div className="w-full h-[80px] fixed top-0 z-50 bg-[#030014]/80 backdrop-blur-sm border-b border-purple-500/10 flex-shrink-0">
    <div className="w-full h-full flex items-center justify-between max-w-7xl mx-auto px-6">
      <div className="w-[60px] h-[60px] bg-gray-800 rounded-full animate-pulse flex-shrink-0"></div>
      <div className="hidden lg:flex space-x-4 flex-shrink-0">
        {Array.from({ length: 4 }, (_, i) => (
          <div key={i} className="w-16 h-6 bg-gray-800 rounded animate-pulse"></div>
        ))}
      </div>
      <div className="w-8 h-8 bg-gray-800 rounded animate-pulse lg:hidden flex-shrink-0"></div>
    </div>
  </div>
);

const FooterFallback = () => (
  <div className="w-full min-h-[300px] bg-gray-900 border-t border-gray-700/50 animate-pulse flex-shrink-0"></div>
);

interface LayoutWrapperProps {
  children: React.ReactNode;
  showNavAndFooter?: boolean;
}

export const LayoutWrapper = ({ children, showNavAndFooter = true }: LayoutWrapperProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <StarsCanvas />
      
      {/* Conditionally render navbar with lazy loading */}
      {showNavAndFooter && isClient && (
        <Suspense fallback={<NavbarFallback />}>
          <Navbar />
        </Suspense>
      )}
      
      {/* Main content */}
      {children}
      
      {/* Conditionally render footer with lazy loading */}
      {showNavAndFooter && isClient && (
        <Suspense fallback={<FooterFallback />}>
          <Footer />
        </Suspense>
      )}
    </>
  );
}; 