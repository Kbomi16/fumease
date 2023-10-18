// App.js
import React, { useState } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import "../src/fonts/Fonts.css"
import { Routes, Route, BrowserRouter } from "react-router-dom";
import 'normalize.css';

import Home from './views/Home'
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Login from './views/Login';
import Signup from './views/Signup';
import MyPage from './views/Mypage';
import Scent from './views/scent/Scent'
import Cart from './views/cart/Cart'

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
          <Route path="/scent" element={<Scent />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
     

    </div>
  );
}

export default App;
