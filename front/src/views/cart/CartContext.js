// CartContext.js

import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);


  // 장바구니에서 제품 제거
  const removeFromCart = (productId) => {
    setCart(cart.filter(product => product.f_id !== productId));
  };
  //주문 완료 후 카트 비우기
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, setCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
