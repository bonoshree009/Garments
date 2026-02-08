import { Link } from "react-router";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-7xl font-bold text-indigo-600"
      >
        404
      </motion.h1>

      <p className="mt-4 text-xl font-semibold">
        Page Not Found
      </p>

      <p className="mt-2 text-gray-600 max-w-md">
        The page you are looking for doesn’t exist or has been moved.
      </p>

      <Link
        to="/"
        className="mt-6 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
