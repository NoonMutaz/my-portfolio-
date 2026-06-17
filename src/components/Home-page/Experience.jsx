import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { colors, fonts } from "../../data/Colors-data";

const ExperienceCard = styled(motion.article)`
  background: ${colors.surface};
  border: 1px solid ${colors.border};
  border-radius: 8px;
  padding: 1.75rem;
  height: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: border-color 0.25s ease, transform 0.25s ease;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 3px;
    height: 100%;
    background: linear-gradient(to bottom, ${colors.neon}, transparent);
    opacity: 0;
    transition: opacity 0.25s ease;
  }

  &:hover {
    border-color: ${colors.borderHover};
    transform: translateY(-4px);

    &::before {
      opacity: 1;
    }
  }
`;

const CardHeader = styled.div`
  margin-bottom: 1.25rem;
`;

const Company = styled.span`
  font-family: ${fonts.mono};
  color: ${colors.accentLight};
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  background: ${colors.accentSoft};
  border: 1px solid ${colors.border};
  padding: 4px 10px;
  border-radius: 4px;
  display: inline-block;
  margin-bottom: 0.8rem;
`;

const Role = styled.h3`
  color: ${colors.white};
  font-family: ${fonts.display};
  font-size: 1.15rem;
  font-weight: 600;
  margin-bottom: 0.4rem;
  letter-spacing: -0.02em;
`;

const Duration = styled.p`
  color: ${colors.muted};
  font-family: ${fonts.mono};
  font-size: 0.75rem;
  font-weight: 500;
  margin-bottom: 0;
`;

const Description = styled.p`
  color: ${colors.muted};
  font-size: 0.92rem;
  line-height: 1.65;
  margin-bottom: 0;
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

// Animation presets for sequential grid loading
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

export default function Experience() {
  return (
    <Row
      as={motion.div}
      className="g-3"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
        {experiences.map((exp, index) => (
          <Col key={index} lg={4} md={6} sm={12}>
            <ExperienceCard
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
            >
              <CardHeader>
                <Company>{exp.company}</Company>
                <Role>
                  {exp.role}
                  <span
                    style={{
                      fontSize: "0.82rem",
                      color: colors.muted,
                      fontWeight: 400,
                      display: "block",
                      marginTop: "2px",
                    }}
                  >
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
  );
}