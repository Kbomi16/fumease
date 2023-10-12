// App.js

import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './styles.css';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        {/* 애플리케이션 내용을 추가합니다. */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
