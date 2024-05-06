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
                <Link to="/comA">Component</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/drum">Drum</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/linegraph">Linegraph</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/calculator">Calculator</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/error">Error</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/city">City</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/contact">Contact</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/headcomp">HeadComp</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/tempapp">Tempapp</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/todo">Todo</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/quote">Quote</Link>
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
