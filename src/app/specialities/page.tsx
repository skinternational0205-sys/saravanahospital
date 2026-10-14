"use client";

import { motion } from "framer-motion";
import { Stethoscope, ArrowRight } from "lucide-react";

import Link from "next/link";
import specialitiesData from "@/data/specialities.json";

export default function SpecialitiesPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
  };

  return (
    <div className="pt-24 pb-16 min-h-screen">
      {/* Header */}
      <section className="bg-gray-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-pink/10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial="hidden" animate="visible" variants={fadeInUp}
          >
            Our <span className="text-brand-pink">Specialities</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial="hidden" animate="visible" variants={fadeInUp} transition={{ delay: 0.1 }}
          >
            Comprehensive medical care across 25+ advanced departments.
          </motion.p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="container mx-auto px-4 py-20">
        <motion.div 
          className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          initial="hidden" animate="visible" variants={staggerContainer}
        >
          {specialitiesData.map((spec) => (
            <div key={spec.slug}>
              <motion.div variants={fadeInUp} className="h-full">
                <Link
                  href={`/specialities/${spec.slug}`}
                  className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl shadow-gray-200/50 group transition-all h-full flex flex-col justify-between"
                >
                  <div className="w-12 h-12 bg-pink-50 rounded-full flex items-center justify-center text-brand-pink mb-6 group-hover:scale-110 transition-transform">
                    <Stethoscope size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-brand-pink transition-colors leading-tight mb-4">{spec.name}</h3>
                    <div className="flex items-center gap-1 text-sm font-semibold text-brand-pink">
                      View Details
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
