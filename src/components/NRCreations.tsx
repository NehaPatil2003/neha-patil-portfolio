
import { ExternalLink, Palette, Sparkles, Camera, Heart } from 'lucide-react';

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
      title: 'Sudarshan Digital',
      description: 'Creative studio for editing & printing',
      category: 'Digital Studio',
      image: '/lovable-uploads/e0e5aaa2-ed81-4254-b4f9-49fcc30f3f33.png',
    }
  ];

  const personalImages = [
    {
      id: 1,
      title: 'My Creative Workspace',
      description: 'Where the magic happens - my design setup',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&h=300&fit=crop',
    },
    {
      id: 2,
      title: 'Design Process',
      description: 'Crafting logos with passion and precision',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop',
    }
  ];

  return (
    <section id="nr-creates" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
              <span className="logo-gradient-text">NR</span> Creates
            </h2>
            <div className="w-24 h-1 coral-gradient-bg mx-auto mb-6 rounded-full"></div>
            <p className="text-[#CCCCCC] max-w-xl mx-auto text-lg leading-relaxed flex items-center justify-center gap-2">
              <Heart className="w-5 h-5 text-[#FF7AA2]" />
              Logo designs - my creative hobby
              <Heart className="w-5 h-5 text-[#FF7AA2]" />
            </p>
          </div>

          {/* Personal Setup Images */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {personalImages.map((item) => (
              <div key={item.id} className="group relative">
                <div className="neon-card rounded-2xl overflow-hidden hover-lift transition-all duration-500">
                  <div className="h-48 relative overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h4 className="text-white font-playfair font-semibold mb-1">{item.title}</h4>
                      <p className="text-[#CCCCCC] text-sm">{item.description}</p>
                    </div>
                    <div className="absolute top-3 right-3">
                      <Camera className="w-5 h-5 text-[#FF7AA2]" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Logo Gallery */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {logoProjects.map((project, index) => (
              <div key={project.id} className="group relative">
                <div className="neon-card rounded-2xl overflow-hidden hover-lift transition-all duration-500">
                  {/* Logo Display */}
                  <div className="h-40 bg-gradient-to-br from-black to-black/80 relative flex items-center justify-center p-6">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                    
                    {/* Category Badge */}
                    <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md rounded-full px-3 py-1 border border-[#CCCCCC]/20">
                      <span className="text-[#FF7AA2] text-xs font-medium">{project.category}</span>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-5">
                    <h4 className="text-lg font-playfair font-semibold text-white mb-2 group-hover:text-[#FF7AA2] transition-colors duration-300">
                      {project.title}
                    </h4>
                    <p className="text-[#CCCCCC] leading-relaxed text-sm mb-3">
                      {project.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-[#FF7AA2]">
                        <Sparkles className="w-4 h-4 mr-2" />
                        <span className="text-xs font-medium">Design</span>
                      </div>
                      <button className="p-2 rounded-lg bg-[#FF7AA2]/10 text-[#FF7AA2] hover:bg-[#FF7AA2] hover:text-white transition-all duration-300">
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="neon-card rounded-2xl p-8 text-center hover-lift">
            <div className="max-w-xl mx-auto">
              <div className="w-16 h-16 rounded-2xl coral-gradient-bg mx-auto mb-4 flex items-center justify-center magic-glow">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-playfair font-semibold coral-gradient-text mb-3">
                Need a Logo?
              </h3>
              <p className="text-[#CCCCCC] leading-relaxed mb-6">
                Let's create something beautiful together - it's my passion!
              </p>
              <button className="coral-gradient-bg text-white px-8 py-3 rounded-2xl font-medium text-lg hover:opacity-90 transition-opacity">
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
