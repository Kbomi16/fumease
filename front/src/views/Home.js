// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css'; // styles를 import
import { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  // 키워드 가져오기
  const [keywords, setKeywords] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/keyword', {
      headers: {
        'Access-Control-Allow-Origin': '*', // 허용할 Origin
      },
    })
      .then((response) => {
        const keywordArray = response.data;
        // 데이터가 배열인지 확인
        if (Array.isArray(keywordArray)) {
          // 모든 키워드를 쪼개어 각 단어로 분할
          const allKeywords = keywordArray.reduce((acc, keyword) => {
            const keywords = keyword.f_keyword.split(',').map(keyword => keyword.trim());
            return [...acc, ...keywords];
          }, []);

          // 중복 제거를 위해 Set 사용
          const uniqueKeywords = Array.from(new Set(allKeywords));
          setKeywords(uniqueKeywords);


        } else {
          console.error('Received invalid data', keywordArray);
        }
      })
      .catch((error) => {
        console.error('Error fetching keywords:', error);
      });
  }, []);

  //선택한 키워드로 향수 추천해주기
  const [selectedKeywords, setSelectedKeywords] = useState([]);

  //사용자가 키워드를 선택할 때 호출된다.
  const handleKeywordSelection = (keyword) => {
    if (selectedKeywords.length < 3) {
      setSelectedKeywords((prevKeywords) => [...prevKeywords, keyword]);
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
        <p>오늘의 날씨와 기분에 따라 원하는 키워드 3가지를 선택해보세요.</p>
        <div className={styles['keyword-buttons']}>
          {keywords.map((keyword, index) => {
            // 이전에 keyword가 #으로 시작하는지 확인
            const isHexColor = keyword.startsWith('#');
            // 버튼 스타일을 동적으로 설정
            const buttonStyle = isHexColor ? { backgroundColor: keyword } : {};

            // hex값이 검정색인 경우 글자 색을 흰색으로 설정
            if (isHexColor && keyword === "#000000") {
              buttonStyle.color = 'white';
            }
            return (
              <button key={index} className={styles.keyword}>
                {isHexColor ? (
                  <>
                    <div className={styles.colorCircle} style={buttonStyle}></div>
                    <span className={styles.keywordText}>{keyword}</span>
                  </>
                ) : (
                  <span className={styles.keywordText}>{keyword}</span>
                )}
              </button>
            );
          })}

        </div>
        <button className={styles.aiBtn}>추천 향수 보기</button>
      </div>
    </div>
  );
};

export default Home;
