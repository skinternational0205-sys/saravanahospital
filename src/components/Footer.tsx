import Link from "next/link";
import { Radio } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-1">
          <Link href="/" className="inline-block mb-6 bg-white p-2 rounded-xl">
             <img src="/images/ssh-logo.png" alt="Salem Saravana Hospital" className="h-12 w-auto" />
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Offering Multi Speciality integrated Care with uncompromising international Standards.
          </p>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/saravanahospitalsalem" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-pink transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="https://www.instagram.com/saravanahospitalsalem/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-pink transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="https://www.youtube.com/channel/UCaIuUVE6eki_bHWABDhu4bA" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-pink transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
            </a>
            <a href="/fmtalks" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-pink transition-colors">
              <Radio size={18} />
            </a>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li><Link href="/" className="hover:text-brand-pink transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-brand-pink transition-colors">About Us</Link></li>
            <li><Link href="/healthpackages" className="hover:text-brand-pink transition-colors">Health Packages</Link></li>
            <li><Link href="/specialities" className="hover:text-brand-pink transition-colors">Specialities</Link></li>
            <li><Link href="/careers" className="hover:text-brand-pink transition-colors">Career</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-bold mb-6 text-white">Services</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li><Link href="/appointment" className="hover:text-brand-pink transition-colors">Book Appointment</Link></li>
            <li><Link href="/online-consultation" className="hover:text-brand-pink transition-colors">Online Consultation</Link></li>
            <li><Link href="/laboratory" className="hover:text-brand-pink transition-colors">Lab Enquiry</Link></li>
            <li><Link href="/pharmacy" className="hover:text-brand-pink transition-colors">Pharmacy</Link></li>
            <li><Link href="/insurance" className="hover:text-brand-pink transition-colors">Insurance</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-6 text-white">Contact Info</h3>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex items-start gap-3">
              <div className="mt-1 text-brand-pink">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </div>
              <span>Salem, Tamil Nadu, India</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1 text-brand-pink">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              </div>
              <div>
                <span>Emergency: 24/7 Available</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Salem Saravana Hospital. All rights reserved.
      </div>
    </footer>
  );
}
