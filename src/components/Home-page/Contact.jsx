import { Button, Row, Col, Form } from "react-bootstrap";
import { useState } from "react";
import styled from "styled-components";
import { colors } from '../../data/Colors-data';
import db from '../../config/firestore';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";





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
    background: white;
    border: 1px solid #444;
    color: gray;
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

export default function Contact() {
const [formData, setFormData] = useState({
  name: "",
  email: "",
  message: ""
});

const [status, setStatus] = useState("");  
 const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      await addDoc(collection(db, "messages"), {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        timestamp: serverTimestamp(),
      });

      setFormData({ name: "", email: "", message: "" });
      setStatus("  Message sent successfully!");
    } catch (error) {
      console.error("❌ Error sending message:", error);
      setStatus(
              <div style={{ color: 'red' }}>
           ❌ Failed to send message - please try again later.
           <br />
           If the issue persists, contact me directly at my: 
           <span style={{ color: colors.neon }}>
              noonalmutaz002@gmail.com 
           </span>
        </div>

      );
    }
  };





  return (
    <div>
        <Row className="justify-content-center">
            <Col md={8}>
              <ContactForm onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control  type="text" required
                  
                   placeholder="Enter your name"
                   value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })}
                   />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email"   required
                   value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    required
                    rows={4}
                    placeholder="Enter your message"
                     value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                
                  />
                </Form.Group>
                <NeonButton type="submit">Send</NeonButton>
                  {status && (
              <p
                style={{
                  color: colors.neon,
                  marginTop: "1rem",
                  textAlign: "center",
                }}
              >
                {status}
              </p>
            )}
              </ContactForm>
            </Col>
          </Row>
    </div>
  )
}
