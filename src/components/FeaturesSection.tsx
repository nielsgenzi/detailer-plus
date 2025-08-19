import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Users, 
  Zap, 
  BarChart3, 
  HeartHandshake, 
  Target 
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: MapPin,
      title: "Exclusive Territory Rights",
      description: "Own your market. Never compete with other DetailMax partners in your service area."
    },
    {
      icon: Users,
      title: "Pre-Qualified Leads Only",
      description: "Every lead is vetted for budget, timeline, and decision-making authority before reaching you."
    },
    {
      icon: Zap,
      title: "Real-Time Lead Delivery",
      description: "Connect with prospects within minutes, not hours. Speed wins in competitive markets."
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Track conversion rates, ROI, and lead quality with detailed reporting and insights."
    },
    {
      icon: HeartHandshake,
      title: "Dedicated Success Manager",
      description: "Get personal support from growth experts who understand the auto detailing industry."
    },
    {
      icon: Target,
      title: "Proven Lead Generation",
      description: "Multi-channel acquisition including digital marketing, referrals, and industry partnerships."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Built for Scale, Optimized for Performance
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Unlike traditional lead generation services, DetailMax operates as a comprehensive{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              client acquisition platform
            </span>{" "}
            designed specifically for auto detailing professionals.
          </h2>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="group hover:shadow-glow transition-all duration-300 bg-gradient-card border-border/50">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;