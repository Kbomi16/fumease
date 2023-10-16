import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Layout.module.css';

function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.header} ${scrollPosition > 0 ? styles.scrolled : ''}`}>
      <nav>
        <ul>
          <Link to="/">
            <img className={styles.logo} src="fumease-logo.png" alt="헤더 이미지" />
          </Link>

          <li className={styles.home}><Link to="/">HOME</Link></li>
          <li className={styles.scent}><Link to="/scent">THE SCENT</Link></li>
          <li className={styles.about}><Link to="/about">ABOUT</Link></li>
          <li className={styles.buy}><Link to="/buy">BUY NOW</Link></li>
          <li className={styles.my}><Link to="/my">MY</Link></li>
          <li className={styles.logins}><Link to="/login">LOGIN</Link></li>
          <Link to="/shop"><img className={styles.shoppingbag} src="shoppingbag.png" alt="쇼핑백" /></Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
