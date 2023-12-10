// CartContext.js

import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cartData = localStorage.getItem("cart");
    if (cartData) {
      try {
        const cartJson = JSON.parse(cartData);
        setCart(cartJson);
      } catch (err) {
        console.error("Error parsing cart data:", err);
      }
    }
  }, []);

  // 장바구니에서 제품 제거
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((product) => product.f_id !== productId);
    setCart(updatedCart);
  };
  //주문 완료 후 카트 비우기
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('cart');
  };

  // 상품의 수량 업데이트
  const updateCartItemQuantity = (productId, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((product) =>
        product.f_id === productId
          ? { ...product, quantity: Math.max(1, newQuantity) }
          : product
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        removeFromCart,
        updateCartItemQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
