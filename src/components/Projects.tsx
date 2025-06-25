
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: 'Brewed Bliss Café',
      description: 'A comprehensive café website built with HTML, CSS, JS, and Spring Boot featuring full REST APIs and responsive UI design.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Spring Boot', 'REST APIs'],
      image: '/api/placeholder/400/250',
      links: {
        live: '#',
        github: '#'
      },
      featured: true
    },
    {
      title: 'Ecobin Tracer (2024)',
      description: 'Innovative waste management system using JavaScript, Firebase, and modern web technologies. Improved efficiency by 35%.',
      tech: ['JavaScript', 'Firebase', 'HTML/CSS', 'Real-time DB'],
      image: '/api/placeholder/400/250',
      links: {
        live: '#',
        github: '#'
      },
      featured: true
    },
    {
      title: 'Smart Healthcare in Smart Cities',
      description: 'ML-based disease detection system with 90% accuracy. Presented as oral paper at IEEE CONIT 2024.',
      tech: ['Machine Learning', 'Python', 'Data Analysis', 'Research'],
      image: '/api/placeholder/400/250',
      links: {
        paper: '#',
        github: '#'
      },
      featured: true
    },
    {
      title: 'TextUtils App',
      description: 'Text manipulation tool featuring dark mode, speech synthesis, and various text processing utilities.',
      tech: ['React', 'JavaScript', 'CSS3', 'Web APIs'],
      image: '/api/placeholder/400/250',
      links: {
        live: '#',
        github: '#'
      }
    },
    {
      title: 'Automatic Form Filler',
      description: 'Web automation tool for auto-filling online forms. Currently in development with advanced scripting.',
      tech: ['JavaScript', 'Web Automation', 'Chrome Extensions'],
      image: '/api/placeholder/400/250',
      links: {
        github: '#'
      },
      status: 'In Progress'
    }
  ];

  const tags = ['All', 'Full-stack', 'Research', 'Automation', 'In Progress'];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-portfolio-purple to-portfolio-coral mx-auto mb-8"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              A showcase of my technical journey, from backend APIs to creative solutions
            </p>
          </div>

          {/* Filter Tags */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {tags.map((tag) => (
              <button
                key={tag}
                className="px-6 py-2 rounded-full bg-portfolio-navy-light text-gray-300 hover:bg-portfolio-purple hover:text-white transition-all duration-300 border border-portfolio-purple/30"
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`glass-card rounded-2xl overflow-hidden hover-lift group ${
                  project.featured ? 'lg:col-span-1' : ''
                }`}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <div className="w-full h-48 bg-gradient-to-br from-portfolio-purple/20 to-portfolio-coral/20 flex items-center justify-center">
                    <span className="text-6xl font-playfair font-bold text-white/20">
                      {project.title.split(' ').map(word => word[0]).join('')}
                    </span>
                  </div>
                  {project.status && (
                    <div className="absolute top-4 right-4 bg-portfolio-coral text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.status}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-portfolio-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <div className="flex space-x-3">
                      {project.links.live && (
                        <Button size="sm" className="bg-portfolio-purple hover:bg-portfolio-purple/80">
                          <ExternalLink className="w-4 h-4 mr-1" />
                          Live
                        </Button>
                      )}
                      {project.links.github && (
                        <Button size="sm" variant="outline" className="border-white text-white hover:bg-white hover:text-portfolio-navy">
                          <Github className="w-4 h-4 mr-1" />
                          Code
                        </Button>
                      )}
                      {project.links.paper && (
                        <Button size="sm" className="bg-portfolio-coral hover:bg-portfolio-coral/80">
                          <ExternalLink className="w-4 h-4 mr-1" />
                          Paper
                        </Button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-playfair font-semibold text-white mb-3 group-hover:text-portfolio-purple transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-portfolio-purple/20 text-portfolio-purple rounded-full text-sm font-medium border border-portfolio-purple/30"
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
            <Button 
              size="lg" 
              variant="outline" 
              className="border-portfolio-purple text-portfolio-purple hover:bg-portfolio-purple hover:text-white"
            >
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
