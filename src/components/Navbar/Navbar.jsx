import React from "react";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "./Navbar.css";
import { Link } from "react-router-dom";

function MainNavbar(props) {
  return (
    <Navbar className="navbar-block" bg="dark" variant="dark" expand="lg">
      <Navbar.Brand className="navbar-logo">SWV Schools</Navbar.Brand>
      <Nav className="mr-auto">
        <Link style={{ textDecoration: "none" }} to="/">
          <Nav className={`nav-li ${props.activeHomePage}`}>
            Home
          </Nav>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/alunos">
          <Nav
            className={`nav-li ${props.activeStudentsPage}`}
            href="#features"
          >
            Alunos
          </Nav>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/turmas">
          <Nav
            className={`nav-li ${props.activeClassesPage}`}
            href="#pricing"
          >
            Turmas
          </Nav>
        </Link>
      </Nav>
    </Navbar>
  );
}

export default MainNavbar;
