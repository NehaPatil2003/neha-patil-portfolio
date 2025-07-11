
import { ExternalLink, Palette, Zap } from 'lucide-react';

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
    <section id="nr-creates" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Clean Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
              <span className="coral-gradient-text">NR</span> Creates
            </h2>
            <div className="w-24 h-1 coral-gradient-bg mx-auto mb-6 rounded-full"></div>
            <p className="text-portfolio-grid-gray max-w-2xl mx-auto text-lg leading-relaxed">
              Logo designs crafted with precision and creative vision
            </p>
          </div>

          {/* Logo Gallery */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {logoProjects.map((project, index) => (
              <div
                key={project.id}
                className="group relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="neon-card rounded-xl overflow-hidden hover-lift transition-all duration-500 group-hover:scale-[1.02]">
                  {/* Logo Display */}
                  <div className="h-48 bg-gradient-to-br from-portfolio-rich-black to-portfolio-black relative flex items-center justify-center p-6">
                    <div className="relative z-10 w-full h-full flex items-center justify-center">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-md rounded-full px-3 py-1 border border-white/10">
                      <span className="text-white text-xs font-medium">{project.category}</span>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-5 bg-gradient-to-b from-portfolio-rich-black to-portfolio-black">
                    <h4 className="text-lg font-playfair font-semibold text-white mb-2 group-hover:text-portfolio-coral transition-colors duration-300">
                      {project.title}
                    </h4>
                    <p className="text-portfolio-grid-gray leading-relaxed text-sm mb-3">
                      {project.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-portfolio-coral">
                        <Zap className="w-4 h-4 mr-2" />
                        <span className="text-xs font-medium">Design</span>
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

          {/* Simple CTA Section */}
          <div className="neon-card rounded-xl p-6 text-center hover-lift">
            <div className="max-w-2xl mx-auto">
              <div className="w-12 h-12 rounded-xl coral-gradient-bg mx-auto mb-4 flex items-center justify-center">
                <Palette className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-playfair font-semibold coral-gradient-text mb-3">
                Need a Logo Design?
              </h3>
              <p className="text-portfolio-grid-gray leading-relaxed mb-4 text-sm">
                Let's create something memorable together
              </p>
              <button className="futuristic-btn text-white px-6 py-2 rounded-xl font-medium hover:scale-105 transition-transform duration-300">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NRCreations;
