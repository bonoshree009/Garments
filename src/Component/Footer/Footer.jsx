import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logo from "../../assets/logo.png";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Footer = () => {
  const links = ["Home", "All Products", "About Us", "Contact"];

  return (
    <footer className="bg-white text-orange-500 border-4 border-amber-400 pt-16 relative overflow-hidden">
      {/* Background effect */}
      

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Top section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-0 mb-12">
          {/* Logo & Description */}
          <div className="flex flex-col items-start">
            <img src={logo} alt="logo" className="w-12 h-12 mb-2" />
            <h1 className="text-2xl font-bold mb-2">GarmentsTracker</h1>
            <p className=" max-w-sm">
              Streamline your garment orders & production workflow. Secure, reliable, and easy-to-use platform for factories.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {links.map((link, index) => (
                <li key={index} className="hover:text-orange-400 cursor-pointer transition-colors duration-300">
                  {link}
                </li>
              ))}
            </ul>
          </div>

          {/* Social icons */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4 text-gray-300">
              <FaFacebookF className="hover:text-blue-500 cursor-pointer transition-colors duration-300" />
              <FaTwitter className="hover:text-blue-400 cursor-pointer transition-colors duration-300" />
              <FaInstagram className="hover:text-pink-500 cursor-pointer transition-colors duration-300" />
              <FaLinkedinIn className="hover:text-blue-700 cursor-pointer transition-colors duration-300" />
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-orange-500 pt-6 text-center text-orange-500 text-sm">
          © {new Date().getFullYear()} GarmentsTracker. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
