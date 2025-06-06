"use client";

import { motion, useInView } from "framer-motion";
import { useState, useEffect, useRef, useMemo } from "react";
import { 
  LockClosedIcon, 
  ShieldCheckIcon, 
  KeyIcon, 
  EyeSlashIcon,
  CpuChipIcon,
  BoltIcon 
} from "@heroicons/react/24/outline";

// Optimized Matrix Code Rain Component
const MatrixRain = () => {
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

    // Matrix characters (binary and hex)
    const chars = "01ABCDEFabcdef";
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    
    // Optimized: Use fewer columns for better performance
    const drops: number[] = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * canvas.height;
    }

    let animationId: number;
    let lastTime = 0;
    const targetFPS = 30; // Reduced FPS for better performance
    const frameInterval = 1000 / targetFPS;

    const draw = (currentTime: number) => {
      if (currentTime - lastTime < frameInterval) {
        animationId = requestAnimationFrame(draw);
        return;
      }
      lastTime = currentTime;

      // Semi-transparent black background for trailing effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#0FA';
      ctx.font = `${fontSize}px monospace`;

      // Draw characters
      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillStyle = i % 3 === 0 ? '#0FA' : '#090'; // Vary colors slightly
        ctx.fillText(text, i * fontSize, drops[i]);

        // Reset drop to top randomly
        if (drops[i] > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] += fontSize;
      }

      animationId = requestAnimationFrame(draw);
    };

    animationId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [isClient]);

  if (!isClient) {
    return <div className="absolute inset-0 bg-black/20" />;
  }

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 opacity-30"
      style={{ width: '100%', height: '100%' }}
    />
  );
};

