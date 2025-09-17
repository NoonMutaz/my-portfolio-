//import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import styled, { createGlobalStyle } from "styled-components";
import burger from '../../assets/burger.png';
import smoke from '../../assets/smokeBG.jpg';

// Global font and base styles
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&display=swap');

  body {
    font-family: 'Cairo', sans-serif;
    background-color: #121212;
    color: #eee;
    margin: 0;
    padding: 0;
  }
`;

const Section = styled.section`
  padding: 4rem 0;
  background-color: ${(props) => props.bg || "#fff"};
  color: ${(props) => props.color || "#000"};
  transition: background-color 0.3s ease, color 0.3s ease;

  /* Add subtle gradient for light bg sections */
  ${(props) =>
    props.bg === "#f9f9f9" &&
    `
    background: linear-gradient(135deg, #f9f9f9 0%, #e0e0e0 100%);
    color: #333;
  `}
`;

const Hero = styled.div`
  position: relative;
  background: url("${smoke}") center/cover no-repeat;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffcc00;
  font-weight: 900;
  font-size: clamp(2.5rem, 5vw, 3rem);
  text-shadow: 0 0 10px rgba(255, 204, 0, 0.8);

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,0.6);
    z-index: 0;
  }

  h1 {
    position: relative;
    z-index: 1;
  }
`;

const StyledCard = styled(Card)`
  border-radius: 20px;
  background: #1e1e1e;
  color: #eee;
  box-shadow: 0 8px 20px rgba(0,0,0,0.4);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: default;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 30px rgba(255, 204, 0, 0.6);
  }

  .card-title {
    color: #ffcc00;
    font-weight: 700;
    font-size: 1.4rem;
  }

  .card-text {
    font-size: 1.1rem;
    color: #ddd;
  }
`;

const ImageRounded = styled.img`
  /* border-radius: 20px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.5); */
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    /* box-shadow: 0 12px 35px rgba(255, 204, 0, 0.7); */
  }
`;

const Heading = styled.h2`
  color: ${(props) => props.color || "#000"};
  font-weight: 900;
  margin-bottom: 2rem;
  text-align: center;
  font-size: clamp(1.8rem, 3vw, 2.5rem);
`;

const Paragraph = styled.p`
  font-size: 1.15rem;
  line-height: 1.7;
  color: ${(props) => props.color || "#eee"};
`;



// const ContactInfo = styled.div`
//   font-size: 1.2rem;
//   margin-bottom: 1rem;
//   color: #ffc107;
//   font-weight: 600;
//   display: flex;
//   justify-content: center;
//   gap: 1rem;
//   flex-wrap: wrap;
// `;

 
const MapContainer = styled.div`
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(255, 193, 7, 0.4);
  margin-top: 2rem;

  iframe {
    width: 100%;
    height: 300px;
    border: none;
  }
`;


const ContactInfoBox = styled.div`
  background: #1e1e1e;
  border-radius: 15px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 8px 20px rgba(255, 193, 7, 0.3);
  text-align: center;

  h3 {
    color: #ffc107;
    margin-bottom: 1rem;
    font-weight: 700;
  }

  p {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
    color: #ddd;
  }
`;


function AboutUs() {
  return (
    <>
      <GlobalStyle />
      <div dir="rtl">
        {/* Hero Section */}
        <Hero>
          <h1>عن كفتريا السعادة</h1>
        </Hero>

        {/* Who We Are Section */}
        <Section bg="#121212" color="#eee">
          <Container>
            <Row className="align-items-center">
              <Col md={6}>
                <ImageRounded
                  src={burger}
                  alt="عن المطعم"
                  className="img-fluid"
                />
              </Col>
              <Col md={6}>
                <Heading color="#ffcc00">من نحن</Heading>
                <Paragraph>
                  منذ تأسيس <strong>كفتريا السعادة</strong> ونحن نسعى لتقديم أشهى
                  الأطعمة والمشروبات لعملائنا الكرام في أجواء مليئة بالراحة
                  والسعادة. نؤمن أن الطعام ليس مجرد وجبة، بل تجربة مليئة بالدفء
                  والمحبة.
                </Paragraph>
              </Col>
            </Row>
          </Container>
        </Section>

        {/* Our Values Section */}
        <Section bg="#f9f9f9" color="#333">
          <Container>
            <Heading color="#ffcc00">قيمنا</Heading>
            <Row className="g-4">
              {[
                { title: "الجودة", text: "نستخدم أفضل المكونات الطازجة لضمان تجربة طعام استثنائية." },
                { title: "الضيافة", text: "فريقنا يسعى دائمًا لتقديم خدمة مميزة بابتسامة دافئة." },
                { title: "الابتكار", text: "نضيف لمسات جديدة على وصفاتنا لنجعلها فريدة من نوعها." },
              ].map(({ title, text }) => (
                <Col md={4} key={title}>
                  <StyledCard className="h-100">
                    <Card.Body>
                      <Card.Title>{title}</Card.Title>
                      <Card.Text>{text}</Card.Text>
                    </Card.Body>
                  </StyledCard>
                </Col>
              ))}
            </Row>
          </Container>
        </Section>

        {/* Gallery / Atmosphere */}
        <Section bg="#121212" color="#eee">
          <Container>
            <Heading color="#ffcc00">أجواؤنا</Heading>
            <Row className="g-4">
              {[1, 2, 3].map((img) => (
                <Col md={4} key={img}>
                  <ImageRounded
                    src='https://mir-s3-cdn-cf.behance.net/projects/404/762a16186897647.Y3JvcCwxMzA5LDEwMjQsMjM5LDA.png'
                    alt={`صورة ${img}`}
                    className="img-fluid"
                  />
                </Col>
              ))}
            </Row>
          </Container>
        </Section>

       {/* Map / Location Section */}
         <Section bg="black" color="white">
           <Container>
             <h2 className="text-center mb-4" style={{ color: "#ffc107" }}>
               موقعنا
             </h2>
             <Row className="justify-content-center">
               <Col md={10}>
                 <ContactInfoBox>
                   <h3>معلومات الاتصال</h3>
                   <p>📍 العنوان: شارع رئيسي، المدينة</p>
                   <p>📞 الهاتف: 123456789</p>
                   <p>✉️ البريد الإلكتروني: info@cafesaadah.com</p>
                 </ContactInfoBox>
                 <MapContainer>
                   <iframe
                     title="موقع كفتريا السعادة"
                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.1234567890123!2d35.1234567890123!3d31.1234567890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDA3JzAwLjAiTiAzNcKwMDcnMDMuMCJF!5e0!3m2!1sen!2s!4v0000000000000"
                     allowFullScreen=""
                     loading="lazy"
                     referrerPolicy="no-referrer-when-downgrade"
                   />
                 </MapContainer>
               </Col>
             </Row>
           </Container>
         </Section>
      </div>
    </>
  );
}

export default AboutUs;