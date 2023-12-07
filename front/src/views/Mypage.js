import React, { useContext } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import styles from './Mypage.module.css'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const MyPage = () => {
  const { userInfo, logout } = useContext(AuthContext);
  console.log(userInfo);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // 로그아웃 처리
    navigate('/'); // 메인 페이지로 이동
  };

  return (
    <Container className={styles['container']}>
      <h2 className="mt-4 mb-4">마이페이지</h2>

      <Row className={styles['justify-content-md-center']}>
        <Col md={4} className={styles.col}>
          <Card className={styles.card}>
            <Card.Body>
              <Card.Title className={styles['title']}>내 정보</Card.Title>
              {userInfo && (
                <Card.Text className={styles.text}>
                  아이디: {userInfo.id}<br />
                  이름: {userInfo.username}<br />
                  전화번호: {userInfo.phoneNumber}<br />
                  생년월일: {userInfo.birthdate}
                </Card.Text>
              )}
              <Button variant="secondary" className={styles.btn} onClick={handleLogout}>로그아웃</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MyPage;