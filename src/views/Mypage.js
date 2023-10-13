// MyPage.js

import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const MyPage = () => {
  return (
    <Container>
      <h2 className="mt-4 mb-4">마이페이지</h2>
      
      <Row>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>내 정보</Card.Title>
              <Card.Text>
                이름: 사용자 이름<br />
                이메일: user@example.com<br />
                회원 등급: 일반 회원
              </Card.Text>
              <Button variant="primary">정보 수정</Button>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={8}>
          <Card>
            <Card.Body>
              <Card.Title>주문 내역</Card.Title>
              <Card.Text>
                <ul>
                  <li>주문 번호: 12345 - 상품명: 아이템1 - 가격: $20</li>
                  <li>주문 번호: 67890 - 상품명: 아이템2 - 가격: $30</li>
                  {/* 다른 주문 내역도 추가 가능 */}
                </ul>
              </Card.Text>
              <Button variant="primary">주문 내역 확인</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MyPage;
