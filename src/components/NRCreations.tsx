
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
          {/* Exclusive Section Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <Crown className="w-8 h-8 text-[#FF6868] mr-3" />
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white">
                <span className="coral-gradient-text">NR</span> Creates
              </h2>
              <Crown className="w-8 h-8 text-[#FF6868] ml-3" />
            </div>
            <div className="w-24 h-1 coral-gradient-bg mx-auto mb-8 rounded-full"></div>
            
            {/* Powerful Quote Section */}
            <div className="neon-card rounded-3xl p-8 max-w-2xl mx-auto mb-8 border-2 border-[#FF7AA2]/30 magic-glow">
              <div className="flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-[#FF7AA2] mr-2" />
                <h3 className="text-2xl font-playfair font-bold coral-gradient-text">Premium Logo Designs</h3>
                <Star className="w-6 h-6 text-[#FF7AA2] ml-2" />
              </div>
              
              <div className="relative">
                <div className="text-6xl text-[#FF6868] font-playfair absolute -top-4 -left-2">"</div>
                <p className="text-xl text-white font-medium leading-relaxed pl-8 pr-8 mb-4">
                  Where <span className="coral-gradient-text font-bold">creativity meets precision</span> — 
                  I don't just design logos, I craft <span className="text-[#FF7AA2] font-bold">visual identities</span> that leave a lasting impact.
                </p>
                <div className="text-6xl text-[#FF6868] font-playfair absolute -bottom-8 -right-2 rotate-180">"</div>
              </div>
              
              <div className="flex items-center justify-center mt-6 space-x-3">
                <div className="flex items-center space-x-2 bg-[#FF7AA2]/20 rounded-full px-4 py-2">
                  <Crown className="w-4 h-4 text-[#FF6868]" />
                  <span className="text-[#FF7AA2] font-bold text-sm">Exclusive • Selective • Premium</span>
                </div>
              </div>
            </div>

            {/* Instagram Link */}
            <div className="flex items-center justify-center mb-8">
              <div className="flex items-center space-x-3 bg-gradient-to-r from-[#FF6868] to-[#FF7AA2] rounded-full px-6 py-3 magic-glow">
                <Instagram className="w-5 h-5 text-white" />
                <span className="text-white font-semibold">@NR_Creates</span>
              </div>
            </div>
          </div>

          {/* Free-floating Personal Photo */}
          <div className="flex justify-center mb-12 relative">
            <div className="relative">
              <div className="w-96 h-96 relative transform hover:scale-105 transition-all duration-500">
                {/* Main floating photo */}
                <div className="absolute inset-0 rounded-full overflow-hidden profile-photo" 
                     style={{
                       transform: 'perspective(1000px) rotateY(15deg) rotateX(-5deg) translateY(-40px)',
                       boxShadow: '0 40px 80px rgba(255, 104, 104, 0.6), 0 0 140px rgba(255, 122, 162, 0.5)',
                       zIndex: 25
                     }}>
                  <img 
                    src="/lovable-uploads/d87ad24c-63fb-4cbb-8a79-475f367b7dd6.png" 
                    alt={personalImage.title}
                    className="w-full h-full object-cover hover:scale-110 transition-all duration-700"
                    style={{
                      filter: 'brightness(1.2) contrast(1.1)',
                      objectPosition: 'center 20%'
                    }}
                  />
                </div>
                
                {/* Floating decorative elements */}
                <div className="absolute -top-8 -left-8 w-20 h-20 bg-[#FF7AA2]/20 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-6 -right-6 w-16 h-16 coral-gradient-bg rounded-full flex items-center justify-center animate-bounce">
                  <Camera className="w-8 h-8 text-white" />
                </div>
                <div className="absolute top-1/4 -left-12 w-10 h-10 bg-[#FF6868]/30 rounded-full animate-ping"></div>
                <div className="absolute bottom-1/4 -right-10 w-6 h-6 bg-[#FFB3B3]/40 rounded-full animate-pulse"></div>
              </div>
              
              {/* Floating text below */}
              <div className="text-center mt-8 relative z-10">
                <h4 className="text-2xl font-playfair font-semibold text-white mb-2">{personalImage.title}</h4>
                <p className="text-[#CCCCCC] text-lg leading-relaxed">{personalImage.description}</p>
              </div>
            </div>
          </div>

          {/* Premium Logo Gallery */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {logoProjects.map((project, index) => (
              <div key={project.id} className="group relative">
                <div className="neon-card rounded-2xl overflow-hidden hover-lift transition-all duration-500 border-2 border-transparent hover:border-[#FF7AA2]/30">
                  {/* Logo Display */}
                  <div className="h-40 bg-gradient-to-br from-black to-black/80 relative flex items-center justify-center p-6">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                    
                    {/* Premium Badge */}
                    <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-md rounded-full px-3 py-1 border border-[#FF7AA2]/40">
                      <span className="text-[#FF7AA2] text-xs font-semibold">{project.category}</span>
                    </div>

                    {/* Exclusive Watermark */}
                    <div className="absolute top-3 left-3">
                      <div className="w-8 h-8 rounded-full bg-[#FF6868]/20 flex items-center justify-center">
                        <Crown className="w-4 h-4 text-[#FF6868]" />
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-5 bg-gradient-to-b from-black/50 to-black/80">
                    <h4 className="text-lg font-playfair font-semibold text-white mb-2 group-hover:text-[#FF7AA2] transition-colors duration-300">
                      {project.title}
                    </h4>
                    <p className="text-[#CCCCCC] leading-relaxed text-sm mb-3">
                      {project.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-[#FF7AA2]">
                        <Sparkles className="w-4 h-4 mr-2" />
                        <span className="text-xs font-medium">Premium Design</span>
                      </div>
                      <button className="p-2 rounded-lg bg-[#FF7AA2]/10 text-[#FF7AA2] hover:bg-[#FF7AA2] hover:text-white transition-all duration-300 opacity-50 cursor-not-allowed">
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Attractive CTA Section */}
          <div className="neon-card rounded-2xl p-8 text-center hover-lift border-2 border-[#FF7AA2]/20">
            <div className="max-w-xl mx-auto">
              <div className="w-16 h-16 rounded-2xl coral-gradient-bg mx-auto mb-4 flex items-center justify-center magic-glow relative">
                <Palette className="w-8 h-8 text-white" />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#FF6868] rounded-full flex items-center justify-center">
                  <Heart className="w-3 h-3 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-playfair font-semibold coral-gradient-text mb-3">
                Let's Create Magic Together
              </h3>
              <p className="text-[#CCCCCC] leading-relaxed mb-4">
                Ready to bring your brand vision to life? I design logos that tell your unique story and make your business shine.
              </p>
              <p className="text-[#FF7AA2] text-sm mb-6 font-medium">
                ✨ Professional • Unique • Memorable ✨
              </p>
              <button className="coral-gradient-bg text-white px-8 py-3 rounded-2xl font-medium text-lg hover:opacity-90 transition-opacity relative overflow-hidden group">
                <span className="relative z-10">Start Your Design Journey</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF7AA2] to-[#FF6868] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <p className="text-xs text-[#CCCCCC]/60 mt-3">Let's discuss your project today!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NRCreations;
