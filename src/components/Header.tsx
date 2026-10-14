"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Packages", href: "/health-packages" },
  { name: "Specialities", href: "/specialities" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 bg-white ${
          scrolled ? "shadow-sm py-3" : "border-b border-gray-100 py-5"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/images/ssh-logo.png"
                  alt="Salem Saravana Hospital"
                  width={255}
                  height={90}
                  priority
                  className="h-9 md:h-[42px] w-auto"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <motion.div 
                    key={link.name}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link 
                      href={link.href} 
                      className={`relative px-4 py-2 rounded-full text-[15px] font-medium transition-colors block ${
                        isActive ? "text-brand-pink" : "text-gray-700 hover:text-brand-pink"
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeNavIndicator"
                          className="absolute inset-0 bg-pink-50 rounded-full -z-10"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            <div className="hidden lg:flex items-center">
               <motion.div
                  whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(230,11,131,0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-full"
               >
                 <Link 
                    href="/appointment" 
                    className="bg-brand-pink text-white text-[15px] font-semibold px-6 py-2 rounded-full shadow-sm block"
                  >
                    Book Appointment
                  </Link>
               </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-gray-900 hover:text-brand-pink transition-colors p-2"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="w-7 h-7" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[60] bg-white lg:hidden flex flex-col"
          >
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <Link href="/">
                <Image
                  src="/images/ssh-logo.png"
                  alt="Salem Saravana Hospital"
                  width={255}
                  height={90}
                  className="h-9 w-auto"
                />
              </Link>
              <button 
                className="text-gray-900 p-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="w-7 h-7" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                  return (
                    <Link 
                      key={link.name} 
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-2xl font-bold transition-colors ${
                        isActive ? "text-brand-pink" : "text-gray-900"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </nav>

              <div className="mt-auto pt-8 border-t border-gray-100">
                <Link 
                  href="/appointment" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="bg-brand-pink text-white text-center font-bold text-lg px-6 py-4 rounded-xl shadow-lg block w-full"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
