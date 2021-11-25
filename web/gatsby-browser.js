import React from "react";
import CartContextProvider from "./src/components/context/CartContext";
import ModalContextProvider from "./src/components/context/ModalContext";

export const wrapRootElement = ({ element }) => {
  return (
    <ModalContextProvider>
      <CartContextProvider>{element}</CartContextProvider>
    </ModalContextProvider>
  );
};
