import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Card,
  Button,
  Row,
  Col,
  Modal,
  Form,
} from "react-bootstrap";
import { CartContext } from "./CartContext";
import { Formik } from "formik";
import * as Yup from "yup";
import styles from "./Cart.module.css";
import { AuthContext } from "../AuthContext";

function Cart() {
  const { cart, removeFromCart, updateCartItemQuantity } = useContext(
    CartContext
  );
  const { userInfo } = useContext(AuthContext); // AuthContext에서 userInfo 가져오기
  const [show, setShow] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState(
    cart.map((product) => product.f_id)
  );

  const navigate = useNavigate();

  const handleClose = () => {
    setShow(false);
    setOrderConfirmed(false);
    setSelectedProducts(cart.map((product) => product.f_id));
  };

  const handleShow = () => {
    setShow(true);
    setOrderConfirmed(false);
  };

  const handleOrder = () => {
    const userId = userInfo ? userInfo.id : null;
    const orderHistoryKey = `orderHistory_${userId}`;
    const orderHistory = JSON.parse(localStorage.getItem(orderHistoryKey)) || [];

    const selectedProductsInCart = cart.filter((product) =>
      selectedProducts.includes(product.f_id)
    );

    const timestamp = Date.now();
    const newOrder = {
      timestamp,
      products: selectedProductsInCart,
    };

    orderHistory.push(newOrder);

    localStorage.setItem(orderHistoryKey, JSON.stringify(orderHistory));

    navigate("/order-complete");

    const selectedProductIds = selectedProducts;
    selectedProductIds.forEach((productId) => removeFromCart(productId));
    setSelectedProducts([]);

    setOrderConfirmed(true);

  // 선택된 상품만 장바구니에서 제거
  const productsToRemove = cart.filter((product) =>
    selectedProducts.includes(product.f_id)
  );
  productsToRemove.forEach((product) => removeFromCart(product.f_id));

  // 선택된 상품들을 장바구니에서 제거한 후, selectedProducts 초기화
  setSelectedProducts([]);
  };

  const handleCheckboxChange = (productId) => {
    // 체크박스 변경 시 처리 로직
    setSelectedProducts((prevSelected) => {
      if (productId === "all") {
        // 전체 선택 체크박스일 경우
        return prevSelected.length === cart.length
          ? []
          : cart.map((product) => product.f_id);
      } else if (prevSelected.includes(productId)) {
        // 이미 선택된 경우 해제
        return prevSelected.filter((id) => id !== productId);
      } else {
        // 선택되지 않은 경우 추가
        return [...prevSelected, productId];
      }
    });
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("이름을 입력해주세요"),
    address: Yup.string().required("주소를 입력해주세요"),
  });

  const formattedCurrency = (value) => {
    return value.toLocaleString();
  };

  const selectedTotalAmount = cart
    .filter((product) => selectedProducts.includes(product.f_id))
    .reduce((total, product) => total + product.f_price * product.quantity, 0);
  //천단위 쉼표 추가
  const formattedTotalAmount = formattedCurrency(selectedTotalAmount);

  return (
    <Container className={styles["container"]}>
      <h1 className={styles.shop}>장바구니</h1>
      {cart.length === 0 ? (
        <p className={styles.p2}>장바구니가 비어있습니다.</p>
      ) : (
        <>
          <div className={styles.selectAllRow}>
            <div className={styles["selectButton"]}>
              <Form.Check
                custom
                type="checkbox"
                id="checkbox-all"
                onChange={() => handleCheckboxChange("all")}
                checked={selectedProducts.length === cart.length}
              />
              <span>전체 선택</span>
            </div>
          </div>

          {cart.map((product) => (
            <Card key={product.f_id} className={styles["card"]}>
              <Card.Body>
                <Row className="align-items-center">
                  <Col md={1} className={styles["selectButton"]}>
                    <Form.Check
                      custom
                      type="checkbox"
                      id={`checkbox-${product.f_id}`}
                      onChange={() => handleCheckboxChange(product.f_id)}
                      checked={selectedProducts.includes(product.f_id)}
                    />
                  </Col>
                  <Col md={2}>
                    <Card.Img variant="top" src={product.f_img} className={styles["img"]}/>
                  </Col>
                  <Col md={3} className={styles["title"]}>
                    {product.f_name}
                  </Col>
                  <Col md={2} className={styles["text"]}>
                    {formattedCurrency(product.f_price * product.quantity)}원
                  </Col>
                  <Col md={2} className={styles.quantityControl}>
                    <Button
                      variant="outline-dark"
                      onClick={() =>
                        updateCartItemQuantity(
                          product.f_id,
                          product.quantity - 1
                        )
                      }
                    >
                      -
                    </Button>
                    <span className={styles.quantity}>{product.quantity}</span>
                    <Button
                      variant="outline-dark"
                      onClick={() =>
                        updateCartItemQuantity(
                          product.f_id,
                          product.quantity + 1
                        )
                      }
                    >
                      +
                    </Button>
                  </Col>

                  <Col md={2} className="d-flex justify-content-end">
                    <Button
                      variant="primary"
                      className={styles.btn}
                      onClick={() => removeFromCart(product.f_id)}
                    >
                      삭제하기
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          ))}
          <Row className={styles.totalAmountRow}>
            <div className={styles.totalAmountLabel}>
              총 결제금액 :{formattedTotalAmount}원
            </div>
          </Row>

          <Button
            variant="primary"
            onClick={handleShow}
            className={styles.btn1}
          >
            주문하기
          </Button>
          {!orderConfirmed && (
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>주문 확인</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Formik
                  initialValues={{ name: "", address: "", request: "" }}
                  validationSchema={validationSchema}
                  onSubmit={(values, { setSubmitting, resetForm }) => {
                    setSubmitting(true);
                    resetForm();
                    handleClose();
                    // 선택된 상품만 장바구니에서 제거
                    const productsToRemove = cart.filter((product) =>
                      selectedProducts.includes(product.f_id)
                    );
                    productsToRemove.forEach((product) =>
                      removeFromCart(product.f_id)
                    );

                    setOrderConfirmed(true);
                    // 주문이 완료되면 OrderComplete 페이지로 이동
                    navigate("/order-complete");
                  }}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                  }) => (
                    <Form onSubmit={handleSubmit}>
                      <Form.Group controlId="formName">
                        <Form.Label>이름</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.name}
                          isInvalid={touched.name && errors.name}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.name}
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group controlId="formAddress">
                        <Form.Label>주소</Form.Label>
                        <Form.Control
                          type="text"
                          name="address"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.address}
                          isInvalid={touched.address && errors.address}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.address}
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group controlId="formRequest">
                        <Form.Label>요청사항</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          name="request"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.request}
                        />
                      </Form.Group>

                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                          취소
                        </Button>
                        <Button
                          variant="primary"
                          type="submit"
                          disabled={
                            isSubmitting || selectedProducts.length === 0
                          }
                          className={styles.btn2}
                          onClick={handleOrder}
                        >
                          주문
                        </Button>
                      </Modal.Footer>
                    </Form>
                  )}
                </Formik>
              </Modal.Body>
            </Modal>
          )}
        </>
      )}
    </Container>
  );
}

export default Cart;
