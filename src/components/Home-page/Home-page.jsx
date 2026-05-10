import styled from "styled-components";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import Frameworks from "./Frameworks";
import Navbar from "./Navbar";
import { colors } from "../../data/Colors-data";
import Hero from "./Hero";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import Certificates from "./Certificates";
const PageShell = styled.div`
  background: transparent;
  position: relative;
  z-index: 1;
`;

const Section = styled.section`
  padding: clamp(4rem, 7vw, 6rem) 0;
  background: ${(props) => props.bg || "rgba(8, 8, 8, 0.55)"};
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(4px);
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-family: "Orbitron", sans-serif;
  font-weight: bold;
  color: ${colors.white};
  margin-bottom: 3.1rem;
  font-size: clamp(1.55rem, 4vw, 2.2rem);
  text-shadow: 0 0 14px rgba(0, 255, 127, 0.2);
`;

const SectionMotion = motion(Section);
const TitleMotion = motion(SectionTitle);

const sectionFadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const titleFade = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

function HomePage() {
  return (
    <PageShell>
      <Navbar />
      <Hero />
      <SectionMotion
        id="projects"
        variants={sectionFadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Container>
          <Projects />
          <TitleMotion
            id="technologies"
            style={{ scrollMarginTop: "110px" }}
            className="mt-5"
            variants={titleFade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
          >
            Technologies & Frameworks
          </TitleMotion>
          <Frameworks />
        </Container>
      </SectionMotion>

      <SectionMotion
        id="about"
        style={{ scrollMarginTop: "80px" }}
        bg="rgba(22, 22, 22, 0.7)"
        variants={sectionFadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Container>
          <TitleMotion
            variants={titleFade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
          >
            About Me
          </TitleMotion>
          <About />
        </Container>
      </SectionMotion>


      <SectionMotion
  id="certificates"
  bg="rgba(14, 14, 14, 0.75)"
  variants={sectionFadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
>
  <Container>
    <TitleMotion
      variants={titleFade}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
    >
      Certifications & Courses
    </TitleMotion>

    <Certificates/>
  </Container>
</SectionMotion>




      <SectionMotion
        id="contact"
        variants={sectionFadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Container>
          <TitleMotion
            variants={titleFade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
          >
            Contact Me
          </TitleMotion>
          <Contact />
        </Container>
      </SectionMotion>
    </PageShell>
  );
}

export default HomePage;
