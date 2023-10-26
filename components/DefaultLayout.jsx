import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import NavbarBig from "./NavbarBig";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Navbar />

      <NavbarBig />
      {children}
      <Footer />
    </div>
  );
};

export default DefaultLayout;
