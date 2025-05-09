import { motion } from 'framer-motion';
import { Instagram, Twitter, Disc } from 'lucide-react';

const CommunitySection: React.FC = () => {
  const socialLinks = [
    { 
      name: 'Instagram', 
      icon: <Instagram className="w-8 h-8" />, 
      url: 'https://www.instagram.com/officialpolabearrr?igsh=anlpNHhiN28xZnJm',
      color: 'from-purple-500 to-pink-500'
    },
    { 
      name: 'Discord', 
      icon: <Disc className="w-8 h-8" />, 
      url: 'https://discord.gg/neABZjYX',
      color: 'from-indigo-500 to-purple-500'
    },
    { 
      name: 'Twitter', 
      icon: <Twitter className="w-8 h-8" />, 
      url: 'https://x.com/OficialBearPola?s=08',
      color: 'from-blue-400 to-cyan-500'
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 grid-background opacity-30 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            <a href="https://x.com/OficialBearPola?s=08">Join our community</a>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Become part of the Pola Bear family. Connect with us on social media to stay updated on the latest 
            news, announcements, and community events.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {socialLinks.map((platform, index) => (
            <motion.a
              key={index}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`glass-effect p-8 rounded-lg text-center hover:shadow-lg transition-all duration-300 border border-transparent hover:border-cyan-300`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className={`w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-r ${platform.color}`}>
                {platform.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{platform.name}</h3>
              <p className="text-gray-400">Join our {platform.name} community</p>
            </motion.a>
          ))}
        </div>

        <motion.div
          className="glass-effect p-8 rounded-lg text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-4">Stay in the Loop</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Don't miss out on important updates, airdrops, and community events. 
            Register for an account to get early access to new features.
          </p>
          <a 
            href="/signup" 
            className="neon-button inline-block rounded-md"
          >
            Create Account
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunitySection;