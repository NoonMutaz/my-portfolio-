 
import { Container, Button } from "react-bootstrap";
import styled, { keyframes } from "styled-components";

// Animation for floating effect
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

// Wrapper
const Wrapper = styled.div`
  min-height: 100vh;
  background-color: #121212;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #eee;
  text-align: center;
  padding: 2rem;
`;

// Error number
const ErrorNumber = styled.h1`
  font-size: clamp(6rem, 15vw, 10rem);
  font-weight: 900;
  color: #ffc107;
  text-shadow: 0 0 20px rgba(255, 193, 7, 0.6);
  margin-bottom: 1rem;
  animation: ${float} 3s ease-in-out infinite;
`;

// Message
const Message = styled.p`
  font-size: 1.3rem;
  margin-bottom: 2rem;
  color: #ccc;
`;

// Button
const StyledButton = styled(Button)`
  background-color: #ffc107;
  border: none;
  color: #121212;
  font-weight: 700;
  border-radius: 30px;
  padding: 0.75rem 2rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: #e0a800;
    transform: scale(1.05);
    box-shadow: 0 0 15px #ffc107;
  }
`;

function NotFound() {
  return (
    <Wrapper>
      <Container>
        <ErrorNumber>404</ErrorNumber>
        <h2 style={{ color: "#fff", marginBottom: "1rem" }}>
          الصفحة غير موجودة 😢
        </h2>
        <Message>
          عذراً! الصفحة التي تبحث عنها غير متوفرة.<br />
          ربما تفضل العودة إلى <strong>كفتريا السعادة</strong> وتجربة أطباقنا؟
        </Message>
        <StyledButton href="/">العودة للرئيسية</StyledButton>
      </Container>
    </Wrapper>
  );
}

export default NotFound;
