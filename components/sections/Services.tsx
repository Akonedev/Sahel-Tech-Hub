"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Code, Globe, ShoppingCart, Smartphone, BarChart, Shield, 
  Database, Cloud, Megaphone, Users, GraduationCap, Lightbulb,
  ArrowRight, CheckCircle2, Sparkles
} from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import React from "react";
import Image from "next/image";

const services = [
  {
    icon: Globe,
    title: "Développement Web",
    description: "Sites vitrines, web apps, CMS (WordPress, Joomla, Strapi) avec les dernières technologies. Nous créons des expériences web modernes, rapides et optimisées pour tous les appareils.",
    tags: ["Next.js", "React", "WordPress", "Strapi", "CMS"],
    features: [
      "Sites vitrines responsive et performants",
      "Applications web progressives (PWA)",
      "Intégration CMS: WordPress, Joomla, Strapi",
      "E-commerce avec WooCommerce & Shopify",
    ],
    gradientFrom: "#E67E22",
    gradientTo: "#D87C4A",
    imageUrl: "/images/web-dev.svg"
  },
  {
    icon: Smartphone,
    title: "Applications Mobiles",
    description: "Apps natives et hybrides iOS/Android performantes et intuitives. Solutions cross-platform pour maximiser votre portée avec un seul code.",
    tags: ["React Native", "Flutter", "PWA"],
    features: [
      "Applications natives iOS & Android",
      "Développement cross-platform",
      "Applications web progressives (PWA)",
      "Design UX/UI moderne et intuitif",
    ],
    gradientFrom: "#F39C12",
    gradientTo: "#E67E22",
    imageUrl: "/images/mobile-dev.svg"
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce & Marketplace",
    description: "Plateformes de vente en ligne complètes avec gestion intégrée",
    tags: ["Shopify", "WooCommerce", "Custom"],
    gradientFrom: "#2C5F2D",
    gradientTo: "#4A7C59",
    bgFrom: "#E8F5E9",
    bgTo: "#C8E6C9",
    iconFrom: "#2C5F2D",
    iconTo: "#1B5E20"
  },
  {
    icon: BarChart,
    title: "ERP & CRM",
    description: "Solutions de gestion d'entreprise sur mesure pour optimiser vos processus",
    tags: ["ERP", "CRM", "Automation"],
    gradientFrom: "#D87C4A",
    gradientTo: "#B85A2F",
    bgFrom: "#FFF3E0",
    bgTo: "#FFE0B2",
    iconFrom: "#D87C4A",
    iconTo: "#8B4513"
  },
  {
    icon: Database,
    title: "Bases de Données",
    description: "Conception, optimisation et administration de bases de données",
    tags: ["PostgreSQL", "MySQL", "MongoDB"],
    gradientFrom: "#8B4513",
    gradientTo: "#A0826D",
    bgFrom: "#EFEBE9",
    bgTo: "#D7CCC8",
    iconFrom: "#8B4513",
    iconTo: "#5D4037"
  },
  {
    icon: Cloud,
    title: "Cloud & Hébergement",
    description: "Infrastructure cloud, hébergement et administration serveurs",
    tags: ["AWS", "Azure", "Docker"],
    gradientFrom: "#87CEEB",
    gradientTo: "#4A90A4",
    bgFrom: "#E3F2FD",
    bgTo: "#BBDEFB",
    iconFrom: "#2196F3",
    iconTo: "#1565C0"
  },
  {
    icon: Shield,
    title: "Cybersécurité",
    description: "Audit, protection et sécurisation de vos systèmes d'information",
    tags: ["Security", "Audit", "Protection"],
    gradientFrom: "#B85A2F",
    gradientTo: "#8B4513",
    bgFrom: "#FBE9E7",
    bgTo: "#FFCCBC",
    iconFrom: "#B85A2F",
    iconTo: "#6D4C41"
  },
  {
    icon: Megaphone,
    title: "Web Marketing",
    description: "Stratégies digitales, SEO, réseaux sociaux et publicité en ligne",
    tags: ["SEO", "Social Media", "Ads"],
    gradientFrom: "#FFD700",
    gradientTo: "#F39C12",
    bgFrom: "#FFFDE7",
    bgTo: "#FFF9C4",
    iconFrom: "#FFD700",
    iconTo: "#FFA000"
  },
  {
    icon: GraduationCap,
    title: "Formations Pro",
    description: "Formation aux technologies modernes: Python, JavaScript, Data, IA, CMS et développement mobile",
    tags: ["Python", "JavaScript", "Data", "CMS", "Mobile"],
    gradientFrom: "#E67E22",
    gradientTo: "#CC7722",
    bgFrom: "#FFF5EB",
    bgTo: "#FFE4CC",
    iconFrom: "#E67E22",
    iconTo: "#D35400"
  },
  {
    icon: Lightbulb,
    title: "Incubateur",
    description: "Accompagnement de projets innovants avec mentors et infrastructure",
    tags: ["Mentoring", "Open Space", "Resources"],
    gradientFrom: "#2C5F2D",
    gradientTo: "#4A7C59",
    bgFrom: "#F1F8E9",
    bgTo: "#DCEDC8",
    iconFrom: "#4A7C59",
    iconTo: "#2E7D32"
  },
  {
    icon: Users,
    title: "Consulting IT",
    description: "Conseil stratégique et accompagnement à la transformation digitale",
    tags: ["Strategy", "Digital", "Consulting"],
    gradientFrom: "#D87C4A",
    gradientTo: "#B87333",
    bgFrom: "#FFF8E1",
    bgTo: "#FFECB3",
    iconFrom: "#D87C4A",
    iconTo: "#A0522D"
  },
  {
    icon: Code,
    title: "Développement Custom",
    description: "Solutions sur mesure adaptées à vos besoins spécifiques",
    tags: ["Custom", "Agile", "DevOps"],
    gradientFrom: "#F39C12",
    gradientTo: "#E67E22",
    bgFrom: "#FFF3E0",
    bgTo: "#FFE0B2",
    iconFrom: "#F39C12",
    iconTo: "#EF6C00"
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  // Fonction pour déterminer le style de card en fonction de l'index
  const getCardStyle = (index: number) => {
    const patterns = index % 4; // 4 styles différents
    return patterns;
  };

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-[#FAFAF8] to-[#F5E6D3] pattern-sahel relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-[#E67E22]/10 to-[#FFD700]/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-[#D87C4A]/10 to-[#CC7722]/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <div className="badge-sahel">
              <span className="w-2 h-2 bg-[#E67E22] rounded-full animate-pulse" />
              Nos Services
            </div>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Notre <span className="text-gradient-sahel">Expertise</span> à votre Service
          </h2>
          <p className="text-xl text-[#8B4513] max-w-3xl mx-auto leading-relaxed">
            De la conception à la maintenance, nous proposons tous les services 
            pour digitaliser votre entreprise et la propulser vers le succès
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const cardStyle = getCardStyle(index);
            
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ 
                  delay: index * 0.1,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100
                }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
              >
                {/* Style 1: Classic with top border */}
                {cardStyle === 0 && (
                  <Card className="group h-full cursor-pointer relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-[1.03]">
                    <div 
                      className="absolute inset-0 opacity-100 group-hover:opacity-90 transition-opacity duration-300"
                      style={{
                        background: `linear-gradient(135deg, ${service.bgFrom} 0%, ${service.bgTo} 100%)`
                      }}
                    />
                    
                    <div 
                      className="absolute top-0 left-0 right-0 h-1.5 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                      style={{
                        background: `linear-gradient(to right, ${service.gradientFrom} 0%, ${service.gradientTo} 100%)`
                      }}
                    />
                    
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    
                    <CardContent className="p-8 space-y-6 relative z-10">
                      <motion.div 
                        className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-2xl relative overflow-hidden"
                        whileHover={{ 
                          scale: 1.15, 
                          rotate: 8,
                          transition: { type: "spring", stiffness: 400, damping: 10 }
                        }}
                        style={{
                          background: `linear-gradient(135deg, ${service.iconFrom} 0%, ${service.iconTo} 100%)`
                        }}
                      >
                        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                        <service.icon className="h-10 w-10 text-white relative z-10 drop-shadow-lg" />
                      </motion.div>
                      
                      <div>
                        <h3 className="text-2xl font-bold mb-3 text-[#654321] group-hover:text-[#E67E22] transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-[#8B4513] text-base leading-relaxed group-hover:text-[#654321] transition-colors duration-300">
                          {service.description}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2 pt-2">
                        {service.tags.map((tag, idx) => (
                          <motion.span
                            key={tag}
                            className="badge-sahel text-xs hover:scale-110 transition-transform duration-200 cursor-pointer"
                            whileHover={{ scale: 1.1, y: -2 }}
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Style 2: Side accent with glass effect */}
                {cardStyle === 1 && (
                  <Card className="group h-full cursor-pointer relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-[1.03]">
                    <div className="absolute inset-0 bg-white/40 backdrop-blur-sm group-hover:bg-white/30 transition-all duration-300" />
                    
                    <div 
                      className="absolute left-0 top-0 bottom-0 w-2 group-hover:w-3 transition-all duration-300"
                      style={{
                        background: `linear-gradient(to bottom, ${service.gradientFrom} 0%, ${service.gradientTo} 100%)`
                      }}
                    />
                    
                    <div 
                      className="absolute inset-0 opacity-10 group-hover:opacity-15 transition-opacity duration-300"
                      style={{
                        background: `linear-gradient(135deg, ${service.bgFrom} 0%, ${service.bgTo} 100%)`
                      }}
                    />
                    
                    <div className="absolute top-0 right-0 w-40 h-40 opacity-5 group-hover:opacity-10 transition-opacity">
                      <service.icon className="w-full h-full text-[#E67E22] transform rotate-12" />
                    </div>
                    
                    <CardContent className="p-8 space-y-6 relative z-10">
                      <div className="flex items-start justify-between">
                        <motion.div 
                          className="w-16 h-16 rounded-xl flex items-center justify-center shadow-lg relative overflow-hidden"
                          whileHover={{ 
                            scale: 1.15, 
                            rotate: -8,
                            transition: { type: "spring", stiffness: 400, damping: 10 }
                          }}
                          style={{
                            background: `linear-gradient(135deg, ${service.iconFrom} 0%, ${service.iconTo} 100%)`
                          }}
                        >
                          <service.icon className="h-8 w-8 text-white relative z-10" />
                        </motion.div>
                        
                        <Badge 
                          className="text-xs border-0 shadow-md"
                          style={{
                            background: `linear-gradient(to right, ${service.gradientFrom}, ${service.gradientTo})`,
                            color: 'white'
                          }}
                        >
                          Premium
                        </Badge>
                      </div>
                      
                      <div>
                        <h3 className="text-2xl font-bold mb-3 text-[#654321] group-hover:text-[#E67E22] transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-[#8B4513] text-base leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2 pt-2">
                        {service.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 rounded-full text-xs font-medium bg-white/60 text-[#654321] hover:bg-white transition-all cursor-pointer hover:scale-105"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Style 3: Bold gradient with corner accent */}
                {cardStyle === 2 && (
                  <Card className="group h-full cursor-pointer relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-[1.03]">
                    <div 
                      className="absolute inset-0 opacity-100 transition-opacity duration-300"
                      style={{
                        background: `linear-gradient(150deg, ${service.bgFrom} 0%, ${service.bgTo} 50%, ${service.bgFrom} 100%)`
                      }}
                    />
                    
                    <div 
                      className="absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                      style={{
                        background: `linear-gradient(135deg, ${service.gradientFrom}, ${service.gradientTo})`
                      }}
                    />
                    
                    <div 
                      className="absolute bottom-0 left-0 w-24 h-24 rounded-tr-full opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                      style={{
                        background: `linear-gradient(315deg, ${service.gradientFrom}, ${service.gradientTo})`
                      }}
                    />
                    
                    <CardContent className="p-8 space-y-6 relative z-10">
                      <motion.div 
                        className="w-20 h-20 rounded-3xl flex items-center justify-center shadow-2xl relative"
                        whileHover={{ 
                          scale: 1.15, 
                          rotate: 12,
                          transition: { type: "spring", stiffness: 400, damping: 10 }
                        }}
                        style={{
                          background: `linear-gradient(135deg, ${service.iconFrom} 0%, ${service.iconTo} 100%)`
                        }}
                      >
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/30 to-transparent" />
                        <service.icon className="h-10 w-10 text-white relative z-10 drop-shadow-2xl" />
                      </motion.div>
                      
                      <div>
                        <h3 className="text-2xl font-bold mb-3 text-[#654321] group-hover:text-[#E67E22] transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-[#8B4513] text-base leading-relaxed group-hover:text-[#654321] transition-colors duration-300">
                          {service.description}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2 pt-2">
                        {service.tags.map((tag, idx) => (
                          <motion.span
                            key={tag}
                            className="px-3 py-1.5 rounded-lg text-xs font-semibold shadow-md hover:shadow-lg transition-all cursor-pointer"
                            style={{
                              background: `linear-gradient(to right, ${service.gradientFrom}dd, ${service.gradientTo}dd)`,
                              color: 'white'
                            }}
                            whileHover={{ scale: 1.1, y: -3 }}
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Style 4: Elevated card with floating elements */}
                {cardStyle === 3 && (
                  <Card className="group h-full cursor-pointer relative overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-4 hover:rotate-1">
                    {/* Base gradient background */}
                    <div 
                      className="absolute inset-0"
                      style={{
                        background: `linear-gradient(135deg, ${service.bgFrom} 0%, ${service.bgTo} 100%)`
                      }}
                    />
                    
                    {/* Animated gradient mesh overlay */}
                    <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                      <div 
                        className="absolute top-0 left-0 w-40 h-40 rounded-full blur-3xl animate-float"
                        style={{ background: service.gradientFrom }}
                      />
                      <div 
                        className="absolute bottom-0 right-0 w-32 h-32 rounded-full blur-2xl animate-float"
                        style={{ background: service.gradientTo, animationDelay: '1s' }}
                      />
                    </div>
                    
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/30 to-white/0 animate-shimmer" />
                    </div>
                    
                    <CardContent className="p-8 space-y-6 relative z-10">
                      {/* Floating icon with multiple layers */}
                      <div className="relative mb-6">
                        <motion.div 
                          className="w-24 h-24 mx-auto relative"
                          whileHover={{ 
                            scale: 1.1,
                            transition: { type: "spring", stiffness: 300, damping: 10 }
                          }}
                        >
                          {/* Shadow layer */}
                          <div 
                            className="absolute inset-0 rounded-2xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity"
                            style={{
                              background: `linear-gradient(135deg, ${service.gradientFrom}, ${service.gradientTo})`
                            }}
                          />
                          
                          {/* Main icon container */}
                          <div 
                            className="relative w-full h-full rounded-2xl flex items-center justify-center shadow-2xl"
                            style={{
                              background: `linear-gradient(135deg, ${service.iconFrom} 0%, ${service.iconTo} 100%)`
                            }}
                          >
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/40 via-white/10 to-transparent" />
                            
                            {/* Pulsing ring */}
                            <div 
                              className="absolute inset-0 rounded-2xl border-4 border-white/40 scale-100 group-hover:scale-110 opacity-100 group-hover:opacity-0 transition-all duration-500"
                            />
                            
                            <service.icon className="h-12 w-12 text-white relative z-10 drop-shadow-2xl" />
                          </div>
                        </motion.div>
                      </div>
                      
                      {/* Content with stagger effect */}
                      <div className="text-center space-y-3">
                        <Badge 
                          className="mb-2 border-0 shadow-lg"
                          style={{
                            background: `linear-gradient(to right, ${service.gradientFrom}, ${service.gradientTo})`,
                            color: 'white'
                          }}
                        >
                          Excellence
                        </Badge>
                        
                        <h3 className="text-2xl font-bold text-[#654321] group-hover:text-[#E67E22] transition-colors duration-300">
                          {service.title}
                        </h3>
                        
                        <p className="text-[#8B4513] text-sm leading-relaxed px-2">
                          {service.description}
                        </p>
                      </div>

                      {/* Tags in modern bubble style */}
                      <div className="flex flex-wrap gap-2 justify-center pt-4">
                        {service.tags.map((tag, idx) => (
                          <motion.span
                            key={tag}
                            className="px-4 py-2 rounded-full text-xs font-bold bg-white/70 backdrop-blur-sm text-[#654321] hover:bg-white shadow-md hover:shadow-lg transition-all cursor-pointer border-2 border-white/50"
                            whileHover={{ 
                              scale: 1.15, 
                              y: -5,
                              borderColor: service.gradientFrom 
                            }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1 }}
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
