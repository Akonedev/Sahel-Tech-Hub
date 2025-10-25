"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Lightbulb, Users, Laptop, Target, Rocket, BookOpen, 
  CheckCircle2, ArrowRight, Sparkles, Zap, TrendingUp
} from "lucide-react";
import { motion } from "framer-motion";
import React from "react";

const services = [
  {
    id: "ideation",
    icon: Lightbulb,
    title: "De l'Idée au Projet",
    subtitle: "Transformez votre vision en réalité",
    description: "Vous avez une idée innovante mais ne savez pas par où commencer ? Notre incubateur vous accompagne dans toutes les étapes, de la conceptualisation à la réalisation concrète de votre projet.",
    features: [
      "Sessions de brainstorming collaboratives",
      "Étude de faisabilité technique",
      "Business model et stratégie",
      "Validation de concept (MVP)",
    ],
    gradient: "from-[#E67E22] to-[#D87C4A]",
    bgGradient: "from-[#FFF5EB] to-[#FFE4CC]",
    illustration: "💡",
    stats: { value: "100+", label: "Projets incubés" }
  },
  {
    id: "workspace",
    icon: Laptop,
    title: "Open Space Premium",
    subtitle: "Un environnement propice à l'innovation",
    description: "Travaillez dans un espace moderne et équipé, conçu pour stimuler la créativité et la productivité. Accès 24/7, wifi haute vitesse, salles de réunion et équipements professionnels.",
    features: [
      "Espace de travail moderne et connecté",
      "Équipements informatiques de pointe",
      "Salles de réunion et collaboration",
      "Accès 24/7 pour les membres",
    ],
    gradient: "from-[#F39C12] to-[#E67E22]",
    bgGradient: "from-[#FFF9E6] to-[#FFF0CC]",
    illustration: "🏢",
    stats: { value: "500m²", label: "D'espace de travail" }
  },
  {
    id: "mentoring",
    icon: Users,
    title: "Mentors & Experts",
    subtitle: "Apprenez des meilleurs",
    description: "Bénéficiez de l'expérience de nos mentors, chefs de projet, architectes et développeurs seniors. Un accompagnement personnalisé pour accélérer votre apprentissage et éviter les erreurs courantes.",
    features: [
      "Mentors tech expérimentés disponibles",
      "Chefs de projet et architectes",
      "Sessions de coaching individuelles",
      "Revues de code et best practices",
    ],
    gradient: "from-[#2C5F2D] to-[#4A7C59]",
    bgGradient: "from-[#E8F5E9] to-[#C8E6C9]",
    illustration: "👨‍🏫",
    stats: { value: "20+", label: "Mentors experts" }
  },
  {
    id: "resources",
    icon: BookOpen,
    title: "Ressources & Formation",
    subtitle: "Tout ce dont vous avez besoin",
    description: "Accès illimité à notre bibliothèque de ressources, formations en ligne, outils professionnels et licences logicielles. Développez vos compétences tout en travaillant sur votre projet.",
    features: [
      "Formations continues incluses",
      "Accès aux outils professionnels",
      "Documentation et ressources",
      "Licences logicielles partagées",
    ],
    gradient: "from-[#D87C4A] to-[#B85A2F]",
    bgGradient: "from-[#FFF3E0] to-[#FFE0B2]",
    illustration: "📚",
    stats: { value: "1000+", label: "Heures de formation" }
  },
];

