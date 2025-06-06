"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useMemo, useState, useEffect } from "react";
import { 
  HeartIcon,
  CodeBracketIcon,
  ArrowUpIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon
} from "@heroicons/react/24/outline";
import {
  FaGithub,
  FaLinkedin,
  FaReact,
  FaNode
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiFramer } from "react-icons/si";

// Types
interface FooterLink {
  name: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
  external?: boolean;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

// Constants
const ANIMATION_DURATION = 0.6;
const STAGGER_DELAY = 0.1;

// Optimized Footer Data
const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: "Connect",
    links: [
      {
        name: "GitHub",
        href: "https://github.com/Hesham000",
        icon: FaGithub,
        external: true
      },
      {
        name: "LinkedIn",
        href: "https://linkedin.com/in/hesham-ali-attia",
        icon: FaLinkedin,
        external: true
      }
    ]
  },
  {
    title: "Navigate",
    links: [
      {
        name: "About",
        href: "#about-me"
      },
      {
        name: "Skills", 
        href: "#skills"
      },
      {
        name: "Projects",
        href: "#projects"
      },
      {
        name: "Contact",
        href: "#contact"
      }
    ]
  },
  {
    title: "Support",
    links: [
      {
        name: "Email Me",
        href: "mailto:Hesham12ali13@gmail.com",
        icon: EnvelopeIcon
      },
      {
        name: "Hire Me",
        href: "#contact"
      },
      {
        name: "Feedback",
        href: "mailto:Hesham12ali13@gmail.com?subject=Feedback"
      }
    ]
  }
];

// Tech Stack used in the portfolio
const TECH_STACK = [
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Framer", icon: SiFramer, color: "#0055FF" },
  { name: "Node.js", icon: FaNode, color: "#339933" }
];



// Back to Top Button
const BackToTopButton = () => {
  const shouldReduceMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          toggleVisibility();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <motion.button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 p-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: ANIMATION_DURATION }}
      whileHover={shouldReduceMotion ? {} : { scale: 1.1, y: -2 }}
      whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
      aria-label="Back to top"
    >
      <ArrowUpIcon className="w-5 h-5" />
    </motion.button>
  );
};

// Main Footer Component
export const Footer = () => {
  const shouldReduceMotion = useReducedMotion();
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  // Handle smooth scrolling to sections
  const handleSectionClick = (href: string, e: React.MouseEvent) => {
    // Only handle hash links (internal sections)
    if (href.startsWith('#')) {
      e.preventDefault();
      
      // Extract section ID from href
      const sectionId = href.replace('#', '');
      const element = document.getElementById(sectionId);
      
      if (element) {
        // Calculate offset for fixed navbar
        const navbarHeight = 80;
        const elementPosition = element.offsetTop - navbarHeight;
        
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <>
      <footer className="relative w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-200 border-t border-gray-700/50">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_white_1px,_transparent_0)] bg-[length:20px_20px]" />
        </div>
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/5 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/5 to-transparent" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {/* Brand Section - Compact */}
              <motion.div
                className="lg:col-span-2 space-y-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: ANIMATION_DURATION }}
              >
                <motion.h2
                  className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-2"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: ANIMATION_DURATION, delay: 0.1 }}
                >
                  Hesham Ali
                </motion.h2>
                
                <motion.p
                  className="text-gray-400 text-sm leading-relaxed max-w-sm"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: ANIMATION_DURATION, delay: 0.2 }}
                >
                  Full Stack Developer specializing in{" "}
                  <span className="text-purple-400">React</span>,{" "}
                  <span className="text-cyan-400">Node.js</span>, and{" "}
                  <span className="text-green-400">AI/ML</span>.
                </motion.p>

                {/* Compact Contact */}
                <div className="flex flex-wrap gap-3 text-xs text-gray-400">
                  <Link
                    href="mailto:Hesham12ali13@gmail.com"
                    className="flex items-center gap-1 hover:text-purple-400 transition-colors"
                  >
                    <EnvelopeIcon className="w-3 h-3" />
                    Email
                  </Link>
                  <Link
                    href="tel:+201154063086"
                    className="flex items-center gap-1 hover:text-purple-400 transition-colors"
                  >
                    <PhoneIcon className="w-3 h-3" />
                    Call
                  </Link>
                  <span className="flex items-center gap-1">
                    <MapPinIcon className="w-3 h-3" />
                    Egypt
                  </span>
                </div>
              </motion.div>

              {/* Footer Links - Compact */}
              {FOOTER_SECTIONS.map((section, sectionIndex) => (
                <motion.div
                  key={section.title}
                  className="space-y-2"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: ANIMATION_DURATION, 
                    delay: shouldReduceMotion ? 0 : 0.2 + sectionIndex * 0.05 
                  }}
                >
                  <h3 className="text-sm font-semibold text-white mb-2">
                    {section.title}
                  </h3>
                  <div className="space-y-1">
                    {section.links.slice(0, 3).map((link, linkIndex) => 
                      link.external ? (
                        <Link
                          key={link.name}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="flex items-center gap-2 text-xs text-gray-400 hover:text-white transition-colors duration-300 py-1"
                        >
                          {link.icon && <link.icon className="w-3 h-3 text-purple-400" />}
                          <span>{link.name}</span>
                        </Link>
                      ) : (
                        <a
                          key={link.name}
                          href={link.href}
                          onClick={(e) => handleSectionClick(link.href, e)}
                          className="flex items-center gap-2 text-xs text-gray-400 hover:text-white transition-colors duration-300 py-1 cursor-pointer"
                        >
                          {link.icon && <link.icon className="w-3 h-3 text-purple-400" />}
                          <span>{link.name}</span>
                        </a>
                      )
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Copyright Section - Compact */}
          <motion.div
            className="py-4 border-t border-gray-700/50"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: ANIMATION_DURATION, delay: 0.4 }}
          >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span>&copy; {currentYear} Hesham Ali. All rights reserved.</span>
                <HeartIcon className="w-3 h-3 text-red-400" />
              </div>
              
              <div className="flex items-center gap-3 text-xs text-gray-500">
                {TECH_STACK.slice(0, 4).map((tech, index) => (
                  <div key={tech.name} className="flex items-center gap-1">
                    <tech.icon 
                      className="w-3 h-3" 
                      style={{ color: tech.color }}
                    />
                    <span className="hidden sm:inline">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <BackToTopButton />
    </>
  );
};
