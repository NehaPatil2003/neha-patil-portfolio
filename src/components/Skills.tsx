
import { Code, Database, Palette, Users, Lightbulb, MessageSquare } from 'lucide-react';

const Skills = () => {
  const technicalSkills = [
    { name: 'Java & Spring Boot', level: 90, icon: <Code className="w-5 h-5" /> },
    { name: 'RESTful APIs', level: 85, icon: <Code className="w-5 h-5" /> },
    { name: 'SQL & Oracle SQL', level: 80, icon: <Database className="w-5 h-5" /> },
    { name: 'HTML5 & CSS3', level: 85, icon: <Code className="w-5 h-5" /> },
    { name: 'JavaScript', level: 75, icon: <Code className="w-5 h-5" /> },
    { name: 'Firebase & Git', level: 80, icon: <Database className="w-5 h-5" /> },
  ];

  const softSkills = [
    { name: 'Absolute Learner Mindset', icon: <Lightbulb className="w-6 h-6" /> },
    { name: 'Strong Communicator & Listener', icon: <MessageSquare className="w-6 h-6" /> },
    { name: 'Team Leadership', icon: <Users className="w-6 h-6" /> },
    { name: 'Creative Problem Solver', icon: <Palette className="w-6 h-6" /> },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
              My <span className="gradient-text">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-portfolio-purple to-portfolio-coral mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <div className="glass-card rounded-2xl p-8 hover-lift">
              <h3 className="text-2xl font-playfair font-semibold text-white mb-8 flex items-center">
                <Code className="w-8 h-8 text-portfolio-purple mr-3" />
                Technical Skills
              </h3>
              <div className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <div className="text-portfolio-purple group-hover:text-portfolio-coral transition-colors duration-300">
                          {skill.icon}
                        </div>
                        <span className="text-white font-medium">{skill.name}</span>
                      </div>
                      <span className="text-portfolio-purple font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-portfolio-navy-light rounded-full h-2 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-portfolio-purple to-portfolio-coral rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="glass-card rounded-2xl p-8 hover-lift">
              <h3 className="text-2xl font-playfair font-semibold text-white mb-8 flex items-center">
                <Users className="w-8 h-8 text-portfolio-coral mr-3" />
                Soft Skills
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {softSkills.map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex flex-col items-center text-center p-6 rounded-xl bg-portfolio-navy-light/50 hover:bg-portfolio-navy-light transition-all duration-300 hover:-translate-y-2">
                      <div className="w-16 h-16 bg-gradient-to-br from-portfolio-purple to-portfolio-coral rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <div className="text-white">
                          {skill.icon}
                        </div>
                      </div>
                      <h4 className="text-white font-semibold text-sm leading-tight">{skill.name}</h4>
                    </div>
                  </div>
                ))}
              </div>

              {/* Special Achievement */}
              <div className="mt-8 p-6 bg-gradient-to-r from-portfolio-purple/20 to-portfolio-coral/20 rounded-xl border border-portfolio-purple/30">
                <h4 className="text-lg font-semibold text-white mb-2">Leadership Experience</h4>
                <p className="text-gray-300">NSS Campaign Lead</p>
                <p className="text-sm text-portfolio-purple mt-1">Leading community service initiatives and team coordination</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
