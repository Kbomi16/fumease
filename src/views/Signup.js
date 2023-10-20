// Signup.js
import React, { useState } from 'react';
import styles from './Login.module.css';
import { Container, Row, Col, Form, FormCheck, Button } from 'react-bootstrap';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    gender: '',
    phoneNumber: '',
    birthdate: '',
    agreeTerms: false,
    agreePrivacyPolicy: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // 만약 체크박스이면 checked 값을 사용하여 업데이트
    const newValue = type === 'checkbox' ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 여기에 회원가입 로직을 추가합니다.
    console.log('회원가입 폼이 제출되었습니다:', formData);
    // 실제로는 API 호출 또는 다른 회원가입 로직을 수행해야 합니다.
  };


  return (
    <Container className={styles['container1']}>
          <h2>회원가입</h2>
          <Form onSubmit={handleSubmit} className={styles.form}>
            <Form.Group controlId="formUsername">
              <Form.Label className={styles.label}>아이디</Form.Label>
              <Form.Control className={styles.input}
                type="text"
                name="username"
                placeholder="아이디를 입력하세요."
                value={formData.username}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label className={styles.label}>비밀번호</Form.Label>
              <Form.Control className={styles.input}
                type="password"
                name="password"
                placeholder="비밀번호를 입력하세요."
                value={formData.password}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formConfirmPassword">
              <Form.Label className={styles.label}>비밀번호 확인</Form.Label>
              <Form.Control className={styles.input}
                type="password"
                name="confirmPassword"
                placeholder="비밀번호를 다시 입력하세요."
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formUsername">
              <Form.Label className={styles.label}>이름</Form.Label>
              <Form.Control className={styles.input}
                type="text"
                name="username"
                placeholder="이름 입력하세요."
                value={formData.username}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formGender">
              <Form.Label className={styles.label}>성별</Form.Label>
              <Form.Control className={styles.input}
                as="select"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">선택하세요</option>
                <option value="male">남성</option>
                <option value="female">여성</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formPhoneNumber">
              <Form.Label className={styles.label}>연락처</Form.Label>
              <Form.Control className={styles.input}
                type="tel"
                name="phoneNumber"
                placeholder="예) 01012341234"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formBirthdate">
              <Form.Label className={styles.label}>생년월일</Form.Label>
              <Form.Control className={styles.input}
                type="date"
                name="birthdate"
                value={formData.birthdate}
                onChange={handleChange}
              />
            </Form.Group>

{/* 체크박스 */}
<Form.Group controlId="formAgreeTerms">
              <FormCheck className='checkbox'>
                <FormCheck.Input
                  type="checkbox"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                />
                <FormCheck.Label className={styles.label}>이용약관에 동의합니다.</FormCheck.Label>
              </FormCheck>
            </Form.Group>

            <Form.Group controlId="formAgreePrivacyPolicy">
              <FormCheck className='checkbox'>
                <FormCheck.Input
                  type="checkbox"
                  name="agreePrivacyPolicy"
                  checked={formData.agreePrivacyPolicy}
                  onChange={handleChange}
                />
                <FormCheck.Label className={styles.label}>개인정보 처리방침에 동의합니다.</FormCheck.Label>
              </FormCheck>
            </Form.Group>

            <Button variant="primary" type="submit" className={styles.btn}>
              회원가입
            </Button>
          </Form>
    </Container>
  );
};

export default Signup;