export default function IncubateurAlternate() {
  return (
    <section id="incubateur" className="py-24 bg-gradient-to-b from-[#F5E6D3] to-[#FAFAF8] relative overflow-hidden">
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
              <Rocket className="w-4 h-4 mr-1" />
              Incubateur & Accompagnement
            </Badge>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Votre <span className="text-gradient-sahel">Projet</span> Notre Mission
          </h2>
          <p className="text-xl text-[#8B4513] max-w-3xl mx-auto leading-relaxed">
            Un écosystème complet pour transformer vos idées en projets réussis. 
            Espace, équipement, mentors et ressources à votre disposition.
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
                        {/* Decorative Grid */}
                        <div className="absolute inset-0 opacity-5">
                          <div className="grid grid-cols-6 grid-rows-6 h-full w-full">
                            {Array.from({ length: 36 }).map((_, i) => (
                              <motion.div 
                                key={i} 
                                className="border border-[#654321]"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: [0.3, 0.7, 0.3] }}
                                transition={{ 
                                  duration: 3,
                                  repeat: Infinity,
                                  delay: i * 0.1 
                                }}
                              />
                            ))}
                          </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${service.gradient} opacity-10 rounded-full blur-3xl`} />
                        <div className={`absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tl ${service.gradient} opacity-10 rounded-full blur-2xl`} />
                        
                        {/* Illustration */}
                        <div className="relative z-10 flex items-center justify-center">
                          <motion.div
                            className="text-[200px] leading-none"
                            animate={{ 
                              y: [0, -20, 0],
                              rotate: [0, 3, 0, -3, 0]
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
                          className={`absolute top-8 right-8 w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} opacity-20`}
                          animate={{ 
                            y: [0, -15, 0],
                            rotate: [0, 15, 0]
                          }}
                          transition={{ 
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                        
                        <motion.div
                          className={`absolute bottom-8 left-8 w-12 h-12 rounded-lg bg-gradient-to-br ${service.gradient} opacity-20`}
                          animate={{ 
                            y: [0, 15, 0],
                            rotate: [0, -15, 0]
                          }}
                          transition={{ 
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1
                          }}
                        />
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
                          <Zap className={`w-8 h-8 text-[#E67E22]`} />
                          <div>
                            <p className="text-2xl font-bold text-[#654321]">{service.stats.value}</p>
                            <p className="text-sm text-[#8B4513]">{service.stats.label}</p>
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

        {/* Process Section */}
        <motion.div
          className="mt-32"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-[#654321] mb-4">
              Comment <span className="text-gradient-sahel">Rejoindre</span> l'Incubateur ?
            </h3>
            <p className="text-lg text-[#8B4513] max-w-2xl mx-auto">
              Un processus simple et transparent en 5 étapes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { step: "01", title: "Candidature", desc: "Soumettez votre projet" },
              { step: "02", title: "Évaluation", desc: "Analyse de faisabilité" },
              { step: "03", title: "Sélection", desc: "Validation du comité" },
              { step: "04", title: "Intégration", desc: "Accès aux ressources" },
              { step: "05", title: "Lancement", desc: "Démarrage du projet" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="text-center">
                  <motion.div
                    className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#E67E22] to-[#D87C4A] flex items-center justify-center shadow-xl"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <span className="text-2xl font-bold text-white">{item.step}</span>
                  </motion.div>
                  <h4 className="text-lg font-bold text-[#654321] mb-2">{item.title}</h4>
                  <p className="text-sm text-[#8B4513]">{item.desc}</p>
                </div>
                {idx < 4 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-[#E67E22] to-[#D87C4A] opacity-30" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          className="mt-32"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-[#E67E22] via-[#F39C12] to-[#E67E22] rounded-3xl p-12 md:p-16 shadow-2xl relative overflow-hidden">
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
                <Target className="w-5 h-5 text-white" />
                <span className="text-white font-semibold">Rejoignez-nous</span>
              </motion.div>

              <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Votre Projet Mérite le Meilleur Accompagnement
              </h3>
              <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                Ne laissez pas votre idée dans un tiroir. Postulez aujourd'hui et transformez-la en succès !
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    size="lg" 
                    className="bg-white text-[#E67E22] hover:bg-white/90 shadow-xl hover:shadow-2xl px-8 py-6 text-lg"
                  >
                    <Rocket className="mr-2 h-6 w-6" />
                    Postuler maintenant
                    <ArrowRight className="ml-2 h-6 w-6" />
                  </Button>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-[#E67E22] px-8 py-6 text-lg"
                  >
                    Visiter l'incubateur
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
