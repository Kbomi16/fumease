import React, { useState, useEffect, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from './Layout.module.css';

import { AuthContext } from '../../views/AuthContext';

function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const { loggedIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isMainPage = location.pathname === '/'; // 메인 페이지 여부 확인

  const handleMyClick = () => {
    if (loggedIn) {
      // 로그인 되어 있으면 My 페이지로 이동
      navigate('/my')
    } else {
      // 로그인 되어 있지 않으면 로그인 알림창 표시
      alert('로그인이 필요합니다.');
      navigate('/login');
    }
  };

  return (
    <header className={`${styles.header} ${isMainPage && scrollPosition === 0 ? '' : styles.scrolled}`}>
      <nav>
        <ul>
          <Link to="/">
            <img className={styles.logo} src="fumease-logo.png" alt="헤더 이미지" />
          </Link>

          <li className={styles.home}><Link to="/">HOME</Link></li>
          <li className={styles.scent}><Link to="/scent">THE SCENT</Link></li>
          <li className={styles.about}><Link to="/about">ABOUT</Link></li>

          <li className={styles.my} onClick={handleMyClick}>MY</li>

          {!loggedIn && <li className={styles.logins}><Link to="/login">LOGIN</Link></li>}
          <Link to="/cart"><img className={styles.shoppingbag} src="shoppingbag.png" alt="쇼핑백" /></Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
