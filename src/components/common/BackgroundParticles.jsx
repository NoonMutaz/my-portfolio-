import { useEffect, useRef } from "react";

export default function UltimateCyberSpaceBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId;
    let stars = [];
    let nebulae = [];
    let fireRocks = [];
    let shootingStars = []; // نظام الشهب الجديد
    let mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // درجات ألوان أقرب للفضاء الحقيقي (أبيض + أزرق بارد + دافئ خفيف)
    const getStarColor = (opacity = 1) => {
      const palette = [
        [255, 255, 255],
        [236, 244, 255],
        [209, 227, 255],
        [186, 212, 255],
        [255, 233, 201],
      ];
      const [r, g, b] = palette[Math.floor(Math.random() * palette.length)];
      return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    };

    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const centerX = canvas.width * 0.5;
      const centerY = canvas.height * 0.5;

      // 1. 🌌 توزيع نجوم أكثف وأقرب لسماء الفضاء الحقيقية
      const starCount = prefersReducedMotion ? 260 : 1100;
      stars = Array.from({ length: starCount }, () => {
        const layerPick = Math.random();
        let radius;
        let baseAlpha;
        let depth;
        let glow;
        let twinkleSpeed;
        let sparkleChance;

        if (layerPick < 0.8) {
          radius = Math.random() * 0.85 + 0.2; // نجوم بعيدة خافتة
          baseAlpha = 0.25 + Math.random() * 0.36;
          depth = 0.1 + Math.random() * 0.22;
          glow = radius * (0.45 + Math.random() * 0.45);
          twinkleSpeed = Math.random() * 0.007 + 0.002;
          sparkleChance = 0.03;
        } else if (layerPick < 0.96) {
          radius = Math.random() * 1.4 + 0.9;
          baseAlpha = 0.5 + Math.random() * 0.3;
          depth = 0.35 + Math.random() * 0.34;
          glow = radius * (0.9 + Math.random() * 1.0);
          twinkleSpeed = Math.random() * 0.01 + 0.0035;
          sparkleChance = 0.14;
        } else {
          radius = Math.random() * 2.1 + 2.1; // نجوم قريبة وساطعة جداً
          baseAlpha = 0.7 + Math.random() * 0.24;
          depth = 0.72 + Math.random() * 0.28;
          glow = radius * (1.7 + Math.random() * 1.6);
          twinkleSpeed = Math.random() * 0.014 + 0.005;
          sparkleChance = 0.58;
        }

        return {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          driftX: (Math.random() - 0.5) * 0.02,
          driftY: (Math.random() - 0.5) * 0.02,
          r: radius,
          color: getStarColor(baseAlpha),
          baseAlpha,
          depth,
          glow,
          isSparkleShape: Math.random() < sparkleChance,
          twinkleSpeed,
          phase: Math.random() * Math.PI * 2,
        };
      });

      // 2. سحب السديم (Nebula Clouds) لتعطي عمقاً أخضر نيون خلف النجوم
      const nebulaColors = [
        "rgba(56, 189, 248",
        "rgba(96, 165, 250",
        "rgba(14, 40, 90",
      ];
      nebulae = Array.from({ length: 4 }, (_, i) => ({
        x: centerX + (Math.random() - 0.5) * 200,
        y: centerY + (Math.random() - 0.5) * 200,
        radius: Math.random() * (canvas.width * 0.3) + canvas.width * 0.25,
        color: nebulaColors[i % nebulaColors.length],
        maxOpacity: 0.07,
        angle: Math.random() * Math.PI * 2,
        orbitSpeed: 0.00005,
        distance: Math.random() * 120,
      }));

      // 3. الصخور البركانية السيبرانية بأسفل الصفحة
      const rockCount = 3;
      const segmentWidth = canvas.width / (rockCount - 1 || 1);
      fireRocks = Array.from({ length: rockCount }, (_, i) => {
        const baseSize = Math.random() * 40 + 75;
        return {
          x: i * segmentWidth + (Math.random() - 0.5) * 60,
          y: canvas.height + 15,
          rX: baseSize * 1.4,
          rY: baseSize * 0.85,
          phase: Math.random() * Math.PI * 2,
          pulseSpeed: Math.random() * 0.002 + 0.001,
        };
      });
    };

    // ✨ دالة رسم النجمة ذات الـ 4 زوايا الحادة (✨)
    const drawSparkleStar = (ctx, cx, cy, spikes, outerRadius, innerRadius, color) => {
      let rot = (Math.PI / 2) * 3;
      let x = cx;
      let y = cy;
      const step = Math.PI / spikes;

      ctx.beginPath();
      ctx.moveTo(cx, cy - outerRadius);
      for (let i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        ctx.lineTo(x, y);
        rot += step;

        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        ctx.lineTo(x, y);
        rot += step;
      }
      ctx.lineTo(cx, cy - outerRadius);
      ctx.closePath();
      ctx.fillStyle = color;
      ctx.fill();
    };

    // دالة لتوليد شهاب جديد بشكل عشوائي ومستمر
    const createShootingStar = () => {
      if (prefersReducedMotion) return;
      // نقطة انطلاق عشوائية من الأعلى أو اليسار
      const startAtTop = Math.random() > 0.5;
      shootingStars.push({
        x: startAtTop ? Math.random() * canvas.width : -50,
        y: startAtTop ? -50 : Math.random() * (canvas.height * 0.5),
        length: Math.random() * 80 + 60, // طول خط الشهاب
        speed: Math.random() * 12 + 8,   // سرعة المرور الخاطف
        dx: Math.random() * 4 + 6,       // اتجاه الحركة لليمين
        dy: Math.random() * 3 + 4,       // اتجاه الحركة للأسفل
        opacity: Math.random() * 0.5 + 0.5,
        color: Math.random() > 0.5 ? "rgba(56, 189, 248" : "rgba(125, 211, 252",
      });
    };

    const drawMoonCrater = (ctx, mx, my, cx, cy, cr) => {
      ctx.beginPath();
      ctx.arc(mx + cx, my + cy, cr, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(10, 22, 16, 0.5)";
      ctx.fill();
    };

    const draw = () => {
      // تفاعل الكاميرا المريح مع حركة الماوس
      mouse.x += (mouse.targetX - mouse.x) * 0.03;
      mouse.y += (mouse.targetY - mouse.y) * 0.03;

      // خلفية الفضاء السوداء المطلقة
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const time = Date.now();
      const centerX = canvas.width * 0.5;
      const centerY = canvas.height * 0.5;

      // --- أولاً: رسم سحب السديم الغازية خلف النجوم ---
      ctx.globalCompositeOperation = "screen";
      nebulae.forEach((n) => {
        n.angle += n.orbitSpeed;
        const curX = centerX + Math.cos(n.angle) * n.distance + (mouse.x * 12);
        const curY = centerY + Math.sin(n.angle) * n.distance + (mouse.y * 12);

        const grad = ctx.createRadialGradient(curX, curY, 0, curX, curY, n.radius);
        grad.addColorStop(0, `${n.color}, ${n.maxOpacity})`);
        grad.addColorStop(0.5, `${n.color}, ${n.maxOpacity * 0.3})`);
        grad.addColorStop(1, "rgba(0,0,0,0)");
        
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(curX, curY, n.radius, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalCompositeOperation = "source-over";

      // --- ثانياً: نظام الشهب (الخطوط المارة الخاطفة) ---
      if (Math.random() < 0.015 && shootingStars.length < 4) {
        createShootingStar(); // توليد شهاب جديد بنسبة معينة في كل إطار
      }

      shootingStars.forEach((ss, index) => {
        ss.x += ss.dx;
        ss.y += ss.dy;

        // رسم خط الشهاب المتدرج الذيل
        const headX = ss.x + ss.dx * (ss.length / 10);
        const headY = ss.y + ss.dy * (ss.length / 10);
        
        const meteorGrad = ctx.createLinearGradient(ss.x, ss.y, headX, headY);
        meteorGrad.addColorStop(0, `${ss.color}, 0)`); // الذيل يختفي في الظلام
        meteorGrad.addColorStop(1, `${ss.color}, ${ss.opacity})`); // رأس الشهاب مضيء

        ctx.strokeStyle = meteorGrad;
        ctx.lineWidth = 1.8;
        ctx.beginPath();
        ctx.moveTo(ss.x, ss.y);
        ctx.lineTo(headX, headY);
        ctx.stroke();

        // إخراج الشهاب من المصفوفة إذا خرج تماماً عن حدود الشاشة
        if (ss.x > canvas.width + ss.length || ss.y > canvas.height + ss.length) {
          shootingStars.splice(index, 1);
        }
      });

      // --- ثالثاً: رسم النجوم بطبقات عمق ولمعان طبيعي ---
      stars.forEach((s) => {
        s.x += s.driftX;
        s.y += s.driftY;
        if (s.x < -4) s.x = canvas.width + 4;
        if (s.x > canvas.width + 4) s.x = -4;
        if (s.y < -4) s.y = canvas.height + 4;
        if (s.y > canvas.height + 4) s.y = -4;

        const rx = s.x + mouse.x * (8 + s.depth * 22);
        const ry = s.y + mouse.y * (8 + s.depth * 22);
        const twinkle = Math.sin(time * s.twinkleSpeed + s.phase) * 0.23 + 0.8;
        const alpha = Math.max(0.12, Math.min(1, s.baseAlpha * twinkle));
        const glowAlpha = alpha * 0.34;

        if (s.isSparkleShape) {
          const sparkleOuter = s.r * (2.1 + s.depth * 0.5) * twinkle;
          drawSparkleStar(
            ctx,
            rx,
            ry,
            4,
            sparkleOuter,
            s.r * 0.3,
            `rgba(236, 244, 255, ${Math.min(1, alpha + 0.08)})`
          );

          // هالة ناعمة حول نجوم ✨ لتشبه التوهج الضوئي الواقعي
          const sparkleGlow = ctx.createRadialGradient(rx, ry, 0, rx, ry, sparkleOuter * 2);
          sparkleGlow.addColorStop(0, `rgba(186, 212, 255, ${alpha * 0.32})`);
          sparkleGlow.addColorStop(1, "rgba(0, 0, 0, 0)");
          ctx.fillStyle = sparkleGlow;
          ctx.beginPath();
          ctx.arc(rx, ry, sparkleOuter * 2, 0, Math.PI * 2);
          ctx.fill();
        } else {
          const glowGradient = ctx.createRadialGradient(rx, ry, 0, rx, ry, s.glow);
          glowGradient.addColorStop(0, `rgba(186, 212, 255, ${glowAlpha})`);
          glowGradient.addColorStop(1, "rgba(0, 0, 0, 0)");
          ctx.fillStyle = glowGradient;
          ctx.beginPath();
          ctx.arc(rx, ry, s.glow, 0, Math.PI * 2);
          ctx.fill();

          ctx.beginPath();
          ctx.arc(rx, ry, s.r * twinkle, 0, Math.PI * 2);
          ctx.fillStyle = s.color.replace(/[\d.]+\)$/, `${alpha})`);
          ctx.fill();
        }
      });

      // --- رابعاً: القمر السيبراني المتوهج بالأخضر النيون ---
      const moonX = canvas.width * 0.76 + (mouse.x * 6);
      const moonY = canvas.height * 0.22 + (mouse.y * 6);
      const moonRadius = Math.min(canvas.width, canvas.height) * 0.11 + 35;

      ctx.save();
      ctx.beginPath();
      ctx.arc(moonX, moonY, moonRadius, 0, Math.PI * 2);
      ctx.clip();

      ctx.fillStyle = "#121815"; 
      ctx.fillRect(moonX - moonRadius, moonY - moonRadius, moonRadius * 2, moonRadius * 2);

      drawMoonCrater(ctx, moonX, moonY, -moonRadius * 0.3, -moonRadius * 0.2, moonRadius * 0.2);
      drawMoonCrater(ctx, moonX, moonY, moonRadius * 0.2, moonRadius * 0.3, moonRadius * 0.16);
      drawMoonCrater(ctx, moonX, moonY, -moonRadius * 0.1, moonRadius * 0.4, moonRadius * 0.12);

      const moonShadow = ctx.createRadialGradient(
        moonX - moonRadius * 0.4, moonY - moonRadius * 0.4, moonRadius * 0.5,
        moonX, moonY, moonRadius * 1.1
      );
      moonShadow.addColorStop(0, "rgba(56, 189, 248, 0.22)");
      moonShadow.addColorStop(0.5, "rgba(8, 20, 48, 0.4)");
      moonShadow.addColorStop(0.85, "rgba(0, 0, 0, 0.95)");
      moonShadow.addColorStop(1, "rgba(0, 0, 0, 1)");

      ctx.fillStyle = moonShadow;
      ctx.fillRect(moonX - moonRadius, moonY - moonRadius, moonRadius * 2, moonRadius * 2);
      ctx.restore();

      // --- خامساً: الصخور النارية البركانية بأسفل الواجهة ---
      fireRocks.forEach((rock) => {
        const currentRockX = rock.x + (mouse.x * 35);
        const lavaPulse = Math.sin(time * rock.pulseSpeed + rock.phase) * 0.2 + 0.6;

        ctx.fillStyle = "#0c100e";
        ctx.beginPath();
        ctx.ellipse(currentRockX, rock.y, rock.rX, rock.rY, 0, 0, Math.PI * 2);
        ctx.fill();

        ctx.save();
        ctx.beginPath();
        ctx.ellipse(currentRockX, rock.y, rock.rX * 0.9, rock.rY * 0.85, 0, 0, Math.PI * 2);
        ctx.clip();

        ctx.strokeStyle = `rgba(125, 211, 252, ${lavaPulse * 0.9})`;
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(currentRockX - rock.rX, rock.y);
        ctx.bezierCurveTo(currentRockX - 40, rock.y + 25, currentRockX + 40, rock.y - 20, currentRockX + rock.rX, rock.y + 10);
        ctx.stroke();

        ctx.strokeStyle = `rgba(56, 189, 248, ${lavaPulse * 0.6})`;
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.moveTo(currentRockX - rock.rX * 0.4, rock.y + 20);
        ctx.lineTo(currentRockX + rock.rX * 0.5, rock.y - 10);
        ctx.stroke();

        ctx.restore();
      });

      animationId = requestAnimationFrame(draw);
    };

    const handleMouseMove = (e) => {
      mouse.targetX = (e.clientX / window.innerWidth) - 0.5;
      mouse.targetY = (e.clientY / window.innerHeight) - 0.5;
    };

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        mouse.targetX = (e.touches[0].clientX / window.innerWidth) - 0.5;
        mouse.targetY = (e.touches[0].clientY / window.innerHeight) - 0.5;
      }
    };

    setSize();
    draw();

    window.addEventListener("resize", setSize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener("resize", setSize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
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
        background: "#000000",
      }}
      aria-hidden="true"
    />
  );
}