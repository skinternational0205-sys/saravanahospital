"use client";

import Link from "next/link";
import Image from "next/image";
import { 
  Stethoscope, HeartPulse, Activity, BedDouble, Ambulance, TestTube, Droplet, Pill,
  ArrowRight, CalendarCheck, Video, Microscope, ShieldCheck, Quote, CheckCircle2
} from "lucide-react";
import { motion } from "framer-motion";

import ParticleEKG from "@/components/ParticleEKG";
import VideoModal from "@/components/VideoModal";

const facilities = [
  { name: "Highly Trained Doctors", icon: Stethoscope },
  { name: "24/7 Emergency Service", icon: HeartPulse },
  { name: "Dialysis", icon: Activity },
  { name: "ICU", icon: BedDouble },
  { name: "Ambulance Service", icon: Ambulance },
  { name: "Laboratory & Diagnostics", icon: TestTube },
  { name: "Blood Bank", icon: Droplet },
  { name: "Pharmacy", icon: Pill },
];

const quickLinks = [
  { title: "Book Appointment", icon: CalendarCheck, href: "/appointment", desc: "Schedule your visit" },
  { title: "Online Consultation", icon: Video, href: "https://play.google.com/store/apps/details?id=com.neevlabs.saravanahospital", desc: "Consult via app" },
  { title: "Lab Enquiry", icon: Microscope, href: "/laboratory", desc: "Test reports & booking" },
  { title: "Insurance Info", icon: ShieldCheck, href: "/insurance", desc: "Cashless treatments" },
];

const testimonials = [
  {
    text: "The hospital is in good atmosphere and excellent healthcare facilities available and immediate response is given.",
    author: "Venmani Muthusamy",
    location: "Salem"
  },
  {
    text: "Best hospital ammapet salem good hospital and caring hospital are good.",
    author: "Senthil",
    location: "Salem"
  },
  {
    text: "I admitted my grandma here happy with their service and care...Hospital itself providing food & snacks for patients.",
    author: "Deepak R",
    location: "Salem"
  },
];

