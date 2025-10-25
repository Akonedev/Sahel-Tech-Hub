"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code2, Database, Brain, Calendar, Users, Award } from "lucide-react";
import { motion } from "framer-motion";

const formations = {
  programmation: [
    {
      title: "Python Avancé",
      duration: "12 semaines",
      level: "Débutant à Avancé",
      topics: ["Syntaxe Python", "POO", "Data Science", "Django/Flask", "APIs"],
      icon: Code2
    },
    {
      title: "JavaScript/TypeScript Full Stack",
      duration: "16 semaines",
      level: "Débutant à Expert",
      topics: ["JS ES6+", "TypeScript", "React", "Node.js", "Next.js"],
      icon: Code2
    },
    {
      title: "Java Enterprise",
      duration: "14 semaines",
      level: "Intermédiaire",
      topics: ["Java Core", "Spring Boot", "Hibernate", "Microservices"],
      icon: Code2
    },
  ],
  data: [
    {
      title: "Data Science & Analytics",
      duration: "10 semaines",
      level: "Intermédiaire",
      topics: ["Pandas", "NumPy", "Visualization", "Statistical Analysis"],
      icon: Database
    },
    {
      title: "Intelligence Artificielle",
      duration: "12 semaines",
      level: "Avancé",
      topics: ["Machine Learning", "Deep Learning", "TensorFlow", "PyTorch"],
      icon: Brain
    },
    {
      title: "Bases de Données",
      duration: "8 semaines",
      level: "Débutant à Avancé",
      topics: ["SQL", "PostgreSQL", "MySQL", "MongoDB", "Redis"],
      icon: Database
    },
  ],
  entreprises: [
    {
      title: "Transformation Digitale",
      duration: "Sur mesure",
      level: "Entreprises",
      topics: ["Stratégie digitale", "Process automation", "Cloud migration"],
      icon: Users
    },
    {
      title: "Outils Collaboratifs",
      duration: "5 jours",
      level: "Tous niveaux",
      topics: ["Microsoft 365", "Google Workspace", "Slack", "Trello"],
      icon: Users
    },
    {
      title: "Cybersécurité",
      duration: "6 semaines",
      level: "Intermédiaire",
      topics: ["Security best practices", "Threat detection", "Data protection"],
      icon: Award
    },
  ],
};

