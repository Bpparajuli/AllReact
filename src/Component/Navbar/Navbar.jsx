import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar.jsx";
import "./navbar.css";
import { Route, Routes } from "react-router-dom";
import Pikachu from "../pikachu/Pikachu.jsx";
import Homepage from "./Homepage";
import CovidTable from "../Covid/CovidTable.jsx";
import Error from "./Error";
import Calculator from "../Calculator/Calculator.jsx";
import City from "../City/City.jsx";
import Regform from "../Regform/Regform.jsx";
import Tempapp from "../Temp/Tempapp.jsx";
import Todo from "../Todo/Todo.jsx";
import Quote from "../quote/Quote.jsx";
import Linegraph from "./Linegraph";
import Drum from "../drum/Drum.jsx";
const Menu = () => {
  return (
    <>
      <div className="menu">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/homepage">Home</Navbar.Brand>
          <Navbar.Toggle bg="dark" aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link>
                <Link to="/covidtable">Covid</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/pikachu">Pikachu</Link>
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
                <Link to="/city">City</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/contact">Contact</Link>
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
                <Link to="/error">Error</Link>
              </Nav.Link>
              <Nav.Link>
                <SearchBar />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <Routes>
        <Route path="/drum" element={<Drum />} />
        <Route path="/allreact" element={<Homepage />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/covidtable" element={<CovidTable />} />
        <Route path="/pikachu" element={<Pikachu />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/city" element={<City />} />
        <Route path="/contact" element={<Regform />} />
        <Route path="/tempapp" element={<Tempapp />} />
        <Route path="/linegraph" element={<Linegraph />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default Menu;
