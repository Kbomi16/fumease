import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

function Header() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  return (
    <header className="header">
      <Link to="/">Home</Link>
    </header>
  );
}

export default Header;
