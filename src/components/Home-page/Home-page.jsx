import styled from "styled-components";
import { Container } from "react-bootstrap";
import Frameworks from "./Frameworks";
import Navbar from "./Navbar";
import { colors } from "../../data/Colors-data";
import Hero from "./Hero";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import { useState } from "react";

const Section = styled.section`
  padding: 5rem 0;
  background: ${(props) => props.bg || colors.black};
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

  const [expand, setExpanded] = useState(false);
  const handleExpand = () => {
    setExpanded(!expand);
  }
  return (
    <div style={{ backgroundColor: colors.black }}>
      <Navbar />
      <Hero />
      <Section id="projects">
        <Container>
          <Projects handleExpand={handleExpand} />
          <SectionTitle id="technologies" style={{ scrollMarginTop: "110px" }} className="mt-5">
            Technologies & Frameworks
          </SectionTitle>
          <Frameworks />
        </Container>
      </Section>

      <Section id="about" style={{scrollMarginTop: "80px"}} bg={colors.darkGray}>
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
    </div>
  );
}

export default HomePage;
