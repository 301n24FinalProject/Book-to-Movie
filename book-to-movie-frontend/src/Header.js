import React, { Component } from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import logo from './images/book-logo.png';



export default class Header extends Component {
  render() {
    const { isAuthenticated, loginWithRedirect, logout } = this.props;
    return (
      <Navbar bg="dark" variant="dark">
        <Container style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Navbar.Brand href="/"><Image
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="book logo"
          />Book to Movie</Navbar.Brand>
          {isAuthenticated && (
            <Nav className="me-auto">
              <Nav.Link to="/">Search</Nav.Link>
              <Nav.Link to="/profile">My Saved List</Nav.Link>
              <Nav.Link to="/about">About Us</Nav.Link>
            </Nav>)}
          <Nav>
            {!isAuthenticated && <Nav.Link onClick={loginWithRedirect}>Log In</Nav.Link>}
            {isAuthenticated &&<Nav.Link onClick={() => logout({ returnTo: window.location.origin })}>
              Log Out
            </Nav.Link>}
          </Nav>
        </Container>
      </Navbar>
    )
  }
}
