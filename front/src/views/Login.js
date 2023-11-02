// Login.js
import React from 'react';
import styles from './Login.module.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate  } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // 로그인 로직 처리
  };
  
  const gotoSignup = () => {
    navigate('/signup');
  };

  return (
    <Container className={styles['container']}>
      <Row className={styles['justify-content-md-center']}>
        <Col xs={12} md={6} className={styles['border-right']}>
          <h2>로그인</h2>
          <Form onSubmit={handleLogin}>
            <Form.Group controlId="formUsername">
              <Form.Label className={styles.label}>아이디</Form.Label>
              <Form.Control className={styles.input} type="text" placeholder="아이디를 입력해주세요." />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label className={styles.label}>비밀번호</Form.Label>
              <Form.Control className={styles.input} type="password" placeholder="비밀번호를 입력해주세요." />
            </Form.Group>

            <Button variant="primary" type="submit" className={styles.btn}>
              로그인
            </Button>
          </Form>
        </Col>

        <Col xs={12} md={6}>
          <div className={styles['signup-section']}>
            <h2>회원가입</h2>
            <p>아직 계정이 없으신가요?</p>
            <Button variant="secondary" onClick={gotoSignup} className={styles.btn}>신규 회원가입</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
