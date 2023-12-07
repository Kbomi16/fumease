import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    // 컴포넌트가 마운트될 때 로컬 스토리지에서 로그인 상태와 유저 정보를 복원
    const savedLoggedIn = localStorage.getItem('loggedIn');
    const savedUserInfo = localStorage.getItem('userInfo');

    if (savedLoggedIn === 'true' && savedUserInfo) {
      setLoggedIn(true);
      setUserInfo(JSON.parse(savedUserInfo));
    }
  }, []);

  const logout = () => {
    setLoggedIn(false);
    setUserInfo(null);

    // 로그아웃 시 세션 스토리지나 쿠키에서 정보 삭제
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('userInfo');
  };

  const handleLogin = async (username, password) => {
    try {
      const response = await axios.post('http://localhost:3001/users/login', {
        username,
        password,
      });
      console.log('Login response:', response.data); // 로그인 응답 출력
  
      // 로그인 성공 시 유저 정보 저장 및 로그인 상태 변경
      if (response.data) {
        setUserInfo(response.data); // 유저 정보를 userInfo에 저장
        setLoggedIn(true); // 로그인 상태를 true로 변경
  
        // 로그인 성공 시 세션 스토리지에 정보 저장
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('userInfo', JSON.stringify(response.data));
      }
    } catch (error) {
      console.error('Login failed:', error); // 로그인 실패 시 에러 메시지 출력
    }
  };
  
  return (
    <AuthContext.Provider value={{ loggedIn, setLoggedIn, userInfo, setUserInfo, logout, handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
};
