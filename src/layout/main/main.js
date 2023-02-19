import React from "react";
import { Navbar } from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./../../pages/Main/footer/Footer";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
