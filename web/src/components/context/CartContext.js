import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [isCartOpen, setCartOpen] = useState(false);
  const [count, setCount] = useState(0);
  const [item, setItem] = useState({});
  const [itemList, setItemList] = useState([]);

  const updateCount = (num) => setCount(num);

  const updateCartOpen = () => setCartOpen(!isCartOpen);

  useEffect(() => {
    if (Object.keys(item).length !== 0) {
      setItemList([...itemList, item]);
    }
  }, [item]);

  return (
    <CartContext.Provider
      value={{
        count,
        updateCount,
        item,
        setItem,
        itemList,
        setItemList,
        isCartOpen,
        updateCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;

/**
 * itemName
 * price
 * image?
 * count
 * clear cart capability
 * priceTotal
 * find a way to hold all of the items added
 */

/**
 * things to do with one item
 * get the name, price, image and count
 */

/**
 * once I get the item, add it to the itemTotalCount state
 * maybe use reduce for sumation?? where it starts at 0 and add the item.price to the total?
 */
