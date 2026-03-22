import type { Metadata } from "next";
import Image from "next/image";
import { Shield, Leaf, Droplets, Zap, Scale, Heart, CheckCircle } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import AnimateOnScroll from "@/components/shared/AnimateOnScroll";
import GlassCard from "@/components/ui/GlassCard";
import PricingCard from "@/components/ui/PricingCard";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Colonic Hydrotherapy Kingwood TX | IV-LYTES & Wellness",
  description:
    "Open-system colonic hydrotherapy in complete privacy. Single $150, 4-pack $500, 10-pack $1,000. Detox, relieve constipation, improve gut health in Kingwood TX.",
  openGraph: {
    title: "Colonic Hydrotherapy | IV-LYTES & Wellness",
    description: "Modern open-system colonic hydrotherapy in Kingwood TX. Complete privacy, physician-supervised.",
  },
};

const benefits = [
  { icon: Leaf, title: "Full Body Detoxification", desc: "Remove accumulated toxins from the colon, reducing the burden on your liver and bloodstream." },
  { icon: Scale, title: "Weight Loss Support", desc: "The colon can retain up to 15 lbs of undigested waste. Colonics provide immediate, measurable relief." },
  { icon: CheckCircle, title: "Constipation Relief", desc: "Gentle infusion softens and clears impacted waste, providing lasting relief for chronic constipation." },
  { icon: Heart, title: "IBS Improvement", desc: "Reduced inflammation and removal of colon irritants leads to significant IBS symptom improvement." },
  { icon: Droplets, title: "Improved Hydration", desc: "The colon wall absorbs water during hydrotherapy, contributing to better cellular hydration." },
  { icon: Zap, title: "Energy & Clarity", desc: "Remove toxic load from your system and experience improved mental clarity, energy, and vitality." },
];

export default function ColonicPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <Image src="/images/services/colonic.jpg" alt="Colonic hydrotherapy service" fill className="object-cover opacity-20" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F1419] via-[#0F1419]/80 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <AnimateOnScroll>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#00D9FF] mb-4">Colonic Hydrotherapy</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sora font-bold text-[#F5F5F5] mb-4 leading-tight">
              Cleanse. Reset.{" "}
              <span style={{ background: "linear-gradient(135deg, #00D9FF, #D4AF37)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Restore.
              </span>
            </h1>
            <p className="text-xl text-[#A0AEC0] max-w-xl mb-8">
              Modern open-system colonic hydrotherapy in complete privacy. Physician-supervised. You&apos;re always in control.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Complete Privacy", "Open-System Technology", "Physician Supervised", "Lunchtime Treatment"].map((b) => (
                <span key={b} className="px-3 py-1 text-xs rounded-full bg-[#00D9FF]/10 border border-[#00D9FF]/20 text-[#00D9FF]">{b}</span>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-[#080C10]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="mb-12">
            <SectionHeading label="Pricing" title="Choose Your Package" subtitle="All packages include physician supervision and complete privacy." centered />
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AnimateOnScroll delay={0}>
              <PricingCard
                title="Single Session"
                price="$150"
                description="Perfect for first-timers or occasional detox."
                features={["1 full colonic session", "Complete privacy", "Open-system technology", "Post-session restroom time", "Immediate results"]}
                cta="Book Single Session"
              />
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.1}>
              <PricingCard
                title="4-Session Pack"
                price="$500"
                description="Recommended for a complete cleanse cycle."
                features={["4 full sessions", "Save $100 vs. single rate", "Complete privacy", "Schedule at your pace", "Track your progress"]}
                highlighted
                badge="Most Popular"
                cta="Book 4-Pack"
              />
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.2}>
              <PricingCard
                title="10-Session Pack"
                price="$1,000"
                description="The comprehensive intestinal health program."
                features={["10 full sessions", "FREE Colonic RX included", "Best per-session value", "Comprehensive cleansing", "Long-term gut health support"]}
                badge="Best Value"
                cta="Book 10-Pack"
              />
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-[#0F1419]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="mb-12">
            <SectionHeading label="Benefits" title="Why Colonic Hydrotherapy Works" />
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <AnimateOnScroll key={b.title} delay={i * 0.07}>
                <GlassCard hover className="p-6">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: "linear-gradient(135deg, #00D9FF20, #D4AF3720)" }}>
                    <b.icon className="w-5 h-5 text-[#00D9FF]" />
                  </div>
                  <h3 className="font-sora font-semibold text-[#F5F5F5] mb-2">{b.title}</h3>
                  <p className="text-sm text-[#A0AEC0]">{b.desc}</p>
                </GlassCard>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy section */}
      <section className="py-16 bg-[#080C10]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: "linear-gradient(135deg, #00D9FF20, #D4AF3720)" }}>
              <Shield className="w-7 h-7 text-[#00D9FF]" />
            </div>
            <h2 className="text-3xl font-sora font-bold text-[#F5F5F5] mb-4">Complete Privacy. Open-System Technology.</h2>
            <p className="text-[#A0AEC0] leading-relaxed mb-6">
              Unlike traditional colonics, our open-system technology puts you fully in control. You self-administer the slender rectal nozzle in complete privacy — there is no therapist in the room during your session. Waste exits through a closed tube system. No odor, no embarrassment.
            </p>
            <p className="text-sm text-[#A0AEC0]/70">
              Most patients return to normal activities immediately. Many come on their lunch break.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#0F1419]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="mb-10">
            <SectionHeading label="FAQ" title="Colonic Questions" />
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <div className="space-y-4">
              {[
                { q: "Does it hurt?", a: "No. The sensation is fullness — similar to needing to use the restroom. Some mild cramping during release is common. Most patients find it immediately relieving." },
                { q: "How should I prepare?", a: "Eat lightly the day before. Avoid heavy meats, dairy, and processed foods. Drink plenty of water. Arrive well-hydrated." },
                { q: "How many sessions do I need?", a: "A single session provides immediate detox benefit. A series of 10 sessions is recommended for comprehensive intestinal cleansing and long-term gut health improvement." },
                { q: "Can I go to work afterward?", a: "Yes. Most patients return to normal activities immediately after a 10-minute restroom break post-session." },
                { q: "Is colonic hydrotherapy safe?", a: "Yes, with modern equipment and physician oversight. We review your health history before every session. Colonics are not recommended for certain medical conditions — we screen for these." },
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
          <p className="text-xs text-[#A0AEC0]/60 text-center">IV-LYTES does not accept insurance. All services are cash-pay. These services have not been evaluated by the FDA and are not intended to diagnose, treat, cure, or prevent any disease.</p>
        </div>
      </div>

      <CTABanner title="Book Your Colonic" subtitle="Lunchtime-friendly. Complete privacy. Immediate results." cta="Book Your Colonic" />
    </>
  );
}
