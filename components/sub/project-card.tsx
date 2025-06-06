"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useState, useMemo } from "react";
import { 
  ArrowTopRightOnSquareIcon, 
  CodeBracketIcon,
  StarIcon,
  CheckCircleIcon
} from "@heroicons/react/24/outline";

// Types
type ProjectCardProps = {
  title: string;
  description: string;
  technologies: readonly string[];
  category: string;
  link: string;
  index?: number;
};

interface TechIconMapping {
  [key: string]: string;
}

interface ProjectHighlight {
  icon: string;
  text: string;
}

// Constants
const CARD_ANIMATION_DURATION = 0.5;

// Technology Icons Mapping - Optimized
const techIcons: TechIconMapping = {
  "React": "⚛️",
  "Node.js": "🟢",
  "MongoDB": "🍃",
  "Express.js": "🚂",
  "Next.js": "⚡",
  "Flutter": "🦋",
  "Firebase": "🔥",
  "Python": "🐍",
  "JavaScript": "🟨",
  "TypeScript": "🔷",
  "MySQL": "🐬",
  "AWS": "☁️",
  "Docker": "🐳",
  "React Native": "📱",
  "NLP": "🧠",
  "ML": "🤖",
  "WebSockets": "🔌",
  "WordPress": "📝",
  "Sequelize": "🔗",
  "IBM Cloud": "☁️",
  "C++": "⚙️",
  "C#": "💎",
  ".NET": "🎯",
  "FastAPI": "⚡",
  "Supabase": "⚡",
  "HTML": "🌐",
  "CSS": "🎨"
};

// Optimized function to get project highlights
const getProjectHighlights = (category: string, technologies: readonly string[]): ProjectHighlight[] => {
  const highlights: ProjectHighlight[] = [];
  const techSet = new Set(technologies);
  
  // AI/ML Integration
  if (techSet.has("ML") || techSet.has("Python") || techSet.has("NLP")) {
    highlights.push({ icon: "🤖", text: "AI/ML" });
  }
  
  // Responsive Design
  if (techSet.has("React") || techSet.has("Next.js") || techSet.has("Flutter")) {
    highlights.push({ icon: "📱", text: "Responsive" });
  }
  
  // Backend Performance
  if (techSet.has("Node.js") || techSet.has("Express.js") || techSet.has(".NET")) {
    highlights.push({ icon: "⚡", text: "Fast API" });
  }
  
  // Cloud & Database
  if (techSet.has("AWS") || techSet.has("IBM Cloud") || techSet.has("MongoDB")) {
    highlights.push({ icon: "☁️", text: "Cloud-Ready" });
  }
  
  // E-Commerce specific
  if (category === "E-Commerce") {
    highlights.push({ icon: "🛒", text: "E-Commerce" });
  }
  
  return highlights.slice(0, 2); // Limit to 2 highlights for better design
};

// Optimized Technology Badge Component
const TechBadge = ({ tech, index }: { tech: string; index: number }) => {
  const shouldReduceMotion = useReducedMotion();
  
  return (
    <motion.span
      className="px-3 py-1 text-xs font-medium bg-gray-800/50 text-cyan-300 rounded-lg border border-gray-600/50 hover:border-cyan-500/50 transition-all duration-300 flex items-center gap-1"
      whileHover={shouldReduceMotion ? {} : { 
        scale: 1.05, 
        backgroundColor: "rgba(6, 182, 212, 0.1)",
        borderColor: "rgba(6, 182, 212, 0.5)"
      }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        delay: shouldReduceMotion ? 0 : index * 0.05, 
        duration: CARD_ANIMATION_DURATION 
      }}
    >
      {techIcons[tech] && <span className="text-sm">{techIcons[tech]}</span>}
      <span>{tech}</span>
    </motion.span>
  );
};

