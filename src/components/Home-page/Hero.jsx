import styled from "styled-components";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaArrowRight } from "react-icons/fa";
import { colors, fonts, gradients, ease } from "../../data/Colors-data";

const HeroSection = styled.section`
  min-height: calc(100vh - 88px);
  display: flex;
  align-items: center;
  padding: clamp(2rem, 5vw, 4rem) 0;
  position: relative;
  scroll-margin-top: 88px;
  overflow: hidden;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: clamp(2rem, 5vw, 4rem);
  align-items: center;
  width: 100%;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const Content = styled(motion.div)``;

const Eyebrow = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-family: ${fonts.mono};
  font-size: 0.72rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${colors.accentLight};
  margin-bottom: 1.5rem;
  margin-top: 3.5rem; 
`;

const StatusDot = styled.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: ${colors.neon};
  box-shadow: 0 0 10px ${colors.neon};
  animation: pulse 2.4s ease-in-out infinite;

  @keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(0.85); }
  }
`;

const HeroTitle = styled.h1`
  font-family: ${fonts.display};
  font-size: clamp(2.8rem, 7vw, 4.8rem);
  font-weight: 800;
  line-height: 1.02;
  letter-spacing: -0.04em;
  margin: 0 0 1rem;
  background: ${gradients.text};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const HeroLine = styled.p`
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: ${colors.muted};
  line-height: 1.7;
  max-width: 520px;
  margin: 0 0 2rem;
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 2rem;
`;

const PrimaryBtn = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.8rem 1.6rem;
  border-radius: 6px;
  background: linear-gradient(135deg, #0ea5e9, #38bdf8);
  color: #021018;
  font-weight: 700;
  font-size: 0.92rem;
  text-decoration: none;
  box-shadow: 0 4px 24px rgba(14, 165, 233, 0.35);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    color: #021018;
    box-shadow: 0 8px 32px rgba(56, 189, 248, 0.45);
  }
`;

const SocialRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const SocialLink = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.5rem 0.85rem;
  border-radius: 6px;
  border: 1px solid ${colors.border};
  background: ${colors.accentSoft};
  color: ${colors.white};
  font-size: 0.82rem;
  font-weight: 500;
  text-decoration: none;
  transition: border-color 0.2s ease, background 0.2s ease;

  svg {
    color: ${colors.accentLight};
    font-size: 0.85rem;
  }

  &:hover {
    border-color: ${colors.borderHover};
    background: rgba(56, 189, 248, 0.16);
    color: ${colors.white};
  }
`;

const Visual = styled(motion.div)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 320px;

  @media (max-width: 992px) {
    min-height: 260px;
  }
`;

const OrbitRing = styled.div`
  position: absolute;
  border-radius: 50%;
  border: 1px solid rgba(56, 189, 248, 0.15);

  &.outer {
    width: min(380px, 80vw);
    height: min(380px, 80vw);
    animation: spin 40s linear infinite;
  }

  &.mid {
    width: min(280px, 62vw);
    height: min(280px, 62vw);
    border-color: rgba(125, 211, 252, 0.2);
    animation: spin 28s linear infinite reverse;
  }

  &.inner {
    width: min(180px, 42vw);
    height: min(180px, 42vw);
    border-color: rgba(96, 165, 250, 0.25);
    background: radial-gradient(circle, rgba(14, 116, 200, 0.12), transparent 70%);
    animation: spin 18s linear infinite;
  }

  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

const Core = styled.div`
  position: relative;
  z-index: 2;
  width: 88px;
  height: 88px;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 35%, #7dd3fc, #0ea5e9 55%, #0369a1);
  box-shadow:
    0 0 40px rgba(56, 189, 248, 0.5),
    0 0 80px rgba(14, 165, 233, 0.2);
`;

const OrbitDot = styled.span`
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${colors.accentLight};
  box-shadow: 0 0 12px ${colors.neon};
  top: 8%;
  left: 50%;
  transform: translateX(-50%);
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

export default function Hero() {
  return (
    <HeroSection id="home">
      <Container>
        <Grid>
          <Content
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <Eyebrow>
                <StatusDot />
                Software Engineer · Open to opportunities
              </Eyebrow>
            </motion.div>

            <motion.div variants={itemVariants}>
              <HeroTitle>
                Noon
                <br />
                Almutaz
              </HeroTitle>
            </motion.div>

            <motion.div variants={itemVariants}>
              <HeroLine>
                Building precise, performant web experiences — from interface
                craft to full-stack delivery across React, Next.js, and .NET.
              </HeroLine>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Actions>
                <PrimaryBtn
                  href="#projects"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Projects <FaArrowRight size={12} />
                </PrimaryBtn>
              </Actions>
            </motion.div>

            <motion.div variants={itemVariants}>
              <SocialRow>
                <SocialLink href="tel:+966581019574" whileHover={{ y: -2 }}>
                  <FaPhone /> Phone
                </SocialLink>
                <SocialLink href="mailto:noonalmutaz002@gmail.com" whileHover={{ y: -2 }}>
                  <FaEnvelope /> Email
                </SocialLink>
                <SocialLink
                  href="https://www.linkedin.com/in/noon-almutaz-059a61267"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -2 }}
                >
                  <FaLinkedin /> LinkedIn
                </SocialLink>
                <SocialLink
                  href="https://github.com/NoonMutaz"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -2 }}
                >
                  <FaGithub /> GitHub
                </SocialLink>
              </SocialRow>
            </motion.div>
          </Content>

          <Visual
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease, delay: 0.3 }}
            aria-hidden="true"
          >
            <OrbitRing className="outer">
              <OrbitDot />
            </OrbitRing>
            <OrbitRing className="mid" />
            <OrbitRing className="inner" />
            <Core />
          </Visual>
        </Grid>
      </Container>
    </HeroSection>
  );
}
