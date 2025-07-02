import React from "react";
import Navbar from "../components/shared/navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/shared/Footer/Footer";
import { useTheme } from "../contexts/useTheme";

const RootLayouts = () => {
  const { isDark } = useTheme();
  return (
    <div className={`${isDark ? "bg-gray-900" : "bg-white"} min-h-screen`}>
      <Navbar></Navbar>
      <div className="min-h-screen">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default RootLayouts;
