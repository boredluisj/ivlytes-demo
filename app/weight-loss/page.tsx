import type { Metadata } from "next";
import Image from "next/image";
import { Check, ArrowRight, TrendingDown } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import AnimateOnScroll from "@/components/shared/AnimateOnScroll";
import GlassCard from "@/components/ui/GlassCard";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Medical Weight Loss Kingwood TX | Semaglutide & Tirzepatide | IV-LYTES",
  description:
    "Physician-supervised semaglutide and tirzepatide weight loss injections in Kingwood TX. Starting at $50/shot, no consultation fee. 10–20% body weight reduction.",
  openGraph: {
    title: "Medical Weight Loss | IV-LYTES & Wellness Kingwood TX",
    description: "GLP-1 injections from $50/shot. No consultation fee. Physician-supervised weight loss in Kingwood TX.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: "Medical Weight Loss Program",
  description: "GLP-1 injectable medications (Semaglutide, Tirzepatide) under physician supervision",
  provider: { "@type": "MedicalBusiness", name: "IV-LYTES & Wellness", telephone: "+12816669211" },
};

export default function WeightLossPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <Image src="/images/services/weight-loss.jpg" alt="Medical weight loss program" fill className="object-cover opacity-20" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F1419] via-[#0F1419]/80 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <AnimateOnScroll>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#00D9FF] mb-4">Medical Weight Loss</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sora font-bold text-[#F5F5F5] mb-4 leading-tight">
              Medical Weight Loss<br />
              <span style={{ background: "linear-gradient(135deg, #00D9FF, #D4AF37)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                That Actually Delivers
              </span>
            </h1>
            <p className="text-xl text-[#A0AEC0] max-w-xl mb-4">
              Semaglutide &amp; Tirzepatide — starting at $50/shot. No consultation fee. Physician supervision included.
            </p>
            <p className="text-base text-[#A0AEC0]/70 max-w-lg mb-8">
              Clinical trials show 10–20% body weight reduction. Patient example: 15 pounds in 3 months.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {["From $50/Shot", "No Consult Fee", "Physician Supervised", "GLP-1 Medications"].map((b) => (
                <span key={b} className="px-3 py-1 text-xs rounded-full bg-[#00D9FF]/10 border border-[#00D9FF]/20 text-[#00D9FF]">{b}</span>
              ))}
            </div>
            <a href="https://www.vagaro.com/ivlytes/book-now" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#00D9FF] text-[#0F1419] font-semibold rounded-xl hover:bg-[#00D9FF]/90 hover:shadow-[0_0_30px_rgba(0,217,255,0.4)] transition-all">
              Start Your Program <ArrowRight className="w-4 h-4" />
            </a>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Medication Comparison */}
      <section className="py-24 bg-[#080C10]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="mb-12">
            <SectionHeading label="Medications" title="Semaglutide vs. Tirzepatide" subtitle="Both are GLP-1 agonists — your physician will help determine which is best for your goals and health history." centered />
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Semaglutide",
                brand: "Ozempic / Wegovy",
                price: "From $50/shot",
                desc: "The original GLP-1 medication. Reduces appetite and slows gastric emptying, leading to significant, sustained weight loss.",
                features: ["Single GLP-1 receptor agonist", "Well-studied safety profile", "FDA-approved for weight management", "Weekly injection", "10–15% average body weight reduction"],
                color: "#00D9FF",
              },
              {
                name: "Tirzepatide",
                brand: "Mounjaro",
                price: "From $50/shot",
                desc: "Dual GLP-1 and GIP receptor agonist. The most effective weight loss medication available, showing up to 20% body weight reduction in trials.",
                features: ["Dual receptor agonist (GLP-1 + GIP)", "Superior efficacy in clinical trials", "Improved metabolic markers", "Weekly injection", "15–20% average body weight reduction"],
                color: "#D4AF37",
              },
            ].map((med, i) => (
              <AnimateOnScroll key={med.name} delay={i * 0.1}>
                <GlassCard className="p-8 h-full flex flex-col" hover>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-sora font-bold text-[#F5F5F5]">{med.name}</h3>
                      <p className="text-sm" style={{ color: med.color }}>{med.brand}</p>
                    </div>
                    <span className="text-lg font-sora font-bold" style={{ color: med.color }}>{med.price}</span>
                  </div>
                  <p className="text-sm text-[#A0AEC0] mb-6 leading-relaxed">{med.desc}</p>
                  <ul className="space-y-2.5 flex-grow">
                    {med.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-sm text-[#A0AEC0]">
                        <Check className="w-4 h-4 flex-shrink-0" style={{ color: med.color }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-24 bg-[#0F1419]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="mb-12 text-center">
            <SectionHeading label="Results" title="What to Expect" centered />
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            {[
              { stat: "10–20%", label: "Average Body Weight Reduction", sub: "Clinical trial results" },
              { stat: "$50", label: "Starting price per injection", sub: "No consultation fee" },
              { stat: "3 mo", label: "Patient example: 15 lbs lost", sub: "Individual results vary" },
            ].map((s, i) => (
              <AnimateOnScroll key={s.stat} delay={i * 0.1}>
                <div className="text-center p-6 rounded-xl bg-white/[0.04] border border-white/[0.07]">
                  <TrendingDown className="w-6 h-6 text-[#00D9FF] mx-auto mb-3" />
                  <div className="text-3xl font-sora font-bold mb-1" style={{ background: "linear-gradient(135deg, #00D9FF, #D4AF37)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{s.stat}</div>
                  <div className="text-sm font-medium text-[#F5F5F5] mb-1">{s.label}</div>
                  <div className="text-xs text-[#A0AEC0]">{s.sub}</div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ProLon Partner */}
      <section className="py-16 bg-[#080C10]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <div className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] mb-4">Partner Offer</div>
            <h2 className="text-2xl font-sora font-bold text-[#F5F5F5] mb-4">Save 20% on ProLon</h2>
            <p className="text-[#A0AEC0] mb-6">The ProLon 5-Day Fasting Mimicking Diet amplifies GLP-1 results by accelerating fat loss and cellular renewal. Our patients get 20% off through our partner link.</p>
            <a href="https://prolonlife.com/ivlytes" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#D4AF37] text-[#0F1419] font-semibold rounded-xl hover:bg-[#D4AF37]/90 transition-all">
              Save 20% on ProLon <ArrowRight className="w-4 h-4" />
            </a>
          </AnimateOnScroll>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#0F1419]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="mb-10"><SectionHeading label="FAQ" title="Weight Loss Questions" /></AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <div className="space-y-4">
              {[
                { q: "How quickly will I lose weight?", a: "Most patients see noticeable weight reduction within 4–8 weeks. Clinical trials show 10–20% total body weight reduction over 6–12 months of treatment." },
                { q: "Are GLP-1 medications safe?", a: "Yes, when administered under physician supervision. Dr. Shahzad reviews your complete health history before prescribing. Common side effects include nausea and constipation, especially early in treatment." },
                { q: "Who is not a candidate for GLP-1 therapy?", a: "GLP-1 medications are contraindicated for patients who are pregnant, have a personal or family history of medullary thyroid cancer or MEN2 syndrome, or have had pancreatitis." },
                { q: "Do I need to diet and exercise too?", a: "GLP-1 medications significantly reduce appetite and support weight loss even without dramatic lifestyle changes. That said, combining medication with improved nutrition and activity amplifies and sustains results." },
                { q: "What happens when I stop the medication?", a: "Weight regain is common when stopping GLP-1 medications. We'll work with you on a long-term strategy that incorporates lifestyle modifications to sustain your results." },
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
          <p className="text-xs text-[#A0AEC0]/60 text-center">IV-LYTES does not accept insurance. All services are cash-pay. These services have not been evaluated by the FDA and are not intended to diagnose, treat, cure, or prevent any disease. Individual results vary. Please consult your physician.</p>
        </div>
      </div>

      <CTABanner title="Start Your Weight Loss Journey" subtitle="No consultation fee. $50/shot. Physician-supervised program designed around your goals." cta="Book Your First Appointment" />
    </>
  );
}
