
import { useState } from 'react';
import { Mail, Github, Linkedin, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await emailjs.send(
        'service_w94922b',
        'template_g0pv41u',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'QMfoU2kvq-YRhwzEb'
      );
      
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  };

  const socialLinks = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'nehahpatil2003@gmail.com',
      href: 'mailto:nehahpatil2003@gmail.com',
      color: 'from-[#FF6868] to-[#FFB3B3]'
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: 'GitHub',
      value: '@NehaPatil2003',
      href: 'https://github.com/NehaPatil2003',
      color: 'from-[#FF7AA2] to-[#FFB3B3]'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      value: 'Neha Patil',
      href: 'https://www.linkedin.com/in/neha-patil-013533243',
      color: 'from-[#FF6868] to-[#FF7AA2]'
    },
    {
      icon: <Award className="w-6 h-6" />,
      label: 'HackerRank',
      value: '@nehahpatil2003',
      href: 'https://www.hackerrank.com/profile/nehahpatil2003',
      color: 'from-[#FF7AA2] to-[#FFB3B3]'
    },
    {
      icon: <Award className="w-6 h-6" />,
      label: 'LeetCode',
      value: '@nehapatil2003',
      href: 'https://leetcode.com/u/nehapatil2003',
      color: 'from-[#FF6868] to-[#FF7AA2]'
    },
    {
      icon: <Award className="w-6 h-6" />,
      label: 'CodeChef',
      value: '@patilneha2003',
      href: 'https://www.codechef.com/users/patilneha2003',
      color: 'from-[#FF7AA2] to-[#FFB3B3]'
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
              Let's <span className="coral-gradient-text">Connect</span>
            </h2>
            <div className="w-24 h-1 coral-gradient-bg mx-auto mb-8"></div>
            <p className="text-[#CCCCCC] max-w-2xl mx-auto">
              Ready to connect? I'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="neon-card rounded-2xl p-8">
              <h3 className="text-2xl font-playfair font-semibold text-white mb-6">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#CCCCCC] mb-2">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-black/50 border-[#CCCCCC]/30 text-white focus:border-[#FF6868]"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#CCCCCC] mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-black/50 border-[#CCCCCC]/30 text-white focus:border-[#FF6868]"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#CCCCCC] mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-black/50 border-[#CCCCCC]/30 text-white focus:border-[#FF6868] min-h-[120px]"
                    placeholder="Message"
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full coral-gradient-bg hover:opacity-90 transition-opacity text-white"
                  size="lg"
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info & Social Links */}
            <div className="space-y-8">
              {/* Quick Contact */}
              <div className="neon-card rounded-2xl p-8">
                <h3 className="text-2xl font-playfair font-semibold text-white mb-6">
                  Get In Touch
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-[#FF6868] mr-3" />
                    <div>
                      <p className="text-white font-medium">Email</p>
                      <p className="text-[#CCCCCC]">nehahpatil2003@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-[#FF6868] mr-3" />
                    <div>
                      <p className="text-white font-medium">Phone</p>
                      <p className="text-[#CCCCCC]">+91 9096024455</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="neon-card rounded-2xl p-8">
                <h3 className="text-2xl font-playfair font-semibold text-white mb-6">
                  Find Me Online
                </h3>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col items-center p-4 rounded-xl bg-black/30 hover:bg-black/50 transition-all duration-300 hover:-translate-y-2"
                    >
                      <div className={`w-12 h-12 bg-gradient-to-br ${link.color} rounded-full flex items-center justify-center mb-3 text-white group-hover:scale-110 transition-transform duration-300`}>
                        {link.icon}
                      </div>
                      <h4 className="text-white font-semibold text-sm mb-1">{link.label}</h4>
                      <p className="text-[#CCCCCC] text-xs text-center">{link.value}</p>
                    </a>
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

export default Contact;
