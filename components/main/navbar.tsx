"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import { LINKS, NAV_LINKS, SOCIALS } from "@/constants";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    setIsMounted(true);
    
    // Handle scroll effect
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    // Handle active section highlighting
    const handleActiveSection = () => {
      const sections = ['about-me', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleActiveSection);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleActiveSection);
    };
  }, []);

  const isLinkActive = (link: string) => {
    const sectionId = link.replace('#', '');
    return activeSection === sectionId;
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Handle smooth scrolling to sections
  const handleSectionClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    
    // Close mobile menu if open
    closeMobileMenu();
    
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
  };

  const navbarVariants = {
    top: {
      backgroundColor: "rgba(3, 0, 20, 0.1)",
      backdropFilter: "blur(10px)",
      borderBottom: "1px solid rgba(112, 66, 248, 0.1)",
    },
    scrolled: {
      backgroundColor: "rgba(3, 0, 20, 0.95)",
      backdropFilter: "blur(20px)",
      borderBottom: "1px solid rgba(112, 66, 248, 0.3)",
    }
  };

  const logoVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    hover: { 
      scale: 1.05, 
      transition: { duration: 0.2 } 
    }
  };

  const mobileMenuVariants = {
    hidden: { 
      opacity: 0, 
      y: -20,
      transition: { duration: 0.3 }
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.4,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  const mobileMenuItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <motion.nav
      className="w-full h-[80px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 z-50 px-4 sm:px-6 lg:px-10"
      initial="top"
      animate={scrolled ? "scrolled" : "top"}
      variants={navbarVariants}
      transition={{ duration: 0.3 }}
    >
      {/* Navbar Container */}
      <div className="w-full h-full flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo + Name */}
        <motion.div
          variants={logoVariants}
          initial="hidden"
          animate="visible"
          className="flex items-center"
        >
          <a
            href="#about-me"
            className="flex items-center group cursor-pointer"
            onClick={(e) => handleSectionClick("#about-me", e)}
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="relative w-[60px] h-[60px] flex-shrink-0"
            >
              <Image
                src="/logo.png"
                alt="Logo"
                fill
                sizes="60px"
                priority={true}
                draggable={false}
                className="cursor-pointer object-contain"
              />
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
            
            <motion.div 
              className="hidden sm:flex flex-col ml-3"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <span className="font-bold text-white text-lg tracking-wide">
                Hesham Ali
              </span>
              <span className="text-purple-400 text-xs font-medium">
                Full Stack Developer
              </span>
            </motion.div>
          </a>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.div 
          className="hidden lg:flex items-center space-x-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center space-x-6 bg-gradient-to-r from-gray-900/60 to-gray-800/40 backdrop-blur-md border border-purple-500/20 rounded-full px-8 py-3">
            {NAV_LINKS.map((link, index) => (
              <motion.div
                key={link.title}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                transition={{ delay: index * 0.1 }}
              >
                <a
                  href={link.link}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg cursor-pointer ${
                    isLinkActive(link.link)
                      ? 'text-white bg-gradient-to-r from-purple-500 to-cyan-500'
                      : 'text-gray-300 hover:text-white hover:bg-purple-500/20'
                  }`}
                  onClick={(e) => handleSectionClick(link.link, e)}
                                  >
                  {link.title}
                  
                  {/* Active indicator */}
                  {isLinkActive(link.link) && (
                    <motion.div
                      className="absolute -bottom-1 left-1/2 w-2 h-2 bg-cyan-400 rounded-full"
                      layoutId="activeIndicator"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      style={{ x: '-50%' }}
                    />
                  )}
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Cosmic Elements + Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          {/* Cosmic Portal (Desktop) */}
          <motion.div 
            className="hidden md:flex items-center space-x-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Animated Coding Status */}
            <motion.div
              className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-gray-900/60 to-gray-800/40 backdrop-blur-md border border-purple-500/20 rounded-full"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.div
                className="w-2 h-2 bg-green-400 rounded-full"
                animate={{
                  boxShadow: [
                    "0 0 5px rgba(34, 197, 94, 0.5)",
                    "0 0 15px rgba(34, 197, 94, 0.8)",
                    "0 0 5px rgba(34, 197, 94, 0.5)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-xs text-gray-300 font-mono">Available</span>
            </motion.div>

            {/* Cosmic Code Elements */}
            <div className="flex items-center space-x-2">
              {[
                { symbol: "{}", color: "from-purple-400 to-purple-600" },
                { symbol: "</>", color: "from-cyan-400 to-cyan-600" },
                { symbol: "⚡", color: "from-yellow-400 to-yellow-600" }
              ].map((element, index) => (
                <motion.div
                  key={element.symbol}
                  className={`w-8 h-8 bg-gradient-to-br ${element.color} bg-opacity-20 backdrop-blur-sm border border-white/10 rounded-lg flex items-center justify-center text-xs font-mono font-bold text-white`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    delay: 0.6 + index * 0.1,
                    rotate: {
                      duration: 4 + index,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                  whileHover={{ 
                    scale: 1.2, 
                    boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)",
                    transition: { duration: 0.2 }
                  }}
                >
                  {element.symbol}
                </motion.div>
              ))}
            </div>

            {/* Floating Particles */}
            <div className="relative">
              {Array.from({ length: 3 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-purple-400 rounded-full"
                  style={{
                    left: `${i * 8}px`,
                    top: `${Math.sin(i) * 10}px`,
                  }}
                  animate={{
                    y: [-5, 5, -5],
                    opacity: [0.3, 1, 0.3],
                    scale: [0.8, 1.2, 0.8]
                  }}
                  transition={{
                    duration: 2 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.3
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden relative w-10 h-10 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 backdrop-blur-sm border border-purple-500/30 rounded-xl flex items-center justify-center hover:from-purple-500/40 hover:to-cyan-500/40 transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <AnimatePresence mode="wait">
              {!isMobileMenuOpen ? (
                <motion.div
                  key="hamburger"
                  initial={{ rotate: 0, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Bars3Icon className="h-6 w-6 text-white" />
                </motion.div>
              ) : (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <XMarkIcon className="h-6 w-6 text-white" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMounted && isMobileMenuOpen && (
          <motion.div
            className="absolute top-[80px] left-0 right-0 lg:hidden"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobileMenu}
            />
            
            {/* Menu Content */}
            <motion.div
              className="relative bg-gradient-to-br from-gray-900/95 to-gray-800/90 backdrop-blur-xl border-t border-purple-500/30 mx-4 mt-4 rounded-2xl overflow-hidden"
              variants={mobileMenuVariants}
            >
              {/* Decorative gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5" />
              
              <div className="relative p-6 space-y-6">
                {/* Navigation Links */}
                <div className="space-y-2">
                  {NAV_LINKS.map((link, index) => (
                    <motion.div
                      key={link.title}
                      variants={mobileMenuItemVariants}
                      custom={index}
                    >
                      <a
                        href={link.link}
                        className={`block w-full text-left px-6 py-4 rounded-xl text-lg font-medium transition-all duration-300 cursor-pointer ${
                          isLinkActive(link.link)
                            ? 'text-white bg-gradient-to-r from-purple-500/30 to-cyan-500/30 border border-purple-500/50'
                            : 'text-gray-300 hover:text-white hover:bg-purple-500/20'
                        }`}
                        onClick={(e) => handleSectionClick(link.link, e)}
                                              >
                          <motion.span
                            whileHover={{ x: 10 }}
                            transition={{ duration: 0.2 }}
                            className="flex items-center"
                          >
                            {link.title}
                            {isLinkActive(link.link) && (
                              <motion.div
                                className="ml-auto w-2 h-2 bg-cyan-400 rounded-full"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.2 }}
                              />
                            )}
                          </motion.span>
                        </a>
                    </motion.div>
                  ))}
                </div>

                {/* Divider */}
                <motion.div
                  className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                />

                {/* Social Icons */}
                <motion.div
                  className="flex justify-center space-x-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  {SOCIALS.map(({ link, name, icon: Icon }, index) => (
                    <motion.div
                      key={name}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Link
                        href={link}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="w-12 h-12 bg-gradient-to-br from-purple-500/30 to-cyan-500/30 backdrop-blur-sm border border-purple-500/40 rounded-xl flex items-center justify-center hover:from-purple-500/50 hover:to-cyan-500/50 transition-all duration-300"
                      >
                        <Icon className="h-6 w-6 text-white" />
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Contact Info */}
                <motion.div
                  className="text-center pt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <p className="text-purple-400 text-sm font-medium">
                    Available for freelance work
                  </p>
                  <p className="text-gray-400 text-xs mt-1">
                    Let's build something amazing together
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};