// App 컴포넌트의 상태에서 cart를 전역 상태로 이동해야 한다. 
// 이렇게 하면 장바구니 페이지에서도 cart 상태에 접근할 수 있다.
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};
