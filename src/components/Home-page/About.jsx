import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

const AboutText = styled.p`
  color: #ddd;
  font-size: 1.05rem;
  line-height: 1.9;
  margin-bottom: 0;
`;

const HighlightList = styled.ul`
  margin: 1rem 0 0;
  padding-left: 1.2rem;
  color: #d9d9d9;

  li {
    margin-bottom: 0.65rem;
    line-height: 1.7;
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
      <Row className="align-items-center g-4">
        <Col
          as={motion.div}
          md={6}
          initial={{ opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          <AboutText>
            I’m a Software Engineer with a Bachelor’s degree in Software
            Engineering from the University of Hail. I specialize in building
            modern, responsive web applications using React and Next.js, with a
            strong focus on performance, usability, and clean UI implementation.
          </AboutText>

          <HighlightList>
            <li>
              Experienced in React, Next.js, TypeScript, and component-based
              architecture
            </li>
            <li>
              Skilled in frontend state management, API integration, and
              responsive design
            </li>
            <li>
              Passionate about writing scalable, maintainable, and clean code
            </li>
          </HighlightList>
        </Col>

        <Col
          as={motion.div}
          md={6}
          initial={{ opacity: 0, x: 18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, delay: 0.2 }}
        >
          <AboutText>
            Beyond frontend development, I also work with software analysis and
            technical documentation, including SRS review, use cases, activity
            diagrams, and ERD design. I have practical experience with .NET
            Core and Entity Framework, allowing me to collaborate effectively
            across full-stack development environments.
          </AboutText>

          <HighlightList>
            <li>
              Built QA and bug-tracking systems with role-based access control
            </li>
            <li>
              Comfortable working in Agile teams and collaborative development
              workflows
            </li>
            <li>
              Focused on creating products that balance functionality with user
              experience
            </li>
          </HighlightList>
        </Col>
      </Row>
    </motion.div>
  );
}