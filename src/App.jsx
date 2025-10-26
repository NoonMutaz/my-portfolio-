import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import NotFound from "./pages/Not-found/Not-found";
import styled, { keyframes } from "styled-components";
import { useState, useEffect } from "react";
 
const Container = styled.div`
  background-color: #000000;
  height: 100vh;
`;

// Spinner rotation animation
const spin = keyframes`
  0% { transform: rotate(0deg);}
  100% { transform: rotate(360deg);}
`;

// Pulsating glow animation
const pulse = keyframes`
  0%, 100% { box-shadow: 0 0 15px #00ff7f, 0 0 30px #00ff7f inset; }
  50% { box-shadow: 0 0 30px #00ff7f, 0 0 60px #00ff7f inset; }
`;

// Fullscreen overlay with fade-in
const LoaderOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 9999;
  opacity: 1;
  animation: fadeIn 0.5s ease forwards;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

// Neon circle spinner
const NeonCircle = styled.div`
  width: 100px;
  height: 100px;
  border: 5px solid #00ff7f;
  border-radius: 50%;
  animation: ${spin} 1.5s linear infinite, ${pulse} 2s ease-in-out infinite;
  perspective: 800px;
  border-top-color: transparent;
`;

// Loading text with glow and pulse
const LoadingText = styled.p`
  color: #00ff7f;
  font-family: "Orbitron", sans-serif;
  font-size: 2rem;
  margin-top: 1.5rem;
  letter-spacing: 3px;
  user-select: none;
`;

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // hide loader after 2.5 seconds
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <LoaderOverlay>
        <NeonCircle />
        <LoadingText>Loading...</LoadingText>
      </LoaderOverlay>
    );
  }

  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
       
      </Routes>
    </Container>
  );
};

export default App;
