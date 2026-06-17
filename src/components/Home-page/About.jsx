import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { colors, fonts } from "../../data/Colors-data";

const AboutCard = styled.article`
  background: ${colors.surface};
  border: 1px solid ${colors.border};
  border-radius: 8px;
  padding: clamp(1.5rem, 3vw, 2rem);
  height: 100%;
  transition: border-color 0.25s ease;

  &:hover {
    border-color: ${colors.borderHover};
  }
`;

const AboutText = styled.p`
  color: ${colors.muted};
  font-size: 1rem;
  line-height: 1.85;
  margin-bottom: 0;
`;

const HighlightList = styled.ul`
  margin: 1.25rem 0 0;
  padding: 0;
  list-style: none;
  color: ${colors.muted};

  li {
    position: relative;
    padding-left: 1.1rem;
    margin-bottom: 0.7rem;
    line-height: 1.65;
    font-size: 0.92rem;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0.55em;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: ${colors.neon};
      box-shadow: 0 0 6px ${colors.neon};
    }
  }
`;

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Row className="align-items-stretch g-3">
        <Col
          as={motion.div}
          md={6}
          initial={{ opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          <AboutCard>
            <AboutText>
              I'm a Software Engineer with a Bachelor's degree in Software
              Engineering from the University of Hail. I specialize in building
              modern, responsive web applications using React and Next.js, with a
              strong focus on performance, usability, and clean UI implementation.
            </AboutText>
            <HighlightList>
              <li>React, Next.js, TypeScript, and component-based architecture</li>
              <li>Frontend state management, API integration, and responsive design</li>
              <li>Scalable, maintainable, and clean code</li>
            </HighlightList>
          </AboutCard>
        </Col>

        <Col
          as={motion.div}
          md={6}
          initial={{ opacity: 0, x: 18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, delay: 0.2 }}
        >
          <AboutCard>
            <AboutText>
              Beyond frontend development, I also work with software analysis and
              technical documentation, including SRS review, use cases, activity
              diagrams, and ERD design. I have practical experience with .NET
              Core and Entity Framework, allowing me to collaborate effectively
              across full-stack development environments.
            </AboutText>
            <HighlightList>
              <li>QA and bug-tracking systems with role-based access control</li>
              <li>Agile teams and collaborative development workflows</li>
              <li>Products that balance functionality with user experience</li>
            </HighlightList>
          </AboutCard>
        </Col>
      </Row>
    </motion.div>
  );
}
