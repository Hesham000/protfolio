"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useMemo, useRef } from "react";
import { SkillDataProvider } from "@/components/sub/skill-data-provider";
import { SkillText } from "@/components/sub/skill-text";

import {
  BACKEND_SKILL,
  FRONTEND_SKILL,
  FULLSTACK_SKILL,
  OTHER_SKILL,
  SKILL_DATA,
} from "@/constants";

// Enhanced skill category component with parallax
const SkillCategory = ({ 
  title, 
  skills, 
  emoji, 
  index 
}: { 
  title: string; 
  skills: readonly any[]; 
  emoji: string; 
  index: number; 
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: index * 0.2,
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.6, 
        ease: "easeOut" 
      }
    }
  };

  return (
    <motion.div
      ref={sectionRef}
      className="w-full max-w-7xl mx-auto px-4 relative"
      style={{ y: smoothY, opacity }}
    >
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative"
      >
        {/* Category header with enhanced styling */}
        <motion.div
          variants={titleVariants}
          className="text-center mb-12 relative"
        >
          {/* Background glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 blur-3xl rounded-full" />
          
          <motion.div
            className="relative inline-block"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-[32px] md:text-[36px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-2">
              {emoji} {title}
            </h3>
            
            {/* Animated underline */}
            <motion.div
              className="h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto"
              initial={{ width: 0 }}
              animate={inView ? { width: "60%" } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </motion.div>
        </motion.div>

        {/* Skills grid with enhanced animations */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 justify-items-center"
          variants={containerVariants}
        >
          {skills.map((skill, skillIndex) => {
            const IconComponent = skill.icon;
            return (
              <motion.div
                key={skill.skill_name}
                variants={{
                  hidden: { 
                    opacity: 0, 
                    y: 50, 
                    scale: 0.8,
                    rotateY: -90 
                  },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    rotateY: 0,
                    transition: {
                      duration: 0.6,
                      delay: skillIndex * 0.05,
                      ease: "easeOut"
                    }
                  }
                }}
              >
                <SkillDataProvider
                  name={skill.skill_name}
                  width={skill.width}
                  height={skill.height}
                  index={skillIndex}
                >
                  <IconComponent size={Math.min(skill.width, skill.height)} />
                </SkillDataProvider>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export const Skills = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax effect for the entire section
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 50]);

  const skillCategories = useMemo(() => [
    { title: "Core Technologies", skills: SKILL_DATA, emoji: "⚡" },
    { title: "Frontend Development", skills: FRONTEND_SKILL, emoji: "🎨" },
    { title: "Backend Development", skills: BACKEND_SKILL, emoji: "⚙️" },
    { title: "Databases & Cloud", skills: FULLSTACK_SKILL, emoji: "☁️" },
    { title: "Mobile & Development Tools", skills: OTHER_SKILL, emoji: "📱" },
  ], []);

  return (
    <section
      ref={containerRef}
      id="skills"
      className="relative flex flex-col items-center justify-center min-h-screen py-20 overflow-hidden"
    >
      {/* Optimized static background */}
      <motion.div
        className="absolute inset-0 -z-20"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#030014] via-[#0a0520] to-[#030014]" />
        
        {/* Simplified background pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-purple-400/10 rounded-full blur-2xl" />
        </div>
      </motion.div>

      {/* Main content with parallax */}
      <motion.div
        className="relative z-10 w-full"
        style={{ y: contentY }}
      >
        {/* Section header */}
        <div className="mb-16">
      <SkillText />
      </div>

        {/* Skills categories */}
        <div className="space-y-24">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={category.title}
              title={category.title}
              skills={category.skills}
              emoji={category.emoji}
              index={index}
          />
        ))}
        </div>
      </motion.div>

      {/* Minimal decorative elements */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        {/* Simple corner decorations */}
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-purple-500/20 rounded-full opacity-30" />
        <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-cyan-500/20 rounded-lg opacity-30" />
      </div>
    </section>
  );
};
