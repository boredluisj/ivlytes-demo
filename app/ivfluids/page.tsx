import type { Metadata } from "next";
import Image from "next/image";
import { Check, Clock, Zap, Shield } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import AnimateOnScroll from "@/components/shared/AnimateOnScroll";
import GlassCard from "@/components/ui/GlassCard";
import CTABanner from "@/components/sections/CTABanner";
import { drips, boosters } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "IV Hydration & Nutrition Therapy | IV-LYTES Kingwood TX",
  description:
    "9 IV drip formulas from $99. 100% absorption — vitamins go straight to your bloodstream, bypassing digestion. Same-day appointments in Kingwood, TX.",
  openGraph: {
    title: "IV Hydration Therapy | IV-LYTES & Wellness",
    description: "Physician-supervised IV drips from $99. Myers Cocktail, Hangover, Athletic Performance, and more.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: "IV Hydration & Nutrition Therapy",
  description: "Intravenous delivery of vitamins, minerals, and hydration for maximum absorption",
  provider: {
    "@type": "MedicalBusiness",
    name: "IV-LYTES & Wellness",
    telephone: "+12816669211",
  },
};

const steps = [
  { step: "1", title: "Quick Consult", desc: "Brief health history review with our physician-supervised team." },
  { step: "2", title: "Relax & Drip", desc: "30–60 minutes in a comfortable chair. Bring a book or your phone." },
  { step: "3", title: "Feel It Fast", desc: "Most patients feel improved energy and clarity before leaving the clinic." },
];

export default function IVFluidsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <Image
            src="/images/services/iv-hydration.jpg"
            alt="IV Hydration therapy session"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F1419] via-[#0F1419]/80 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <AnimateOnScroll>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#00D9FF] mb-4">
              IV Hydration & Nutrition
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sora font-bold text-[#F5F5F5] mb-6 leading-tight">
              IV Hydration &<br />
              <span style={{ background: "linear-gradient(135deg, #00D9FF, #D4AF37)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Nutrition Therapy
              </span>
            </h1>
            <p className="text-xl text-[#A0AEC0] max-w-xl">
              100% absorption — every vitamin goes straight to your bloodstream, bypassing digestion entirely.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              {["9 Drip Formulas", "From $99", "Same-Day Available", "Physician Supervised"].map((b) => (
                <span key={b} className="px-3 py-1 text-xs rounded-full bg-[#00D9FF]/10 border border-[#00D9FF]/20 text-[#00D9FF]">
                  {b}
                </span>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-[#080C10]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <p className="text-lg text-[#A0AEC0] leading-relaxed text-center">
              Unlike oral supplements, IV therapy bypasses your digestive system entirely. When you swallow a vitamin C
              pill, your body absorbs 20–30% of it. With IV delivery, that number becomes <strong className="text-[#F5F5F5]">100%</strong>.
              Effects are felt almost immediately and typically last about one week.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Drip Menu */}
      <section className="py-24 bg-[#0F1419]" aria-labelledby="drips-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="mb-12">
            <SectionHeading
              label="Treatment Menu"
              title="Our IV Drip Formulas"
              subtitle="All drips are physician-supervised and administered in our Kingwood clinic."
            />
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {drips.map((drip, i) => (
              <AnimateOnScroll key={drip.name} delay={i * 0.05}>
                <GlassCard hover className="p-6 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-sora font-semibold text-[#F5F5F5] text-base">{drip.name}</h3>
                    <span className="text-sm font-semibold text-[#00D9FF] flex-shrink-0 ml-2">{drip.price}</span>
                  </div>
                  <p className="text-sm text-[#A0AEC0] leading-relaxed flex-grow">{drip.description}</p>
                  <div className="flex items-center gap-1.5 mt-4 pt-4 border-t border-white/[0.06]">
                    <Clock className="w-3 h-3 text-[#A0AEC0]" />
                    <span className="text-xs text-[#A0AEC0]">30 min</span>
                  </div>
                </GlassCard>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Boosters */}
      <section className="py-16 bg-[#080C10]" aria-labelledby="boosters-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="mb-10">
            <SectionHeading label="Add-Ons" title="Boosters & Injections" />
          </AnimateOnScroll>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {boosters.map((b, i) => (
              <AnimateOnScroll key={b.name} delay={i * 0.04}>
                <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.04] border border-white/[0.07] hover:border-[#00D9FF]/20 transition-colors">
                  <span className="text-sm text-[#F5F5F5]">{b.name}</span>
                  <span className="text-sm font-semibold text-[#D4AF37]">{b.price}</span>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-[#0F1419]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="mb-12 text-center">
            <SectionHeading label="Process" title="How It Works" centered />
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <AnimateOnScroll key={s.step} delay={i * 0.1}>
                <div className="text-center">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-sora font-bold text-[#0F1419]"
                    style={{ background: "linear-gradient(135deg, #00D9FF, #D4AF37)" }}>
                    {s.step}
                  </div>
                  <h3 className="font-sora font-semibold text-[#F5F5F5] mb-2">{s.title}</h3>
                  <p className="text-sm text-[#A0AEC0]">{s.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#080C10]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="mb-10">
            <SectionHeading label="FAQ" title="IV Therapy Questions" />
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <div className="space-y-6">
              {[
                { q: "How often should I get IV therapy?", a: "For general wellness, every 2–4 weeks is ideal. For specific goals like immunity during cold season or athletic training recovery, more frequent sessions may benefit you. We'll help you find the right cadence." },
                { q: "What should I expect during a session?", a: "After a brief health review, you'll be seated in a comfortable chair while the IV is placed. Most patients read, scroll their phone, or simply relax. The drip takes 30–60 minutes." },
                { q: "Are there any side effects?", a: "Side effects are rare. Some patients feel a cool sensation as the drip runs. Very rarely, mild bruising at the IV site. Serious adverse events are extremely uncommon with physician-supervised IV therapy." },
                { q: "How long do the effects last?", a: "Most patients feel noticeable effects for about one week. Regular sessions maintain elevated nutrient levels and amplify long-term benefits." },
              ].map((item) => (
                <div key={item.q} className="p-5 rounded-xl bg-white/[0.04] border border-white/[0.07]">
                  <div className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#00D9FF] flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-semibold text-[#F5F5F5] mb-2">{item.q}</h3>
                      <p className="text-sm text-[#A0AEC0]">{item.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Disclaimer */}
      <div className="py-4 bg-[#080C10] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-[#A0AEC0]/60 text-center">
            IV-LYTES does not accept insurance. All services are cash-pay. These services have not been evaluated by the FDA and are not intended to diagnose, treat, cure, or prevent any disease. Please consult your physician.
          </p>
        </div>
      </div>

      <CTABanner title="Book Your IV Drip" subtitle="Same-day appointments available. 9 formulas. From $99." cta="Book Your IV Drip" />
    </>
  );
}
