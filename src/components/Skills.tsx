
import { Code, Database, Palette, Users, Lightbulb, MessageSquare } from 'lucide-react';

const Skills = () => {
  const technicalSkills = [
    { name: 'Java & Spring Boot', icon: <Code className="w-5 h-5" /> },
    { name: 'RESTful APIs', icon: <Code className="w-5 h-5" /> },
    { name: 'SQL & Oracle SQL', icon: <Database className="w-5 h-5" /> },
    { name: 'HTML5 & CSS3', icon: <Code className="w-5 h-5" /> },
    { name: 'JavaScript', icon: <Code className="w-5 h-5" /> },
    { name: 'Firebase & Git', icon: <Database className="w-5 h-5" /> },
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
              My <span className="coral-gradient-text">Skills</span>
            </h2>
            <div className="w-24 h-1 coral-gradient-bg mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <div className="neon-card rounded-2xl p-8 hover-lift">
              <h3 className="text-2xl font-playfair font-semibold text-white mb-8 flex items-center">
                <Code className="w-8 h-8 text-[#FF7AA2] mr-3" />
                Technical Skills
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {technicalSkills.map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-[#CCCCCC]/10">
                      <div className="text-[#FF7AA2] group-hover:text-[#FF6868] transition-colors duration-300">
                        {skill.icon}
                      </div>
                      <span className="text-white font-medium">{skill.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="neon-card rounded-2xl p-8 hover-lift">
              <h3 className="text-2xl font-playfair font-semibold text-white mb-8 flex items-center">
                <Users className="w-8 h-8 text-[#FF6868] mr-3" />
                Soft Skills
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {softSkills.map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 border border-[#CCCCCC]/10">
                      <div className="w-16 h-16 coral-gradient-bg rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
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
              <div className="mt-8 p-6 bg-gradient-to-r from-[#FF7AA2]/20 to-[#FF6868]/20 rounded-xl border border-[#FF7AA2]/30">
                <h4 className="text-lg font-semibold text-white mb-2">Leadership Experience</h4>
                <p className="text-[#CCCCCC]">NSS Campaign Lead</p>
                <p className="text-sm text-[#FF7AA2] mt-1">Leading community service initiatives and team coordination</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
