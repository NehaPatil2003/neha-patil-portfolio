
import { Code, Globe, Database, Palette } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Backend Development',
      description: 'Java, Spring Boot, RESTful APIs',
      details: ['Scalable API design', 'Database integration', 'Security implementation', 'Performance optimization'],
      color: 'from-portfolio-purple to-portfolio-purple-light'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Frontend Development',
      description: 'HTML/CSS/JS websites',
      details: ['Responsive design', 'Modern UI/UX', 'Cross-browser compatibility', 'Performance optimization'],
      color: 'from-portfolio-coral to-red-400'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Database Optimization',
      description: 'SQL, Data modeling',
      details: ['Query optimization', 'Database design', 'Data migration', 'Performance tuning'],
      color: 'from-portfolio-teal to-cyan-400'
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Logo Design',
      description: 'Branding & personalized creations',
      details: ['Brand identity', 'Custom logos', 'Visual storytelling', 'Creative concepts'],
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
              My <span className="gradient-text">Services</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-portfolio-purple to-portfolio-coral mx-auto mb-8"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              From robust backend systems to creative design solutions, I bring ideas to life
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-8 hover-lift group text-center"
              >
                {/* Icon */}
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-playfair font-semibold text-white mb-3 group-hover:text-portfolio-purple transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 mb-6">
                  {service.description}
                </p>

                {/* Details */}
                <ul className="space-y-2 text-sm text-gray-400">
                  {service.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-portfolio-purple rounded-full mr-3 flex-shrink-0"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="glass-card rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-playfair font-semibold text-white mb-4">
                Ready to work together?
              </h3>
              <p className="text-gray-300 mb-6">
                Let's discuss your project and bring your ideas to life with clean code and creative design.
              </p>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-portfolio-purple to-portfolio-coral text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
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
