import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Search } from "lucide-react";
import heroImage from "@/assets/hero-auto-detailing.jpg";
const HeroSection = () => {
  return <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-dark">
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Stats Badge */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          
          
        </div>
        
        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 py-0">
          <br />
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent text-5xl py-[10px]">Auto Detailers</span><br />
          <span className="text-white py-[10px] text-6xl">Do You Want More Customers?</span>
        </h1>
        
        {/* Subheadline */}
        <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed">How our proven system can get you 10, 20, or even 30 new high-paying customers every month for your detailing business. The best part is… you only pay
when you get results.</p>
        
        {/* Key Stats */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12">
          <div className="flex items-center gap-2 text-primary">
            <span className="text-2xl">🚗</span>
            <span className="font-semibold">20+ Total Clients</span>
          </div>
          <div className="flex items-center gap-2 text-primary">
            <Search className="w-5 h-5" />
            <span className="font-semibold">Google Reviews: 4.7 ⭐ (16 Reviews)</span>
          </div>
          <div className="flex items-center gap-2 text-primary">
            <span className="text-xl">⭐</span>
            <span className="font-semibold">Trustpilot: 4.5 ⭐ (11 Reviews)</span>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button variant="primary" size="lg" className="px-8 py-4 text-lg shadow-glow" onClick={() => document.getElementById('schedule')?.scrollIntoView({
          behavior: 'smooth'
        })}>
            Book Strategy Call
            <span className="ml-2">→</span>
          </Button>
          <Button variant="secondary" size="lg" className="px-8 py-4 text-lg" onClick={() => document.getElementById('vsl')?.scrollIntoView({
          behavior: 'smooth'
        })}>
            <Play className="w-5 h-5 mr-2" />
            See How It Works
          </Button>
        </div>
        
        {/* Social Proof */}
        <p className="text-white/60 text-sm">
          Join the fastest-growing auto detailing companies in America
        </p>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>;
};
export default HeroSection;