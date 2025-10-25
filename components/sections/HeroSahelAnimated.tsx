'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Target, Zap, Code2, Rocket, Users } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const HeroSahelAnimated = () => {
  const [mounted, setMounted] = useState(false);
  const [activeWord, setActiveWord] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const dynamicWords = [
    'Innovation',
    'Transformation',
    'Excellence',
    'Croissance',
    'Succès'
  ];

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setActiveWord((prev) => (prev + 1) % dynamicWords.length);
    }, 3000);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20 - 10,
        y: (e.clientY / window.innerHeight) * 20 - 10
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  if (!mounted) return null;

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#F5E6D3] via-[#E4C59E] to-[#D87C4A] pattern-dunes">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Circles - Dunes stylisées */}
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#F39C12]/20 to-[#E67E22]/10 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-[#D87C4A]/20 to-[#CC7722]/10 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-br from-[#FFD700]/15 to-[#E67E22]/10 rounded-full blur-3xl"
          animate={{
            x: [0, 20, 0],
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 2 }}
        />
        
        {/* Geometric Patterns - Motifs africains abstraits */}
        <motion.div 
          className="absolute top-10 right-20 w-32 h-32 border-4 border-[#E67E22]/20"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-32 left-32 w-24 h-24 border-4 border-[#CC7722]/20"
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: 1.5 }}
        />
        
        {/* Particles Effect */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-[#FFD700] to-[#E67E22] rounded-full"
            initial={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.3,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            
            {/* Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Sparkles className="w-5 h-5 text-[#E67E22] animate-pulse" />
              <span className="text-sm font-semibold text-[#8B4513]">
                Solutions IT pour le Sahel
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#654321]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Votre Partenaire
              <br />
              <span className="relative inline-block">
                <motion.span 
                  className="bg-gradient-to-r from-[#E67E22] via-[#FFD700] to-[#D87C4A] bg-clip-text text-transparent"
                  key={activeWord}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  d&apos;{dynamicWords[activeWord]}
                </motion.span>
                <motion.div 
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#E67E22] to-[#D87C4A]"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  style={{ transformOrigin: 'left' }}
                />
              </span>
              <br />
              Numérique
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              className="text-xl sm:text-2xl text-[#8B4513] max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Transformez votre entreprise avec nos solutions IT sur mesure, 
              conçues pour répondre aux défis uniques du Sahel.
            </motion.p>

            {/* Features Pills */}
            <motion.div 
              className="flex flex-wrap justify-center lg:justify-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover-lift cursor-pointer">
                <Target className="w-5 h-5 text-[#E67E22]" />
                <span className="font-medium text-[#654321]">Solutions Personnalisées</span>
              </div>
              <div className="flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover-lift cursor-pointer">
                <Zap className="w-5 h-5 text-[#F39C12]" />
                <span className="font-medium text-[#654321]">Expertise Locale</span>
              </div>
              <div className="flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover-lift cursor-pointer">
                <Rocket className="w-5 h-5 text-[#CC7722]" />
                <span className="font-medium text-[#654321]">Innovation Continue</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Link href="#contact">
                <button className="btn-sahel group inline-flex items-center gap-2 text-lg">
                  Commencer Maintenant
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="#services">
                <button className="btn-sahel-outline inline-flex items-center gap-2 text-lg">
                  <Code2 className="w-5 h-5" />
                  Découvrir nos Services
                </button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-6 pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <div className="text-center lg:text-left">
                <div className="text-4xl font-bold text-[#E67E22] mb-1">50+</div>
                <div className="text-sm text-[#8B4513]">Projets Réalisés</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-4xl font-bold text-[#F39C12] mb-1">30+</div>
                <div className="text-sm text-[#8B4513]">Clients Satisfaits</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-4xl font-bold text-[#CC7722] mb-1">99%</div>
                <div className="text-sm text-[#8B4513]">Satisfaction</div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Hero Illustration */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            style={{
              transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
              transition: 'transform 0.3s ease-out'
            }}
          >
            {/* Main Illustration Container */}
            <div className="relative aspect-square max-w-lg mx-auto">
              
              {/* Animated Background Blob */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#E67E22]/20 via-[#FFD700]/20 to-[#D87C4A]/20 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] blur-2xl"
                animate={{
                  borderRadius: [
                    "40% 60% 70% 30% / 40% 50% 60% 50%",
                    "60% 40% 30% 70% / 50% 60% 40% 50%",
                    "40% 60% 70% 30% / 40% 50% 60% 50%"
                  ]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Floating Elements */}
              <motion.div
                className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-br from-[#E67E22] to-[#D87C4A] rounded-2xl shadow-2xl flex items-center justify-center"
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 10, 0]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Code2 className="w-10 h-10 text-white" />
              </motion.div>

              <motion.div
                className="absolute bottom-20 left-10 w-16 h-16 bg-gradient-to-br from-[#FFD700] to-[#F39C12] rounded-xl shadow-xl flex items-center justify-center"
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, -10, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <Rocket className="w-8 h-8 text-white" />
              </motion.div>

              <motion.div
                className="absolute top-1/3 left-5 w-14 h-14 bg-gradient-to-br from-[#2C5F2D] to-[#4A7C59] rounded-lg shadow-lg flex items-center justify-center"
                animate={{
                  y: [0, -15, 0],
                  x: [0, 10, 0]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <Users className="w-7 h-7 text-white" />
              </motion.div>

              {/* Central Graphics */}
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <motion.div
                  className="relative w-4/5 h-4/5 bg-gradient-to-br from-white/40 to-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  {/* Code Pattern Background */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="text-xs font-mono p-4 text-[#654321] leading-relaxed">
                      {`const transform = () => {\n  innovation.forEach(idea => {\n    realize(idea);\n  });\n};\n\ntransform();`}
                    </div>
                  </div>

                  {/* Overlay Graphics */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="w-32 h-32 border-8 border-[#E67E22] rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.div
                      className="absolute w-24 h-24 border-8 border-[#FFD700] rounded-full"
                      animate={{ rotate: -360 }}
                      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    />
                  </div>

                  {/* Glowing Dots */}
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-3 h-3 bg-[#E67E22] rounded-full"
                      style={{
                        top: `${20 + i * 10}%`,
                        left: `${10 + (i % 3) * 30}%`,
                      }}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </motion.div>
              </div>

              {/* Decorative Rings */}
              <motion.div
                className="absolute inset-0 border-4 border-[#E67E22]/20 rounded-full"
                animate={{ rotate: 360, scale: [1, 1.05, 1] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-8 border-4 border-[#FFD700]/20 rounded-full"
                animate={{ rotate: -360, scale: [1, 0.95, 1] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#E67E22] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#E67E22] rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSahelAnimated;
