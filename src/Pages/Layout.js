import React from "react";
import { Navbar } from "../components/reusables/Navbar";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/reusables/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
