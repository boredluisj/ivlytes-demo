import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import AnimateOnScroll from "@/components/shared/AnimateOnScroll";
import GlassCard from "@/components/ui/GlassCard";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "BioTE Hormone Therapy Kingwood TX | IV-LYTES & Wellness",
  description:
    "BioTE bioidentical hormone pellet therapy in Kingwood TX. Restore energy, mood, sleep, and libido with hormone pellets structurally identical to your own. Free consultation.",
  openGraph: {
    title: "BioTE Hormone Therapy | IV-LYTES & Wellness",
    description: "Bioidentical hormone replacement therapy in Kingwood TX. Free consultation with Dr. Shahzad.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: "BioTE Bioidentical Hormone Pellet Therapy",
  description: "Subdermal bioidentical hormone pellets for consistent, natural hormone delivery",
  provider: { "@type": "MedicalBusiness", name: "IV-LYTES & Wellness", telephone: "+12816669211" },
};

const herBenefits = ["Increased energy and vitality", "Improved mood and emotional balance", "Better sleep quality", "Reduced hot flashes and night sweats", "Enhanced libido", "Weight management support", "Improved bone density", "Mental clarity and focus"];
const hisBenefits = ["Restored energy and drive", "Increased muscle mass and strength", "Reduced body fat", "Improved mood and motivation", "Enhanced libido and sexual function", "Better sleep quality", "Mental sharpness", "Cardiovascular health support"];

export default function BioTEPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <Image src="/images/services/biote.jpg" alt="BioTE hormone therapy" fill className="object-cover opacity-20" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F1419] via-[#0F1419]/80 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <AnimateOnScroll>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#D4AF37] mb-4">BioTE Hormone Therapy</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sora font-bold text-[#F5F5F5] mb-4 leading-tight">
              Restore What<br />
              <span style={{ background: "linear-gradient(135deg, #D4AF37, #00D9FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Time Takes Away
              </span>
            </h1>
            <p className="text-xl text-[#A0AEC0] max-w-xl mb-8">
              Bioidentical hormone pellets structurally identical to your own hormones. Consistent, natural hormone delivery — no patches, no pills, no daily dosing.
            </p>
            <a href="tel:2816669211" className="inline-flex items-center gap-2 px-6 py-3 bg-[#D4AF37] text-[#0F1419] font-semibold rounded-xl hover:bg-[#D4AF37]/90 transition-all">
              Free Consultation: (281) 666-9211
            </a>
          </AnimateOnScroll>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-[#080C10]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="mb-10">
            <SectionHeading label="How It Works" title="Pellets. Not Pills." subtitle="BioTE pellets are inserted subdermally (just under the skin) in a simple, in-office procedure. They dissolve gradually, releasing hormones steadily into the bloodstream — exactly like your body's own hormones would." />
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { step: "1", title: "Lab Work & Consult", desc: "Comprehensive hormone panel to understand your baseline. Free consultation with Dr. Shahzad." },
                { step: "2", title: "Pellet Insertion", desc: "Quick, in-office procedure. A tiny pellet (smaller than a grain of rice) is placed under the skin of your hip. Takes 5 minutes." },
                { step: "3", title: "Steady Results", desc: "Hormones release gradually over 3–6 months. No daily dosing. No patches. No rollercoaster of highs and lows." },
              ].map((s, i) => (
                <div key={s.step} className="text-center p-6 rounded-xl bg-white/[0.04] border border-white/[0.07]">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-sora font-bold text-[#0F1419]"
                    style={{ background: "linear-gradient(135deg, #D4AF37, #00D9FF)" }}>
                    {s.step}
                  </div>
                  <h3 className="font-sora font-semibold text-[#F5F5F5] mb-2">{s.title}</h3>
                  <p className="text-sm text-[#A0AEC0]">{s.desc}</p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* For Her / For Him */}
      <section className="py-24 bg-[#0F1419]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="mb-12">
            <SectionHeading label="Benefits" title="Designed for Your Biology" />
          </AnimateOnScroll>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <AnimateOnScroll delay={0}>
              <GlassCard className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="px-3 py-1 rounded-full text-sm font-semibold" style={{ background: "linear-gradient(135deg, #D4AF37, #00D9FF)", color: "#0F1419" }}>For Her</div>
                  <span className="text-[#A0AEC0] text-sm">Every 3–6 months</span>
                </div>
                <ul className="space-y-3">
                  {herBenefits.map((b) => (
                    <li key={b} className="flex items-center gap-3 text-sm text-[#A0AEC0]">
                      <Check className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.1}>
              <GlassCard className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="px-3 py-1 rounded-full text-sm font-semibold" style={{ background: "linear-gradient(135deg, #00D9FF, #D4AF37)", color: "#0F1419" }}>For Him</div>
                  <span className="text-[#A0AEC0] text-sm">Every 4–6 months</span>
                </div>
                <ul className="space-y-3">
                  {hisBenefits.map((b) => (
                    <li key={b} className="flex items-center gap-3 text-sm text-[#A0AEC0]">
                      <Check className="w-4 h-4 text-[#00D9FF] flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Supplements CTA */}
      <section className="py-16 bg-[#080C10]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <h2 className="text-2xl font-sora font-bold text-[#F5F5F5] mb-4">BioTE Nutraceuticals</h2>
            <p className="text-[#A0AEC0] mb-6">Complement your hormone therapy with BioTE&apos;s clinical-grade supplement line — DIM SGS+, ADK, Omega 3+CoQ10, and more. Available through our partner portal.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/biote-store" className="px-6 py-3 bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] font-semibold rounded-xl hover:bg-[#D4AF37] hover:text-[#0F1419] transition-all inline-flex items-center gap-2">
                Browse BioTE Store <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="https://patients.shopbiote.com" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-white/20 text-[#F5F5F5] rounded-xl hover:border-[#00D9FF]/40 transition-all inline-flex items-center gap-2">
                Shop at patients.shopbiote.com <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#0F1419]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="mb-10"><SectionHeading label="FAQ" title="Hormone Therapy Questions" /></AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <div className="space-y-4">
              {[
                { q: "How long until I feel results?", a: "Most patients notice improvements in energy and sleep within 2–4 weeks. Full hormonal benefits — mood, libido, body composition — typically manifest over 4–6 weeks as levels optimize." },
                { q: "Is bioidentical hormone therapy safe?", a: "BioTE pellets use hormones structurally identical to those your body produces. They are FDA-regulated. Dr. Shahzad reviews your complete health history and lab work before every treatment." },
                { q: "What does BioTE hormone therapy cost?", a: "Pricing is based on your hormone panel results and specific protocol. Call (281) 666-9211 for a free consultation and cost estimate." },
                { q: "What's the difference between BioTE and synthetic hormones?", a: "Synthetic hormones (like traditional HRT) have different molecular structures than your body's own hormones. Bioidentical hormones are structurally identical — your body's receptors cannot tell the difference." },
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

      <div className="py-4 bg-[#0F1419] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-[#A0AEC0]/60 text-center">IV-LYTES does not accept insurance. All services are cash-pay. These services have not been evaluated by the FDA and are not intended to diagnose, treat, cure, or prevent any disease. Please consult your physician.</p>
        </div>
      </div>

      <CTABanner title="Schedule Your Free BioTE Consultation" subtitle="Call us or book online. Dr. Shahzad will review your lab work and design a protocol specifically for you." cta="Call (281) 666-9211" href="tel:2816669211" external={false} secondaryCta="Book Online" secondaryHref="https://www.vagaro.com/ivlytes/book-now" />
    </>
  );
}
