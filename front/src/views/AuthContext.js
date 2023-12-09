import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// withCredentials: 서로 다른 도메인에 요청을 보낼 때 요청에 credential 정보를 담아서 보낼 지를 결정하는 항목 
// CORS 요청을 허용하여 쿠키값 전달 가능하게 함
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
    if(data){
      setLoggedIn(true)
    }
    setUserInfo(data)
  } 

  const handleLogin = async (username, password,callback) => {
    
    try {
      const response = await axios.post('http://localhost:3001/users/login', {
        id:username,
        password,
      });
      console.log('Login response:', response.data); // 로그인 응답 출력
  
      setUserInfo(response.data); // 유저 정보를 userInfo에 저장
      setLoggedIn(true); // 로그인 상태를 true로 변경
      if(typeof callback=="function"){
        callback()
      }
      
      // navigate('/'); // 로그인 성공 후 메인 페이지로 이동
    } catch (error) {
      console.error('Login failed:', error); // 로그인 실패 시 에러 메시지 출력
      // 비밀번호가 틀렸을 때 에러로 인식되었다고 가정
    if (error.response && error.response.status === 400) {
      // 여기서 알림을 띄우는 작업을 수행할 수 있습니다
      alert('비밀번호가 올바르지 않습니다. 다시 시도해주세요.');
    }
    }
  };
  
  return (
    <AuthContext.Provider value={{ loggedIn, setLoggedIn, userInfo, setUserInfo, logout, handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
};
