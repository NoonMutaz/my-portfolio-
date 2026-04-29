import { Button, Row, Col, Form } from "react-bootstrap";
import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { colors } from "../../data/Colors-data";
import db from "../../config/firestore";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";





const ContactForm = styled(Form)`
  background: linear-gradient(160deg, rgba(28, 28, 28, 0.88), rgba(14, 14, 14, 0.86));
  border: 1px solid rgba(0, 255, 127, 0.24);
  padding: 2rem;
  border-radius: 18px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.35);

  label {
    color: ${colors.neon};
    font-weight: bold;
  }

  input,
  textarea {
    background: rgba(255, 255, 255, 0.96);
    border: 1px solid #3f3f3f;
    color: #2b2b2b;
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
