import { useEffect, useRef, type FC } from "react";
import { useReducedMotion } from "motion/react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

interface HeroBackgroundProps {
  className?: string;
  particleCount?: number;
}

const HeroBackground: FC<HeroBackgroundProps> = ({
  className = "",
  particleCount = 36,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const abortController = new AbortController();
    const { signal } = abortController;

    let animationFrame = 0;
    let particles: Particle[] = [];
    let width = 0;
    let height = 0;
    let dpr = 1;

    const createParticles = () => {
      particles = Array.from({ length: particleCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.25,
        speedY: (Math.random() - 0.5) * 0.25,
        opacity: Math.random() * 0.35 + 0.08,
      }));
    };

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;

      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = parent.clientWidth;
      height = parent.clientHeight;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (particles.length === 0) {
        createParticles();
      }
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);

      const isDark = document.documentElement.dataset.theme === "dark";
      const particleColor = isDark ? "147, 197, 253" : "37, 99, 235";

      for (const particle of particles) {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0) particle.x = width;
        if (particle.x > width) particle.x = 0;
        if (particle.y < 0) particle.y = height;
        if (particle.y > height) particle.y = 0;

        context.beginPath();
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        context.fillStyle = `rgba(${particleColor}, ${particle.opacity})`;
        context.fill();
      }

      animationFrame = window.requestAnimationFrame(draw);
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas.parentElement ?? canvas);
    resize();
    draw();

    window.addEventListener("resize", resize, { passive: true, signal });

    return () => {
      abortController.abort();
      resizeObserver.disconnect();
      window.cancelAnimationFrame(animationFrame);
    };
  }, [particleCount, reduceMotion]);

  return (
    <div className={`hero-background ${className}`.trim()} aria-hidden="true">
      <div className="hero-background__mesh" />
      <div className="hero-background__grid" />
      {!reduceMotion && (
        <canvas ref={canvasRef} className="hero-background__canvas" />
      )}
      <div className="hero-background__glow hero-background__glow--primary" />
      <div className="hero-background__glow hero-background__glow--accent" />
    </div>
  );
};

export default HeroBackground;
