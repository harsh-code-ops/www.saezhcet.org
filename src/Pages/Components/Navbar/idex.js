import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import { React, useState, useEffect } from "react";

import { Nav, Navbar, Container, NavDropdown, NavLink } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import Logonav from "../../../images/sae logo.png";
function App() {
  const [expanded, setExpanded] = useState(false);
  ///new added
  const [yOffset, setYOffset] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  function handleScroll() {
    const currentYOffset = window.pageYOffset;
    const visible = yOffset > currentYOffset;

    setYOffset(currentYOffset);
    setVisible(visible);
  }
  //upto here

  const navToggle = () => {
    setExpanded(expanded ? false : true);
  };

  const closeNav = () => {
    setExpanded(false);
  };
  // eslint-disable-next-line
  return (
    <Navbar
      className={visible ? "navcontainer1" : "navcontainer2"}
      expand="md"
      expanded={expanded}
    >
      <Container className="containerm">
        <Navbar.Brand href="#home">
          <img className="logonav" src={Logonav} onClick={closeNav}></img>
        </Navbar.Brand>
        <Navbar.Toggle
          onClick={navToggle}
          className="togglebtn"
          aria-controls="basic-navbar-nav"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        />
        <Navbar.Collapse bg="primary" id="basic-navbar-nav">
          <Nav className="me-auto flexnav">
            <LinkContainer to="/">
              <Nav.Link
                onClick={closeNav}
                data-bs-toggle="collapse"
                data-bs-target=".navbar-collapse.show"
                className="linksnav active"
              >
                HOME
              </Nav.Link>
            </LinkContainer>

            <NavDropdown
              className="linksnav"
              title="ABOUT US"
              id="basic-nav-dropdown"
            >
              <LinkContainer to="/vision-mission">
                <NavDropdown.Item onClick={closeNav}>
                  Vision & Mission
                </NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/facultymsg">
                <NavDropdown.Item onClick={closeNav}>
                  Faculty Advisor's Message
                </NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/governingboard">
                <NavDropdown.Item onClick={closeNav}>
                  Governing Board
                </NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/achievements">
                <NavDropdown.Item onClick={closeNav}>
                  Achievements
                </NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>

            <NavDropdown
              className="linksnav"
              title="TEAMS"
              id="basic-nav-dropdown"
            >
              <LinkContainer to="/zfr-cv">
                <NavDropdown.Item onClick={closeNav}>ZFR</NavDropdown.Item>
              </LinkContainer>
              {/* <LinkContainer to='/zfr-ev'> */}
              {/* <NavDropdown.Item onClick={closeNav}>ZFR-EV</NavDropdown.Item> */}
              {/* </LinkContainer> */}
              <LinkContainer to="/tgw">
                <NavDropdown.Item onClick={closeNav}>TGW</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
            <NavDropdown
              className="linksnav"
              title="AFFILIATES"
              id="basic-nav-dropdown"
            >
              <LinkContainer to="/sponsors">
                <NavDropdown.Item onClick={closeNav}>SPONSORS</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/alumnis">
                <NavDropdown.Item onClick={closeNav}>ALUMNI</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>

            <LinkContainer to="/event">
              <Nav.Link onClick={closeNav} className="linksnav">
                EVENTS
              </Nav.Link>
            </LinkContainer>

            {/* <LinkContainer to="/gallery">
              <Nav.Link onClick={closeNav} className="linksnav">
                GALLERY
              </Nav.Link>
            </LinkContainer> */}
            <LinkContainer to="/downloads">
              <Nav.Link onClick={closeNav} className="linksnav">
                DOWNLOADS
              </Nav.Link>
            </LinkContainer>

            <LinkContainer to="/contact">
              <Nav.Link onClick={closeNav} className="linksnav">
                CONTACT
              </Nav.Link>
            </LinkContainer>
            {/* <LinkContainer to="/apply">
              <Nav.Link onClick={closeNav} className="linksnav">
                JOIN US
              </Nav.Link>
            </LinkContainer> */}
            <LinkContainer to="/supportus">
              <Nav.Link id="sprt" onClick={closeNav} className="linksnav">
                SUPPORT US
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default App;
