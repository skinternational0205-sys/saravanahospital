"use client";

import { motion } from "framer-motion";
import { CalendarCheck, User, Phone, Mail, FileText, Send } from "lucide-react";

export default function AppointmentPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const specialities = [
    "General Medicine", "General Surgery & Laparoscopy", "Paediatrics", "Dermatology", 
    "Neurology / Neurosurgery", "Gastroenterology", "Pulmonology", "Dental & Oral Maxillofacial Surgery", 
    "Plastic Surgery & Cosmetology", "ENT", "Ophthalmology", "Ayush - Siddha & Yoga", 
    "Yoga", "Psychiatry", "Anesthesia & Intensive care", "Poison Care", 
    "Medical & Surgical Oncology", "Physiotherapy", "Urology & Nephrology", "Physical Medicine & Rehabilitation", 
    "Orthopedics & Joint Replacement", "Cardiology", "Obstetrics & Gynecology", "Paediatric Surgery", "Radiology"
  ];

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-brand-pink text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <CalendarCheck size={48} className="mx-auto mb-6 text-white/80" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Book Appointment</h1>
            <p className="text-xl text-pink-100 max-w-2xl mx-auto">
              Schedule your visit with our expert doctors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-16 -mt-10 relative z-20">
        <motion.div 
          initial="hidden" animate="visible" variants={fadeInUp}
          className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 p-8 md:p-12"
        >
          <form className="space-y-8">
            {/* Personal Details */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <User size={20} className="text-brand-pink" /> Patient Details
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Patient Name *</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-pink/20 focus:border-brand-pink transition-all" required placeholder="Enter full name" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Age *</label>
                    <input type="number" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-pink/20 focus:border-brand-pink transition-all" required placeholder="e.g. 35" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Gender *</label>
                    <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-pink/20 focus:border-brand-pink transition-all" required>
                      <option value="">Select</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="pt-6 border-t border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Phone size={20} className="text-brand-pink" /> Contact Details
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Mobile Number *</label>
                  <input type="tel" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-pink/20 focus:border-brand-pink transition-all" required placeholder="+91" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Contact Email *</label>
                  <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-pink/20 focus:border-brand-pink transition-all" required placeholder="you@example.com" />
                </div>
              </div>
            </div>

            {/* Appointment Details */}
            <div className="pt-6 border-t border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <FileText size={20} className="text-brand-pink" /> Appointment Details
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Choose Speciality *</label>
                  <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-pink/20 focus:border-brand-pink transition-all" required>
                    <option value="">Select Speciality</option>
                    {specialities.map((spec, i) => (
                      <option key={i} value={spec}>{spec}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Choose Doctor</label>
                  <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-pink/20 focus:border-brand-pink transition-all">
                    <option value="">Select Doctor (Optional)</option>
                    <option value="dr_ashok">Dr. S. Ashok</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Preferred Date *</label>
                  <input type="date" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-pink/20 focus:border-brand-pink transition-all" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Purpose of Consultation *</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-pink/20 focus:border-brand-pink transition-all" required placeholder="Brief description of symptoms" />
                </div>
              </div>
            </div>

            <button type="button" className="w-full bg-brand-pink hover:bg-pink-700 text-white font-bold py-4 rounded-xl transition-colors shadow-lg shadow-pink-500/30 flex items-center justify-center gap-2 mt-8">
              Submit Appointment Request <Send size={18} />
            </button>
          </form>
        </motion.div>
      </section>
    </div>
  );
}
