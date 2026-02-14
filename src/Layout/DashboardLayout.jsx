import React from 'react';
import { Outlet, Link, Navigate } from 'react';
import useAuth from '../Hooks/useAuth';



const DashboardLayout = () => {

    const { user,loading } = useAuth()  || { user: { role: 'Manager' } };; // user.role = 'admin' | 'manager' | 'buyer'

  if(!user) return <Navigate to="/login" />; // not logged in
  if (loading) return <div>Loading...</div>;


  // Define links per role
  let links = [];
  let defaultPath = '';
  switch(user.role){
    case 'admin':
      links = [
        { name: 'Manage Users', path: '/dashboard/manage-users' },
        { name: 'All Products', path: '/dashboard/all-products' },
        { name: 'All Orders', path: '/dashboard/all-orders' },
        { name: 'Profile', path: '/dashboard/profile' }
      ];
      defaultPath = '/dashboard/manage-users';
      break;

    case 'manager':
      links = [
        { name: 'Add Product', path: '/dashboard/add-product' },
        { name: 'Manage Products', path: '/dashboard/manage-products' },
        { name: 'Pending Orders', path: '/dashboard/pending-orders' },
        { name: 'Profile', path: '/dashboard/profile' }
      ];
      defaultPath = '/dashboard/add-product';
      break;

    case 'buyer':
      links = [
        { name: 'My Orders', path: '/dashboard/my-orders' },
        { name: 'Track Order', path: '/dashboard/track-order' },
        { name: 'Profile', path: '/dashboard/profile' }
      ];
      defaultPath = '/dashboard/my-orders';
      break;
  }

  return (
    <div className="drawer drawer-mobile">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
      
      {/* Main Content */}
      <div className="drawer-content p-4">
        <label htmlFor="dashboard-drawer" className="btn btn-primary drawer-button mb-4 md:hidden">
          Open Sidebar
        </label>
        <Outlet /> {/* Nested page content */}
      </div>

      {/* Sidebar */}
      <div className="drawer-side">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
        <ul className="menu bg-base-200 w-80 p-4">
          {links.map(link => (
            <li key={link.name} className="mb-2">
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;