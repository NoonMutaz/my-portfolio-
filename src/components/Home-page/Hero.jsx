import styled from "styled-components";
import { Container, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { colors } from "../../data/Colors-data";

export default function Hero() {
  const HeroSection = styled.section`
  //  min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: ${colors.white};
    padding: 4rem 0;
    position: relative;
    overflow: hidden;
    
    /* Subtle animated background elements */
    &::before {
      content: '';
      position: absolute;
      top: -50%;
      right: -20%;
      width: 500px;
      height: 500px;
      background: radial-gradient(circle, rgba(0, 255, 127, 0.05) 0%, transparent 70%);
      border-radius: 50%;
      animation: float 20s ease-in-out infinite;
      pointer-events: none;
    }
    
    &::after {
      content: '';
      position: absolute;
      bottom: -30%;
      left: -10%;
      width: 400px;
      height: 400px;
      background: radial-gradient(circle, rgba(0, 255, 127, 0.03) 0%, transparent 70%);
      border-radius: 50%;
      animation: float 25s ease-in-out infinite reverse;
      pointer-events: none;
    }
    
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-30px); }
    }
  `;

const ContentWrapper = styled(motion.div)`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;

  padding: clamp(2rem, 4vw, 3.5rem);

  background: rgba(8, 8, 8, 0.45);
  border: 1px solid rgba(255, 255, 255, 0.08);

  /* backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px); */

  border-radius: 28px;

  box-shadow:
    0 8px 40px rgba(0, 0, 0, 0.35),
    inset 0 1px 0 rgba(255, 255, 255, 0.04);

  overflow: hidden;

  /* subtle glow */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background:
      linear-gradient(
        135deg,
        rgba(0, 255, 127, 0.04),
        transparent 40%
      );
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    border-radius: 22px;
  }
`;

  const HeroTitle = styled.h1`
    font-family: "Orbitron", sans-serif;
    font-size: clamp(2.5rem, 6vw, 3.8rem);
    color: ${colors.neon};
    font-weight: 900;
    letter-spacing: -1px;
    margin-bottom: 1.2rem;
    
    /* Elegant glow effect */
    text-shadow:
  0 0 10px rgba(0, 255, 127, 0.5),
  0 0 20px rgba(0, 205, 127, 0.18);
    
    line-height: 1.1;
    
    @media (max-width: 768px) {
      margin-bottom: 0.8rem;
    }
  `;

  const HeroSubtitle = styled.p`
    font-size: clamp(0.95rem, 2.2vw, 1.3rem);
    color: rgba(255, 255, 255, 0.82);
    margin: 1.5rem 0;
    font-weight: 400;
    letter-spacing: 0.3px;
    line-height: 1.6;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
  `;

  const ContactLinks = styled.div`
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    gap: 1.2rem;
    flex-wrap: wrap;
    margin-bottom: 2.5rem;
  `;

  const InfoLink = styled(motion.a)`
    color: ${colors.neon};
    text-decoration: none;
    font-weight: 600;
    font-size: 0.95rem;
    position: relative;
    padding: 0.5rem 0;
    transition: all 0.3s ease;
    
    /* Underline animation */
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background: ${colors.neon};
      transition: width 0.3s ease;
    }
    
    &:hover {
      color: ${colors.white};
      text-shadow: 0 0 10px ${colors.neon};
      
      &::after {
        width: 100%;
      }
    }
  `;

  const NeonButton = styled(motion(Button))`
    background: ${colors.neon};
    color: ${colors.black};
    border: none;
    padding: 0.85rem 2.8rem;
    font-size: 1rem;
    font-weight: 700;
    border-radius: 50px;
    letter-spacing: 0.5px;
    box-shadow: 
      0 4px 20px rgba(0, 255, 127, 0.3),
      inset 0 -2px 8px rgba(0, 0, 0, 0.1);
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    cursor: pointer;
    position: relative;
    overflow: hidden;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 0.1);
      transition: left 0.5s ease;
    }
    
    &:hover {
      transform: translateY(-3px);
      box-shadow: 
        0 8px 30px rgba(0, 255, 127, 0.4),
        inset 0 -2px 8px rgba(0, 0, 0, 0.15);
      
      &::before {
        left: 100%;
      }
    }
    
    &:active {
      transform: translateY(-1px);
    }
    
    text-decoration: none;
    display: inline-block;
  `;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.34, 1.56, 0.64, 1],
      },
    },
  };

  return (
    <HeroSection id="home">
      <Container>
        <ContentWrapper
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <HeroTitle>Noon Almutaz</HeroTitle>
          </motion.div>

          <motion.div variants={itemVariants}>
            <HeroSubtitle>
              Software Engineer • Developer • Problem Solver
            </HeroSubtitle>
          </motion.div>

          <motion.div variants={itemVariants}>
            <ContactLinks>
              <InfoLink 
                href="tel:+966581019574"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Phone
              </InfoLink>
              <InfoLink 
                href="mailto:noonalmutaz002@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Email
              </InfoLink>
              <InfoLink
                href="https://www.linkedin.com/in/noon-almutaz-059a61267"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                LinkedIn
              </InfoLink>
              <InfoLink
                href="https://github.com/NoonMutaz"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                GitHub
              </InfoLink>
            </ContactLinks>
          </motion.div>

          <motion.div variants={itemVariants}>
            <NeonButton 
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore My Work
            </NeonButton>
          </motion.div>
        </ContentWrapper>
      </Container>
    </HeroSection>
  );
}