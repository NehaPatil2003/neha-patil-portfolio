
import { useState } from 'react';
import { Mail, Github, Linkedin, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const socialLinks = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'nehahpatil2003@gmail.com',
      href: 'mailto:nehahpatil2003@gmail.com',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: 'GitHub',
      value: '@nehapatil',
      href: '#',
      color: 'from-gray-700 to-gray-900'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      value: 'Neha Patil',
      href: '#',
      color: 'from-blue-600 to-blue-800'
    },
    {
      icon: <Award className="w-6 h-6" />,
      label: 'LeetCode',
      value: '@nehapatil',
      href: '#',
      color: 'from-orange-500 to-yellow-500'
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-portfolio-purple to-portfolio-coral mx-auto mb-8"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Ready to collaborate on your next project? I'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-playfair font-semibold text-white mb-6">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-portfolio-navy-light border-portfolio-purple/30 text-white focus:border-portfolio-purple"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-portfolio-navy-light border-portfolio-purple/30 text-white focus:border-portfolio-purple"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-portfolio-navy-light border-portfolio-purple/30 text-white focus:border-portfolio-purple min-h-[120px]"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-portfolio-purple to-portfolio-coral hover:opacity-90 transition-opacity"
                  size="lg"
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info & Social Links */}
            <div className="space-y-8">
              {/* Quick Contact */}
              <div className="glass-card rounded-2xl p-8">
                <h3 className="text-2xl font-playfair font-semibold text-white mb-6">
                  Get In Touch
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-portfolio-purple mr-3" />
                    <div>
                      <p className="text-white font-medium">Email</p>
                      <p className="text-gray-300">nehahpatil2003@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-portfolio-coral mr-3" />
                    <div>
                      <p className="text-white font-medium">Phone</p>
                      <p className="text-gray-300">+91 9096024455</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="glass-card rounded-2xl p-8">
                <h3 className="text-2xl font-playfair font-semibold text-white mb-6">
                  Find Me Online
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="group flex flex-col items-center p-4 rounded-xl bg-portfolio-navy-light/50 hover:bg-portfolio-navy-light transition-all duration-300 hover:-translate-y-2"
                    >
                      <div className={`w-12 h-12 bg-gradient-to-br ${link.color} rounded-full flex items-center justify-center mb-3 text-white group-hover:scale-110 transition-transform duration-300`}>
                        {link.icon}
                      </div>
                      <h4 className="text-white font-semibold text-sm mb-1">{link.label}</h4>
                      <p className="text-gray-400 text-xs text-center">{link.value}</p>
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="glass-card rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                </div>
                <h3 className="text-xl font-playfair font-semibold text-white mb-2">
                  Available for Projects
                </h3>
                <p className="text-gray-300 text-sm">
                  Currently accepting new freelance projects and collaboration opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
