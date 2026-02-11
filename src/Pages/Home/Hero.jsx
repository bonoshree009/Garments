import React from 'react';
import { motion } from 'framer-motion';
import banner from '../../assets/banner.avif';
import { Link, NavLink } from 'react-router';


const Hero = () => {
  return (
    <section
      className="relative h-[90vh] bg-cover bg-center flex items-center justify-center text-white" style={{ backgroundImage: `url(${banner})` }}>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center max-w-3xl px-6"
      >
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          Smart Production.
          <br />
          Seamless Tracking.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-6 text-lg md:text-xl text-gray-200"
        >
          Manage your garments orders, track every production stage,
          and deliver on time with confidence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-8"
        >
          <Link
            to="/all-products"
            className="px-10 py-4 bg-orange-600 text-white rounded-lg hover:bg-orange-700  text-xl"
          >
            Explore Products
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
