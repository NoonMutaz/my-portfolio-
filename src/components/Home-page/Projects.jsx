import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { colors } from "../../data/Colors-data";
import { projects } from "../../data/Projects-data";
import { useState } from "react";

const SectionTitle = styled.h2`
  text-align: center;
  font-family: "Orbitron", sans-serif;
  font-weight: bold;
  color: ${colors.neon};
  margin-bottom: 3rem;
  text-shadow: 0 0 10px ${colors.neon};
`;

const SectionCopy = styled.p`
  text-align: center;
  color: #b9c0c2;
  margin: -1.7rem auto 2.2rem;
  max-width: 640px;
`;

const ProjectCard = styled(motion.div)`
  background: linear-gradient(160deg, rgba(26, 26, 26, 0.88), rgba(16, 16, 16, 0.82));
  border-radius: 18px;
  overflow: hidden;
  border: 1px solid rgba(0, 255, 127, 0.2);
  box-shadow: 0 8px 26px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-7px);
    box-shadow: 0 14px 32px rgba(0, 0, 0, 0.4), 0 0 22px rgba(0, 255, 127, 0.2);
  }
`;

const ProjectActions = styled.div`
  display: flex;
  gap: 0.7rem;
  margin-top: auto;
  padding-top: 1rem;
  align-items: center;
  flex-wrap: wrap;
`;

const LinkButton = styled.button`
  background: ${colors.neon};
  border: none;
  color: #06110a;
  font-size: 0.9rem;
  font-weight: 700;
  padding: 0.45rem 0.85rem;
  border-radius: 999px;
  cursor: pointer;
`;

const ExpandButton = styled.button`
  background: transparent;
  border: 1px solid rgba(0, 255, 127, 0.52);
  color: ${colors.neon};
  font-size: 0.84rem;
  border-radius: 999px;
  padding: 0.33rem 0.75rem;
  cursor: pointer;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 210px;
  object-fit: cover;
`;

const ProjectContent = styled.div`
  padding: 1.2rem 1.2rem 1.3rem;
  text-align: left;
  display: flex;
  flex-direction: column;
  flex: 1;

  h4 {
    color: ${colors.white};
    margin-bottom: 0.45rem;
    font-size: 1.12rem;
  }

  p {
    color: #c7cdcf;
    font-size: 0.95rem;
    display: -webkit-box;
    -webkit-line-clamp: ${({ isExpanded }) => (isExpanded ? "unset" : "3")};
    -webkit-box-orient: vertical;
    overflow: hidden;
    line-height: 1.72;
    margin-bottom: 0;
  }
`;

export default function Projects() {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <div>
      <SectionTitle>Projects</SectionTitle>
      <SectionCopy>
        A selected set of products that reflect my approach to design quality,
        frontend architecture, and user-centered development.
      </SectionCopy>
      <Row className="g-4">
        {projects.map((project) => {
          const isExpanded = expanded === project.id;
          return (
            <Col md={4} key={project.id}>
              <ProjectCard whileHover={{ scale: 1.015 }}>
                <ProjectImage src={project.image} alt={project.alt} />
                <ProjectContent isExpanded={isExpanded}>
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  <ProjectActions>
                    <LinkButton
                      onClick={() => window.open(project.link, "_blank", "noopener,noreferrer")}
                      aria-label={`Open ${project.title}`}
                    >
                      Live Demo
                    </LinkButton>
                    <ExpandButton onClick={() => toggleExpand(project.id)}>
                      {isExpanded ? "Show less" : "Read more"}
                    </ExpandButton>
                  </ProjectActions>
                </ProjectContent>
              </ProjectCard>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
