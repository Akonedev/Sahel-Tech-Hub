import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSahelAnimated from "@/components/sections/HeroSahelAnimated";
import ServicesAlternate from "@/components/sections/ServicesAlternate";
import SolutionsModern from "@/components/sections/SolutionsModern";
import FormationsVaried from "@/components/sections/FormationsVaried";
import IncubateurVaried from "@/components/sections/IncubateurVaried";
import StatsSection from "@/components/sections/StatsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import Contact from "@/components/sections/Contact";
import { BackToTop } from "@/components/ui/back-to-top";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="overflow-hidden">
        {/* Hero: Gradient crème → sable clair */}
        <div className="bg-gradient-to-br from-[#FFF9E6] via-[#FFF5EB] to-[#FFE4CC]">
          <HeroSahelAnimated />
        </div>
        
        {/* Services: Fond blanc cassé */}
        <div className="bg-[#FAFAF8]">
          <ServicesAlternate />
        </div>
        
        {/* Solutions: Gradient jaune-orangé très subtil */}
        <div className="bg-gradient-to-br from-[#FFF9E6] via-[#FFF5EB] to-[#FFE4CC]">
          <SolutionsModern />
        </div>
        
        {/* Stats: Impact en chiffres */}
        <StatsSection />
        
        {/* Formations: Fond vert sahel très clair */}
        <div className="bg-gradient-to-br from-[#E8F5E9] via-[#F1F8E9] to-[#E8F5E9]">
          <FormationsVaried />
        </div>
        
        {/* Incubateur: Gradient terre-sable */}
        <div className="bg-gradient-to-br from-[#FFF3E0] via-[#FFE0B2] to-[#FFECB3]">
          <IncubateurVaried />
        </div>
        
        {/* Témoignages */}
        <TestimonialsSection />
        
        {/* Contact: Fond blanc avec pattern subtil */}
        <div className="bg-white pattern-sahel">
          <Contact />
        </div>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
