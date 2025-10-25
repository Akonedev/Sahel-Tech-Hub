"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Building2, ShoppingBag, Landmark, Heart, CheckCircle2, 
  ArrowRight, Sparkles, Package, Zap, TrendingUp, 
  BarChart3, Globe2, Lock, Code, Cloud, Shield, Users
} from "lucide-react";
import { motion } from "framer-motion";
import React from "react";

const solutions = [
  {
    icon: Building2,
    category: "Entreprises Commerciales",
    title: "Solution E-Commerce Complète",
    features: [
      "Site web professionnel responsive",
      "Système e-commerce intégré",
      "ERP pour gestion stocks & finances",
      "CRM pour relation client",
      "Tableau de bord analytique",
      "Formation du personnel",
    ],
    gradient: "from-[#E67E22] to-[#D87C4A]",
    bgGradient: "from-[#FFF5EB] to-[#FFE4CC]",
    badge: "Clé en main",
    accentIcon: Zap
  },
  {
    icon: Landmark,
    category: "Administrations & Institutions",
    title: "Digitalisation Administrative",
    features: [
      "Portail administratif sécurisé",
      "Gestion documentaire digitale",
      "Workflow automatisé",
      "Système de suivi & reporting",
      "Formation des agents",
      "Support technique 24/7",
    ],
    gradient: "from-[#2C5F2D] to-[#4A7C59]",
    bgGradient: "from-[#E8F5E9] to-[#C8E6C9]",
    badge: "Sur mesure",
    accentIcon: Lock
  },
  {
    icon: Heart,
    category: "ONG & Associations",
    title: "Plateforme de Gestion",
    features: [
      "Site vitrine professionnel",
      "Gestion des projets & bénéficiaires",
      "Système de donation en ligne",
      "Reporting & transparence",
      "Communication multicanal",
      "Formation & accompagnement",
    ],
    gradient: "from-[#F39C12] to-[#E67E22]",
    bgGradient: "from-[#FFF9E6] to-[#FFF0CC]",
    badge: "Abordable",
    accentIcon: TrendingUp
  },
  {
    icon: ShoppingBag,
    category: "Retail & Distribution",
    title: "Écosystème Commercial Digital",
    features: [
      "Marketplace multi-vendeurs",
      "Gestion logistique intégrée",
      "Paiement mobile & carte",
      "Programme de fidélité",
      "Analytics & Business Intelligence",
      "Marketing automation",
    ],
    gradient: "from-[#D87C4A] to-[#B85A2F]",
    bgGradient: "from-[#FFF3E0] to-[#FFE0B2]",
    badge: "Enterprise",
    accentIcon: BarChart3
  },
];

const technologies = [
  "Next.js", "React", "Node.js", "Python", "PostgreSQL", "MongoDB", 
  "AWS", "Docker", "Kubernetes", "CI/CD", "Security"
];

