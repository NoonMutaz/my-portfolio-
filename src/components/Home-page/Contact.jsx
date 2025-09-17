import { Button, Row, Col, Form } from "react-bootstrap";
import styled from "styled-components";
import { colors } from '../../data/Colors-data';

export default function Contact() {

const NeonButton = styled(Button)`
  background: ${colors.neon};
  color: ${colors.black};
  border: none;
  padding: 0.7rem 2rem;
  font-size: 1.1rem;
  border-radius: 50px;
  font-weight: bold;
  margin-top: 1.5rem;
  box-shadow: 0 0 15px ${colors.neon};
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.08);
    box-shadow: 0 0 25px ${colors.neon};
  }
`;

const ContactForm = styled(Form)`
  background: ${colors.darkGray};
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 0 20px rgba(0, 255, 127, 0.2);

  label {
    color: ${colors.neon};
    font-weight: bold;
  }

  input,
  textarea {
    background: #0d0d0d;
    border: 1px solid #444;
    color: ${colors.white};
    border-radius: 8px;
    padding: 0.6rem 1rem;
    margin-bottom: 1rem;

    &:focus {
      border-color: ${colors.neon};
      box-shadow: 0 0 10px ${colors.neon};
      outline: none;
    }
  }
`;



  return (
    <div>
        <Row className="justify-content-center">
            <Col md={8}>
              <ContactForm>
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Enter your message"
                  />
                </Form.Group>
                <NeonButton type="submit">Send</NeonButton>
              </ContactForm>
            </Col>
          </Row>
    </div>
  )
}
