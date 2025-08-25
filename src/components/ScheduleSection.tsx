import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, CheckCircle, DollarSign, TrendingUp, Users } from "lucide-react";
import { useEffect } from "react";
const ScheduleSection = () => {
  const callDetails = ["Custom growth strategy for your market", "Territory analysis and opportunity assessment", "ROI projections and timeline expectations", "Detailed investment breakdown and terms"];
  const qualifications = ["Currently doing $300K+ in annual revenue", "Have capacity to take on additional projects", "Ready to invest in proven growth systems", "Serious about scaling your land clearing business"];
  const stats = [{
    icon: Users,
    value: "127+",
    label: "Active Partners"
  }, {
    icon: DollarSign,
    value: "$52K",
    label: "Avg Monthly Increase"
  }, {
    icon: TrendingUp,
    value: "89%",
    label: "Success Rate"
  }];

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);
  return <section id="schedule" className="py-24 bg-gradient-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-dark/90"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-white/10 text-white border-white/20">
            Book Your Strategy Call
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Wanna learn more?{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Let's talk!
            </span>
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">Schedule a free no-obligations strategy call to see if we can help. You’ll also get some free coaching and material.</p>
        </div>

        <div className="flex justify-center">
          {/* Left Column - Call Details */}
          

          {/* Calendar Embed - Wider Layout */}
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm w-full max-w-5xl">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-white mb-6 text-center">
                Schedule Your Call
              </h3>
              <p className="text-white/70 text-center mb-6">
                Select a time that works best for your schedule
              </p>
              
              {/* Calendly Embed - Centered and wide for 2-column layout */}
              <div className="flex justify-center">
                <div className="calendly-inline-widget" data-url="https://calendly.com/niels-genzi/call" style={{minWidth:'1200px', height:'700px'}}></div>
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-white/60 text-sm">
                  Web conferencing details provided upon confirmation.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default ScheduleSection;