// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css'; // styles를 import
import { useEffect, useState } from 'react';


const Home = () => {
  const [keywords, setKeywords] = useState([]);
  const [selectedKeyword, setSelectedKeyword] = useState(null);
  const [perfumes, setPerfumes] = useState([]);

  useEffect(() => {
    // 백엔드 API 엔드포인트에 GET 요청 보내기
    fetch('/keywords')
      .then((response) => response.json())
      .then((data) => setKeywords(data))
      .catch((error) => console.error('Error fetching keywords:', error));
  }, []);

  const handleKeywordSelect = (keyword) => {
    setSelectedKeyword(keyword);
    fetch(`/perfumes?keyword=${keyword}`)
      .then((response) => response.json())
      .then((data) => setPerfumes(data))
      .catch((error) => console.error('Error fetching perfumes:', error));
  };

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
            key={keyword}
            className={styles.keyword}
            onClick={() => handleKeywordSelect(keyword)}
          >
            {keyword}
          </button>
        ))}
      </div>
      <div>
        <h1>Selected Keyword: {selectedKeyword}</h1>
        <ul>
          {perfumes.map((perfume, index) => (
            <li key={index}>
              {perfume.f_name} - Price: {perfume.f_price}
            </li>
          ))}
        </ul>
      </div>

          <button className={styles.aiBtn}>추천 향수 보기</button>
        </div>
      </div>
  );
};

export default Home;
