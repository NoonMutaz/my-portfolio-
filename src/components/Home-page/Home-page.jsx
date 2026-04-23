import styled from "styled-components";
import { Container } from "react-bootstrap";
import Frameworks from "./Frameworks";
import Navbar from "./Navbar";
import { colors } from "../../data/Colors-data";
import Hero from "./Hero";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
 
const PageShell = styled.div`
  background: transparent;
  position: relative;
  z-index: 1;
`;

const Section = styled.section`
  padding: 5rem 0;
  background: ${(props) => props.bg || "rgba(8, 8, 8, 0.55)"};
  border-top: 1px solid rgba(0, 255, 127, 0.13);
  border-bottom: 1px solid rgba(0, 255, 127, 0.13);
  backdrop-filter: blur(2px);
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-family: "Orbitron", sans-serif;
  font-weight: bold;
  color: ${colors.neon};
  margin-bottom: 3rem;
  text-shadow: 0 0 10px ${colors.neon};
`;


function HomePage() {
  return (
    <PageShell>
      <Navbar />
      <Hero />
      <Section id="projects">
        <Container>
          <Projects />
          <SectionTitle id="technologies" style={{ scrollMarginTop: "110px" }} className="mt-5">
            Technologies & Frameworks
          </SectionTitle>
          <Frameworks />
        </Container>
      </Section>

      <Section id="about" style={{ scrollMarginTop: "80px" }} bg="rgba(22, 22, 22, 0.7)">
        <Container>
          <SectionTitle>About Me</SectionTitle>
          <About />
        </Container>
      </Section>

      <Section id="contact">
        <Container>
          <SectionTitle>Contact Me</SectionTitle>
          <Contact />
        </Container>
      </Section>
    </PageShell>
  );
}

export default HomePage;
