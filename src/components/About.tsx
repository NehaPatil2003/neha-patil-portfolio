
import { GraduationCap, Award, Code, Database } from 'lucide-react';

const About = () => {
  const education = [
    {
      period: '2021–2025',
      degree: 'B.Tech IT',
      institution: 'PCCOE Pune',
      score: 'CGPA 8.35',
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      period: '2020–2021',
      degree: '12th Grade',
      institution: 'PMT Mahila Kotecha College, Bhusaval',
      score: '90%',
      icon: <Award className="w-6 h-6" />
    },
    {
      period: '2018–2019',
      degree: '10th Grade',
      institution: 'Shree Swaminarayan Gurukul, Savada',
      score: '84%',
      icon: <Award className="w-6 h-6" />
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      {/* Subtle grid background */}
      <div className="absolute inset-0 grid-overlay opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
              About <span className="coral-gradient-text">Me</span>
            </h2>
            <div className="w-24 h-1 coral-gradient-bg mx-auto rounded-full animate-neon-glow"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Enhanced Profile Image Section */}
            <div className="relative">
              <div className="neon-card rounded-2xl p-8 text-center hover-lift">
                <div className="w-64 h-64 mx-auto mb-6 relative">
                  <div className="w-full h-full coral-gradient-bg rounded-2xl p-1 animate-neon-glow">
                    <div className="w-full h-full bg-portfolio-black rounded-2xl flex items-center justify-center border-2 border-dashed border-portfolio-coral/30">
                      {/* Placeholder for profile photo */}
                      <div className="text-center">
                        <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-portfolio-coral/20 flex items-center justify-center">
                          <Code className="w-10 h-10 text-portfolio-coral" />
                        </div>
                        <p className="text-portfolio-grid-gray text-sm">Your Photo Here</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 w-16 h-16 neon-gradient-bg rounded-full flex items-center justify-center animate-glow-pulse">
                    <Database className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-playfair font-semibold text-white mb-2">Neha Hemant Patil</h3>
                <p className="coral-gradient-text font-medium text-lg">IT Engineer & Backend Developer</p>
              </div>
            </div>

            {/* Bio Content */}
            <div className="space-y-8">
              <div className="neon-card rounded-2xl p-8 hover-lift">
                <h3 className="text-2xl font-playfair font-semibold text-white mb-6 coral-gradient-text">My Engineering Journey</h3>
                <div className="space-y-4 text-portfolio-grid-gray leading-relaxed">
                  <p>
                    <span className="coral-gradient-text font-semibold">Hello!</span> I'm Neha Patil — an IT engineering graduate with expertise in 
                    <span className="text-portfolio-coral font-semibold"> Java + Spring Boot backend development</span>, passionate about building clean, scalable APIs and robust database solutions.
                  </p>
                  <p>
                    Skilled in <span className="text-portfolio-coral-light font-semibold">HTML, CSS, JavaScript, and SQL</span>, I bridge the gap between 
                    backend logic and frontend experience. I'm an <span className="text-portfolio-coral-light font-semibold">absolute learner</span> who 
                    thrives on solving complex technical challenges.
                  </p>
                  <p>
                    Beyond engineering, I explore creative design through my brand <span className="coral-gradient-text font-semibold">NR</span> — 
                    because great engineers think both logically and creatively.
                  </p>
                </div>
              </div>

              {/* Enhanced Education Timeline */}
              <div className="neon-card rounded-2xl p-8 hover-lift">
                <h3 className="text-2xl font-playfair font-semibold text-white mb-6 coral-gradient-text">Education Timeline</h3>
                <div className="space-y-6">
                  {education.map((item, index) => (
                    <div key={index} className="flex items-start space-x-4 group">
                      <div className="flex-shrink-0 w-12 h-12 coral-gradient-bg rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 animate-neon-glow">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                          <h4 className="text-lg font-semibold text-white">{item.degree}</h4>
                          <span className="text-portfolio-coral-light font-medium">{item.period}</span>
                        </div>
                        <p className="text-portfolio-grid-gray mb-1">{item.institution}</p>
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
