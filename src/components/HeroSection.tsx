import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play } from "lucide-react";
import heroImage from "@/assets/hero-auto-detailing.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Professional auto detailing service"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Stats Badge */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Badge variant="premium" className="px-4 py-2">
            <span className="text-primary">✓</span> 200+ Auto Detailers
          </Badge>
          <Badge variant="premium" className="px-4 py-2">
            <span className="text-primary">✓</span> Adding $75K+ Monthly
          </Badge>
        </div>
        
        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
          <span className="text-foreground">The Performance-Based</span><br/>
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Client Acquisition Platform
          </span><br/>
          <span className="text-foreground">Built for Auto Detailers</span>
        </h1>
        
        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
          Stop wasting money on leads that don't convert. DetailMax delivers exclusive, 
          high-value clients directly to qualified auto detailing professionals across the U.S.
        </p>
        
        {/* Key Stats */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12">
          <div className="flex items-center gap-2 text-primary">
            <span className="text-2xl">🚗</span>
            <span className="font-semibold">200+ Active Partners</span>
          </div>
          <div className="flex items-center gap-2 text-primary">
            <span className="text-2xl">💰</span>
            <span className="font-semibold">$75K+ Avg Monthly Increase</span>
          </div>
          <div className="flex items-center gap-2 text-primary">
            <span className="text-2xl">✅</span>
            <span className="font-semibold">Only Pay on Closed Jobs</span>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button variant="primary" size="lg" className="px-8 py-4 text-lg shadow-glow">
            Book Strategy Call
            <span className="ml-2">→</span>
          </Button>
          <Button variant="secondary" size="lg" className="px-8 py-4 text-lg">
            <Play className="w-5 h-5 mr-2" />
            See How It Works
          </Button>
        </div>
        
        {/* Social Proof */}
        <p className="text-muted-foreground text-sm">
          Join the fastest-growing auto detailing companies in America
        </p>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;