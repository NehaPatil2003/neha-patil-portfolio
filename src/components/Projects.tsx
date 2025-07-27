
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: 'Automatic Form Filler',
      description: 'Smart web automation tool for seamless form completion with advanced scripting capabilities.',
      tech: ['JavaScript', 'Web Automation', 'Chrome Extensions'],
      image: '/api/placeholder/300/200',
      links: {
        github: '#'
      },
      status: 'In Progress'
    },
    {
      title: 'Brewed Bliss Café',
      description: 'Beautiful café website with comprehensive REST APIs, stunning UI, and smooth user experience.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Spring Boot'],
      image: '/lovable-uploads/474176f1-232a-4b81-8a8e-7ce8eafd9fa3.png',
      links: {
        live: '#',
        github: '#'
      },
      featured: true
    },
    {
      title: 'Ecobin Tracer',
      description: 'Innovative waste management solution improving efficiency by 35% with real-time tracking.',
      tech: ['JavaScript', 'Firebase', 'Real-time DB'],
      image: '/lovable-uploads/52b14211-1eaa-40d6-a5fe-daa685b5aaec.png',
      links: {
        live: '#',
        github: '#'
      },
      featured: true
    },
    {
      title: 'TextUtils App',
      description: 'Powerful text manipulation tool with dark mode, speech synthesis, and processing utilities.',
      tech: ['React', 'JavaScript', 'Web APIs'],
      image: '/lovable-uploads/0bb6f43d-759a-4ed4-8828-1e62b506c3aa.png',
      links: {
        live: '#',
        github: '#'
      }
    },
    {
      title: 'Smart Healthcare System',
      description: 'ML-powered disease detection with 90% accuracy. Presented at IEEE CONIT 2024.',
      tech: ['Machine Learning', 'Python', 'Research'],
      image: '/lovable-uploads/493fd520-47ee-4fe3-99fc-2e1b00507175.png',
      links: {
        paper: '#',
        github: '#'
      },
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
              My <span className="coral-gradient-text">Projects</span>
            </h2>
            <div className="w-24 h-1 coral-gradient-bg mx-auto mb-6 rounded-full"></div>
            <p className="text-[#CCCCCC] max-w-2xl mx-auto text-lg leading-relaxed">
              Crafted with passion, built with precision
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="neon-card rounded-2xl overflow-hidden hover-lift group"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {project.status && (
                    <div className="absolute top-3 right-3 bg-[#FF7AA2] text-white px-3 py-1 rounded-full text-xs font-medium magic-glow">
                      {project.status}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-4">
                    <div className="flex space-x-3">
                      <a 
                        href="https://github.com/NehaPatil2003" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Button size="sm" className="coral-gradient-bg text-white text-xs px-4 py-2">
                          <ExternalLink className="w-3 h-3 mr-1" />
                          Live
                        </Button>
                      </a>
                      <a 
                        href="https://github.com/NehaPatil2003" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Button size="sm" variant="outline" className="border-[#FF7AA2] text-[#FF7AA2] hover:bg-[#FF7AA2] hover:text-white text-xs px-4 py-2">
                          <Github className="w-3 h-3 mr-1" />
                          Code
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-lg font-playfair font-semibold text-white mb-3 group-hover:text-[#FF7AA2] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-[#CCCCCC] mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-[#FF7AA2]/20 text-[#FF7AA2] rounded-full text-xs font-medium border border-[#FF7AA2]/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More */}
          <div className="text-center mt-12">
            <a 
              href="https://github.com/NehaPatil2003" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                size="lg" 
                variant="outline" 
                className="border-[#FF7AA2]/40 text-[#FF7AA2] hover:bg-[#FF7AA2]/10 hover:text-white px-8 py-3"
              >
                View All on GitHub
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
