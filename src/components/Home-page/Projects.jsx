'use client';

import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { colors } from "../../data/Colors-data";
import { projects } from "../../data/Projects-data";
import { useState } from "react";

const SectionTitle = styled.h2`
  color: white;
  font-size: clamp(1.8rem, 4vw, 2.2rem);
  font-weight: 800;
  margin-bottom: clamp(1.8rem, 3vw, 2.5rem);
  letter-spacing: -0.8px;
  position: relative;
  line-height: 1.2;
  
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

const ProjectCard = styled(motion.div)`
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(0, 255, 127, 0.15);
  background: linear-gradient(
    135deg,
    rgba(15, 23, 42, 0.6),
    rgba(8, 12, 24, 0.4)
  );
  backdrop-filter: blur(8px);
  box-shadow: 
    0 8px 24px rgba(0, 0, 0, 0.3),
    inset 0 1px 1px rgba(255, 255, 255, 0.04);

  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-8px);
    border-color: rgba(0, 255, 127, 0.35);
    box-shadow:
      0 16px 40px rgba(0, 255, 127, 0.15),
      inset 0 1px 1px rgba(255, 255, 255, 0.06);
    
    .media-wrapper {
      filter: brightness(1.1);
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
    transition: filter 0.4s ease;
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
    margin-bottom: 0.8rem;
    font-size: clamp(1.05rem, 2vw, 1.2rem);
    font-weight: 700;
    letter-spacing: -0.3px;
  }

  p {
    color: #b8c5d0;
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
  border-top: 1px solid rgba(255, 255, 255, 0.06);
`;

const LinkButton = styled(motion.button)`
  background: ${colors.neon};
  border: none;
  color: #06110a;
  font-size: 0.9rem;
  font-weight: 700;
  padding: 0.6rem 1.2rem;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  letter-spacing: 0.3px;
  box-shadow: 0 4px 12px rgba(0, 255, 127, 0.25);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 20px rgba(0, 255, 127, 0.35);
  }

  &:active {
    transform: scale(0.98);
  }
`;

const ExpandButton = styled(motion.button)`
  background: transparent;
  border: 1.5px solid rgba(0, 255, 127, 0.4);
  color: ${colors.neon};
  font-size: 0.85rem;
  font-weight: 600;
  border-radius: 50px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  letter-spacing: 0.3px;

  &:hover {
    background: rgba(0, 255, 127, 0.08);
    border-color: rgba(0, 255, 127, 0.6);
  }

  &:active {
    transform: scale(0.96);
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
      <SectionTitle>Projects</SectionTitle>

      <Row className="g-4">
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