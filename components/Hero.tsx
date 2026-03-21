"use client";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useLuxuryClick } from "@/hooks/useLuxuryClick";

export function Hero() {
  const playClick = useLuxuryClick();

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 -z-10 hero-gradient opacity-60 mix-blend-multiply" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-[var(--color-neutral-dark)] leading-tight tracking-tight">
            Restore Harmony.<br className="hidden md:block"/> Balance Your Health.
          </h1>
          
          <p className="text-lg md:text-xl text-[var(--color-neutral)] max-w-2xl mx-auto leading-relaxed">
            MD-led IV therapy, hormone optimization, and wellness treatments — personalized for your body. Kingwood, TX.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <a 
              href="https://www.vagaro.com/us04/ivlytes"
              target="_blank"
              rel="noopener noreferrer"
              onClick={playClick}
              className="w-full sm:w-auto px-8 py-4 bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)] rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              Book Your Session
            </a>
            <a 
              href="#services"
              onClick={playClick}
              className="w-full sm:w-auto px-8 py-4 bg-white text-[var(--color-neutral-dark)] border border-slate-200 hover:border-teal-200 hover:bg-teal-50 rounded-full font-semibold text-lg shadow-sm hover:shadow-md transition-all duration-300"
            >
              See All Services
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-16 flex flex-wrap justify-center gap-6 sm:gap-10 text-sm font-medium text-[var(--color-neutral-dark)]"
        >
          {[
            "62 Treatments Available",
            "Board-Certified MD",
            "Kingwood, TX"
          ].map((stat, i) => (
            <div key={i} className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-teal-100/50 shadow-sm">
              <CheckCircle2 className="w-5 h-5 text-[var(--color-accent)]" />
              <span>{stat}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
