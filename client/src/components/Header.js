import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark' collapseOnSelect expand='lg'>
        <Container>
          <Navbar.Brand href='#home'>
            <img
              alt=''
              src={require('../logo.png')}
              width='35'
              height='35'
              className='d-inline-block align-top'
            />{' '}
            That Science Teacher
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link href='/cart'>
                <i className='fas fa-shopping-bag'></i> Shop
              </Nav.Link>
              <Nav.Link href='/login'>
                <i className='fas fa-user'></i> Login
              </Nav.Link>
              <Nav.Link href='/contact'>
                <i className='fas fa-shopping-cart'></i> Cart
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
