import React, { Component } from 'react';
import { Navbar } from "react-bootstrap";

export default class Footer extends Component {
  render() {
    return (
      <Navbar className="justify-content-center" fixed="bottom" expand="sm" bg="dark" variant="dark">
        <Navbar.Brand style={{fontSize: "1rem"}}>Tres Programadores 2022</Navbar.Brand>
      </Navbar>
        )
  }
}
