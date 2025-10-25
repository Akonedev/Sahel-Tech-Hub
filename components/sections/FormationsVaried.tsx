"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Code, Database, Brain, Palette, CheckCircle2, 
  ArrowRight, Sparkles, Users, Award, Clock, BookOpen
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const formations = [
  {
    id: "dev",
    icon: Code,
    title: "Programmation",
    subtitle: "Devenez Développeur Full-Stack",
    description: "Maîtrisez les langages et frameworks modernes utilisés par les plus grandes entreprises tech du monde.",
    skills: [
      "Python - Backend & Data Science",
      "JavaScript/TypeScript - Web moderne",
      "Java - Enterprise & Android",
      "React & Angular - Frontend avancé",
      "Node.js - Serveur JavaScript"
    ],
    gradient: "from-[#E67E22] to-[#D87C4A]",
    duration: "6-12 mois",
    level: "Débutant à Avancé",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070"
  },
  {
    id: "data",
    icon: Database,
    title: "Bases de Données",
    subtitle: "Expert Data Management",
    description: "Apprenez à concevoir, gérer et optimiser des bases de données SQL et NoSQL pour des applications performantes.",
    skills: [
      "MySQL - Base SQL classique",
      "PostgreSQL - BD avancée",
      "MariaDB - Performance optimale",
      "Oracle DB - Enterprise grade",
      "MongoDB - NoSQL moderne"
    ],
    gradient: "from-[#2C5F2D] to-[#4A7C59]",
    duration: "3-6 mois",
    level: "Intermédiaire",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070"
  },
  {
    id: "ia",
    icon: Brain,
    title: "Intelligence Artificielle",
    subtitle: "IA & Machine Learning",
    description: "Entrez dans le futur avec l'IA et le Machine Learning. Créez des applications intelligentes qui transforment le business.",
    skills: [
      "Machine Learning avec Python",
      "Deep Learning & Neural Networks",
      "NLP - Traitement du langage",
      "Computer Vision - Vision par ordinateur",
      "IA Générative & LLMs"
    ],
    gradient: "from-[#F39C12] to-[#E67E22]",
    duration: "9-12 mois",
    level: "Avancé",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070"
  },
  {
    id: "digital",
    icon: Palette,
    title: "Transformation Digitale",
    subtitle: "Outils Professionnels",
    description: "Formation complète aux outils informatiques essentiels pour booster la productivité de votre entreprise.",
    skills: [
      "Suite Microsoft 365 (Word, Excel, PowerPoint)",
      "Google Workspace & collaboration",
      "Outils de gestion de projet",
      "Marketing digital & réseaux sociaux",
      "CRM & ERP - Gestion business"
    ],
    gradient: "from-[#D87C4A] to-[#B85A2F]",
    duration: "1-3 mois",
    level: "Tous niveaux",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070"
  }
];

const stats = [
  { value: "500+", label: "Étudiants formés", icon: Users },
  { value: "95%", label: "Taux de réussite", icon: Award },
  { value: "200h", label: "Pratique minimum", icon: Clock },
  { value: "100%", label: "Projets réels", icon: BookOpen },
];

export default function FormationsVaried() {
  return (
    <section id="formations" className="py-24 bg-gradient-to-br from-[#E8F5E9] via-[#C8E6C9] to-[#A5D6A7] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 left-[5%] w-96 h-96 bg-[#E67E22]/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-[10%] w-80 h-80 bg-[#2C5F2D]/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="badge-sahel mb-6">
            <Sparkles className="w-4 h-4 mr-1" />
            Formations Professionnelles
          </Badge>
          
          <h2 className="text-4xl md:text-6xl font-bold text-[#654321] mb-6">
            Développez Vos <span className="text-gradient-sahel">Compétences</span>
          </h2>
          <p className="text-xl text-[#8B4513] max-w-3xl mx-auto">
            Formations certifiantes aux technologies modernes : Programmation, Data, IA, Outils digitaux
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg text-center"
            >
              <stat.icon className="w-10 h-10 text-[#E67E22] mx-auto mb-3" />
              <p className="text-3xl font-bold text-[#654321] mb-1">{stat.value}</p>
              <p className="text-sm text-[#8B4513]">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Formations alternées */}
        <div className="space-y-24">
          {formations.map((formation, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={formation.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}>
                  {/* Image side */}
                  <div className={!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="relative"
                    >
                      {/* Glow */}
                      <div className={`absolute -inset-4 bg-gradient-to-br ${formation.gradient} opacity-20 blur-3xl rounded-3xl`} />
                      
                      {/* Image */}
                      <div className="relative h-[450px] rounded-3xl overflow-hidden shadow-2xl">
                        <Image
                          src={formation.image}
                          alt={formation.title}
                          fill
                          className="object-cover"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t ${formation.gradient} opacity-30`} />
                        
                        {/* Floating info cards */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 }}
                          className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl"
                        >
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="text-sm text-[#8B4513] mb-1">Durée</p>
                              <p className="font-bold text-[#654321]">{formation.duration}</p>
                            </div>
                            <div>
                              <p className="text-sm text-[#8B4513] mb-1">Niveau</p>
                              <p className="font-bold text-[#654321]">{formation.level}</p>
                            </div>
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${formation.gradient} flex items-center justify-center`}>
                              <formation.icon className="w-6 h-6 text-white" />
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Content side */}
                  <div className={!isEven ? 'lg:col-start-2' : ''}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      className="space-y-6"
                    >
                      {/* Icon & title */}
                      <div>
                        <div className="flex items-center gap-4 mb-4">
                          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${formation.gradient} flex items-center justify-center shadow-xl`}>
                            <formation.icon className="w-8 h-8 text-white" />
                          </div>
                          <Badge className={`bg-gradient-to-r ${formation.gradient} text-white border-0`}>
                            Certifiant
                          </Badge>
                        </div>
                        
                        <h3 className="text-3xl md:text-4xl font-bold text-[#654321] mb-2">
                          {formation.title}
                        </h3>
                        <p className="text-xl font-semibold text-[#E67E22]">
                          {formation.subtitle}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-lg text-[#8B4513] leading-relaxed">
                        {formation.description}
                      </p>

                      {/* Skills list */}
                      <div className="space-y-3">
                        <p className="font-bold text-[#654321] text-lg">Programme :</p>
                        {formation.skills.map((skill, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 + idx * 0.1 }}
                            className="flex items-start gap-3 group"
                          >
                            <CheckCircle2 className="w-5 h-5 text-[#E67E22] mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                            <span className="text-[#654321]">{skill}</span>
                          </motion.div>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="flex gap-4 pt-4">
                        <Button 
                          size="lg"
                          className={`bg-gradient-to-r ${formation.gradient} text-white hover:shadow-xl group flex-1`}
                        >
                          S'inscrire Maintenant
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button 
                          size="lg"
                          variant="outline"
                          className="border-2 border-[#E67E22] text-[#E67E22] hover:bg-[#E67E22]/10"
                        >
                          Programme Détaillé
                        </Button>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="bg-gradient-to-br from-[#2C5F2D] to-[#4A7C59] rounded-3xl p-12 text-center shadow-2xl">
            <Award className="w-16 h-16 text-white mx-auto mb-6" />
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Obtenez Votre Certification Professionnelle
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Formations certifiantes reconnues par les entreprises de la région du Sahel
            </p>
            <Button size="lg" className="bg-white text-[#2C5F2D] hover:bg-white/90 text-lg px-8">
              Découvrir Nos Formations
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
