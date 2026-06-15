import { Button, Row, Col } from "react-bootstrap";
import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  FaUser,
  FaEnvelope,
  FaCommentDots,
  FaPaperPlane,
  FaPhone,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { colors } from "../../data/Colors-data";

const RECIPIENT_EMAIL = "noonalmutaz002@gmail.com";
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

const ContactWrapper = styled.div`
  position: relative;
  border-radius: 24px;
  padding: 1px;
  background: linear-gradient(
    135deg,
    rgba(0, 255, 127, 0.35),
    rgba(255, 255, 255, 0.06) 40%,
    rgba(0, 255, 127, 0.15)
  );
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.4);
`;

const ContactCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 0;
  border-radius: 23px;
  overflow: hidden;
  background: #0a0c10;
  backdrop-filter: blur(16px);
  color: ${colors.white};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const InfoPanel = styled.div`
  padding: clamp(1.8rem, 4vw, 2.5rem);
  background: linear-gradient(
    160deg,
    rgba(0, 255, 127, 0.1) 0%,
    rgba(0, 255, 127, 0.02) 60%,
    transparent 100%
  );
  border-right: 1px solid rgba(255, 255, 255, 0.06);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 768px) {
    border-right: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  }
`;

const PanelTitle = styled.h3`
  margin: 0;
  color: #f0f0f0;
  font-size: 1.35rem;
  font-weight: 700;
  letter-spacing: -0.3px;
`;

const PanelText = styled.p`
  margin: 0;
  color: #9ca3af;
  font-size: 0.95rem;
  line-height: 1.7;
`;

const QuickLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  margin-top: auto;
`;

const QuickLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.04);
  color: #d1d5db;
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.25s ease;

  svg {
    color: ${colors.neon};
    font-size: 1rem;
    flex-shrink: 0;
  }

  span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &:hover {
    border-color: rgba(0, 255, 127, 0.3);
    background: rgba(0, 255, 127, 0.07);
    color: #f0f0f0;
    transform: translateX(4px);
  }
`;

const FormPanel = styled.form`
  padding: clamp(1.8rem, 4vw, 2.5rem);
  position: relative;
  color-scheme: dark;
  background: #0d0f14;
`;

const FieldGroup = styled.div`
  margin-bottom: 1.25rem;
`;

const FieldLabel = styled.label`
  display: block;
  color: #b0b8c4;
  font-weight: 600;
  font-size: 0.85rem;
  margin-bottom: 0.5rem;
  letter-spacing: 0.4px;
  text-transform: uppercase;
`;

const inputStyles = `
  width: 100%;
  background: #141820;
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #f0f0f0;
  border-radius: 12px;
  padding: 0.85rem 1rem 0.85rem 2.75rem;
  font-size: 0.95rem;
  font-family: inherit;
  line-height: 1.5;
  transition: border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
  caret-color: ${colors.neon};

  &::placeholder {
    color: #6b7280;
  }

  &:focus {
    background: #181c24;
    border-color: rgba(0, 255, 127, 0.5);
    box-shadow: 0 0 0 3px rgba(0, 255, 127, 0.12);
    outline: none;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    -webkit-text-fill-color: #f0f0f0;
    -webkit-box-shadow: 0 0 0 1000px #141820 inset;
    box-shadow: 0 0 0 1000px #141820 inset;
    border-color: rgba(0, 255, 127, 0.35);
    transition: background-color 5000s ease-in-out 0s;
  }
`;

const InputWrap = styled.div`
  position: relative;

  svg {
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    color: rgba(0, 255, 127, 0.6);
    font-size: 0.9rem;
    pointer-events: none;
    z-index: 1;
  }

  &.textarea svg {
    top: 1rem;
    transform: none;
  }
`;

const StyledInput = styled.input`
  ${inputStyles}
`;

const StyledTextarea = styled.textarea`
  ${inputStyles}
  min-height: 130px;
  resize: vertical;
  padding-top: 0.9rem;
`;

const SubmitRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 0.5rem;
`;

const NeonButton = styled(Button)`
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  background: ${colors.neon} !important;
  color: ${colors.black} !important;
  border: none !important;
  padding: 0.75rem 1.75rem;
  font-size: 0.95rem;
  border-radius: 50px;
  font-weight: 700;
  box-shadow: 0 4px 20px rgba(0, 255, 127, 0.3);
  transition: all 0.25s ease;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 8px 28px rgba(0, 255, 127, 0.4);
    background: ${colors.neon} !important;
    color: ${colors.black} !important;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    box-shadow: none;
  }
