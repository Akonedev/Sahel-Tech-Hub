"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Building2, Landmark, Heart, ShoppingBag, CheckCircle2, 
  ArrowRight, Sparkles, TrendingUp, Users, Globe2
} from "lucide-react";
import { motion } from "framer-motion";
import React from "react";

const solutions = [
  {
    id: "commerce",
    icon: Building2,
    title: "Entreprises Commerciales",
    subtitle: "Solution E-Commerce Complète",
    description: "Transformez votre commerce avec une solution digitale clé en main. De la vitrine en ligne à la gestion complète, nous vous accompagnons dans chaque étape de votre transformation numérique.",
    features: [
      "Site web professionnel responsive",
      "Système e-commerce intégré",
      "ERP pour gestion stocks & finances",
      "CRM pour relation client optimale",
      "Tableau de bord analytique en temps réel",
      "Formation complète de votre équipe",
    ],
    gradient: "from-[#E67E22] to-[#D87C4A]",
    bgGradient: "from-[#FFF5EB] to-[#FFE4CC]",
    illustration: "🏪",
    stats: { value: "150+", label: "Commerces digitalisés" }
  },
  {
    id: "admin",
    icon: Landmark,
    title: "Administrations & Institutions",
    subtitle: "Digitalisation Administrative",
    description: "Modernisez vos services administratifs avec des solutions sécurisées et efficaces. Améliorez l'expérience citoyenne et optimisez vos processus internes.",
    features: [
      "Portail administratif sécurisé",
      "Gestion documentaire digitale",
      "Workflow automatisé et traçable",
      "Système de suivi & reporting",
      "Formation des agents",
      "Support technique 24/7 dédié",
    ],
    gradient: "from-[#2C5F2D] to-[#4A7C59]",
    bgGradient: "from-[#E8F5E9] to-[#C8E6C9]",
    illustration: "🏛️",
    stats: { value: "30+", label: "Institutions partenaires" }
  },
  {
    id: "ong",
    icon: Heart,
    title: "ONG & Associations",
    subtitle: "Plateforme de Gestion Solidaire",
    description: "Amplifiez votre impact social avec des outils digitaux adaptés. Gérez vos projets, communiquez efficacement et maximisez vos ressources.",
    features: [
      "Site vitrine professionnel et engageant",
      "Gestion des projets & bénéficiaires",
      "Système de donation en ligne sécurisé",
      "Reporting & transparence",
      "Communication multicanal",
      "Formation & accompagnement personnalisé",
    ],
    gradient: "from-[#F39C12] to-[#E67E22]",
    bgGradient: "from-[#FFF9E6] to-[#FFF0CC]",
    illustration: "❤️",
    stats: { value: "50+", label: "ONG accompagnées" }
  },
  {
    id: "retail",
    icon: ShoppingBag,
    title: "Retail & Distribution",
    subtitle: "Écosystème Commercial Digital",
    description: "Créez votre marketplace et gérez toute votre chaîne de distribution depuis une plateforme unique. Paiements, logistique, analytics... tout en un.",
    features: [
      "Marketplace multi-vendeurs",
      "Gestion logistique intégrée",
      "Paiement mobile & carte",
      "Programme de fidélité automatisé",
      "Analytics & Business Intelligence",
      "Marketing automation avancé",
    ],
    gradient: "from-[#D87C4A] to-[#B85A2F]",
    bgGradient: "from-[#FFF3E0] to-[#FFE0B2]",
    illustration: "🛍️",
    stats: { value: "500K+", label: "Transactions par mois" }
  },
];

