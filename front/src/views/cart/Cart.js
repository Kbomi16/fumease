import React, { useContext } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { CartContext } from './CartContext';

import styles from './Cart.module.css';

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <Container className={styles['container']}>
      <h1>Cart</h1>
      {cart.map((product) => (
        <Card key={product.f_id}>
          <Card.Body>
            <Card.Title className={styles['title']}>{product.f_name}</Card.Title>
            <Card.Text className={styles['text']}>{product.f_price}원</Card.Text>
            <Button variant="primary" className={styles.btn} onClick={() => removeFromCart(product.f_id)}>Remove from Cart</Button>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
}

export default Cart;
