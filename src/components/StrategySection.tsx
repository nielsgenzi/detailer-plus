import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Target, TrendingUp, Users, CheckCircle, ArrowRight } from "lucide-react";
const StrategySection = () => {
  const steps = [{
    icon: Target,
    title: "Market Analysis",
    description: "We analyze your local market to identify the highest-value opportunities and create a custom acquisition strategy.",
    timeline: "Week 1"
  }, {
    icon: TrendingUp,
    title: "Lead Generation Setup",
    description: "Our team implements proven lead generation systems specifically designed for your territory and service offerings.",
    timeline: "Week 2-3"
  }, {
    icon: Users,
    title: "Client Delivery",
    description: "Start receiving pre-qualified, high-value clients ready to invest in premium auto detailing services.",
    timeline: "Week 4+"
  }];
  const benefits = ["Exclusive territory rights in your market", "Only pay for closed jobs, not leads", "Pre-qualified clients with verified budgets", "Dedicated success manager support", "Real-time performance analytics", "Multi-channel lead generation approach"];
  return <section id="strategy" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Your Growth Strategy
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Here's How We'll Take Your Business to 
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {" "}The Next Level
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Our proven 3-step process has helped over 20+ detailers consistently get $10k, $20k, or even more in monthly revenue.</p>
        </div>

        {/* Strategy Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => {
          const IconComponent = step.icon;
          return <Card key={index} className="relative bg-gradient-card border-border/50 group hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {step.timeline}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                  {index < steps.length - 1 && <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                      <ArrowRight className="w-6 h-6 text-primary" />
                    </div>}
                </CardContent>
              </Card>;
        })}
        </div>

        {/* Benefits and CTA */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">
              What You Get When You Partner With DetailMax
            </h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>)}
            </div>
          </div>
          
          <Card className="bg-gradient-card border-border/50 shadow-elegant">
            <CardContent className="p-8 text-center">
              <h4 className="text-2xl font-bold mb-4 text-foreground">
                Ready to Scale Your Business?
              </h4>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Join successful auto detailing companies who've partnered with DetailMax 
                to consistently add $75K+ in monthly revenue.
              </p>
              <Button variant="primary" size="lg" className="px-8 py-4 text-lg shadow-glow" onClick={() => document.getElementById('schedule')?.scrollIntoView({
              behavior: 'smooth'
            })}>
                Schedule Strategy Call
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <p className="text-muted-foreground text-sm mt-4">
                45-minute strategy session • No commitment required
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default StrategySection;