"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";
import { 
  CodeBracketIcon, 
  AcademicCapIcon, 
  BriefcaseIcon,
  StarIcon,
  UserIcon,
  MapPinIcon,
  CalendarIcon,
  TrophyIcon
} from "@heroicons/react/24/outline";
import { FaNodeJs, FaReact, FaAws } from "react-icons/fa";
import { SiMongodb, SiTypescript, SiNextdotjs } from "react-icons/si";

// Personal info card component
const PersonalInfoCard = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  const personalInfo = [
    { icon: UserIcon, label: "Full Name", value: "Hesham Ali" },
    { icon: MapPinIcon, label: "Location", value: "Egypt" },
    { icon: CalendarIcon, label: "Experience", value: "2+ Years" },
    { icon: BriefcaseIcon, label: "Role", value: "Full Stack Developer" },
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, rotateY: -20 }}
      animate={inView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 rounded-2xl" />
      
      <div className="relative z-10">
        <motion.h3 
          className="text-2xl font-bold text-white mb-6 flex items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <UserIcon className="w-6 h-6 text-purple-400 mr-2" />
          Personal Information
        </motion.h3>
        
        <div className="space-y-4">
          {personalInfo.map((info, index) => (
            <motion.div
              key={info.label}
              className="flex items-center p-3 rounded-lg bg-gray-800/30 hover:bg-gray-700/30 transition-colors duration-300"
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02, x: 10 }}
            >
              <info.icon className="w-5 h-5 text-purple-400 mr-3" />
              <div>
                <p className="text-gray-400 text-sm">{info.label}</p>
                <p className="text-white font-medium">{info.value}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// Experience timeline component
const ExperienceTimeline = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const experiences = [
    {
      period: "2022 - Present",
      title: "Full Stack Developer",
      company: "Freelance",
      description: "Developing secure and scalable web applications using Node.js, React, and cloud technologies. Specialized in API development and database optimization.",
      technologies: [FaNodeJs, FaReact, SiMongodb, FaAws],
      icon: CodeBracketIcon,
    },
    {
      period: "2021 - 2022",
      title: "Backend Developer",
      company: "Various Projects",
      description: "Built RESTful APIs and microservices using Node.js and Express.js. Worked with multiple database systems and implemented cloud deployment strategies.",
      technologies: [FaNodeJs, SiMongodb, FaAws],
      icon: BriefcaseIcon,
    },
    {
      period: "2020 - 2021",
      title: "Learning & Development",
      company: "Self-Taught",
      description: "Intensive learning period focusing on modern web technologies, algorithms, and software engineering principles. Built numerous projects to solidify knowledge.",
      technologies: [FaReact, SiTypescript, SiNextdotjs],
      icon: AcademicCapIcon,
    },
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      <motion.h3 
        className="text-2xl font-bold text-white mb-8 flex items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <BriefcaseIcon className="w-6 h-6 text-purple-400 mr-2" />
        Experience Timeline
      </motion.h3>

      <div className="relative">
        {/* Timeline line */}
        <motion.div
          className="absolute left-4 top-0 w-0.5 bg-gradient-to-b from-purple-500 to-cyan-500 rounded-full"
          initial={{ height: 0 }}
          animate={inView ? { height: "100%" } : {}}
          transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
        />

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative pl-12"
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.7 + index * 0.2, duration: 0.6 }}
            >
              {/* Timeline dot */}
              <motion.div
                className="absolute left-0 w-8 h-8 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center"
                initial={{ scale: 0, rotate: -180 }}
                animate={inView ? { scale: 1, rotate: 0 } : {}}
                transition={{ delay: 0.8 + index * 0.2, duration: 0.5 }}
              >
                <exp.icon className="w-4 h-4 text-white" />
              </motion.div>

              {/* Experience card */}
              <motion.div
                className="bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 ml-4 hover:border-purple-500/50 transition-all duration-300"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h4 className="text-lg font-bold text-white">{exp.title}</h4>
                  <span className="text-purple-400 text-sm font-medium">{exp.period}</span>
                </div>
                
                <p className="text-cyan-400 font-medium mb-3">{exp.company}</p>
                <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-3">
                  {exp.technologies.map((Tech, techIndex) => (
                    <motion.div
                      key={techIndex}
                      className="w-8 h-8 text-purple-400 hover:text-white transition-colors duration-300"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                    >
                      <Tech size={32} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// Achievements section
const Achievements = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  const achievements = [
    { number: "8+", label: "Projects Completed", icon: TrophyIcon },
    { number: "2+", label: "Years Experience", icon: CalendarIcon },
    { number: "5+", label: "Technologies Mastered", icon: StarIcon },
    { number: "100%", label: "Client Satisfaction", icon: UserIcon },
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 rounded-2xl" />
      
      <div className="relative z-10">
        <motion.h3 
          className="text-2xl font-bold text-white mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Achievements & Stats
        </motion.h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="text-center p-4 rounded-xl bg-gray-800/30 hover:bg-gray-700/30 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <achievement.icon className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <motion.p 
                className="text-3xl font-bold text-white mb-2"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
              >
                {achievement.number}
              </motion.p>
              <p className="text-gray-400 text-sm">{achievement.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// Main About component
export const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 25]);

  const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <section
      ref={containerRef}
      id="about-me"
      className="relative min-h-screen py-20 overflow-hidden"
    >
      {/* Optimized static background with parallax */}
      <motion.div
        className="absolute inset-0 -z-20"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#030014] via-[#0a0520] to-[#030014]" />
        
        {/* Simplified background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 w-28 h-28 bg-purple-400/10 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2" />
        </div>
      </motion.div>

      {/* Main content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4"
        style={{ y: contentY }}
      >
        {/* Section header */}
        <motion.div
          ref={headerRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] mx-auto mb-8 w-fit"
            initial={{ scale: 0, rotate: -10 }}
            animate={headerInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <UserIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
            <h1 className="Welcome-text text-[13px]">Get To Know Me</h1>
          </motion.div>

          <motion.h2
            className="text-[48px] md:text-[60px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            About Me
          </motion.h2>

          <motion.p
            className="text-[20px] text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Passionate <span className="text-purple-400 font-semibold">Full Stack Developer</span> with a love for creating 
            innovative solutions. I combine technical expertise with creative problem-solving to build 
            applications that make a difference.
          </motion.p>
        </motion.div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Personal info - spans 1 column */}
          <div className="lg:col-span-1">
            <PersonalInfoCard />
          </div>

          {/* Experience timeline - spans 2 columns */}
          <div className="lg:col-span-2">
            <ExperienceTimeline />
          </div>
        </div>

        {/* Achievements section */}
        <Achievements />

        {/* Professional summary */}
        <motion.div
          className="mt-16 bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 rounded-2xl" />
          
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-6">My Mission</h3>
            <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
              I&apos;m dedicated to bridging the gap between innovative ideas and practical solutions. 
              My goal is to leverage cutting-edge technologies to create applications that not only 
              meet business requirements but also provide exceptional user experiences. Every project 
              is an opportunity to learn, grow, and make a positive impact.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}; 