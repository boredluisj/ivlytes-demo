"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, Clock, Shield } from "lucide-react";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay },
  }),
};

const statCards = [
  { icon: Zap, label: "9 IV Drip Formulas", sub: "Custom-blended to your goals" },
  { icon: Clock, label: "Same-Day Appointments", sub: "Walk-ins welcome" },
  { icon: Shield, label: "Physician Supervised", sub: "Dr. Arif Shahzad, MD" },
];

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden bg-[#080C10]"
      aria-label="Hero section"
    >
      {/* ── Deep background layers ── */}
      {/* Base dark gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#080C10] via-[#0D1B2A] to-[#080C10]" />

      {/* Large teal glow — top-left */}
      <div
        className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full z-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,217,255,0.12) 0%, transparent 65%)",
          filter: "blur(40px)",
        }}
      />
      {/* Gold glow — bottom-right */}
      <div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full z-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(212,175,55,0.10) 0%, transparent 65%)",
          filter: "blur(50px)",
        }}
      />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,217,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(0,217,255,0.8) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* ── Left: Copy ── */}
          <div className="order-2 lg:order-1">
            {/* Trust badges */}
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-wrap gap-2 mb-7"
            >
              {["Physician Supervised", "Kingwood TX", "Est. 2019"].map((badge) => (
                <span
                  key={badge}
                  className="px-3 py-1 text-xs font-semibold rounded-full bg-[#00D9FF]/[0.10] border border-[#00D9FF]/25 text-[#00D9FF] tracking-wide"
                >
                  {badge}
                </span>
              ))}
            </motion.div>

            {/* H1 */}
            <motion.h1
              custom={0.1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.25rem] font-sora font-bold text-[#F5F5F5] leading-[1.08] tracking-tight mb-6"
            >
              IV Therapy &amp; Wellness
              <span
                className="block mt-1"
                style={{
                  background: "linear-gradient(120deg, #00D9FF 0%, #7BE8FF 40%, #D4AF37 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                That Actually Works
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              custom={0.25}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-lg text-[#CBD5E0] leading-relaxed mb-3"
            >
              Kingwood&apos;s Premier IV Hydration, Hormone Therapy &amp; Medical Wellness Clinic
            </motion.p>

            <motion.p
              custom={0.35}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-[0.95rem] text-[#A0AEC0] leading-relaxed mb-10"
            >
              Physician-supervised treatments designed to optimize your energy, recovery, and long-term health.
              Cash-pay only — no insurance games, no waiting rooms.
            </motion.p>

            {/* CTAs */}
            <motion.div
              custom={0.45}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <a
                href="https://www.vagaro.com/ivlytes/book-now"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#00D9FF] text-[#080C10] font-bold rounded-xl hover:bg-[#00D9FF]/90 hover:shadow-[0_0_40px_rgba(0,217,255,0.45)] transition-all duration-200 text-[0.95rem] tracking-wide"
              >
                Book Your Session
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/ivfluids"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/[0.15] text-[#F5F5F5] font-medium rounded-xl hover:border-[#00D9FF]/50 hover:text-[#00D9FF] hover:bg-[#00D9FF]/[0.05] transition-all duration-200 text-[0.95rem]"
              >
                View Services
              </a>
            </motion.div>

            {/* Phone */}
            <motion.p custom={0.55} initial="hidden" animate="visible" variants={fadeUp} className="text-sm text-[#A0AEC0]/70">
              Or call{" "}
              <a href="tel:2816669211" className="text-[#00D9FF] hover:underline font-medium">
                (281) 666-9211
              </a>{" "}
              — Mon–Thu 9am–6pm, Fri 9am–1pm
            </motion.p>
          </div>

          {/* ── Right: Visual ── */}
          <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end">
            {/* Outer glow ring */}
            <div
              className="absolute inset-0 rounded-3xl z-0 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse at center, rgba(0,217,255,0.18) 0%, transparent 70%)",
                filter: "blur(30px)",
              }}
            />

            {/* Main image container */}
            <motion.div
              custom={0.2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="relative w-full max-w-[520px] aspect-[4/5] rounded-3xl overflow-hidden border border-white/[0.09] shadow-[0_30px_80px_rgba(0,0,0,0.6)]"
            >
              <Image
                src="/images/services/iv-therapy.jpg"
                alt="IV Therapy at IV-LYTES & Wellness Kingwood TX"
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 1024px) 90vw, 520px"
              />
              {/* Gradient overlays for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080C10] via-transparent to-transparent opacity-70" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#080C10]/40 via-transparent to-transparent" />
              {/* Top teal tint */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#00D9FF]/[0.06] to-transparent" />

              {/* Corner accent lines */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#00D9FF]/60 rounded-tl-lg" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#D4AF37]/60 rounded-br-lg" />
            </motion.div>

            {/* Floating stat cards */}
            <div className="absolute -left-4 lg:-left-10 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-10">
              {statCards.map((card, i) => (
                <motion.div
                  key={card.label}
                  custom={0.5 + i * 0.12}
                  initial="hidden"
                  animate="visible"
                  variants={fadeUp}
                  className="flex items-center gap-3 px-4 py-3 rounded-2xl backdrop-blur-xl border shadow-xl"
                  style={{
                    background: "rgba(13,17,23,0.85)",
                    borderColor: "rgba(255,255,255,0.08)",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)",
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "linear-gradient(135deg, rgba(0,217,255,0.15), rgba(212,175,55,0.10))" }}
                  >
                    <card.icon className="w-4 h-4 text-[#00D9FF]" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-sora font-semibold text-[#F5F5F5] text-xs leading-tight whitespace-nowrap">{card.label}</div>
                    <div className="text-[11px] text-[#A0AEC0] mt-0.5 whitespace-nowrap">{card.sub}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* "Kingwood's #1" badge — top right of image */}
            <motion.div
              custom={0.65}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="absolute top-4 right-0 lg:-right-4 z-10 px-3.5 py-2.5 rounded-2xl backdrop-blur-xl border border-[#D4AF37]/30 text-center"
              style={{
                background: "rgba(13,17,23,0.90)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
              }}
            >
              <div
                className="text-xs font-bold tracking-wide"
                style={{
                  background: "linear-gradient(135deg, #D4AF37, #F5D87A)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                ★ Kingwood&apos;s
              </div>
              <div className="text-[10px] text-[#A0AEC0] mt-0.5 whitespace-nowrap">#1 Wellness Clinic</div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #080C10)" }}
      />
    </section>
  );
}
