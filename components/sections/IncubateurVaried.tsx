"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Lightbulb, Users, Rocket, Target, CheckCircle2, 
  ArrowRight, Sparkles, Briefcase, Monitor, Coffee, Wifi
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    icon: Monitor,
    title: "Open Space Équipé",
    description: "Espaces de travail modernes avec équipements haute performance",
    color: "from-[#E67E22] to-[#D87C4A]"
  },
  {
    icon: Users,
    title: "Mentors Experts",
    description: "Accompagnement par des professionnels expérimentés",
    color: "from-[#2C5F2D] to-[#4A7C59]"
  },
  {
    icon: Briefcase,
    title: "Chefs de Projet",
    description: "Gestion professionnelle de bout en bout",
    color: "from-[#F39C12] to-[#E67E22]"
  },
  {
    icon: Target,
    title: "Architectes Solutions",
    description: "Conception technique et stratégique",
    color: "from-[#D87C4A] to-[#B85A2F]"
  }
];

const services = [
  "Accompagnement de l'idée à la réalisation",
  "Mentorat technique et business",
  "Formation continue personnalisée",
  "Accès aux ressources & équipements",
  "Mise en réseau avec investisseurs",
  "Support juridique et administratif"
];

const amenities = [
  { icon: Wifi, label: "Internet Haut Débit" },
  { icon: Coffee, label: "Espace Détente" },
  { icon: Monitor, label: "Salles de Réunion" },
  { icon: Briefcase, label: "Domiciliation" }
];

export default function IncubateurVaried() {
  return (
    <section id="incubateur" className="py-24 bg-gradient-to-br from-[#FFF3E0] via-[#FFE0B2] to-[#FFCC80] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-[5%] w-[500px] h-[500px] bg-[#F39C12]/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-40 left-[10%] w-[400px] h-[400px] bg-[#2C5F2D]/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <Badge className="badge-sahel mb-6">
            <Lightbulb className="w-4 h-4 mr-1" />
            Incubateur & Accélérateur
          </Badge>
          
          <h2 className="text-4xl md:text-6xl font-bold text-[#654321] mb-6">
            Transformez Votre <span className="text-gradient-sahel">Idée en Réalité</span>
          </h2>
          <p className="text-xl text-[#8B4513] max-w-3xl mx-auto">
            Un écosystème complet pour accompagner les entrepreneurs et innovateurs du Sahel
          </p>
        </motion.div>

        {/* Main Content - Alternating Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#E67E22] to-[#D87C4A] flex items-center justify-center shadow-xl">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <Badge className="bg-gradient-to-r from-[#E67E22] to-[#D87C4A] text-white border-0 text-lg px-4 py-1">
                  Accompagnement Total
                </Badge>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-[#654321] mb-4">
                De l'Idée à la Réussite
              </h3>
              <p className="text-xl text-[#E67E22] font-semibold mb-6">
                Votre projet mérite le meilleur accompagnement
              </p>
            </div>

            <p className="text-lg text-[#8B4513] leading-relaxed">
              Notre incubateur offre bien plus qu'un simple espace de travail. 
              C'est un écosystème complet où votre projet prend vie grâce à 
              l'expertise de nos mentors, architectes et chefs de projet.
            </p>

            {/* Services List */}
            <div className="space-y-3">
              <p className="font-bold text-[#654321] text-lg mb-4">Ce que nous offrons :</p>
              {services.map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  className="flex items-start gap-3 group"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#E67E22] mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-[#654321]">{service}</span>
                </motion.div>
              ))}
            </div>

            {/* Amenities */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {amenities.map((amenity, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-md"
                >
                  <amenity.icon className="w-6 h-6 text-[#E67E22]" />
                  <span className="text-sm font-medium text-[#654321]">{amenity.label}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex gap-4 pt-4">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-[#E67E22] to-[#D87C4A] text-white hover:shadow-xl group flex-1"
              >
                Rejoindre l'Incubateur
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>

          {/* Right - Image with cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070"
                alt="Incubateur workspace"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#E67E22]/60 via-transparent to-transparent" />
              
              {/* Stats card overlay */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl"
              >
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-[#654321]">50+</p>
                    <p className="text-sm text-[#8B4513]">Projets</p>
                  </div>
                  <div className="text-center border-x border-[#E8DED0]">
                    <p className="text-3xl font-bold text-[#654321]">30+</p>
                    <p className="text-sm text-[#8B4513]">Startups</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-[#654321]">85%</p>
                    <p className="text-sm text-[#8B4513]">Succès</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Floating success card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="absolute -top-6 -right-6 bg-gradient-to-br from-[#2C5F2D] to-[#4A7C59] rounded-2xl p-6 shadow-2xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">12</p>
                  <p className="text-sm text-white/90">Startups financées</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-[#654321] text-center mb-12">
            Nos Atouts Clés
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-[#654321] mb-3 group-hover:text-[#E67E22] transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-[#8B4513] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-[#F39C12] to-[#E67E22] rounded-3xl p-12 text-center shadow-2xl relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-2xl" />
            
            <div className="relative z-10">
              <Lightbulb className="w-16 h-16 text-white mx-auto mb-6" />
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Vous Avez Une Idée Innovante ?
              </h3>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Rejoignez notre incubateur et transformez votre vision en entreprise à succès
              </p>
              <div className="flex gap-4 justify-center">
                <Button size="lg" className="bg-white text-[#E67E22] hover:bg-white/90 text-lg px-8">
                  Postuler Maintenant
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 text-lg px-8"
                >
                  Visiter les Locaux
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
