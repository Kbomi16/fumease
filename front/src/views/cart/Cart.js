import React, { useContext, useState } from 'react';
import { Container, Card, Button, Row, Col, Modal, Form } from 'react-bootstrap';
import { CartContext } from './CartContext';
import { Formik } from 'formik';
import * as Yup from 'yup';

import styles from './Cart.module.css';

function Cart() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  const [show, setShow] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false); // 새로운 상태 변수

  const handleClose = () => {
    setShow(false);
    setOrderConfirmed(false); // 주문 확인 상태를 초기화합니다.
  };

  const handleShow = () => setShow(true);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('이름을 입력해주세요'),
    address: Yup.string().required('주소를 입력해주세요'),
  });

  return (
    <Container className={styles['container']}>
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p>장바구니가 비어있습니다.</p>
      ) : (
        <>
          {cart.map((product) => (
            <Card key={product.f_id} className={styles['card']}>
              <Card.Body>
                <Row className="justify-content-between align-items-center">
                  <Col md={4} className={styles['img']}>
                    <Card.Img variant="top" src={product.f_img} />
                  </Col>
                  <Col md={4} className={styles['title']}>
                    {product.f_name}
                  </Col>
                  <Col md={2} className={styles['text']}>
                    {product.f_price}원
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
          <Button variant="primary" onClick={handleShow} className={styles.btn1}>
            주문하기
          </Button>
        </>
      )}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>주문 확인</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={{ name: '', address: '', request: '' }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setSubmitting(true);
              resetForm();
              handleClose();
              clearCart();
              setOrderConfirmed(true); // 주문 확인 상태를 true로 설정합니다.
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
                  <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
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
                  <Form.Control.Feedback type="invalid">{errors.address}</Form.Control.Feedback>
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
                  <Button variant="primary" type="submit" disabled={isSubmitting} className={styles.btn2}>
                    주문
                  </Button>
                </Modal.Footer>
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>

    </Container>
  );
}

export default Cart;
