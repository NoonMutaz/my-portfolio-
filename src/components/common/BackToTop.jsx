import { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";
import { colors } from "../../data/Colors-data";

const Button = styled(motion.button)`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 1000;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1px solid rgba(0, 255, 127, 0.35);
  background: rgba(14, 14, 14, 0.85);
  backdrop-filter: blur(10px);
  color: ${colors.neon};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);

  &:hover {
    background: rgba(0, 255, 127, 0.12);
    border-color: ${colors.neon};
  }

  @media (max-width: 576px) {
    bottom: 1.25rem;
    right: 1.25rem;
    width: 44px;
    height: 44px;
  }
`;

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <Button
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
        >
          <FaArrowUp />
        </Button>
      )}
    </AnimatePresence>
  );
}
