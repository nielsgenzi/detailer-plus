import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import VslSection from "@/components/VslSection";
import ResultsSection from "@/components/ResultsSection";
import StrategySection from "@/components/StrategySection";
import ScheduleSection from "@/components/ScheduleSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <VslSection />
      <ResultsSection />
      <StrategySection />
      <ScheduleSection />
      <Footer />
    </div>
  );
};

export default Index;
