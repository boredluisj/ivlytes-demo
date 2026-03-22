import type { Metadata } from "next";
import { AlertCircle } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import AnimateOnScroll from "@/components/shared/AnimateOnScroll";
import GlassCard from "@/components/ui/GlassCard";

export const metadata: Metadata = {
  title: "Wegovy (Semaglutide) Patient Guide | IV-LYTES & Wellness",
  description: "How to use Wegovy (semaglutide 2.4mg) for weight loss — dosing schedule, injection instructions, side effects. From IV-LYTES & Wellness in Kingwood TX.",
};

export default function WegovyGuidePage() {
  return (
    <section className="pt-24 pb-24 bg-[#0B1120]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="mb-12">
          <SectionHeading
            label="Patient Guide"
            title="Wegovy (Semaglutide) Quick Start"
            subtitle="Getting started with your Wegovy weight loss program. Follow your physician's specific instructions."
          />
        </AnimateOnScroll>

        {/* Dosing Schedule */}
        <AnimateOnScroll className="mb-8">
          <GlassCard className="overflow-hidden">
            <div className="h-1 bg-gradient-to-r from-[#2DD4BF] to-[#2DD4BF]/40" />
            <div className="p-8">
              <h2 className="text-xl font-sora font-bold text-[#F0EDE8] mb-6">5-Month Dosing Schedule</h2>
              <p className="text-sm text-[#9BA8BB] mb-6">Wegovy is taken <strong className="text-[#F0EDE8]">once weekly, on the same day</strong>, at any time of day, with or without food.</p>
              <div className="space-y-3">
                {[
                  { month: "Month 1", dose: "0.25 mg/week", note: "Starting dose" },
                  { month: "Month 2", dose: "0.5 mg/week", note: "First increase" },
                  { month: "Month 3", dose: "1 mg/week", note: "Continue increasing" },
                  { month: "Month 4", dose: "1.7 mg/week", note: "Almost at full dose" },
                  { month: "Month 5+", dose: "2.4 mg/week", note: "Full maintenance dose" },
                ].map((d, i) => (
                  <div key={i} className={`flex items-center justify-between p-4 rounded-xl border ${d.month === "Month 5+" ? "bg-[#2DD4BF]/[0.08] border-[#2DD4BF]/30" : "bg-white/[0.04] border-white/[0.07]"}`}>
                    <div>
                      <span className="text-sm font-semibold text-[#F0EDE8]">{d.month}</span>
                      <span className="text-xs text-[#9BA8BB] ml-2">{d.note}</span>
                    </div>
                    <span className="text-sm font-bold text-[#2DD4BF]">{d.dose}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#2DD4BF]/[0.06] border border-[#2DD4BF]/20">
                  <p className="text-sm font-semibold text-[#F0EDE8] mb-1">Changing your dose day</p>
                  <p className="text-sm text-[#9BA8BB]">You may change the day as long as your last dose was given 2 or more days before.</p>
                </div>
                <div className="p-4 rounded-xl bg-[#2DD4BF]/[0.06] border border-[#2DD4BF]/20">
                  <p className="text-sm font-semibold text-[#F0EDE8] mb-1">Missed a dose?</p>
                  <p className="text-sm text-[#9BA8BB]">If your next dose is more than 2 days away, take the missed dose ASAP. If less than 2 days away, skip it and resume your regular schedule.</p>
                </div>
              </div>
            </div>
          </GlassCard>
        </AnimateOnScroll>

        {/* Injection */}
        <AnimateOnScroll className="mb-8">
          <GlassCard className="overflow-hidden">
            <div className="h-1 bg-gradient-to-r from-[#2DD4BF] to-[#2DD4BF]/40" />
            <div className="p-8">
              <h2 className="text-xl font-sora font-bold text-[#F0EDE8] mb-6">How to Inject</h2>
              <div className="space-y-4 mb-6">
                {[
                  { step: "1", title: "Gather your supplies", desc: "Your Wegovy pen, 1 gauze pad or cotton ball, 1 alcohol swab or soap and water, and 1 disposal container." },
                  { step: "2", title: "Check your pen", desc: "Do not use if the pen appears used, broken, or dropped. Confirm medicine is clear and colorless. Check expiration date." },
                  { step: "3", title: "Choose your injection site", desc: "Stomach (2 inches away from belly button), upper legs (front of thighs), or upper arms. Rotate sites — do not inject into the same spot each time. Clean site with alcohol swab." },
                  { step: "4", title: "Inject", desc: "Pull pen cap straight off. Push pen firmly against skin to start. You will hear 2 clicks during injection (~10 seconds). Click 1 = started, Click 2 = ongoing. Keep holding until yellow bar stops moving, then slowly lift the pen away." },
                  { step: "5", title: "Dispose", desc: "Safely throw away the pen right after use in an FDA-cleared sharps disposal container. Do not place in household trash." },
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
              {["Nausea", "Upset stomach", "Diarrhea", "Dizziness", "Vomiting", "Constipation", "Headache", "Fatigue", "Heartburn"].map((s) => (
                <span key={s} className="px-3 py-1 text-xs rounded-full bg-white/[0.04] border border-white/[0.07] text-[#9BA8BB]">{s}</span>
              ))}
            </div>
            <p className="text-sm font-semibold text-[#F0EDE8] mb-2">Tips for managing nausea:</p>
            <ul className="space-y-1">
              {["Eat bland, low-fat foods (crackers, toast, rice)", "Eat foods that contain water (soup, gelatin)", "Eat more slowly", "Don't lie down after you eat", "Go outside and get some fresh air"].map((tip) => (
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
            <p className="text-sm text-[#9BA8BB]">Questions about your Wegovy program?</p>
            <a href="tel:2816669211" className="text-sm font-semibold text-[#2DD4BF] hover:underline whitespace-nowrap">(281) 666-9211</a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
