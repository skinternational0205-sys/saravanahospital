"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const PINK_COLORS = [
  "rgba(230, 11, 131, 0.8)",
  "rgba(230, 11, 131, 0.4)",
  "rgba(255, 100, 180, 0.6)",
];

/** Density used to derive the particle count from the canvas area. */
const AREA_PER_PARTICLE = 9000;
/** Upper bound so large screens never spawn an unbounded particle set. */
const MAX_PARTICLES = 140;
const MOUSE_RADIUS = 100;

export default function ParticleEKG() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context2d = canvas.getContext("2d");
    if (!context2d) return;

    // Bind to a non-nullable alias so the closure-scoped Particle class
    // does not have to re-check for null on every draw call.
    const ctx: CanvasRenderingContext2D = context2d;

    // Respect users who prefer reduced motion: render a single static frame.
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    let running = true;

    const mouse = { x: -1000, y: -1000 };
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const setDimensions = () => {
      const parent = canvas.parentElement;
      if (!parent) return;

      const rect = parent.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;

      width = rect.width;
      height = rect.height;

      // Scale the backing store for crisp rendering on HiDPI displays while
      // keeping all drawing code in CSS pixel units.
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      offset: number;
      color: string;

      constructor() {
        this.x = Math.random() * width;
        this.y = height / 2;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 1 + 0.5;
        this.offset = Math.random() * 100;
        this.color = PINK_COLORS[Math.floor(Math.random() * PINK_COLORS.length)];
      }

      update(time: number) {
        this.x -= this.speedX;

        if (this.x < 0) {
          this.x = width;
        }

        // Map x to a normalized wave position (0 to 1)
        const wavePos = (this.x / width) * 10;

        // Complex sine wave to simulate EKG-like bumps
        let ekgOffset = Math.sin(wavePos) * 20;

        // Add a sharp spike in the middle
        if (this.x > width * 0.4 && this.x < width * 0.6) {
          const spikePos = (this.x - width * 0.4) / (width * 0.2);
          ekgOffset += Math.sin(spikePos * Math.PI * 3) * 80;
        }

        this.y = height / 2 + ekgOffset + Math.sin(time * 0.002 + this.offset) * 10;

        // Mouse interaction (repel), guarded against divide-by-zero.
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance > 0 && distance < MOUSE_RADIUS) {
          const force = (MOUSE_RADIUS - distance) / MOUSE_RADIUS;
          this.y -= (dy / distance) * force * 50;
        }
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.font = `${this.size * 4}px Arial`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("♥", this.x, this.y);
      }
    }

    const init = () => {
      const count = Math.min(
        Math.round((width * height) / AREA_PER_PARTICLE),
        MAX_PARTICLES,
      );
      particles = Array.from({ length: count }, () => new Particle());
    };

    const drawFrame = (time = 0) => {
      ctx.clearRect(0, 0, width, height);

      // Draw a subtle connecting line behind particles for the EKG
      ctx.beginPath();
      ctx.moveTo(0, height / 2);
      ctx.lineTo(width, height / 2);
      ctx.strokeStyle = "rgba(230, 11, 131, 0.05)";
      ctx.lineWidth = 1;
      ctx.stroke();

      for (const particle of particles) {
        particle.update(time);
        particle.draw();
      }
    };

    const animate = (time: number) => {
      if (!running) return;
      drawFrame(time);
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      setDimensions();
      init();
      if (prefersReducedMotion) drawFrame();
    };

    const handleVisibilityChange = () => {
      if (prefersReducedMotion) return;

      if (document.hidden) {
        running = false;
        cancelAnimationFrame(animationFrameId);
      } else if (!running) {
        running = true;
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    setDimensions();
    init();

    if (prefersReducedMotion) {
      drawFrame();
    } else {
      animationFrameId = requestAnimationFrame(animate);
    }

    window.addEventListener("resize", handleResize);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      running = false;
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="relative w-full max-w-lg aspect-square mx-auto flex items-center justify-center">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-brand-pink/5 blur-[100px] rounded-full pointer-events-none" />

      {/* The Canvas */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="w-full h-full z-10 cursor-crosshair rounded-3xl"
      />

      {/* Floating UI Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute top-1/4 -right-4 bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-4 border border-brand-pink/20 z-20 pointer-events-none"
      >
        <p className="text-3xl font-bold text-gray-900 tracking-tighter">50k+</p>
        <p className="text-xs font-semibold text-brand-pink uppercase tracking-widest">Lives Saved</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="absolute bottom-1/4 -left-4 bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-4 border border-brand-pink/20 z-20 pointer-events-none"
      >
        <p className="text-3xl font-bold text-gray-900 tracking-tighter">100+</p>
        <p className="text-xs font-semibold text-brand-pink uppercase tracking-widest">Specialists</p>
      </motion.div>
    </div>
  );
}