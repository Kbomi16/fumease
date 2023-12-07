import React, { useContext, useState } from 'react';
import styles from './Login.module.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from './AuthContext';
// withCredentials: 서로 다른 도메인에 요청을 보낼 때 요청에 credential 정보를 담아서 보낼 지를 결정하는 항목 
// CORS 요청을 허용하여 쿠키값 전달 가능하게 함
axios.defaults.withCredentials = true

const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { setLoggedIn, setUserInfo } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    // 로그인 로직 처리
    try {
      const response = await axios.post('http://localhost:3001/users/login', {
        id: username,
        password: password,
      });
      console.log(response.data);
      setLoggedIn(true); // 로그인 상태를 true로 변경
      setUserInfo(response.data); // 로그인한 사용자 정보를 저장
      navigate('/'); // 로그인 성공 후 메인 페이지로 이동
    } catch (error) {
      console.log('Error logging in', error);
    }
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
              <Form.Control className={styles.input} type="text" placeholder="아이디를 입력해주세요."
                value={username} onChange={(e) => setUsername(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label className={styles.label}>비밀번호</Form.Label>
              <Form.Control className={styles.input} type="password" placeholder="비밀번호를 입력해주세요."
                value={password} onChange={(e) => setPassword(e.target.value)} />
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
