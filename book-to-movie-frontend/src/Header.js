import React, { Component } from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import logo from './images/book-logo.png';



export default class Header extends Component {
  render() {
    const { isAuthenticated, loginWithRedirect, logout } = this.props;
    return (
        <Navbar style={{ boxSizing: 'border-box', width: '100%', padding: '0.5rem 2rem', display: 'flex', justifyContent: 'space-between' }} collapseOnSelect bg="dark" variant="dark">
          <Navbar.Brand href="/"><Image
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="book logo"
          />Book to Movie</Navbar.Brand>
          {isAuthenticated && (
            <Nav className="me-auto">
              <LinkContainer to="/search"><Nav.Link>Search</Nav.Link></LinkContainer>
              <LinkContainer to="/mySavedList"><Nav.Link>My Saved List</Nav.Link></LinkContainer>
              <LinkContainer to="/about"><Nav.Link>About Us</Nav.Link></LinkContainer>
            </Nav>)}
          <Nav>
            {!isAuthenticated && <Nav.Link onClick={loginWithRedirect}>Log In</Nav.Link>}
            {isAuthenticated && <Nav.Link onClick={() => logout({ returnTo: window.location.origin + '/search' })}> Log Out</Nav.Link>}
          </Nav>
        </Navbar>
    )
  }
}
