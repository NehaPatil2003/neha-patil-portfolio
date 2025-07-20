
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
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
              About <span className="coral-gradient-text">Me</span>
            </h2>
            <div className="w-24 h-1 coral-gradient-bg mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Profile Section */}
            <div className="relative">
              <div className="relative">
                <div className="w-80 h-80 mx-auto mb-6 relative transform hover:scale-105 transition-all duration-500">
                  {/* Floating photo without box */}
                  <div className="absolute inset-0 rounded-full overflow-hidden shadow-2xl" 
                       style={{
                         transform: 'perspective(1000px) rotateY(-15deg) rotateX(5deg)',
                         boxShadow: '0 25px 50px rgba(255, 104, 104, 0.4), 0 0 100px rgba(255, 122, 162, 0.3)'
                       }}>
                    <img 
                      src="/lovable-uploads/15d61673-2b2a-4bbf-89a0-5e2db1443cf0.png" 
                      alt="Neha Patil"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                      style={{
                        filter: 'brightness(1.2) contrast(1.1)',
                        objectPosition: 'center 20%'
                      }}
                    />
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
              <div className="neon-card rounded-3xl p-8 hover-lift">
                <h3 className="text-2xl font-playfair font-semibold text-white mb-6 coral-gradient-text">My Journey</h3>
                <div className="space-y-6 text-[#CCCCCC] leading-relaxed">
                  <p className="text-lg">
                    <span className="coral-gradient-text font-semibold">Hello!</span> I'm Neha — an IT engineering graduate passionate about 
                    <span className="text-[#FF7AA2] font-medium"> crafting elegant backend solutions</span> with Java and Spring Boot.
                  </p>
                  <p className="text-lg">
                    I believe in <span className="text-[#FF7AA2] font-medium">clean code, scalable architecture</span>, and creating 
                    digital experiences that make a difference. Every project is an opportunity to learn and grow.
                  </p>
                  <p className="text-lg">
                    When I'm not coding, I explore creative design through my brand <span className="coral-gradient-text font-semibold">NR</span> — 
                    where logic meets creativity.
                  </p>
                </div>
              </div>

              {/* Education Timeline */}
              <div className="neon-card rounded-3xl p-8 hover-lift">
                <h3 className="text-2xl font-playfair font-semibold text-white mb-6 coral-gradient-text">Education</h3>
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
