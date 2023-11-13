import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null); // 사용자 정보를 저장할 상태

  const logout = () => { // 로그아웃 함수
    setLoggedIn(false);
    setUserInfo(null);
  };

  return (
    <AuthContext.Provider value={{ loggedIn, setLoggedIn, userInfo, setUserInfo, logout }}>
      {children}
    </AuthContext.Provider>
  );
};