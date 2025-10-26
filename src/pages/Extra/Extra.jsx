// Portfolio.jsx
import React from 'react';
import styled, { keyframes } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaBuilding, FaCity, FaDraftingCompass, FaPhone, FaEnvelope, FaLinkedin, FaGraduationCap, FaTools, FaCode, FaLeaf } from 'react-icons/fa';

// Enhanced Animations for modern feel (smooth, subtle)
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(50px); }
  to { opacity: 1; transform: translateY(0); }
`;

const scaleUp = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.02); }
  100% { transform: scale(1); }
`;

const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(52, 152, 219, 0.4); }
  70% { box-shadow: 0 0 0 10px rgba(52, 152, 219, 0); }
  100% { box-shadow: 0 0 0 0 rgba(52, 152, 219, 0); }
`;

const slideInLeft = keyframes`
  from { opacity: 0; transform: translateX(-50px); }
  to { opacity: 1; transform: translateX(0); }
`;

const glow = keyframes`
  0% { filter: drop-shadow(0 0 5px rgba(52, 152, 219, 0.3)); }
  50% { filter: drop-shadow(0 0 20px rgba(52, 152, 219, 0.6)); }
  100% { filter: drop-shadow(0 0 5px rgba(52, 152, 219, 0.3)); }
`;

// Modern Styled Components (glassmorphism, clean lines, modern architecture theme)
const GlobalStyles = styled.div`
  font-family: 'Roboto', sans-serif;
`;

const Hero = styled.section`
  background: linear-gradient(135deg, rgba(31, 28, 44, 0.8) 0%, rgba(146, 141, 171, 0.8) 100%);
  color: white;
  padding: 150px 20px 100px;
  text-align: center;
  animation: ${fadeIn} 1.5s ease-out;
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('https://source.unsplash.com/1920x1080/?architecture,modern,skyscraper') center/cover fixed;
    opacity: 0.6;
    z-index: 1;
    animation: ${scaleUp} 20s ease-in-out infinite alternate;
  }

  > * {
    position: relative;
    z-index: 2;
  }

  .hero-overlay {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    padding: 40px;
    border-radius: 20px;
    max-width: 900px;
    margin: 0 auto;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  }
`;

// Decorative animated buildings for the Hero section
const SkylineWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 2;
  pointer-events: none;
`;

const Skyline = styled.svg`
  width: 100%;
  height: 120px;
  display: block;
  animation: ${fadeInUp} 2s ease;
`;

const AnimatedBuildings = styled.div`
  position: absolute;
  bottom: 120px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 30px;
  z-index: 3;
  pointer-events: none;
`;

const Building = styled.div`
  width: 60px;
  height: 120px;
  background: linear-gradient(180deg, #3498db 60%, #34495e 100%);
  border-radius: 10px 10px 0 0;
  box-shadow: 0 8px 32px rgba(52,152,219,0.15);
  position: relative;
  animation: ${scaleUp} 3s infinite;
  opacity: 0.85;

  &:nth-child(2) {
    height: 90px;
    background: linear-gradient(180deg, #2980b9 60%, #34495e 100%);
    left: 0;
    animation-delay: 0.5s;
  }
  &:nth-child(3) {
    height: 140px;
    background: linear-gradient(180deg, #34495e 60%, #3498db 100%);
    left: 0;
    animation-delay: 1s;
  }
  &:nth-child(4) {
    height: 100px;
    background: linear-gradient(180deg, #3498db 60%, #2980b9 100%);
    left: 0;
    animation-delay: 1.5s;
  }
  &:nth-child(5) {
    height: 80px;
    background: linear-gradient(180deg, #2980b9 60%, #3498db 100%);
    left: 0;
    animation-delay: 2s;
  }
  &:after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    left: 10px;
    width: 40px;
    height: 10px;
    background: #fff;
    opacity: 0.15;
    border-radius: 0 0 8px 8px;
  }
`;

const Title = styled.h1`
  font-size: 5rem;
  margin-bottom: 20px;
  font-weight: 300;
  letter-spacing: 3px;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
  animation: ${glow} 3s ease-in-out infinite;
`;

