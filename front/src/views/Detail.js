import React, { useContext, useEffect, useState } from 'react';
import Stack from 'react-bootstrap/Stack';
import { Button, Container, Row, Col, Image } from 'react-bootstrap';
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';
import { CartContext } from '../views/cart/CartContext';
import styles from './Detail.module.css';

function App(props) {
  const navigate = useNavigate();
  
  const { f_id } = useParams();
  const [product, setProduct] = useState(null);

  const { cart, setCart } = useContext(CartContext); // CartContext 불러오기

  const handleAddToCart = () => { // 장바구니 추가 핸들러
    setCart([...cart, product]);

    const goToCart = window.confirm('장바구니에 추가되었습니다! 장바구니 페이지로 이동하시겠습니까?');
    if (goToCart) {
      navigate('/cart')
    }
  };

  useEffect(() => {
    axios.get(`http://localhost:3001/detail/${f_id}`)
      .then((response) => {
        const product = response.data;
        setProduct(product);

        console.log("data", response.data);

      })
      .catch((error) => {
        console.error('제품 정보를 가져오는 중 오류 발생:', error);
      });
  }, [f_id]); // f_id가 변경될 때마다 useEffect가 실행되도록

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <Container fluid className={styles.amain}>

      <Stack gap={4}>
        <Row>
          <Col md={3} sm={12}>
            <h3 className={styles.price}>{product.f_brand}</h3>
          </Col>
          <Col md={5} sm={12}>
            <Image className={styles.brandimg} src={product.f_img} alt={product.name} fluid />
          </Col>
          <Col md={3} sm={12}>
            <div className={styles.brandcont}>
              <h3 className={styles.name}>{product.f_name}</h3>
              <p>
                {product.description}
              </p>
              <p className={styles.c}>사이즈</p>
              <p>50ML</p>
              <hr className={styles.jb} />
              <h3 className={styles.price}>{product.f_price}</h3>
              <div className="d-flex justify-content-center">
                <Button variant="outline-dark" className={styles.add} onClick={handleAddToCart}>장바구니 추가</Button>
              </div>
              <hr className={styles.jb} />
              <p className={styles.c}>향</p>
              <p>{product.f_scent}</p>
              <hr className={styles.jb} />
              <p className={styles.c}>노트</p>
              <p>{product.f_note}</p>
            </div>
          </Col>
        </Row>
      </Stack>

    </Container>
  );
}

export default App; 