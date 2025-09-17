import styled from "styled-components";
import {  Row, Col, } from "react-bootstrap";
   
export default function About() {
 

const AboutText = styled.p`
  color: #ddd;
  font-size: 1.1rem;
  line-height: 1.7;
`;
  return (
    <div>
             <Row className="align-items-center">
                  <Col md={6}>
                    <AboutText>
                      I&apos;m a Software Engineer with B.Sc. in Software Engineering from University of Hail, with work experiance in Next.js and React ,where I collaborated closley with UI/UX 
                      designers to build modren responsive web applications to life. 
                      I have cotrubited to system analysis discussions, I have paricipating in meetings on project requirments and reviewing SRS documentation, As part of this I created diagrams such as  use case diagrams and activity diagrams.
                    </AboutText>
                  </Col>
                  <Col md={6}>
                    <AboutText>
                   Alongside development I have worked on database design, inclouding creating system tables and ERD diagrams to support scalable and efficient architectures, I have knowledge of .Net Core and entity framework , wich strength my ability to build roboust backend solutions and integrate them with frontend applications.  
                    </AboutText>
                  </Col>
                </Row>
    </div>
  )
}
