// Home.js
import React from 'react';
import './Home.css'

import Header from '../layout/Header';
import Footer from '../layout/Footer';

const Home = () => {
  return (
    <div className="main-page">
      <Header className="main-header" />

      <div className='main'>
        <div className="left-section">
          <img className='mainimg' src="https://i.pinimg.com/564x/41/5d/a6/415da6fd2291cff0ccf2ea5b94eb5e77.jpg" alt="Left Section" />
          {/* Add other content for the left section if needed */}
        </div>

        <div className="right-section">
          <img src="path_to_right_image.jpg" alt="Right Section" />
          {/* Add other content for the right section if needed */}
        </div>
      </div>

      <Footer />
      <style>
        {`
          .main-page a {
            color: black !important;
             /* 메인 페이지에서만 스타일 변경, !important를 사용하여 다른 스타일을 덮어씁니다 */
          }
        `}
        {`
          .main-page header {
            background: none !important;
             /* 메인 페이지에서만 스타일 변경, !important를 사용하여 다른 스타일을 덮어씁니다 */
          }
        `}
        {`
          .shoppingbag, .logo {
            filter: invert(100%);
          }
        `}
      </style>
    </div>
  );
};

export default Home;
