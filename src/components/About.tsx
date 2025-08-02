
import { GraduationCap, Award, Code, Database } from 'lucide-react';

const About = () => {
  const education = [
    {
      period: '2021–2025',
      degree: 'B.Tech IT',
      institution: 'PCCOE Pune',
      score: 'CGPA 8.35',
      icon: <GraduationCap className="w-5 h-5" />
    },
    {
      period: '2020–2021', 
      degree: '12th Grade',
      institution: 'PMT Mahila Kotecha College, Bhusaval',
      score: '90%',
      icon: <Award className="w-5 h-5" />
    },
    {
      period: '2018–2019',
      degree: '10th Grade', 
      institution: 'Shree Swaminarayan Gurukul, Savada',
      score: '84%',
      icon: <Award className="w-5 h-5" />
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Enhanced Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-playfair font-bold text-white mb-8">
              About <span className="coral-gradient-text">Me</span>
            </h2>
            <div className="w-32 h-1 coral-gradient-bg mx-auto mb-10"></div>
            <p className="text-[#CCCCCC] max-w-2xl mx-auto text-lg leading-relaxed">
              Passionate <span className="text-[#FF7AA2] font-semibold">IT Engineer</span> in Java, Spring Boot, and full-stack development.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Profile Section */}
            <div className="relative">
              <div className="relative">
                  <div className="w-72 h-72 mx-auto mb-6 relative group">
                    {/* Professional square photo box - fixed position */}
                    <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl profile-photo border-2 border-[#FF7AA2]/20" 
                         style={{
                           boxShadow: '0 20px 40px rgba(255, 104, 104, 0.3), 0 0 80px rgba(255, 122, 162, 0.2)',
                           zIndex: 20,
                           position: 'sticky',
                           top: '2rem'
                         }}>
                      <img 
                        src="/lovable-uploads/5c56ce14-3d2e-433e-81ab-ebf9bf063a80.png" 
                        alt="Neha Patil"
                        className="w-full h-full object-cover"
                        style={{
                          filter: 'brightness(1.05) contrast(1.02)',
                          objectPosition: 'center'
                        }}
                      />
                      {/* Professional overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                    </div>
                  
                  {/* Floating elements around photo */}
                  <div className="absolute -top-6 -right-6 w-16 h-16 coral-gradient-bg rounded-full flex items-center justify-center animate-bounce"
                       style={{ animationDelay: '0.5s' }}>
                    <Database className="w-7 h-7 text-white" />
                  </div>
                  
                  <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-[#FF7AA2]/30 rounded-full animate-pulse"></div>
                  <div className="absolute top-1/2 -right-8 w-8 h-8 bg-[#FF6868]/40 rounded-full animate-ping"></div>
                </div>
                
                <div className="text-center relative z-10">
                  <h3 className="text-2xl font-playfair font-semibold text-white mb-2">Neha Hemant Patil</h3>
                  <p className="coral-gradient-text font-medium text-lg">IT Engineer & Backend Developer</p>
                </div>
              </div>
            </div>

            {/* Bio Content */}
            <div className="space-y-8">
              <div className="neon-card rounded-2xl p-6 hover-lift border-2 border-[#FF7AA2]/20">
                <h3 className="text-2xl font-playfair font-bold text-white mb-6 coral-gradient-text">IT Engineer & Problem Solver</h3>
                <div className="space-y-6 text-[#CCCCCC] leading-relaxed">
                  <p className="text-lg">
                    <span className="coral-gradient-text font-bold text-xl">Hey,</span> I'm Neha — an IT Engineer passionate about crafting practical backend solutions with 
                    <span className="text-[#FF7AA2] font-semibold">Java, Spring Boot</span>, and a problem-solver's mindset.
                  </p>
                  <p className="text-lg">
                    I care about writing <span className="text-[#FF7AA2] font-semibold">clean code</span>, designing systems that actually work, and 
                    always learning something new along the way.
                  </p>
                  <p className="text-lg">
                    When I'm not deep in logic, you'll find me crafting visual stories through <span className="coral-gradient-text font-bold">NR Creates</span> — 
                    where tech meets creativity.
                  </p>
                  <p className="text-lg coral-gradient-text font-semibold">
                    Let's build something that matters.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="px-3 py-1 bg-[#FF7AA2]/20 rounded-full text-[#FF7AA2] font-medium text-sm">Backend Development</span>
                    <span className="px-3 py-1 bg-[#FF6868]/20 rounded-full text-[#FF6868] font-medium text-sm">Frontend Development</span>
                    <span className="px-3 py-1 bg-[#FFB3B3]/20 rounded-full text-[#FFB3B3] font-medium text-sm">Problem Solving</span>
                    <span className="px-3 py-1 bg-[#FF7AA2]/20 rounded-full text-[#FF7AA2] font-medium text-sm">Team Collaboration</span>
                  </div>
                </div>
              </div>

              {/* Education Timeline */}
              <div className="neon-card rounded-2xl p-6 hover-lift">
                <h3 className="text-xl font-playfair font-semibold text-white mb-4 coral-gradient-text">Education</h3>
                <div className="space-y-6">
                  {education.map((item, index) => (
                    <div key={index} className="flex items-start space-x-4 group">
                      <div className="flex-shrink-0 w-12 h-12 coral-gradient-bg rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-500 magic-glow">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                          <h4 className="text-lg font-semibold text-white">{item.degree}</h4>
                          <span className="text-[#FF7AA2] font-medium">{item.period}</span>
                        </div>
                        <p className="text-[#CCCCCC] mb-1">{item.institution}</p>
                        <p className="coral-gradient-text font-semibold">{item.score}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
