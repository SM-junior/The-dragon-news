import React from "react";
import logo from "../../../../../assets/logo.png";
import moment from "moment";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <Container className="py-3">
      <div className="text-center">
        <img src={logo} alt="" />
        <p>
          <small>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </small>
        </p>
        <p>{moment().format("dddd, MMMM DD, YYYY")}</p>
      </div>
      <div className="d-flex bg-light py-2 px-2 mb-3">
        <Button className="me-4" variant="danger">
          Latest
        </Button>
        <Marquee speed={80} pauseOnHover>
          I can be a React component, multiple React components, or just some
          text. I can be a React component, multiple React components, or just
          some text.
        </Marquee>
      </div>
      <Navbar expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
              <Nav.Link href="#link">Career</Nav.Link>
            </Nav>
            <Button className="me-2" variant="secondary">
              Profile
            </Button>
            <Button variant="success">Login</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;
