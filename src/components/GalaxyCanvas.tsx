import { useEffect, useRef, useState } from 'react';

interface Star {
  x: number;
  y: number;
  z: number;
  size: number;
  baseAlpha: number;
  alpha: number;
  twinkleSpeed: number;
  color: string;
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  alpha: number;
  active: boolean;
}

const STAR_COLORS = [
  '#ffffff',
  '#e2e8f0',
  '#c4b5fd', // lavender
  '#a78bfa', // violet
  '#38bdf8', // cyan
  '#f472b6', // pink
];

export default function GalaxyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const mouseRef = useRef({ x: -1000, y: -1000, targetX: 0, targetY: 0 });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    const handleChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initStars();
    };

    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.targetX = (e.clientX - width / 2) * 0.05;
      mouseRef.current.targetY = (e.clientY - height / 2) * 0.05;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Initialize stars with depth
    let stars: Star[] = [];
    const starCount = Math.min(Math.floor((width * height) / 4500), 220);

    const initStars = () => {
      stars = [];
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          z: Math.random() * 2 + 0.5,
          size: Math.random() * 1.8 + 0.6,
          baseAlpha: Math.random() * 0.7 + 0.2,
          alpha: Math.random() * 0.7 + 0.2,
          twinkleSpeed: Math.random() * 0.02 + 0.005,
          color: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)]
        });
      }
    };

    initStars();

    // Shooting stars
    const shootingStars: ShootingStar[] = [];
    let lastShootingStarTime = Date.now();

    const spawnShootingStar = () => {
      shootingStars.push({
        x: Math.random() * width * 0.8,
        y: Math.random() * height * 0.4,
        length: Math.random() * 80 + 50,
        speed: Math.random() * 10 + 12,
        angle: Math.PI / 4 + (Math.random() - 0.5) * 0.2, // ~45 deg
        alpha: 1,
        active: true
      });
    };

    let tick = 0;
    let currentOffsetX = 0;
    let currentOffsetY = 0;

    const render = () => {
      tick++;

      // Smooth mouse follow parallax
      currentOffsetX += (mouseRef.current.targetX - currentOffsetX) * 0.05;
      currentOffsetY += (mouseRef.current.targetY - currentOffsetY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Deep galactic backdrop with radial nebula glows
      // 1. Center deep indigo
      const bgGradient = ctx.createLinearGradient(0, 0, width, height);
      bgGradient.addColorStop(0, '#060312');
      bgGradient.addColorStop(0.4, '#0a061c');
      bgGradient.addColorStop(0.7, '#0f0a28');
      bgGradient.addColorStop(1, '#080517');
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, width, height);

      // 2. Cosmic Nebula glow 1 - Soft Violet/Indigo (Upper Right)
      const nebula1 = ctx.createRadialGradient(
        width * 0.8 + currentOffsetX * 1.5,
        height * 0.25 + currentOffsetY * 1.5,
        0,
        width * 0.8 + currentOffsetX * 1.5,
        height * 0.25 + currentOffsetY * 1.5,
        Math.max(width * 0.45, 300)
      );
      nebula1.addColorStop(0, 'rgba(139, 92, 246, 0.16)');
      nebula1.addColorStop(0.5, 'rgba(109, 40, 217, 0.08)');
      nebula1.addColorStop(1, 'transparent');
      ctx.fillStyle = nebula1;
      ctx.fillRect(0, 0, width, height);

      // 3. Cosmic Nebula glow 2 - Cyan/Electric Blue (Lower Left)
      const nebula2 = ctx.createRadialGradient(
        width * 0.2 - currentOffsetX,
        height * 0.7 - currentOffsetY,
        0,
        width * 0.2 - currentOffsetX,
        height * 0.7 - currentOffsetY,
        Math.max(width * 0.4, 260)
      );
      nebula2.addColorStop(0, 'rgba(56, 189, 248, 0.12)');
      nebula2.addColorStop(0.4, 'rgba(6, 182, 212, 0.05)');
      nebula2.addColorStop(1, 'transparent');
      ctx.fillStyle = nebula2;
      ctx.fillRect(0, 0, width, height);

      // 4. Cosmic Nebula glow 3 - Magenta/Pink accent (Center subtle)
      const nebula3 = ctx.createRadialGradient(
        width * 0.5 + currentOffsetX * 0.5,
        height * 0.5 + currentOffsetY * 0.5,
        0,
        width * 0.5 + currentOffsetX * 0.5,
        height * 0.5 + currentOffsetY * 0.5,
        Math.max(width * 0.35, 200)
      );
      nebula3.addColorStop(0, 'rgba(236, 72, 153, 0.07)');
      nebula3.addColorStop(0.6, 'rgba(217, 70, 239, 0.02)');
      nebula3.addColorStop(1, 'transparent');
      ctx.fillStyle = nebula3;
      ctx.fillRect(0, 0, width, height);

      // Draw and update stars
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        if (!reducedMotion) {
          // Slow floating drift
          star.y -= 0.15 * star.z;
          if (star.y < 0) {
            star.y = height;
            star.x = Math.random() * width;
          }
          // Twinkle pulse
          star.alpha = star.baseAlpha + Math.sin(tick * star.twinkleSpeed + i) * 0.25;
          star.alpha = Math.max(0.1, Math.min(1, star.alpha));
        }

        const renderX = star.x + currentOffsetX * star.z;
        const renderY = star.y + currentOffsetY * star.z;

        // Star core
        ctx.beginPath();
        ctx.arc(renderX, renderY, star.size, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.globalAlpha = star.alpha;
        ctx.fill();

        // Soft halo on larger stars
        if (star.size > 1.4) {
          ctx.beginPath();
          ctx.arc(renderX, renderY, star.size * 2.2, 0, Math.PI * 2);
          ctx.fillStyle = star.color;
          ctx.globalAlpha = star.alpha * 0.25;
          ctx.fill();
        }
      }

      // Constellation lines: connect nearby stars near mouse cursor
      const mouseX = mouseRef.current.x;
      const mouseY = mouseRef.current.y;
      if (mouseX > 0 && mouseY > 0 && !reducedMotion) {
        for (let i = 0; i < stars.length; i++) {
          const s1 = stars[i];
          const x1 = s1.x + currentOffsetX * s1.z;
          const y1 = s1.y + currentOffsetY * s1.z;
          const distToMouse = Math.hypot(x1 - mouseX, y1 - mouseY);

          if (distToMouse < 140) {
            // Draw line to mouse
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(mouseX, mouseY);
            ctx.strokeStyle = '#c4b5fd';
            ctx.globalAlpha = (1 - distToMouse / 140) * 0.35;
            ctx.lineWidth = 0.8;
            ctx.stroke();

            // Connect nearby sibling star
            for (let j = i + 1; j < stars.length; j++) {
              const s2 = stars[j];
              const x2 = s2.x + currentOffsetX * s2.z;
              const y2 = s2.y + currentOffsetY * s2.z;
              const distBetween = Math.hypot(x1 - x2, y1 - y2);

              if (distBetween < 90) {
                ctx.beginPath();
                ctx.moveTo(x1, y1);
                ctx.lineTo(x2, y2);
                ctx.strokeStyle = '#38bdf8';
                ctx.globalAlpha = (1 - distBetween / 90) * 0.2;
                ctx.lineWidth = 0.6;
                ctx.stroke();
              }
            }
          }
        }
      }

      // Shooting stars logic
      const now = Date.now();
      if (!reducedMotion && now - lastShootingStarTime > 5000 && Math.random() < 0.04) {
        spawnShootingStar();
        lastShootingStarTime = now;
      }

      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const ss = shootingStars[i];
        if (!ss.active) continue;

        ss.x += Math.cos(ss.angle) * ss.speed;
        ss.y += Math.sin(ss.angle) * ss.speed;
        ss.alpha -= 0.015;

        if (ss.alpha <= 0 || ss.x > width || ss.y > height) {
          shootingStars.splice(i, 1);
          continue;
        }

        const tailX = ss.x - Math.cos(ss.angle) * ss.length;
        const tailY = ss.y - Math.sin(ss.angle) * ss.length;

        const ssGradient = ctx.createLinearGradient(ss.x, ss.y, tailX, tailY);
        ssGradient.addColorStop(0, '#ffffff');
        ssGradient.addColorStop(0.4, '#c084fc');
        ssGradient.addColorStop(1, 'transparent');

        ctx.beginPath();
        ctx.moveTo(ss.x, ss.y);
        ctx.lineTo(tailX, tailY);
        ctx.strokeStyle = ssGradient;
        ctx.globalAlpha = ss.alpha;
        ctx.lineWidth = 1.6;
        ctx.stroke();
      }

      ctx.globalAlpha = 1;
      animationId = requestAnimationFrame(render);
    };

    animationId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [reducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
