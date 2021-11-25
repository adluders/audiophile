import React, { createContext, useState } from "react";

export const ModalContext = createContext();

const ModalContextProvider = ({ children }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const updateModalOpen = () => setModalOpen(!isModalOpen);

  return (
    <ModalContext.Provider
      value={{ isModalOpen, updateModalOpen, setModalOpen }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
