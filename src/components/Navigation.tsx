
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#services', label: 'Services' },
    { href: '#nr-creations', label: 'NR Creations' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'neon-card shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo with enhanced glow and animation */}
          <div className="flex items-center space-x-3">
            <div className="nr-logo-container w-10 h-10 rounded-lg overflow-hidden animate-glow-pulse">
              <img 
                src="/lovable-uploads/4c8d6a1c-1fe6-431b-b3fe-7968a07a9d5e.png" 
                alt="NR Designs Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-white font-playfair font-semibold text-lg">Neha Patil</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-portfolio-grid-gray hover:text-portfolio-coral transition-colors duration-300 font-medium relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 coral-gradient-bg transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 hover:text-portfolio-coral transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden neon-card mt-2 rounded-lg p-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-2 text-portfolio-grid-gray hover:text-portfolio-coral transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
