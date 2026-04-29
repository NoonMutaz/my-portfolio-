import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

const AboutText = styled.p`
  color: #ddd;
  font-size: 1.05rem;
  line-height: 1.85;
  margin-bottom: 0;
`;

const HighlightList = styled.ul`
  margin: 1rem 0 0;
  padding-left: 1.1rem;
  color: #d9d9d9;

  li {
    margin-bottom: 0.5rem;
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
            I&apos;m a Software Engineer with a{" "}
            <strong>B.Sc. in Software Engineering</strong> from the University
            of Hail. I focus on building modern, responsive products using
            Next.js and React, and I enjoy turning UI/UX designs into clean,
            accessible user experiences.
          </AboutText>
          <HighlightList>
            <li>Strong in React, Next.js, and component-based architecture</li>
            <li>Comfortable with API integration and frontend state management</li>
            <li>Passionate about clean code, performance, and usability</li>
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
            I also contribute to requirements analysis and technical
            documentation, including SRS review, use cases, activity diagrams,
            and ERD design. Alongside frontend development, I have working
            knowledge of .NET Core and Entity Framework, which helps me
            collaborate effectively across full-stack teams.
          </AboutText>
        </Col>
      </Row>
    </motion.div>
  );
}
