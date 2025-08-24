import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
const Footer = () => {
  const footerLinks = {
    platform: [{
      name: "How It Works",
      href: "#"
    }, {
      name: "Results",
      href: "#"
    }, {
      name: "Pricing",
      href: "#"
    }, {
      name: "Territory Map",
      href: "#"
    }],
    company: [{
      name: "About Us",
      href: "#"
    }, {
      name: "Careers",
      href: "#"
    }, {
      name: "Press",
      href: "#"
    }, {
      name: "Contact",
      href: "#"
    }],
    support: [{
      name: "Help Center",
      href: "#"
    }, {
      name: "Partner Resources",
      href: "#"
    }, {
      name: "Training",
      href: "#"
    }, {
      name: "Success Stories",
      href: "#"
    }],
    legal: [{
      name: "Privacy Policy",
      href: "#"
    }, {
      name: "Terms of Service",
      href: "#"
    }, {
      name: "Partner Agreement",
      href: "#"
    }, {
      name: "Compliance",
      href: "#"
    }]
  };
  const socialLinks = [{
    icon: Facebook,
    href: "#",
    label: "Facebook"
  }, {
    icon: Twitter,
    href: "#",
    label: "Twitter"
  }, {
    icon: Linkedin,
    href: "#",
    label: "LinkedIn"
  }, {
    icon: Instagram,
    href: "#",
    label: "Instagram"
  }];
  return <footer className="bg-background border-t border-border/50">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">D</span>
                </div>
                <span className="text-xl font-bold text-foreground">DetailMax</span>
              </div>
              <p className="text-muted-foreground mb-6 max-w-md">Let's get your detailing business to the next level!</p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground text-sm">niels.genzi@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground text-sm">+1 833-283-2108</span>
                </div>
                
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return <a key={index} href={social.href} aria-label={social.label} className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                      <IconComponent className="w-4 h-4" />
                    </a>;
              })}
              </div>
            </div>

            {/* Links Columns */}
            

            

            
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2024 DetailMax. All rights reserved.
            </p>
            
          </div>
          
          
        </div>
      </div>
    </footer>;
};
export default Footer;