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

    // 🟢 لوحة ألوان النيون والأخضر السيبراني
    const getNeonColor = (opacity = 1) => {
      const palette = [
        "rgba(125, 211, 252",
        "rgba(56, 189, 248",
        "rgba(96, 165, 250",
        "rgba(14, 165, 233",
        "rgba(255, 255, 255",
      ];
      const selectedColor = palette[Math.floor(Math.random() * palette.length)];
      return `${selectedColor}, ${opacity})`;
    };

    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const centerX = canvas.width * 0.5;
      const centerY = canvas.height * 0.5;

      // 1. 🌌 توزيع النجوم بكل الأحجام على كامل الصفحة بشكل متوازن
      const starCount = prefersReducedMotion ? 120 : 320;
      stars = Array.from({ length: starCount }, () => {
        const decider = Math.random();
        
        // توزيع خطي (Linear) يضمن انتشار النجوم في كل زوايا الشاشة بدون تكدس بالمنتصف
        const maxRadius = Math.max(canvas.width, canvas.height) * 0.75;
        const distance = Math.random() * maxRadius + 10; 
        const initialAngle = Math.random() * Math.PI * 2;
        
        let radius, color, isSparkleShape = false;

        if (decider < 0.45) {
          // نجوم صغيرة جداً وخلفية (غبار نجمي)
          radius = Math.random() * 1.2 + 0.6;
          color = getNeonColor(0.4);
        } else if (decider < 0.85) {
          // نجوم متوسطة وكبيرة واضحة الحجم وموزعة بكل مكان
          radius = Math.random() * 2.5 + 1.4;
          color = getNeonColor(0.75);
          isSparkleShape = Math.random() > 0.4; // تحويل بعضها لشكل براق ✨
        } else {
          // نجوم عملاقة وبراقة جداً بارزة في الواجهة
          radius = Math.random() * 4.2 + 2.5;
          color = "rgba(255, 255, 255, 0.95)";
          isSparkleShape = true;
        }

        return {
          distance,
          angle: initialAngle,
          // حركة دائرية مستمرة (النجوم البعيدة تتحرك أبطأ بشكل واقعي)
          orbitSpeed: (0.0002 + Math.random() * 0.0005) * (300 / (distance + 100)),
          r: radius,
          color,
          isSparkleShape,
          twinkleSpeed: Math.random() * 0.02 + 0.008,
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

      // --- ثالثاً: رسم النجوم الدوارة والمنتشرة في كامل الصفحة ---
      stars.forEach((s) => {
        s.angle += s.orbitSpeed; // دوران مستمر بدون توقف

        let rx = centerX + Math.cos(s.angle) * s.distance + (mouse.x * s.r * 3);
        let ry = centerY + Math.sin(s.angle) * s.distance + (mouse.y * s.r * 3);

        const twinkle = Math.sin(time * s.twinkleSpeed + s.phase) * 0.25 + 0.75;
        const alpha = Math.max(0.15, twinkle);

        if (s.isSparkleShape) {
          drawSparkleStar(ctx, rx, ry, 4, s.r * 2.0 * twinkle, s.r * 0.35, `${s.color}, ${alpha})`);
        } else {
          ctx.beginPath();
          ctx.arc(rx, ry, s.r * twinkle, 0, Math.PI * 2);
          ctx.fillStyle = `${s.color}, ${alpha})`;
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