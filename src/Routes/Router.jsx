import { createBrowserRouter } from "react-router";



import Home from "../Pages/Home/Home";
import Login from "../pages/auth/Login";

// Dashboard Pages
// import ManageUsers from "../pages/dashboard/admin/ManageUsers";
// import AdminAllProducts from "../pages/dashboard/admin/AllProducts";
// import AllOrders from "../pages/dashboard/admin/AllOrders";
// import Analytics from "../pages/dashboard/admin/Analytics";

// import AddProduct from "../pages/dashboard/manager/AddProduct";
// import ManageProducts from "../pages/dashboard/manager/ManageProducts";
// import UpdateProduct from "../pages/dashboard/manager/UpdateProduct";
// import PendingOrders from "../pages/dashboard/manager/PendingOrders";
// import ApprovedOrders from "../pages/dashboard/manager/ApprovedOrders";

// import MyOrders from "../pages/dashboard/user/MyOrders";
// import TrackOrder from "../pages/dashboard/user/TrackOrder";

// import Profile from "../pages/dashboard/Profile";

// // Route Guards
// import PrivateRoute from "./PrivateRoute";
// import AdminRoute from "./AdminRoute";
// import ManagerRoute from "./ManagerRoute";
// import BuyerRoute from "./BuyerRoute";
import MainLayout from "../Layout/MainLayout";
import Error from "../Pages/Error/Error";
import Register from "../Pages/Auth/Register";
import AboutUs from "../Pages/AboutUs/AboutUs";
import PrivateRoute from "../Providers/PrivateRoute";
import DashboardLayout from "../Layout/DashboardLayout";
import AllProducts from "../Pages/Products/AllProducts";
import ProductDetails from "../Pages/Products/ProductDetails";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error></Error>,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element:<Register></Register> },
      {path : "/about", element: <AboutUs></AboutUs>},
      { path: "/all-products", element: <AllProducts /> },
      {
       path: "/all-products/:id",
       element: (
         <PrivateRoute>
           <ProductDetails />
         </PrivateRoute>
       ),
     },
    ],
  },

{
    path: "/dashboard",
    element: (
    <PrivateRoute>
      <DashboardLayout />
         </PrivateRoute>
    ), }
  //   children: [
  //     // Admin
  //     {
  //       path: "manage-users",
  //       element: (
  //         <AdminRoute>
  //           <ManageUsers />
  //         </AdminRoute>
  //       ),
  //     },
  //     {
  //       path: "all-products",
  //       element: (
  //         <AdminRoute>
  //           <AdminAllProducts />
  //         </AdminRoute>
  //       ),
  //     },
  //     {
  //       path: "all-orders",
  //       element: (
  //         <AdminRoute>
  //           <AllOrders />
  //         </AdminRoute>
  //       ),
  //     },
  //     {
  //       path: "analytics",
  //       element: (
  //         <AdminRoute>
  //           <Analytics />
  //         </AdminRoute>
  //       ),
  //     },

  //     // Manager
  //     {
  //       path: "add-product",
  //       element: (
  //         <ManagerRoute>
  //           <AddProduct />
  //         </ManagerRoute>
  //       ),
  //     },
  //     {
  //       path: "manage-products",
  //       element: (
  //         <ManagerRoute>
  //           <ManageProducts />
  //         </ManagerRoute>
  //       ),
  //     },
  //     {
  //       path: "update-product/:id",
  //       element: (
  //         <ManagerRoute>
  //           <UpdateProduct />
  //         </ManagerRoute>
  //       ),
  //     },
  //     {
  //       path: "pending-orders",
  //       element: (
  //         <ManagerRoute>
  //           <PendingOrders />
  //         </ManagerRoute>
  //       ),
  //     },
  //     {
  //       path: "approved-orders",
  //       element: (
  //         <ManagerRoute>
  //           <ApprovedOrders />
  //         </ManagerRoute>
  //       ),
  //     },

  //     // Buyer
  //     {
  //       path: "my-orders",
  //       element: (
  //         <BuyerRoute>
  //           <MyOrders />
  //         </BuyerRoute>
  //       ),
  //     },
  //     {
  //       path: "track-order/:orderId",
  //       element: (
  //         <BuyerRoute>
  //           <TrackOrder />
  //         </BuyerRoute>
  //       ),
  //     },

  //     // Shared
  //     { path: "profile", element: <Profile /> },
  //   ],
  //},
]);

export default Router;

