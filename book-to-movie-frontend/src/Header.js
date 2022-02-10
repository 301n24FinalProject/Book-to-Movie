import React, { Component } from 'react';
import { Navbar, NavItem, Nav, Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LogoutButton from './LogoutButton';
import logo from './images/book-logo.png';



export default class Header extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Container style={{display: 'flex', justifyContent: 'space-between'}}>
        <Navbar.Brand href="/"><Image 
        src={logo}
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="book logo"
        />Book to Movie</Navbar.Brand>
        {!this.props.isAuthenticated && (
          <Nav className="me-auto">
            <Nav.Link to="/">Search</Nav.Link>
            <Nav.Link to="/profile">My Saved List</Nav.Link>
            <Nav.Link to="/about">About Us</Nav.Link>
            <Nav.Link to="/">
              <LogoutButton/>
            </Nav.Link>
            </Nav>)}
            <Nav>
            <Nav.Link to="login">Log In</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
  }
}
