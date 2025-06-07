"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { DocumentArrowDownIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  // Handle smooth scrolling to sections with retry logic for lazy-loaded sections
  const handleSectionClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    
    console.log('Hero button clicked, navigating to:', href); // Debug log
    
    // Extract section ID from href
    const sectionId = href.replace('#', '');
    
    const scrollToSection = () => {
      const element = document.getElementById(sectionId);
      console.log('Looking for element:', sectionId, 'Found:', !!element); // Debug log
      
      if (element) {
        // Calculate offset for fixed navbar
        const navbarHeight = 80;
        const elementPosition = element.offsetTop - navbarHeight;
        
        console.log('Scrolling to position:', elementPosition); // Debug log
        
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
        return true;
      }
      return false;
    };
    
    // Try to scroll immediately
    if (!scrollToSection()) {
      console.log('Element not found immediately, retrying...'); // Debug log
      // If element not found, it might be lazy-loaded, wait a bit and try again
      setTimeout(() => {
        if (!scrollToSection()) {
          console.log('Element still not found, using approximate position'); // Debug log
          // If still not found, scroll to approximate position based on section order
          const approximatePositions: Record<string, number> = {
            'about-me': 800,
            'skills': 1600,
            'projects': 2400,
            'contact': 3200
          };
          
          const approxPosition = approximatePositions[sectionId];
          if (approxPosition) {
            console.log('Scrolling to approximate position:', approxPosition); // Debug log
            window.scrollTo({
              top: approxPosition,
              behavior: 'smooth'
            });
          }
        }
      }, 100);
    }
  };

  // Prevent hydration mismatch by not rendering interactive elements until mounted
  if (!isMounted) {
    return (
      <div className="flex flex-col lg:flex-row items-center justify-center px-4 sm:px-8 lg:px-20 mt-20 sm:mt-32 lg:mt-40 w-full z-[20] min-h-[calc(100vh-80px)]">
        <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start order-2 lg:order-1">
          <div className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]]">
            <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
            <h1 className="Welcome-text text-[13px]">
              Full Stack Developer Portfolio
            </h1>
          </div>

          <div className="flex flex-col gap-6 mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-[600px] w-auto h-auto">
            <span>
              Building{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                secure & scalable
              </span>{" "}
              applications.
            </span>
          </div>

          <div className="text-base sm:text-lg text-gray-400 my-5 max-w-[650px] space-y-4">
            <p>
              <span className="text-white font-semibold">Full Stack Developer</span> with over{" "}
              <span className="text-purple-400 font-semibold">2+ years of experience</span> in developing 
              secure and scalable APIs. Proficient in{" "}
              <span className="text-cyan-400">Node.js</span>, with knowledge in{" "}
              <span className="text-cyan-400">ASP.NET</span>, and{" "}
              <span className="text-cyan-400">AWS cloud services</span>.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <button
              onClick={(e) => {
                console.log('Button clicked!'); // Debug log
                handleSectionClick("#contact", e as any);
              }}
              className="py-3 px-6 button-primary text-center text-white cursor-pointer rounded-lg hover:scale-105 transition-transform duration-300 w-full sm:w-auto"
            >
              Get In Touch
            </button>
            <a
              href="/Hesham-Ali-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-6 border border-purple-500/50 text-center text-white cursor-pointer rounded-lg hover:bg-purple-500/10 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <DocumentArrowDownIcon className="w-5 h-5" />
              View My CV
            </a>
          </div>
        </div>

        <div className="w-full h-full flex justify-center items-center order-1 lg:order-2 mb-8 lg:mb-0">
          <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[650px] lg:h-[650px] max-w-full max-h-full">
            <Image
              src="/hero-bg.svg"
              alt="work icons"
              fill
              sizes="(max-width: 640px) 300px, (max-width: 768px) 400px, (max-width: 1024px) 500px, 650px"
              priority={true}
              draggable={false}
              className="select-none object-contain"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col lg:flex-row items-center justify-center px-4 sm:px-8 lg:px-20 mt-20 sm:mt-32 lg:mt-40 w-full z-[20] min-h-[calc(100vh-80px)]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start order-2 lg:order-1">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Full Stack Developer Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Building{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              secure & scalable
            </span>{" "}
            applications.
          </span>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.8)}
          className="text-base sm:text-lg text-gray-400 my-5 max-w-[650px] space-y-4"
        >
          {/* Always visible summary */}
          <p>
            <span className="text-white font-semibold">Full Stack Developer</span> with over{" "}
            <span className="text-purple-400 font-semibold">2+ years of experience</span> in developing 
            secure and scalable APIs. Proficient in{" "}
            <span className="text-cyan-400">Node.js</span>, with knowledge in{" "}
            <span className="text-cyan-400">ASP.NET</span>, and{" "}
            <span className="text-cyan-400">AWS cloud services</span>.
          </p>
          
          {/* Expandable content */}
          <motion.div
            initial={false}
            animate={{
              height: isExpanded ? "auto" : 0,
              opacity: isExpanded ? 1 : 0,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="space-y-4 pt-2">
              <p>
                Strong background in <span className="text-purple-400">database optimization</span> and 
                performance tuning. Known for writing{" "}
                <span className="text-white">clean, maintainable code</span> and collaborating 
                effectively within agile teams.
              </p>
              
              <p>
                Specialized in <span className="text-cyan-400">backend development</span> and 
                modern frontend technologies including{" "}
                <span className="text-cyan-400">React</span> and{" "}
                <span className="text-cyan-400">Next.js</span>.
              </p>

              <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-500/20 rounded-lg p-4 mt-4">
                <h4 className="text-white font-semibold mb-2">Key Specializations:</h4>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                    RESTful API Development & Integration
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                    Database Design & Performance Optimization
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                    Cloud Infrastructure & AWS Services
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                    Modern Frontend Frameworks (React, Next.js)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                    Mobile App Development (React Native, Flutter)
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Read More/Less Button */}
          <button
            onClick={toggleExpanded}
            className="mt-4 inline-flex items-center text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors duration-300 group"
          >
            <span>{isExpanded ? "Show Less" : "Read More"}</span>
            <motion.svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </motion.svg>
          </button>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(1)}
          className="flex flex-col sm:flex-row gap-4 mt-4"
        >
          <button
            onClick={(e) => {
              console.log('Static Button clicked!'); // Debug log
              handleSectionClick("#contact", e as any);
            }}
            className="py-3 px-6 button-primary text-center text-white cursor-pointer rounded-lg hover:scale-105 transition-transform duration-300 w-full sm:w-auto"
          >
            Get In Touch
          </button>
          <a
            href="/Hesham-Ali-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="py-3 px-6 border border-purple-500/50 text-center text-white cursor-pointer rounded-lg hover:bg-purple-500/10 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            <DocumentArrowDownIcon className="w-5 h-5" />
            View My CV
          </a>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center order-1 lg:order-2 mb-8 lg:mb-0"
      >
        <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[650px] lg:h-[650px] max-w-full max-h-full">
          <Image
            src="/hero-bg.svg"
            alt="work icons"
            fill
            sizes="(max-width: 640px) 300px, (max-width: 768px) 400px, (max-width: 1024px) 500px, 650px"
            priority={true}
            draggable={false}
            className="select-none object-contain"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};
