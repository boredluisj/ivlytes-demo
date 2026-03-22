import type { Metadata } from "next";
import Image from "next/image";
import { Check, AlertCircle } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import AnimateOnScroll from "@/components/shared/AnimateOnScroll";
import GlassCard from "@/components/ui/GlassCard";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "SkinPen Microneedling Kingwood TX | IV-LYTES & Wellness",
  description:
    "FDA-cleared SkinPen microneedling in Kingwood TX. Clinically proven to reduce wrinkles, acne scars, and dark spots in as few as 3 treatments. 15–30 min sessions.",
  openGraph: {
    title: "SkinPen Microneedling | IV-LYTES & Wellness",
    description: "FDA-cleared microneedling in Kingwood TX. Wrinkles, acne scars, hyperpigmentation. Real results.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: "SkinPen Microneedling",
  description: "FDA-cleared collagen induction therapy for skin rejuvenation",
  provider: { "@type": "MedicalBusiness", name: "IV-LYTES & Wellness", telephone: "+12816669211" },
};

const benefits = ["Wrinkle and fine line reduction", "Acne scar improvement", "Enlarged pore refinement", "Hyperpigmentation and sun damage", "Stretch mark reduction", "Rosacea improvement", "Overall skin texture and tone", "Minimal downtime (2–4 days)"];

const phases = [
  { num: "1", name: "Inflammation", timing: "Days 1–2", desc: "Micro-injuries signal your immune system. Growth factors flood the treatment area. The wound healing cascade begins.", color: "#00D9FF" },
  { num: "2", name: "Proliferation", timing: "Days 3–14", desc: "Fibroblasts activate and synthesize new collagen and elastin. Your skin physically rebuilds itself with fresh, healthy tissue.", color: "#D4AF37" },
  { num: "3", name: "Remodeling", timing: "Weeks 3–24", desc: "New collagen matures and reorganizes. Results continue improving for up to 6 months after treatment.", color: "#00D9FF" },
];

const contraindications = ["Active skin cancer in treatment area", "Open wounds or active skin infections", "Pregnancy", "Current isotretinoin (Accutane) use or within 6 months", "Bleeding disorders or anticoagulant therapy", "Active acne flare in treatment area"];

