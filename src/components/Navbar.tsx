import {useState, useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Instagram, Twitter, Disc } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closeMenu = () => setIsOpen(false);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

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
    <motion.nav 
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled || isOpen ? 'glass-effect py-2' : 'py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
            <img 
              src="/image/p2.jpg" 
              alt="Pola Bear" 
              className="h-10 w-auto"
            />
            <span className="text-xl font-bold gradient-text">POLA BEAR</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <motion.div className="flex space-x-6" variants={navVariants}>
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-cyan-300 transition-colors duration-300"
                  variants={itemVariants}
                  whileHover={{ scale: 1.1 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>

            <div className="flex items-center space-x-4">
              {user ? (
                <motion.button
                  variants={itemVariants}
                  className="neon-button"
                  onClick={logout}
                >
                  Logout
                </motion.button>
              ) : (
                <>
                  <motion.div variants={itemVariants}>
                    <Link 
                      to="/login"
                      className={`px-4 py-2 rounded-md transition-colors hover:text-cyan-300 ${
                        location.pathname === '/login' ? 'text-cyan-300' : 'text-white'
                      }`}
                    >
                      Login
                    </Link>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <Link to="/signup" className="neon-button rounded-md">
                      Sign Up
                    </Link>
                  </motion.div>
                </>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="h-6 w-6 text-cyan-300" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div 
            className="md:hidden mt-4 py-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-4">
              <div className="flex justify-center space-x-8 py-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-cyan-300 transition-colors duration-300"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
              
              <div className="flex flex-col space-y-3 items-center">
                {user ? (
                  <button
                    className="neon-button w-full"
                    onClick={logout}
                  >
                    Logout
                  </button>
                ) : (
                  <>
                    <Link 
                      to="/login" 
                      className="w-full text-center py-2"
                      onClick={closeMenu}
                    >
                      Login
                    </Link>
                    <Link 
                      to="/signup" 
                      className="neon-button w-full text-center"
                      onClick={closeMenu}
                    >
                      Sign Up
                    </Link>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;