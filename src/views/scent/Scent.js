import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import YouTube from 'react-youtube';
import './Scent.css';

const products = [
  { id: 1, name: '향수 1', price: 50.99, imageUrl: 'url/to/product1.jpg' },
  { id: 2, name: '향수 2', price: 65.99, imageUrl: 'url/to/product2.jpg' },
  // Add more products
];

function App() {
  // YouTube 동영상의 ID
  const videoId = 'kDIlGu26XVI';

  const opts = {
    height: '800',
    width: '100%',
    playerVars: {
      autoplay: 1, 
      rel: 0, 
      modestbranding: 1,
    },
  };

  const circles = Array.from({ length: 10 }, (_, index) => index + 1);

  return (
    <Container>
      <YouTube videoId={videoId} opts={opts} />
      <div className='text1'>
      <h1 className="mt-4 mb-4">퍼퓸 컬렉션</h1>
      <p>[SOLACE: 한줌의 위안] <br/>위안에서 오는 다양한 감정을 표현한 이번 향수 컬렉션은 시간이 흐르면서 일어나는 다채로운 향의 변화를 온전히 느낄 수 있는 향수입니다.<br/> 세상에 흩어진 모든 이야기에서 영감을 받은 감각적인 향이 단조로운 일상에 자유롭고 새로운 리듬을 부여합니다. 규정되지 않은 아름다움을 향수를 통해 경험해보세요.</p>
      </div>

      <div className="circle-container">
      {circles.map((number) => (
        <div key={number} className="circle">
          {number}
        </div>
      ))}
    </div>

      <Row>
        {products.map(product => (
          <Col key={product.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card>
              <Card.Img variant="top" src={product.imageUrl} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>${product.price.toFixed(2)}</Card.Text>
                <Button variant="primary">구매하기</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default App;
