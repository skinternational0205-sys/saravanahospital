"use client";

import { motion } from "framer-motion";
import { Microscope, CheckCircle2, Phone, Mail } from "lucide-react";

export default function LaboratoryPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const labFeatures = [
    "24/7 Laboratory services",
    "24 Hours Home Sample Collection",
    "Fully Automated World Class Equipment For Sample Processing",
    "Fully Automated Immunology Analyzer - Roche Cobas E411 (Germany)",
    "Fully Automated Biochemistry & Immunoturbidimetry Analyser - Tulip",
    "Automated Hematology Analyzer - Erma Pce 210 (Japan)",
    "Semi Biochemistry Analyser - Biosystem Bts350 (Spain)",
    "All Categories of Master Health Check Up",
    "Well Equipped and Trained Laboratory Staff",
    "Daily Internal Quality Control (IQAS): BIORAD (International Standard)",
    "External Quality Control For EQAS: CMC Vellore"
  ];

  return (
    <div className="pt-24 pb-16 min-h-screen">
      {/* Header */}
      <section className="bg-gray-50 py-16 border-b border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <div className="w-16 h-16 bg-pink-50 rounded-full flex items-center justify-center text-brand-pink mx-auto mb-6">
              <Microscope size={32} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Laboratory & Diagnostics
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Advanced technology and rigorous quality control ensuring accurate and timely reports.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Our Lab Facilities</h2>
            <ul className="space-y-4">
              {labFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-brand-pink/10 flex items-center justify-center text-brand-pink shrink-0 mt-0.5">
                    <CheckCircle2 size={14} />
                  </div>
                  <span className="text-gray-700 leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="space-y-8"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] relative">
              <img src="/images/b1_1.jpeg" alt="Laboratory" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-brand-pink/20 mix-blend-overlay"></div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-4">Laboratory Enquiries</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-gray-600">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Call Us 24/7</p>
                    <p className="font-bold text-lg text-gray-900">0427-2555108</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-gray-600">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Email Address</p>
                    <p className="font-bold text-lg text-gray-900">id-shpllaboratory@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
