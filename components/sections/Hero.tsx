"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Globe, Zap, Rocket, TrendingUp, Award } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ["Digital", "Transformation", "Innovation", "Excellence"];
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 100]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradients améliorés */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F5E6D3] via-white to-[#FFE5CC] dark:from-gray-900 dark:via-background dark:to-[#8B4513]/20 animate-gradient-shift" />
      
      {/* Pattern de fond */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute inset-0 pattern-dunes opacity-30" />
      
      {/* Blobs animés améliorés */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{ y: y1 }}
        className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-[#E67E22]/20 to-[#FFD700]/20 rounded-full blur-3xl animate-pulse-sahel"
      />
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
        style={{ y: y2 }}
        className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-gradient-to-br from-[#D87C4A]/20 to-[#CC7722]/20 rounded-full blur-3xl animate-pulse-sahel"
      />
      
      {/* Particules flottantes */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.5, 1],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
          className="absolute w-2 h-2 bg-gradient-to-r from-[#E67E22] to-[#FFD700] rounded-full"
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
          }}
        />
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Contenu gauche */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#E67E22]/10 to-[#FFD700]/10 px-5 py-3 rounded-full border border-[#E67E22]/30 backdrop-blur-sm hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl"
              >
                <Sparkles className="h-5 w-5 text-[#E67E22] animate-glow-pulse" />
                <span className="text-sm font-semibold text-[#8B4513]">Innovation Technologique au Sahel</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  Transformez Votre{" "}
                  <motion.span
                    key={currentWord}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="block text-gradient-sahel animate-gradient-shift"
                  >
                    {words[currentWord]}
                  </motion.span>
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-xl md:text-2xl text-muted-foreground leading-relaxed"
              >
                Solutions IT complètes pour les entreprises, administrations et organisations du Sahel.
                De l&apos;idée à la réalisation, nous accompagnons votre{" "}
                <span className="font-bold text-[#E67E22]">transformation numérique</span>.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex flex-col sm:flex-row items-center gap-4"
              >
                <Button size="lg" className="btn-sahel text-lg px-8 py-7 group relative overflow-hidden">
                  <span className="relative z-10 flex items-center">
                    Découvrir nos services
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                </Button>
                <Button size="lg" variant="outline" className="btn-sahel-outline text-lg px-8 py-7">
                  Nous contacter
                </Button>
              </motion.div>

              {/* Quick features */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="flex flex-wrap gap-4 pt-4"
              >
                {[
                  { icon: Zap, text: "Solutions Rapides" },
                  { icon: Rocket, text: "Innovation Continue" },
                  { icon: TrendingUp, text: "Croissance Garantie" },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2 + idx * 0.1, duration: 0.5 }}
                    className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 border border-[#E67E22]/20"
                  >
                    <item.icon className="w-4 h-4 text-[#E67E22] animate-bounce-subtle" />
                    <span className="text-sm font-medium text-[#8B4513]">{item.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Image droite avec effets */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 100 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="relative hidden md:block"
            >
              <div className="relative z-10 hover:scale-105 transition-transform duration-700">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#E67E22] to-[#FFD700] rounded-3xl blur-3xl opacity-30 animate-pulse-sahel"></div>
                
                {/* Main image container */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop" 
                    alt="Équipe Sahel Tech Hub" 
                    className="w-full h-auto object-cover"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#E67E22]/20 to-transparent"></div>
                </div>

                {/* Floating cards */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                  className="absolute -top-8 -right-8 bg-white rounded-2xl shadow-2xl p-4 hover-lift"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                      <Award className="text-white w-8 h-8" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-gray-900">98%</div>
                      <div className="text-xs text-gray-600 font-medium">Satisfaction Client</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4, duration: 0.8 }}
                  className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-2xl p-4 hover-lift animation-delay-2000"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                      <Rocket className="text-white w-8 h-8 animate-bounce-subtle" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-gray-900">24/7</div>
                      <div className="text-xs text-gray-600 font-medium">Support Dédié</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Stats section améliorée */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-20"
          >
            {[
              { icon: Globe, label: "Services Globaux", value: "100+", color: "from-[#E67E22] to-[#D87C4A]" },
              { icon: Zap, label: "Projets Livrés", value: "500+", color: "from-[#D87C4A] to-[#CC7722]" },
              { icon: Sparkles, label: "Clients Satisfaits", value: "200+", color: "from-[#CC7722] to-[#FFD700]" },
              { icon: Award, label: "Années d'Expertise", value: "10+", color: "from-[#FFD700] to-[#F39C12]" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + index * 0.1, duration: 0.6 }}
                className="card-sahel text-center group hover-lift"
              >
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="h-8 w-8 text-white animate-bounce-subtle" />
                </div>
                <div className={`text-4xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator animé */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <div className="w-8 h-12 border-2 border-[#E67E22] rounded-full p-2 bg-white/50 backdrop-blur-sm shadow-lg">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-2 h-3 bg-gradient-to-b from-[#E67E22] to-[#FFD700] rounded-full mx-auto"
          />
        </div>
      </motion.div>
    </section>
  );
}
