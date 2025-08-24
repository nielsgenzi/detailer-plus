import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  Clock, 
  CheckCircle, 
  DollarSign,
  TrendingUp,
  Users
} from "lucide-react";

const ScheduleSection = () => {
  const callDetails = [
    "Custom growth strategy for your market",
    "Territory analysis and opportunity assessment", 
    "ROI projections and timeline expectations",
    "Detailed investment breakdown and terms"
  ];

  const qualifications = [
    "Currently doing $300K+ in annual revenue",
    "Have capacity to take on additional projects",
    "Ready to invest in proven growth systems",
    "Serious about scaling your land clearing business"
  ];

  const stats = [
    {
      icon: Users,
      value: "127+",
      label: "Active Partners"
    },
    {
      icon: DollarSign,
      value: "$52K",
      label: "Avg Monthly Increase"
    },
    {
      icon: TrendingUp,
      value: "89%",
      label: "Success Rate"
    }
  ];

  return (
    <section id="schedule" className="py-24 bg-gradient-dark relative overflow-hidden">
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
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Schedule a 45-minute strategy call with our team to discuss your business goals 
            and learn how DetailMax can accelerate your growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Call Details */}
          <div className="space-y-8">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Calendar className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold text-white">Auto Detailing Growth Call</h3>
                </div>
                <div className="flex items-center gap-2 text-white/70 mb-6">
                  <Clock className="w-4 h-4" />
                  <span>45 minutes • 1-on-1 Strategy Session</span>
                </div>
                
                <h4 className="text-white font-semibold mb-4">What We'll Cover:</h4>
                <div className="space-y-3">
                  {callDetails.map((detail, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-white/80">{detail}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-8">
                <h4 className="text-white font-semibold mb-4">Is This Call Right for You?</h4>
                <p className="text-white/70 text-sm mb-6">
                  This is a strategy call for serious auto detailing professionals who meet these criteria:
                </p>
                <div className="space-y-3">
                  {qualifications.map((qualification, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-white/80 text-sm">{qualification}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-primary/10 border border-primary/20 rounded-lg">
                  <p className="text-white/90 text-sm">
                    <strong>Important —</strong> This is a <span className="text-primary">performance-based partnership</span>. 
                    You only pay <span className="text-primary">10% of closed jobs</span> we deliver.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mx-auto mb-2">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-xl font-bold text-white">{stat.value}</div>
                    <div className="text-white/60 text-xs">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Calendar Embed */}
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-white mb-6 text-center">
                Schedule Your Call
              </h3>
              <p className="text-white/70 text-center mb-6">
                Select a time that works best for your schedule
              </p>
              
              {/* Calendar Placeholder */}
              <div className="bg-white/10 border border-white/20 rounded-lg p-8 min-h-[400px] flex items-center justify-center">
                <div className="text-center">
                  <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
                  <p className="text-white/80 mb-2">Calendly Embed Goes Here</p>
                  <p className="text-white/60 text-sm">
                    Replace this placeholder with your Calendly embed code
                  </p>
                </div>
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
    </section>
  );
};

export default ScheduleSection;