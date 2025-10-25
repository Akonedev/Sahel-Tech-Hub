"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, Landmark, Heart, ShoppingBag, CheckCircle2, 
  ArrowRight, Sparkles, Users, TrendingUp
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const solutions = [
  {
    id: "commerce",
    icon: Building2,
    title: "Entreprises Commerciales",
    subtitle: "E-Commerce + ERP + CRM",
    description: "Transformez votre commerce avec une solution digitale clé en main intégrant site e-commerce, gestion des stocks, finances et relation client.",
    features: [
      "Site web e-commerce professionnel",
      "ERP gestion complète (stocks, finances)",
      "CRM relation client optimale",
      "Tableaux de bord analytics",
      "Formation équipe incluse"
    ],
    gradient: "from-[#E67E22] to-[#D87C4A]",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070",
    stats: { value: "150+", label: "Commerces" }
  },
  {
    id: "admin",
    icon: Landmark,
    title: "Administrations",
    subtitle: "Digitalisation Services Publics",
    description: "Modernisez vos services avec des solutions sécurisées pour améliorer l'expérience citoyenne et optimiser les processus.",
    features: [
      "Portail administratif sécurisé",
      "Gestion documentaire digitale",
      "Workflow automatisé et traçable",
      "Reporting en temps réel",
      "Support technique 24/7"
    ],
    gradient: "from-[#2C5F2D] to-[#4A7C59]",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
    stats: { value: "30+", label: "Institutions" }
  },
  {
    id: "ong",
    icon: Heart,
    title: "ONG & Associations",
    subtitle: "Gestion & Communication",
    description: "Amplifiez votre impact avec des outils pour gérer projets, donations, bénéficiaires et communication multicanal.",
    features: [
      "Site vitrine professionnel",
      "Gestion projets & bénéficiaires",
      "Donations en ligne sécurisées",
      "Reporting transparent",
      "Marketing & communication"
    ],
    gradient: "from-[#F39C12] to-[#E67E22]",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=2073",
    stats: { value: "50+", label: "ONG" }
  },
  {
    id: "retail",
    icon: ShoppingBag,
    title: "Retail & Distribution",
    subtitle: "Marketplace & Logistique",
    description: "Créez votre marketplace multi-vendeurs avec gestion logistique, paiements, fidélité et analytics avancés.",
    features: [
      "Marketplace multi-vendeurs",
      "Gestion logistique intégrée",
      "Paiement mobile & carte",
      "Fidélité automatisée",
      "Business Intelligence"
    ],
    gradient: "from-[#D87C4A] to-[#B85A2F]",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070",
    stats: { value: "500K+", label: "Transactions/mois" }
  },
];

export default function SolutionsVaried() {
  return (
    <section id="solutions" className="py-24 bg-gradient-to-br from-[#FFF9E6] via-[#FFF5EB] to-[#FFE4CC] relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-[10%] w-64 h-64 bg-[#E67E22]/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-40 left-[15%] w-80 h-80 bg-[#2C5F2D]/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
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
            <Sparkles className="w-4 h-4 mr-1" />
            Solutions IT Complètes
          </Badge>
          
          <h2 className="text-4xl md:text-6xl font-bold text-[#654321] mb-6">
            Packages <span className="text-gradient-sahel">Clé en Main</span>
          </h2>
          <p className="text-xl text-[#8B4513] max-w-3xl mx-auto">
            Solutions complètes adaptées à votre secteur : Commerce, Administration, ONG, Retail...
          </p>
        </motion.div>

        {/* Solutions alternées */}
        <div className="space-y-24">
          {solutions.map((solution, index) => {
            const isReversed = index % 2 !== 0;
            
            return (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${isReversed ? 'lg:grid-flow-dense' : ''}`}>
                  {/* Content */}
                  <div className={isReversed ? 'lg:col-start-2' : ''}>
                    <motion.div
                      initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="space-y-6"
                    >
                      {/* Icon & Badge */}
                      <div className="flex items-center gap-4">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center shadow-xl`}>
                          <solution.icon className="w-8 h-8 text-white" />
                        </div>
                        <Badge className={`bg-gradient-to-r ${solution.gradient} text-white border-0`}>
                          Tout Inclus
                        </Badge>
                      </div>

                      {/* Title */}
                      <div>
                        <h3 className="text-3xl md:text-4xl font-bold text-[#654321] mb-2">
                          {solution.title}
                        </h3>
                        <p className="text-xl font-semibold text-[#E67E22]">
                          {solution.subtitle}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-lg text-[#8B4513] leading-relaxed">
                        {solution.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-3">
                        {solution.features.map((feature, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + idx * 0.1 }}
                            className="flex items-start gap-3 group"
                          >
                            <CheckCircle2 className="w-5 h-5 text-[#E67E22] mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                            <span className="text-[#654321]">{feature}</span>
                          </motion.div>
                        ))}
                      </div>

                      {/* Stats */}
                      <div className="flex items-center gap-4 pt-4">
                        <div className={`bg-gradient-to-br ${solution.gradient} rounded-xl p-4 text-white`}>
                          <p className="text-3xl font-bold">{solution.stats.value}</p>
                          <p className="text-sm opacity-90">{solution.stats.label}</p>
                        </div>
                        <Button 
                          size="lg"
                          className={`bg-gradient-to-r ${solution.gradient} text-white hover:shadow-xl group`}
                        >
                          Découvrir
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </motion.div>
                  </div>

                  {/* Image */}
                  <div className={isReversed ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <motion.div
                      initial={{ opacity: 0, x: isReversed ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      className="relative"
                    >
                      {/* Glow effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-20 blur-3xl rounded-3xl`} />
                      
                      {/* Image container */}
                      <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                        <Image
                          src={solution.image}
                          alt={solution.title}
                          fill
                          className="object-cover"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t ${solution.gradient} opacity-20`} />
                      </div>

                      {/* Floating card */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-2xl p-6"
                      >
                        <div className="flex items-center gap-3">
                          <TrendingUp className="w-8 h-8 text-[#E67E22]" />
                          <div>
                            <p className="text-2xl font-bold text-[#654321]">98%</p>
                            <p className="text-sm text-[#8B4513]">Satisfaction</p>
                          </div>
                        </div>
                      </motion.div>
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
          className="mt-24 text-center"
        >
          <div className="bg-gradient-to-br from-[#E67E22] to-[#D87C4A] rounded-3xl p-12 shadow-2xl">
            <Users className="w-16 h-16 text-white mx-auto mb-6" />
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Prêt à Transformer Votre Business ?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Discutons de votre projet et créons ensemble la solution parfaite pour votre entreprise
            </p>
            <Button size="lg" className="bg-white text-[#E67E22] hover:bg-white/90 text-lg px-8">
              Demander une Démo Gratuite
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
