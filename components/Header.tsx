"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useLuxuryClick } from "@/hooks/useLuxuryClick";
import { motion, useScroll, useTransform } from "framer-motion";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const playClick = useLuxuryClick();
  const { scrollY } = useScroll();
  
  const backgroundColor = useTransform(scrollY, [0, 50], ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.95)"]);
  const backdropBlur = useTransform(scrollY, [0, 50], ["blur(0px)", "blur(12px)"]);
  const shadow = useTransform(scrollY, [0, 50], ["none", "0 1px 2px 0 rgb(0 0 0 / 0.05)"]);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Testimonials", href: "#testimonials" },
  ];

  return (
    <motion.header 
      style={{ backgroundColor, backdropFilter: backdropBlur, boxShadow: shadow }}
      className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center bg-white rounded-lg px-3 py-1">
            <Link href="/" onClick={playClick}>
              <Image src="/images/logo.png" alt="IV-LYTES & Wellness" width={160} height={50} className="h-9 md:h-11 w-auto" priority />
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} onClick={playClick} className="text-slate-700 hover:text-teal-700 font-medium text-sm transition-colors">
                {link.label}
              </Link>
            ))}
            <a 
              href="https://www.vagaro.com/us04/ivlytes" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={playClick}
              className="bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)] transition-colors px-6 py-2.5 rounded-full font-semibold text-sm shadow-sm hover:shadow-md hover:-translate-y-0.5 duration-300 transform"
            >
              Book Now
            </a>
          </nav>

          <div className="md:hidden flex items-center">
            <button onClick={() => { playClick(); setIsOpen(!isOpen); }} className="text-slate-800 hover:text-teal-700 bg-white/50 p-2 rounded-md backdrop-blur-sm">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="md:hidden bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-lg absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} onClick={() => { playClick(); setIsOpen(false); }} className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-teal-700 hover:bg-teal-50 rounded-md">
                {link.label}
              </a>
            ))}
            <a 
              href="https://www.vagaro.com/us04/ivlytes" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={playClick}
              className="block w-full text-center mt-4 bg-[var(--color-primary)] text-white px-4 py-3 rounded-xl font-bold"
            >
              Book Your Session
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
