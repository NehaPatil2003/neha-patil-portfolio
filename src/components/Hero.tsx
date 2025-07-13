
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Dreamy Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-80 h-80 bg-pink-400/20 rounded-full blur-3xl animate-gentle-float sweet-glow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-rose-300/15 rounded-full blur-3xl animate-gentle-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-coral-300/10 rounded-full blur-3xl animate-gentle-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Elegant Headline */}
          <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-8 animate-slide-up-gentle">
            <span className="text-white">Neha Patil</span>
            <br />
            <span className="coral-gradient-text">IT Engineer</span>
          </h1>

          {/* Sweet Subheadline */}
          <p className="text-xl md:text-2xl text-[#CCCCCC] mb-8 animate-slide-up-gentle leading-relaxed" style={{ animationDelay: '0.2s' }}>
            Crafting backend solutions with passion & precision
          </p>

          {/* Gentle Bio */}
          <p className="text-lg text-[#CCCCCC]/90 mb-12 max-w-2xl mx-auto animate-slide-up-gentle leading-relaxed" style={{ animationDelay: '0.4s' }}>
            Java • Spring Boot • Full-Stack Development
          </p>

          {/* Sweet CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up-gentle" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-[#FF6868] via-[#FF7AA2] to-[#FFB3B3] text-white font-medium px-8 py-4 text-lg hover:opacity-90 transition-opacity border-0 shadow-lg"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-[#FF7AA2] text-[#FF7AA2] hover:bg-[#FF7AA2] hover:text-white font-medium px-8 py-4 text-lg transition-all duration-500"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Let's Connect
            </Button>
          </div>
        </div>

        {/* Gentle Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="p-3 rounded-full border border-[#FF7AA2]/40 bg-[#FF7AA2]/10 magic-glow">
            <ArrowDown className="text-[#FF7AA2]" size={20} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
