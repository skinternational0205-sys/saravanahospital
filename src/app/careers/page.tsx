"use client";

import { motion } from "framer-motion";
import { UploadCloud, Briefcase, Send } from "lucide-react";

export default function CareersPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-brand-pink text-white py-20 relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160550-2173ff9e5ee5?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <Briefcase size={48} className="mx-auto mb-6 text-white/80" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Team</h1>
            <p className="text-xl text-pink-100 max-w-2xl mx-auto">
              Build your career at one of the fastest growing multi-speciality hospitals in Salem.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-16 -mt-10 relative z-20">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden flex flex-col md:flex-row">
          
          <div className="md:w-1/3 bg-gray-900 text-white p-10 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-brand-pink/10"></div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">Why Join Us?</h3>
              <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
                <p>Welcome to Saravana Hospitals recruitment page.</p>
                <p>We are a very dynamic organization and if you feel you have the zeal to achieve greatness in what you do, then don’t think again, Apply now.</p>
                <p>You will get a call back from our HR team as and when a suitable vacancy arises.</p>
              </div>
            </motion.div>
          </div>

          <div className="md:w-2/3 p-10 lg:p-14">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Application Form</h2>
              
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Full Name</label>
                    <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-pink/20 focus:border-brand-pink transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Mobile Number</label>
                    <input type="tel" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-pink/20 focus:border-brand-pink transition-all" placeholder="+91 98765 43210" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Email Address</label>
                  <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-pink/20 focus:border-brand-pink transition-all" placeholder="johndoe@example.com" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Short Bio</label>
                  <textarea rows={4} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-pink/20 focus:border-brand-pink transition-all resize-none" placeholder="Tell us about your experience..."></textarea>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Attach Resume</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 flex flex-col items-center justify-center text-center hover:bg-gray-50 hover:border-brand-pink transition-colors cursor-pointer group">
                    <div className="w-12 h-12 bg-pink-50 rounded-full flex items-center justify-center text-brand-pink mb-3 group-hover:scale-110 transition-transform">
                      <UploadCloud size={24} />
                    </div>
                    <p className="text-gray-600 font-medium">Click to upload your resume (PDF, DOCX)</p>
                    <p className="text-sm text-gray-400 mt-1">Maximum file size: 5MB</p>
                    <input type="file" className="hidden" />
                  </div>
                </div>

                <button type="button" className="w-full bg-brand-pink hover:bg-pink-700 text-white font-bold py-4 rounded-xl transition-colors shadow-lg shadow-pink-500/30 flex items-center justify-center gap-2 mt-4">
                  Submit Application <Send size={18} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
