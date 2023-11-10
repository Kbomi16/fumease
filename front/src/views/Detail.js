import React, { useEffect, useState } from 'react';
import Stack from 'react-bootstrap/Stack';
import { Button, Container, Row, Col, Image } from 'react-bootstrap';
import axios from "axios";
import { useParams } from 'react-router-dom';
import styles from './Detail.module.css';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/detail')
      .then((response) => {
        const products = response.data;
        setProducts(products);
      })
      .catch((error) => {
        console.error('제품 정보를 가져오는 중 오류 발생:', error);
      });
  }, []);

  return (
    <Container fluid className={styles.amain}>
      <Stack gap={4}>
        <Row>
          <Col md={3} sm={12}>
            <Image className={styles.aimg} src="logo/aesop_logo.png" alt="aesop" fluid />
          </Col>
          <Col md={5} sm={12}>
            <Image className={styles.brandimg} src="img/aesop_rose_edp.avif" alt="aesop_rose" fluid />
          </Col>
          <Col md={3} sm={12}>
            <div className={styles.brandcont}>
              <h3 className={styles.name}>{products.f_name}이솝 루주</h3>
              <p>
                장미 향이지만 활기찬 시소 향, 우드, 스파이스, 흙내음,
                가벼운 스모크가 더해진 미묘하고 풍성한 노트로 부드러우면서 강렬한 향수
              </p>
              <p className={styles.c}>사이즈</p>
              <p>50ml</p>
              <hr className={styles.jb} />
              <h3 className={styles.price}>210,000</h3>
              <div className="d-flex justify-content-center"> {/* 중앙 정렬을 위한 d-flex 클래스 */}
                <Button variant="outline-dark" className={styles.add}>장바구니 추가</Button>
              </div>
              <hr className={styles.jb} />
              <p className={styles.c}>향</p>
              <p>플로럴, 그린, 우디</p>
              <hr className={styles.jb} />
              <p className={styles.c}>노트</p>
              <p>Top note: Middel Note: Base Note:</p>
            </div>
          </Col>
        </Row>
      </Stack>
    </Container>
  );
}

export default App;
