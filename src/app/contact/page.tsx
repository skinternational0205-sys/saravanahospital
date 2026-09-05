"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function ContactPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const contactMethods = [
    { icon: Phone, title: "Appointments", value: "9789555680", desc: "Call to book an appointment" },
    { icon: Phone, title: "Blood Bank", value: "9585500113", desc: "24/7 Blood bank services" },
    { icon: Phone, title: "Ambulance", value: "7695959165", desc: "Emergency ambulance dispatch" },
    { icon: Phone, title: "Enquiries", value: "0427 2555111", desc: "General hospital enquiries" },
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
            Contact <span className="text-brand-pink">Us</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial="hidden" animate="visible" variants={fadeInUp} transition={{ delay: 0.1 }}
          >
            We are here to help. Get in touch with us for appointments, emergencies, or general queries.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Details */}
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-12">
            
            <motion.div variants={fadeInUp} className="flex gap-6">
              <div className="w-16 h-16 rounded-2xl bg-pink-50 flex items-center justify-center text-brand-pink shrink-0 shadow-sm border border-pink-100">
                <MapPin size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Hospital Location</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  No-14, Thillai Nagar 1st Cross, <br/>
                  Opp to IIHT, Ponnamapet, <br/>
                  Salem - 636001, Tamil Nadu.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid sm:grid-cols-2 gap-6">
              {contactMethods.map((method, idx) => {
                const Icon = method.icon;
                return (
                  <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 mb-4">
                      <Icon size={18} />
                    </div>
                    <h4 className="font-bold text-gray-900">{method.title}</h4>
                    <p className="text-brand-pink font-semibold text-lg mt-1 mb-2">{method.value}</p>
                    <p className="text-sm text-gray-500">{method.desc}</p>
                  </div>
                );
              })}
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6">
              <div className="flex-1 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Email Us</p>
                  <p className="font-bold text-gray-900">shplhrm@gmail.com</p>
                </div>
              </div>
              
              <div className="flex-1 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Working Hours</p>
                  <p className="font-bold text-gray-900">24/7 Available</p>
                </div>
              </div>
            </motion.div>

          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial="hidden" animate="visible" variants={fadeInUp} transition={{ delay: 0.3 }}
            className="bg-white p-10 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Send us a Message</h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">First Name</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-pink/20 focus:border-brand-pink transition-all" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Last Name</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-pink/20 focus:border-brand-pink transition-all" placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Email Address</label>
                <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-pink/20 focus:border-brand-pink transition-all" placeholder="john@example.com" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Message</label>
                <textarea rows={5} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-pink/20 focus:border-brand-pink transition-all resize-none" placeholder="How can we help you?"></textarea>
              </div>

              <button type="button" className="w-full bg-brand-pink hover:bg-pink-700 text-white font-bold py-4 rounded-xl transition-colors shadow-lg shadow-pink-500/30 flex items-center justify-center gap-2">
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>

        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 w-full bg-gray-200 mt-10">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.3999908479364!2d78.1691967148088!3d11.662377791724594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf1c0b5087fbd%3A0x9cfed5dd38e4c486!2sSaravana%20Hospital%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1647413994334!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
}
