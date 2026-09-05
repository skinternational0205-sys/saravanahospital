"use client";

import { motion } from "framer-motion";
import { Image as ImageIcon } from "lucide-react";

export default function GalleryPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  // High quality placeholder images simulating hospital infrastructure
  const images = [
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1551076805-e18690c5e451?auto=format&fit=crop&q=80&w=800"
  ];

  return (
    <div className="pt-24 pb-16 min-h-screen">
      {/* Header */}
      <section className="bg-gray-50 py-16 border-b border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            initial="hidden" animate="visible" variants={fadeInUp}
          >
            Our <span className="text-brand-pink">Gallery</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial="hidden" animate="visible" variants={fadeInUp} transition={{ delay: 0.1 }}
          >
            Take a look inside our state-of-the-art facilities and infrastructure.
          </motion.p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="container mx-auto px-4 py-20">
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden" animate="visible" variants={staggerContainer}
        >
          {images.map((src, idx) => (
            <motion.div 
              key={idx} variants={fadeInUp}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
            >
              <img 
                src={src} 
                alt={`Hospital Gallery ${idx + 1}`} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gray-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                  <ImageIcon size={24} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
