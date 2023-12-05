// App.js
import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import "../src/fonts/Fonts.css"
import { Routes, Route, BrowserRouter } from "react-router-dom";
import 'normalize.css';
import { CartProvider } from './views/cart/CartContext';
import ScrollToTop from './ScrollToTop';


import Home from './views/Home'
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Login from './views/Login';
import Signup from './views/Signup';
import MyPage from './views/Mypage';
import Scent from './views/scent/Scent';
import About from './views/About';
import Detail from './views/Detail';

import Cart from './views/cart/Cart';
import { AuthProvider } from './views/AuthContext';
import OrderComplete from './views/OrderComplete';

function App() {

  return (
    <div className="App">
      <AuthProvider>
        <CartProvider>
          <BrowserRouter>
            <Header />
            <ScrollToTop />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/my" element={<MyPage />} />
              <Route path="/scent" element={<Scent />} />
              <Route path="/about" element={<About />} />
              <Route path="/:f_id" element={<Detail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/order-complete" element={<OrderComplete />} />
            </Routes>
            <Footer />
          </BrowserRouter>



        </CartProvider>
      </AuthProvider>
    </div>
  );
}

export default App;