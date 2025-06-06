"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  SparklesIcon, 
  CodeBracketIcon,
  CommandLineIcon,
  CpuChipIcon,
  BoltIcon,
  StarIcon
} from "@heroicons/react/24/outline";

// Types
interface CodeParticle {
  id: number;
  x: number;
  y: number;
  char: string;
  color: string;
}

// Reduced coding characters for better performance
const CODE_CHARS = ['{', '}', '<', '>', '/', '*', '+', '-', '=', '&'];

const WIZARD_SPELLS = [
  "const magic = () => dreams.come(true);",
  "function createWonders() { return innovation; }",
  "while(coding) { reality.transform(); }",
  "import { magic } from 'coding-wizard';",
  "// Casting digital spells...",
  "class Portfolio extends WizardPortal {}",
  "const spells = await loadMagicalCode();",
  "if (user.amazed) { showPortfolio(); }"
];

const LOADING_PHASES = [
  { text: "Initializing quantum algorithms...", duration: 1200 },
  { text: "Loading spell components...", duration: 1000 },
  { text: "Connecting to the matrix...", duration: 1300 },
  { text: "Compiling magical code...", duration: 900 },
  { text: "Optimizing wizard powers...", duration: 1100 },
  { text: "Preparing digital enchantments...", duration: 1000 },
  { text: "Calibrating reality distortion...", duration: 900 },
  { text: "Portal almost ready...", duration: 800 },
  { text: "Magic complete! Welcome...", duration: 700 }
];

// Simple CSS-based stars instead of canvas
const SimpleStars = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Generate static stars with CSS */}
      {Array.from({ length: 50 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2
          }}
        />
      ))}
    </div>
  );
};

// Ultra-light static particles
const CodeParticles = () => {
  const particles = useMemo(() => 
    Array.from({ length: 4 }, (_, i) => ({
      id: i,
      x: 20 + (i * 20),
      y: 20 + (i * 15),
      char: ['{', '}', '<', '>'][i],
      color: ['#8B5CF6', '#06B6D4', '#10B981', '#F59E0B'][i]
    })), []
  );

  return (
    <div className="absolute inset-0 z-10 pointer-events-none">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute font-mono font-bold text-xl opacity-30"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            color: particle.color,
            animation: `float-${particle.id} ${8 + particle.id}s infinite linear`
          }}
        >
          {particle.char}
        </div>
      ))}
      <style jsx>{`
        @keyframes float-0 { 0%, 100% { transform: translate(0, 0) rotate(0deg); } 50% { transform: translate(20px, -10px) rotate(180deg); } }
        @keyframes float-1 { 0%, 100% { transform: translate(0, 0) rotate(0deg); } 50% { transform: translate(-15px, 20px) rotate(-180deg); } }
        @keyframes float-2 { 0%, 100% { transform: translate(0, 0) rotate(0deg); } 50% { transform: translate(25px, 15px) rotate(180deg); } }
        @keyframes float-3 { 0%, 100% { transform: translate(0, 0) rotate(0deg); } 50% { transform: translate(-20px, -25px) rotate(-180deg); } }
      `}</style>
    </div>
  );
};

