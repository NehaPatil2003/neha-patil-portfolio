
import { Code, Globe, Database, Palette } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Backend Development',
      description: 'Java, Spring Boot, RESTful APIs',
      color: 'from-[#FF6868] to-[#FFB3B3]'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Frontend Development', 
      description: 'HTML/CSS/JS websites',
      color: 'from-[#FF7AA2] to-[#FFB3B3]'
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Database Optimization',
      description: 'SQL, Data modeling',
      color: 'from-[#FF6868] to-[#FF7AA2]'
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: 'Logo Design',
      description: 'Branding & personalized creations',
      color: 'from-[#FF7AA2] to-[#FFB3B3]'
    }
  ];

  return (
    <section id="services" className="py-12 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-4">
              My <span className="coral-gradient-text">Services</span>
            </h2>
            <div className="w-16 h-1 coral-gradient-bg mx-auto mb-4"></div>
            <p className="text-[#CCCCCC] max-w-xl mx-auto">
              From robust backend systems to creative design solutions
            </p>
          </div>

          {/* Services Grid - Compact */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="neon-card rounded-xl p-6 hover-lift group text-center"
              >
                {/* Icon */}
                <div className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 magic-glow`}>
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-playfair font-semibold text-white mb-2 group-hover:text-[#FF7AA2] transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-[#CCCCCC] text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* Compact Call to Action */}
          <div className="text-center mt-10">
            <div className="neon-card rounded-xl p-6 max-w-lg mx-auto">
              <h3 className="text-xl font-playfair font-semibold text-white mb-3">
                Ready to work together?
              </h3>
              <p className="text-[#CCCCCC] mb-4 text-sm">
                Let's discuss your project and bring your ideas to life.
              </p>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="coral-gradient-bg text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
