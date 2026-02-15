import { Outlet, useLocation, Link } from "react-router";
import { useMemo } from "react";
import useAuth from "../Hooks/useAuth";
import Navbar from "../Component/Navbar/Navbar";
import Footer from "../Component/Footer/Footer";

const MainLayout = () => {
  const { role,loading } = useAuth();
  const location = useLocation();

  const links = useMemo(() => {
    switch (role) {
      case "admin":
        return [
          { name: "Manage Users", path: "/manage-users" },
          { name: "All Products", path: "/all-products" },
        ];
      case "manager":
        return [
          { name: "Add Product", path: "/add-product" },
          { name: "Manage Products", path: "/manage-products" },
        ];
      case "buyer":
        return [
          { name: "My Orders", path: "/my-orders" },
        ];
      default:
        return [];
    }
  }, [role]);


  if (loading) {
  return <div className="text-center mt-20">Loading...</div>;
}

  return (
    <div className="drawer drawer-end ">
      {/* Drawer Toggle */}
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle " />

      {/* Main Content */}
      <div className="drawer-content flex flex-col ">

        {/* Navbar */}
        <Navbar />

        <main className="grow">
          <Outlet />
        </main>

        <Footer />
      </div>

      {/* Sidebar */}
      <div className="drawer-side z-50 ">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>

        <ul className="menu p-4 w-80 min-h-full bg-base-200">
          <h2 className="text-xl font-bold mb-4">Dashboard</h2>

          {links.length > 0 ? (
            links.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={
                    location.pathname === link.path
                      ? "font-bold text-primary"
                      : ""
                  }
                >
                  {link.name}
                </Link>
              </li>
            ))
          ) : (
            <li>
              <h1 className="text-red-500">Role: {role}</h1>
              <span>No Access</span>
            </li>
          )}

          <div className="divider"></div>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainLayout;
