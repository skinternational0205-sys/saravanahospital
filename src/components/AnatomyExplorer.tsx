"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Heart, Wind, Stethoscope, Bone } from "lucide-react";
import Link from "next/link";

const bodyParts = [
  { id: "brain", name: "Neurology", icon: Brain, x: 50, y: 15, link: "#" },
  { id: "lungs", name: "Pulmonology", icon: Wind, x: 50, y: 35, link: "#" },
  { id: "heart", name: "Cardiology", icon: Heart, x: 55, y: 38, link: "#" },
  { id: "stomach", name: "Gastroenterology", icon: Stethoscope, x: 50, y: 52, link: "#" },
  { id: "joints", name: "Orthopedics", icon: Bone, x: 35, y: 70, link: "#" },
];

export default function AnatomyExplorer() {
  const [activePart, setActivePart] = useState<string | null>(null);

  return (
    <div className="relative w-full max-w-md mx-auto aspect-[3/4] flex items-center justify-center">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-brand-pink/5 blur-[100px] rounded-full" />

      {/* The Anatomy SVG container */}
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Abstract Human Silhouette */}
        <svg 
          viewBox="0 0 100 200" 
          className="w-full h-full max-h-[500px] text-gray-100 drop-shadow-2xl"
          style={{ filter: "drop-shadow(0px 20px 30px rgba(0,0,0,0.05))" }}
        >
          {/* A sleek, modern, simplified human silhouette path */}
          <path 
            d="M50 10 C44 10 40 14 40 20 C40 25 43 28 46 29 C42 32 30 35 25 45 C20 55 20 80 20 80 C20 85 25 85 25 80 C25 80 28 60 32 55 C32 75 35 100 35 100 C35 105 38 105 38 100 C38 100 40 85 40 85 L40 110 C40 130 35 170 35 185 C35 190 42 190 44 185 C46 170 48 130 50 110 C52 130 54 170 56 185 C58 190 65 190 65 185 C65 170 60 130 60 110 L60 85 C60 85 62 100 62 100 C62 105 65 105 65 100 C65 100 68 75 68 55 C72 60 75 80 75 80 C75 85 80 85 80 80 C80 80 80 55 75 45 C70 35 58 32 54 29 C57 28 60 25 60 20 C60 14 56 10 50 10 Z" 
            fill="currentColor"
          />
          {/* Inner futuristic lines */}
          <path 
            d="M50 30 L50 100 M40 50 L60 50 M35 70 L65 70" 
            stroke="rgba(230, 11, 131, 0.1)" 
            strokeWidth="0.5" 
            fill="none" 
          />
        </svg>

        {/* Hotspots */}
        {bodyParts.map((part) => {
          const isActive = activePart === part.id;
          return (
            <div 
              key={part.id}
              className="absolute"
              style={{ left: `${part.x}%`, top: `${part.y}%`, transform: 'translate(-50%, -50%)' }}
              onMouseEnter={() => setActivePart(part.id)}
              onMouseLeave={() => setActivePart(null)}
            >
              {/* Pulse Ring */}
              <motion.div 
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className={`absolute inset-0 rounded-full bg-brand-pink pointer-events-none ${isActive ? 'opacity-100' : 'opacity-30'}`}
              />
              
              {/* The Dot */}
              <Link href={part.link}>
                <div className={`relative w-4 h-4 rounded-full border-2 border-white cursor-pointer transition-all duration-300 ${isActive ? 'bg-brand-pink scale-125 shadow-[0_0_15px_rgba(230,11,131,0.6)]' : 'bg-gray-300 hover:bg-brand-pink'}`} />
              </Link>

              {/* Tooltip */}
              <AnimatePresence>
                {isActive && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 5, scale: 0.9 }}
                    className="absolute left-6 top-1/2 -translate-y-1/2 ml-2 bg-white/90 backdrop-blur-md shadow-xl rounded-xl p-3 flex items-center gap-3 w-max z-50 border border-brand-pink/10 pointer-events-none"
                  >
                    <div className="w-8 h-8 bg-pink-50 rounded-full flex items-center justify-center text-brand-pink">
                      <part.icon size={16} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">{part.name}</p>
                      <p className="text-xs text-brand-pink font-semibold">Explore Speciality &rarr;</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Floating Description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="absolute -bottom-4 right-0 bg-white shadow-lg rounded-2xl p-4 border border-gray-100 max-w-[200px]"
      >
        <p className="text-xs text-gray-500 font-medium leading-relaxed">
          Hover over the interactive model to explore our <strong className="text-brand-pink">25+ Advanced Specialities</strong>.
        </p>
      </motion.div>
    </div>
  );
}
