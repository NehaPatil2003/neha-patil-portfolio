
import { ExternalLink, Palette, Sparkles } from 'lucide-react';

const NRCreations = () => {
  const logoProjects = [
    {
      id: 1,
      title: 'NR Designs',
      description: 'Personal brand identity with elegant typography',
      category: 'Personal Brand',
      image: '/lovable-uploads/b293eaa6-d041-4a1d-bf04-928aef4d1df2.png',
    },
    {
      id: 2,
      title: 'Yawal News',
      description: 'Professional news portal branding',
      category: 'Media Portal',
      image: '/lovable-uploads/ca48b290-2259-4d9b-837d-5f4a76e2e1be.png',
    },
    {
      id: 3,
      title: 'Sudarshan Digital Lab',
      description: 'Creative studio for editing & printing',
      category: 'Digital Studio',
      image: '/lovable-uploads/e0e5aaa2-ed81-4254-b4f9-49fcc30f3f33.png',
    }
  ];

  return (
    <section id="nr-creates" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Sweet Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
              <span className="coral-gradient-text">NR</span> Creates
            </h2>
            <div className="w-24 h-1 sweet-gradient-bg mx-auto mb-6 rounded-full"></div>
            <p className="text-portfolio-grid-gray max-w-xl mx-auto text-lg leading-relaxed">
              Logo designs crafted with creativity
            </p>
          </div>

          {/* Logo Gallery */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {logoProjects.map((project, index) => (
              <div key={project.id} className="group relative">
                <div className="sweet-card rounded-2xl overflow-hidden hover-float transition-all duration-500">
                  {/* Logo Display */}
                  <div className="h-40 bg-gradient-to-br from-portfolio-rich-black to-portfolio-black relative flex items-center justify-center p-6">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                    
                    {/* Category Badge */}
                    <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md rounded-full px-3 py-1 border border-pink-300/20">
                      <span className="text-pink-300 text-xs font-medium">{project.category}</span>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-5">
                    <h4 className="text-lg font-playfair font-semibold text-white mb-2 group-hover:text-pink-300 transition-colors duration-300">
                      {project.title}
                    </h4>
                    <p className="text-portfolio-grid-gray leading-relaxed text-sm mb-3">
                      {project.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-pink-300">
                        <Sparkles className="w-4 h-4 mr-2" />
                        <span className="text-xs font-medium">Design</span>
                      </div>
                      <button className="p-2 rounded-lg bg-pink-400/10 text-pink-300 hover:bg-pink-400 hover:text-white transition-all duration-300">
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sweet CTA Section */}
          <div className="sweet-card rounded-2xl p-8 text-center hover-float">
            <div className="max-w-xl mx-auto">
              <div className="w-16 h-16 rounded-2xl sweet-gradient-bg mx-auto mb-4 flex items-center justify-center sweet-glow">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-playfair font-semibold coral-gradient-text mb-3">
                Need a Logo?
              </h3>
              <p className="text-portfolio-grid-gray leading-relaxed mb-6">
                Let's create something beautiful together
              </p>
              <button className="sweet-btn text-white px-8 py-3 rounded-2xl font-medium text-lg">
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
