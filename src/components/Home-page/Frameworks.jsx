import styled from "styled-components";
import { motion } from "framer-motion";
import { frameworks } from "../../data/Frameworks-data";

// Your data import
// import { frameworks } from "../../data/Frameworks-data";

// --- MOCK DATA (Replace with your import) ---
const frameworksr = [
  { name: "React", link: "https://react.dev" },
  { name: "Next.js", link: "https://nextjs.org" },
  { name: "TypeScript", link: "https://www.typescriptlang.org" },
  { name: "Tailwind CSS", link: "https://tailwindcss.com" },
  { name: "TanStack", link: "https://tanstack.com" },
  { name: "Jira", link: "https://www.atlassian.com/software/jira" },
  { name: "Azure devops", link: "https://www.framer.com/motion" },
  { name: "SQL Selver", link: "https://www.docker.com" },
  { name: "Java", link: "" },
];

const colors = { white: "#ffffff", neon: "#00ff7f" };

// Main container with overflow hidden to create the track
const MarqueeContainer = styled.div`
  overflow: hidden;
  background: rgba(28, 28, 28, 0.6);
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  padding: 1.5rem 0;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
`;

// The moving track
const MarqueeTrack = styled(motion.div)`
  display: flex;
  gap: 3rem;
  align-items: center;
  flex-wrap: nowrap;
  /* Ensure we have two sets of items for seamless looping */
  width: max-content;
`;

// Individual text items
const TickerItem = styled(motion.a)`
  font-size: 1.2rem;
  font-weight: 700;
  color: ${colors.white};
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
  position: relative;
  white-space: nowrap;
  transition: all 0.3s ease;

  /* Glowing effect on text */
  &:hover {
    color: ${colors.neon};
    text-shadow: 0 0 10px ${colors.neon};
  }

  /* Separator dot between items */
  &::after {
    content: "•";
    position: absolute;
    right: -1.7rem;
    color: rgba(255, 255, 255, 0.3);
    font-size: 0.8rem;
  }

  /* Remove dot from last item */
  &:last-child::after {
    display: none;
  }
`;

export default function FrameworksTicker() {
  // Animation configuration
  // x: [-100, 0] moves from left offscreen to center
  // To make it continuous infinite loop, we animate from -100% to 0%
  
  const variants = {
    animate: {
      x: [0, -50], // Adjust -50 based on gap size if needed, but simpler logic is used below
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20, // Speed of the ticker
          ease: "linear",
        },
      },
    },
  };
  
  // Better approach for seamless loop: Start at x: 0 and move to x: -50% (half the width)
  // Note: To work perfectly, the content must be duplicated in HTML so there is no empty gap.
  
  return (
    <MarqueeContainer>
      <MarqueeTrack
        as={motion.div}
        animate={{ x: ["0%", "-50%"] }} // Move the track to the left by 50% (the width of one set of items)
        transition={{
          duration: 15, // Adjust for speed (lower = faster)
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
      >
        {/* Render items twice to ensure seamless loop */}
        {frameworks.map((fw, idx) => (
          <TickerItem 
            key={`first-${idx}`} 
            href={fw.link} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            {fw.name}
          </TickerItem>
        ))}
        
        {/* Duplicate for loop */}
        {frameworks.map((fw, idx) => (
          <TickerItem 
            key={`second-${idx}`} 
            href={fw.link} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            {fw.name}
          </TickerItem>
        ))}
      </MarqueeTrack>
    </MarqueeContainer>
  );
}