// Interactive Lock Component with Creative Security Sequence
const InteractiveLock = () => {
  const [securityState, setSecurityState] = useState<'idle' | 'scanning' | 'authenticating' | 'securing' | 'secured'>('idle');
  const [isHovered, setIsHovered] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [securityLevel, setSecurityLevel] = useState(0);
  const [showParticles, setShowParticles] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  // Security sequence steps
  const securitySteps = [
    "Initializing Security Protocol...",
    "Scanning Biometric Data...",
    "Verifying Identity...",
    "Encrypting Connection...",
    "Activating Shield Protocol...",
    "Security Protocol Active!"
  ];

  const [currentStep, setCurrentStep] = useState(0);

  const startSecuritySequence = async () => {
    if (securityState !== 'idle') {
      // Reset if already secured
      setSecurityState('idle');
      setScanProgress(0);
      setSecurityLevel(0);
      setCurrentStep(0);
      setShowParticles(false);
      return;
    }

    // Start scanning animation
    setSecurityState('scanning');
    setShowParticles(true);
    
    // Simulate biometric scan
    for (let i = 0; i <= 100; i += 2) {
      setScanProgress(i);
      await new Promise(resolve => setTimeout(resolve, 20));
    }
    
    setSecurityState('authenticating');
    
    // Simulate authentication steps
    for (let step = 0; step < securitySteps.length; step++) {
      setCurrentStep(step);
      setSecurityLevel((step + 1) * 20);
      await new Promise(resolve => setTimeout(resolve, 600));
    }
    
    setSecurityState('secured');
  };

  const lockVariants = {
    idle: {
      scale: 1,
      rotate: 0,
      filter: "hue-rotate(0deg) brightness(1)",
    },
    scanning: {
      scale: [1, 1.05, 1],
      filter: "hue-rotate(180deg) brightness(1.3)",
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    secured: {
      scale: 1.1,
      rotate: [0, -5, 5, 0],
      filter: "hue-rotate(120deg) brightness(1.4)",
      transition: {
        duration: 0.6,
        ease: "easeInOut"
      }
    },
    hover: {
      scale: 1.05,
      filter: "brightness(1.2)",
      transition: {
        duration: 0.2
      }
    }
  };

  const shackleVariants = {
    idle: { y: 0, rotate: 0 },
    secured: { 
      y: -10, 
      rotate: -15,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      className="relative flex flex-col items-center cursor-pointer select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={startSecuritySequence}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      {/* Particle Effect */}
      {showParticles && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full"
              initial={{
                x: 50,
                y: 50,
                opacity: 0
              }}
              animate={{
                x: 50 + Math.cos(i * 30 * Math.PI / 180) * (30 + Math.random() * 40),
                y: 50 + Math.sin(i * 30 * Math.PI / 180) * (30 + Math.random() * 40),
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.1,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      )}

      {/* Scanning Rings */}
      {securityState === 'scanning' && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute inset-0 border-2 border-cyan-400/30 rounded-full"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ 
                scale: [0.5, 2, 3],
                opacity: [0, 0.8, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeOut"
              }}
            />
          ))}
        </div>
      )}

      {/* Biometric Scanner */}
      {securityState === 'scanning' && (
        <motion.div
          className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-24 h-2 bg-gray-800 rounded-full overflow-hidden border border-cyan-500/50"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-400 to-purple-500"
            style={{ width: `${scanProgress}%` }}
            transition={{ duration: 0.1 }}
          />
          <div className="absolute inset-0 flex items-center justify-center text-xs text-white font-mono">
            {scanProgress}%
          </div>
        </motion.div>
      )}

      {/* Lock Shackle */}
      <motion.div
        className={`w-16 h-12 border-8 rounded-t-full mb-2 transition-colors duration-500 ${
          securityState === 'secured' ? 'border-green-400' : 'border-cyan-400'
        }`}
        variants={shackleVariants}
        animate={securityState === 'secured' ? "secured" : "idle"}
        style={{ borderBottomWidth: 0 }}
      />
      
      {/* Lock Body */}
      <motion.div
        className="relative"
        variants={lockVariants}
        animate={
          securityState === 'secured' ? "secured" : 
          securityState === 'scanning' ? "scanning" :
          isHovered ? "hover" : "idle"
        }
      >
        <div className={`w-20 h-16 rounded-lg shadow-2xl flex items-center justify-center transition-all duration-500 ${
          securityState === 'secured' 
            ? 'bg-gradient-to-br from-green-600 to-emerald-600' 
            : 'bg-gradient-to-br from-purple-600 to-cyan-600'
        }`}>
          {/* Keyhole */}
          {securityState === 'idle' && (
            <motion.div
              className="w-3 h-3 bg-black rounded-full relative"
              initial={{ scale: 1 }}
              animate={{ scale: isHovered ? 1.1 : 1 }}
            >
              <div className="absolute top-1/2 left-1/2 w-1 h-2 bg-black transform -translate-x-1/2" />
            </motion.div>
          )}

          {/* Scanning Animation */}
          {securityState === 'scanning' && (
            <motion.div
              className="w-8 h-8 border-2 border-cyan-400 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-2 h-2 bg-cyan-400 rounded-full" />
              </div>
            </motion.div>
          )}

          {/* Authenticating Animation */}
          {securityState === 'authenticating' && (
            <motion.div className="flex space-x-1">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-1 h-4 bg-purple-400 rounded-full"
                  animate={{ scaleY: [1, 2, 1] }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                />
              ))}
            </motion.div>
          )}
          
          {/* Success indicator when secured */}
          {securityState === 'secured' && (
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <ShieldCheckIcon className="w-8 h-8 text-white" />
            </motion.div>
          )}
        </div>
        
        {/* Dynamic glow effect */}
        <motion.div
          className={`absolute inset-0 rounded-lg blur-lg -z-10 transition-all duration-500 ${
            securityState === 'secured' 
              ? 'bg-gradient-to-br from-green-500/60 to-emerald-500/60' 
              : 'bg-gradient-to-br from-purple-500/50 to-cyan-500/50'
          }`}
          animate={
            securityState === 'secured' 
              ? { scale: 1.5, opacity: 0.9 } 
              : securityState === 'scanning'
              ? { scale: [1.2, 1.8, 1.2], opacity: [0.4, 0.8, 0.4] }
              : { scale: 1, opacity: 0.3 }
          }
          transition={{
            duration: securityState === 'scanning' ? 2 : 0.5,
            repeat: securityState === 'scanning' ? Infinity : 0
          }}
        />
      </motion.div>

      {/* Security Level Indicator */}
      {securityState !== 'idle' && (
        <motion.div
          className="mt-2 flex items-center space-x-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className={`w-2 h-1 rounded-full ${
                i < securityLevel / 20 ? 'bg-green-400' : 'bg-gray-600'
              }`}
              animate={{
                backgroundColor: i < securityLevel / 20 ? '#4ade80' : '#4b5563'
              }}
              transition={{ delay: i * 0.1 }}
            />
          ))}
        </motion.div>
      )}

      {/* Status text with dynamic messages */}
      <motion.div className="mt-4 text-center">
        <motion.p
          className="text-sm font-medium transition-colors duration-500"
          animate={{
            color: securityState === 'secured' ? "#10B981" : "#06B6D4"
          }}
        >
          {securityState === 'idle' && "CLICK TO SECURE"}
          {securityState === 'scanning' && "SCANNING..."}
          {securityState === 'authenticating' && "AUTHENTICATING..."}
          {securityState === 'secured' && "🔒 SECURED"}
        </motion.p>
        
        {/* Dynamic step indicator */}
        {securityState === 'authenticating' && (
          <motion.p
            className="text-xs text-gray-400 mt-1 font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {securitySteps[currentStep]}
          </motion.p>
        )}
      </motion.div>

      {/* Security Badge */}
      {securityState === 'secured' && (
        <motion.div
          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-600 to-emerald-600 px-3 py-1 rounded-full text-xs text-white font-semibold"
          initial={{ scale: 0, y: 10 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          AES-256 ACTIVE
        </motion.div>
      )}
    </motion.div>
  );
};

// Security Features Grid
const SecurityFeatures = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = useMemo(() => [
    {
      icon: LockClosedIcon,
      title: "End-to-End Encryption",
      description: "AES-256 encryption ensures your data remains private and secure",
      color: "from-purple-500 to-blue-500"
    },
    {
      icon: ShieldCheckIcon,
      title: "Advanced Security",
      description: "Multi-layer protection with real-time threat detection",
      color: "from-cyan-500 to-teal-500"
    },
    {
      icon: KeyIcon,
      title: "Secure Authentication",
      description: "JWT tokens with refresh rotation and secure session management",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: EyeSlashIcon,
      title: "Privacy First",
      description: "Zero-knowledge architecture keeps your information private",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: CpuChipIcon,
      title: "Optimized Performance",
      description: "Efficient algorithms ensure security without compromising speed",
      color: "from-green-500 to-blue-500"
    },
    {
      icon: BoltIcon,
      title: "Real-time Protection",
      description: "Continuous monitoring and instant threat response",
      color: "from-yellow-500 to-red-500"
    }
  ], []);

  return (
    <motion.div
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto px-4"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.8 }}
    >
      {features.map((feature, index) => (
        <motion.div
          key={feature.title}
          className="bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 group"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
          whileHover={{ scale: 1.02, y: -5 }}
        >
          <div className="flex items-center mb-4">
            <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} p-3 mr-4 group-hover:scale-110 transition-transform duration-300`}>
              <feature.icon className="w-full h-full text-white" />
            </div>
            <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
              {feature.title}
            </h3>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
            {feature.description}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
};