// Main Project Card Component
export const ProjectCard = ({
  title,
  description,
  technologies,
  category,
  link,
  index = 0,
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  
  // Memoize expensive calculations
  const highlights = useMemo(() => 
    getProjectHighlights(category, technologies), 
    [category, technologies]
  );
  
  const truncatedDescription = useMemo(() => 
    description.length > 120 ? `${description.slice(0, 120)}...` : description,
    [description]
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        delay: shouldReduceMotion ? 0 : index * 0.1, 
        duration: CARD_ANIMATION_DURATION 
      }}
      className="group relative h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        href={link}
        target="_blank"
        rel="noreferrer noopener"
        className="block h-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-2xl"
        aria-label={`View ${title} project`}
      >
        <motion.article
          className="relative h-full overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/60 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 p-6 min-h-[400px] flex flex-col"
          whileHover={shouldReduceMotion ? {} : { 
            scale: 1.02,
            boxShadow: "0 25px 50px -12px rgba(147, 51, 234, 0.25)"
          }}
        >
          {/* Background Glow Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />

          {/* Category Badge */}
          <motion.div
            className="absolute top-4 right-4 z-10"
            whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
          >
            <span className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-purple-600/30 to-blue-600/30 text-purple-300 rounded-full border border-purple-500/40 backdrop-blur-sm">
              {category}
            </span>
          </motion.div>

          {/* Project Highlights */}
          {highlights.length > 0 && (
            <div className="absolute top-4 left-4 z-10 flex flex-col gap-1">
              {highlights.map((highlight, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-1 px-2 py-1 bg-gray-800/80 backdrop-blur-sm rounded-full text-xs text-gray-300 border border-gray-600/50"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ 
                    opacity: isHovered ? 1 : 0, 
                    x: isHovered ? 0 : -20 
                  }}
                  transition={{ delay: i * 0.1, duration: 0.3 }}
                >
                  <span>{highlight.icon}</span>
                  <span>{highlight.text}</span>
                </motion.div>
              ))}
            </div>
          )}

          {/* Main Content */}
          <div className="relative z-10 h-full flex flex-col pt-8">
            {/* Project Title */}
            <motion.h3
              className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-500"
              whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
            >
              {title}
            </motion.h3>

            {/* Project Description */}
            <motion.p
              className="text-gray-300 text-sm leading-relaxed mb-6 flex-grow"
              whileHover={{ color: "#d1d5db" }}
              transition={{ duration: 0.3 }}
            >
              {truncatedDescription}
            </motion.p>

            {/* Technologies Section */}
            <div className="space-y-3 mb-6">
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide flex items-center gap-2">
                <CodeBracketIcon className="w-4 h-4" />
                <span>Tech Stack</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {technologies.slice(0, 6).map((tech, i) => (
                  <TechBadge key={tech} tech={tech} index={i} />
                ))}
                {technologies.length > 6 && (
                  <span className="px-3 py-1 text-xs font-medium bg-gray-700/50 text-gray-400 rounded-lg border border-gray-600/50">
                    +{technologies.length - 6} more
                  </span>
                )}
              </div>
            </div>

            {/* Project Status */}
            <motion.div
              className="grid grid-cols-2 gap-3 mb-6 p-3 bg-gray-800/30 rounded-lg border border-gray-700/30"
              initial={{ opacity: 0.7 }}
              animate={{ opacity: isHovered ? 1 : 0.7 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-center">
                <div className="text-purple-400 text-sm font-bold flex items-center justify-center gap-1">
                  <StarIcon className="w-3 h-3" />
                  <span>Featured</span>
                </div>
                <div className="text-gray-500 text-xs">Project</div>
              </div>
              <div className="text-center">
                <div className="text-cyan-400 text-sm font-bold flex items-center justify-center gap-1">
                  <CheckCircleIcon className="w-3 h-3" />
                  <span>Complete</span>
                </div>
                <div className="text-gray-500 text-xs">Status</div>
              </div>
            </motion.div>

            {/* View Project Link */}
            <motion.div
              className="mt-auto pt-4 border-t border-gray-700/50"
              whileHover={{ borderColor: "rgba(147, 51, 234, 0.5)" }}
            >
              <motion.div
                className="flex items-center text-purple-400 text-sm font-medium group-hover:text-purple-300 transition-colors duration-300"
                whileHover={shouldReduceMotion ? {} : { x: 5 }}
              >
                <span className="mr-2">View Project</span>
                <motion.div
                  animate={{ 
                    x: isHovered ? 3 : 0, 
                    rotate: isHovered ? 45 : 0 
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* Corner Accent */}
          <motion.div
            className="absolute bottom-0 right-0 w-12 h-12 bg-gradient-to-tl from-purple-500/20 to-transparent rounded-tl-full"
            initial={{ scale: 0 }}
            animate={{ scale: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.article>
      </Link>
    </motion.div>
  );
};
