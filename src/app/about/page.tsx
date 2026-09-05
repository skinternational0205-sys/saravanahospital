"use client";

import { motion } from "framer-motion";
import { Target, Eye, Award } from "lucide-react";

export default function AboutPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="pt-24 pb-16 min-h-screen">
      {/* Header */}
      <section className="bg-gray-50 py-16 border-b border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            initial="hidden" animate="visible" variants={fadeInUp}
          >
            About <span className="text-brand-pink">Us</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial="hidden" animate="visible" variants={fadeInUp} transition={{ delay: 0.1 }}
          >
            Delivering exceptional and reliable healthcare to the community since 1993.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Profile</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
              <p>
                Saravana Hospital was started in the year 1993 by two doctors at Ponnammapet with the noble vision of providing quality health care to the society with the consent support of the people.
              </p>
              <p>
                The main objective of the hospital is to provide quality healthcare to the uncared and under cared sector of the society. Saravana Hospital the Multi-Specialty Integrated Hospital is Located at No. 14, Thillai Nagar, Ponnammapet, Salem. With 60 beds, having advanced health care facilities.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Our Specialty</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              The Important feature of the hospital is the experienced consultants for various departments provide new and advanced techniques of the modern medicine is supplemented with Yoga and siddha treatments.
            </p>
          </motion.div>
          
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative">
              <img src="/images/b1_1.jpeg" alt="Hospital Building" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-brand-pink/20"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-gray-900 py-20 text-white mt-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              className="bg-white/10 backdrop-blur-md p-10 rounded-2xl border border-white/10 hover:border-brand-pink/50 transition-colors"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              <Eye size={48} className="text-brand-pink mb-6" />
              <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                To Provide &quot;Holistic Health Care&quot; To Each and Every Individual Patient and Meet Their Expectation by Providing Quality Services with an &quot;Integrated Approach&quot;.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white/10 backdrop-blur-md p-10 rounded-2xl border border-white/10 hover:border-brand-pink/50 transition-colors"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.2 }}
            >
              <Target size={48} className="text-brand-pink mb-6" />
              <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Conserve the medical ethics in providing quality care at affordable cost and will meet the highest satisfaction of needy community with our excellent Integrated Health Care Services.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
