// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css'; // styles를 import
import { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [keywords, setKeywords] = useState([]);

  useEffect(() => {
    // 서버에서 향수 키워드 데이터를 가져오는 요청
    axios.get('http://localhost:3001/scent', {
      headers: {
        'Access-Control-Allow-Origin': '*', // 허용할 Origin
      },
    })
      .then((response) => {
        setKeywords(response.data);
      })
      .catch((error) => {
        console.error('Error fetching keywords:', error);
      });
  }, []); // 빈 배열을 두 번째 매개변수로 전달하여 한 번만 실행

  return (
      <div className={styles['main-page']}>
        <div className={styles.main}>
          <div className={styles['left-section']}>
            <img className={styles.mainimg} src="img/main1.png" alt="Left Section" />
          </div>

          <div className={styles['right-section']}>
            <img className={styles.mainimg} src="https://web-resource.tamburins.com/assets/image/main/toilet_fragrance/pc_mainHero_right.jpg" alt="Right Section" />
          </div>
        </div>
        <button className={styles.gotoScent}>
          <Link to="/scent" style={{ textDecoration: 'none', color: '#000' }}>
            제품 보기
          </Link>
        </button>

        <div className={styles.ai}>
          <h1>TODAY PERFUME</h1>
          <p>오늘의 날씨와 기분에 따라 원하는 키워드를 선택해보세요.</p>
          <div className={styles['keyword-buttons']}>
          {keywords.map((keyword) => (
          <button
            key={keyword.f_id}
            className={styles.keyword}
          >
            {keyword.f_name} - {keyword.f_price}
          </button>
        ))}
      </div>
      <div>
      </div>

          <button className={styles.aiBtn}>추천 향수 보기</button>
        </div>
      </div>
  );
};

export default Home;
