import styled from "styled-components";
import { Container, Button } from "react-bootstrap";
 import { motion } from "framer-motion";
import { colors } from "../../data/Colors-data";
export default function Hero() {
  const HeroTitle = styled.h1`
    font-family: "Orbitron", sans-serif;
    font-size: clamp(2rem, 5vw, 3.2rem);
    color: ${colors.neon};
    text-shadow: 0 0 15px ${colors.neon};
  `;

  const HeroSubtitle = styled.p`
    font-size: clamp(1rem, 2.3vw, 1.2rem);
    color: #ccc;
    margin-top: 1rem;
  `;

  const ContactLinks = styled.div`
    margin-top: 0.75rem;
    display: flex;
    justify-content: center;
    gap: 0.9rem;
    flex-wrap: wrap;
  `;

  const HeroTitleMotion = motion(HeroTitle);
  const HeroSubtitleMotion = motion(HeroSubtitle);
  const HeroSection = styled.section`
    min-height: 100vh;
    display: flex;
    align-items: center;
    text-align: center;
   // background: radial-gradient(circle at top, #0d0d0d, #000);
    color: ${colors.white};
    padding-top: 4rem;
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
  text-decoration: none;
`;
  const InfoLink = styled.a`
  color: ${colors.neon};
  text-decoration: none;
  font-weight: 600;
  &:hover {
    text-decoration: underline;
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
            Software Engineer - Frontend Developer - Problem Solver
            <ContactLinks>
              <InfoLink href="tel:+966581019574">Phone</InfoLink>
              <InfoLink href="mailto:noonalmutaz002@gmail.com">Email</InfoLink>
              <InfoLink
                href="https://www.linkedin.com/in/noon-almutaz-059a61267"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </InfoLink>
              <InfoLink
                href="https://github.com/NoonMutaz"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </InfoLink>
            </ContactLinks>
          </HeroSubtitleMotion>
          <HeroSubtitleMotion
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <NeonButton href="#projects">View My Work</NeonButton>
          </HeroSubtitleMotion>
        </Container>
      </HeroSection>
    </div>
  );
}
