import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../src/components/Layout/Header'
import Footer from '../src/components/Layout/Footer'
import "../src/fonts/Fonts.css"
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from './views/Home'

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>

      <Header />
      <Footer />
    </div>
  );
}

export default App;
