import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
axios.defaults.withCredentials = true
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  const logout = () => {
    setLoggedIn(false);
    setUserInfo(null);
  };

  useEffect(() => {
    console.log("init")
    getUserInfo()
  }, [])
  // getUserInfo()
  async function getUserInfo() {
    const { data } = await axios.get("http://localhost:3001/users/info")
    console.log(data)
    setUserInfo(data)
  }

  const handleLogin = async (username, password) => {
    try {
      const response = await axios.post('http://localhost:3001/users/login', {
        username,
        password
      });
      console.log('Login response:', response.data); // 로그인 응답 출력
      setUserInfo(response.data); // 유저 정보를 userInfo에 저장
      setLoggedIn(true); // 로그인 상태를 true로 변경
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