import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";


const Section = styled.section`
  padding: 60px 0;
  background-color: #0b0f19; /* Assuming a dark theme based on your text colors */
`;

const SectionTitle = styled.h2`
  color: white;
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 2.5rem;
  letter-spacing: -0.5px;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 50px;
    height: 4px;
    background: #00ff7f;
    border-radius: 2px;
  }
`;
const CertCard = styled.div`
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 18px;
  padding: 1.4rem;
  height: 100%;
  transition: 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(0, 255, 127, 0.3);
    box-shadow: 0 0 20px rgba(0, 255, 127, 0.08);
  }
`;
const CertOrg = styled.p`
  color: #9effc7;
  font-size: 0.95rem;
  margin-bottom: 0.4rem;
`;
const CertText = styled.p`
  color: #cfcfcf;
  font-size: 0.92rem;
  line-height: 1.7;
  margin-bottom: 0;
`;


const Card = styled(motion.div)`
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 1.4rem;
  height: 100%;
  transition: 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    border-color: rgba(0, 255, 127, 0.3);
    box-shadow: 0 0 24px rgba(0, 255, 127, 0.08);
  }
`;

const CertTitle = styled.h3`
  color: white;
  font-size: 1.05rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
`;

const Provider = styled.p`
  color: #9effc7;
  font-size: 0.9rem;
  margin-bottom: 0.8rem;
`;

const Description = styled.p`
  color: #d4d4d4;
  font-size: 0.95rem;
  line-height: 1.7;
  margin-bottom: 0;
`;

const certs = [
  {
    title: "Meta React Specialization",
    provider: "Meta",
  //  description:
     // "Covered React fundamentals, reusable components, hooks, and responsive UI development.",
  },
  {
    title: "ASP.NET Core clean architecture",
    provider: "Udemy",
   // description:
     // "Built production-ready Next.js applications with routing, API integration, and optimization.",
  },
  {
    title: "Foundations of Software testing and validation",
    provider: "University of Leeds",
  //  description:"Focused on SRS documentation, use cases, UML diagrams, and software analysis workflows.",
  },
  {
    title: "SDAIA Hackathon -Reaching the final stage",
    provider: "SDAIA",
   // description:"Learned backend fundamentals using ASP.NET Core, APIs, and Entity Framework.",
  },
  {
    title: "NASA Space Apps Challenge Galatic problem solver",
    provider: "NASA",
   // description:"Learned backend fundamentals using ASP.NET Core, APIs, and Entity Framework.",
  },
];

export default function Certificates() {
  return (
    <Row className="g-4"> 
        <SectionTitle
     // variants={titleFade}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
    >
      Certifications & Courses
    </SectionTitle>
       <Col
        md={6}
        as={motion.div}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <CertCard>
          <CertTitle>Professional Accreditation – Software Engineer</CertTitle>
          <CertOrg>Saudi Council of Engineers</CertOrg>
          <CertText>
            Official professional engineering accreditation as a Software
            Engineer (الاعتماد المهني للمهندسين — مهندس برمجيات).
          </CertText>
        </CertCard>
      </Col>
      {certs.map((cert, index) => (
        <Col key={index} md={6}>
          <Card
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <CertTitle>{cert.title}</CertTitle>
            <Provider>{cert.provider}</Provider>
            <Description>{cert.description}</Description>
          </Card>
        </Col>
      ))}
    </Row>
  );
}