
import { ExternalLink, Palette, Sparkles, Camera, Heart, Crown, Star, Instagram } from 'lucide-react';

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
      title: 'Studarshan Digital',
      description: 'Creative studio for editing & printing',
      category: 'Digital Lab',
      image: '/lovable-uploads/e0e5aaa2-ed81-4254-b4f9-49fcc30f3f33.png',
    }
  ];

  const personalImage = {
    id: 1,
    title: 'The Creative Vision',
    description: 'Behind every great design is a passionate creator',
    image: '/lovable-uploads/fdad6372-7dd5-4ac8-bdbf-77df0eb348ce.png',
  };

  return (
    <section id="nr-creates" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Compact Section Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <Crown className="w-6 h-6 text-[#FF6868] mr-2" />
              <h2 className="text-3xl font-playfair font-bold text-white">
                <span className="coral-gradient-text">NR</span> Creates
              </h2>
              <Crown className="w-6 h-6 text-[#FF6868] ml-2" />
            </div>
            <div className="w-16 h-1 coral-gradient-bg mx-auto mb-4 rounded-full"></div>
            <p className="text-[#CCCCCC] max-w-lg mx-auto text-sm typewriter-text animate-fade-in">
              Where creativity meets code — logos that live beyond pixels.
            </p>
          </div>

          {/* Bossy Portrait Photo */}
          <div className="flex justify-center mb-8 relative">
            <div className="relative">
              <div className="w-72 h-72 relative transform hover:scale-105 transition-all duration-500">
                {/* Bossy portrait photo */}
                <div className="absolute inset-0 rounded-full overflow-hidden profile-photo" 
                     style={{
                       transform: 'perspective(1000px) rotateY(10deg) rotateX(-3deg)',
                       boxShadow: '0 20px 40px rgba(0, 0, 0, 0.8), 0 0 60px rgba(255, 104, 104, 0.3)',
                       zIndex: 25
                     }}>
                  <img 
                    src="/lovable-uploads/ac8369e9-7c81-46d2-bb01-680667bfa382.png" 
                    alt="Mind behind NR"
                    className="w-full h-full object-cover hover:scale-110 transition-all duration-700"
                    style={{
                      filter: 'grayscale(70%) contrast(1.2) brightness(1.05) sepia(10%)',
                      objectPosition: 'center 25%'
                    }}
                  />
                </div>
                
                {/* Minimal decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 coral-gradient-bg rounded-full flex items-center justify-center">
                  <Crown className="w-4 h-4 text-white" />
                </div>
              </div>
              
              {/* Bold title */}
              <div className="text-center mt-4 relative z-10">
                <h4 className="text-xl font-playfair font-bold text-white">Mind behind NR</h4>
                <p className="text-[#FF7AA2] text-sm font-medium">Bold • Precise • Uncompromising</p>
              </div>
            </div>
          </div>

          {/* Compact Logo Gallery */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {logoProjects.map((project, index) => (
              <div key={project.id} className="group relative">
                <div className="neon-card rounded-xl overflow-hidden hover-lift transition-all duration-500">
                  {/* Logo Display */}
                  <div className="h-32 bg-gradient-to-br from-black to-black/80 relative flex items-center justify-center p-6">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Project Info */}
                  <div className="p-3 bg-gradient-to-b from-black/50 to-black/80">
                    <h4 className="text-sm font-playfair font-semibold text-white mb-1 group-hover:text-[#FF7AA2] transition-colors duration-300">
                      {project.title}
                    </h4>
                    <p className="text-[#CCCCCC] text-xs">
                      {project.category}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Compact CTA */}
          <div className="neon-card rounded-xl p-6 text-center">
            <div className="max-w-md mx-auto">
              <div className="w-12 h-12 rounded-xl coral-gradient-bg mx-auto mb-3 flex items-center justify-center">
                <Palette className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-playfair font-semibold coral-gradient-text mb-4">
                Available for Projects
              </h3>
              <div className="flex items-center justify-center space-x-4 mt-4">
                <a 
                  href="https://instagram.com/nr_creates__" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-[#FF7AA2] hover:text-white transition-colors duration-300"
                >
                  <Instagram className="w-5 h-5" />
                  <span className="text-sm">@nr_creates__</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NRCreations;
