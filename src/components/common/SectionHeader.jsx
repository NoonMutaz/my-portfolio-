import styled from "styled-components";
import { colors, fonts } from "../../data/Colors-data";

const Wrap = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
  margin-bottom: clamp(2rem, 4vw, 3rem);
`;

const Index = styled.span`
  font-family: ${fonts.mono};
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  color: ${colors.accent};
  padding-top: 0.45rem;
  flex-shrink: 0;
  opacity: 0.85;
`;

const Rule = styled.div`
  width: 1px;
  align-self: stretch;
  min-height: 48px;
  background: linear-gradient(
    to bottom,
    ${colors.accent},
    rgba(56, 189, 248, 0.05)
  );
  flex-shrink: 0;
`;

const Content = styled.div``;

const Title = styled.h2`
  margin: 0;
  font-family: ${fonts.display};
  font-size: clamp(1.75rem, 4vw, 2.4rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.15;
  color: ${colors.white};
`;

const Subtitle = styled.p`
  margin: 0.5rem 0 0;
  font-size: 0.95rem;
  color: ${colors.muted};
  line-height: 1.6;
  max-width: 520px;
`;

export default function SectionHeader({ index, title, subtitle }) {
  return (
    <Wrap>
      <Index>{index}</Index>
      <Rule aria-hidden="true" />
      <Content>
        <Title>{title}</Title>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
      </Content>
    </Wrap>
  );
}
