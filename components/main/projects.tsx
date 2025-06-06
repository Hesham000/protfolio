"use client";

import { useState, useEffect, useRef, useMemo, Suspense } from "react";
import { motion, useInView, AnimatePresence, useReducedMotion } from "framer-motion";
import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";
import { 
  CodeBracketIcon, 
  DevicePhoneMobileIcon, 
  CloudIcon,
  CpuChipIcon,
  GlobeAltIcon,
  AcademicCapIcon,
  FunnelIcon,
  SparklesIcon,
  RocketLaunchIcon
} from "@heroicons/react/24/outline";

// Floating Particles Background Component
const FloatingParticles = () => {
  const [isClient, setIsClient] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    setIsClient(true);
    
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle system
    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      color: string;
    }> = [];

    const colors = ['#8B5CF6', '#06B6D4', '#10B981', '#F59E0B'];
    
    // Create particles (reduced count for performance)
    for (let i = 0; i < 25; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    let animationId: number;
    let lastTime = 0;
    const targetFPS = 30;
    const frameInterval = 1000 / targetFPS;

    const animate = (currentTime: number) => {
      if (currentTime - lastTime < frameInterval) {
        animationId = requestAnimationFrame(animate);
        return;
      }
      lastTime = currentTime;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        // Draw particle
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [isClient]);

  if (!isClient) {
    return <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 to-cyan-900/5" />;
  }

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 opacity-40"
      style={{ width: '100%', height: '100%' }}
    />
  );
};

// Types
interface ProjectStats {
  totalProjects: number;
  technologies: number;
  categories: number;
}

interface FilterButtonProps {
  category: string;
  isActive: boolean;
  onClick: (category: string) => void;
  icon: string;
}

// Constants
const ANIMATION_DURATION = 0.6;
const STAGGER_DELAY = 0.1;

// Optimized Filter Button Component
const FilterButton = ({ category, isActive, onClick, icon }: FilterButtonProps) => {
  const shouldReduceMotion = useReducedMotion();
  
  return (
    <motion.button
      onClick={() => onClick(category)}
      className={`
        relative px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 
        flex items-center gap-2 min-w-fit whitespace-nowrap
        ${isActive 
          ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/25" 
          : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-600/50 hover:border-purple-500/50"
        }
      `}
      whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
      whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: ANIMATION_DURATION }}
    >
      <span className="text-base">{icon}</span>
      <span>{category}</span>
      {isActive && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full -z-10"
          layoutId="activeFilter"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
    </motion.button>
  );
};

