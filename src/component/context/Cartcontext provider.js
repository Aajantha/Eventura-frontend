import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (venue) => {
    setCart((prev) => [...prev, venue]);
    setTotalPrice((prev) => prev + venue.startingPrice);
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item._id !== id);
    const removedItem = cart.find((item) => item._id === id);
    setCart(updatedCart);
    setTotalPrice((prev) => prev - (removedItem ? removedItem.startingPrice : 0));
  };

  return (
    <CartContext.Provider value={{ cart, totalPrice, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
