import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { frameworks } from "../../data/Frameworks-data";
import { colors } from "../../data/Colors-data";

const FrameworkCard = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: ${colors.white};
  background: linear-gradient(150deg, rgba(28, 28, 28, 0.85), rgba(12, 12, 12, 0.85));
  border: 1px solid rgba(0, 255, 127, 0.2);
  border-radius: 14px;
  padding: 1.1rem 0.5rem 0.85rem;
  min-height: 128px;
  transition: all 0.25s ease;

  &:hover {
    border-color: rgba(0, 255, 127, 0.52);
    box-shadow: 0 0 18px rgba(0, 255, 127, 0.2);
    transform: translateY(-3px);
  }
`;

const FrameworkLogo = styled.img`
  width: 60px;
  height: 60px;
  object-fit: contain;
  margin-bottom: 1rem;
  filter: drop-shadow(0 0 3px ${colors.neon});
  transition: transform 0.3s ease;

  .Card:hover & {
    transform: scale(1.1);
  }
`;
export default function Frameworks() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.45, ease: "easeOut" },
    },
  };

  return (
    <div>
      <Row
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="g-4 justify-content-start "
      >
        {frameworks.map((fw, idx) => (
          <Col
            as={motion.div}
            variants={itemVariants}
            md={2}
            sm={3}
            xs={4}
            key={idx}
            style={{ textAlign: "center", cursor: "pointer" }}
          >
            <FrameworkCard href={fw.link} target="_blank" rel="noopener noreferrer">
              <FrameworkLogo src={fw.image} alt={fw.name} />
              <h6 style={{ marginTop: "0.5rem", fontWeight: "700" }}>{fw.name}</h6>
            </FrameworkCard>
          </Col>
        ))}
      </Row>
    </div>
  );
}
