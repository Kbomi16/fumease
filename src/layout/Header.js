// Header.js
import './styles.css';

import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <nav>
                <ul>
                    <Link to="/main"><img className="logo" src="fumease-logo.png" alt="헤더 이미지" /></Link>

                    <li className="home"><Link to="/home">HOME</Link></li>
                    <li className="scent"><Link to="/scent">THE SCENT</Link></li>
                    <li className="about"><Link to="/about">ABOUT</Link></li>
                    <li className="buy"><Link to="/buy">BUY NOW</Link></li>
                    <li className="my"><Link to="/my">MY</Link></li>
                    <li className="logins"><Link to="/login">LOGIN</Link></li>
                    <Link to="/shop"><img className="shoppingbag" src="shoppingbag.png" alt="쇼핑백" /></Link>

                </ul>
            </nav>
        </header>
    );
}

export default Header;
