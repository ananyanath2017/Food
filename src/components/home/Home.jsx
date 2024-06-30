import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './Style.css';
import Fastfood from './Fast_food.png';
import Group_4 from './Group_4.png';
import Group_3 from './Group_3.png';
import Group_2 from './Group_2.png';


function Home() {
  const [an, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Container>
      <Row>
        <Col xs={6}>
          <Container>
            <Row>
              <Col xs={2}>
                <span className="fast">Fast</span>
              </Col>
              <Col xs={2} className="food_delivery">
                <span >Food Delivery</span>
              </Col>
              <Col xs={2} style={{}}>
                <img src={Group_4} className="Group_4"></img>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button variant="primary" className='button' onClick={handleShow}>
                  Order Now
                </Button>
              </Col>
              <Col>
                <h3 className="Watch_Vedio">Watch Vedio</h3>
              </Col>
              <Col>
                <img src={Group_2} className="Group_2"></img>
              </Col>
            </Row>
            <Row>
              <img src={Group_3} className="Group_3"></img>
            </Row>
          </Container>
        </Col >

        <Col xs={6}>
          <img src={Fastfood} className='fast_food'></img>
        </Col>
      </Row >
    </Container >
  )
}

export default Home;
