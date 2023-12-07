import React, { useContext } from "react";
import { Container, Row, Col, Card, Button, Nav } from "react-bootstrap";
import styles from "./Mypage.module.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const MyPage = () => {
  const { userInfo, logout } = useContext(AuthContext);
  console.log(userInfo);
  const navigate = useNavigate();

  const orderHistory = JSON.parse(localStorage.getItem("orderHistory")) || [];

  const handleLogout = () => {
    logout(); // 로그아웃 처리
    navigate("/"); // 메인 페이지로 이동
  };

  const handleNavigation = (route) => {
    navigate(`/${route}`);
  };

  return (
    <>
      <Container className={styles["container"]}>
        <h2 className="mt-4 mb-4">마이페이지</h2>
        <Row>
          <Col md={2} className={styles.navigation}>
            <Nav className="flex-column">
              고객센터 <hr/>
              <Nav.Link className={styles.nav}>
                공지사항
              </Nav.Link>
              <Nav.Link className={styles.nav}>
                고객서비스
              </Nav.Link>
              <Nav.Link className={styles.nav}>
                자주 묻는 질문
              </Nav.Link>
              <Nav.Link className={styles.nav}>
                1:1 문의하기
              </Nav.Link>
              <div className={styles.hr}></div>
              계정정보 <hr/>
              <Nav.Link className={styles.nav}>
                회원정보 수정
              </Nav.Link>
            </Nav>
          </Col>
          <Col md={10}>
            <Row className={styles["justify-content-md-center"]}>
              <Col md={4} className={styles.col}>
                <Card className={styles.card}>
                  <Card.Body>
                    <Card.Title className={styles["title"]}>내 정보</Card.Title>
                    {userInfo && (
                      <Card.Text className={styles.text}>
                        아이디: {userInfo.id}
                        <br />
                        이름: {userInfo.username}
                        <br />
                        전화번호: {userInfo.phoneNumber}
                        <br />
                        생년월일: {userInfo.birthdate}
                      </Card.Text>
                    )}
                    <Button
                      variant="secondary"
                      className={styles.btn}
                      onClick={handleLogout}
                    >
                      로그아웃
                    </Button>
                  </Card.Body>
                </Card>

                <Card className={styles.card}>
                  <Card.Body>
                    <Card.Title className={styles["title"]}>
                      주문 내역
                    </Card.Title>

                    {orderHistory.map((order, index) => (
                      <><Card.Text key={index} className={styles["card-text"]}>
                        {order.products.map((product, idx) => (
                          <>
                            <Col md={2} className={styles["img1"]}>
                              <Card.Img variant="top" src={product.f_img} />
                            </Col>
                            <Col>
                              {product.f_name} - {product.f_price}
                              <p>
                                주문 시간:{" "}
                                {new Date(order.timestamp).toLocaleString()}
                              </p>
                            </Col>
                          </>
                        ))}
                      </Card.Text><hr /></>
                    ))}
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MyPage;
