"use client";

import { useState, useEffect, lazy, Suspense } from "react";
import { usePreloadSplash } from "../../hooks/use-preload-splash";
import { usePreloadLayout } from "../../hooks/use-preload-layout";
import { usePreloadSections } from "../../hooks/use-preload-sections";
import { LayoutWrapper } from "../layout/layout-wrapper";
import { 
  HeroSkeleton, 
  AboutSkeleton, 
  SkillsSkeleton, 
  EncryptionSkeleton, 
  ProjectsSkeleton, 
  ContactSkeleton 
} from "../ui/section-skeleton";
import { SectionWrapper } from "../ui/cls-prevention";

// Lazy load all section components with webpack optimization
const Hero = lazy(() => 
  import(
    /* webpackChunkName: "hero-section" */
    /* webpackPrefetch: true */
    "./hero"
  ).then(module => ({ default: module.Hero }))
);

const About = lazy(() => 
  import(
    /* webpackChunkName: "about-section" */
    /* webpackPrefetch: true */
    "./about"
  ).then(module => ({ default: module.About }))
);

const Skills = lazy(() => 
  import(
    /* webpackChunkName: "skills-section" */
    /* webpackPrefetch: true */
    "./skills"
  ).then(module => ({ default: module.Skills }))
);

const Encryption = lazy(() => 
  import(
    /* webpackChunkName: "encryption-section" */
    /* webpackPrefetch: true */
    "./encryption"
  ).then(module => ({ default: module.Encryption }))
);

const Projects = lazy(() => 
  import(
    /* webpackChunkName: "projects-section" */
    /* webpackPrefetch: true */
    "./projects"
  ).then(module => ({ default: module.Projects }))
);

const Contact = lazy(() => 
  import(
    /* webpackChunkName: "contact-section" */
    /* webpackPrefetch: true */
    "./contact"
  ).then(module => ({ default: module.Contact }))
);

// Lazy load the splash screen component with webpack magic comments
const SplashScreen = lazy(() => 
  import(
    /* webpackChunkName: "splash-screen" */
    /* webpackPrefetch: true */
    "./splash-screen"
  )
);

// Section loading fallbacks
const SectionFallback = ({ height = "h-96", title }: { height?: string; title: string }) => (
  <section className={`w-full ${height} flex items-center justify-center`}>
    <div className="text-center">
      <div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-gray-400 text-sm">Loading {title}...</p>
    </div>
  </section>
);

// Optimized loading fallback for splash screen
const SplashScreenFallback = () => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
    <div className="text-center">
      <div className="w-6 h-6 border-2 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
      <p className="text-purple-300 text-xs">Loading magic...</p>
    </div>
  </div>
);

// Optimized Intersection Observer hook for lazy loading sections
const useIntersectionObserver = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const [element, setElement] = useState<Element | null>(null);

  useEffect(() => {
    if (!element || typeof window === 'undefined') return;

    // Use a more aggressive loading strategy
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once visible
        }
      },
      { 
        threshold, 
        rootMargin: '200px 0px', // Start loading 200px before visible
        // Use default root for better performance
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [element, threshold]);

  return [setElement, isVisible] as const;
};

// Lazy section wrapper with intersection observer
const LazySection = ({ 
  children, 
  fallback, 
  className = "" 
}: { 
  children: React.ReactNode; 
  fallback: React.ReactNode;
  className?: string;
}) => {
  const [setRef, isVisible] = useIntersectionObserver(0.1);

  return (
    <div ref={setRef} className={className}>
      {isVisible ? children : fallback}
    </div>
  );
};

export const MainContent = () => {
  const [showSplash, setShowSplash] = useState(false);
  const [isFirstVisit, setIsFirstVisit] = useState(true);
  const [isClient, setIsClient] = useState(false);
  const [splashLoaded, setSplashLoaded] = useState(false);

  // Preload splash screen component for better performance
  usePreloadSplash();
  
  // Preload layout components when splash is about to complete
  usePreloadLayout(!showSplash);
  
  // Intelligent section preloading based on user behavior
  usePreloadSections(!showSplash);

  useEffect(() => {
    setIsClient(true);
    
    if (typeof window === 'undefined') return;
    
    // For testing - always show splash screen
    // Remove this line after testing to restore localStorage behavior
    setShowSplash(true);
    setIsFirstVisit(true);
    
    // Check if user has visited before
    // const hasVisited = localStorage.getItem('portfolio-visited');
    
    // if (hasVisited) {
    //   // Skip splash for returning visitors
    //   setShowSplash(false);
    //   setIsFirstVisit(false);
    // } else {
    //   // Show splash for first-time visitors
    //   setShowSplash(true);
    //   localStorage.setItem('portfolio-visited', 'true');
    // }
  }, []);

  // Preload splash screen when component mounts
  useEffect(() => {
    if (isClient && isFirstVisit && showSplash && !splashLoaded) {
      // Start preloading immediately
      import(
        /* webpackChunkName: "splash-screen" */
        /* webpackPrefetch: true */
        "./splash-screen"
      ).then(() => {
        setSplashLoaded(true);
      }).catch(() => {
        // Fallback if preload fails
        setSplashLoaded(true);
      });
    }
  }, [isClient, isFirstVisit, showSplash, splashLoaded]);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  // Show loading state during hydration (no nav/footer)
  if (!isClient) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-[#030014]">
        <div className="text-white text-sm">Initializing...</div>
      </div>
    );
  }

  // Show splash screen for first-time visitors (no nav/footer)
  if (isFirstVisit && showSplash) {
    return (
      <Suspense fallback={<SplashScreenFallback />}>
        <SplashScreen onComplete={handleSplashComplete} />
      </Suspense>
    );
  }

  // Show main content with nav/footer and lazy-loaded sections
  return (
    <LayoutWrapper showNavAndFooter={true}>
      <main className="h-full w-full">
        <div className="flex flex-col gap-20">
          {/* Hero Section - Load immediately as it's above the fold */}
          <SectionWrapper minHeight="100vh" id="hero">
            <Suspense fallback={<HeroSkeleton />}>
              <Hero />
            </Suspense>
          </SectionWrapper>

          {/* About Section - Lazy load with intersection observer */}
          <LazySection 
            fallback={<AboutSkeleton />}
            className="scroll-mt-20"
          >
            <Suspense fallback={<AboutSkeleton />}>
              <About />
            </Suspense>
          </LazySection>

          {/* Skills Section - Lazy load */}
          <LazySection 
            fallback={<SkillsSkeleton />}
            className="scroll-mt-20"
          >
            <Suspense fallback={<SkillsSkeleton />}>
              <Skills />
            </Suspense>
          </LazySection>

          {/* Encryption Section - Lazy load */}
          <LazySection 
            fallback={<EncryptionSkeleton />}
            className="scroll-mt-20"
          >
            <Suspense fallback={<EncryptionSkeleton />}>
              <Encryption />
            </Suspense>
          </LazySection>

          {/* Projects Section - Lazy load */}
          <LazySection 
            fallback={<ProjectsSkeleton />}
            className="scroll-mt-20"
          >
            <Suspense fallback={<ProjectsSkeleton />}>
              <Projects />
            </Suspense>
          </LazySection>

          {/* Contact Section - Lazy load */}
          <LazySection 
            fallback={<ContactSkeleton />}
            className="scroll-mt-20"
          >
            <Suspense fallback={<ContactSkeleton />}>
              <Contact />
            </Suspense>
          </LazySection>
        </div>
      </main>
    </LayoutWrapper>
  );
}; 