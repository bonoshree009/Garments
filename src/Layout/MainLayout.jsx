import { Outlet, useLocation, Link } from "react-router";
import { useMemo } from "react";
import useAuth from "../Hooks/useAuth";
import Navbar from "../Component/Navbar/Navbar";
import Footer from "../Component/Footer/Footer";
import Loader from "../Component/Shared/Loader";

const MainLayout = () => {
  const { role,loading } = useAuth();
  const location = useLocation();

  const links = useMemo(() => {
    switch (role) {
      case "admin":
        return [

  { name: "Manage Users", path: "/manage-users" },
    { name: "All products", path: "/all-poroducts" },
      { name: "All Oders", path: "/all-orders" }
        
    ];
      case "manager":
        return [
          { name: "Add products", path: "/add-poroducts" },
          { name: "Manage-Products", path: "/manage-products" },
          { name: "Pending Orders", path: "/pending-orders" },
          { name: "Approve Orders", path: "/approve-order" },
          { name: "My Profile", path: "/my-profile" },
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
  return <div className="flex mx-auto justify-center"> <Loader></Loader></div>;
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
      <div className="drawer-side z-50">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>

        <ul className="menu p-4 w-80 min-h-full bg-amber-300 text-white text-2xl">
          <h2 className="text-4xl font-bold mb-4 text-orange-600 ">Dashboard</h2>

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