export default function Formations() {
  return (
    <section id="formations" className="py-24 bg-gradient-to-b from-[#FAFAF8] to-[#F5E6D3] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#2C5F2D]/10 to-[#4A7C59]/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-[#E67E22]/10 to-[#F39C12]/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
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
              <Award className="w-4 h-4 text-[#E67E22]" />
              Formations Professionnelles
            </div>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Développez Vos <span className="text-gradient-sahel">Compétences</span>
          </h2>
          <p className="text-xl text-[#8B4513] max-w-3xl mx-auto leading-relaxed">
            Formations professionnelles aux technologies modernes avec des experts du domaine
          </p>
        </motion.div>

        <Tabs defaultValue="programmation" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto">
            <TabsTrigger value="programmation" className="text-base py-3">
              <Code2 className="h-4 w-4 mr-2" />
              Programmation
            </TabsTrigger>
            <TabsTrigger value="data" className="text-base py-3">
              <Database className="h-4 w-4 mr-2" />
              Data & IA
            </TabsTrigger>
            <TabsTrigger value="entreprises" className="text-base py-3">
              <Users className="h-4 w-4 mr-2" />
              Entreprises
            </TabsTrigger>
          </TabsList>

          {Object.entries(formations).map(([key, items]) => {
            const colors = {
              programmation: {
                gradient: "from-[#E67E22] to-[#D87C4A]",
                bg: "from-[#FFF5EB] to-[#FFE4CC]",
                iconBg: "#E67E22",
              },
              data: {
                gradient: "from-[#2C5F2D] to-[#4A7C59]",
                bg: "from-[#E8F5E9] to-[#C8E6C9]",
                iconBg: "#2C5F2D",
              },
              entreprises: {
                gradient: "from-[#F39C12] to-[#E67E22]",
                bg: "from-[#FFF9E6] to-[#FFF0CC]",
                iconBg: "#F39C12",
              },
            };
            
            const color = colors[key as keyof typeof colors];
            
            return (
            <TabsContent key={key} value={key} className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {items.map((formation, index) => {
                  const cardStyle = index % 3;
                  
                  return (
                  <motion.div
                    key={formation.title}
                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                  >
                    {/* Style 1: Modern glass card */}
                    {cardStyle === 0 && (
                      <Card className="h-full hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden group hover:-translate-y-3 relative">
                        <div className={`absolute inset-0 bg-gradient-to-br ${color.bg}`} />
                        
                        {/* Top gradient bar */}
                        <div className={`h-2 bg-gradient-to-r ${color.gradient} absolute top-0 left-0 right-0 z-10`} />
                        
                        {/* Animated background */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                          <div className={`w-full h-full bg-gradient-to-br ${color.gradient}`} />
                        </div>
                        
                        <CardHeader className="relative z-20">
                          <motion.div 
                            className={`w-16 h-16 rounded-xl bg-gradient-to-br ${color.gradient} flex items-center justify-center mb-4 shadow-xl`}
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                          >
                            <formation.icon className="h-8 w-8 text-white" />
                          </motion.div>
                          <CardTitle className="text-xl text-[#654321] group-hover:text-[#E67E22] transition-colors">{formation.title}</CardTitle>
                          <div className="flex items-center gap-3 text-sm text-[#8B4513] pt-3">
                            <div className="flex items-center gap-1 px-3 py-1 bg-white/60 rounded-full">
                              <Calendar className="h-4 w-4" />
                              {formation.duration}
                            </div>
                            <Badge className={`bg-gradient-to-r ${color.gradient} text-white border-0`}>{formation.level}</Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-4 relative z-20">
                          <div>
                            <p className="text-sm font-bold mb-3 text-[#654321]">Programme:</p>
                            <ul className="space-y-2">
                              {formation.topics.map((topic, idx) => (
                                <motion.li 
                                  key={topic} 
                                  className="text-sm text-[#654321] flex items-center"
                                  initial={{ opacity: 0, x: -10 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  transition={{ delay: idx * 0.05 }}
                                >
                                  <span className={`w-2 h-2 bg-gradient-to-r ${color.gradient} rounded-full mr-3`} />
                                  {topic}
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                          <Button className={`w-full bg-gradient-to-r ${color.gradient} text-white border-0 shadow-lg hover:shadow-xl group/btn`}>
                            En savoir plus
                          </Button>
                        </CardContent>
                      </Card>
                    )}
                    
                    {/* Style 2: Elevated card with split design */}
                    {cardStyle === 1 && (
                      <Card className="h-full hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden group hover:-translate-y-3 relative">
                        {/* Split background */}
                        <div className="absolute inset-0 flex flex-col">
                          <div className={`h-32 bg-gradient-to-br ${color.gradient}`} />
                          <div className={`flex-1 bg-gradient-to-br ${color.bg}`} />
                        </div>
                        
                        {/* Shine effect */}
                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />
                        
                        <CardHeader className="relative z-20 pt-8">
                          <motion.div 
                            className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-4 shadow-2xl mx-auto -mt-16"
                            whileHover={{ y: -5, scale: 1.05 }}
                          >
                            <formation.icon className="h-10 w-10" style={{ color: color.iconBg }} />
                          </motion.div>
                          <CardTitle className="text-xl text-[#654321] text-center group-hover:text-[#E67E22] transition-colors">{formation.title}</CardTitle>
                          <div className="flex items-center justify-center gap-3 text-sm pt-3">
                            <div className="flex items-center gap-1 px-3 py-1 bg-white/80 rounded-full text-[#654321]">
                              <Calendar className="h-4 w-4" />
                              {formation.duration}
                            </div>
                          </div>
                          <Badge className={`bg-gradient-to-r ${color.gradient} text-white border-0 mx-auto mt-2`}>{formation.level}</Badge>
                        </CardHeader>
                        <CardContent className="space-y-4 relative z-20">
                          <div>
                            <p className="text-sm font-bold mb-3 text-[#654321]">Au programme:</p>
                            <div className="grid grid-cols-1 gap-2">
                              {formation.topics.map((topic, idx) => (
                                <motion.div
                                  key={topic}
                                  className="flex items-center p-2 rounded-lg bg-white/60 hover:bg-white/80 transition-all"
                                  initial={{ opacity: 0, scale: 0.9 }}
                                  whileInView={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: idx * 0.05 }}
                                  whileHover={{ x: 5 }}
                                >
                                  <span className={`w-1.5 h-1.5 bg-gradient-to-r ${color.gradient} rounded-full mr-3`} />
                                  <span className="text-xs text-[#654321] font-medium">{topic}</span>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                          <Button className={`w-full bg-gradient-to-r ${color.gradient} text-white border-0 shadow-lg hover:shadow-xl`}>
                            S&apos;inscrire
                          </Button>
                        </CardContent>
                      </Card>
                    )}
                    
                    {/* Style 3: Asymmetric modern card */}
                    {cardStyle === 2 && (
                      <Card className="h-full hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden group hover:-translate-y-3 relative">
                        <div className={`absolute inset-0 bg-gradient-to-br ${color.bg}`} />
                        
                        {/* Diagonal accent */}
                        <svg className="absolute top-0 right-0 w-40 h-40 opacity-30" viewBox="0 0 100 100">
                          <defs>
                            <linearGradient id={`diag-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" style={{ stopColor: color.iconBg, stopOpacity: 0.4 }} />
                              <stop offset="100%" style={{ stopColor: color.iconBg, stopOpacity: 0.1 }} />
                            </linearGradient>
                          </defs>
                          <path d="M 0,0 L 100,0 L 100,100 Z" fill={`url(#diag-${index})`} />
                        </svg>
                        
                        <CardHeader className="relative z-20">
                          <div className="flex items-start justify-between mb-4">
                            <motion.div 
                              className={`w-14 h-14 rounded-xl bg-gradient-to-br ${color.gradient} flex items-center justify-center shadow-lg`}
                              whileHover={{ rotate: -10, scale: 1.1 }}
                            >
                              <formation.icon className="h-7 w-7 text-white" />
                            </motion.div>
                            <Badge className={`bg-gradient-to-r ${color.gradient} text-white border-0 shadow-md`}>{formation.level}</Badge>
                          </div>
                          <CardTitle className="text-xl text-[#654321] group-hover:text-[#E67E22] transition-colors mb-3">{formation.title}</CardTitle>
                          <div className="flex items-center gap-2 text-sm text-[#8B4513]">
                            <Calendar className="h-4 w-4" />
                            {formation.duration}
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-4 relative z-20">
                          <div className="space-y-2">
                            {formation.topics.map((topic, idx) => (
                              <motion.div
                                key={topic}
                                className="flex items-start gap-2 p-2 rounded-lg bg-white/50 backdrop-blur-sm hover:bg-white/70 transition-all group/item"
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.05 }}
                              >
                                <span className={`w-1 h-full bg-gradient-to-b ${color.gradient} rounded-full mt-1 group-hover/item:w-1.5 transition-all`} />
                                <span className="text-sm text-[#654321] font-medium">{topic}</span>
                              </motion.div>
                            ))}
                          </div>
                          <Button className={`w-full bg-gradient-to-r ${color.gradient} text-white border-0 shadow-lg hover:shadow-xl`}>
                            Découvrir
                          </Button>
                        </CardContent>
                      </Card>
                    )}
                  </motion.div>
                  );
                })}
              </div>
            </TabsContent>
            );
          })}
        </Tabs>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-[#E67E22] via-[#F39C12] to-[#E67E22] border-0 shadow-2xl overflow-hidden relative">
            {/* Animated background elements */}
            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }} />
            </div>
            
            <CardContent className="p-10 md:p-12 relative z-10">
              <motion.div
                className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6"
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <Award className="h-10 w-10 text-white drop-shadow-lg" />
              </motion.div>
              
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-lg">
                Certifications Reconnues
              </h3>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Toutes nos formations incluent une certification officielle reconnue par l&apos;industrie et valorisée par les employeurs
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {["Python", "JavaScript", "Data Science", "Cloud"].map((cert, idx) => (
                  <motion.span
                    key={cert}
                    className="px-4 py-2 bg-white/90 rounded-full text-[#654321] font-semibold text-sm shadow-lg"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ scale: 1.1, y: -3 }}
                  >
                    {cert}
                  </motion.span>
                ))}
              </div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" className="bg-white text-[#E67E22] hover:bg-white/90 shadow-xl hover:shadow-2xl transition-all font-bold">
                  Consulter le catalogue complet
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
