"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, Landmark, Heart, ShoppingBag, CheckCircle2, 
  ArrowRight, Sparkles, TrendingUp, Zap, Package, Shield
} from "lucide-react";
import { motion } from "framer-motion";

const solutions = [
  {
    id: "commerce",
    icon: Building2,
    title: "Entreprises Commerciales",
    subtitle: "E-Commerce + ERP + CRM",
    description: "Transformez votre commerce avec une solution digitale clé en main intégrant site e-commerce, gestion des stocks, finances et relation client.",
    features: [
      "Site web e-commerce professionnel et responsive",
      "ERP gestion complète (stocks, finances, RH)",
      "CRM relation client optimale avec automation",
      "Tableaux de bord analytics en temps réel",
      "Formation équipe et support technique inclus"
    ],
    gradient: "from-[#E67E22] to-[#D87C4A]",
    stats: [
      { value: "150+", label: "Commerces digitalisés" },
      { value: "2M+", label: "Transactions/mois" },
      { value: "45%", label: "Croissance moyenne" }
    ]
  },
  {
    id: "admin",
    icon: Landmark,
    title: "Administrations Publiques",
    subtitle: "Digitalisation Services Publics",
    description: "Modernisez vos services avec des solutions sécurisées pour améliorer l'expérience citoyenne et optimiser les processus administratifs.",
    features: [
      "Portail administratif sécurisé et accessible 24/7",
      "Gestion documentaire digitale et traçable",
      "Workflow automatisé et processus optimisés",
      "Reporting en temps réel et analytics avancés",
      "Support technique dédié et formation continue"
    ],
    gradient: "from-[#2C5F2D] to-[#4A7C59]",
    stats: [
      { value: "30+", label: "Institutions" },
      { value: "100K+", label: "Citoyens servis" },
      { value: "70%", label: "Temps économisé" }
    ]
  },
  {
    id: "ong",
    icon: Heart,
    title: "ONG & Associations",
    subtitle: "Gestion & Communication",
    description: "Amplifiez votre impact avec des outils pour gérer projets, donations, bénéficiaires et communication multicanal de manière efficace.",
    features: [
      "Site vitrine professionnel et attractif",
      "Gestion projets & bénéficiaires centralisée",
      "Donations en ligne sécurisées (Mobile Money, Carte)",
      "Reporting transparent pour les donateurs",
      "Marketing digital & communication multicanal"
    ],
    gradient: "from-[#F39C12] to-[#E67E22]",
    stats: [
      { value: "50+", label: "ONG accompagnées" },
      { value: "5M+", label: "Donations gérées" },
      { value: "200%", label: "Impact amplifié" }
    ]
  },
  {
    id: "retail",
    icon: ShoppingBag,
    title: "Retail & Distribution",
    subtitle: "Marketplace & Logistique",
    description: "Créez votre marketplace multi-vendeurs avec gestion logistique intégrée, paiements sécurisés, fidélité et analytics avancés.",
    features: [
      "Marketplace multi-vendeurs performante",
      "Gestion logistique & livraison intégrée",
      "Paiement mobile & carte sécurisés",
      "Programme de fidélité automatisé",
      "Business Intelligence & prédictions IA"
    ],
    gradient: "from-[#D87C4A] to-[#B85A2F]",
    stats: [
      { value: "500K+", label: "Transactions/mois" },
      { value: "1000+", label: "Vendeurs actifs" },
      { value: "4.8/5", label: "Satisfaction client" }
    ]
  },
];