// Main Encryption Component
export const Encryption = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });

  return (
    <section 
      ref={containerRef}
      className="relative flex flex-col items-center justify-center min-h-screen w-full py-20 overflow-hidden"
    >
      {/* Optimized Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#030014] via-[#0a0520] to-[#030014] -z-20" />
      
      {/* Matrix Rain Background */}
      <div className="absolute inset-0 -z-10">
        <MatrixRain />
      </div>

      {/* Subtle gradient overlays */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-7xl mx-auto px-4">
        
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-[40px] md:text-[50px] font-bold text-center text-gray-200 mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
        >
          Performance{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            &
          </span>{" "}
            Security
          </motion.h2>
          
          <motion.p
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Building applications with enterprise-grade security without compromising on performance
          </motion.p>
        </motion.div>

        {/* Interactive Lock Section */}
        <div className="mb-16">
          <InteractiveLock />
          
          {/* Encryption Badge */}
          <motion.div
            className="Welcome-box px-[15px] py-[4px] border border-[#7042F88B] opacity-[0.9] mt-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <h3 className="Welcome-text text-[12px]">AES-256 ENCRYPTION</h3>
          </motion.div>
        </div>

        {/* Security Features Grid */}
        <SecurityFeatures />

        {/* Bottom Description */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <p className="text-[18px] md:text-[20px] font-medium text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Your data security is our top priority. Every application I build implements 
            <span className="text-purple-400 font-semibold"> military-grade encryption</span> and 
            <span className="text-cyan-400 font-semibold"> best security practices</span> to ensure 
            your information remains protected at all times.
          </p>
        </motion.div>
      </div>

      {/* Minimal decorative elements */}
      <div className="absolute inset-0 pointer-events-none -z-5">
        <div className="absolute top-10 left-10 w-2 h-2 bg-purple-400 rounded-full opacity-60" />
        <div className="absolute top-20 right-20 w-2 h-2 bg-cyan-400 rounded-full opacity-60" />
        <div className="absolute bottom-20 left-20 w-2 h-2 bg-purple-400 rounded-full opacity-60" />
        <div className="absolute bottom-10 right-10 w-2 h-2 bg-cyan-400 rounded-full opacity-60" />
      </div>
    </section>
  );
};
