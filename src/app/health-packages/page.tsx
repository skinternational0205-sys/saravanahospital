"use client";

import { motion } from "framer-motion";
import { Check, ShieldPlus, ChevronRight } from "lucide-react";

export default function HealthPackages() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const basicTests = [
    "Blood Grouping & Rh Typing",
    "Complete Haemogram (Hb, Tc, Dc, Esr, Pcv, Rbc, Plt, Mcv, Mch, Mchc)",
    "Fbs & Ppbs",
    "Hba1c",
    "Urea & Creatinine",
    "Lipid profile (Total Cholesterol, Triglycerides, Hdl, Ldl, Vldl, Non Hdl)",
    "Liver Function Test (Bilirubin, Protein, Albumin, Globulin, Sgot, Sgpt, Alp)",
    "Urine routine",
    "Mantoux Test",
    "HBsAg",
    "ECG & Chest X-ray",
    "Ultra Sound Scan of Abdomen",
    "Physician Consultation (Men) / Gynecologist with Papsmear (Women)"
  ];

  const packages = [
    { title: "Master Health Checkup", desc: "General", href: "#" },
    { title: "Master Health Checkup", desc: "Cardiac", href: "#" },
    { title: "Master Health Checkup", desc: "Senior Citizen (65yrs)", href: "#" },
    { title: "Well Women Package", desc: "Below 30Yrs", href: "#" },
    { title: "Childern Health Checkup", desc: "Comprehensive", href: "#" },
    { title: "Master Health Checkup", desc: "Diabetes", href: "#" },
  ];

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-brand-pink text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black opacity-10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <ShieldPlus size={48} className="mx-auto mb-6 text-white/80" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Health Packages</h1>
            <p className="text-xl text-pink-100 max-w-2xl mx-auto">
              Preventive health checkups designed for you and your family. Early detection saves lives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Package */}
      <section className="container mx-auto px-4 -mt-10 relative z-20">
        <motion.div 
          className="bg-white rounded-3xl shadow-2xl shadow-gray-200/50 border border-gray-100 overflow-hidden"
          initial="hidden" animate="visible" variants={fadeInUp} transition={{ delay: 0.2 }}
        >
          <div className="grid lg:grid-cols-3">
            <div className="lg:col-span-1 bg-gray-900 text-white p-10 flex flex-col justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-brand-pink/20"></div>
              <div className="relative z-10">
                <div className="inline-block px-3 py-1 bg-brand-pink rounded-full text-xs font-bold tracking-widest uppercase mb-4">Featured Pack</div>
                <h2 className="text-3xl font-bold mb-2">Master Health Checkup</h2>
                <p className="text-gray-400 mb-8">(Basic Pack)</p>
                
                <div className="space-y-4 mb-8">
                  <div className="bg-white/10 p-4 rounded-xl border border-white/10 flex justify-between items-center backdrop-blur-md">
                    <span className="font-semibold text-gray-300">Male</span>
                    <span className="text-2xl font-bold text-white">₹ 2,250</span>
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl border border-white/10 flex justify-between items-center backdrop-blur-md">
                    <span className="font-semibold text-gray-300">Female</span>
                    <span className="text-2xl font-bold text-white">₹ 2,750</span>
                  </div>
                </div>

                <button className="w-full bg-brand-pink hover:bg-pink-700 text-white font-bold py-4 rounded-xl transition-colors shadow-lg shadow-pink-500/30">
                  Book This Package
                </button>
              </div>
            </div>
            
            <div className="lg:col-span-2 p-10">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Tests Included in Basic Pack</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {basicTests.map((test, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="mt-1 shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span className="text-gray-700 text-sm leading-relaxed">{test}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Other Packages Grid */}
      <section className="container mx-auto px-4 py-24">
        <motion.div 
          className="text-center mb-16"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold text-gray-900">Explore Other Packages</h2>
          <p className="text-gray-600 mt-4">We offer specialized checkups tailored to specific needs.</p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
        >
          {packages.map((pkg, idx) => (
            <motion.a 
              href={pkg.href}
              key={idx}
              variants={fadeInUp}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl shadow-gray-200/50 border border-gray-100 group transition-all hover:-translate-y-2 block"
            >
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-brand-pink transition-colors mb-2">{pkg.title}</h3>
              <p className="text-gray-500 mb-6 font-medium">{pkg.desc}</p>
              
              <div className="flex items-center text-brand-pink font-semibold text-sm">
                View Details <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
