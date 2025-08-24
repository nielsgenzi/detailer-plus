import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}>
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">D</span>
            </div>
            <span className="text-xl font-bold text-foreground">Detailer Plus</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => document.getElementById('vsl')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Platform
            </button>
            <button 
              onClick={() => document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Results
            </button>
            <button 
              onClick={() => document.getElementById('strategy')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Strategy
            </button>
            <button 
              onClick={() => document.getElementById('schedule')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Schedule
            </button>
          </nav>
          
          <Button 
            variant="primary" 
            className="shadow-glow"
            onClick={() => document.getElementById('schedule')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Book Strategy Call
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;