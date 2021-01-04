import React from "react";
import { Navbar, Nav } from "react-bootstrap";

export default () => {
  return (
    <Navbar expand="lg" fixed="top" variant="light">
      <Navbar.Brand href="/">
        <i className="fas fa-cocktail logo"></i>
        <span className="brand-name">nectar</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
