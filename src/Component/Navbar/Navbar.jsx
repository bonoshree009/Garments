import { Link, NavLink } from "react-router";
import { useContext, useState } from "react";import { FaBars, FaTimes } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthContext";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  const commonLinks = (
    <>
      <li><NavLink to="/" className="text-orange-500 hover:text-orange-700">Home</NavLink></li>
      <li><NavLink to="/all-products" className="text-orange-500 hover:text-orange-700">All Products</NavLink></li>
      <li><NavLink to="/about" className="text-orange-500 hover:text-orange-700">About Us</NavLink></li>
      <li><NavLink to="/contact" className="text-orange-500 hover:text-orange-700">Contact</NavLink></li>
    </>
  );

  return (
    <header className="w-full bg-yellow-200 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-10 h-10" />
          <h1 className="text-2xl font-bold text-orange-600">
            ThreadCraft
          </h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 font-medium">
          {commonLinks}
          {user && (
            <li>
              <NavLink to="/dashboard" className="text-orange-500 hover:text-orange-700">
                Dashboard
              </NavLink>
            </li>
          )}
        </ul>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-4">
          {!user ? (
            <>
              <Link to="/login" className="px-4 py-2 rounded-lg text-orange-500 hover:text-orange-700 border border-orange-500">Login</Link>
              <Link
                to="/register"
                className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700"
              >
                Register
              </Link>
            </>
          ) : (
            <>
              <img
                src={user.photoURL || "https://i.ibb.co/2kR7Q0k/user.png"}
                alt="user"
                className="w-9 h-9 rounded-full"
              />
              <button onClick={logOut}  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600" >
                Logout
              </button>
            </>
          )}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden bg-white px-6 py-4 space-y-4 font-medium shadow-lg">
          {commonLinks}

          {user && (
            <li>
              <NavLink to="/dashboard" className="hover:text-orange-500">
                Dashboard
              </NavLink>
            </li>
          )}

          {!user ? (
            <>
              <li><NavLink to="/login">Login</NavLink></li>
              <li><NavLink to="/register">Register</NavLink></li>
            </>
          ) : (
            <li>
              <button
                onClick={logOut}
                className="w-full px-4 py-2 bg-red-500 text-white rounded-lg"
              >
                Logout
              </button>
            </li>
          )}
        </ul>
      )}
    </header>
  );
};

export default Navbar;
