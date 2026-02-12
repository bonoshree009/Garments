
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const ExtraOne = () => {
  return (
    <section className="bg-white py-20 text-center relative overflow-hidden">
      {/* Background animation shapes */}
      <motion.div
        className="absolute top-0 left-1/4 w-40 h-40 bg-yellow-500 rounded-full mix-blend-multiply opacity-30 animate-bounce-slow"
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.2, 1], rotate: [0, 20, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-1/3 w-60 h-60 bg-yellow-500 rounded-full mix-blend-multiply opacity-20 animate-bounce-slow"
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.1, 1], rotate: [0, -15, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-6 text-orange-500 drop-shadow-lg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Trusted by 100+ Factories
      </motion.h2>

      <motion.p
        className="max-w-2xl mx-auto text-orange-500 text-lg md:text-xl drop-shadow-md"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        We help factories streamline production and delivery efficiently with real-time tracking and smart analytics.
      </motion.p>

      <motion.button
        className="mt-8 px-8 py-3 bg-orange-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Learn More
      </motion.button>
    </section>
  );
};

export default ExtraOne;
