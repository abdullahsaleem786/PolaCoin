import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  const features = [
    {
      title: "Community Driven",
      description: "Built by the community, for the community. Pola Bear is all about bringing people together.",
      icon: "👥"
    },
    {
      title: "Secure & Transparent",
      description: "Our smart contract is publicly verifiable and audited for maximum security and trust.",
      icon: "🔒"
    },
    {
      title: "Viral Growth",
      description: "Designed for virality with unique meme potential and engaging social mechanics.",
      icon: "📈"
    },
    {
      title: "Fair Launch",
      description: "No pre-sales, no team allocation - a truly fair launch for everyone to participate equally.",
      icon: "🚀"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
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
            <a href="https://x.com/OficialBearPola?s=08">About Pola Bear</a>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Pola Bear is more than just a memecoin - it's a movement. With our unique blend of 
            cute bear aesthetics and serious tokenomics, we're creating a new standard in the meme coin space.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="glass-effect p-6 rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-cyan-300">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="flex flex-col md:flex-row items-center glass-effect p-8 rounded-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex-1 mb-8 md:mb-0 md:mr-8">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Tokenomics</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-cyan-300 mr-2">•</span>
                <span>Total Supply: 1,000,000,000 POLA</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-300 mr-2">•</span>
                <span>2% Community Treasury</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-300 mr-2">•</span>
                <span>1% Marketing Fund</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-300 mr-2">•</span>
                <span>No Team Allocation</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-300 mr-2">•</span>
                <span>97% Liquidity Pool</span>
              </li>
            </ul>
          </div>
          
          <div className="flex-1 flex justify-center">
            <img 
              src={`${import.meta.env.BASE_URL}image/p2.jpg`} 
              alt="Pola Bear Coin" 
              className="max-w-[200px] md:max-w-[250px]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;