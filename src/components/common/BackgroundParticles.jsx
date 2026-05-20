import { useEffect, useRef } from "react";

export default function BackgroundParticles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const ctx = canvas.getContext("2d");
    if (!ctx) return undefined;

    let animationId;
    let particles = [];
    let mouseX = 0;
    let mouseY = 0;
    let mouseDistance = Infinity;
    const MOUSE_INTERACTION_RADIUS = 150;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const maxParticles = prefersReducedMotion ? 30 : 80;

    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = Array.from({ length: maxParticles }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        baseX: 0, // For drift animation
        baseY: 0,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 2.2 + 0.4,
        baseR: 0,
        opacity: Math.random() * 0.6 + 0.7,
        pulseSpeed: Math.random() * 0.02 + 0.005,
        pulseAmount: Math.random() * 0.6 + 0.3,
      }));

      particles.forEach((p) => {
        p.baseX = p.x;
        p.baseY = p.y;
        p.baseR = p.r;
      });
    };

    const draw = () => {
      // Clear with slight trail effect instead of full clear
      ctx.fillStyle = "rgba(0, 0, 0, 0.02)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update particles
      for (let i = 0; i < particles.length; i += 1) {
        const p = particles[i];
        
        // Base movement
        p.x += p.vx;
        p.y += p.vy;

        // Smooth wrapping
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;
        if (p.y < -10) p.y = canvas.height + 10;
        if (p.y > canvas.height + 10) p.y = -10;

        // Mouse interaction - particles repel from cursor
        const dx = p.x - mouseX;
        const dy = p.y - mouseY;
        const distToMouse = Math.sqrt(dx * dx + dy * dy);
        
        if (distToMouse < MOUSE_INTERACTION_RADIUS && distToMouse > 0) {
          const angle = Math.atan2(dy, dx);
          const force = (1 - distToMouse / MOUSE_INTERACTION_RADIUS) * 0.8;
          p.vx += Math.cos(angle) * force;
          p.vy += Math.sin(angle) * force;
          
          // Slow down velocity to prevent excessive speeds
          const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
          if (speed > 1.5) {
            p.vx = (p.vx / speed) * 1.5;
            p.vy = (p.vy / speed) * 1.5;
          }
        } else {
          // Gentle gravity towards base position
          p.vx += (0 - p.vx) * 0.01;
          p.vy += (0 - p.vy) * 0.01;
        }

        // Pulse animation
     //   const pulse = Math.sin(Date.now() * p.pulseSpeed * 0.001) * p.pulseAmount + p.baseR;
     const pulse = Math.max(
      0.15,
      Math.sin(Date.now() * p.pulseSpeed * 0.001) *
        p.pulseAmount +
        p.baseR
    );
        // Draw particle with glow
     //   const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, pulse * 3);
     const glowRadius = Math.max(0.3, pulse * 3);

const gradient = ctx.createRadialGradient(
  p.x,
  p.y,
  0,
  p.x,
  p.y,
  glowRadius
);
        gradient.addColorStop(0, `rgba(0, 255, 127, ${p.opacity * 0.6})`);
        gradient.addColorStop(0.5, `rgba(0, 255, 127, ${p.opacity * 0.2})`);
        gradient.addColorStop(1, "rgba(0, 255, 127, 0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
       // ctx.arc(p.x, p.y, pulse * 3, 0, Math.PI * 2);
       ctx.arc(p.x, p.y, glowRadius, 0, Math.PI * 2);
        ctx.fill();

        // Core particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, pulse, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 255, 127, ${p.opacity * 0.8})`;
        ctx.fill();

        // Connection lines with improved visibility
        for (let j = i + 1; j < particles.length; j += 1) {
          const q = particles[j];
          const dx2 = p.x - q.x;
          const dy2 = p.y - q.y;
          const distance = Math.sqrt(dx2 * dx2 + dy2 * dy2);

          if (distance < 140) {
            const lineOpacity = Math.max(0, (1 - distance / 140) * 0.25);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(0, 255, 127, ${lineOpacity})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      mouseDistance = 0;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
      mouseDistance = Infinity;
    };

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        mouseX = e.touches[0].clientX;
        mouseY = e.touches[0].clientY;
      }
    };

    const handleTouchEnd = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    setSize();
    draw();

    window.addEventListener("resize", setSize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("resize", setSize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
        background: "radial-gradient(circle at top, #0f1820 0%, #060606 45%, #000000 100%)",
      }}
      aria-hidden="true"
    />
  );
}