import styled from "styled-components";
import { Container } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { colors } from "../../data/Colors-data";

const FooterBar = styled.footer`
  padding: 2.5rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(6, 6, 6, 0.7);
  backdrop-filter: blur(8px);
`;

const Inner = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1.25rem;
`;

const Copyright = styled.p`
  margin: 0;
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.9rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 0.75rem;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.7);
  font-size: 1rem;
  transition: all 0.25s ease;

  &:hover {
    color: ${colors.neon};
    border-color: rgba(0, 255, 127, 0.4);
    background: rgba(0, 255, 127, 0.08);
    transform: translateY(-2px);
  }
`;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <FooterBar>
      <Container>
        <Inner>
          <Copyright>© {year} Noon Almutaz. All rights reserved.</Copyright>
          <SocialLinks>
            <SocialLink
              href="https://github.com/NoonMutaz"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/noon-almutaz-059a61267"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </SocialLink>
            <SocialLink
              href="mailto:noonalmutaz002@gmail.com"
              aria-label="Email"
            >
              <FaEnvelope />
            </SocialLink>
          </SocialLinks>
        </Inner>
      </Container>
    </FooterBar>
  );
}
