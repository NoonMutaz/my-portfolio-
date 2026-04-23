import { Container, Navbar, Nav } from "react-bootstrap";
import styled from "styled-components";
import { colors } from "../../data/Colors-data";
import cv from "../../assets/Noon_Almutaz_cv.pdf";

const GlassNavbar = styled(Navbar)`
  background: rgba(20, 20, 20, 0.78);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 255, 127, 0.3);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.35);
  padding: 0.85rem 1rem;
`;

const NeonNavLink = styled(Nav.Link)`
  color: ${colors.white} !important;
  font-weight: 500;
  transition: color 0.2s ease, text-shadow 0.2s ease;

  &:hover {
    color: ${colors.neon} !important;
    text-shadow: 0 0 10px ${colors.neon};
  }
`;

function NavBar() {

  return (
  <GlassNavbar
        expand="lg"
        variant="dark"
        fixed="top"
      >
        <Container>
          <Navbar.Brand style={{ color: colors.neon, fontWeight: "bold", fontSize: "1.5rem" }} href="#home">
            Noon Almutaz
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="portfolio-navbar" />
          <Navbar.Collapse id="portfolio-navbar" className="justify-content-end">
            <Nav>
              <NeonNavLink href="#home">
                Home
              </NeonNavLink>
              <NeonNavLink href="#projects">
                Projects
              </NeonNavLink>
              <NeonNavLink href="#about">
                About
              </NeonNavLink>
              <NeonNavLink href="#contact">
                Contact
              </NeonNavLink>
              <NeonNavLink href="#technologies">
                Technologies
              </NeonNavLink>
              <NeonNavLink href={cv} download>
                Resume
              </NeonNavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </GlassNavbar>

  );
}

export default NavBar;