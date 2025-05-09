import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <div className="min-h-screen pt-20 relative flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 grid-background opacity-30 z-0"></div>
      
      <div className="container mx-auto px-4 z-10 flex flex-col lg:flex-row items-center justify-between gap-12 py-16">
        <motion.div 
          className="flex-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 cyberpunk-text">
            <span className="gradient-text block">POLA BEAR</span>
            <span className="text-white">MEMECOIN</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-xl">
            The coolest memecoin in the crypto world. Join our community and be part 
            of the next big thing in the blockchain space.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link to="https://discord.gg/neABZjYX" className="neon-button rounded-md">
              Join Community
            </Link>
            <a 
              href="https://x.com/OficialBearPola?s=08" 
              className="px-8 py-3 border border-gray-500 rounded-md hover:border-cyan-300 transition-colors duration-300"
            >
              Learn More
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.img 
            src="\image\P1.jpg"
            alt="Pola Bear Logo" 
            className="max-w-full h-auto float-animation"
            style={{ maxHeight: '500px' }}
            animate={{ 
              y: [0, -10, 0],
              rotateZ: [0, 2, 0, -2, 0],
            }}
            transition={{ 
              repeat: Infinity,
              duration: 5,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <a href="#about" className="flex flex-col items-center text-gray-400">
            <span className="text-sm mb-2">Scroll to learn more</span>
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M7 10L12 15L17 10" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;