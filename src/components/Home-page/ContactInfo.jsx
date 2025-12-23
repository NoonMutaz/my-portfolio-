import styled from "styled-components";
import { colors } from "../../data/Colors-data";

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  font-family: "Orbitron", sans-serif;
  color: ${colors.neon};
  text-shadow: 0 0 5px ${colors.neon};
`;

const InfoLink = styled.a`
  color: ${colors.neon};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

function ContactInfo() {
  return (
    <InfoContainer>
      <div> Phone: <InfoLink href="tel:+966581019574">+966581019574</InfoLink></div>
      <div> Email: <InfoLink href="mailto:noonalmutaz002@gmail.com">noonalmutaz002@gmail.com</InfoLink></div>
      <div> LinkedIn: <InfoLink href="https://linkedin.com/in/noon-almutaz-059a61267" target="_blank" rel="noreferrer">LinkedIn</InfoLink></div>
      <div>GitHub: <InfoLink href="https://github.com/NoonMutaz" target="_blank" rel="noreferrer">github</InfoLink></div>
<div></div>
    </InfoContainer>
  );
}

export default ContactInfo;
