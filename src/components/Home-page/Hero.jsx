 import styled from "styled-components";
 import { Container,Button} from "react-bootstrap";
 import { motion } from "framer-motion";
 import {colors} from '../../data/Colors-data';
export default function Hero() {
 
    const HeroTitle = styled.h1`
      font-family: "Orbitron", sans-serif;
      font-size: 3rem;
      color: ${colors.neon};
      text-shadow: 0 0 15px ${colors.neon};
    `;
    
    const HeroSubtitle = styled.p`
      font-size: 1.3rem;
      color: #ccc;
      margin-top: 1rem;
    `;


     const HeroTitleMotion = motion(HeroTitle);
    const HeroSubtitleMotion = motion(HeroSubtitle);
    const HeroSection = styled.section`
      min-height: 100vh;
      display: flex;
      align-items: center;
      text-align: center;
      background: radial-gradient(circle at top, #0d0d0d, #000);
      color: ${colors.white};
    `;
    const NeonButton = styled(Button)`
  background: ${colors.neon};
  color: ${colors.black};
  border: none;
  padding: 0.7rem 2rem;
  font-size: 1.1rem;
  border-radius: 50px;
  font-weight: bold;
  margin-top: 1.5rem;
  box-shadow: 0 0 15px ${colors.neon};
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.08);
    box-shadow: 0 0 25px ${colors.neon};
  }
`;
    
  return (
    <div>
      <HeroSection style={{ scrollMarginTop: "80px" }} id="home">
        <Container>
          <HeroTitleMotion
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Hi, I&apos;m Noon Almutaz👩‍💻
          </HeroTitleMotion>
          <HeroSubtitleMotion
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            Software Engineer • Frontend Developer • Problem Solver • Lifelong Learner
          </HeroSubtitleMotion>
        <HeroSubtitleMotion
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
               <NeonButton
          //   as={motion.a}
            href="#projects"
            whilehover={{ scale: 1.1, boxShadow: "0 0 35px #00ff7f" }}
          >
            View My Work
          </NeonButton>
              
              </HeroSubtitleMotion>   
        </Container>
      </HeroSection>
    </div>
  )
}
