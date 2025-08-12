import React from "react";
import { Link } from "react-scroll";
import { Navbar, Container, Nav } from "react-bootstrap";

export default function PortfolioNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#">Vijay</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {["hero", "about", "skills", "projects", "contact"].map((section) => (
              <Nav.Link as="span" key={section}>
                <Link
                  to={section}
                  smooth={true}
                  duration={600}
                  offset={-70}
                  style={{ cursor: "pointer", color: "white" }}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
