"use client";

import { motion } from "framer-motion";
import { HeroContent } from "@/components/sub/hero-content";

export const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full overflow-hidden">
      {/* Optimized static background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#030014] via-[#0a0520] to-[#030014] -z-30" />
      
      {/* Subtle static overlay */}
      <div
        className="absolute inset-0 -z-10 opacity-30"
        style={{
          background: `radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 70%),
                       radial-gradient(circle at 80% 20%, rgba(6, 182, 212, 0.05) 0%, transparent 70%),
                       radial-gradient(circle at 40% 90%, rgba(139, 92, 246, 0.08) 0%, transparent 70%)`
        }}
      />

      {/* Minimal decorative elements - hidden on mobile for cleaner look */}
      <div className="absolute inset-0 pointer-events-none -z-10 hidden md:block">
        {/* Simple corner decorations */}
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-purple-500/20 rounded-full opacity-30" />
        <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-cyan-500/20 rounded-lg opacity-30" />
        <div className="absolute top-1/3 right-1/4 w-12 h-12 border border-purple-400/20 rounded-lg transform rotate-45 opacity-20" />
      </div>

      <HeroContent />
    </div>
  );
};
