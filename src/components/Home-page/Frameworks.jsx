import { useState } from "react";
import styled, { css } from "styled-components";
import { frameworks } from "../../data/Frameworks-data";
import { colors } from "../../data/Colors-data";

const MarqueeContainer = styled.div`
  overflow: hidden;
  padding: 1.5rem 0;
  width: 100%;
  background-color:rgba(0, 255, 127, 0.07);
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  background: linear-gradient(
    to bottom,
    rgba(0, 255, 127, 0.03),
    transparent,
    rgba(0, 255, 127, 0.03)
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
  font-size: 0.95rem;
  font-weight: 700;
  color: rgba(0, 255, 127, 4.35);
  white-space: nowrap;
  letter-spacing: 0.5px;
  padding: 0.55rem 1.25rem;
  border-radius: 50px;
  //border: 1px solid rgba(0, 255, 127, 0.28);
 // background: rgba(0, 255, 127, 0.07);
  transition: color 0.25s ease, border-color 0.25s ease, background 0.25s ease;
`;

const NameLink = styled.a`
  ${itemBase}
  text-decoration: none;

  &:hover ${NamePill} {
    color: ${colors.neon};
    border-color: rgba(0, 255, 127, 0.5);
    background: rgba(0, 255, 127, 0.12);
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
