
// App.js

import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './styles.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import "../src/fonts/Fonts.css"
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from './views/Home'
import Login from './views/Login';
import Signup from './views/Signup';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        {/* 애플리케이션 내용을 추가합니다. */}
      </main>
      <Footer />


      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