export default function SolutionsAlternate() {
  return (
    <section id="solutions" className="py-24 bg-gradient-to-b from-[#F5E6D3] to-[#FAFAF8] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#F39C12]/10 to-[#E67E22]/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-[#2C5F2D]/10 to-[#4A7C59]/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <Badge className="badge-sahel">
              <Sparkles className="w-4 h-4 mr-1" />
              Solutions Complètes
            </Badge>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Solutions <span className="text-gradient-sahel">Clé en Main</span>
          </h2>
          <p className="text-xl text-[#8B4513] max-w-3xl mx-auto leading-relaxed">
            Des packages complets adaptés à chaque secteur pour une transformation digitale réussie
          </p>
        </motion.div>

        {/* Alternating Solution Sections */}
        <div className="space-y-32">
          {solutions.map((solution, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isEven ? '' : 'lg:grid-flow-dense'}`}>
                  {/* Content Side */}
                  <motion.div
                    className={`space-y-8 ${isEven ? 'lg:pr-12' : 'lg:pl-12 lg:col-start-2'}`}
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    {/* Icon & Badge */}
                    <div className="flex items-center gap-4">
                      <motion.div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center shadow-xl`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <solution.icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <Badge className={`bg-gradient-to-r ${solution.gradient} text-white border-0 text-sm px-4 py-1`}>
                        Clé en Main
                      </Badge>
                    </div>

                    {/* Title & Subtitle */}
                    <div>
                      <p className="text-sm uppercase tracking-wider text-[#E67E22] mb-2 font-bold">
                        {solution.title}
                      </p>
                      <h3 className="text-4xl md:text-5xl font-bold text-[#654321] mb-3 leading-tight">
                        {solution.subtitle}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-lg text-[#8B4513] leading-relaxed">
                      {solution.description}
                    </p>

                    {/* Features List - Two Columns */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {solution.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-start gap-3 group"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 + idx * 0.1 }}
                        >
                          <CheckCircle2 className={`w-5 h-5 text-[#E67E22] mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform`} />
                          <span className="text-[#654321] font-medium text-sm leading-snug">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-4">
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button 
                          size="lg"
                          className={`bg-gradient-to-r ${solution.gradient} text-white border-0 shadow-xl hover:shadow-2xl group`}
                        >
                          Demander un devis
                          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </motion.div>
                      
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button 
                          size="lg"
                          variant="outline"
                          className="border-2 border-[#E67E22] text-[#E67E22] hover:bg-[#E67E22] hover:text-white"
                        >
                          Voir un exemple
                        </Button>
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Visual Side */}
                  <motion.div
                    className={`relative ${isEven ? 'lg:pl-12' : 'lg:pr-12 lg:col-start-1 lg:row-start-1'}`}
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    {/* Animated Card with Illustration */}
                    <div className="relative">
                      {/* Background Glow */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-20 blur-3xl rounded-3xl scale-95`} />
                      
                      {/* Main Card */}
                      <motion.div
                        className={`relative bg-gradient-to-br ${solution.bgGradient} rounded-3xl p-12 shadow-2xl overflow-hidden`}
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {/* Decorative Grid Pattern */}
                        <div className="absolute inset-0 opacity-5">
                          <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
                            {Array.from({ length: 64 }).map((_, i) => (
                              <div key={i} className="border border-[#654321]" />
                            ))}
                          </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${solution.gradient} opacity-10 rounded-full blur-3xl`} />
                        <div className={`absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tl ${solution.gradient} opacity-10 rounded-full blur-2xl`} />
                        
                        {/* Illustration */}
                        <div className="relative z-10 flex items-center justify-center">
                          <motion.div
                            className="text-[200px] leading-none"
                            animate={{ 
                              y: [0, -20, 0],
                              rotate: [0, 5, 0, -5, 0]
                            }}
                            transition={{ 
                              duration: 6,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          >
                            {solution.illustration}
                          </motion.div>
                        </div>

                        {/* Floating Feature Cards */}
                        <motion.div
                          className="absolute top-8 left-8 bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg"
                          animate={{ 
                            y: [0, -10, 0],
                          }}
                          transition={{ 
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          <div className="flex items-center gap-2">
                            <div className={`w-3 h-3 rounded-full bg-gradient-to-br ${solution.gradient}`} />
                            <span className="text-xs font-bold text-[#654321]">100% Sécurisé</span>
                          </div>
                        </motion.div>

                        <motion.div
                          className="absolute bottom-8 right-8 bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg"
                          animate={{ 
                            y: [0, 10, 0],
                          }}
                          transition={{ 
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1
                          }}
                        >
                          <div className="flex items-center gap-2">
                            <div className={`w-3 h-3 rounded-full bg-gradient-to-br ${solution.gradient}`} />
                            <span className="text-xs font-bold text-[#654321]">Support 24/7</span>
                          </div>
                        </motion.div>
                      </motion.div>

                      {/* Stats Card */}
                      <motion.div
                        className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-2xl p-6 border-4 border-white"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                      >
                        <div className="flex items-center gap-3">
                          <TrendingUp className={`w-8 h-8 text-[#E67E22]`} />
                          <div>
                            <p className="text-2xl font-bold text-[#654321]">{solution.stats.value}</p>
                            <p className="text-sm text-[#8B4513]">{solution.stats.label}</p>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          className="mt-32"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-[#E67E22] via-[#F39C12] to-[#E67E22] rounded-3xl p-12 md:p-16 shadow-2xl relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6"
              >
                <Globe2 className="w-5 h-5 text-white" />
                <span className="text-white font-semibold">Tout Inclus</span>
              </motion.div>

              <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Prêt à Transformer Votre Business ?
              </h3>
              <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                Obtenez un devis gratuit et personnalisé pour votre solution clé en main. 
                Nos experts sont là pour vous accompagner.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    size="lg" 
                    className="bg-white text-[#E67E22] hover:bg-white/90 shadow-xl hover:shadow-2xl px-8 py-6 text-lg"
                  >
                    <Users className="mr-2 h-6 w-6" />
                    Parler à un Expert
                    <ArrowRight className="ml-2 h-6 w-6" />
                  </Button>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-[#E67E22] px-8 py-6 text-lg"
                  >
                    Voir nos réalisations
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
