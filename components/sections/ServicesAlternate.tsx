"use client";

import { Code2, Database, Brain, Calendar, Users, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Code2,
    title: "Développement Web & Mobile",
    description: "Applications web et mobiles modernes utilisant les technologies de pointe.",
  },
  {
    icon: Database,
    title: "Solutions Cloud",
    description: "Infrastructure cloud sécurisée et scalable pour vos projets.",
  },
  {
    icon: Brain,
    title: "Intelligence Artificielle",
    description: "Intégration d'IA et machine learning dans vos solutions.",
  },
  {
    icon: Calendar,
    title: "Consulting IT",
    description: "Accompagnement stratégique pour votre transformation digitale.",
  },
  {
    icon: Users,
    title: "Formation",
    description: "Formations professionnelles adaptées à vos besoins.",
  },
  {
    icon: Award,
    title: "Support & Maintenance",
    description: "Support technique 24/7 et maintenance de vos applications.",
  },
];

export default function ServicesAlternate() {
  return (
    <section className="py-20" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Nos Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Des solutions technologiques complètes pour accélérer votre transformation digitale
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-sahel-yellow/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-sahel-yellow" />
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
