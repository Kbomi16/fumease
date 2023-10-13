// Home.js
import {React, useState} from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
  const [selectedKeyword, setSelectedKeyword] = useState(null);

  const handleKeywordSelect = (keyword) => {
    console.log('Selected Keyword:', keyword);

    // 선택한 키워드에 따라 원하는 동작 수행
    switch (keyword) {
      case 'Fresh':
        // Fresh 키워드에 대한 동작
        console.log('You selected Fresh!');
        // 추가적인 동작을 수행하거나 상태 변경 등을 처리할 수 있습니다.
        break;
      case 'Floral':
        // Floral 키워드에 대한 동작
        console.log('You selected Floral!');
        // 추가적인 동작을 수행하거나 상태 변경 등을 처리할 수 있습니다.
        break;
      case 'Citrus':
        // Citrus 키워드에 대한 동작
        console.log('You selected Citrus!');
        // 추가적인 동작을 수행하거나 상태 변경 등을 처리할 수 있습니다.
        break;
      // 추가적인 키워드에 대한 처리를 추가할 수 있습니다.
      default:
        break;
    }

    setSelectedKeyword(keyword);
  };

  return (
    <div className="main-page">

      <div className='main'>
        <div className="left-section">
          <img className='mainimg' src="img/main1.png" alt="Left Section" />
        </div>

        <div className="right-section">
          <img className='mainimg' src="https://web-resource.tamburins.com/assets/image/main/toilet_fragrance/pc_mainHero_right.jpg" alt="Right Section" />
        </div>
      </div>
      <button className='gotoScent'><Link to="/scent" style={{ textDecoration: 'none', color: '#000' }}>제품 보기</Link></button>

      <div className='ai'>
        <h1>TODAY PERFUME</h1>
        <p>오늘의 날씨와 기분에 따라 원하는 키워드를 선택해보세요.</p>
        <div className="keyword-buttons">
          <button className='keyword' onClick={() => handleKeywordSelect('Fresh')}>Fresh</button>
          <button className='keyword' onClick={() => handleKeywordSelect('Floral')}>Floral</button>
          <button className='keyword' onClick={() => handleKeywordSelect('Citrus')}>Citrus</button>
        </div>
        <button className='aiBtn'>추천 향수 보기</button>
      </div>
    </div>
  );
};

export default Home;