// Optimized Stats Component
const ProjectStatsOptimized = ({ stats }: { stats: ProjectStats }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();
  
  const statItems = useMemo(() => [
    { 
      value: stats.totalProjects, 
      label: "Projects", 
      icon: "🚀",
      color: "from-purple-500 to-blue-500"
    },
    { 
      value: stats.technologies, 
      label: "Technologies", 
      icon: "⚡",
      color: "from-cyan-500 to-teal-500"
    },
    { 
      value: stats.categories, 
      label: "Categories", 
      icon: "📂",
      color: "from-green-500 to-emerald-500"
    }
  ], [stats]);

  return (
    <motion.div
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: ANIMATION_DURATION, delay: 0.2 }}
    >
      {statItems.map((stat, index) => (
        <motion.div
          key={stat.label}
          className="bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center hover:border-purple-500/50 transition-all duration-300"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ 
            duration: ANIMATION_DURATION, 
            delay: shouldReduceMotion ? 0 : 0.3 + index * 0.1 
          }}
        >
          <div className="text-3xl mb-2">{stat.icon}</div>
          <div className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${stat.color} mb-1`}>
            {stat.value}
          </div>
          <div className="text-gray-400 text-sm">{stat.label}</div>
        </motion.div>
      ))}
    </motion.div>
  );
};

// Loading Component
const ProjectsLoading = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {[...Array(6)].map((_, i) => (
      <div key={i} className="h-80 bg-gray-800/30 rounded-xl animate-pulse" />
    ))}
  </div>
);

// Empty State Component
const EmptyState = () => (
  <motion.div
    className="text-center py-16"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: ANIMATION_DURATION }}
  >
    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-gray-600 to-gray-700 p-4">
      <CodeBracketIcon className="w-full h-full text-gray-400" />
    </div>
    <p className="text-gray-400 text-lg">No projects found in this category.</p>
    <p className="text-gray-500 text-sm mt-2">Try selecting a different filter above.</p>
  </motion.div>
);

// Main Projects Component
export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [isLoading, setIsLoading] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();

  // Handle smooth scrolling to sections
  const handleSectionClick = (href: string, e: React.MouseEvent) => {
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
  };

  // Memoized calculations for better performance
  const { categories, stats, filteredProjects } = useMemo(() => {
    const uniqueCategories = Array.from(new Set(PROJECTS.map(p => p.category)));
    const allCategories = ["All", ...uniqueCategories];
    
    const categoryIcons: Record<string, string> = {
      "All": "🌟",
      "Full-Stack & ML": "🤖",
      "Mobile & ML": "📱", 
      "Backend API": "⚙️",
      "Trading & Automation": "📈",
      "Enterprise System": "🏢",
      "WordPress": "📝",
      "Full-Stack": "💻",
      "E-Commerce": "🛒"
    };

    const categoriesWithIcons = allCategories.map(cat => ({
      name: cat,
      icon: categoryIcons[cat] || "📁"
    }));

    const projectStats: ProjectStats = {
      totalProjects: PROJECTS.length,
      technologies: Array.from(new Set(PROJECTS.flatMap(p => p.technologies))).length,
      categories: uniqueCategories.length
    };

    const filtered = activeFilter === "All" 
      ? PROJECTS 
      : PROJECTS.filter(project => project.category === activeFilter);

    return {
      categories: categoriesWithIcons,
      stats: projectStats,
      filteredProjects: filtered
    };
  }, [activeFilter]);

  // Optimized filter change handler
  const handleFilterChange = (filter: string) => {
    if (filter === activeFilter) return;
    
    setIsLoading(true);
    setActiveFilter(filter);
    
    // Simulate brief loading for better UX
    setTimeout(() => setIsLoading(false), 150);
  };

  return (
    <section
      ref={containerRef}
      id="projects"
      className="relative flex flex-col items-center justify-center py-20 px-4 overflow-hidden min-h-screen"
    >
      {/* Optimized Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#030014] via-[#0a0520] to-[#030014] -z-20" />
      
      {/* Simplified gradient overlays for better performance */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Enhanced Header */}
        <motion.header
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: ANIMATION_DURATION }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full border border-purple-500/30 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1, duration: ANIMATION_DURATION }}
          >
            <SparklesIcon className="w-5 h-5 text-purple-400" />
            <span className="text-purple-300 text-sm font-medium">Featured Work</span>
          </motion.div>
          
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: ANIMATION_DURATION }}
          >
            My Projects
          </motion.h1>
          
          <motion.p
            className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: ANIMATION_DURATION }}
          >
            A collection of{" "}
            <span className="text-purple-400 font-semibold">full-stack applications</span>,{" "}
            <span className="text-cyan-400 font-semibold">AI/ML projects</span>, and{" "}
            <span className="text-green-400 font-semibold">enterprise solutions</span>{" "}
            showcasing modern development practices.
          </motion.p>
        </motion.header>

        {/* Project Statistics */}
        <ProjectStatsOptimized stats={stats} />

        {/* Optimized Filter Section */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: ANIMATION_DURATION }}
        >
          <div className="flex items-center gap-3 mb-4">
            <FunnelIcon className="w-5 h-5 text-gray-400" />
            <h3 className="text-lg font-semibold text-gray-300">Filter by Category</h3>
          </div>
          
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
            {categories.map((category, index) => (
              <FilterButton
                key={category.name}
                category={category.name}
                icon={category.icon}
                isActive={activeFilter === category.name}
                onClick={handleFilterChange}
              />
            ))}
          </div>
        </motion.div>

        {/* Projects Grid with Suspense */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: ANIMATION_DURATION }}
        >
          <Suspense fallback={<ProjectsLoading />}>
            <AnimatePresence mode="wait">
              {isLoading ? (
                <ProjectsLoading />
              ) : filteredProjects.length === 0 ? (
                <EmptyState />
              ) : (
                <motion.div
                  key={activeFilter}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: ANIMATION_DURATION }}
                >
                  {filteredProjects.map((project, index) => (
                    <ProjectCard
                      key={`${activeFilter}-${project.title}-${index}`}
                      title={project.title}
                      description={project.description}
                      technologies={project.technologies}
                      category={project.category}
                      link={project.link}
                      index={shouldReduceMotion ? 0 : index}
                    />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </Suspense>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: ANIMATION_DURATION }}
        >
          <p className="text-gray-400 mb-6 text-lg">
            Ready to build something amazing together?
          </p>
          <motion.a
            href="#contact"
            onClick={(e) => handleSectionClick("#contact", e)}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium rounded-xl transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
            whileHover={shouldReduceMotion ? {} : { scale: 1.05, y: -2 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
          >
            <RocketLaunchIcon className="w-5 h-5 mr-2" />
            <span>Let's Collaborate</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
