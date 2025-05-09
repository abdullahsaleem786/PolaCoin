import AnimatedBackground from '../components/AnimatedBackground';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import CommunitySection from '../components/CommunitySection';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <AnimatedBackground>
      <Navbar />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <HeroSection />
        <AboutSection />
        <CommunitySection />
        <Footer />
      </motion.div>
    </AnimatedBackground>
  );
};

export default Home;