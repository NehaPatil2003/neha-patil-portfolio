
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Grid Background */}
      <div className="absolute inset-0 grid-overlay opacity-30"></div>
      
      {/* Animated Background Elements with Coral Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-portfolio-coral/10 rounded-full blur-3xl animate-float nr-glow"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-portfolio-coral-light/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-portfolio-coral-neon/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 animate-slide-up">
            <span className="text-white">Neha Patil</span>
            <br />
            <span className="coral-gradient-text">IT Engineer & Backend Developer</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-portfolio-grid-gray mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Building scalable backend solutions with Java + Spring Boot expertise.
          </p>

          {/* Brief Bio */}
          <p className="text-lg text-portfolio-grid-gray/80 mb-12 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.4s' }}>
            Passionate about clean APIs, database optimization, and full-stack development. 
            Also the creative mind behind <span className="coral-gradient-text font-semibold">NR</span> design studio.
          </p>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg" 
              className="futuristic-btn text-white font-semibold px-8 py-3"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Projects
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="tech-border border-portfolio-coral text-portfolio-coral hover:bg-portfolio-coral hover:text-white font-semibold px-8 py-3 transition-all duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Let's Connect
            </Button>
          </div>

          {/* Small NR Credit */}
          <div className="mt-8 animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <p className="text-xs text-portfolio-grid-gray/60">
              Visual design by <span className="coral-gradient-text">NR</span>
            </p>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="p-2 rounded-full border border-portfolio-coral/30 bg-portfolio-coral/10">
            <ArrowDown className="text-portfolio-coral animate-neon-glow" size={24} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
