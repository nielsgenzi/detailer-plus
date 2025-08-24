import { Card, CardContent } from "@/components/ui/card";
import { Play } from "lucide-react";
const VslSection = () => {
  return <section id="vsl" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            See How We're Helping Auto Detailers
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {" "}Scale Their Business
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Watch this exclusive case study to see exactly how our proven system is adding $10K+ monthly to auto detailing businesses.</p>
        </div>
        
        <Card className="max-w-4xl mx-auto bg-gradient-card border-border/50 shadow-elegant">
          <CardContent className="p-8">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <iframe
                src="https://drive.google.com/file/d/1A8Y1862i0GVEtAlucaHocPl54kPmiS3Q/preview"
                className="w-full h-full"
                allow="autoplay"
                title="Auto Detailing Case Study"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>;
};
export default VslSection;