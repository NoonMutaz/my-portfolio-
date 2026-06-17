import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import NotFound from "./pages/Not-found/Not-found";
import styled from "styled-components";
import BackgroundParticles from "./components/common/BackgroundParticles";
import { colors } from "./data/Colors-data";

const Container = styled.div`
  min-height: 100vh;
  position: relative;
  background: radial-gradient(
    ellipse 120% 80% at 50% -20%,
    #0c2048 0%,
    ${colors.space} 45%,
    ${colors.spaceDeep} 100%
  );
`;

const ContentLayer = styled.div`
  position: relative;
  z-index: 1;
`;

const App = () => (
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

export default App;
