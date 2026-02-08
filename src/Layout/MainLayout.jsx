import { Outlet, useLocation } from "react-router";
//import Navbar from "../components/Navbar/Navbar";
//import Footer from "../components/footer/Footer";
import { useEffect } from "react";
import Navbar from "../Component/Navbar/Navbar";
import Footer from "../Component/Footer/Footer";

const MainLayout = () => {
  const location = useLocation();

  // Dynamic Page Title
  useEffect(() => {
    const path = location.pathname;
    if (path === "/") document.title = "Garments Tracker | Home";
    else if (path === "/login") document.title = "Login | Garments Tracker";
    else if (path === "/register")
      document.title = "Register | Garments Tracker";
    else if (path === "/products")
      document.title = "Products | Garments Tracker";
    else document.title = "Garments Tracker";
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar></Navbar>

      <main className="grow"> <Outlet /></main>
    <Footer></Footer>
    </div>
  );
};

export default MainLayout;
