"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";

const testimonials = [
  {
    id: 1,
    name: "Amadou Diallo",
    role: "Développeur Full Stack",
    company: "TechSahel Solutions",
    content: "Grâce à Sahel Tech Hub, j'ai pu développer mes compétences et décrocher mon premier emploi dans la tech. Les formations sont de qualité et les formateurs sont passionnés.",
    avatar: "AD",
  },
  {
    id: 2,
    name: "Fatoumata Sy",
    role: "Fondatrice",
    company: "AgriTech Mali",
    content: "L'incubateur m'a permis de transformer mon idée en entreprise viable. Le mentorat et les ressources fournis ont été déterminants pour notre réussite.",
    avatar: "FS",
  },
  {
    id: 3,
    name: "Ibrahim Koné",
    role: "Chef de Projet",
    company: "Digital Burkina",
    content: "Un écosystème dynamique où l'innovation rencontre la tradition. Sahel Tech Hub est le catalyseur dont l'Afrique de l'Ouest avait besoin.",
    avatar: "IK",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-br from-[#E8F5E9] via-[#F1F8E9] to-[#E8F5E9]">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 gradient-text">
            Ils Nous Font Confiance
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez les témoignages de ceux qui ont transformé leur parcours avec Sahel Tech Hub
          </p>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="scale-in" className="relative">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl">
              <Quote className="w-12 h-12 text-sahel-yellow mb-6" />
              
              <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                "{current.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-sahel-yellow to-sahel-green flex items-center justify-center text-white font-bold text-xl">
                  {current.avatar}
                </div>
                <div>
                  <div className="font-bold text-lg">{current.name}</div>
                  <div className="text-gray-600">{current.role}</div>
                  <div className="text-sm text-sahel-yellow font-medium">
                    {current.company}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="p-3 rounded-full bg-white shadow-lg hover:bg-sahel-yellow hover:text-white transition-all duration-300 card-depth"
                aria-label="Témoignage précédent"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-sahel-yellow w-8"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Aller au témoignage ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-3 rounded-full bg-white shadow-lg hover:bg-sahel-yellow hover:text-white transition-all duration-300 card-depth"
                aria-label="Témoignage suivant"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