// Refined Premium Animations
const subtleReveal = {
  hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { type: "spring" as const, stiffness: 80, damping: 20, duration: 0.8 } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function Home() {
  return (
    <div className="flex flex-col bg-white overflow-hidden selection:bg-brand-pink/20 selection:text-brand-pink">
      
      {/* Hero Section - Clean Split Layout */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 px-4 overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            <motion.div 
              initial="hidden" animate="visible" variants={subtleReveal}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 text-brand-pink text-sm font-semibold mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-pink opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-pink"></span>
                </span>
                24/7 Emergency Care Available
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight mb-6">
                Serving Salem Since <br/>
                <span className="text-brand-pink">1993</span>.
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-lg">
                Offering Multi-Speciality integrated healthcare with uncompromising international standards, right here in Salem.
              </p>
              
              <div className="flex flex-wrap items-center gap-4">
                <Link 
                  href="/specialities" 
                  className="bg-brand-pink text-white font-semibold px-8 py-4 rounded-lg hover:bg-pink-700 transition-all hover:shadow-lg hover:shadow-brand-pink/30 flex items-center gap-2"
                >
                  Explore Specialities <ArrowRight size={18} />
                </Link>
                <Link 
                  href="/contact" 
                  className="bg-white text-gray-900 border border-gray-200 font-semibold px-8 py-4 rounded-lg hover:bg-gray-50 transition-all"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20, filter: "blur(10px)" }} 
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }} 
              transition={{ type: "spring", stiffness: 60, damping: 20, delay: 0.2 }}
              className="relative lg:ml-auto w-full flex justify-center"
            >
              <ParticleEKG />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Clean Quick Links Bar */}
      <section className="relative z-20 container mx-auto px-4 max-w-7xl -mt-8 mb-20">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
          className="bg-white rounded-2xl shadow-lg shadow-gray-100 border border-gray-100 p-2 grid sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-100"
        >
          {quickLinks.map((link, idx) => {
            const Icon = link.icon;
            return (
              <motion.div key={idx} variants={subtleReveal}>
                <a href={link.href} className="flex items-center gap-4 p-6 group hover:bg-gray-50 transition-colors rounded-xl">
                  <div className="w-12 h-12 rounded-full bg-pink-50 flex items-center justify-center text-brand-pink shrink-0">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm group-hover:text-brand-pink transition-colors">{link.title}</h3>
                    <p className="text-xs text-gray-500 mt-1">{link.desc}</p>
                  </div>
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* MD Message - Airy Two Column */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <motion.div 
              className="md:col-span-5"
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={subtleReveal}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-brand-pink rounded-full blur-3xl opacity-10 translate-x-4 translate-y-4"></div>
                <Image
                  src="/images/ashok.jpg"
                  alt="Dr. S. Ashok, MD & Chief Medical Officer"
                  width={400}
                  height={500}
                  className="w-full max-w-md mx-auto rounded-full object-cover shadow-2xl border-8 border-white relative z-10"
                />
              </div>
            </motion.div>
            
            <motion.div 
              className="md:col-span-7 md:pl-10"
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={subtleReveal}
            >
              <Quote size={48} className="text-gray-200 mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Committed to quality and affordable healthcare.
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed mb-8">
                <p>
                  We take this opportunity to thank our entire team of Saravana Hospital for having persistently served the human community for over three decades.
                </p>
                <p>
                  Today, Saravana Hospital is one of the leading healthcare centres in Salem City offering Multi Speciality integrated Care with uncompromising international Standards.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg">Dr. S. Ashok</h4>
                <p className="text-brand-pink font-medium">MD & Chief Medical Officer</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Facilities Grid - Redesigned like Reference */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div 
            className="text-center max-w-2xl mx-auto mb-16"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={subtleReveal}
          >
            <h3 className="text-brand-pink font-bold tracking-widest uppercase mb-2">- OUR FACILITIES -</h3>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">High-Quality Services</h2>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          >
            {facilities.map((facility, idx) => {
              const Icon = facility.icon;
              return (
                <motion.div 
                  key={idx} variants={subtleReveal}
                  className="flex flex-col items-center text-center group cursor-default"
                >
                  <div className="w-24 h-24 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-600 mb-6 group-hover:scale-110 group-hover:text-brand-pink transition-all duration-300 border border-gray-100">
                    <Icon size={36} strokeWidth={1.5} />
                  </div>
                  <h5 className="font-bold text-gray-900 text-lg">{facility.name}</h5>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us - Edge to edge Video */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={subtleReveal}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Why Choose Us</h2>
              
              <ul className="space-y-6">
                {[
                  "A center for medical excellence with 60+ beds",
                  "Advanced techniques supplemented with traditional treatments",
                  "Quality & affordable care to everyone",
                  "Highly qualified doctors with uninterrupted 24/7 services",
                  "Highest standards & protocols for zero infection"
                ].map((item, idx) => (
                  <motion.li 
                    key={idx} 
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1, type: "spring", stiffness: 60 }} viewport={{ once: true }}
                  >
                    <div className="w-6 h-6 rounded-full bg-brand-pink/10 flex items-center justify-center text-brand-pink shrink-0 mt-1">
                      <CheckCircle2 size={14} />
                    </div>
                    <span className="text-lg text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={subtleReveal}
            >
              <VideoModal videoId="8Us6IIDdgmw" coverImage="https://img.youtube.com/vi/8Us6IIDdgmw/hqdefault.jpg" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-7xl">
           <motion.div 
            className="text-center max-w-2xl mx-auto mb-16"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={subtleReveal}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Patient Stories</h2>
            <p className="text-gray-600 text-lg">What our patients say about their experience with us.</p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
          >
            {testimonials.map((testi, idx) => (
              <motion.div 
                key={idx} variants={subtleReveal}
                className="bg-gray-50 p-8 rounded-2xl border border-gray-100 flex flex-col justify-between"
              >
                <div>
                  <Quote size={32} className="text-gray-300 mb-6" />
                  <p className="text-gray-700 leading-relaxed mb-8">
                    &ldquo;{testi.text}&rdquo;
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testi.author}</h4>
                  <p className="text-sm text-gray-500">{testi.location}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
