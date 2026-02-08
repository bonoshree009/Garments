// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router";

const Hero = () => {
  return (
    <section className="min-h-[90vh] flex items-center bg-linear-to-r from-indigo-600 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Garments Order & Production Tracker
          </h1>
          <p className="mb-6 text-lg">
            Track garment production, manage orders, and ensure on-time delivery
            with ease.
          </p>
          <Link
            to="/products"
            className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold"
          >
            View Products
          </Link>
        </motion.div>

        <motion.img
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          src="https://i.ibb.co/5FJZC6Z/garments.png"
          alt="Garments"
          className="rounded-xl"
        />
      </div>
    </section>
  );
};

export default Hero;
