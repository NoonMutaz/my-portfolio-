'use client';

import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { colors, fonts } from "../../data/Colors-data";
import { projects } from "../../data/Projects-data";
import { useState } from "react";

const ProjectCard = styled(motion.article)`
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid ${colors.border};
  background: ${colors.surface};
  backdrop-filter: blur(8px);
  transition: border-color 0.3s ease, transform 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-6px);
    border-color: ${colors.borderHover};

    .media-wrapper img,
    .media-wrapper video {
      transform: scale(1.04);
    }
  }
`;

const MediaWrapper = styled.div`
  width: 100%;
  height: 240px;
  overflow: hidden;
  background: linear-gradient(135deg, #111 0%, #1a1a1a 100%);
  position: relative;

  img,
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.4s ease;
  }

  video {
    background: #000;
  }
`;

const ProjectContent = styled.div`
  padding: 1.8rem;
  text-align: left;
  display: flex;
  flex-direction: column;
  flex: 1;

  h4 {
    color: ${colors.white};
    font-family: ${fonts.display};
    margin-bottom: 0.6rem;
    font-size: 1.05rem;
    font-weight: 600;
    letter-spacing: -0.02em;
  }

  p {
    color: ${colors.muted};
    font-size: 0.95rem;
    line-height: 1.7;
    margin-bottom: 0;
    
    display: -webkit-box;
    -webkit-line-clamp: ${({ isExpanded }) =>
      isExpanded ? "unset" : "3"};
    -webkit-box-orient: vertical;
    overflow: hidden;
    transition: all 0.3s ease;
  }
`;

const ProjectActions = styled.div`
  display: flex;
  gap: 0.8rem;
  margin-top: auto;
  padding-top: 1.4rem;
  align-items: center;
  flex-wrap: wrap;
  border-top: 1px solid ${colors.border};
`;

const LinkButton = styled(motion.button)`
  background: linear-gradient(135deg, #0ea5e9, #38bdf8);
  border: none;
  color: #021018;
  font-size: 0.82rem;
  font-weight: 700;
  padding: 0.55rem 1.1rem;
  border-radius: 6px;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  letter-spacing: 0.02em;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 16px rgba(56, 189, 248, 0.35);
  }
`;

const ExpandButton = styled(motion.button)`
  background: transparent;
  border: 1px solid ${colors.border};
  color: ${colors.accentLight};
  font-size: 0.82rem;
  font-weight: 600;
  border-radius: 6px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${colors.accentSoft};
    border-color: ${colors.borderHover};
  }
`;

const isVideo = (src) => {
  return (
    src?.endsWith(".mp4") ||
    src?.endsWith(".webm") ||
    src?.endsWith(".ogg")
  );
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.34, 1.56, 0.64, 1],
    },
  },
};

export default function Projects() {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <Row className="g-3">
        {projects.map((project, idx) => {
          const isExpanded = expanded === project.id;

          return (
            <Col 
              md={4} 
              key={project.id}
              as={motion.div}
              variants={itemVariants}
            >
              <ProjectCard whileHover={{ scale: 1.02 }}>
                {/* Media */}
                <MediaWrapper className="media-wrapper">
                  {isVideo(project.image) ? (
                    <video
                      src={project.image}
                      autoPlay
                      muted
                      loop
                      playsInline
                      controls
                    />
                  ) : (
                    <img
                      src={project.image}
                      alt={project.alt}
                      loading="lazy"
                    />
                  )}
                </MediaWrapper>

                {/* Content */}
                <ProjectContent isExpanded={isExpanded}>
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>

                  <ProjectActions>
                    <LinkButton
                      onClick={() =>
                        window.open(
                          project.link,
                          "_blank",
                          "noopener,noreferrer"
                        )
                      }
                      aria-label={`Open ${project.title}`}
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Live Demo
                    </LinkButton>

                    <ExpandButton
                      onClick={() => toggleExpand(project.id)}
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {isExpanded ? "Show less" : "Read more"}
                    </ExpandButton>
                  </ProjectActions>
                </ProjectContent>
              </ProjectCard>
            </Col>
          );
        })}
      </Row>
    </motion.div>
  );
}