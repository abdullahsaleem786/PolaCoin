
import AnimatedBackground from '../components/AnimatedBackground';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AuthForm from '../components/AuthForms';
import { motion } from 'framer-motion';

const Login: React.FC = () => {
  return (
    <AnimatedBackground>
      <Navbar />
      
      <div className="min-h-screen pt-20 pb-20 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md px-4"
        >
          <AuthForm isLogin={true} />
        </motion.div>
      </div>
      
      <Footer />
    </AnimatedBackground>
  );
};

export default Login;