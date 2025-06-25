
import { GraduationCap, Award, Heart } from 'lucide-react';

const About = () => {
  const education = [
    {
      period: '2021–2025',
      degree: 'B.Tech IT',
      institution: 'PCCOE Pune',
      score: 'CGPA 8.26',
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
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-24 h-1 nr-gradient mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Profile Image - Updated to include actual NR logo */}
            <div className="relative">
              <div className="glass-card rounded-2xl p-8 text-center">
                <div className="w-64 h-64 mx-auto mb-6 relative">
                  <div className="w-full h-full nr-gradient rounded-full p-1 nr-glow">
                    <div className="w-full h-full bg-portfolio-navy rounded-full flex items-center justify-center">
                      {/* Display the actual NR logo */}
                      <img 
                        src="/lovable-uploads/4c8d6a1c-1fe6-431b-b3fe-7968a07a9d5e.png" 
                        alt="NR Logo" 
                        className="w-32 h-32 object-contain"
                      />
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 w-16 h-16 nr-gradient rounded-full flex items-center justify-center animate-glow">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-playfair font-semibold text-white mb-2">Neha Hemant Patil</h3>
                <p className="text-portfolio-coral font-medium">IT Engineer × Designer</p>
              </div>
            </div>

            {/* Bio Content */}
            <div className="space-y-8">
              <div className="glass-card rounded-2xl p-8">
                <h3 className="text-2xl font-playfair font-semibold text-white mb-6">My Story</h3>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    <span className="gradient-text font-semibold">Hello!</span> I'm Neha Patil — an IT engineering graduate, 
                    Java + Spring Boot backend developer with a love for clean APIs, and a frontend enthusiast skilled in 
                    HTML, CSS, JavaScript, and SQL. Oh, and yes — the creative spark behind <span className="text-portfolio-coral font-semibold">NR</span>.
                  </p>
                  <p>
                    I'm an <span className="text-portfolio-orange font-semibold">absolute learner</span> and a true tech enthusiast 
                    who thrives on curiosity, consistency, and creation.
                  </p>
                  <p>
                    I believe great tech starts with great humans. And the best engineers? They build with clarity, 
                    evolve with consistency — and that's exactly what I'm doing, <span className="gradient-text font-semibold">every single day</span>.
                  </p>
                </div>
              </div>

              {/* Education Timeline */}
              <div className="glass-card rounded-2xl p-8">
                <h3 className="text-2xl font-playfair font-semibold text-white mb-6">Education Timeline</h3>
                <div className="space-y-6">
                  {education.map((item, index) => (
                    <div key={index} className="flex items-start space-x-4 group">
                      <div className="flex-shrink-0 w-12 h-12 nr-gradient rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                          <h4 className="text-lg font-semibold text-white">{item.degree}</h4>
                          <span className="text-portfolio-orange font-medium">{item.period}</span>
                        </div>
                        <p className="text-gray-300 mb-1">{item.institution}</p>
                        <p className="text-portfolio-coral font-semibold">{item.score}</p>
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
