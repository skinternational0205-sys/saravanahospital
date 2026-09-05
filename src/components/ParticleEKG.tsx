"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function ParticleEKG() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    
    // Set canvas dimensions
    const setDimensions = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
    };
    
    setDimensions();
    window.addEventListener("resize", setDimensions);

    // Mouse interaction
    let mouse = { x: -1000, y: -1000, radius: 100 };
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    
    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    class Particle {
      x: number;
      y: number;
      baseY: number;
      size: number;
      speedX: number;
      offset: number;
      color: string;

      constructor(x: number) {
        this.x = x;
        this.baseY = canvas!.height / 2;
        this.y = this.baseY;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 1 + 0.5;
        this.offset = Math.random() * 100;
        
        // Brand pink and slight variations
        const colors = ['rgba(230, 11, 131, 0.8)', 'rgba(230, 11, 131, 0.4)', 'rgba(255, 100, 180, 0.6)'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update(time: number) {
        // Move horizontally
        this.x -= this.speedX;
        
        // Loop around
        if (this.x < 0) {
          this.x = canvas!.width;
        }

        // Calculate EKG wave shape based on x position
        // Map x to a normalized wave position (0 to 1)
        const wavePos = (this.x / canvas!.width) * 10; 
        
        // Complex sine wave to simulate EKG-like bumps
        let ekgOffset = Math.sin(wavePos) * 20; 
        
        // Add a sharp spike in the middle
        if (this.x > canvas!.width * 0.4 && this.x < canvas!.width * 0.6) {
          const spikePos = (this.x - canvas!.width * 0.4) / (canvas!.width * 0.2);
          ekgOffset += Math.sin(spikePos * Math.PI * 3) * 80;
        }

        this.baseY = (canvas!.height / 2) + ekgOffset + Math.sin(time * 0.002 + this.offset) * 10;
        this.y = this.baseY;

        // Mouse interaction (repel)
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < mouse.radius) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const force = (mouse.radius - distance) / mouse.radius;
          
          this.y -= forceDirectionY * force * 50;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.font = `${this.size * 4}px Arial`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("♥", this.x, this.y);
      }
    }

    // Initialize particles
    const init = () => {
      particles = [];
      const numberOfParticles = (canvas.width * canvas.height) / 3000;
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle(Math.random() * canvas.width));
      }
    };

    init();

    // Animation Loop
    const animate = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw a subtle connecting line behind particles for the EKG
      ctx.beginPath();
      ctx.moveTo(0, canvas.height / 2);
      ctx.lineTo(canvas.width, canvas.height / 2);
      ctx.strokeStyle = "rgba(230, 11, 131, 0.05)";
      ctx.lineWidth = 1;
      ctx.stroke();

      for (let i = 0; i < particles.length; i++) {
        particles[i].update(time);
        particles[i].draw();
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };

    animate(0);

    return () => {
      window.removeEventListener("resize", setDimensions);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full max-w-lg aspect-square mx-auto flex items-center justify-center">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-brand-pink/5 blur-[100px] rounded-full pointer-events-none" />
      
      {/* The Canvas */}
      <canvas 
        ref={canvasRef} 
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
