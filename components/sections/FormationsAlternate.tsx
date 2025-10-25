"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Code2, Database, Brain, Users, Award, CheckCircle2, 
  ArrowRight, Sparkles, BookOpen, Clock, TrendingUp
} from "lucide-react";
import { motion } from "framer-motion";
import React from "react";

const formations = [
  {
    id: "programming",
    icon: Code2,
    title: "Formation Programmation",
    subtitle: "Devenez Développeur Expert",
    description: "Maîtrisez les langages de programmation les plus demandés du marché. Python, JavaScript, TypeScript, Java... Nos formations complètes vous préparent aux défis du développement moderne.",
    languages: ["Python", "JavaScript", "TypeScript", "Java", "React", "Angular"],
    features: [
      "12 à 16 semaines de formation intensive",
      "Projets réels et portfolio professionnel",
      "Mentors experts disponibles 24/7",
      "Certification reconnue à la fin",
    ],
    gradient: "from-[#E67E22] to-[#D87C4A]",
    bgGradient: "from-[#FFF5EB] to-[#FFE4CC]",
    illustration: "👨‍💻",
    stats: { value: "500+", label: "Développeurs formés" }
  },
  {
    id: "data-ai",
    icon: Brain,
    title: "Data Science & IA",
    subtitle: "L'avenir est dans les données",
    description: "Plongez dans le monde de la Data Science et de l'Intelligence Artificielle. Apprenez à analyser, visualiser et créer des modèles prédictifs pour résoudre des problèmes complexes.",
    languages: ["Python", "R", "SQL", "TensorFlow", "PyTorch", "Pandas"],
    features: [
      "Formation Data Science complète",
      "Machine Learning & Deep Learning",
      "Projets IA concrets",
      "Accès aux dernières technologies",
    ],
    gradient: "from-[#F39C12] to-[#E67E22]",
    bgGradient: "from-[#FFF9E6] to-[#FFF0CC]",
    illustration: "🤖",
    stats: { value: "200+", label: "Data Scientists formés" }
  },
  {
    id: "database",
    icon: Database,
    title: "Bases de Données",
    subtitle: "Maîtrisez la gestion des données",
    description: "SQL et NoSQL n'auront plus de secrets pour vous. MariaDB, PostgreSQL, MySQL, MongoDB, Oracle DB... Apprenez à concevoir, optimiser et administrer des bases de données performantes.",
    languages: ["SQL", "PostgreSQL", "MySQL", "MongoDB", "Redis", "Oracle"],
    features: [
      "SQL avancé et optimisation",
      "Bases NoSQL modernes",
      "Administration et sécurité",
      "Performance et scalabilité",
    ],
    gradient: "from-[#2C5F2D] to-[#4A7C59]",
    bgGradient: "from-[#E8F5E9] to-[#C8E6C9]",
    illustration: "🗄️",
    stats: { value: "300+", label: "DBA certifiés" }
  },
  {
    id: "enterprise",
    icon: Users,
    title: "Formation Entreprise",
    subtitle: "Digitalisez vos équipes",
    description: "Formations sur mesure pour vos collaborateurs. Outils collaboratifs, transformation digitale, cybersécurité... Accompagnez vos équipes dans la transition numérique.",
    languages: ["Microsoft 365", "Google Workspace", "Outils Collab", "Security", "Cloud", "Agile"],
    features: [
      "Formations sur mesure adaptées",
      "Outils collaboratifs modernes",
      "Cybersécurité et bonnes pratiques",
      "Support post-formation inclus",
    ],
    gradient: "from-[#D87C4A] to-[#B85A2F]",
    bgGradient: "from-[#FFF3E0] to-[#FFE0B2]",
    illustration: "👥",
    stats: { value: "100+", label: "Entreprises formées" }
  },
];