export default function SkinPenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <Image src="/images/services/skinpen.jpg" alt="SkinPen microneedling treatment" fill className="object-cover opacity-20" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F1419] via-[#0F1419]/80 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <AnimateOnScroll>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#00D9FF] mb-4">SkinPen Microneedling</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sora font-bold text-[#F5F5F5] mb-4 leading-tight">
              Clinically Proven.<br />
              <span style={{ background: "linear-gradient(135deg, #00D9FF, #D4AF37)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Minimal Downtime.
              </span>
            </h1>
            <p className="text-xl text-[#A0AEC0] max-w-xl mb-8">
              The only FDA-cleared microneedling device. Proven to improve wrinkles, acne scars, and dark spots in as few as 3 treatments spaced 30 days apart.
            </p>
            <div className="flex flex-wrap gap-3">
              {["FDA-Cleared Device", "15–30 Min Sessions", "3 Sessions Recommended", "Minimal Downtime"].map((b) => (
                <span key={b} className="px-3 py-1 text-xs rounded-full bg-[#00D9FF]/10 border border-[#00D9FF]/20 text-[#00D9FF]">{b}</span>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* 3 Phases */}
      <section className="py-24 bg-[#080C10]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="mb-12">
            <SectionHeading label="The Science" title="How Microneedling Heals Your Skin" subtitle="Understanding the 3-phase healing response that makes microneedling so effective." centered />
          </AnimateOnScroll>
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00D9FF]/30 via-[#D4AF37]/30 to-[#00D9FF]/30" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {phases.map((p, i) => (
                <AnimateOnScroll key={p.num} delay={i * 0.1}>
                  <div className="text-center relative">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-sora font-bold text-[#0F1419] relative z-10"
                      style={{ background: `linear-gradient(135deg, ${p.color}, ${p.color}90)` }}>
                      {p.num}
                    </div>
                    <div className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: p.color }}>{p.timing}</div>
                    <h3 className="font-sora font-semibold text-[#F5F5F5] mb-3">Phase {p.num}: {p.name}</h3>
                    <p className="text-sm text-[#A0AEC0] leading-relaxed">{p.desc}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-[#0F1419]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="mb-12">
            <SectionHeading label="Benefits" title="What Microneedling Treats" />
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map((b, i) => (
              <AnimateOnScroll key={b} delay={i * 0.05}>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.04] border border-white/[0.07]">
                  <Check className="w-4 h-4 text-[#00D9FF] flex-shrink-0" />
                  <span className="text-sm text-[#A0AEC0]">{b}</span>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Details */}
      <section className="py-16 bg-[#080C10]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {[
                { label: "Session Duration", value: "15–30 min" },
                { label: "Recommended Sessions", value: "3 sessions" },
                { label: "Session Spacing", value: "4 weeks apart" },
                { label: "Recovery Time", value: "2–4 days pink" },
              ].map((d) => (
                <div key={d.label} className="text-center p-4 rounded-xl bg-white/[0.04] border border-white/[0.07]">
                  <div className="text-xl font-sora font-bold text-[#00D9FF] mb-1">{d.value}</div>
                  <div className="text-xs text-[#A0AEC0]">{d.label}</div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Contraindications */}
      <section className="py-16 bg-[#0F1419]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <GlassCard className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <AlertCircle className="w-5 h-5 text-[#D4AF37]" />
                <h2 className="font-sora font-semibold text-[#F5F5F5]">Who Should Not Get Microneedling</h2>
              </div>
              <ul className="space-y-3">
                {contraindications.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-sm text-[#A0AEC0]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-2 flex-shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-[#A0AEC0]/70 mt-6">Not sure if you qualify? Call us at <a href="tel:2816669211" className="text-[#00D9FF]">(281) 666-9211</a> for a quick consultation.</p>
            </GlassCard>
          </AnimateOnScroll>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#080C10]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="mb-10"><SectionHeading label="FAQ" title="Microneedling Questions" /></AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <div className="space-y-4">
              {[
                { q: "Does microneedling hurt?", a: "A topical numbing cream is applied 30 minutes before treatment. Most patients describe the sensation as mild pressure and warmth — not painful. Discomfort is minimal." },
                { q: "When will I see results?", a: "Many patients notice improved skin texture and tone after their first session. More dramatic improvements in acne scars and wrinkles become visible after the 2nd and 3rd sessions, with continued improvement for up to 6 months." },
                { q: "How long do results last?", a: "Results from a 3-session series typically last 1–2 years. Maintenance treatments every 6–12 months sustain and build on your results." },
                { q: "Can I wear makeup afterward?", a: "Avoid makeup for 24–48 hours post-treatment. Your skin needs to breathe and recover without occlusive products during the early inflammation phase." },
              ].map((item) => (
                <div key={item.q} className="p-5 rounded-xl bg-white/[0.04] border border-white/[0.07]">
                  <h3 className="text-sm font-semibold text-[#F5F5F5] mb-2">{item.q}</h3>
                  <p className="text-sm text-[#A0AEC0]">{item.a}</p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <div className="py-4 bg-[#080C10] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-[#A0AEC0]/60 text-center">IV-LYTES does not accept insurance. All services are cash-pay. These services have not been evaluated by the FDA and are not intended to diagnose, treat, cure, or prevent any disease.</p>
        </div>
      </div>

      <CTABanner title="Book Your SkinPen Session" subtitle="FDA-cleared. Real results. 15–30 minutes. Kingwood TX." cta="Book Your Microneedling Session" />
    </>
  );
}
