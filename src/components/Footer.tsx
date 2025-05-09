import { motion } from 'framer-motion';
import { Instagram, Twitter, Disc } from 'lucide-react';


const Footer: React.FC = () => {
  const socialLinks = [
    { 
      name: 'Instagram', 
      icon: <Instagram className="w-5 h-5" />, 
      url: 'https://www.instagram.com/officialpolabearrr?igsh=anlpNHhiN28xZnJm'
    },
    { 
      name: 'Discord', 
      icon: <Disc className="w-5 h-5" />, 
      url: 'https://discord.gg/neABZjYX'
    },
    { 
      name: 'Twitter', 
      icon: <Twitter className="w-5 h-5" />, 
      url: 'https://x.com/OficialBearPola?s=08'
    }
  ];

  return (
    <footer className="py-8 relative overflow-hidden">
      <div className="absolute inset-0 grid-background opacity-30 z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <img src="/image/P1.jpg" alt="" className="h-10 w-auto" />
            
            <span className="text-xl font-bold gradient-text">POLA BEAR</span>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-6 mb-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-cyan-300 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
            <p className="text-gray-400 text-sm text-center md:text-right">
              © 2025 Pola Bear. All rights reserved.
            </p>
          </div>
        </div>
        
        <hr className="border-gray-800 my-6" />
        
        <div className="text-xs text-gray-500 text-center">
          <p>Trading cryptocurrency involves risk. Do your own research before investing.</p>
          <p className="mt-2">The Pola Bear token is a meme coin with no intrinsic value or financial return expectation.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
