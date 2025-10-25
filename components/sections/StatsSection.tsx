import { StatsCounter } from "@/components/ui/stats-counter";
import { Users, Briefcase, GraduationCap, Rocket } from "lucide-react";

export default function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#FFF9E6] via-[#FFF5EB] to-[#FFE4CC] wave-divider">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 gradient-text">
            Notre Impact en Chiffres
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez les résultats concrets de notre engagement pour l'écosystème technologique du Sahel
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <StatsCounter
            end={500}
            suffix="+"
            label="Développeurs Formés"
            icon={<GraduationCap />}
          />
          
          <StatsCounter
            end={50}
            suffix="+"
            label="Startups Accompagnées"
            icon={<Rocket />}
          />
          
          <StatsCounter
            end={100}
            suffix="+"
            label="Projets Réalisés"
            icon={<Briefcase />}
          />
          
          <StatsCounter
            end={1000}
            suffix="+"
            label="Membres Communauté"
            icon={<Users />}
          />
        </div>
      </div>
    </section>
  );
}
