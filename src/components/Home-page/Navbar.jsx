 
 

// import styled from 'styled-components';
import { Container,   Navbar, Nav, } from "react-bootstrap";
import { colors } from '../../data/Colors-data';
import cv from '../../assets/Noon_Almutaz_cv.pdf';  
// import NavDropdown from 'react-bootstrap/NavDropdown';

 
 



function NavBar () {





  return (
  <Navbar
        expand="lg"
        style={{ background: colors.darkGray, padding: "1rem" }}
        variant="dark"
        fixed="top"
      >
        <Container>
          <Navbar.Brand style={{ color: colors.neon,  fontWeight: "bold", fontSize: "1.5rem" }} href="#home">
            Noon Almutaz
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="portfolio-navbar" />
          <Navbar.Collapse id="portfolio-navbar" className="justify-content-end">
            <Nav>
              <Nav.Link href="#home" style={{ color: colors.white }}>
                Home
              </Nav.Link>
              <Nav.Link href="#projects" style={{ color: colors.white }}>
                Projects
              </Nav.Link>
              <Nav.Link href="#about" style={{ color: colors.white }}>
                About
              </Nav.Link>
              <Nav.Link href="#contact" style={{ color: colors.white }}>
                Contact
              </Nav.Link>
              <Nav.Link href="#technologies" style={{ color: colors.white }}> 
                Technologies
              </Nav.Link>
              <Nav.Link href={cv} download style={{ color: colors.white }}>
                Resume
              </Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

  );
}

export default NavBar;