
import { ExternalLink, Heart } from 'lucide-react';

const NRCreations = () => {
  const logoProjects = [
    {
      id: 1,
      title: 'Minimal Identity for Creator X',
      description: 'Clean, modern logo design focusing on simplicity and brand recognition',
      category: 'Personal Brand',
      color: 'from-purple-500 to-pink-500',
      initials: 'CX'
    },
    {
      id: 2,
      title: 'Modern Logo for Startup Y',
      description: 'Dynamic startup identity with growth-focused visual elements',
      category: 'Startup',
      color: 'from-blue-500 to-cyan-500',
      initials: 'SY'
    },
    {
      id: 3,
      title: 'Elegant Branding for Business Z',
      description: 'Sophisticated business identity with professional appeal',
      category: 'Corporate',
      color: 'from-green-500 to-teal-500',
      initials: 'BZ'
    },
    {
      id: 4,
      title: 'Creative Studio Brand',
      description: 'Artistic and expressive identity for creative professionals',
      category: 'Creative',
      color: 'from-orange-500 to-red-500',
      initials: 'CS'
    }
  ];

  return (
    <section id="nr-creations" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-portfolio-coral to-portfolio-teal rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-bold text-lg">NR</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white">
                Visual Creations by <span className="gradient-text">NR</span>
              </h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-portfolio-coral to-portfolio-teal mx-auto mb-8"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Where creativity meets strategy. Crafting memorable brand identities that tell your story.
            </p>
          </div>

          {/* Brand Philosophy */}
          <div className="glass-card rounded-2xl p-8 mb-16 text-center">
            <div className="flex items-center justify-center mb-6">
              <Heart className="w-8 h-8 text-portfolio-coral mr-3" />
              <h3 className="text-2xl font-playfair font-semibold text-white">Design Philosophy</h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
              At NR, every design tells a story. I believe in creating visual identities that are not just beautiful, 
              but meaningful — combining the logical thinking of an engineer with the creative vision of an artist. 
              Each logo is crafted with purpose, passion, and pixel-perfect precision.
            </p>
          </div>

          {/* Logo Gallery */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {logoProjects.map((project) => (
              <div
                key={project.id}
                className="glass-card rounded-2xl overflow-hidden hover-lift group"
              >
                {/* Logo Display */}
                <div className={`h-64 bg-gradient-to-br ${project.color} relative flex items-center justify-center`}>
                  <div className="text-6xl font-playfair font-bold text-white/90">
                    {project.initials}
                  </div>
                  <div className="absolute top-4 right-4 bg-black/20 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-white text-sm font-medium">{project.category}</span>
                  </div>
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors">
                      <ExternalLink className="w-6 h-6" />
                    </button>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h4 className="text-xl font-playfair font-semibold text-white mb-2 group-hover:text-portfolio-coral transition-colors duration-300">
                    {project.title}
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* NR Brand Story */}
          <div className="glass-card rounded-2xl p-8 text-center">
            <div className="max-w-2xl mx-auto">
              <div className="w-20 h-20 bg-gradient-to-br from-portfolio-coral to-portfolio-teal rounded-full flex items-center justify-center mx-auto mb-6 animate-glow">
                <span className="text-white font-bold text-2xl">NR</span>
              </div>
              <h3 className="text-2xl font-playfair font-semibold text-white mb-4">
                The Story Behind NR
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                NR represents the fusion of <span className="text-portfolio-coral font-semibold">N</span>eha's technical precision and creative 
                <span className="text-portfolio-teal font-semibold"> R</span>evolution. It's where engineering logic meets artistic intuition, 
                creating designs that are both functionally sound and visually compelling.
              </p>
              <button className="bg-gradient-to-r from-portfolio-coral to-portfolio-teal text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Commission Your Logo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NRCreations;
