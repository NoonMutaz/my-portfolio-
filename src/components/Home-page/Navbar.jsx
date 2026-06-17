import { useState, useEffect } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import styled from "styled-components";
import { colors, fonts } from "../../data/Colors-data";
import cv from "../../assets/Noon_Almutaz_cv.pdf";

const GlassNavbar = styled(Navbar)`
  background: rgba(2, 8, 24, 0.72);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid ${colors.border};
  padding: 0.9rem 1rem;
`;

const Brand = styled(Navbar.Brand)`
  font-family: ${fonts.display};
  color: ${colors.white} !important;
  font-weight: 700;
  font-size: 1.15rem;
  letter-spacing: -0.02em;

  span {
    color: ${colors.accentLight};
  }
`;

const NeonNavLink = styled(Nav.Link)`
  font-family: ${fonts.mono};
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${(props) => (props.$active ? colors.accentLight : colors.muted)} !important;
  font-weight: ${(props) => (props.$active ? "600" : "500")};
  position: relative;
  transition: color 0.2s ease;
  padding-bottom: 0.2rem !important;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0.4rem;
    right: 0.4rem;
    height: 1px;
    background: ${colors.neon};
    transform: scaleX(${(props) => (props.$active ? 1 : 0)});
    transition: transform 0.25s ease;
  }

  &:hover {
    color: ${colors.accentLight} !important;

    &::after {
      transform: scaleX(1);
    }
  }
`;

const ResumeButton = styled.a`
  display: inline-flex;
  align-items: center;
  margin-left: 0.75rem;
  padding: 0.42rem 1rem;
  border-radius: 6px;
  border: 1px solid ${colors.borderHover};
  background: ${colors.accentSoft};
  color: ${colors.accentLight};
  font-family: ${fonts.mono};
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
  transition: background 0.2s ease, color 0.2s ease;

  &:hover {
    background: rgba(56, 189, 248, 0.2);
    color: ${colors.white};
  }
`;

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "technologies", label: "Tech" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

function NavBar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observers = NAV_ITEMS.map(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
      );
      observer.observe(el);
      return observer;
    }).filter(Boolean);

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <GlassNavbar expand="lg" variant="dark" fixed="top">
      <Container>
        <Brand href="#home">
          Noon<span>.</span>
        </Brand>
        <Navbar.Toggle aria-controls="portfolio-navbar" />
        <Navbar.Collapse id="portfolio-navbar" className="justify-content-end">
          <Nav className="align-items-lg-center">
            {NAV_ITEMS.map(({ id, label }) => (
              <NeonNavLink key={id} href={`#${id}`} $active={activeSection === id}>
                {label}
              </NeonNavLink>
            ))}
            <ResumeButton href={cv} download>
              Resume
            </ResumeButton>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </GlassNavbar>
  );
}

export default NavBar;
