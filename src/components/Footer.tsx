
const Footer = () => {
  return (
    <footer className="py-12 border-t border-portfolio-purple/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Logo and Name */}
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-br from-portfolio-purple to-portfolio-coral rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">NP</span>
              </div>
              <div>
                <h3 className="text-white font-playfair font-semibold text-lg">Neha Patil</h3>
                <p className="text-gray-400 text-sm">IT Engineer × Creative Designer</p>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm mb-2">
                © 2024 Neha Hemant Patil. All rights reserved.
              </p>
              <p className="text-xs text-gray-500">
                Designed with <span className="text-portfolio-coral">♥</span> by NR
              </p>
            </div>
          </div>

          {/* NR Watermark */}
          <div className="mt-8 pt-8 border-t border-portfolio-purple/10 text-center">
            <div className="inline-flex items-center space-x-2 text-gray-500">
              <div className="w-6 h-6 bg-gradient-to-br from-portfolio-coral/50 to-portfolio-teal/50 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs">NR</span>
              </div>
              <span className="text-xs">Visual Identity by NR Creative Studio</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
