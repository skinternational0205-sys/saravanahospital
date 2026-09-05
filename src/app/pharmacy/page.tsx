"use client";

import { motion } from "framer-motion";
import { Pill, Upload, Phone, Mail, CheckCircle2, Truck } from "lucide-react";

export default function PharmacyPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-brand-pink text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
              <Pill size={32} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Pharmacy Services</h1>
            <p className="text-xl text-pink-100 max-w-2xl mx-auto">
              24/7 in-house pharmacy with doorstep delivery for your convenience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Content Column */}
          <div className="lg:col-span-7 space-y-12">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>Saravana Hospital has an in-house pharmacy department working 24*7 which caters to patients with its timely and quality service under one roof.</p>
                <p>The Pharmacy has qualified and experienced pharmacists catering to patients’ needs at the right time and with right quality meeting NABH Standards. Various advanced and improved dispensing methods are followed to avoid waiting time and ensure error-free dispensing.</p>
                <p>We have our internal Formulary committee with experienced consultants and Pharmacists to identify good quality medicines that are available in the market.</p>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-pink-50 rounded-full flex items-center justify-center text-brand-pink shrink-0">
                  <Truck size={24} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Home Delivery of Medicines</h2>
              </div>
              <p className="text-gray-600 mb-6">Saravana Hospital Pharmacy provides home delivery service for dispensing medicines at request with proper prescriptions.</p>
              
              <div className="bg-pink-50 p-4 rounded-xl mb-8">
                <p className="font-semibold text-brand-pink">Free Home Delivery: For minimum purchase of Rs. 1000/- within 5 KM in Salem.</p>
              </div>

              <h3 className="font-bold text-gray-900 mb-4">Steps to receive medicines:</h3>
              <ul className="space-y-3">
                {[
                  "Take picture of your valid Prescription and send to our Whatsapp number or Email",
                  "Our pharmacist will call and convey the medicines availability",
                  "Once your Order is confirmed, our pharmacist will inform you with the total bill value.",
                  "You can make payment through NEFT / RTGS / UPI / Debit & Credit Card / Cash on Delivery",
                  "All medicines will be labeled with dosage details and packed separately.",
                  "We ensure all medicines are double checked before packing.",
                  "Education of Drugs while Delivering the Medicine."
                ].map((step, i) => (
                  <li key={i} className="flex gap-3 text-gray-600">
                    <span className="font-bold text-brand-pink shrink-0">Step {i+1}:</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Medicines Return Policy</h2>
              <ul className="space-y-4">
                {[
                  "Medicines can be returned on submission of original bills within 1 week from the date of purchase",
                  "Medicines should be in saleable condition with an expiry date of 3 months",
                  "We do not collect refrigerated medicines. Temperature sensitive products are non-refundable",
                  "Mode of refund of money for the returned medicines will be done as per the hospital policy"
                ].map((policy, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={18} />
                    <span className="text-gray-600">{policy}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Form & Contact Column */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-white p-8 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 sticky top-28">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Order Medicines Online</h3>
              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Patient Name</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-pink/20 focus:border-brand-pink" required />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Contact Number</label>
                  <input type="tel" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-pink/20 focus:border-brand-pink" required />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-pink/20 focus:border-brand-pink" required />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Delivery Address</label>
                  <textarea rows={3} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-pink/20 focus:border-brand-pink" required></textarea>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Attach Prescription</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:bg-gray-50 transition-colors cursor-pointer">
                    <Upload className="mx-auto text-gray-400 mb-2" size={24} />
                    <p className="text-sm text-gray-500">Click to upload or drag & drop</p>
                    <input type="file" className="hidden" />
                  </div>
                </div>
                <button type="button" className="w-full bg-brand-pink text-white font-bold py-4 rounded-xl hover:bg-pink-700 transition-colors shadow-lg shadow-pink-500/30">
                  Submit Order
                </button>
              </form>

              <div className="mt-10 pt-8 border-t border-gray-100">
                <h4 className="font-bold text-gray-900 mb-4">Pharmacy Enquiries</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-600">
                    <Phone size={18} className="text-brand-pink" />
                    <span>0427-2555199</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Mail size={18} className="text-brand-pink" />
                    <span>shplpharmacy1@gmail.com</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </section>
    </div>
  );
}
