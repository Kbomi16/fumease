import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
axios.defaults.withCredentials = true
// AuthContext를 생성하여 전역적으로 사용자 로그인 상태를 관리
export const AuthContext = createContext();

// AuthProvider 컴포넌트: 자식 컴포넌트에 로그인 관련 상태 및 함수를 제공하는 프로바이더
export const AuthProvider = ({ children }) => {
  // 로그인 상태 및 사용자 정보를 useState를 통해 관리
  const [loggedIn, setLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  // 로그아웃 시 호출되는 함수
  const logout = () => {
    setLoggedIn(false);
    setUserInfo(null);
  };

  // 초기 렌더링 시 한 번만 실행되는 useEffect
  useEffect(() => {
    console.log("init")
    getUserInfo()
  }, []) // // 빈 의존성 배열이 아니라 userInfo를 의존성 배열에 추가

  // // 서버에서 사용자 정보를 가져오는 함수
  async function getUserInfo() {
    const { data } = await axios.get("http://localhost:3001/users/info")
    console.log(data)
    setUserInfo(data)
  }

  // 사용자 로그인을 처리하는 함수
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

  // AuthContext.Provider를 사용하여 자식 컴포넌트에 상태 및 함수 제공
  return (
    <AuthContext.Provider value={{ loggedIn, setLoggedIn, userInfo, setUserInfo, logout, handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
};