import React, { createContext, useState, useContext } from "react";
import { ModalContext } from "./ModalContext";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const { setModalOpen, isModalOpen } = useContext(ModalContext);

  const [isCartOpen, setCartOpen] = useState(false);
  const [cartList, setCartList] = useState([]);

  const findItem = (list, givenId) =>
    list.filter((listItem) => listItem.id === givenId);

  const updateCartOpen = () => {
    setCartOpen(!isCartOpen);
    setModalOpen(!isModalOpen);
  };

  const updateCart = (item) => {
    const isInCart = cartList.some((cartItem) => cartItem.id === item.id);

    if (isInCart) {
      const itemInCart = findItem(cartList, item.id);

      setCartList(
        [...cartList],
        (itemInCart[0].itemCount = item.itemCount + itemInCart[0].itemCount)
      );

      // updateTotal
    } else {
      setCartList([...cartList, item]);
    }
  };

  const addToCartItem = (id) => {
    const itemToUpdate = findItem(cartList, id);
    setCartList([...cartList], (itemToUpdate[0].itemCount += 1));
  };

  const removeFromCartItem = (id) => {
    const itemToUpdate = findItem(cartList, id);

    if (itemToUpdate[0].itemCount <= 1) {
      setCartList(cartList.filter((item) => item.id !== itemToUpdate[0].id));
      // updateCartOpen();
    } else {
      setCartList([...cartList], (itemToUpdate[0].itemCount -= 1));
    }
  };

  const emptyCart = () => {
    setCartList([]);
    updateCartOpen();
  };

  const cartCount = cartList.reduce((acc, { itemCount }) => acc + itemCount, 0);

  const totalPrice = cartList.reduce(
    (acc, { itemCount, price }) => acc + itemCount * price,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartList,
        updateCart,
        updateCartOpen,
        isCartOpen,
        cartCount,
        totalPrice,
        addToCartItem,
        removeFromCartItem,
        emptyCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
