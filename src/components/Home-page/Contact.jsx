import { Button, Row, Col, Form } from "react-bootstrap";
import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { colors } from "../../data/Colors-data";
import db from "../../config/firestore";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";





const ContactForm = styled(Form)`
  position: relative;
  overflow: hidden;

  background: rgba(10, 10, 10, 0.52);
  border: 1px solid rgba(255, 255, 255, 0.08);

  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);

  padding: clamp(1.8rem, 4vw, 3rem);
  border-radius: 28px;

  box-shadow:
    0 10px 40px rgba(0, 0, 0, 0.35),
    inset 0 1px 0 rgba(255, 255, 255, 0.03);

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background:
      linear-gradient(
        135deg,
        rgba(0, 255, 127, 0.04),
        transparent 35%
      );
    pointer-events: none;
  }

  label {
    color: rgba(255, 255, 255, 0.82);
    font-weight: 600;
    margin-bottom: 0.55rem;
    font-size: 0.95rem;
    letter-spacing: 0.3px;
  }

  input,
  textarea {
    background: rgba(255, 255, 255, 0.06) !important;
    border: 1px solid rgba(255, 255, 255, 0.08) !important;

    color: white !important;

    border-radius: 14px;
    padding: 0.9rem 1rem;

    transition: all 0.25s ease;

    backdrop-filter: blur(4px);

    &::placeholder {
      color: rgba(255, 255, 255, 0.38);
    }

    &:focus {
      background: rgba(255, 255, 255, 0.08) !important;

      border-color: rgba(0, 255, 127, 0.45) !important;

      box-shadow:
        0 0 0 4px rgba(0, 255, 127, 0.08),
        0 0 18px rgba(0, 255, 127, 0.12);

      outline: none;
    }
  }

  textarea {
    resize: none;
    min-height: 140px;
  }

  .form-group,
  .mb-3 {
    margin-bottom: 1.3rem;
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
  margin-top: 1rem;
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
    message: "",
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
      setStatus("Message sent successfully.");
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus(
        <div style={{ color: "#f87171" }}>
          Failed to send message. Please try again later.
          <br />
          You can also contact me directly at{" "}
          <span style={{ color: colors.neon }}>noonalmutaz002@gmail.com</span>.
        </div>
      );
    }
  };





  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Row className="justify-content-center">
        <Col
          as={motion.div}
          md={8}
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <ContactForm onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                required
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </Form.Group>
            <NeonButton type="submit">Send Message</NeonButton>
            {status && (
              <div
                style={{
                  color: colors.neon,
                  marginTop: "1rem",
                  textAlign: "center",
                }}
              >
                {status}
              </div>
            )}
          </ContactForm>
        </Col>
      </Row>
    </motion.div>
  );
}
