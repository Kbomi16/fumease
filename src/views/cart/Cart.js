// Cart.js

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import styles from './Cart.module.css';

const Cart = ({ cart }) => {
  // 장바구니 총 가격 계산
  const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.price, 0);
  };

  return (
    <Container className={styles.container}>
      <h1>장바구니</h1>
      <Row>
        {cart.map((product) => (
          <Col key={product.id} md={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>Price: ${product.price}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* 총 가격 */}
      <h3>Total: ${calculateTotal()}</h3>
    </Container>
  );
};

export default Cart;
