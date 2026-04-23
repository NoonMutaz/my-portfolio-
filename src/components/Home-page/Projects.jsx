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

export default function Projects() {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  const ProjectCard = styled(motion.div)`
    background: ${colors.darkGray};
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 0 20px rgba(0, 255, 127, 0.2);
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
      transform: translateY(-8px);
      box-shadow: 0 0 25px rgba(0, 255, 127, 0.5);
    }
  `;
  const ProjectActions = styled.div`
    display: flex;
    gap: 1rem;
    margin-top: 0.8rem;
    align-items: center;
  `;

  const LinkButton = styled.button`
    background: none;
    border: none;
    color: ${colors.neon};
    font-size: 0.92rem;
    padding: 0;
    text-decoration: underline;
    cursor: pointer;
  `;

  const ExpandButton = styled.button`
    background: transparent;
    border: 1px solid ${colors.neon};
    color: ${colors.neon};
    font-size: 0.85rem;
    border-radius: 999px;
    padding: 0.2rem 0.6rem;
    cursor: pointer;
  `;

  const ProjectImage = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
  `;

  // Pass expanded as a prop to styled component
  const ProjectContent = styled.div`
    padding: 1.2rem;
    text-align: left;

    h4 {
      color: ${colors.neon};
      margin-bottom: 0.5rem;
    }

    p {
      color: #ccc;
      font-size: 0.95rem;
      display: -webkit-box;
      -webkit-line-clamp: ${({ isExpanded }) => (isExpanded ? "unset" : "2")};
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  `;

  return (
    <div>
      <SectionTitle>Projects</SectionTitle>
      <Row className="g-4">
        {projects.map((project) => {
          const isExpanded = expanded === project.id;
          return (
            <Col md={4} key={project.id}>
              <ProjectCard whileHover={{ scale: 1.05 }}>
                <ProjectImage src={project.image} alt={project.alt} />
                <ProjectContent isExpanded={isExpanded}>
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  <ProjectActions>
                    <LinkButton
                      onClick={() => window.open(project.link, "_blank", "noopener,noreferrer")}
                      aria-label={`Open ${project.title}`}
                    >
                      View Project
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