const Subtitle = styled.p`
  font-size: 1.6rem;
  opacity: 0.95;
  margin-bottom: 30px;
  font-weight: 300;
`;

const IntroText = styled.p`
  font-size: 1.25rem;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.8;
  opacity: 0.9;
`;

const Section = styled.section`
  padding: 120px 20px;
  position: relative;
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 60px;
  font-size: 3.5rem;
  background: linear-gradient(135deg, #3498db, #2980b9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 300;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 100px;
    height: 3px;
    background: linear-gradient(90deg, #3498db, #2980b9);
    margin: 20px auto 0;
    border-radius: 2px;
    animation: ${pulse} 2s infinite;
  }
`;

const AboutSection = styled(Section)`
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  animation: ${slideInLeft} 1s ease-out 0.5s both;
`;

const AboutText = styled.p`
  font-size: 1.2rem;
  line-height: 1.9;
  color: #555;
  text-align: center;
  max-width: 900px;
  margin: 0 auto 30px;
`;

const SkillsSection = styled(Section)`
  background: #fff;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, #3498db, transparent);
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Skill = styled.div`
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transition: all 0.4s ease;
  animation: ${scaleUp} 4s ease-in-out infinite;
  border: 1px solid rgba(52, 152, 219, 0.2);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #3498db, #2980b9);
  }

  &::after {
    content: '🏙️'; // Modern building emoji for flair
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 2rem;
    opacity: 0.1;
  }

  svg {
    font-size: 2.5rem;
    color: #3498db;
    margin-right: 25px;
    flex-shrink: 0;
    animation: ${glow} 2s ease-in-out infinite alternate;
  }

  span {
    font-size: 1.15rem;
    font-weight: 500;
    color: #2c3e50;
  }

  &:hover {
    transform: translateY(-12px) scale(1.03);
    box-shadow: 0 15px 40px rgba(52, 152, 219, 0.3);
    border-color: #3498db;
    animation: ${pulse} 1s infinite;
  }