export default function Solutions() {
  const [selectedCategory, setSelectedCategory] = React.useState<string>("all");
  
  const categories = [
    { id: "all", label: "Toutes les Solutions", icon: Globe2 },
    { id: "commercial", label: "Commerce", icon: ShoppingBag },
    { id: "public", label: "Public", icon: Landmark },
    { id: "social", label: "Social", icon: Heart },
  ];

  const filteredSolutions = selectedCategory === "all" 
    ? solutions 
    : solutions.filter(s => {
        if (selectedCategory === "commercial") return s.icon === Building2 || s.icon === ShoppingBag;
        if (selectedCategory === "public") return s.icon === Landmark;
        if (selectedCategory === "social") return s.icon === Heart;
        return true;
      });

  return (
    <section id="solutions" className="py-24 bg-gradient-to-b from-[#F5E6D3] to-[#FAFAF8] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#F39C12]/10 to-[#E67E22]/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-[#2C5F2D]/10 to-[#4A7C59]/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <div className="badge-sahel">
              <Sparkles className="w-4 h-4 text-[#E67E22]" />
              Solutions Complètes
            </div>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Solutions <span className="text-gradient-sahel">Clé en Main</span>
          </h2>
          <p className="text-xl text-[#8B4513] max-w-3xl mx-auto leading-relaxed mb-12">
            Des packages complets adaptés à chaque secteur pour une transformation digitale réussie
          </p>

          {/* Category Filter */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-[#E67E22] to-[#D87C4A] text-white shadow-xl scale-110'
                    : 'bg-white text-[#654321] hover:bg-[#FFF5EB] shadow-md hover:shadow-lg'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <cat.icon className="w-5 h-5" />
                {cat.label}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Modern Solution Cards - Mixed Styles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {filteredSolutions.map((solution, index) => {
            const cardStyle = index % 4; // 4 different card styles
            
            return (
              <motion.div
                key={solution.category}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.1,
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100
                }}
              >
                {/* Style 1: Modern Pricing Style with Split Design */}
                {cardStyle === 0 && (
                  <Card className="h-full overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 group hover:-translate-y-3 relative">
                    {/* Top accent bar */}
                    <div className={`h-2 bg-gradient-to-r ${solution.gradient} absolute top-0 left-0 right-0 z-20`} />
                    
                    {/* Split background design */}
                    <div className="absolute inset-0 flex">
                      <div className={`w-2/5 bg-gradient-to-br ${solution.gradient}`} />
                      <div className={`flex-1 bg-gradient-to-br ${solution.bgGradient}`} />
                    </div>
                    
                    {/* Shine effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />
                    
                    <CardContent className="relative z-20 p-0">
                      {/* Left side with icon */}
                      <div className="flex">
                        <div className={`w-2/5 p-8 flex flex-col items-center justify-center relative`}>
                          <motion.div
                            className="w-24 h-24 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <solution.icon className="w-12 h-12 text-white drop-shadow-2xl" />
                          </motion.div>
                          <Badge className="bg-white/90 text-[#654321] border-0 font-bold">
                            {solution.badge}
                          </Badge>
                        </div>
                        
                        {/* Right side with content */}
                        <div className="flex-1 p-8">
                          <div className="mb-6">
                            <p className="text-xs uppercase tracking-wider text-[#E67E22] mb-2 font-bold">
                              {solution.category}
                            </p>
                            <h3 className="text-2xl font-bold text-[#654321] mb-4 group-hover:text-[#E67E22] transition-colors">
                              {solution.title}
                            </h3>
                          </div>
                          
                          <div className="space-y-3 mb-6">
                            {solution.features.map((feature, idx) => (
                              <motion.div
                                key={idx}
                                className="flex items-start gap-3"
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.05 }}
                              >
                                <CheckCircle2 className="w-5 h-5 text-[#E67E22] mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-[#654321] leading-relaxed">{feature}</span>
                              </motion.div>
                            ))}
                          </div>
                          
                          <Button className={`w-full bg-gradient-to-r ${solution.gradient} text-white border-0 shadow-lg hover:shadow-xl group/btn`}>
                            Découvrir
                            <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Style 2: Card with floating header */}
                {cardStyle === 1 && (
                  <Card className="h-full overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 group hover:-translate-y-3 relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${solution.bgGradient} opacity-100 group-hover:opacity-95 transition-opacity`} />
                    
                    <CardContent className="relative z-20 p-8">
                      {/* Floating header card */}
                      <motion.div
                        className={`-mt-16 mb-8 p-6 rounded-2xl bg-gradient-to-br ${solution.gradient} shadow-2xl relative overflow-hidden`}
                        whileHover={{ y: -5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                        <div className="relative z-10 flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="w-16 h-16 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                              <solution.icon className="w-8 h-8 text-white" />
                            </div>
                            <div>
                              <p className="text-xs text-white/80 uppercase tracking-wide mb-1">{solution.category}</p>
                              <h3 className="text-xl font-bold text-white">{solution.title}</h3>
                            </div>
                          </div>
                          <Badge className="bg-white/90 text-[#654321] border-0 font-semibold">
                            {solution.badge}
                          </Badge>
                        </div>
                      </motion.div>
                      
                      {/* Features list */}
                      <div className="space-y-3 mb-8">
                        {solution.features.map((feature, idx) => (
                          <motion.div
                            key={idx}
                            className="flex items-start gap-3 group/item"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.05 }}
                          >
                            <div className="mt-0.5">
                              <CheckCircle2 className="w-5 h-5 text-[#E67E22] group-hover/item:scale-110 transition-transform" />
                            </div>
                            <span className="text-sm text-[#654321] leading-relaxed flex-1">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                      
                      <Button className={`w-full bg-gradient-to-r ${solution.gradient} text-white border-0 shadow-lg hover:shadow-xl group/btn`}>
                        <Sparkles className="mr-2 w-4 h-4 group-hover/btn:rotate-180 transition-transform duration-500" />
                        En savoir plus
                      </Button>
                    </CardContent>
                  </Card>
                )}

                {/* Style 3: Asymmetric diagonal split */}
                {cardStyle === 2 && (
                  <Card className="h-full overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 group hover:-translate-y-3 relative">
                    {/* Diagonal split background */}
                    <div className="absolute inset-0">
                      <div className={`absolute inset-0 bg-gradient-to-br ${solution.bgGradient}`} />
                      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id={`grad-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" className="text-[#E67E22]" stopOpacity="0.2" />
                            <stop offset="100%" className="text-[#E67E22]" stopOpacity="0.05" />
                          </linearGradient>
                        </defs>
                        <path d="M 0,0 L 100,0 L 0,60 Z" fill={`url(#grad-${index})`} transform="scale(5)" />
                      </svg>
                    </div>
                    
                    <CardContent className="relative z-20 p-8">
                      <div className="flex items-start justify-between mb-6">
                        <motion.div
                          className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center shadow-xl`}
                          whileHover={{ scale: 1.1, rotate: -5 }}
                        >
                          <solution.icon className="w-10 h-10 text-white drop-shadow-lg" />
                        </motion.div>
                        
                        <div className="flex flex-col items-end gap-2">
                          <Badge className={`bg-gradient-to-r ${solution.gradient} text-white border-0 shadow-md`}>
                            {solution.badge}
                          </Badge>
                          <solution.accentIcon className="w-8 h-8 text-[#E67E22]/20 animate-float" />
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <p className="text-xs uppercase tracking-wider text-[#E67E22] mb-2 font-bold">
                          {solution.category}
                        </p>
                        <h3 className="text-2xl font-bold text-[#654321] mb-4 group-hover:text-[#E67E22] transition-colors">
                          {solution.title}
                        </h3>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        {solution.features.map((feature, idx) => (
                          <motion.div
                            key={idx}
                            className="flex items-start gap-2 p-3 rounded-lg bg-white/60 backdrop-blur-sm hover:bg-white/80 transition-all"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.05 }}
                            whileHover={{ scale: 1.05 }}
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#E67E22] mt-0.5 flex-shrink-0" />
                            <span className="text-xs text-[#654321] leading-snug font-medium">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                      
                      <Button className={`w-full bg-gradient-to-r ${solution.gradient} text-white border-0 shadow-lg hover:shadow-xl group/btn`}>
                        Demander un devis
                        <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                )}

                {/* Style 4: Modern glass morphism style */}
                {cardStyle === 3 && (
                  <Card className="h-full overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 group hover:-translate-y-3 relative">
                    {/* Background with gradient mesh */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${solution.bgGradient}`}>
                      <div className="absolute inset-0 opacity-30">
                        <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${solution.gradient} opacity-20 blur-3xl rounded-full`} />
                        <div className={`absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tl ${solution.gradient} opacity-20 blur-3xl rounded-full`} />
                      </div>
                    </div>
                    
                    <CardContent className="relative z-20 p-8">
                      {/* Glass card for title */}
                      <div className="mb-6 p-6 rounded-2xl bg-white/40 backdrop-blur-md border border-white/60 shadow-xl">
                        <div className="flex items-center gap-4 mb-4">
                          <motion.div
                            className={`w-16 h-16 rounded-xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center shadow-lg`}
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                          >
                            <solution.icon className="w-8 h-8 text-white" />
                          </motion.div>
                          <div className="flex-1">
                            <Badge className={`bg-gradient-to-r ${solution.gradient} text-white border-0 mb-2`}>
                              {solution.badge}
                            </Badge>
                            <p className="text-xs uppercase tracking-wide text-[#8B4513] font-bold">
                              {solution.category}
                            </p>
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold text-[#654321] group-hover:text-[#E67E22] transition-colors">
                          {solution.title}
                        </h3>
                      </div>
                      
                      {/* Features in glass cards */}
                      <div className="space-y-2 mb-6">
                        {solution.features.map((feature, idx) => (
                          <motion.div
                            key={idx}
                            className="flex items-start gap-3 p-3 rounded-xl bg-white/30 backdrop-blur-sm hover:bg-white/50 transition-all group/item"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.05 }}
                          >
                            <CheckCircle2 className="w-5 h-5 text-[#E67E22] mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                            <span className="text-sm text-[#654321] font-medium">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                      
                      <Button className={`w-full bg-gradient-to-r ${solution.gradient} text-white border-0 shadow-xl hover:shadow-2xl group/btn transition-all`}>
                        <Globe2 className="mr-2 w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                        Explorer cette solution
                        <Sparkles className="ml-2 w-4 h-4" />
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Enhanced All-Inclusive Section - Modern Card Design */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <motion.div
              className="inline-flex items-center gap-2 mb-4"
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
            >
              <Package className="w-8 h-8 text-[#E67E22]" />
              <h3 className="text-3xl md:text-5xl font-bold text-[#654321]">
                Packages{" "}
                <span className="text-gradient-sahel">Clé en Main</span>
              </h3>
            </motion.div>
            <p className="text-lg text-[#8B4513] max-w-2xl mx-auto">
              Tout ce dont vous avez besoin dans des offres complètes et transparentes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1: Développement */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FFF5EB] to-[#FFE4CC]" />
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E67E22] to-[#D87C4A]" />
                
                <CardContent className="p-8 relative z-10">
                  <motion.div 
                    className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#E67E22] to-[#D87C4A] flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Code className="h-8 w-8 text-white" />
                  </motion.div>
                  
                  <h4 className="text-2xl font-bold mb-3 text-[#654321] group-hover:text-[#E67E22] transition-colors">
                    Développement
                  </h4>
                  
                  <ul className="space-y-3 mb-6">
                    {[
                      "Code personnalisé et optimisé",
                      "Architecture scalable",
                      "Tests et qualité garantis",
                      "Documentation complète"
                    ].map((item, idx) => (
                      <motion.li 
                        key={idx}
                        className="flex items-start text-sm text-[#654321]"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <CheckCircle2 className="h-4 w-4 text-[#E67E22] mr-2 mt-0.5 flex-shrink-0" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                  
                  <Badge className="bg-gradient-to-r from-[#E67E22] to-[#D87C4A] text-white border-0">
                    Inclus
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>

            {/* Card 2: Hébergement */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FFF9E6] to-[#FFF0CC]" />
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F39C12] to-[#E67E22]" />
                
                <CardContent className="p-8 relative z-10">
                  <motion.div 
                    className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#F39C12] to-[#E67E22] flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Cloud className="h-8 w-8 text-white" />
                  </motion.div>
                  
                  <h4 className="text-2xl font-bold mb-3 text-[#654321] group-hover:text-[#F39C12] transition-colors">
                    Hébergement Cloud
                  </h4>
                  
                  <ul className="space-y-3 mb-6">
                    {[
                      "Infrastructure haute disponibilité",
                      "Sauvegardes automatiques",
                      "SSL/HTTPS sécurisé",
                      "Performance optimale"
                    ].map((item, idx) => (
                      <motion.li 
                        key={idx}
                        className="flex items-start text-sm text-[#654321]"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <CheckCircle2 className="h-4 w-4 text-[#F39C12] mr-2 mt-0.5 flex-shrink-0" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                  
                  <Badge className="bg-gradient-to-r from-[#F39C12] to-[#E67E22] text-white border-0">
                    Inclus
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>

            {/* Card 3: Maintenance */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Card className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-[#E8F5E9] to-[#C8E6C9]" />
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2C5F2D] to-[#4A7C59]" />
                
                <CardContent className="p-8 relative z-10">
                  <motion.div 
                    className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#2C5F2D] to-[#4A7C59] flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Shield className="h-8 w-8 text-white" />
                  </motion.div>
                  
                  <h4 className="text-2xl font-bold mb-3 text-[#654321] group-hover:text-[#2C5F2D] transition-colors">
                    Maintenance
                  </h4>
                  
                  <ul className="space-y-3 mb-6">
                    {[
                      "Mises à jour régulières",
                      "Monitoring 24/7",
                      "Corrections de bugs",
                      "Optimisation continue"
                    ].map((item, idx) => (
                      <motion.li 
                        key={idx}
                        className="flex items-start text-sm text-[#654321]"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <CheckCircle2 className="h-4 w-4 text-[#2C5F2D] mr-2 mt-0.5 flex-shrink-0" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                  
                  <Badge className="bg-gradient-to-r from-[#2C5F2D] to-[#4A7C59] text-white border-0">
                    Inclus
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>

            {/* Card 4: Formation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Card className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FFF3E0] to-[#FFE0B2]" />
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D87C4A] to-[#B85A2F]" />
                
                <CardContent className="p-8 relative z-10">
                  <motion.div 
                    className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#D87C4A] to-[#B85A2F] flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Users className="h-8 w-8 text-white" />
                  </motion.div>
                  
                  <h4 className="text-2xl font-bold mb-3 text-[#654321] group-hover:text-[#D87C4A] transition-colors">
                    Formation
                  </h4>
                  
                  <ul className="space-y-3 mb-6">
                    {[
                      "Sessions personnalisées",
                      "Support utilisateurs",
                      "Documentation dédiée",
                      "Suivi post-formation"
                    ].map((item, idx) => (
                      <motion.li 
                        key={idx}
                        className="flex items-start text-sm text-[#654321]"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <CheckCircle2 className="h-4 w-4 text-[#D87C4A] mr-2 mt-0.5 flex-shrink-0" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                  
                  <Badge className="bg-gradient-to-r from-[#D87C4A] to-[#B85A2F] text-white border-0">
                    Inclus
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>

            {/* Card 5: Support */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <Card className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FFFDE7] to-[#FFF9C4]" />
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FFD700] to-[#F39C12]" />
                
                <CardContent className="p-8 relative z-10">
                  <motion.div 
                    className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#FFD700] to-[#F39C12] flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Zap className="h-8 w-8 text-white" />
                  </motion.div>
                  
                  <h4 className="text-2xl font-bold mb-3 text-[#654321] group-hover:text-[#FFD700] transition-colors">
                    Support 24/7
                  </h4>
                  
                  <ul className="space-y-3 mb-6">
                    {[
                      "Assistance technique rapide",
                      "Hotline dédiée",
                      "Résolution prioritaire",
                      "SLA garanti"
                    ].map((item, idx) => (
                      <motion.li 
                        key={idx}
                        className="flex items-start text-sm text-[#654321]"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <CheckCircle2 className="h-4 w-4 text-[#FFD700] mr-2 mt-0.5 flex-shrink-0" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                  
                  <Badge className="bg-gradient-to-r from-[#FFD700] to-[#F39C12] text-white border-0">
                    24/7
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>

            {/* Card 6: Évolution */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <Card className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-[#F1F8E9] to-[#DCEDC8]" />
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#4A7C59] to-[#2C5F2D]" />
                
                <CardContent className="p-8 relative z-10">
                  <motion.div 
                    className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#4A7C59] to-[#2C5F2D] flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <TrendingUp className="h-8 w-8 text-white" />
                  </motion.div>
                  
                  <h4 className="text-2xl font-bold mb-3 text-[#654321] group-hover:text-[#4A7C59] transition-colors">
                    Évolution
                  </h4>
                  
                  <ul className="space-y-3 mb-6">
                    {[
                      "Nouvelles fonctionnalités",
                      "Adaptation aux besoins",
                      "Scalabilité assurée",
                      "Veille technologique"
                    ].map((item, idx) => (
                      <motion.li 
                        key={idx}
                        className="flex items-start text-sm text-[#654321]"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <CheckCircle2 className="h-4 w-4 text-[#4A7C59] mr-2 mt-0.5 flex-shrink-0" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                  
                  <Badge className="bg-gradient-to-r from-[#4A7C59] to-[#2C5F2D] text-white border-0">
                    Inclus
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="mt-12 text-center"
          >
            <Card className="bg-gradient-to-r from-[#E67E22] via-[#F39C12] to-[#E67E22] border-0 shadow-2xl overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <h4 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Prêt à Démarrer Votre Projet ?
                </h4>
                <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                  Obtenez un devis gratuit et personnalisé pour votre solution clé en main
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    size="lg" 
                    className="bg-white text-[#E67E22] hover:bg-white/90 shadow-xl hover:shadow-2xl transition-all group/btn"
                  >
                    <Globe2 className="mr-2 h-5 w-5 group-hover/btn:rotate-12 transition-transform" />
                    Demander un Devis Gratuit
                    <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-2 transition-transform" />
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
