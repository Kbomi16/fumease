// CartContext.js

import React, { createContext, useState,useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(()=>{
    const cart = localStorage.getItem("cart");
    console.log(cart)
    if(cart){
      try{
        var cartJson=JSON.parse(cart)
        setCart(cartJson)
      }catch(err){}
      
    }
  },[])

  // 장바구니에서 제품 제거
  const removeFromCart = (productId) => {
    setCart(cart.filter(product => product.f_id !== productId));
  };
  // //주문 완료 후 카트 비우기
  // const clearCart = () => {
  //   setCart([]);
  // };

  // 상품의 수량 업데이트
  const updateCartItemQuantity = (productId, newQuantity) => {
    setCart(cart.map(product =>
      product.f_id === productId
        ? { ...product, quantity: Math.max(1, newQuantity) }
        : product
    ));
  };
  return (
    <CartContext.Provider value={{ cart, setCart, removeFromCart, updateCartItemQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
