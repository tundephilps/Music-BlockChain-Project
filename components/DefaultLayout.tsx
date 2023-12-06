import React, { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import NavbarBig from "./NavbarBig";

interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
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
