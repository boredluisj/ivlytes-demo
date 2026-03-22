import type { Metadata } from "next";
import { AlertCircle, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import AnimateOnScroll from "@/components/shared/AnimateOnScroll";
import GlassCard from "@/components/ui/GlassCard";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ozempic (Semaglutide) Patient Guide | IV-LYTES & Wellness",
  description: "How to take Ozempic (semaglutide) — dosing schedule, injection instructions, side effects, and storage. From IV-LYTES & Wellness in Kingwood TX.",
};

export default function OzempicGuidePage() {
  return (
    <section className="pt-24 pb-24 bg-[#0B1120]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="mb-12">
          <SectionHeading
            label="Patient Guide"
            title="Ozempic (Semaglutide) Quick Start"
            subtitle="Everything you need to know about starting your semaglutide program. Always follow your physician's specific instructions."
          />
        </AnimateOnScroll>

        {/* Dosing Schedule */}
        <AnimateOnScroll className="mb-8">
          <GlassCard className="overflow-hidden">
            <div className="h-1 bg-gradient-to-r from-[#2DD4BF] to-[#2DD4BF]/40" />
            <div className="p-8">
              <h2 className="text-xl font-sora font-bold text-[#F0EDE8] mb-6">Dosing Schedule</h2>
              <div className="flex items-center gap-4 mb-6 flex-wrap">
                <div className="flex-1 min-w-0 p-4 rounded-xl bg-white/[0.04] border border-white/[0.07] text-center">
                  <div className="text-2xl font-sora font-bold text-[#2DD4BF]">0.25 mg</div>
                  <div className="text-xs text-[#9BA8BB] mt-1">Weeks 1–4 (start)</div>
                </div>
                <ArrowRight className="w-5 h-5 text-[#2DD4BF] flex-shrink-0" />
                <div className="flex-1 min-w-0 p-4 rounded-xl bg-white/[0.04] border border-white/[0.07] text-center">
                  <div className="text-2xl font-sora font-bold text-[#2DD4BF]">0.5 mg</div>
                  <div className="text-xs text-[#9BA8BB] mt-1">Week 5+ (maintenance)</div>
                </div>
              </div>
              <p className="text-sm text-[#9BA8BB] mb-4">Your physician may increase to 1 mg if additional blood sugar control is needed. Ozempic is taken <strong className="text-[#F0EDE8]">once weekly, on the same day</strong>, with or without food.</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div className="p-4 rounded-xl bg-[#2DD4BF]/[0.06] border border-[#2DD4BF]/20">
                  <p className="text-sm font-semibold text-[#F0EDE8] mb-1">Changing your dose day</p>
                  <p className="text-sm text-[#9BA8BB]">You may change the day as long as your last dose was given 2 or more days before.</p>
                </div>
                <div className="p-4 rounded-xl bg-[#2DD4BF]/[0.06] border border-[#2DD4BF]/20">
                  <p className="text-sm font-semibold text-[#F0EDE8] mb-1">Missed a dose?</p>
                  <p className="text-sm text-[#9BA8BB]">Take as soon as possible within 5 days. If more than 5 days have passed, skip and resume your regular schedule.</p>
                </div>
              </div>
            </div>
          </GlassCard>
        </AnimateOnScroll>

        {/* Injection Instructions */}
        <AnimateOnScroll className="mb-8">
          <GlassCard className="overflow-hidden">
            <div className="h-1 bg-gradient-to-r from-[#2DD4BF] to-[#2DD4BF]/40" />
            <div className="p-8">
              <h2 className="text-xl font-sora font-bold text-[#F0EDE8] mb-6">How to Inject</h2>
              <div className="space-y-4 mb-6">
                {[
                  { step: "1", title: "Prepare your pen", desc: "Read the label — confirm it contains Ozempic. The medicine should be clear and colorless." },
                  { step: "2", title: "Attach a new needle", desc: "Tear off the paper tab. Push and turn the needle until tight. Pull off both needle caps." },
                  { step: "3", title: "Check the flow", desc: "Turn dose selector to the flow check symbol. Press dose button until counter shows 0. Confirm a drop appears at the needle tip." },
                  { step: "4", title: "Select your dose", desc: "Turn the dose selector to your prescribed dose (0.25 mg or 0.5 mg)." },
                  { step: "5", title: "Inject", desc: "Insert needle into your skin. Press and hold dose button. After counter reaches 0, slowly count to 6. Remove needle." },
                  { step: "6", title: "After your injection", desc: "Remove needle and place in a sharps container. Put the pen cap back on." },
                ].map((s) => (
                  <div key={s.step} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#2DD4BF]/10 border border-[#2DD4BF]/20 flex items-center justify-center flex-shrink-0 text-sm font-bold text-[#2DD4BF]">{s.step}</div>
                    <div>
                      <p className="text-sm font-semibold text-[#F0EDE8]">{s.title}</p>
                      <p className="text-sm text-[#9BA8BB]">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 rounded-xl bg-white/[0.04] border border-white/[0.07]">
                <p className="text-sm font-semibold text-[#F0EDE8] mb-1">Injection sites</p>
                <p className="text-sm text-[#9BA8BB]">Stomach (abdomen), thigh, or upper arm. Rotate sites with each injection — do not use the same spot twice in a row. Do not inject into muscle or vein.</p>
              </div>
            </div>
          </GlassCard>
        </AnimateOnScroll>

        {/* Storage */}
        <AnimateOnScroll className="mb-8">
          <GlassCard className="p-8">
            <h2 className="text-xl font-sora font-bold text-[#F0EDE8] mb-4">Storage</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/[0.04] border border-white/[0.07]">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#2DD4BF] mb-1">Before first use</p>
                <p className="text-sm text-[#9BA8BB]">Refrigerate at 36°F–46°F until expiration date.</p>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.04] border border-white/[0.07]">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#2DD4BF] mb-1">After first use</p>
                <p className="text-sm text-[#9BA8BB]">Refrigerate OR room temp 59°F–86°F for up to 56 days.</p>
              </div>
            </div>
          </GlassCard>
        </AnimateOnScroll>

        {/* Side Effects */}
        <AnimateOnScroll className="mb-8">
          <GlassCard className="p-8">
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="w-5 h-5 text-[#2DD4BF]" />
              <h2 className="text-xl font-sora font-bold text-[#F0EDE8]">Common Side Effects</h2>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {["Nausea", "Diarrhea", "Vomiting", "Stomach pain", "Constipation"].map((s) => (
                <span key={s} className="px-3 py-1 text-xs rounded-full bg-white/[0.04] border border-white/[0.07] text-[#9BA8BB]">{s}</span>
              ))}
            </div>
            <p className="text-sm font-semibold text-[#F0EDE8] mb-2">If you experience nausea:</p>
            <ul className="space-y-1">
              {["Eat smaller, more frequent meals", "Eat light and bland foods (crackers, plain bread)", "Avoid fried, greasy, or sweet foods", "Drink clear or ice-cold drinks"].map((tip) => (
                <li key={tip} className="flex items-start gap-2 text-sm text-[#9BA8BB]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF] mt-2 flex-shrink-0" />
                  {tip}
                </li>
              ))}
            </ul>
          </GlassCard>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <div className="p-5 rounded-xl bg-[#2DD4BF]/[0.06] border border-[#2DD4BF]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-[#9BA8BB]">Questions about your Ozempic program?</p>
            <a href="tel:2816669211" className="text-sm font-semibold text-[#2DD4BF] hover:underline whitespace-nowrap">(281) 666-9211</a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
