import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

const SectionTitle = styled.h2`
  color: white;
  font-size: clamp(1.8rem, 4vw, 2.2rem);
  font-weight: 800;
  margin-bottom: clamp(1.8rem, 3vw, 2.5rem);
  letter-spacing: -0.8px;
  position: relative;
  line-height: 1.2;
  width: 100%;
  
  &::after {
    content: '';
    position: absolute;
    bottom: calc(-1 * clamp(0.6rem, 1.5vw, 0.9rem));
    left: 0;
    width: 50px;
    height: 3px;
    background: linear-gradient(to right, #00ff7f, rgba(0, 255, 127, 0));
    border-radius: 2px;
  }
`;

const CertCard = styled(motion.div)`
  background: linear-gradient(
    135deg,
    rgba(15, 23, 42, 0.5),
    rgba(8, 12, 24, 0.3)
  );
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: clamp(1.4rem, 3vw, 1.8rem);
  height: 100%;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  backdrop-filter: blur(8px);
  box-shadow: 
    0 8px 24px rgba(0, 0, 0, 0.2),
    inset 0 1px 1px rgba(255, 255, 255, 0.04);
  
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-6px);
    border-color: rgba(0, 255, 127, 0.25);
    box-shadow:
      0 12px 32px rgba(0, 255, 127, 0.1),
      inset 0 1px 1px rgba(255, 255, 255, 0.06);
  }
`;

const CertTitle = styled.h3`
  color: white;
  font-size: clamp(1rem, 2vw, 1.15rem);
  margin-bottom: 0.6rem;
  font-weight: 700;
  letter-spacing: -0.3px;
  line-height: 1.4;
`;

const CertOrg = styled.p`
  color: #00ff7f;
  font-size: clamp(0.85rem, 1.5vw, 0.95rem);
  margin-bottom: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.2px;
`;

const CertText = styled.p`
  color: #c7d4dd;
  font-size: clamp(0.9rem, 1.8vw, 0.95rem);
  line-height: 1.7;
  margin-bottom: 0;
`;

const certs = [
  {
    title: "Meta React Specialization",
    provider: "Meta",
  },
  {
    title: "ASP.NET Core Clean Architecture",
    provider: "Udemy",
  },
  {
    title: "Foundations of Software Testing and Validation",
    provider: "University of Leeds",
  },
  {
    title: "SDAIA Hackathon - Reaching the Final Stage",
    provider: "SDAIA",
  },
  {
    title: "NASA Space Apps Challenge - Galactic Problem Solver",
    provider: "NASA",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.34, 1.56, 0.64, 1],
    },
  },
};

export default function Certificates() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <Row className="g-0" style={{ marginBottom: "2rem" }}>
        <Col xs={12}>
          <SectionTitle>Certifications & Courses</SectionTitle>
        </Col>
      </Row>

      <Row className="g-4">
        {/* Professional Accreditation */}
        <Col md={6} as={motion.div} variants={itemVariants}>
          <CertCard whileHover={{ scale: 1.02 }}>
            <CertTitle>Professional Accreditation</CertTitle>
            <CertOrg>Software Engineer • Saudi Council of Engineers</CertOrg>
            <CertText>
              Official professional engineering accreditation as a Software Engineer 
              (الاعتماد المهني للمهندسين — مهندس برمجيات).
            </CertText>
          </CertCard>
        </Col>

        {/* Certificates List */}
        {certs.map((cert, index) => (
          <Col key={index} md={6} as={motion.div} variants={itemVariants}>
            <CertCard whileHover={{ scale: 1.02 }}>
              <CertTitle>{cert.title}</CertTitle>
              <CertOrg>{cert.provider}</CertOrg>
              {cert.description && (
                <CertText>{cert.description}</CertText>
              )}
            </CertCard>
          </Col>
        ))}
      </Row>
    </motion.div>
  );
}