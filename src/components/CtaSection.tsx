import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const CtaSection = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-background via-muted/20 to-background">
      <div className="container mx-auto px-6">
        <Card className="bg-gradient-card border-border/50 shadow-glow">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Scale Your{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Detailing Business?
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
              Join successful auto detailing companies who've partnered with Detailer Plus 
              to consistently add $75K+ in monthly revenue.
            </p>
            <Button variant="primary" size="lg" className="px-12 py-4 text-lg shadow-glow">
              Schedule Your Strategy Call
              <span className="ml-2">→</span>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CtaSection;