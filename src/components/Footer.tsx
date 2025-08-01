
const Footer = () => {
  return (
    <footer className="py-12 border-t border-portfolio-coral/20 relative">
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 grid-overlay opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Logo and Name - Enhanced with glow */}
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <div>
                <h3 className="text-white font-playfair font-semibold text-lg">Neha Patil</h3>
                <p className="text-portfolio-grid-gray text-sm">IT Engineer × Creative Designer</p>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-portfolio-grid-gray text-sm mb-2">
                © 2025 Neha Hemant Patil. All rights reserved.
              </p>
              <p className="text-xs text-portfolio-grid-gray/70">
                Designed by Neha with <span className="text-portfolio-coral animate-pulse">♥</span> under NR
              </p>
            </div>
          </div>

          {/* Enhanced NR Watermark */}
          <div className="mt-8 pt-8 border-t border-portfolio-coral/10 text-center">
            <div className="inline-flex items-center space-x-3 text-portfolio-grid-gray/80">
              <div className="nr-logo-container w-8 h-8 rounded-full overflow-hidden animate-glow-pulse">
                <img 
                  src="/lovable-uploads/4c8d6a1c-1fe6-431b-b3fe-7968a07a9d5e.png" 
                  alt="NR Designs Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xs font-medium">Visual Identity by NR Creative Studio</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
