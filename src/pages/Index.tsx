import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import CtaSection from "@/components/CtaSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <CtaSection />
    </div>
  );
};

export default Index;
