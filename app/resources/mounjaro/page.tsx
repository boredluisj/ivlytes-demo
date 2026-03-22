import type { Metadata } from "next";
import { AlertCircle, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import AnimateOnScroll from "@/components/shared/AnimateOnScroll";
import GlassCard from "@/components/ui/GlassCard";

export const metadata: Metadata = {
  title: "Mounjaro (Tirzepatide) Patient Guide | IV-LYTES & Wellness",
  description: "How to use Mounjaro (tirzepatide) — dosing schedule, injection instructions, side effects, and storage. From IV-LYTES & Wellness in Kingwood TX.",
};

export default function MounjaroGuidePage() {
  return (
    <section className="pt-24 pb-24 bg-[#0B1120]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="mb-12">
          <SectionHeading
            label="Patient Guide"
            title="Mounjaro (Tirzepatide) Quick Start"
            subtitle="Everything you need to know about starting your tirzepatide program. Follow your physician's specific instructions."
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
                  <div className="text-2xl font-sora font-bold text-[#2DD4BF]">2.5 mg</div>
                  <div className="text-xs text-[#9BA8BB] mt-1">Weeks 1–4 (start)</div>
                </div>
                <ArrowRight className="w-5 h-5 text-[#2DD4BF] flex-shrink-0" />
                <div className="flex-1 min-w-0 p-4 rounded-xl bg-white/[0.04] border border-white/[0.07] text-center">
                  <div className="text-2xl font-sora font-bold text-[#2DD4BF]">5 mg</div>
                  <div className="text-xs text-[#9BA8BB] mt-1">Weeks 5+ (minimum 4 weeks)</div>
                </div>
              </div>
              <p className="text-sm text-[#9BA8BB] mb-4">Additional doses available: <strong className="text-[#F0EDE8]">7.5 mg, 10 mg, 12.5 mg, 15 mg</strong>. Your physician will determine the right dose for you. Mounjaro is taken <strong className="text-[#F0EDE8]">once weekly, on the same day</strong>.</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div className="p-4 rounded-xl bg-[#2DD4BF]/[0.06] border border-[#2DD4BF]/20">
                  <p className="text-sm font-semibold text-[#F0EDE8] mb-1">Changing your dose day</p>
                  <p className="text-sm text-[#9BA8BB]">You may change the day as long as at least 3 days (72 hours) have passed since your last dose.</p>
                </div>
                <div className="p-4 rounded-xl bg-[#2DD4BF]/[0.06] border border-[#2DD4BF]/20">
                  <p className="text-sm font-semibold text-[#F0EDE8] mb-1">Missed a dose?</p>
                  <p className="text-sm text-[#9BA8BB]">Take within 4 days (96 hours). If more than 4 days have passed, skip and resume your regular schedule. Do not take 2 doses within 3 days of each other.</p>
                </div>
              </div>
            </div>
          </GlassCard>
        </AnimateOnScroll>

        {/* How to Inject */}
        <AnimateOnScroll className="mb-8">
          <GlassCard className="overflow-hidden">
            <div className="h-1 bg-gradient-to-r from-[#2DD4BF] to-[#2DD4BF]/40" />
            <div className="p-8">
              <h2 className="text-xl font-sora font-bold text-[#F0EDE8] mb-6">How to Inject</h2>
              <div className="space-y-4 mb-6">
                {[
                  { step: "1", title: "Choose your injection site", desc: "Stomach or thigh (self-injection). Back of the upper arm (someone else injects). Your physician can help you decide." },
                  { step: "2", title: "Pull off the gray base cap", desc: "Make sure the pen is Locked. Pull the gray base cap off and discard. Do not put it back on or touch the needle." },
                  { step: "3", title: "Place on skin, then Unlock", desc: "Place the clear base flat against your skin at the injection site. Unlock by turning the lock ring." },
                  { step: "4", title: "Press and hold up to 10 seconds", desc: "Press and hold the purple injection button. Listen for 2 clicks: 1st click = injection started, 2nd click = injection completed. The gray plunger will be visible when done." },
                  { step: "5", title: "After your injection", desc: "Place the used pen in a sharps container immediately." },
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

        {/* Storage */}
        <AnimateOnScroll className="mb-8">
          <GlassCard className="p-8">
            <h2 className="text-xl font-sora font-bold text-[#F0EDE8] mb-4">Storage</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/[0.04] border border-white/[0.07]">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#2DD4BF] mb-1">Standard storage</p>
                <p className="text-sm text-[#9BA8BB]">Store in original carton. Refrigerate at 36°F–46°F. Do not freeze.</p>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.04] border border-white/[0.07]">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#2DD4BF] mb-1">Traveling</p>
                <p className="text-sm text-[#9BA8BB]">Can be kept out of refrigerator for up to 21 days. Keep below 86°F (30°C).</p>
              </div>
            </div>
            <p className="text-xs text-[#9BA8BB]/60 mt-4">The pen contains glass parts. If dropped on a hard surface, do not use it — use a new pen instead.</p>
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
              {["Nausea", "Diarrhea", "Decreased appetite", "Vomiting", "Constipation", "Indigestion", "Stomach pain"].map((s) => (
                <span key={s} className="px-3 py-1 text-xs rounded-full bg-white/[0.04] border border-white/[0.07] text-[#9BA8BB]">{s}</span>
              ))}
            </div>
            <p className="text-sm text-[#9BA8BB] mb-3">Most nausea and GI events occur while the dose is being increased and typically decrease over time.</p>
            <p className="text-sm font-semibold text-[#F0EDE8] mb-2">Tips for managing nausea:</p>
            <ul className="space-y-1">
              {["Eat smaller meals", "Avoid fat or fatty foods", "Try bland foods like toast, crackers, or rice", "Stop eating when you feel full"].map((tip) => (
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
            <p className="text-sm text-[#9BA8BB]">Questions about your Mounjaro program?</p>
            <a href="tel:2816669211" className="text-sm font-semibold text-[#2DD4BF] hover:underline whitespace-nowrap">(281) 666-9211</a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
