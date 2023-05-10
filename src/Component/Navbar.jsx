import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Menu = () => {
  return (
    <>
      <div className="menu">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">My Website</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link>
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/ComA">Component</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/Calculator">Calculator</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/Error">Error</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/City">City</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/contact">Contact</Link>
              </Nav.Link>
              <Nav.Link>
                <SearchBar />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
};

export default Menu;
