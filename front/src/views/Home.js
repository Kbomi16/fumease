// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css'; // styles를 import
import { useEffect, useState } from 'react';


const Home = () => {
  const [keywords, setKeywords] = useState([]);

  useEffect(() => {
    // 서버에서 키워드 목록을 가져오는 API 호출
    fetch('/keywords')
      .then((response) => response.json())
      .then((data) => setKeywords(data))
      .catch((error) => console.error('Error fetching keywords:', error));
  }, []);

  const handleKeywordSelect = (keyword) => {
    console.log('Selected Keyword:', keyword);

    // 선택한 키워드에 따라 원하는 동작 수행
    switch (keyword) {
      case '우드':
        // Fresh 키워드에 대한 동작
        console.log('You selected Fresh!');
        // 추가적인 동작을 수행하거나 상태 변경 등을 처리할 수 있습니다.
        break;
      case '머스크':
        // Floral 키워드에 대한 동작
        console.log('You selected Floral!');
        // 추가적인 동작을 수행하거나 상태 변경 등을 처리할 수 있습니다.
        break;
      case '살냄새':
        // Citrus 키워드에 대한 동작
        console.log('You selected Citrus!');
        // 추가적인 동작을 수행하거나 상태 변경 등을 처리할 수 있습니다.
        break;
      // 추가적인 키워드에 대한 처리를 추가할 수 있습니다.
      default:
        break;
    }
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
            key={keyword.id}
            className={styles.keyword}
            onClick={() => handleKeywordSelect(keyword.name)}
          > {keyword.name}</button>
        ))}
          </div>

          <button className={styles.aiBtn}>추천 향수 보기</button>
        </div>
      </div>
  );
};

export default Home;
