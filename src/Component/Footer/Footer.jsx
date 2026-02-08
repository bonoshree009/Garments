import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold text-white">
            GarmentsTracker
          </h2>
          <p className="mt-4 text-sm">
            A modern garments order & production tracking system
            designed to simplify factory workflows and ensure
            on-time delivery.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Useful Links
          </h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-indigo-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-indigo-400">
                All Products
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-indigo-400">
                Login
              </Link>
            </li>
            <li>
              <Link to="/register" className="hover:text-indigo-400">
                Register
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact / Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Contact
          </h3>
          <p>Email: support@garmentstracker.com</p>
          <p className="mt-2">Phone: +880 1XXX-XXXXXX</p>
        </div>
      </div>

      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} GarmentsTracker. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
