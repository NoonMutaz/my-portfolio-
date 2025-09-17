import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { colors } from '../../data/Colors-data';
import { projects } from '../../data/Projects-data';
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
                  <button onClick={() => window.open(project.link, "_blank")} style={{ background: "none", border: "none", padding: 0, marginTop: "0.5rem" }}>
                    <div
                      style={{
                        color: colors.neon,
                        fontSize: "0.9rem",
                      }}
                    >
                      View Project
                    </div>
                  </button> <br></br> 
                  <button onClick={() => toggleExpand(project.id)}>
                    <div
                      style={{
                        color: colors.neon,
                        fontSize: "0.9rem",
                        marginTop: "0.5rem",
                        background: "none",
                      }}
                    >
                      {isExpanded ? "Show less ▲" : "Read more ▼"}
                    </div>
                  </button>
                </ProjectContent>
              </ProjectCard>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
