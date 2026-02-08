import { Link, NavLink } from "react-router";
import useAuth from "../../hooks/useAuth";
import useRole from "../../hooks/useRole";

const Navbar = () => {
  const { user, logout, loading } = useAuth();
  const { role } = useRole();

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-indigo-600 font-semibold"
      : "text-gray-700 hover:text-indigo-600";

  if (loading) return null;

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-indigo-600">
            GarmentsTracker
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>

            <NavLink to="/products" className={navLinkClass}>
              All Products
            </NavLink>

            <NavLink to="/about" className={navLinkClass}>
              About Us
            </NavLink>

            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>

            {!user ? (
              <>
                <NavLink to="/login" className={navLinkClass}>
                  Login
                </NavLink>
                <NavLink
                  to="/register"
                  className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
                >
                  Register
                </NavLink>
              </>
            ) : (
              <>
                <NavLink to="/dashboard/profile" className={navLinkClass}>
                  Dashboard
                </NavLink>

                {/* Avatar */}
                <img
                  src={user.photoURL || "https://i.ibb.co/2kRZ1cG/user.png"}
                  alt="user"
                  className="w-9 h-9 rounded-full border"
                  title={user.displayName}
                />

                <button
                  onClick={logout}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Logout
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost">
              ☰
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content mt-3 p-4 shadow bg-base-100 rounded w-52"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/products">All Products</NavLink>
              </li>

              {!user ? (
                <>
                  <li>
                    <NavLink to="/login">Login</NavLink>
                  </li>
                  <li>
                    <NavLink to="/register">Register</NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <NavLink to="/dashboard/profile">
                      Dashboard ({role})
                    </NavLink>
                  </li>
                  <li>
                    <button onClick={logout}>Logout</button>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
