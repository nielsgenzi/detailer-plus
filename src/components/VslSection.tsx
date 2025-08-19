import { Card, CardContent } from "@/components/ui/card";
import { Play } from "lucide-react";

const VslSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            See How We're Helping Auto Detailers
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {" "}Scale Their Business
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Watch this exclusive case study to see exactly how our performance-based 
            platform is adding $75K+ monthly to auto detailing businesses.
          </p>
        </div>
        
        <Card className="max-w-4xl mx-auto bg-gradient-card border-border/50 shadow-elegant">
          <CardContent className="p-8">
            <div className="relative aspect-video bg-muted rounded-lg flex items-center justify-center cursor-pointer group hover:bg-muted/80 transition-colors">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-glow">
                  <Play className="w-8 h-8 text-primary-foreground ml-1" />
                </div>
                <p className="text-foreground font-semibold text-lg">
                  Click to Watch Case Study
                </p>
                <p className="text-muted-foreground text-sm mt-2">
                  12 minutes • Real results from actual clients
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default VslSection;