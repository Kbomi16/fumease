import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, Nav } from "react-bootstrap";
import styles from "./Mypage.module.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

function formatPrice(price) {
  return price.toLocaleString(); // 숫자를 천단위로 쉼표가 포함된 문자열로 변환
}

const MyPage = () => {
  const { userInfo, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // 로그아웃 처리
    navigate("/"); // 메인 페이지로 이동
  };

  const [orderHistory, setOrderHistory] = useState([]);

  const saveOrderHistory = (userId, orderHistory) => {
    localStorage.setItem(
      `orderHistory_${userId}`,
      JSON.stringify(orderHistory)
    );
  };

  const getOrderHistory = (userId) => {
    return JSON.parse(localStorage.getItem(`orderHistory_${userId}`)) || [];
  };

  const userId = userInfo ? userInfo.id : null;

  useEffect(() => {
    const userId = userInfo ? userInfo.id : null;
    const orderHistoryKey = `orderHistory_${userId}`;

    if (userId) {
      // 해당 사용자의 주문 내역을 가져옵니다.
      const userOrderHistory =
        JSON.parse(localStorage.getItem(orderHistoryKey)) || [];
      setOrderHistory(userOrderHistory);
    }
  }, [userInfo]);

  return (
    <>
      <Container className={styles["container"]}>
        <h2 className="mt-4 mb-4">마이페이지</h2>
        <Row>
          <Col md={2} className={styles.navigation}>
            <Nav className="flex-column">
              고객센터 <hr />
              <Nav.Link className={styles.nav}>공지사항</Nav.Link>
              <Nav.Link className={styles.nav}>고객서비스</Nav.Link>
              <Nav.Link className={styles.nav}>자주 묻는 질문</Nav.Link>
              <Nav.Link className={styles.nav}>1:1 문의하기</Nav.Link>
              <div className={styles.hr}></div>
              계정정보 <hr />
              <Nav.Link className={styles.nav}>회원정보 수정</Nav.Link>
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
                      <div key={index} className={styles["order-block"]}>
                        {order.products.map((product, idx) => (
                          <Row key={idx} className={styles.productRow}>
                            <Col md={2} className={styles.img}>
                              <Card.Img variant="top" src={product.f_img} className={styles["img1"]} />
                            </Col>
                            <Col className={styles.info}>
                              {product.f_name} - {formatPrice(product.f_price)}
                              <p className={styles.p1}>
                                주문 시간:{" "}
                                {new Date(order.timestamp).toLocaleString()}
                              </p>
                            </Col>
                          </Row>
                        ))}
                        <hr />
                      </div>
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
