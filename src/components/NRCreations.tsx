
import { ExternalLink, Sparkles, Palette, Zap } from 'lucide-react';

const NRCreations = () => {
  const logoProjects = [
    {
      id: 1,
      title: 'Minimal Tech Startup Identity',
      description: 'Clean, modern logo design focusing on innovation and scalability',
      category: 'Tech Startup',
      color: 'from-purple-500 via-purple-600 to-pink-500',
      initials: 'TS',
      accent: 'purple'
    },
    {
      id: 2,
      title: 'Creative Agency Branding',
      description: 'Dynamic identity with artistic flair and professional appeal',
      category: 'Creative',
      color: 'from-blue-500 via-cyan-500 to-teal-500',
      initials: 'CA',
      accent: 'blue'
    },
    {
      id: 3,
      title: 'E-commerce Brand Identity',
      description: 'Sophisticated business identity with modern commercial appeal',
      category: 'E-commerce',
      color: 'from-green-500 via-emerald-500 to-teal-500',
      initials: 'EB',
      accent: 'green'
    },
    {
      id: 4,
      title: 'Personal Brand Portfolio',
      description: 'Artistic and expressive identity for creative professionals',
      category: 'Personal',
      color: 'from-orange-500 via-red-500 to-pink-500',
      initials: 'PB',
      accent: 'orange'
    }
  ];

  return (
    <section id="nr-creations" className="py-20 relative overflow-hidden">
      {/* Enhanced grid background with animated particles */}
      <div className="absolute inset-0 grid-overlay opacity-20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-10 right-20 w-32 h-32 bg-portfolio-coral/5 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-portfolio-coral-neon/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Enhanced Section Header with Large Logo Display */}
          <div className="text-center mb-20">
            {/* Large Hero Logo */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-32 h-32 rounded-3xl p-2 coral-gradient-bg animate-glow-pulse shadow-2xl">
                  <div className="w-full h-full bg-portfolio-black rounded-2xl overflow-hidden flex items-center justify-center">
                    <img 
                      src="/lovable-uploads/4c8d6a1c-1fe6-431b-b3fe-7968a07a9d5e.png" 
                      alt="NR Designs Logo" 
                      className="w-20 h-20 object-cover rounded-xl"
                    />
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-portfolio-coral-neon rounded-full flex items-center justify-center animate-pulse">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>

            <h2 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6">
              <span className="coral-gradient-text">NR</span> Creative Studio
            </h2>
            <div className="w-32 h-1 coral-gradient-bg mx-auto mb-8 rounded-full animate-neon-glow"></div>
            <p className="text-portfolio-grid-gray max-w-3xl mx-auto text-lg leading-relaxed">
              Where engineering precision meets creative vision. Crafting memorable brand identities 
              with the same attention to detail I bring to code.
            </p>
          </div>

          {/* Enhanced Brand Philosophy Card */}
          <div className="neon-card rounded-3xl p-12 mb-20 text-center hover-lift relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 coral-gradient-bg"></div>
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-16 coral-gradient-bg rounded-2xl flex items-center justify-center mr-4 animate-glow-pulse">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-playfair font-semibold coral-gradient-text">Design Philosophy</h3>
            </div>
            <p className="text-portfolio-grid-gray text-xl leading-relaxed max-w-4xl mx-auto">
              Every design tells a story. I combine the <span className="text-portfolio-coral font-semibold">logical thinking of an engineer</span> 
              with the <span className="text-portfolio-coral-light font-semibold">creative vision of an artist</span>. 
              Each logo is crafted with purpose, precision, and pixel-perfect attention to detail.
            </p>
          </div>

          {/* Enhanced Logo Gallery with Modern Cards */}
          <div className="grid md:grid-cols-2 gap-10 mb-20">
            {logoProjects.map((project, index) => (
              <div
                key={project.id}
                className="group relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="neon-card rounded-3xl overflow-hidden hover-lift transition-all duration-500 group-hover:scale-[1.02]">
                  {/* Logo Display with Enhanced Gradient */}
                  <div className={`h-80 bg-gradient-to-br ${project.color} relative flex items-center justify-center overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="relative z-10">
                      <div className="text-8xl font-playfair font-bold text-white/95 mb-4 group-hover:scale-110 transition-transform duration-300">
                        {project.initials}
                      </div>
                    </div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-6 right-6 bg-black/30 backdrop-blur-md rounded-full px-4 py-2 border border-white/20">
                      <span className="text-white text-sm font-medium">{project.category}</span>
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-8">
                      <button className="futuristic-btn text-white p-4 rounded-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <ExternalLink className="w-6 h-6" />
                      </button>
                    </div>
                  </div>

                  {/* Project Info with Enhanced Typography */}
                  <div className="p-8 bg-gradient-to-b from-portfolio-rich-black to-portfolio-black">
                    <h4 className="text-2xl font-playfair font-semibold text-white mb-3 group-hover:text-portfolio-coral transition-colors duration-300">
                      {project.title}
                    </h4>
                    <p className="text-portfolio-grid-gray leading-relaxed text-lg">
                      {project.description}
                    </p>
                    <div className="mt-4 flex items-center text-portfolio-coral">
                      <Zap className="w-4 h-4 mr-2" />
                      <span className="text-sm font-medium">Premium Design</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced CTA Section */}
          <div className="neon-card rounded-3xl p-12 text-center hover-lift relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 coral-gradient-bg"></div>
            <div className="max-w-3xl mx-auto">
              <div className="w-20 h-20 rounded-2xl coral-gradient-bg mx-auto mb-8 flex items-center justify-center animate-glow-pulse">
                <img 
                  src="/lovable-uploads/4c8d6a1c-1fe6-431b-b3fe-7968a07a9d5e.png" 
                  alt="NR Designs Logo" 
                  className="w-12 h-12 object-cover rounded-xl"
                />
              </div>
              <h3 className="text-3xl font-playfair font-semibold coral-gradient-text mb-6">
                Ready to Create Something Amazing?
              </h3>
              <p className="text-portfolio-grid-gray leading-relaxed mb-8 text-lg">
                Let's bring your brand vision to life with the same precision and creativity 
                I apply to engineering solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="futuristic-btn text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:scale-105 transition-transform duration-300">
                  Commission Your Logo
                </button>
                <button className="tech-border border-portfolio-coral text-portfolio-coral hover:bg-portfolio-coral hover:text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300">
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NRCreations;