export default function SolutionsModern() {
  return (
    <section id="solutions" className="py-24 relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-[10%] w-72 h-72 bg-[#E67E22]/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-40 left-[15%] w-96 h-96 bg-[#2C5F2D]/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-[50%] right-[5%] w-64 h-64 bg-[#F39C12]/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-6"
          >
            <Badge className="badge-sahel text-base px-6 py-2">
              <Package className="w-5 h-5 mr-2" />
              Solutions IT Complètes
            </Badge>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-[#654321] mb-6 leading-tight">
            Packages <span className="text-gradient-sahel">Clé en Main</span>
          </h2>
          <p className="text-xl md:text-2xl text-[#8B4513] max-w-4xl mx-auto leading-relaxed">
            Solutions complètes et sur-mesure adaptées à votre secteur d'activité
          </p>
        </motion.div>

        {/* Solutions - Style varié */}
        <div className="space-y-32">
          {solutions.map((solution, index) => {
            const isReversed = index % 2 !== 0;
            
            return (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="relative"
              >
                <div className={`grid lg:grid-cols-12 gap-12 items-center ${isReversed ? '' : ''}`}>
                  {/* Content Side */}
                  <motion.div
                    className={`lg:col-span-6 ${isReversed ? 'lg:col-start-7' : ''} space-y-8`}
                    initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    {/* Icon & Badge */}
                    <div className="flex items-center gap-4">
                      <motion.div
                        className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center shadow-2xl`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <solution.icon className="w-10 h-10 text-white" />
                      </motion.div>
                      <div>
                        <Badge className={`bg-gradient-to-r ${solution.gradient} text-white border-0 text-sm px-4 py-2 shadow-lg`}>
                          <Shield className="w-4 h-4 mr-1" />
                          Tout Inclus, Sans Surprise
                        </Badge>
                      </div>
                    </div>

                    {/* Title & Subtitle */}
                    <div className="space-y-3">
                      <h3 className="text-4xl md:text-5xl font-bold text-[#654321] leading-tight">
                        {solution.title}
                      </h3>
                      <p className="text-2xl text-[#E67E22] font-semibold">
                        {solution.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-lg md:text-xl text-[#8B4513] leading-relaxed">
                      {solution.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-4">
                      {solution.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-start gap-4 group"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + idx * 0.1 }}
                        >
                          <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${solution.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg`}>
                            <CheckCircle2 className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-[#654321] font-medium text-lg leading-relaxed">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <motion.div
                      className="pt-4"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button 
                        size="lg"
                        className={`bg-gradient-to-r ${solution.gradient} text-white border-0 shadow-xl hover:shadow-2xl group text-lg px-8 py-6`}
                      >
                        Demander une Démo
                        <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                      </Button>
                    </motion.div>
                  </motion.div>

                  {/* Animation/Visual Side */}
                  <motion.div
                    className={`lg:col-span-6 ${isReversed ? 'lg:col-start-1 lg:row-start-1' : ''}`}
                    initial={{ opacity: 0, x: isReversed ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    <div className="relative">
                      {/* Glow Background */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-20 blur-3xl rounded-3xl scale-110`} />
                      
                      {/* Main Visual Card */}
                      <motion.div
                        className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/50"
                        whileHover={{ scale: 1.02, y: -5 }}
                        transition={{ type: "spring", stiffness: 200 }}
                      >
                        {/* Stats Grid */}
                        <div className="grid grid-cols-3 gap-4 mb-8">
                          {solution.stats.map((stat, idx) => (
                            <motion.div
                              key={idx}
                              className={`bg-gradient-to-br ${solution.gradient} rounded-2xl p-6 text-white text-center shadow-xl`}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.4 + idx * 0.1 }}
                              whileHover={{ scale: 1.05, y: -5 }}
                            >
                              <motion.p 
                                className="text-3xl font-bold mb-2"
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                              >
                                {stat.value}
                              </motion.p>
                              <p className="text-sm opacity-90 leading-tight">{stat.label}</p>
                            </motion.div>
                          ))}
                        </div>

                        {/* Animated Elements */}
                        <div className="relative h-64 rounded-2xl bg-gradient-to-br from-[#FAFAF8] to-[#F5E6D3] overflow-hidden">
                          {/* Floating Icons Animation */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            {[0, 1, 2, 3, 4].map((i) => (
                              <motion.div
                                key={i}
                                className={`absolute w-16 h-16 rounded-2xl bg-gradient-to-br ${solution.gradient} opacity-20`}
                                animate={{
                                  y: [0, -30, 0],
                                  x: [0, Math.sin(i) * 20, 0],
                                  rotate: [0, 180, 360],
                                }}
                                transition={{
                                  duration: 5 + i,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                  delay: i * 0.5
                                }}
                                style={{
                                  left: `${20 + i * 15}%`,
                                  top: `${30 + (i % 2) * 20}%`
                                }}
                              />
                            ))}
                          </div>

                          {/* Center Icon */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <motion.div
                              className={`w-32 h-32 rounded-3xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center shadow-2xl`}
                              animate={{
                                scale: [1, 1.1, 1],
                                rotate: [0, 5, 0, -5, 0]
                              }}
                              transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                            >
                              <solution.icon className="w-16 h-16 text-white" />
                            </motion.div>
                          </div>
                        </div>

                        {/* Bottom Badges */}
                        <div className="flex flex-wrap gap-3 mt-8 justify-center">
                          {["Support 24/7", "Formation Incluse", "Garantie 100%"].map((badge, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.6 + idx * 0.1 }}
                            >
                              <Badge className="bg-[#654321] text-white px-4 py-2 text-sm">
                                <Zap className="w-4 h-4 mr-2" />
                                {badge}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>

                      {/* Floating Stats Card */}
                      <motion.div
                        className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-2xl p-6 border-4 border-white"
                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7 }}
                        whileHover={{ scale: 1.05, rotate: 2 }}
                      >
                        <div className="flex items-center gap-4">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                          >
                            <TrendingUp className={`w-10 h-10 text-[#E67E22]`} />
                          </motion.div>
                          <div>
                            <p className="text-3xl font-bold text-[#654321]">98%</p>
                            <p className="text-sm text-[#8B4513] font-medium">Satisfaction Client</p>
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

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32"
        >
          <div className="relative bg-gradient-to-br from-[#E67E22] via-[#D87C4A] to-[#B85A2F] rounded-3xl p-12 md:p-16 shadow-2xl overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            
            <div className="relative z-10 text-center">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                className="inline-block mb-6"
              >
                <Sparkles className="w-16 h-16 text-white mx-auto" />
              </motion.div>
              
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Prêt à Transformer Votre Business ?
              </h3>
              <p className="text-xl md:text-2xl text-white/95 mb-10 max-w-3xl mx-auto leading-relaxed">
                Discutons de votre projet et créons ensemble la solution parfaite pour propulser votre entreprise vers le succès digital
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-white text-[#E67E22] hover:bg-white/90 text-lg px-10 py-7 shadow-xl hover:shadow-2xl group"
                >
                  Demander une Démo Gratuite
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg px-10 py-7"
                >
                  Voir Nos Réalisations
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
