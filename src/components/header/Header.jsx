import React from 'react';
import './Style.css';
import Logo from './chef-hat.png';
import Vector from './Vector.png';
import Line from './Line_1.png';
import Shopping_cart from './Shopping_cart.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home"> 
                  <img src={Logo} className="Logo"></img><h1 className="foo">Foo</h1></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className="menu" href="#home">Home</Nav.Link>
                        <Nav.Link className="menu" href="#menu">Menu</Nav.Link>
                        <Nav.Link className="menu" href="#contact">Contact</Nav.Link>
                        <Nav.Link className="menu" href="#shop">Shop</Nav.Link>
                        <img src={Vector} className='vector'></img>
                        <Nav.Link className="menu1" href="#search">Search</Nav.Link>
                        <img src={Line} className="Line_1"></img>
                        <img src={Shopping_cart} className="Shopping_cart"></img>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default Header;
