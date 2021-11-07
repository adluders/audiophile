import React from "react";
import Navbar from "./Navbar";
import * as globalStyles from "../../global.css";
import useResizer from "../../hooks/useResizer";
import MobileNav from "./MobileNav";
import Footer from "./Footer";
import styled from "styled-components";

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  footer {
    margin-top: auto;
  }
`;

const Layout = ({ children }) => {
  const screenSize = useResizer();

  return (
    <Wrapper style={globalStyles}>
      {screenSize < 768 ? <MobileNav /> : <Navbar />}
      {children}
      <Footer />
    </Wrapper>
  );
};

export default Layout;
