import React, { useContext } from "react";
import Navbar from "./Navbar";
import * as globalStyles from "../../global.css";
import useResizer from "../../hooks/useResizer";
import MobileNav from "./MobileNav";
import Footer from "./Footer";
import styled from "styled-components";
import { ModalContext } from "../context/ModalContext";

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  footer {
    margin-top: auto;
  }
`;

const Modal = styled.div`
  position: absolute;
  height: 97.5%;
  width: 100%;
  top: 2.5%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  overflow-y: hidden;
  @media screen and (max-width: 768px) {
    top: 93px;
  }
`;

const Layout = ({ children }) => {
  const screenSize = useResizer();

  const { isModalOpen } = useContext(ModalContext);

  return (
    <Wrapper style={globalStyles}>
      {screenSize < 768 ? <MobileNav /> : <Navbar />}
      {isModalOpen && <Modal />}
      {children}
      <Footer />
    </Wrapper>
  );
};

export default Layout;
