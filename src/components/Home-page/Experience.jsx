import styled from "styled-components";
import { Row, Col, Container } from "react-bootstrap";
import { motion } from "framer-motion";

// Section Container for proper spacing
const Section = styled.section`
  padding: 60px 0;
  background-color:#0B0F1959;
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

const ExperienceCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 2rem;
  height: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at top left, rgba(0, 255, 127, 0.03), transparent 40%);
    pointer-events: none;
  }

  &:hover {
    border-color: rgba(0, 255, 127, 0.2);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 255, 127, 0.03);
  }
`;

const CardHeader = styled.div`
  margin-bottom: 1.25rem;
`;

const Company = styled.span`
  color: #00ff7f;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  background: rgba(0, 255, 127, 0.06);
  padding: 4px 12px;
  border-radius: 20px;
  display: inline-block;
  margin-bottom: 0.8rem;
`;

const Role = styled.h3`
  color: #ffffff;
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.4rem;
  letter-spacing: -0.3px;
`;

const Duration = styled.p`
  color: #a0aec0;
  font-size: 0.85rem;
  font-weight: 500;
  margin-bottom: 0;
`;

const Description = styled.p`
  color: #cbd5e1;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 0;
  font-weight: 400;
`;

const experiences = [
  {
    role: "Software Developer",
    type: "Full-time",
    company: "Jodayn",
    duration: "Mar 2025 – Present",
    description:
      "Building scalable web applications using Next.js, ASP.NET Core, and TypeScript. Collaborating actively within Agile/Scrum teams to architect and ship production-ready features.",
  },
  {
    role: "Frontend Developer",
    type: "Internship",
    company: "Jodayn",
    duration: "Oct 2024 – Mar 2025",
    description:
      "Engineered responsive, pixel-perfect web interfaces using Next.js and Tailwind CSS. Translated UI/UX designer wireframes into production code within an iterative Agile structure.",
  },
  {
    role: "IT Support",
    type: "Co-op",
    company: "King Khaled Hospital",
    duration: "Jun 2024 – Dec 2024",
    description:
      "Administered Active Directory infrastructure and efficiently troubleshooting cross-departmental hardware, software, and network bottlenecks to secure critical system uptime.",
  },
];

export default function Experience() {
  return (
    <Section>
      <Container>
        <SectionTitle>Work Experience</SectionTitle>
        {/* Changed g-4 to lg={4} to beautifully align 3 cards in a clean single row on desktop */}
        <Row className="g-4">
          {experiences.map((exp, index) => (
            <Col key={index} lg={4} md={6} sm={12}>
              <ExperienceCard
                 
                 initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
              >
                <CardHeader>
                  <Company>{exp.company}</Company>
                  <Role>
                    {exp.role} 
                    <span style={{ fontSize: '0.85rem', color: '#a0aec0', fontWeight: 400, display: 'block', marginTop: '2px' }}>
                      ({exp.type})
                    </span>
                  </Role>
                  <Duration>{exp.duration}</Duration>
                </CardHeader>

                <Description>{exp.description}</Description>
              </ExperienceCard>
            </Col>
          ))}
        </Row>
      </Container>
    </Section>
  );
}