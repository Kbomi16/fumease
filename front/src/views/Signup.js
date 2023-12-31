// Signup.js
import React, { useState } from "react";
import styles from "./Login.module.css";
import { Container, Form, FormCheck, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    user_id: "",
    id: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
    phoneNumber: "",
    birthdate: "",
    agreeTerms: false,
    agreePrivacyPolicy: false,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // 만약 체크박스이면 checked 값을 사용하여 업데이트
    const newValue = type === "checkbox" ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  const [passwordMatch, setPasswordMatch] = useState(true); // 비밀번호 확인 여부 상태

  const handlePasswordMatch = () => {
    // 비밀번호와 비밀번호 확인 값 비교
    if (formData.password !== formData.confirmPassword) {
      // 비밀번호와 비밀번호 확인 값이 다를 경우
      setPasswordMatch(false); // 비밀번호 불일치 상태로 변경
    } else {
      // 비밀번호와 비밀번호 확인 값이 일치하는 경우
      setPasswordMatch(true); // 비밀번호 일치 상태로 변경
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 비밀번호 확인 체크
    handlePasswordMatch();

    if (!passwordMatch) {
      // 비밀번호 불일치 시 에러 처리
      console.log("비밀번호가 다릅니다.");
      // 사용자에게 메시지를 보여줄 수 있는 방법 (예: 알림창, 오류 메시지)
      return;
    }


    try {
      //회원가입 API 호출
      const response = await axios.post(
        "http://localhost:3001/users/signup",
        formData
      );
      //서버로부터 응답 확인
      console.log(response.data);
      // 회원가입 성공 후 로그인 페이지로 이동
      navigate("/login");
    } catch {
      console.log("Error submitting signup form");
    }
  };

  return (
    <Container className={styles["container1"]}>
      <h2>회원가입</h2>
      <Form onSubmit={handleSubmit} className={styles.form}>
        <Form.Group controlId="formUsername">
          <Form.Label className={styles.label}>아이디</Form.Label>
          <Form.Control
            className={styles.input}
            type="text"
            name="id"
            placeholder="아이디를 입력하세요."
            value={formData.id}
            onChange={handleChange}
            required 
          />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label className={styles.label}>비밀번호</Form.Label>
          <Form.Control
            className={styles.input}
            type="password"
            name="password"
            placeholder="비밀번호를 입력하세요."
            value={formData.password}
            onChange={handleChange}
            required 
          />
        </Form.Group>

        <Form.Group controlId="formConfirmPassword">
          <Form.Label className={styles.label}>비밀번호 확인</Form.Label>
          <div className={styles.confirm}>
          <Form.Control
            className={styles.input}
            type="password"
            name="confirmPassword"
            placeholder="비밀번호를 다시 입력하세요."
            value={formData.confirmPassword}
            onChange={handleChange}
            required 
          />
          <Button
            variant="primary"
            onClick={handlePasswordMatch}
            className={styles.btn1}
          >
            확인
          </Button></div>
          {!passwordMatch && (
            <p style={{ color: "red" }} className={styles.p1}>비밀번호가 일치하지 않습니다.</p>
          )}
          
        </Form.Group>

        <Form.Group controlId="formUsername">
          <Form.Label className={styles.label}>이름</Form.Label>
          <Form.Control
            className={styles.input}
            type="text"
            name="username"
            placeholder="이름 입력하세요."
            value={formData.username}
            onChange={handleChange}
            required 
          />
        </Form.Group>

        <Form.Group controlId="formGender">
          <Form.Label className={styles.label}>성별</Form.Label>
          <Form.Control
            className={styles.input}
            as="select"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required 
          >
            <option value="">선택하세요</option>
            <option value="male">남성</option>
            <option value="female">여성</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formPhoneNumber">
          <Form.Label className={styles.label}>연락처</Form.Label>
          <Form.Control
            className={styles.input}
            type="tel"
            name="phoneNumber"
            placeholder="예) 01012341234"
            value={formData.phoneNumber}
            onChange={handleChange}
            required 
          />
        </Form.Group>

        <Form.Group controlId="formBirthdate">
          <Form.Label className={styles.label}>생년월일</Form.Label>
          <Form.Control
            className={styles.input}
            type="date"
            name="birthdate"
            value={formData.birthdate}
            onChange={handleChange}
            required 
          />
        </Form.Group>

        {/* 체크박스 */}
        <Form.Group controlId="formAgreeTerms">
          <FormCheck className="checkbox">
            <FormCheck.Input
              type="checkbox"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleChange}
            />
            <FormCheck.Label className={styles.label}>
              이용약관에 동의합니다.
            </FormCheck.Label>
          </FormCheck>
        </Form.Group>

        <Form.Group controlId="formAgreePrivacyPolicy">
          <FormCheck className="checkbox">
            <FormCheck.Input
              type="checkbox"
              name="agreePrivacyPolicy"
              checked={formData.agreePrivacyPolicy}
              onChange={handleChange}
            />
            <FormCheck.Label className={styles.label}>
              개인정보 처리방침에 동의합니다.
            </FormCheck.Label>
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
