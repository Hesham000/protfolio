"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ReactNode, useState, useCallback } from "react";

type SkillDataProviderProps = {
  children: ReactNode;
  name: string;
  width: number;
  height: number;
  index: number;
};

export const SkillDataProvider = ({
  children,
  name,
  width,
  height,
  index,
}: SkillDataProviderProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);
  const handleClick = useCallback(() => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 200);
  }, []);

  const iconVariants = {
    hidden: { 
      opacity: 0, 
      y: 60, 
      scale: 0.3,
      rotateY: -180,
      filter: "blur(10px)"
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      rotateY: 0,
      filter: "blur(0px)"
    },
  };

  const containerVariants = {
    rest: {
      scale: 1,
      rotateY: 0,
      z: 0,
    },
    hover: {
      scale: 1.08,
      rotateY: 5,
      z: 50,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.95,
      rotateY: -5,
      transition: {
        duration: 0.1,
        ease: "easeInOut"
      }
    }
  };

  const glowVariants = {
    rest: {
      opacity: 0,
      scale: 0.8,
    },
    hover: {
      opacity: 1,
      scale: 1.2,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const pulseVariants = {
    rest: {
      scale: 1,
    },
    hover: {
      scale: [1, 1.1, 1],
      transition: {
        duration: 0.6,
        ease: "easeInOut",
        repeat: Infinity,
      }
    }
  };

  const iconSize = Math.min(width * 0.6, height * 0.6, 48);
  const animationDelay = (index * 0.08) + 0.1;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={iconVariants}
      animate={inView ? "visible" : "hidden"}
      transition={{ 
        delay: animationDelay,
        duration: 0.8,
        ease: "easeOut"
      }}
      className="relative perspective-1000"
    >
      <motion.div
        variants={containerVariants}
        initial="rest"
        animate={isHovered ? "hover" : isClicked ? "tap" : "rest"}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        className="group relative flex flex-col items-center justify-center p-4 m-2 min-w-[120px] max-w-[140px] h-[120px] cursor-pointer transform-gpu"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Main card background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden">
          {/* Animated gradient overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-purple-500/10 to-cyan-500/0"
            animate={isHovered ? {
              background: [
                "linear-gradient(45deg, rgba(139, 92, 246, 0) 0%, rgba(139, 92, 246, 0.2) 50%, rgba(6, 182, 212, 0) 100%)",
                "linear-gradient(45deg, rgba(6, 182, 212, 0) 0%, rgba(6, 182, 212, 0.2) 50%, rgba(139, 92, 246, 0) 100%)",
                "linear-gradient(45deg, rgba(139, 92, 246, 0) 0%, rgba(139, 92, 246, 0.2) 50%, rgba(6, 182, 212, 0) 100%)"
              ]
            } : {}}
            transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
          />
        </div>

        {/* Outer glow effect */}
        <motion.div
          variants={glowVariants}
          className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-cyan-500/30 rounded-xl blur-lg -z-10"
        />

        {/* Border glow */}
        <div className={`absolute inset-0 rounded-xl transition-all duration-300 ${
          isHovered 
            ? 'border-2 border-purple-400/70 shadow-lg shadow-purple-500/25' 
            : 'border border-gray-700/50'
        }`} />

        {/* Icon container with pulse effect */}
        <motion.div
          variants={pulseVariants}
          className="relative z-10 text-gray-300 group-hover:text-white transition-colors duration-300 mb-2 transform-gpu"
          title={name}
          style={{ fontSize: iconSize }}
    >
          {/* Icon background glow */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-cyan-400/20 rounded-full blur-md"
            animate={isHovered ? {
              scale: [1, 1.3, 1],
              opacity: [0.5, 0.8, 0.5]
            } : {}}
            transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0 }}
          />
          
          {/* Icon */}
          <div className="relative z-10">
            {children}
          </div>
        </motion.div>

        {/* Skill name with typing effect */}
        <motion.span 
          className="relative z-10 text-white text-xs font-medium text-center leading-tight group-hover:text-purple-300 transition-colors duration-300 px-1"
          animate={isHovered ? {
            scale: [1, 1.05, 1],
          } : {}}
          transition={{ duration: 0.4 }}
        >
          {name}
        </motion.span>

        {/* Bottom accent line with liquid animation */}
        <motion.div 
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
          initial={{ width: 0 }}
          animate={isHovered ? { width: "80%" } : { width: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />

        {/* Floating particles effect */}
        {isHovered && (
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 3 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-purple-400 rounded-full"
                style={{
                  left: `${20 + i * 30}%`,
                  top: `${30 + i * 20}%`,
                }}
                animate={{
                  y: [-10, -30, -10],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 1.5,
                  delay: i * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        )}

        {/* Click ripple effect */}
        {isClicked && (
          <motion.div
            className="absolute inset-0 border-2 border-purple-400 rounded-xl"
            initial={{ scale: 1, opacity: 0.8 }}
            animate={{ scale: 1.5, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        )}
      </motion.div>
    </motion.div>
  );
};
