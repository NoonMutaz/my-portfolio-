import styled from "styled-components";
import { Container } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { colors, fonts } from "../../data/Colors-data";

const FooterBar = styled.footer`
  padding: 2rem 0;
  border-top: 1px solid ${colors.border};
  background: rgba(2, 8, 24, 0.8);
  backdrop-filter: blur(10px);
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
  font-family: ${fonts.mono};
  font-size: 0.75rem;
  letter-spacing: 0.06em;
  color: ${colors.muted};
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 0.6rem;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 6px;
  border: 1px solid ${colors.border};
  color: ${colors.muted};
  font-size: 0.95rem;
  transition: all 0.2s ease;

  &:hover {
    color: ${colors.accentLight};
    border-color: ${colors.borderHover};
    background: ${colors.accentSoft};
    transform: translateY(-2px);
  }
`;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <FooterBar>
      <Container>
        <Inner>
          <Copyright>© {year} Noon Almutaz</Copyright>
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
