"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Lightbulb, Users, Laptop, Coffee, Target, Rocket, 
  BookOpen, MessageSquare, TrendingUp 
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Lightbulb,
    title: "Idéation & Brainstorming",
    description: "Sessions collaboratives pour transformer vos idées en projets concrets"
  },
  {
    icon: Users,
    title: "Mentors Experts",
    description: "Accompagnement par des professionnels expérimentés du secteur IT"
  },
  {
    icon: Laptop,
    title: "Open Space Équipé",
    description: "Espace de travail moderne avec infrastructure tech complète"
  },
  {
    icon: Coffee,
    title: "Environnement Créatif",
    description: "Ambiance propice à l'innovation et au développement"
  },
  {
    icon: BookOpen,
    title: "Ressources Pédagogiques",
    description: "Accès à des formations, documentation et outils professionnels"
  },
  {
    icon: MessageSquare,
    title: "Networking",
    description: "Communauté active d'entrepreneurs et développeurs"
  },
];

const steps = [
  {
    number: "01",
    title: "Soumettez votre projet",
    description: "Présentez votre idée ou projet à notre comité d'évaluation"
  },
  {
    number: "02",
    title: "Évaluation & Sélection",
    description: "Notre équipe analyse la viabilité et le potentiel de votre projet"
  },
  {
    number: "03",
    title: "Intégration",
    description: "Accès à l'espace, ressources et accompagnement personnalisé"
  },
  {
    number: "04",
    title: "Développement",
    description: "Travaillez sur votre projet avec le soutien de mentors experts"
  },
  {
    number: "05",
    title: "Lancement",
    description: "Mise sur le marché avec support marketing et technique"
  },
];

export default function Incubateur() {
  return (
    <section id="incubateur" className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4" variant="outline">Incubateur</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Donnez Vie à Vos <span className="text-primary">Idées</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Un écosystème complet pour transformer vos concepts innovants en projets réussis
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <div>
                <Target className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-3xl font-bold mb-4">Notre Mission</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Nous croyons au potentiel entrepreneurial de l&apos;Afrique de l&apos;Ouest. Notre incubateur 
                  offre un environnement propice à l&apos;innovation, combinant infrastructure moderne, 
                  expertise technique et mentorat business pour propulser vos projets tech.
                </p>
              </div>

              <Card className="bg-gradient-to-br from-primary/10 to-blue-500/10 border-primary/20">
                <CardContent className="p-6">
                  <Rocket className="h-8 w-8 text-primary mb-3" />
                  <h4 className="text-xl font-bold mb-2">Programme d&apos;Accélération</h4>
                  <p className="text-muted-foreground mb-4">
                    Programme intensif de 3 à 6 mois avec accompagnement personnalisé
                  </p>
                  <ul className="space-y-2">
                    {["Mentorat hebdomadaire", "Financement seed", "Accès réseau investisseurs"].map((item) => (
                      <li key={item} className="flex items-center text-sm">
                        <TrendingUp className="h-4 w-4 text-primary mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="h-full hover:shadow-lg transition-all hover:border-primary/50">
                  <CardContent className="p-6 space-y-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-bold">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-3xl font-bold text-center mb-12">Processus d&apos;Intégration</h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <Card className="h-full hover:shadow-xl transition-all border-2 hover:border-primary/50">
                  <CardContent className="p-6 space-y-3">
                    <div className="text-5xl font-bold text-primary/20">{step.number}</div>
                    <h4 className="font-bold text-lg">{step.title}</h4>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-primary/30" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary to-blue-600 text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Prêt à Rejoindre l&apos;Incubateur ?</h3>
              <p className="mb-6 opacity-90">
                Soumettez votre projet dès aujourd&apos;hui et bénéficiez de notre écosystème complet
              </p>
              <Button size="lg" variant="secondary" className="font-semibold">
                Candidater Maintenant
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
