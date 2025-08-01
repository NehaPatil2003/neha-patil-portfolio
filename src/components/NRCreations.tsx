
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
    <section id="creative-side" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Palette className="w-6 h-6 text-[#FF6868] mr-2" />
              <h2 className="text-3xl font-playfair font-bold text-white">
                Creative Side Projects
              </h2>
              <Sparkles className="w-6 h-6 text-[#FF6868] ml-2" />
            </div>
            <div className="w-16 h-1 coral-gradient-bg mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content */}
          <div className="neon-card rounded-xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-playfair font-semibold coral-gradient-text mb-4">
                🎨 Creative Outlet — NR Creates
              </h3>
              <p className="text-[#CCCCCC] mb-6 leading-relaxed">
                While my core focus is backend engineering, I enjoy exploring design through my creative side project — <strong className="text-white">NR Creates</strong>.
              </p>
              <p className="text-[#CCCCCC] mb-6 leading-relaxed">
                It's a personal space where I occasionally craft logos and brand visuals. These side projects help me sharpen visual thinking and attention to detail, which complements my work as a developer.
              </p>
            </div>

            {/* Project Examples */}
            <div className="mb-8">
              <h4 className="text-lg font-playfair font-semibold text-white mb-4 text-center">
                This includes lightweight collaborations like:
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 p-4 rounded-lg bg-black/30 border border-[#FF7AA2]/20">
                  <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                    <img 
                      src="/lovable-uploads/ca48b290-2259-4d9b-837d-5f4a76e2e1be.png" 
                      alt="Yawal News Logo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h5 className="text-white font-medium">Yawal News</h5>
                    <p className="text-[#CCCCCC] text-sm">Media Portal Branding</p>
                  </div>
                  <div className="w-8 h-8 rounded-full overflow-hidden ml-auto">
                    <img 
                      src="/lovable-uploads/4c8d6a1c-1fe6-431b-b3fe-7968a07a9d5e.png" 
                      alt="NR Logo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-4 rounded-lg bg-black/30 border border-[#FF7AA2]/20">
                  <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                    <img 
                      src="/lovable-uploads/e0e5aaa2-ed81-4254-b4f9-49fcc30f3f33.png" 
                      alt="Sudarshan Lab Logo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h5 className="text-white font-medium">Sudarshan Lab</h5>
                    <p className="text-[#CCCCCC] text-sm">Digital Lab Identity</p>
                  </div>
                  <div className="w-8 h-8 rounded-full overflow-hidden ml-auto">
                    <img 
                      src="/lovable-uploads/4c8d6a1c-1fe6-431b-b3fe-7968a07a9d5e.png" 
                      alt="NR Logo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Instagram Link */}
            <div className="text-center">
              <p className="text-[#CCCCCC] mb-4">
                You can find more of my creative experiments on Instagram:
              </p>
              <a 
                href="https://instagram.com/nr_creates__" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-[#FF7AA2] hover:text-white transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
                <span className="font-medium">@nr_creates__</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NRCreations;
