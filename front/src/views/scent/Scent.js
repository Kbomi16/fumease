import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import YouTube from 'react-youtube';
import styles from './Scent.module.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function formatPrice(price) {
  return price.toLocaleString(); // 숫자를 천단위로 쉼표가 포함된 문자열로 변환
}

function App() {
  const navigate = useNavigate();

  // YouTube 동영상의 ID
  const videoId = 'kDIlGu26XVI';

  const opts = {
    height: '800',
    width: '100%',
    playerVars: {
      autoplay: 1,
      rel: 0,
      modestbranding: 1,
    },
  };


  // 백엔드에서 가져온 제품 데이터를 저장할 상태
  const [products, setProducts] = useState([]);

  // 선택된 브랜드 상태
  const [selectedBrand, setSelectedBrand] = useState(null);

  // 브랜드를 클릭했을 때의 핸들러
  const handleBrandClick = (brand) => {
    setSelectedBrand(brand);
  }

  useEffect(() => {
    // 백엔드 서버에서 제품 데이터를 가져오는 요청
    axios.get('http://localhost:3001/list').then((response) => {
      const products = response.data
      setProducts(products);
    })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  // 페이지네이션을 위한 변수들
  const [page, setPage] = useState(1); // 현재 페이지
  const [loading, setLoading] = useState(false); // 추가 데이터 로딩 여부

  // 스크롤 이벤트 핸들러
  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 100 && !loading && selectedBrand === null) {
      // "전체보기"일 때 스크롤이 페이지 하단에 도달하면 추가 데이터 로드
      setLoading(true);
      axios.get(`http://localhost:3001/list?page=${page + 1}`)
        .then((response) => {
          const newProducts = response.data;
          setProducts([...products, ...newProducts]);
          setPage(page + 1);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching more products:', error);
          setLoading(false);
        });
    }
  };

  // 스크롤 이벤트 리스너 등록
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [page, loading, selectedBrand]);

  return (
    <Container className={styles['container']}>
      <YouTube videoId={videoId} opts={opts} />
      <div className={styles.text1}>
        <h1 className={`${styles.mt4} ${styles.mb4}`}>퍼퓸 컬렉션</h1>
        <p>[SOLACE: 한줌의 위안] <br />위안에서 오는 다양한 감정을 표현한 이번 향수 컬렉션은 시간이 흐르면서 일어나는 다채로운 향의 변화를 온전히 느낄 수 있는 향수입니다.<br /> 세상에 흩어진 모든 이야기에서 영감을 받은 감각적인 향이 단조로운 일상에 자유롭고 새로운 리듬을 부여합니다. 규정되지 않은 아름다움을 향수를 통해 경험해보세요.</p>
      </div>

      <div className={styles['circle-container']}>
        <div className='brand0' onClick={() => handleBrandClick(null)}>
          <div className={styles.circle}><h2>ALL</h2></div>
          <p className={styles.brand}>전체보기</p>
        </div>
        <div className='brand1' onClick={() => handleBrandClick('조말론')}>
          <div className={styles.circle}><img src='img/brand/j.png'></img></div>
          <p className={styles.brand}>조말론</p>
        </div>
        <div className='brand2' onClick={() => handleBrandClick('탬버린즈')}>
          <div className={styles.circle}><img src='img/brand/t.png'></img></div>
          <p className={styles.brand}>탬버린즈</p>
        </div>
        <div className='brand3' onClick={() => handleBrandClick('논픽션')}>
          <div className={styles.circle}><img src='img/brand/n.png'></img></div>
          <p className={styles.brand}>논픽션</p>
        </div>
        <div className='brand4' onClick={() => handleBrandClick('딥디크')}>
          <div className={styles.circle}><img src='img/brand/d.png'></img></div>
          <p className={styles.brand}>딥디크</p>
        </div>
        <div className='brand5' onClick={() => handleBrandClick('디올')}>
          <div className={styles.circle}><img src='img/brand/di.png'></img></div>
          <p className={styles.brand}>디올</p>
        </div>
        <div className='brand6' onClick={() => handleBrandClick('바이레도')}>
          <div className={styles.circle}><img src='img/brand/bi.png'></img></div>
          <p className={styles.brand}>바이레도</p>
        </div>
        <div className='brand7' onClick={() => handleBrandClick('산타마리아노벨라')}>
          <div className={styles.circle}><img src='img/brand/san.png'></img></div>
          <p className={styles.brand}>산타마리아노벨라</p>
        </div>

      </div>

      <Row className={styles['scents']}>
        {products
          .filter((product) => selectedBrand === null || product.f_brand === selectedBrand)
          .map((product) => (
            <Col key={product.id} xs={12} sm={6} md={4} lg={3} className={styles.mb4}>
              <Card>
                <Card.Img variant="top" src={product.f_img} />
                <Card.Body>
                  <Card.Title className={styles['title']}>{product.f_name}</Card.Title>
                  <Card.Text className={styles['text']}>{formatPrice(product.f_price)}원</Card.Text>
                  <Card.Text className={styles['text']}>{product.f_brand}</Card.Text>
                  <Button variant="primary" className={styles.btn} onClick={() => navigate(`/${product.f_id}`)}>MORE</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  );
}

export default App;