import React, { Component } from 'react';
import { Container, Image, Nav, Navbar, NavItem } from 'react-bootstrap';
import logo from './images/book-logo.png';
import { Link } from "react-router-dom";



export default class Header extends Component {
  render() {
    const { isAuthenticated, loginWithRedirect, logout } = this.props;
    return (
      <Navbar collapseOnSelect bg="dark" variant="dark">
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
              <NavItem><Link to="/">Search</Link></NavItem>
              <NavItem><Link to="/mySavedList" >My Saved List</Link></NavItem>
              <NavItem><Link to="/about">About Us</Link></NavItem>
            </Nav>)}
          <Nav>
            {!isAuthenticated && <Link to="/" onClick={loginWithRedirect}>Log In</Link>}
            {isAuthenticated && <Link to="/" onClick={() => logout({ returnTo: window.location.origin })}>
              Log Out
            </Link>}
          </Nav>
        </Container>
      </Navbar>
    )
  }
}
