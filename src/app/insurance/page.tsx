"use client";

import { motion } from "framer-motion";
import { ShieldCheck, CheckCircle2, FileText, Phone } from "lucide-react";

export default function InsurancePage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const schemes = [
    {
      title: "Government Schemes",
      desc: "Empanelled with major state and central government health schemes.",
      count: 6
    },
    {
      title: "Pre-Policy Medical Checkup",
      desc: "Authorized center for pre-insurance medical screenings.",
      count: 7
    },
    {
      title: "Private Insurance & TPAs",
      desc: "Cashless treatment available across major private insurance providers.",
      count: 24
    }
  ];

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-brand-pink text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
              <ShieldCheck size={32} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Insurance & Cashless</h1>
            <p className="text-xl text-pink-100 max-w-2xl mx-auto">
              We are empanelled with all major Government & Private Insurance providers to offer you hassle-free cashless treatments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {schemes.map((scheme, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{scheme.title}</h3>
                <p className="text-gray-600 mb-6">{scheme.desc}</p>
                <div className="inline-flex items-center justify-center bg-pink-50 text-brand-pink font-bold px-4 py-2 rounded-full text-sm">
                  {scheme.count}+ Providers Empanelled
                </div>
              </motion.div>
            ))}
          </div>

          {/* How to claim */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 p-8 md:p-12"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">How Cashless Works</h2>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-brand-pink text-white flex items-center justify-center font-bold shrink-0">1</div>
                    <div>
                      <h4 className="font-bold text-gray-900">Show Your ID</h4>
                      <p className="text-gray-600">Present your Insurance ID card and Aadhar card at our dedicated insurance desk during admission.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-brand-pink text-white flex items-center justify-center font-bold shrink-0">2</div>
                    <div>
                      <h4 className="font-bold text-gray-900">Pre-Authorization</h4>
                      <p className="text-gray-600">Our team will send the required medical documents to your TPA/Insurance company for approval.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-brand-pink text-white flex items-center justify-center font-bold shrink-0">3</div>
                    <div>
                      <h4 className="font-bold text-gray-900">Cashless Treatment</h4>
                      <p className="text-gray-600">Once approved, you can avail the treatment without paying upfront for the covered amount.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-4">Insurance Desk Enquiry</h3>
                <p className="text-gray-600 mb-8">For queries regarding policy coverage, required documents, or empanelled TPAs, please contact our dedicated insurance desk.</p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-gray-100">
                    <Phone className="text-brand-pink" size={24} />
                    <div>
                      <p className="text-sm text-gray-500 font-medium">Call Helpdesk</p>
                      <p className="font-bold text-gray-900">0427-2555111</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-gray-100">
                    <FileText className="text-brand-pink" size={24} />
                    <div>
                      <p className="text-sm text-gray-500 font-medium">Bring Documents</p>
                      <p className="font-bold text-gray-900">ID Card, Aadhar, Old Reports</p>
                    </div>
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
