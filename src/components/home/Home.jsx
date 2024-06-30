import React, {useState} from 'react';
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
        <Col>
        <Container>
          <Row>
          <h1 className="fast">Fast</h1>
          </Row>
          <Row>
          <h3 className="food_delivery">Food Delivery</h3>
          </Row>
          <Row>
          <img src={Group_4} className="Group_4"></img>
          </Row>
          <Row>
          <Button variant="primary" className='button' onClick={handleShow}>
              Order Now
            </Button>
            <Container>
              <Row>
              <h3 className="Watch_Vedio">Watch Vedio</h3>
              </Row>
              <Row>
              <img src={Group_2} className="Group_2"></img>
              </Row>
              <Row>
              <img src={Group_3} className="Group_3"></img>
              </Row>
            </Container>
          </Row>
        </Container>
        </Col>
      <Col>
        <img src={Fastfood} className='fast_food'></img>
      </Col>
      </Row>
    </Container >
  )
}

export default Home;
