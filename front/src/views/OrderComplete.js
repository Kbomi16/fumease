// OrderComplete.js

import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './OrderComplete.module.css';

function OrderComplete() {
  return (
    <div className={styles.amain}>

      <Container>
        <h1 className={styles.atitle}>주문이 완료되었습니다!</h1>
        <p className={styles.btitle}>주문 내역을 확인해 주셔서 감사합니다.</p>
        <div className="d-flex justify-content-center">

          <Link to="/">

            <Button className={styles.cbtn} variant="outline-dark">홈으로 이동</Button>
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default OrderComplete;
