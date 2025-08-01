
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

  // Magical cursor effect
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.className = 'magic-cursor';
    document.body.appendChild(cursor);

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    };

    document.addEventListener('mousemove', moveCursor);
    
    return () => {
      document.removeEventListener('mousemove', moveCursor);
      if (cursor.parentNode) {
        cursor.parentNode.removeChild(cursor);
      }
    };
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#creative-escape', label: 'Hobby', isSpecial: true },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'neon-card shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <img 
                src="/lovable-uploads/5c56ce14-3d2e-433e-81ab-ebf9bf063a80.png" 
                alt="Neha Patil"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-white font-playfair font-semibold text-xl">Neha Patil</span>
            <span className="text-[#CCCCCC] text-sm">IT Engineer</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`${
                  item.isSpecial 
                    ? 'logo-gradient-text font-semibold' 
                    : 'text-[#CCCCCC] hover:text-[#FF7AA2]'
                } transition-colors duration-300 font-medium relative group`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 coral-gradient-bg transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 hover:text-[#FF7AA2] transition-colors"
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
                className={`block py-2 ${
                  item.isSpecial 
                    ? 'logo-gradient-text font-semibold' 
                    : 'text-[#CCCCCC] hover:text-[#FF7AA2]'
                } transition-colors duration-300`}
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