`;

const ProjectsSection = styled(Section)`
  background: linear-gradient(135deg, #e9ecef 0%, #f8f9fa 100%);
  position: relative;

  &::before {
    content: url('https://source.unsplash.com/200x100/?architecture,pattern'); // Subtle modern pattern
    position: absolute;
    top: 20%;
    right: 10%;
    opacity: 0.05;
    z-index: 0;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 50px;
  max-width: 1400px;
  margin: 0 auto;
`;

const ProjectCard = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 25px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  animation: ${fadeInUp} 1s ease-out;
  border: 1px solid rgba(52, 152, 219, 0.1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5px;
    background: linear-gradient(90deg, #3498db, #2980b9, #3498db);
    animation: ${scaleUp} 3s ease-in-out infinite;
  }

  &:hover {
    transform: translateY(-20px) rotate(2deg);
    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  &:hover img {
    transform: scale(1.12) rotate(1deg);
  }

  .content {
    padding: 30px;
    position: relative;
    z-index: 2;
  }

  h5 {
    font-size: 1.4rem;
    margin-bottom: 15px;
    color: #2c3e50;
    font-weight: 600;
  }

  p {
    color: #666;
    font-size: 1.05rem;
    line-height: 1.7;
    margin-bottom: 25px;
  }

  a {
    display: inline-block;
    margin-top: 10px;
    padding: 14px 30px;
    background: linear-gradient(135deg, #3498db 0%, #2980b9 100%);
    color: white;
    border-radius: 35px;
    text-decoration: none;
    transition: all 0.4s ease;
    font-weight: 500;
    box-shadow: 0 4px 15px rgba(52, 152, 219, 0.3);

    &:hover {
      transform: translateY(-3px) scale(1.05);
      box-shadow: 0 8px 25px rgba(52, 152, 219, 0.4);
      background: linear-gradient(135deg, #2980b9 0%, #3498db 100%);
    }
  }
`;

const ContactSection = styled(Section)`
  background: linear-gradient(135deg, rgba(44, 62, 80, 0.9) 0%, rgba(52, 73, 94, 0.9) 100%);
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('https://source.unsplash.com/1920x1080/?architecture,modern,night,lights') center/cover fixed;
    opacity: 0.3;
    z-index: 1;
    animation: ${scaleUp} 15s ease-in-out infinite;
  }

  > * {
    position: relative;
    z-index: 2;
  }
`;

const ContactTitle = styled(SectionTitle)`
  color: white;
  margin-bottom: 40px;
  font-size: 3rem;
`;

const ContactText = styled.p`
  font-size: 1.25rem;
  max-width: 700px;
  margin: 0 auto 50px;
  opacity: 0.95;
  line-height: 1.8;
`;

const ContactLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
  max-width: 900px;
  margin: 0 auto;

  a {
    display: flex;
    align-items: center;
    gap: 15px;
    color: white;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(15px);
    padding: 18px 30px;
    border-radius: 40px;
    text-decoration: none;
    transition: all 0.4s ease;
    border: 1px solid rgba(255, 255, 255, 0.3);
    font-weight: 500;
    font-size: 1.1rem;

    svg {
      font-size: 1.4rem;
      animation: ${glow} 2s ease-in-out infinite alternate;
    }

    &:hover {
      background: rgba(52, 152, 219, 0.25);
      transform: translateY(-8px) scale(1.08);
      box-shadow: 0 15px 35px rgba(52, 152, 219, 0.4);
      color: #3498db;
      border-color: #3498db;
    }
  }
`;

// Main Component
const Extra = () => {
  const skills = [
    { icon: <FaBuilding />, name: 'Modern Architectural Design' },
    { icon: <FaCity />, name: 'Smart Urban Planning' },
    { icon: <FaDraftingCompass />, name: 'Advanced CAD & BIM (Revit, Rhino)' },
    { icon: <FaCode />, name: 'Parametric & Computational Design' },
    { icon: <FaLeaf />, name: 'Sustainable & Green Engineering' },
    { icon: <FaGraduationCap />, name: 'Project Management & Innovation' },
  ];

  const projects = [
    {
      title: 'Neo-Futuristic Skyscraper',
      description: 'A towering smart building with AI-integrated facades, vertical forests, and zero-carbon systems for urban living.',
      image: 'https://source.unsplash.com/800x500/?architecture,skyscraper,modern,futuristic',
      link: '#skyscraper-project',
    },
    {
      title: 'Eco-Parametric Villa',
      description: 'Curved, adaptive villa design using generative algorithms, solar skins, and biophilic materials for luxury sustainability.',
      image: 'https://source.unsplash.com/800x500/?architecture,villa,parametric,eco',
      link: '#villa-project',
    },
    {
      title: 'Dynamic Urban Bridge',
      description: 'Kinetic bridge with shape-shifting elements, LED lighting, and real-time structural monitoring for modern transit.',
      image: 'https://source.unsplash.com/800x500/?bridge,modern,engineering,dynamic',
      link: '#bridge-project',
    },
    {
      title: 'Glass Innovation Hub',
      description: 'Transparent office complex with modular glass panels, collaborative spaces, and IoT for creative industries.',
      image: 'https://source.unsplash.com/800x500/?architecture,office,glass,modern',
      link: '#hub-project',
    },
    {
      title: 'Regenerative City Plaza',
      description: 'Public space with regenerative design, interactive water features, and green tech for community vitality.',
      image: 'https://source.unsplash.com/800x500/?architecture,plaza,modern,green',
      link: '#plaza-project',
    },
    {
      title: 'Modular High-Rise Pods',
      description: 'Stackable residential pods with drone delivery integration and adaptive energy harvesting for future cities.',
      image: 'https://source.unsplash.com/800x500/?architecture,highrise,modular,futuristic',
      link: '#pods-project',
    },
  ];

  return (
    <GlobalStyles>
      <Hero>
        <div className="hero-overlay">
          <Title>Nesrien Mohammed</Title>
          <Subtitle>Architectural Engineer | Modern Urban Visionary | Sustainable Innovator</Subtitle>
          <IntroText>
            Pioneering the architecture of tomorrow: Where sleek lines meet intelligent systems, creating spaces that redefine urban living with elegance and efficiency.
          </IntroText>
        </div>
        {/* Animated Skyline SVG */}
        <SkylineWrapper>
          <Skyline viewBox="0 0 1440 120" preserveAspectRatio="none">
            <rect x="0" y="80" width="120" height="40" fill="#3498db" opacity="0.8"/>
            <rect x="130" y="60" width="90" height="60" fill="#2980b9" opacity="0.7"/>
            <rect x="230" y="90" width="60" height="30" fill="#34495e" opacity="0.8"/>
            <rect x="300" y="70" width="100" height="50" fill="#3498db" opacity="0.6"/>
            <rect x="410" y="50" width="80" height="70" fill="#2980b9" opacity="0.7"/>
            <rect x="500" y="85" width="70" height="35" fill="#34495e" opacity="0.8"/>
            <rect x="580" y="65" width="110" height="55" fill="#3498db" opacity="0.7"/>
            <rect x="700" y="90" width="60" height="30" fill="#2980b9" opacity="0.6"/>
            <rect x="770" y="60" width="90" height="60" fill="#34495e" opacity="0.8"/>
            <rect x="870" y="80" width="120" height="40" fill="#3498db" opacity="0.7"/>
            <rect x="1000" y="70" width="100" height="50" fill="#2980b9" opacity="0.6"/>
            <rect x="1110" y="50" width="80" height="70" fill="#34495e" opacity="0.8"/>
            <rect x="1200" y="85" width="70" height="35" fill="#3498db" opacity="0.7"/>
            <rect x="1280" y="65" width="110" height="55" fill="#2980b9" opacity="0.6"/>
          </Skyline>
          {/* Extra animated buildings */}
          <AnimatedBuildings>
            <Building />
            <Building />
            <Building />
            <Building />
            <Building />
          </AnimatedBuildings>
        </SkylineWrapper>
      </Hero>

      <AboutSection className="container">
        <SectionTitle>About Me</SectionTitle>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <AboutText>
              As a forward-thinking Architectural Engineer with 12+ years of experience, I specialize in modern designs that integrate cutting-edge technology like parametric modeling, AI simulations, and sustainable materials. 
              My portfolio spans from sleek skyscrapers to adaptive urban landscapes, always prioritizing innovation and environmental impact.
            </AboutText>
            <AboutText>
              I believe in architecture that evolves—blending minimalism with functionality to craft experiences that inspire and endure in a rapidly changing world.
            </AboutText>
          </div>
        </div>
      </AboutSection>

      <SkillsSection className="container">
        <SectionTitle>Modern Expertise</SectionTitle>
        <SkillsGrid>
          {skills.map((skill, idx) => (
            <Skill key={idx}>
              {skill.icon}
              <span>{skill.name}</span>
            </Skill>
          ))}
        </SkillsGrid>
      </SkillsSection>

      <ProjectsSection className="container">
        <SectionTitle>Featured Projects</SectionTitle>
        <ProjectsGrid>
          {projects.map((project, idx) => (
            <ProjectCard key={idx}>
              <img src={project.image} alt={project.title} />
              <div className="content">
                <h5>{project.title}</h5>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </div>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </ProjectsSection>

      <ContactSection className="container">
        <ContactTitle>Contact</ContactTitle>
        <ContactText>
          Let's connect! Whether you're interested in collaboration, have a project idea, or just want to chat about modern architecture, reach out below.
        </ContactText>
        <ContactLinks>
          <a href="tel:+1234567890">
            <FaPhone /> +1 (234) 567-890
          </a>
          <a href="mailto:johndoe@email.com">
            <FaEnvelope /> johndoe@email.com
          </a>
          <a href="https://www.linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">
            <FaLinkedin /> LinkedIn
          </a>
        </ContactLinks>
      </ContactSection>
    </GlobalStyles>
  );
};

export default Extra;