// Home.js
import React from 'react';
import './Home.css'

const Home = () => {
  return (
    <div className="main-page">
      <div className="left-section">
        <img src="https://i.pinimg.com/564x/41/5d/a6/415da6fd2291cff0ccf2ea5b94eb5e77.jpg" alt="Left Section" />
        {/* Add other content for the left section if needed */}
      </div>

      <div className="right-section">
        <img src="path_to_right_image.jpg" alt="Right Section" />
        {/* Add other content for the right section if needed */}
      </div>
    </div>
  );
};

export default Home;
