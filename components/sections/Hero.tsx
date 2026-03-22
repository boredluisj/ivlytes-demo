"use client";

import { useReducedMotion, motion } from "framer-motion";
import { ArrowRight, Zap, Clock, DollarSign } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay },
  }),
};

const statCards = [
  { icon: Zap, label: "9 IV Drip Formulas", sub: "Customized to your needs" },
  { icon: Clock, label: "Same-Day Appointments", sub: "Book online instantly" },
  { icon: DollarSign, label: "Cash-Pay Only", sub: "No insurance games" },
];

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Mesh gradient background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(45deg, #0F1419, #1A3A3A, #0F1419)",
          backgroundSize: "400% 400%",
          animation: prefersReducedMotion ? "none" : "mesh-shift 10s ease infinite",
        }}
      />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,217,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,217,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-10 z-0 pointer-events-none"
        style={{ background: "radial-gradient(circle, #00D9FF 0%, transparent 70%)" }}
      />

      {/* Gold particles (static dots) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#D4AF37] opacity-20"
            style={{
              width: Math.random() * 3 + 1 + "px",
              height: Math.random() * 3 + 1 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            {/* Trust badges */}
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-wrap gap-2 mb-8"
            >
              {["Physician Supervised", "Kingwood TX", "Est. 2019"].map((badge) => (
                <span
                  key={badge}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-[#00D9FF]/10 border border-[#00D9FF]/20 text-[#00D9FF]"
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
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-sora font-bold text-[#F5F5F5] leading-tight tracking-tight mb-6"
            >
              IV Therapy &amp; Wellness{" "}
              <span
                className="block"
                style={{
                  background: "linear-gradient(135deg, #00D9FF, #D4AF37)",
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
              className="text-lg text-[#A0AEC0] leading-relaxed mb-4"
            >
              Kingwood&apos;s Premier IV Hydration, Hormone Therapy &amp; Medical Wellness Clinic
            </motion.p>

            {/* Body */}
            <motion.p
              custom={0.35}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-base text-[#A0AEC0]/80 leading-relaxed mb-10"
            >
              Physician-supervised wellness treatments designed to optimize your energy, health, and performance.
              Same-day appointments available.
            </motion.p>

            {/* CTAs */}
            <motion.div
              custom={0.45}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="https://www.vagaro.com/ivlytes/book-now"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#00D9FF] text-[#0F1419] font-semibold rounded-xl hover:bg-[#00D9FF]/90 hover:shadow-[0_0_30px_rgba(0,217,255,0.4)] transition-all duration-200 text-base"
              >
                Book Your Session
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/ivfluids"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/20 text-[#F5F5F5] font-medium rounded-xl hover:border-[#00D9FF]/40 hover:text-[#00D9FF] transition-all duration-200 text-base"
              >
                View Services
              </a>
            </motion.div>
          </div>

          {/* Right: Stat cards */}
          <div className="grid grid-cols-1 gap-4">
            {statCards.map((card, i) => (
              <motion.div
                key={card.label}
                custom={0.4 + i * 0.1}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.05] border border-white/[0.08] backdrop-blur-xl hover:border-[#00D9FF]/30 transition-all duration-300"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #00D9FF20, #D4AF3720)" }}
                >
                  <card.icon className="w-5 h-5 text-[#00D9FF]" />
                </div>
                <div>
                  <div className="font-sora font-semibold text-[#F5F5F5] text-sm">{card.label}</div>
                  <div className="text-xs text-[#A0AEC0]">{card.sub}</div>
                </div>
              </motion.div>
            ))}

            {/* CTA card */}
            <motion.div
              custom={0.7}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="p-5 rounded-2xl bg-[#00D9FF]/10 border border-[#00D9FF]/20"
            >
              <p className="text-sm text-[#F5F5F5] font-medium mb-1">Ready to feel your best?</p>
              <p className="text-xs text-[#A0AEC0]">
                Call us:{" "}
                <a href="tel:2816669211" className="text-[#00D9FF] hover:underline">
                  (281) 666-9211
                </a>{" "}
                — Mon–Thu 9am–6pm, Fri 9am–1pm
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #0F1419)" }}
      />
    </section>
  );
}
