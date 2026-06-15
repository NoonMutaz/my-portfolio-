import { useState, useEffect } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import styled from "styled-components";
import { colors } from "../../data/Colors-data";
import cv from "../../assets/Noon_Almutaz_cv.pdf";

const GlassNavbar = styled(Navbar)`
  background: rgba(14, 14, 14, 0.74);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.33);
  padding: 0.85rem 1rem;
`;

const Brand = styled(Navbar.Brand)`
  color: ${colors.neon} !important;
  font-weight: 700;
  font-size: 1.35rem;
  letter-spacing: 0.01em;
`;

const NeonNavLink = styled(Nav.Link)`
  color: ${(props) =>
    props.$active ? colors.neon : colors.white} !important;
  font-weight: ${(props) => (props.$active ? "600" : "500")};
  position: relative;
  transition: color 0.2s ease, text-shadow 0.2s ease;
  padding-bottom: 0.25rem !important;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0.5rem;
    right: 0.5rem;
    height: 2px;
    background: ${colors.neon};
    border-radius: 2px;
    transform: scaleX(${(props) => (props.$active ? 1 : 0)});
    transition: transform 0.25s ease;
  }

  &:hover {
    color: ${colors.neon} !important;
    text-shadow: 0 0 10px ${colors.neon};

    &::after {
      transform: scaleX(1);
    }
  }
`;

const ResumeButton = styled.a`
  display: inline-flex;
  align-items: center;
  margin-left: 0.5rem;
  padding: 0.45rem 1.1rem;
  border-radius: 50px;
  background: ${colors.neon};
  color: ${colors.black};
  font-weight: 700;
  font-size: 0.9rem;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 16px rgba(0, 255, 127, 0.35);
    color: ${colors.black};
  }
`;

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "technologies", label: "Technologies" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

function NavBar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((item) => item.id);
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <GlassNavbar expand="lg" variant="dark" fixed="top">
      <Container>
        <Brand href="#home">Noon Almutaz</Brand>
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
