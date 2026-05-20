import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import NotFound from "./pages/Not-found/Not-found";
import styled, { keyframes } from "styled-components";
import { useState, useEffect } from "react";
import BackgroundParticles from "./components/common/BackgroundParticles";

const Container = styled.div`
  background: radial-gradient(circle at top, #0f1820 0%, #060606 45%, #000000 100%);
  min-height: 100vh;
  position: relative;
`;

const ContentLayer = styled.div`
  position: relative;
  z-index: 1;
`;

/* Refined loading animations */
const spin = keyframes`
  0% { 
    transform: rotate(0deg);
    opacity: 1;
  }
  100% { 
    transform: rotate(360deg);
    opacity: 1;
  }
`;

const pulse = keyframes`
  0%, 100% { 
    box-shadow: 
      0 0 15px #00ff7f, 
      0 0 30px #00ff7f inset,
      0 0 50px rgba(0, 255, 127, 0.2);
  }
  50% { 
    box-shadow: 
      0 0 30px #00ff7f, 
      0 0 60px #00ff7f inset,
      0 0 80px rgba(0, 255, 127, 0.3);
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
    visibility: visible;
  }
  99% {
    opacity: 0;
    visibility: visible;
  }
  100% {
    opacity: 0;
    visibility: hidden;
  }
`;

const LoaderOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(15, 24, 40, 0.95) 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 9999;
  backdrop-filter: blur(4px);
  
  opacity: ${(props) => (props.isHiding ? 0 : 1)};
  animation: ${(props) => (props.isHiding ? fadeOut : "none")} 0.6s ease-out forwards;
  transition: opacity 0.3s ease-out;
`;

const NeonCircle = styled.div`
  width: 90px;
  height: 90px;
  border: 3px solid #00ff7f;
  border-radius: 50%;
  border-top-color: transparent;
  animation: ${spin} 1.4s linear infinite, ${pulse} 2.2s ease-in-out infinite;
  box-shadow: 
    0 0 20px rgba(0, 255, 127, 0.3),
    inset 0 0 20px rgba(0, 255, 127, 0.1);
`;

const LoadingText = styled.p`
  color: #00ff7f;
  font-family: "Orbitron", sans-serif;
  font-size: clamp(1.5rem, 3vw, 1.8rem);
  margin-top: 2.5rem;
  letter-spacing: 3px;
  user-select: none;
  font-weight: 700;
  animation: ${pulse} 2s ease-in-out infinite;
`;

const LoadingSubtext = styled.p`
  color: rgba(0, 255, 127, 0.6);
  font-size: 0.85rem;
  margin-top: 1rem;
  letter-spacing: 1.2px;
  text-transform: uppercase;
`;

const App = () => {
  const [loading, setLoading] = useState(true);
  const [isHiding, setIsHiding] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHiding(true);
      setTimeout(() => setLoading(false), 600);
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <LoaderOverlay isHiding={isHiding}>
        <NeonCircle />
        <LoadingText>Loading</LoadingText>
        <LoadingSubtext>Initializing Portfolio</LoadingSubtext>
      </LoaderOverlay>
    );
  }

  return (
    <Container>
      <BackgroundParticles />
      <ContentLayer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ContentLayer>
    </Container>
  );
};

export default App;