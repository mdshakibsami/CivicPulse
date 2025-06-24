import React from "react";
import Navbar from "../components/shared/navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/shared/Footer/Footer";

const RootLayouts = () => {
  return (
    <div>
      <Navbar></Navbar>
        <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default RootLayouts;
