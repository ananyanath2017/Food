import React from 'react';
import './Style.css';
import Logo from './chef-hat.png';
import Vector from './Vector.png';
import Line from './Line_1.png';
import Shopping_cart from './Shopping_cart.png';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand className= "navbar-brand" href="#home">
            <img src={Logo} className="Logo"></img><span className="foo">Foo</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="menu" href="#home">Home</Nav.Link>
              <Nav.Link className="menu" href="#menu">Menu</Nav.Link>
              <Nav.Link className="menu" href="#contact">Contact</Nav.Link>
              <Nav.Link className="menu" href="#shop">Shop</Nav.Link>
              <img src={Vector} className='vector'></img>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
              </Form>
              {/* <Nav.Link className="menu1" href="#search">Search</Nav.Link> */}
              <img src={Line} className="Line_1"></img>
              <img src={Shopping_cart} className="shopping_cart"></img>
              <span className="text_2">2</span>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header;
