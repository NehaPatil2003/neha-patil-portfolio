
import { ExternalLink, Sparkles, Palette, Zap } from 'lucide-react';

const NRCreations = () => {
  const logoProjects = [
    {
      id: 1,
      title: 'NR Designs',
      description: 'Personal brand identity with elegant typography and sophisticated coral glow effects',
      category: 'Personal Brand',
      image: '/lovable-uploads/b293eaa6-d041-4a1d-bf04-928aef4d1df2.png',
      accent: 'coral'
    },
    {
      id: 2,
      title: 'Yawal News',
      description: 'Professional news portal branding with bold colors and media-focused design',
      category: 'Media & News',
      image: '/lovable-uploads/ca48b290-2259-4d9b-837d-5f4a76e2e1be.png',
      accent: 'blue'
    },
    {
      id: 3,
      title: 'Sudarshan Digital Studio',
      description: 'Creative studio identity for editing and printing services with modern aesthetic',
      category: 'Digital Studio',
      image: '/lovable-uploads/e0e5aaa2-ed81-4254-b4f9-49fcc30f3f33.png',
      accent: 'purple'
    }
  ];

  return (
    <section id="nr-creations" className="py-20 relative overflow-hidden">
      {/* Clean background with subtle grid */}
      <div className="absolute inset-0 grid-overlay opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Professional Section Header */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-2xl coral-gradient-bg flex items-center justify-center shadow-lg">
                <img 
                  src="/lovable-uploads/4c8d6a1c-1fe6-431b-b3fe-7968a07a9d5e.png" 
                  alt="NR Logo" 
                  className="w-10 h-10 object-cover rounded-xl"
                />
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
              <span className="coral-gradient-text">NR</span> Creates
            </h2>
            <div className="w-24 h-1 coral-gradient-bg mx-auto mb-6 rounded-full"></div>
            <p className="text-portfolio-grid-gray max-w-2xl mx-auto text-lg leading-relaxed">
              Logo designs crafted with precision and creative vision, combining technical expertise with artistic flair.
            </p>
          </div>

          {/* Logo Gallery */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {logoProjects.map((project, index) => (
              <div
                key={project.id}
                className="group relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="neon-card rounded-2xl overflow-hidden hover-lift transition-all duration-500 group-hover:scale-[1.02]">
                  {/* Logo Display */}
                  <div className="h-64 bg-gradient-to-br from-portfolio-rich-black to-portfolio-black relative flex items-center justify-center p-8">
                    <div className="relative z-10 w-full h-full flex items-center justify-center">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md rounded-full px-3 py-1 border border-white/10">
                      <span className="text-white text-xs font-medium">{project.category}</span>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6 bg-gradient-to-b from-portfolio-rich-black to-portfolio-black">
                    <h4 className="text-xl font-playfair font-semibold text-white mb-3 group-hover:text-portfolio-coral transition-colors duration-300">
                      {project.title}
                    </h4>
                    <p className="text-portfolio-grid-gray leading-relaxed text-sm mb-4">
                      {project.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-portfolio-coral">
                        <Zap className="w-4 h-4 mr-2" />
                        <span className="text-xs font-medium">Premium Design</span>
                      </div>
                      <button className="p-2 rounded-lg bg-portfolio-coral/10 text-portfolio-coral hover:bg-portfolio-coral hover:text-white transition-all duration-300">
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Professional CTA Section */}
          <div className="neon-card rounded-2xl p-8 text-center hover-lift">
            <div className="max-w-2xl mx-auto">
              <div className="w-12 h-12 rounded-xl coral-gradient-bg mx-auto mb-6 flex items-center justify-center">
                <Palette className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-playfair font-semibold coral-gradient-text mb-4">
                Ready to Bring Your Brand Vision to Life?
              </h3>
              <p className="text-portfolio-grid-gray leading-relaxed mb-6">
                Let's create something memorable together with the same precision I bring to engineering solutions.
              </p>
              <button className="futuristic-btn text-white px-6 py-3 rounded-xl font-medium hover:scale-105 transition-transform duration-300">
                Start Your Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NRCreations;
