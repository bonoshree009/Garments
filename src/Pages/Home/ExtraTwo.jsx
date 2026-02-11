import { motion } from "framer-motion";
import { FaLock, FaShieldAlt, FaSyncAlt } from "react-icons/fa";

const ExtraTwo = () => {
  const features = [
    {
      icon: <FaLock className="text-white text-4xl mx-auto mb-4" />,
      title: "JWT Authentication",
      desc: "Secure login with JSON Web Tokens for safe access.",
    },
    {
      icon: <FaShieldAlt className="text-white text-4xl mx-auto mb-4" />,
      title: "Role-Based Access",
      desc: "Manage user permissions effectively for Admin, Manager & Buyer.",
    },
    {
      icon: <FaSyncAlt className="text-white text-4xl mx-auto mb-4" />,
      title: "Real-Time Updates",
      desc: "Stay updated with instant notifications and live data changes.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-yellow-200 to-yellow-400 relative overflow-hidden">
      {/* Background animated shapes */}
    
      <motion.h2
        className="max-w-2xl mx-auto md:text-5xl font-bold mb-6 text-white drop-shadow-lg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Secure & Reliable System
      </motion.h2>

      <motion.p
        className="max-w-2xl mx-auto text-white text-lg md:text-xl mb-12 drop-shadow-md"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        JWT authentication, role-based access & real-time updates to keep your workflow safe and efficient.
      </motion.p>

      {/* Features Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {features.map((item, index) => (
          <motion.div
            key={index}
            className="bg-yellow-400 rounded-2xl p-6 shadow-lg hover:shadow-2xl cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            {item.icon}
            <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
            <p className="text-white text-sm ">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExtraTwo;
