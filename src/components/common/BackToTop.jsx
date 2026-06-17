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
  width: 44px;
  height: 44px;
  border-radius: 6px;
  border: 1px solid ${colors.borderHover};
  background: rgba(6, 18, 48, 0.9);
  backdrop-filter: blur(10px);
  color: ${colors.accentLight};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);

  &:hover {
    background: ${colors.accentSoft};
    border-color: ${colors.neon};
    color: ${colors.white};
  }

  @media (max-width: 576px) {
    bottom: 1.25rem;
    right: 1.25rem;
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
          whileHover={{ scale: 1.05 }}
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