`;

const StatusMessage = styled.div`
  font-size: 0.88rem;
  color: ${(props) =>
    props.$type === "error"
      ? "#f87171"
      : props.$type === "success"
        ? colors.neon
        : "#9ca3af"};
`;

const QUICK_LINKS = [
  {
    href: "tel:+966581019574",
    icon: FaPhone,
    label: "+966 581 019 574",
  },
  {
    href: `mailto:${RECIPIENT_EMAIL}`,
    icon: FaEnvelope,
    label: RECIPIENT_EMAIL,
  },
  {
    href: "https://www.linkedin.com/in/noon-almutaz-059a61267",
    icon: FaLinkedin,
    label: "LinkedIn",
    external: true,
  },
  {
    href: "https://github.com/NoonMutaz",
    icon: FaGithub,
    label: "GitHub",
    external: true,
  },
];

async function sendContactEmail({ name, email, message }) {
  if (!WEB3FORMS_ACCESS_KEY) {
    throw new Error("MISSING_ACCESS_KEY");
  }

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      name,
      email,
      message,
      subject: `Portfolio message from ${name}`,
      from_name: name,
      replyto: email,
    }),
  });

  const data = await response.json();

  if (!response.ok || !data.success) {
    throw new Error(data.message || "Failed to send message");
  }

  return data;
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus({ type: "loading", message: "Sending your message..." });

    try {
      await sendContactEmail(formData);
      setFormData({ name: "", email: "", message: "" });
      setStatus({
        type: "success",
        message: "Message sent! I'll get back to you soon.",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      const isMissingKey = error.message === "MISSING_ACCESS_KEY";
      setStatus({
        type: "error",
        message: isMissingKey
          ? `Email is not configured yet. Please contact me at ${RECIPIENT_EMAIL}.`
          : `Something went wrong. Please email me at ${RECIPIENT_EMAIL}.`,
      });
    } finally {
      setIsSending(false);
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
          lg={10}
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <ContactWrapper>
            <ContactCard>
              <InfoPanel>
                <div>
                  <PanelTitle>Let's connect</PanelTitle>
                  <PanelText>
                    Have a project in mind or want to collaborate? Send me a
                    message and I'll respond as soon as possible.
                  </PanelText>
                </div>

                <QuickLinks>
                  {QUICK_LINKS.map(({ href, icon: Icon, label, external }) => (
                    <QuickLink
                      key={href}
                      href={href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noreferrer" : undefined}
                    >
                      <Icon />
                      <span>{label}</span>
                    </QuickLink>
                  ))}
                </QuickLinks>
              </InfoPanel>

              <FormPanel onSubmit={handleSubmit}>
                <FieldGroup>
                  <FieldLabel htmlFor="contact-name">Name</FieldLabel>
                  <InputWrap>
                    <FaUser />
                    <StyledInput
                      id="contact-name"
                      type="text"
                      required
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </InputWrap>
                </FieldGroup>

                <FieldGroup>
                  <FieldLabel htmlFor="contact-email">Email</FieldLabel>
                  <InputWrap>
                    <FaEnvelope />
                    <StyledInput
                      id="contact-email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </InputWrap>
                </FieldGroup>

                <FieldGroup>
                  <FieldLabel htmlFor="contact-message">Message</FieldLabel>
                  <InputWrap className="textarea">
                    <FaCommentDots />
                    <StyledTextarea
                      id="contact-message"
                      required
                      rows={4}
                      placeholder="Tell me about your project or idea..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    />
                  </InputWrap>
                </FieldGroup>

                <SubmitRow>
                  <NeonButton type="submit" disabled={isSending}>
                    <FaPaperPlane />
                    {isSending ? "Sending..." : "Send Message"}
                  </NeonButton>

                  {status.message && (
                    <StatusMessage
                      $type={status.type}
                      role="status"
                      aria-live="polite"
                    >
                      {status.message}
                    </StatusMessage>
                  )}
                </SubmitRow>
              </FormPanel>
            </ContactCard>
          </ContactWrapper>
        </Col>
      </Row>
    </motion.div>
  );
}
