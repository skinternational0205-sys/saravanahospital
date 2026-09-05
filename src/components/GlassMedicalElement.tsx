"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function GlassMedicalElement() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Motion values for smooth 3D tilt tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring physics for smooth return and tracking
  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      
      // Calculate mouse position relative to center of container (normalized -0.5 to 0.5)
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
      
      mouseX.set(x);
      mouseY.set(y);
    };

    const handleMouseLeave = () => {
      mouseX.set(0);
      mouseY.set(0);
    };

    const element = containerRef.current;
    if (element) {
      window.addEventListener("mousemove", handleMouseMove);
      element.addEventListener("mouseleave", handleMouseLeave);
    }
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (element) element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, mouseY]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-square max-w-md mx-auto flex items-center justify-center perspective-[1000px]"
    >
      {/* Background glowing pulse */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-64 h-64 bg-brand-pink/30 rounded-full blur-[60px]"
        />
      </div>

      {/* 3D Glass Cross Container */}
      <motion.div 
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative w-64 h-64 flex items-center justify-center z-10"
      >
        {/* Floating Ring 1 */}
        <motion.div 
          style={{ translateZ: 50 }}
          className="absolute w-72 h-72 rounded-full border border-pink-200/50 backdrop-blur-sm"
        />
        
        {/* Floating Ring 2 */}
        <motion.div 
          style={{ translateZ: -30 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute w-80 h-80 rounded-full border-t border-b border-brand-pink/30"
        />

        {/* The Glass Cross */}
        <motion.div 
          style={{ translateZ: 80 }}
          className="relative flex items-center justify-center w-32 h-32"
        >
          {/* Vertical bar */}
          <div className="absolute w-12 h-32 bg-white/70 backdrop-blur-md rounded-xl shadow-[0_8px_32px_rgba(230,11,131,0.2)] border border-white/50" />
          {/* Horizontal bar */}
          <div className="absolute w-32 h-12 bg-white/70 backdrop-blur-md rounded-xl shadow-[0_8px_32px_rgba(230,11,131,0.2)] border border-white/50 flex items-center justify-center">
             <div className="w-4 h-4 bg-brand-pink rounded-full shadow-[0_0_15px_rgba(230,11,131,0.8)] animate-pulse" />
          </div>
        </motion.div>
        
      </motion.div>

      {/* Floating Trust Badge */}
      <motion.div
        style={{ rotateX, rotateY, translateZ: 120 }}
        className="absolute bottom-12 right-0 bg-white/90 backdrop-blur-xl shadow-2xl rounded-2xl p-4 flex items-center gap-3 border border-gray-100"
      >
        <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center">
          <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div>
          <p className="text-sm font-bold text-gray-900">NABH Accredited</p>
          <p className="text-xs text-gray-500">Premium Healthcare</p>
        </div>
      </motion.div>
    </div>
  );
}
