import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Style.css';
import Fastfood from './Fast_food.png';

function Home() {
  return (
    <Container>
      <Row>
        <Col>
        <Container>
          <Row>

          </Row>
          <Row>

          </Row>
          <Row>

          </Row>
          <Row>

          </Row>
        </Container>
        </Col>
      <Col>
        <img src={Fastfood} className='fast food'></img>
      </Col>
      </Row>
    </Container >
  )
}

export default Home;
