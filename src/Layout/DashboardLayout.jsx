import React, { useMemo } from "react";
import { Link, Outlet, useLocation } from "react-router";
import useAuth from "../Hooks/useAuth";

const DashboardLayout = () => {
  const { user } = useAuth();
  const location = useLocation();

  // Role based links (optimized)
  const links = useMemo(() => {
    switch (user?.role) {
      case "admin":
        return [
          { name: "Manage Users", path: "/dashboard/manage-users" },
          { name: "All Products", path: "/dashboard/all-products" },
          { name: "All Orders", path: "/dashboard/all-orders" },
        ];

      case "manager":
        return [
          { name: "Add Product", path: "/dashboard/add-product" },
          { name: "Manage Products", path: "/dashboard/manage-products" },
          { name: "Pending Orders", path: "/dashboard/pending-orders" },
        ];

      case "buyer":
        return [
          { name: "My Orders", path: "/dashboard/my-orders" },
          { name: "Track Order", path: "/dashboard/track-order" },
        ];

      default:
        return [];
    }
  }, [user?.role]);

  return (
    <div className="drawer drawer-end lg:drawer-open">
      {/* Drawer toggle */}
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

      {/* Main Content */}
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar bg-base-100 shadow-md px-4">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="dashboard-drawer"
              className="btn btn-square btn-ghost"
            >
              ☰
            </label>
          </div>
          <div className="flex-1 text-xl font-bold">
            Dashboard
          </div>
        </div>

        {/* Page Content */}
        <div className="p-6">
          <Outlet />
        </div>
      </div>

      {/* Sidebar */}
      <div className="drawer-side">
        <label
          htmlFor="dashboard-drawer"
          className="drawer-overlay"
        ></label>

        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          <h2 className="text-xl font-bold mb-4">Dashboard Menu</h2>

          {links.length > 0 ? (
            links.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={`${
                    location.pathname === link.path
                      ? "font-bold text-primary"
                      : ""
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))
          ) : (
            <li>
              <span>No Access</span>
            </li>
          )}

          {/* Common link */}
          <div className="divider"></div>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
