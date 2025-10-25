"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Globe, Smartphone, ShoppingCart, BarChart, Database, Cloud,
  Shield, Megaphone, GraduationCap, Lightbulb, Users, Code,
  ArrowRight, CheckCircle2, Sparkles, Zap
} from "lucide-react";
import { motion } from "framer-motion";
import React from "react";

const services = [
  {
    id: "web",
    icon: Globe,
    title: "Développement Web",
    subtitle: "Des sites qui convertissent",
    description: "Créez votre présence en ligne avec des sites web modernes, rapides et optimisés. Que ce soit un site vitrine, une application web complexe ou un CMS personnalisé.",
    features: [
      "Sites vitrines responsive et performants",
      "Applications web progressives (PWA)",
      "CMS: WordPress, Joomla, Strapi, Cosmic",
      "E-commerce & Marketplace",
    ],
    gradient: "from-[#E67E22] to-[#D87C4A]",
    bgGradient: "from-[#FFF5EB] to-[#FFE4CC]",
    illustration: "💻"
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Applications Mobiles",
    subtitle: "Votre business dans toutes les poches",
    description: "Applications mobiles natives et cross-platform pour iOS et Android. Design moderne, performances optimales et expérience utilisateur exceptionnelle.",
    features: [
      "Apps natives iOS & Android",
      "Développement cross-platform (React Native, Flutter)",
      "Progressive Web Apps (PWA)",
      "Design UX/UI moderne",
    ],
    gradient: "from-[#F39C12] to-[#E67E22]",
    bgGradient: "from-[#FFF9E6] to-[#FFF0CC]",
    illustration: "📱"
  },
  {
    id: "ecommerce",
    icon: ShoppingCart,
    title: "E-Commerce & Marketplace",
    subtitle: "Vendez plus, vendez mieux",
    description: "Plateformes e-commerce complètes avec gestion des stocks, paiements, livraisons et analytics. Transformez votre commerce traditionnel en succès digital.",
    features: [
      "Solutions e-commerce clé en main",
      "Marketplace multi-vendeurs",
      "Paiement mobile & carte intégrés",
      "Gestion stocks et logistique",
    ],
    gradient: "from-[#2C5F2D] to-[#4A7C59]",
    bgGradient: "from-[#E8F5E9] to-[#C8E6C9]",
    illustration: "🛒"
  },
  {
    id: "erp-crm",
    icon: BarChart,
    title: "ERP & CRM",
    subtitle: "Gérez tout votre business en un seul endroit",
    description: "Solutions complètes de gestion d'entreprise. Centralisez vos opérations, automatisez vos processus et prenez de meilleures décisions basées sur vos données.",
    features: [
      "ERP sur mesure pour votre secteur",
      "CRM pour la gestion client",
      "Tableaux de bord analytiques",
      "Automatisation des workflows",
    ],
    gradient: "from-[#D87C4A] to-[#B85A2F]",
    bgGradient: "from-[#FFF3E0] to-[#FFE0B2]",
    illustration: "📊"
  },
];

export default function ServicesAlternate() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-[#E67E22]/10 to-[#FFD700]/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-[#D87C4A]/10 to-[#CC7722]/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
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
              Nos Services
            </Badge>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Notre <span className="text-gradient-sahel">Expertise</span> à votre Service
          </h2>
          <p className="text-xl text-[#8B4513] max-w-3xl mx-auto leading-relaxed">
            De la conception à la livraison, nous proposons tous les services 
            pour digitaliser votre entreprise et la propulser vers le succès
          </p>
        </motion.div>

        {/* Alternating Service Sections */}
        <div className="space-y-32">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={service.id}
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
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-xl`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <service.icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <Badge className={`bg-gradient-to-r ${service.gradient} text-white border-0 text-sm px-4 py-1`}>
                        Premium
                      </Badge>
                    </div>

                    {/* Title & Subtitle */}
                    <div>
                      <h3 className="text-4xl md:text-5xl font-bold text-[#654321] mb-3 leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-xl text-[#E67E22] font-semibold">
                        {service.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-lg text-[#8B4513] leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-4">
                      {service.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-start gap-3 group"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 + idx * 0.1 }}
                        >
                          <CheckCircle2 className={`w-6 h-6 text-[#E67E22] mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform`} />
                          <span className="text-[#654321] font-medium text-base">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button 
                        size="lg"
                        className={`bg-gradient-to-r ${service.gradient} text-white border-0 shadow-xl hover:shadow-2xl group`}
                      >
                        En savoir plus
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </motion.div>
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
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-20 blur-3xl rounded-3xl scale-95`} />
                      
                      {/* Main Card */}
                      <motion.div
                        className={`relative bg-gradient-to-br ${service.bgGradient} rounded-3xl p-12 shadow-2xl overflow-hidden`}
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {/* Decorative Elements */}
                        <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${service.gradient} opacity-10 rounded-full blur-3xl`} />
                        <div className={`absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tl ${service.gradient} opacity-10 rounded-full blur-2xl`} />
                        
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
                            {service.illustration}
                          </motion.div>
                        </div>

                        {/* Floating Elements */}
                        <motion.div
                          className={`absolute top-8 right-8 w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-20`}
                          animate={{ 
                            y: [0, -10, 0],
                            rotate: [0, 10, 0]
                          }}
                          transition={{ 
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                        
                        <motion.div
                          className={`absolute bottom-8 left-8 w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} opacity-20`}
                          animate={{ 
                            y: [0, 10, 0],
                            rotate: [0, -10, 0]
                          }}
                          transition={{ 
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1
                          }}
                        />
                      </motion.div>

                      {/* Stats or Extra Info */}
                      <motion.div
                        className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-2xl p-6"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                      >
                        <div className="flex items-center gap-3">
                          <Zap className={`w-8 h-8 text-[#E67E22]`} />
                          <div>
                            <p className="text-2xl font-bold text-[#654321]">50+</p>
                            <p className="text-sm text-[#8B4513]">Projets réussis</p>
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

        {/* Additional Services Grid */}
        <motion.div
          className="mt-32"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-[#654321] mb-4">
              Et bien plus encore...
            </h3>
            <p className="text-lg text-[#8B4513]">
              Découvrez tous nos services complémentaires
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Database, title: "Bases de Données", color: "from-[#8B4513] to-[#A0826D]" },
              { icon: Cloud, title: "Cloud & Hébergement", color: "from-[#87CEEB] to-[#4A90A4]" },
              { icon: Shield, title: "Cybersécurité", color: "from-[#B85A2F] to-[#8B4513]" },
              { icon: Megaphone, title: "Web Marketing", color: "from-[#FFD700] to-[#F39C12]" },
              { icon: GraduationCap, title: "Formations Pro", color: "from-[#E67E22] to-[#CC7722]" },
              { icon: Lightbulb, title: "Incubateur", color: "from-[#2C5F2D] to-[#4A7C59]" },
              { icon: Users, title: "Consulting IT", color: "from-[#D87C4A] to-[#B87333]" },
              { icon: Code, title: "Développement Custom", color: "from-[#F39C12] to-[#E67E22]" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                  <motion.div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <item.icon className="w-7 h-7 text-white" />
                  </motion.div>
                  <h4 className="text-lg font-bold text-[#654321] group-hover:text-[#E67E22] transition-colors">
                    {item.title}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
