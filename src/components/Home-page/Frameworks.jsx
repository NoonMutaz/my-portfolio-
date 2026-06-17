import { useState } from "react";
import styled, { css } from "styled-components";
import { frameworks } from "../../data/Frameworks-data";
import { colors, fonts } from "../../data/Colors-data";

const MarqueeContainer = styled.div`
  overflow: hidden;
  padding: 1.5rem 0;
  width: 100%;
  border-top: 1px solid ${colors.border};
  border-bottom: 1px solid ${colors.border};
  background: linear-gradient(
    to bottom,
    rgba(56, 189, 248, 0.04),
    transparent,
    rgba(56, 189, 248, 0.04)
  );
  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 6%,
    black 94%,
    transparent 100%
  );
  mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 6%,
    black 94%,
    transparent 100%
  );
`;

const MarqueeTrack = styled.div`
  display: flex;
  gap: 3.5rem;
  align-items: center;
  width: max-content;
  animation: marquee-scroll 26s linear infinite;
  animation-play-state: ${(props) => (props.$paused ? "paused" : "running")};

  @keyframes marquee-scroll {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50%);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    gap: 1.5rem;
  }
`;

const itemBase = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: transform 0.25s ease;

  &:hover {
    transform: scale(1.08);
  }
`;

const ImageItem = styled.a`
  ${itemBase}
  text-decoration: none;
`;

const ImageWrap = styled.div`
  ${itemBase}
`;

const Image = styled.img`
  height: 44px;
  width: auto;
  max-width: 72px;
  object-fit: contain;
  filter: grayscale(15%) brightness(1.05);
  transition: filter 0.25s ease;

  ${ImageItem}:hover &,
  ${ImageWrap}:hover & {
    filter: none;
  }
`;

const NamePill = styled.span`
  font-size: 0.9rem;
  font-weight: 600;
  font-family: ${fonts.mono};
  color: ${colors.accentLight};
  white-space: nowrap;
  letter-spacing: 0.04em;
  padding: 0.5rem 1.1rem;
  border-radius: 6px;
  border: 1px solid ${colors.border};
  background: ${colors.accentSoft};
  transition: color 0.25s ease, border-color 0.25s ease, background 0.25s ease;
`;

const NameLink = styled.a`
  ${itemBase}
  text-decoration: none;

  &:hover ${NamePill} {
    color: ${colors.white};
    border-color: ${colors.borderHover};
    background: rgba(56, 189, 248, 0.18);
  }
`;

const NameStatic = styled.div`
  ${itemBase}
`;

function renderItem(fw, idx) {
  if (fw.image) {
    if (fw.link) {
      return (
        <ImageItem
          key={idx}
          href={fw.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={fw.name}
        >
          <Image src={fw.image} alt={fw.name} loading="lazy" />
        </ImageItem>
      );
    }
    return (
      <ImageWrap key={idx} aria-label={fw.name}>
        <Image src={fw.image} alt={fw.name} loading="lazy" />
      </ImageWrap>
    );
  }

  if (fw.link) {
    return (
      <NameLink
        key={idx}
        href={fw.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={fw.name}
      >
        <NamePill>{fw.name}</NamePill>
      </NameLink>
    );
  }

  return (
    <NameStatic key={idx} aria-label={fw.name}>
      <NamePill>{fw.name}</NamePill>
    </NameStatic>
  );
}

export default function Frameworks() {
  const [paused, setPaused] = useState(false);
  const items = [...frameworks, ...frameworks];

  return (
    <MarqueeContainer
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <MarqueeTrack $paused={paused}>
        {items.map((fw, idx) => renderItem(fw, idx))}
      </MarqueeTrack>
    </MarqueeContainer>
  );
}
