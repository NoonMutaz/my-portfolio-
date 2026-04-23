import styled from "styled-components";
import { Row, Col } from "react-bootstrap";

export default function About() {
  const AboutText = styled.p`
    color: #ddd;
    font-size: 1.05rem;
    line-height: 1.8;
  `;
  return (
    <div>
      <Row className="align-items-center g-4">
        <Col md={6}>
          <AboutText>
            I&apos;m a Software Engineer with a{" "}
            <strong>B.Sc. in Software Engineering</strong> from the University
            of Hail. I build modern, responsive web applications using Next.js
            and React, and I collaborate closely with UI/UX designers to deliver
            polished user experiences.
          </AboutText>
        </Col>
        <Col md={6}>
          <AboutText>
            I also contribute to system analysis and documentation by
            participating in requirements discussions and reviewing SRS material.
            Alongside frontend development, I design databases and ERDs, and I
            have working knowledge of .NET Core and Entity Framework to support
            full-stack delivery.
          </AboutText>
        </Col>
      </Row>
    </div>
  );
}
