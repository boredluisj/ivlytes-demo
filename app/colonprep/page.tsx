import type { Metadata } from "next";
import { AlertCircle, Phone } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import AnimateOnScroll from "@/components/shared/AnimateOnScroll";
import GlassCard from "@/components/ui/GlassCard";

export const metadata: Metadata = {
  title: "Colonoscopy Preparation Guide | IV-LYTES & Wellness",
  description: "Complete colonoscopy preparation protocol from IV-LYTES & Wellness. 5-day step-by-step guide for successful colonoscopy prep in Kingwood TX.",
};

const steps = [
  {
    timing: "5 Days Before Colonoscopy",
    color: "#2DD4BF",
    instructions: [
      "Take 2 tablespoons of Milk of Magnesia at bedtime — repeat each night for 5 nights.",
    ],
  },
  {
    timing: "3 Days Before Procedure",
    color: "#2DD4BF",
    instructions: [
      "Begin a low-fiber diet.",
      "Avoid all foods with nuts or seeds.",
    ],
  },
  {
    timing: "1 Day Before Procedure",
    color: "#2DD4BF",
    instructions: [
      "Begin clear liquid diet ONLY — no solid foods.",
      "At 5:00 PM: Take 3 Dulcolax laxative tablets with 8 oz of water.",
      "Important: Purchase laxative TABLETS — NOT Soft Gel.",
    ],
  },
  {
    timing: "Day of Colonoscopy",
    color: "#2DD4BF",
    instructions: [
      "Nothing by mouth starting 4 hours before your scheduled procedure.",
      "No gum, hard candy, or mints.",
      "No smoking tobacco, marijuana, or use of e-cigarettes the day of your procedure.",
      "Take your essential morning medications (heart, blood pressure, anti-seizure) with 2 oz (4 tablespoons) of water only.",
    ],
  },
];

export default function ColonPrepPage() {
  return (
    <section className="pt-24 pb-24 bg-[#0B1120]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="mb-12">
          <SectionHeading
            label="Patient Guide"
            title="Colonoscopy Preparation Protocol"
            subtitle="Follow these steps carefully for the most effective colonoscopy preparation. Questions? Call us at (281) 666-9211."
          />
        </AnimateOnScroll>

        <AnimateOnScroll className="mb-10">
          <GlassCard className="p-5 flex items-start gap-4">
            <AlertCircle className="w-5 h-5 text-[#2DD4BF] flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-[#F0EDE8] mb-1">Important Notice</p>
              <p className="text-sm text-[#9BA8BB] mb-2">
                This prep protocol is a general guide. Always follow the specific instructions provided by your gastroenterologist, as protocols may vary. Call your doctor&apos;s office or our clinic at{" "}
                <a href="tel:2816669211" className="text-[#2DD4BF]">(281) 666-9211</a> with any questions.
              </p>
              <p className="text-sm font-bold text-[#2DD4BF]">Make sure to purchase Laxative Tablets — NOT Soft Gel.</p>
            </div>
          </GlassCard>
        </AnimateOnScroll>

        <div className="space-y-6">
          {steps.map((step, i) => (
            <AnimateOnScroll key={step.timing} delay={i * 0.1}>
              <GlassCard className="overflow-hidden">
                <div className="h-1" style={{ background: `linear-gradient(to right, ${step.color}, ${step.color}40)` }} />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-sora font-bold text-[#0B1120]"
                      style={{ background: `linear-gradient(135deg, ${step.color}, ${step.color}90)` }}>
                      {i + 1}
                    </div>
                    <h2 className="text-lg font-sora font-semibold text-[#F0EDE8]">{step.timing}</h2>
                  </div>
                  <ul className="space-y-2.5">
                    {step.instructions.map((inst, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-[#9BA8BB]">
                        <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: step.color }} />
                        {inst}
                      </li>
                    ))}
                  </ul>
                </div>
              </GlassCard>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={0.4} className="mt-10">
          <div className="flex items-center justify-center gap-4 p-5 rounded-xl bg-white/[0.04] border border-white/[0.07]">
            <Phone className="w-5 h-5 text-[#2DD4BF]" />
            <p className="text-sm text-[#9BA8BB]">
              Questions about your prep? Call us: <a href="tel:2816669211" className="text-[#2DD4BF] font-semibold">(281) 666-9211</a>
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
