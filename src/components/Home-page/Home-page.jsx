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
import Footer from "../common/Footer";
import BackToTop from "../common/BackToTop";
import SectionHeader from "../common/SectionHeader";
import { colors } from "../../data/Colors-data";

const PageShell = styled.div`
  position: relative;
  z-index: 1;
`;

const Section = styled.section`
  padding: clamp(4.5rem, 8vw, 6.5rem) 0;
  position: relative;
  scroll-margin-top: 88px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: min(90%, 1100px);
    height: 1px;
    background: linear-gradient(
      to right,
      transparent,
      ${colors.border},
      transparent
    );
  }
`;

const SectionMotion = motion(Section);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

function HomePage() {
  return (
    <PageShell>
      <Navbar />
      <BackToTop />

      <Hero />

      <Section id="experience">
        <Container>
          <SectionHeader
            index="01"
            title="Work Experience"
          ///  subtitle="Roles where I've shipped production software and grown as an engineer."
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            variants={containerVariants}
          >
            <Experience />
          </motion.div>
        </Container>
      </Section>

      <Section id="projects">
        <Container>
          <SectionHeader
            index="02"
            title="  Projects"
            subtitle="A sample of products I've designed and shipped end to end."
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            variants={containerVariants}
          >
            <Projects />
          </motion.div>
        </Container>
      </Section>

      <Section id="technologies">
        <Container>
          <SectionHeader
            index="03"
            title="Technologies"
            subtitle="Tools and frameworks I reach for when building products."
          />
          <Frameworks />
        </Container>
      </Section>

      <Section id="about">
        <Container>
          <SectionHeader
            index="04"
            title="About Me"
            subtitle="Engineering background, craft, and how I approach building software."
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={containerVariants}
          >
            <About />
          </motion.div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader
            index="05"
            title="Certifications"
            subtitle="Continuous learning across engineering, testing, and architecture."
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            variants={containerVariants}
          >
            <Certificates />
          </motion.div>
        </Container>
      </Section>

      <SectionMotion
        id="contact"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7 }}
      >
        <Container>
          <SectionHeader
            index="06"
            title="Contact me"
            subtitle="I typically respond within 24 hours."
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={containerVariants}
          >
            <Contact />
          </motion.div>
        </Container>
      </SectionMotion>

      <Footer />
    </PageShell>
  );
}

export default HomePage;
