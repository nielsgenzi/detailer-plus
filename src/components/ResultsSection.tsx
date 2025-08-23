import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  TrendingUp, 
  DollarSign, 
  MapPin,
  Play,
  Star
} from "lucide-react";

const ResultsSection = () => {
  const stats = [
    {
      icon: Users,
      value: "127+",
      label: "Active Partners"
    },
    {
      icon: TrendingUp,
      value: "89%",
      label: "Average Close Rate"
    },
    {
      icon: DollarSign,
      value: "$50K",
      label: "Average Monthly Increase"
    },
    {
      icon: MapPin,
      value: "48",
      label: "U.S. States Served"
    }
  ];

  const testimonials = [
    {
      name: "Mike Rodriguez",
      business: "Elite Auto Detailing",
      result: "$87K monthly increase",
      quote: "DetailMax transformed our business. We went from struggling to book clients to having a 3-week waiting list.",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      business: "Pristine Car Care",
      result: "$63K monthly increase",
      quote: "The quality of leads is incredible. Every client that comes through DetailMax is ready to invest in premium services.",
      rating: 5
    }
  ];

  return (
    <section id="results" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Proven Results
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Results From Detailers
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {" "}Just Like You!
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            See how auto detailing professionals across America are scaling their businesses 
            with DetailMax's performance-based platform.
          </p>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="text-center bg-background border-border/50">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Video Testimonials */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-background border-border/50 overflow-hidden">
            <CardContent className="p-0">
              <div className="relative aspect-video bg-muted flex items-center justify-center cursor-pointer group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"></div>
                <div className="relative text-center">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-6 h-6 text-primary ml-1" />
                  </div>
                  <p className="text-white font-semibold">
                    Watch Success Story
                  </p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-foreground mb-2">Mike Rodriguez</h3>
                <p className="text-muted-foreground text-sm mb-3">Elite Auto Detailing</p>
                <Badge variant="secondary" className="mb-3">$87K Monthly Increase</Badge>
                <p className="text-muted-foreground text-sm">
                  "DetailMax transformed our business completely..."
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-background border-border/50 overflow-hidden">
            <CardContent className="p-0">
              <div className="relative aspect-video bg-muted flex items-center justify-center cursor-pointer group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"></div>
                <div className="relative text-center">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-6 h-6 text-primary ml-1" />
                  </div>
                  <p className="text-white font-semibold">
                    Watch Success Story
                  </p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-foreground mb-2">Sarah Johnson</h3>
                <p className="text-muted-foreground text-sm mb-3">Pristine Car Care</p>
                <Badge variant="secondary" className="mb-3">$63K Monthly Increase</Badge>
                <p className="text-muted-foreground text-sm">
                  "The quality of leads is incredible..."
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Written Testimonials */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-background border-border/50">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-foreground italic mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-muted-foreground text-sm">{testimonial.business}</p>
                  </div>
                  <Badge variant="secondary">{testimonial.result}</Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;