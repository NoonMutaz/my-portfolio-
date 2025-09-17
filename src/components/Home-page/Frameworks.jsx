import styled from "styled-components";
import {  Row, Col, } from "react-bootstrap";
import { frameworks } from '../../data/Frameworks-data';
import { colors } from '../../data/Colors-data';
const FrameworkLogo = styled.img`
  width: 60px;
  height: 60px;
  object-fit: contain;
  margin-bottom: 1rem;
  filter: drop-shadow(0 0 3px ${colors.neon});
  transition: transform 0.3s ease;

  .Card:hover & {
    transform: scale(1.1);
  }
`; 
export default function Frameworks() {

  return (
    <div>
      <Row className="g-4 justify-content-start ">
        {frameworks.map((fw, idx) => (
          <Col md={2} sm={3} xs={4} key={idx} style={{ textAlign: "center", cursor: "pointer" }}>
            <a href={fw.link} className="Card"  target="_blank" rel="noopener noreferrer" style={{ display: "flex", flexDirection: "column", alignItems: "center", textDecoration: "none", color: colors.white }}>
              <FrameworkLogo src={fw.image} alt={fw.name} />
              <h6 style={{ marginTop: "0.5rem", fontWeight: "700" }}>{fw.name}</h6>
            </a>
          </Col>
        ))}
      </Row>
    </div>
  )
}