export default function FormationsAlternate() {
  return (
    <section id="formations" className="py-24 bg-gradient-to-b from-[#FAFAF8] to-[#F5E6D3] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-[#2C5F2D]/10 to-[#4A7C59]/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-[#E67E22]/10 to-[#F39C12]/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
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
              <BookOpen className="w-4 h-4 mr-1" />
              Formations Professionnelles
            </Badge>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Investissez dans <span className="text-gradient-sahel">Vos Compétences</span>
          </h2>
          <p className="text-xl text-[#8B4513] max-w-3xl mx-auto leading-relaxed">
            Formations intensives aux technologies modernes : Programmation, Data Science, IA et plus encore
          </p>
        </motion.div>

        {/* Alternating Formation Sections */}
        <div className="space-y-32">
          {formations.map((formation, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={formation.id}
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
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${formation.gradient} flex items-center justify-center shadow-xl`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <formation.icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <Badge className={`bg-gradient-to-r ${formation.gradient} text-white border-0 text-sm px-4 py-1`}>
                        Certification
                      </Badge>
                    </div>

                    {/* Title & Subtitle */}
                    <div>
                      <h3 className="text-4xl md:text-5xl font-bold text-[#654321] mb-3 leading-tight">
                        {formation.title}
                      </h3>
                      <p className="text-xl text-[#E67E22] font-semibold">
                        {formation.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-lg text-[#8B4513] leading-relaxed">
                      {formation.description}
                    </p>

                    {/* Technologies/Languages */}
                    <div>
                      <p className="text-sm font-semibold text-[#654321] mb-3 flex items-center gap-2">
                        <Award className="w-4 h-4" />
                        Technologies enseignées :
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {formation.languages.map((lang, idx) => (
                          <motion.span
                            key={idx}
                            className={`px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r ${formation.gradient} text-white shadow-md hover:shadow-lg transition-all cursor-pointer`}
                            whileHover={{ scale: 1.1, y: -3 }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 + idx * 0.05 }}
                          >
                            {lang}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Features List */}
                    <div className="space-y-4">
                      {formation.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-start gap-3 group"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + idx * 0.1 }}
                        >
                          <CheckCircle2 className={`w-6 h-6 text-[#E67E22] mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform`} />
                          <span className="text-[#654321] font-medium text-base">
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
                          className={`bg-gradient-to-r ${formation.gradient} text-white border-0 shadow-xl hover:shadow-2xl group`}
                        >
                          S'inscrire maintenant
                          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </motion.div>
                      
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button 
                          size="lg"
                          variant="outline"
                          className="border-2 border-[#E67E22] text-[#E67E22] hover:bg-[#E67E22] hover:text-white"
                        >
                          <Clock className="mr-2 w-5 h-5" />
                          Programme détaillé
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
                      <div className={`absolute inset-0 bg-gradient-to-br ${formation.gradient} opacity-20 blur-3xl rounded-3xl scale-95`} />
                      
                      {/* Main Card */}
                      <motion.div
                        className={`relative bg-gradient-to-br ${formation.bgGradient} rounded-3xl p-12 shadow-2xl overflow-hidden`}
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {/* Code-like pattern background */}
                        <div className="absolute inset-0 opacity-5 font-mono text-xs leading-relaxed overflow-hidden">
                          {`const formation = {
  quality: "premium",
  certification: true,
  support: "24/7",
  success: "guaranteed"
};

function learnSkills() {
  return "Expert Developer";
}`.repeat(10)}
                        </div>

                        {/* Decorative Elements */}
                        <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${formation.gradient} opacity-10 rounded-full blur-3xl`} />
                        <div className={`absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tl ${formation.gradient} opacity-10 rounded-full blur-2xl`} />
                        
                        {/* Illustration */}
                        <div className="relative z-10 flex items-center justify-center">
                          <motion.div
                            className="text-[200px] leading-none"
                            animate={{ 
                              y: [0, -20, 0],
                              scale: [1, 1.05, 1]
                            }}
                            transition={{ 
                              duration: 6,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          >
                            {formation.illustration}
                          </motion.div>
                        </div>

                        {/* Floating Feature Cards */}
                        <motion.div
                          className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg"
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
                            <BookOpen className={`w-5 h-5 text-[#E67E22]`} />
                            <span className="text-sm font-bold text-[#654321]">Cours en ligne</span>
                          </div>
                        </motion.div>

                        <motion.div
                          className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg"
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
                            <Users className={`w-5 h-5 text-[#E67E22]`} />
                            <span className="text-sm font-bold text-[#654321]">Mentors experts</span>
                          </div>
                        </motion.div>

                        <motion.div
                          className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg"
                          animate={{ 
                            scale: [1, 1.05, 1],
                          }}
                          transition={{ 
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.5
                          }}
                        >
                          <div className="flex items-center gap-2">
                            <Award className={`w-5 h-5 text-[#E67E22]`} />
                            <span className="text-sm font-bold text-[#654321]">Certification</span>
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
                            <p className="text-2xl font-bold text-[#654321]">{formation.stats.value}</p>
                            <p className="text-sm text-[#8B4513]">{formation.stats.label}</p>
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
                <Sparkles className="w-5 h-5 text-white" />
                <span className="text-white font-semibold">Formation Premium</span>
              </motion.div>

              <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Prêt à Commencer Votre Parcours ?
              </h3>
              <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                Inscrivez-vous dès maintenant et bénéficiez de -20% sur votre première formation
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    size="lg" 
                    className="bg-white text-[#E67E22] hover:bg-white/90 shadow-xl hover:shadow-2xl px-8 py-6 text-lg"
                  >
                    <BookOpen className="mr-2 h-6 w-6" />
                    Voir toutes les formations
                    <ArrowRight className="ml-2 h-6 w-6" />
                  </Button>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-[#E67E22] px-8 py-6 text-lg"
                  >
                    Télécharger le catalogue
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
