"use client";
import { motion, useScroll } from "framer-motion";
import { useState, useEffect } from "react";
import { useLuxuryClick } from "@/hooks/useLuxuryClick";

export function MobileStickyCTA() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const playClick = useLuxuryClick();

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 500);
    });
  }, [scrollY]);

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: isScrolled ? 0 : 100 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-0 left-0 right-0 z-[100] md:hidden bg-[var(--color-primary)] text-white p-4 flex items-center justify-between shadow-[0_-10px_40px_-5px_rgba(0,0,0,0.3)] border-t border-teal-500"
    >
      <span className="text-sm font-medium pl-2 drop-shadow-sm">Ready to feel better?</span>
      <a 
        href="https://www.vagaro.com/us04/ivlytes" 
        target="_blank" 
        rel="noopener noreferrer"
        onClick={playClick}
        className="bg-white text-[var(--color-primary-dark)] font-bold px-6 py-2.5 rounded-full text-sm shadow-md active:scale-95 transition-transform"
      >
        Book Now
      </a>
    </motion.div>
  );
}
