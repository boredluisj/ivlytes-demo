"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0B1120]" aria-label="Hero section">
      {/* Real IV therapy photo — right side */}
      <div className="absolute right-0 top-0 w-full md:w-[55%] h-full">
        <Image
          src="/images/services/iv-hydration.jpg"
          alt="IV therapy treatment at IV-LYTES &amp; Wellness in Kingwood, TX"
          fill
          className="object-cover object-center opacity-35 md:opacity-65"
          priority
          sizes="(max-width: 768px) 100vw, 55vw"
        />
        <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-[#0B1120] via-[#0B1120]/55 to-transparent" />
        <div className="absolute inset-0 md:hidden bg-gradient-to-t from-[#0B1120] via-[#0B1120]/40 to-transparent" />
      </div>

      {/* Subtle glow — bottom left only */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[#2DD4BF]/[0.05] blur-[100px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 w-full">
        <div className="max-w-[600px]">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#2DD4BF]/30 bg-[#2DD4BF]/10 text-[#2DD4BF] text-sm font-medium mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF] animate-pulse" />
            Kingwood&apos;s Premier Wellness Clinic
          </motion.div>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#F0EDE8] leading-[1.08] tracking-tight font-sora"
          >
            Feel better.<br />
            <span className="text-[#2DD4BF]">Same day.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 text-lg md:text-xl text-[#9BA8BB] leading-relaxed max-w-xl"
          >
            IV therapy, hormone balance, medical weight loss, and aesthetic treatments. Physician-supervised, cash-pay, no insurance headaches.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="https://www.vagaro.com/ivlytes/book-now"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#2DD4BF] text-[#0B1120] rounded-xl font-bold text-base hover:bg-[#4FE5D3] transition-colors w-full sm:w-auto text-center flex items-center justify-center gap-2"
            >
              Book a Treatment
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/ivfluids"
              className="px-8 py-4 border border-white/20 text-[#F0EDE8] rounded-xl font-semibold text-base hover:bg-white/[0.06] hover:border-white/30 transition-all w-full sm:w-auto text-center"
            >
              See All Services
            </a>
          </motion.div>

          {/* Stat bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-14 flex flex-wrap gap-8 border-t border-white/[0.07] pt-8"
          >
            {[
              { value: "9", label: "IV Drip Formulas" },
              { value: "5+", label: "Years in Kingwood" },
              { value: "Same Day", label: "Appointments Available" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold text-[#F0EDE8] font-sora">{stat.value}</p>
                <p className="text-sm text-[#9BA8BB] mt-0.5">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none bg-gradient-to-t from-[#0B1120] to-transparent z-10" />
    </section>
  );
}
