import styled from "styled-components";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import Frameworks from "./Frameworks";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import Certificates from "./Certificates";
import Experience from "./Experience";

const PageShell = styled.div`
  background: transparent;
  position: relative;
  z-index: 1;
`;

const Section = styled.section`
  padding: clamp(5rem, 8vw, 7rem) 0;
  background: ${(props) => props.bg || "rgba(8, 8, 8, 0.55)"};
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(4px);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      to right,
      transparent,
      rgba(0, 255, 127, 0.1),
      transparent
    );
  }
`;

const SectionTitle = styled.h2`
  color: white;
  font-size: clamp(1.8rem, 4vw, 2.2rem);
  font-weight: 800;
  margin-bottom: clamp(1.8rem, 3vw, 2.5rem);
  letter-spacing: -0.8px;
  position: relative;
  line-height: 1.2;

  &::after {
    content: '';
    position: absolute;
    bottom: calc(-1 * clamp(0.6rem, 1.5vw, 0.9rem));
    left: 0;
    width: 50px;
    height: 3px;
    background: linear-gradient(
      to right,
      #00ff7f,
      rgba(0, 255, 127, 0)
    );
    border-radius: 2px;
  }
`;

const SectionMotion = motion(Section);
const TitleMotion = motion(SectionTitle);

const sectionFadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.34, 1.56, 0.64, 1],
    },
  },
};

const titleFade = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

function HomePage() {
  return (
    <PageShell>
      <Navbar />
      <Hero />

      {/* Experience Section */}
      <Section style={{ scrollMarginTop: "80px" }}>
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={containerVariants}
          >
            <Experience />
          </motion.div>
        </Container>
      </Section>

      {/* Projects Section */}
      <Section style={{ scrollMarginTop: "80px" }}>
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={containerVariants}
          >
            <Projects />
          </motion.div>
        </Container>
      </Section>

      {/* Technologies Section */}
      <Section style={{ scrollMarginTop: "80px" }}>
        <Container>
          <TitleMotion
            id="technologies"
            style={{
              scrollMarginTop: "110px",
              marginBottom: "2.5rem",
            }}
            variants={titleFade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
          >
            Technologies & Frameworks
          </TitleMotion>

          <Frameworks />
        </Container>
      </Section>

      {/* About Section */}
      <Section
        id="about"
        style={{ scrollMarginTop: "80px" }}
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

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <About />
          </motion.div>
        </Container>
      </Section>

      {/* Certificates Section */}
      <Section style={{ scrollMarginTop: "80px" }}>
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={containerVariants}
          >
            <Certificates />
          </motion.div>
        </Container>
      </Section>

      {/* Contact Section */}
      <SectionMotion
        id="contact"
        variants={sectionFadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        style={{ scrollMarginTop: "80px" }}
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

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <Contact />
          </motion.div>
        </Container>
      </SectionMotion>
    </PageShell>
  );
}

export default HomePage;