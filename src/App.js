
// App.js

import React from 'react';


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import "../src/fonts/Fonts.css"
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from './views/Home'
import Login from './views/Login';
import Signup from './views/Signup';
import MyPage from './views/Mypage';
import Header from './layout/Header';
import Footer from './layout/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/my" element={<MyPage />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
     

    </div>
  );
}

export default App;
