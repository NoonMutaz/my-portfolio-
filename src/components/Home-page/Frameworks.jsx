import styled from "styled-components";
import { motion } from "framer-motion";
import { frameworks } from "../../data/Frameworks-data";

const colors = { white: "#ffffff", neon: "#00ff7f" };

const MarqueeContainer = styled.div`
  overflow: hidden;
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  padding: 2.5rem 0;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  background: linear-gradient(
    to bottom,
    rgba(0, 255, 127, 0.02),
    transparent,
    rgba(0, 255, 127, 0.02)
  );

  /* Mask edges for smooth fade */
  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 5%,
    black 95%,
    transparent 100%
  );
  mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 5%,
    black 95%,
    transparent 100%
  );
`;

const MarqueeTrack = styled(motion.div)`
  display: flex;
  gap: 3.5rem;
  align-items: center;
  flex-wrap: nowrap;
  width: max-content;
`;

const TickerItem = styled(motion.a)`
  font-size: clamp(1rem, 2vw, 1.3rem);
  font-weight: 700;
  color: ${colors.white};
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  cursor: pointer;
  position: relative;
  white-space: nowrap;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  padding: 0.5rem 0;

  /* Glowing effect on hover */
  &:hover {
    color: ${colors.neon};
    text-shadow: 
      0 0 12px ${colors.neon},
      0 0 24px rgba(0, 255, 127, 0.4);
  }

  /* Separator dot between items */
  &::after {
    content: "•";
    position: absolute;
    right: -1.95rem;
    color: rgba(0, 255, 127, 0.4);
    font-size: 0.9rem;
    font-weight: 300;
  }

  /* Remove dot from last item */
  &:last-child::after {
    display: none;
  }
`;

export default function FrameworksTicker() {
  return (
    <MarqueeContainer>
      <MarqueeTrack
        as={motion.div}
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
      >
        {/* First set */}
        {frameworks.map((fw, idx) => (
          <TickerItem 
            key={`first-${idx}`} 
            href={fw.link} 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            {fw.name}
          </TickerItem>
        ))}
        
        {/* Duplicate for seamless loop */}
        {frameworks.map((fw, idx) => (
          <TickerItem 
            key={`second-${idx}`} 
            href={fw.link} 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            {fw.name}
          </TickerItem>
        ))}
      </MarqueeTrack>
    </MarqueeContainer>
  );
}