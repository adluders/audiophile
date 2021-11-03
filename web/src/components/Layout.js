import React from "react";
import Navbar from "./Navbar";
import * as globalStyles from "../global.css";
import useResizer from "../hooks/useResizer";
import MobileNav from "./MobileNav";

const Layout = ({ children }) => {
  const screenSize = useResizer();

  return (
    <main style={globalStyles}>
      {screenSize < 768 ? <MobileNav /> : <Navbar />}
      {children}
    </main>
  );
};

export default Layout;
