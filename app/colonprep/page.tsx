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
    timing: "5 Days Before",
    color: "#00D9FF",
    instructions: [
      "Take 2 tablespoons of Milk of Magnesia at bedtime",
      "Begin reducing fiber intake gradually",
      "Stay well hydrated — at least 8 glasses of water daily",
      "Avoid nuts, seeds, and high-fiber foods",
    ],
  },
  {
    timing: "3 Days Before",
    color: "#D4AF37",
    instructions: [
      "Switch to a low-fiber diet",
      "Avoid raw fruits and vegetables",
      "No nuts, seeds, popcorn, or whole grains",
      "White bread, white rice, eggs, and cooked vegetables are fine",
      "Continue drinking plenty of fluids",
    ],
  },
  {
    timing: "1 Day Before",
    color: "#00D9FF",
    instructions: [
      "Clear liquid diet only — no solid foods",
      "Allowed: water, clear broth, apple juice, sports drinks, black coffee/tea, gelatin",
      "At 5:00 PM: Take 3 Dulcolax (bisacodyl) tablets",
      "Drink additional clear fluids throughout the day",
      "No red, orange, or purple liquids",
    ],
  },
  {
    timing: "Day of Procedure",
    color: "#D4AF37",
    instructions: [
      "Fast for 4 hours before your procedure time",
      "You may take essential medications with a small sip of water",
      "Arrange for someone to drive you home — you cannot drive after sedation",
      "Arrive 15–20 minutes before your scheduled appointment",
      "Leave jewelry and valuables at home",
    ],
  },
];

export default function ColonPrepPage() {
  return (
    <section className="pt-24 pb-24 bg-[#0F1419]">
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
            <AlertCircle className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-[#F5F5F5] mb-1">Important Notice</p>
              <p className="text-sm text-[#A0AEC0]">
                This prep protocol is a general guide. Always follow the specific instructions provided by your gastroenterologist, as protocols may vary. Call your doctor&apos;s office or our clinic at{" "}
                <a href="tel:2816669211" className="text-[#00D9FF]">(281) 666-9211</a> with any questions.
              </p>
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
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-sora font-bold text-[#0F1419]"
                      style={{ background: `linear-gradient(135deg, ${step.color}, ${step.color}90)` }}>
                      {i + 1}
                    </div>
                    <h2 className="text-lg font-sora font-semibold text-[#F5F5F5]">{step.timing}</h2>
                  </div>
                  <ul className="space-y-2.5">
                    {step.instructions.map((inst, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-[#A0AEC0]">
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
            <Phone className="w-5 h-5 text-[#00D9FF]" />
            <p className="text-sm text-[#A0AEC0]">
              Questions about your prep? Call us: <a href="tel:2816669211" className="text-[#00D9FF] font-semibold">(281) 666-9211</a>
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
