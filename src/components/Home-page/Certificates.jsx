import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { colors, ease } from "../../data/Colors-data";

const CertCard = styled(motion.article)`
  background: ${colors.black};
  border: 1px solid ${colors.border};
  border-radius: 4px;
  padding: 1.5rem;
  height: 100%;
  transition: border-color 0.25s ease;

  &:hover {
    border-color: ${colors.borderHover};
  }
`;

const CertTitle = styled.h3`
  color: ${colors.white};
  font-size: 1rem;
  margin: 0 0 0.5rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.4;
`;

const CertOrg = styled.p`
  color: ${colors.accent};
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin: 0 0 0.75rem;
`;

const CertText = styled.p`
  color: ${colors.muted};
  font-size: 0.9rem;
  line-height: 1.65;
  margin: 0;
`;

const certs = [
  { title: "Meta React Specialization", provider: "Meta" },
  { title: "ASP.NET Core Clean Architecture", provider: "Udemy" },
  { title: "Foundations of Software Testing and Validation", provider: "University of Leeds" },
  { title: "SDAIA Hackathon - Reaching the Final Stage", provider: "SDAIA" },
  { title: "NASA Space Apps Challenge - Galactic Problem Solver", provider: "NASA" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};

export default function Certificates() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <Row className="g-3">
        <Col md={6} variants={itemVariants}>
          <CertCard>
            <CertTitle>Professional Accreditation</CertTitle>
            <CertOrg>Software Engineer · Saudi Council of Engineers</CertOrg>
            <CertText>
              Official professional engineering accreditation as a Software Engineer
              (الاعتماد المهني للمهندسين — مهندس برمجيات).
            </CertText>
          </CertCard>
        </Col>

        {certs.map((cert, index) => (
          <Col key={index} md={6} variants={itemVariants}>
            <CertCard>
              <CertTitle>{cert.title}</CertTitle>
              <CertOrg>{cert.provider}</CertOrg>
            </CertCard>
          </Col>
        ))}
      </Row>
    </motion.div>
  );
}
