
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: 'Automatic Form Filler',
      description: 'Web automation tool for auto-filling online forms. Currently in development with advanced scripting.',
      tech: ['JavaScript', 'Web Automation', 'Chrome Extensions'],
      image: '/api/placeholder/300/200',
      links: {
        github: '#'
      },
      status: 'In Progress'
    },
    {
      title: 'Brewed Bliss Café',
      description: 'A comprehensive café website built with HTML, CSS, JS, and Spring Boot featuring full REST APIs and responsive UI design.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Spring Boot', 'REST APIs'],
      image: '/lovable-uploads/474176f1-232a-4b81-8a8e-7ce8eafd9fa3.png',
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
      image: '/lovable-uploads/52b14211-1eaa-40d6-a5fe-daa685b5aaec.png',
      links: {
        live: '#',
        github: '#'
      },
      featured: true
    },
    {
      title: 'TextUtils App',
      description: 'Text manipulation tool featuring dark mode, speech synthesis, and various text processing utilities.',
      tech: ['React', 'JavaScript', 'CSS3', 'Web APIs'],
      image: '/lovable-uploads/0bb6f43d-759a-4ed4-8828-1e62b506c3aa.png',
      links: {
        live: '#',
        github: '#'
      }
    },
    {
      title: 'Smart Healthcare in Smart Cities',
      description: 'ML-based disease detection system with 90% accuracy. Presented as oral paper at IEEE CONIT 2024.',
      tech: ['Machine Learning', 'Python', 'Data Analysis', 'Research'],
      image: '/lovable-uploads/493fd520-47ee-4fe3-99fc-2e1b00507175.png',
      links: {
        paper: '#',
        github: '#'
      },
      featured: true
    }
  ];

  const tags = ['All', 'Full-stack', 'Research', 'Automation', 'In Progress'];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
              Featured <span className="coral-gradient-text">Projects</span>
            </h2>
            <div className="w-24 h-1 coral-gradient-bg mx-auto mb-6"></div>
            <p className="text-portfolio-grid-gray max-w-2xl mx-auto">
              A showcase of my technical journey, from backend APIs to creative solutions
            </p>
          </div>

          {/* Filter Tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {tags.map((tag) => (
              <button
                key={tag}
                className="px-4 py-2 rounded-full bg-portfolio-rich-black text-portfolio-grid-gray hover:bg-portfolio-coral hover:text-white transition-all duration-300 border border-portfolio-coral/30 text-sm"
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="neon-card rounded-xl overflow-hidden hover-lift group"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden h-40">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {project.status && (
                    <div className="absolute top-3 right-3 bg-portfolio-coral text-white px-2 py-1 rounded-full text-xs font-medium">
                      {project.status}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-portfolio-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-3">
                    <div className="flex space-x-2">
                      {project.links.live && (
                        <Button size="sm" className="coral-gradient-bg text-white text-xs px-3 py-1">
                          <ExternalLink className="w-3 h-3 mr-1" />
                          Live
                        </Button>
                      )}
                      {project.links.github && (
                        <Button size="sm" variant="outline" className="border-white text-white hover:bg-white hover:text-portfolio-black text-xs px-3 py-1">
                          <Github className="w-3 h-3 mr-1" />
                          Code
                        </Button>
                      )}
                      {project.links.paper && (
                        <Button size="sm" className="coral-gradient-bg text-white text-xs px-3 py-1">
                          <ExternalLink className="w-3 h-3 mr-1" />
                          Paper
                        </Button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-5">
                  <h3 className="text-lg font-playfair font-semibold text-white mb-2 group-hover:text-portfolio-coral transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-portfolio-grid-gray mb-3 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-portfolio-coral/20 text-portfolio-coral rounded-full text-xs font-medium border border-portfolio-coral/30"
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
          <div className="text-center mt-10">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-portfolio-coral text-portfolio-coral hover:bg-portfolio-coral hover:text-white"
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