// Enhanced wizard with smooth animations
const CodingWizard = ({ currentSpell }: { currentSpell: string }) => {
  return (
    <div className="relative">
      {/* Animated Wizard Character */}
      <motion.div 
        className="relative w-32 h-32 mx-auto mb-8"
        animate={{ 
          scale: [1, 1.05, 1],
          rotateZ: [0, 2, -2, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* Enhanced Hat with glow */}
        <motion.div 
          className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-10 h-16 bg-gradient-to-b from-purple-500 via-purple-600 to-purple-800 shadow-lg shadow-purple-500/50"
          style={{ clipPath: 'polygon(35% 100%, 50% 0%, 65% 100%)' }}
          animate={{
            boxShadow: [
              "0 0 20px rgba(168, 85, 247, 0.5)",
              "0 0 30px rgba(168, 85, 247, 0.8)",
              "0 0 20px rgba(168, 85, 247, 0.5)"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div 
            className="absolute top-2 left-1/2 transform -translate-x-1/2"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <span className="text-yellow-400 text-lg drop-shadow-lg">⭐</span>
          </motion.div>
        </motion.div>

        {/* Enhanced Face with pulsing glow */}
        <motion.div 
          className="w-20 h-20 mx-auto bg-gradient-to-br from-gray-600 to-gray-900 rounded-full border-2 border-purple-400 flex items-center justify-center shadow-lg shadow-purple-500/30"
          animate={{
            borderColor: ["#a855f7", "#06b6d4", "#a855f7"],
            boxShadow: [
              "0 0 20px rgba(168, 85, 247, 0.3)",
              "0 0 30px rgba(6, 182, 212, 0.3)",
              "0 0 20px rgba(168, 85, 247, 0.3)"
            ]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <motion.span 
            className="text-cyan-400 text-lg font-mono font-bold drop-shadow-lg"
            animate={{ 
              color: ["#22d3ee", "#a855f7", "#22d3ee"],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            &lt;/&gt;
          </motion.span>
        </motion.div>

        {/* Enhanced Wand with magical sparkles */}
        <motion.div 
          className="absolute -right-6 top-6 w-8 h-1 bg-gradient-to-r from-amber-500 to-amber-700 rounded-full shadow-lg"
          animate={{ 
            rotate: [45, 50, 40, 45],
            boxShadow: [
              "0 0 10px rgba(245, 158, 11, 0.5)",
              "0 0 20px rgba(245, 158, 11, 0.8)",
              "0 0 10px rgba(245, 158, 11, 0.5)"
            ]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <motion.div 
            className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-300 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              boxShadow: [
                "0 0 5px rgba(252, 211, 77, 0.8)",
                "0 0 15px rgba(252, 211, 77, 1)",
                "0 0 5px rgba(252, 211, 77, 0.8)"
              ]
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          
          {/* Magical sparkles */}
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-yellow-300 rounded-full"
              style={{
                right: -8 - (i * 4),
                top: -2 + (i * 1),
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                x: [0, 10, 20]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3
              }}
            />
          ))}
        </motion.div>

        {/* Magical aura */}
        <motion.div
          className="absolute inset-0 rounded-full border border-purple-400/30"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </motion.div>

      {/* Enhanced spell text with typewriter effect */}
      <motion.div 
        className="text-center mb-6"
        key={currentSpell}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.p 
          className="text-purple-300 font-mono text-sm bg-gray-900/70 px-4 py-2 rounded-lg border border-purple-500/50 max-w-sm mx-auto backdrop-blur-sm"
          animate={{
            borderColor: ["rgba(168, 85, 247, 0.5)", "rgba(6, 182, 212, 0.5)", "rgba(168, 85, 247, 0.5)"],
            boxShadow: [
              "0 0 10px rgba(168, 85, 247, 0.2)",
              "0 0 15px rgba(6, 182, 212, 0.2)",
              "0 0 10px rgba(168, 85, 247, 0.2)"
            ]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          {currentSpell}
        </motion.p>
      </motion.div>
    </div>
  );
};

// Enhanced progress bar with sparkle effects
const EnhancedProgress = ({ progress, currentPhase }: { progress: number; currentPhase: string }) => {
  return (
    <div className="w-80 mx-auto mb-6">
      {/* Progress bar with animated background */}
      <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden border border-purple-500/30">
        <motion.div 
          className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full relative"
          style={{ width: `${progress}%` }}
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        >
          {/* Sparkle effect on progress bar */}
          <motion.div
            className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1 h-1 bg-white rounded-full"
            animate={{
              boxShadow: [
                "0 0 5px rgba(255, 255, 255, 0.8)",
                "0 0 15px rgba(255, 255, 255, 1)",
                "0 0 5px rgba(255, 255, 255, 0.8)"
              ]
            }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </motion.div>
        
        {/* Animated particles along the bar */}
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 transform -translate-y-1/2 w-1 h-1 bg-cyan-400 rounded-full"
            style={{ left: `${(progress * 0.8) + (i * 5)}%` }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
              y: [-5, 5, -5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.5
            }}
          />
        ))}
      </div>

      {/* Progress info */}
      <div className="flex justify-between items-center mt-3">
        <motion.span 
          className="text-purple-300 text-sm font-medium"
          key={currentPhase}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {currentPhase}
        </motion.span>
        <motion.span 
          className="text-cyan-300 text-sm font-mono bg-gray-900/50 px-2 py-1 rounded border border-cyan-500/30"
          animate={{
            color: ["#22d3ee", "#a855f7", "#22d3ee"]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {Math.round(progress)}%
        </motion.span>
      </div>
    </div>
  );
};

// Enhanced main component with time-based loading
interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [currentPhaseIndex, setCurrentPhaseIndex] = useState(0);
  const [currentSpellIndex, setCurrentSpellIndex] = useState(0);

  const currentPhase = LOADING_PHASES[currentPhaseIndex]?.text || "Portal ready!";
  const currentSpell = WIZARD_SPELLS[currentSpellIndex];

  useEffect(() => {
    let totalDuration = 0;
    let currentTime = 0;
    
    // Calculate total duration from all phases
    LOADING_PHASES.forEach(phase => {
      totalDuration += phase.duration;
    });

    const interval = setInterval(() => {
      currentTime += 100; // Update every 100ms for faster, smoother animation
      
      // Calculate which phase we're in
      let accumulatedTime = 0;
      let phaseIndex = 0;
      
      for (let i = 0; i < LOADING_PHASES.length; i++) {
        if (currentTime <= accumulatedTime + LOADING_PHASES[i].duration) {
          phaseIndex = i;
          break;
        }
        accumulatedTime += LOADING_PHASES[i].duration;
      }
      
      setCurrentPhaseIndex(phaseIndex);
      
      // Calculate progress as percentage
      const newProgress = Math.min((currentTime / totalDuration) * 100, 100);
      setProgress(newProgress);
      
      // Complete the splash screen
      if (newProgress >= 100) {
        setIsReady(true);
        setTimeout(() => {
          onComplete();
        }, 800); // Show completion state for 1 second
        clearInterval(interval);
      }
          }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  // Rotate spells every 2 seconds for faster pace
  useEffect(() => {
    const spellInterval = setInterval(() => {
      setCurrentSpellIndex(prev => (prev + 1) % WIZARD_SPELLS.length);
    }, 2000);

    return () => clearInterval(spellInterval);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.02 }}
        transition={{ duration: 0.4 }}
      >
        {/* Simple static stars */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }, (_, i) => (
            <div
              key={i}
              className="absolute w-0.5 h-0.5 bg-white rounded-full opacity-50"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        <CodeParticles />
        
        {/* Main content */}
        <div className="relative z-20 text-center">
          {/* Simple title */}
          <div className="mb-6">
            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-1">
              CODING WIZARD
            </h1>
            <p className="text-gray-400 text-sm">✨ Where Code Meets Magic ✨</p>
          </div>

          <CodingWizard currentSpell={currentSpell} />
          <EnhancedProgress progress={progress} currentPhase={currentPhase} />

          {/* Enhanced ready state */}
          {isReady && (
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "backOut" }}
            >
              <motion.div 
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-full text-white font-medium shadow-lg"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(168, 85, 247, 0.5)",
                    "0 0 40px rgba(168, 85, 247, 0.8)",
                    "0 0 20px rgba(168, 85, 247, 0.5)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <SparklesIcon className="w-5 h-5" />
                </motion.div>
                Portal Ready!
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <BoltIcon className="w-5 h-5" />
                </motion.div>
              </motion.div>
              
              <motion.p 
                className="text-purple-300 text-sm mt-3 font-mono"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Welcome to the magical world of code...
              </motion.p>
            </motion.div>
          )}
        </div>

        {/* Simple corner icons */}
        <div className="absolute top-6 left-6">
          <CodeBracketIcon className="w-4 h-4 text-purple-400 opacity-30" />
        </div>
        <div className="absolute bottom-6 right-6">
          <CodeBracketIcon className="w-4 h-4 text-cyan-400 opacity-30 transform rotate-180" />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

// Default export for better lazy loading
export { SplashScreen };
export default SplashScreen;