import type { Metadata } from "next";
import { AlertTriangle, CheckCircle, Clock } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import AnimateOnScroll from "@/components/shared/AnimateOnScroll";
import GlassCard from "@/components/ui/GlassCard";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "SkinPen Pre & Post Care Instructions | IV-LYTES & Wellness",
  description: "Complete pre and post procedure instructions for SkinPen microneedling at IV-LYTES & Wellness in Kingwood TX.",
};

export default function SkinPenCarePage() {
  return (
    <>
      <section className="pt-24 pb-24 bg-[#0B1120]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="mb-12">
            <SectionHeading
              label="SkinPen Microneedling"
              title="Pre & Post Procedure Instructions"
              subtitle="Please read these instructions carefully before and after your treatment. Questions? Call (281) 666-9211."
            />
          </AnimateOnScroll>

          {/* PRE-PROCEDURE */}
          <AnimateOnScroll className="mb-8">
            <GlassCard className="overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-[#2DD4BF] to-[#2DD4BF]/40" />
              <div className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#2DD4BF]/10 border border-[#2DD4BF]/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-[#2DD4BF]" />
                  </div>
                  <h2 className="text-xl font-sora font-bold text-[#F0EDE8]">Pre-Procedure Instructions & Precautions</h2>
                </div>
                <ul className="space-y-3">
                  {[
                    "Avoid sun exposure and sunburns 24 hours prior to treatment.",
                    "Discontinue use of retinoids 12 hours prior to treatment.",
                    "You should not have an active breakout, active cold sores, or open lesions. If this occurs, your treatment will need to be rescheduled.",
                    "Allow at least 12 hours after autoimmune therapies before having treatment.",
                    "Wait 6 months following isotretinoin (Accutane) use.",
                    "Skin types Fitzpatrick IV–VI: pigment may darken prior to lightening.",
                    "Wait at least 48 hours before or after Botox treatment.",
                    "Wait at least 1 week before or after any fillers (Juvederm, Restylane, etc.).",
                    "Wait at least 1 month before or after laser treatments (IPL, VBeam), chemical peels (Vitalize, Rejuvenate), or microdermabrasion.",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[#9BA8BB]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF] mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 p-4 rounded-xl bg-[#2DD4BF]/[0.06] border border-[#2DD4BF]/20">
                  <p className="text-sm font-semibold text-[#F0EDE8] mb-2">Day of Appointment — Do NOT arrive with:</p>
                  <p className="text-sm text-[#9BA8BB]">Lotions, makeup, perfume/cologne, aftershave, ointments, or sunscreens</p>
                </div>
              </div>
            </GlassCard>
          </AnimateOnScroll>

          {/* POST-PROCEDURE */}
          <AnimateOnScroll className="mb-8">
            <GlassCard className="overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-[#2DD4BF] to-[#2DD4BF]/40" />
              <div className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#2DD4BF]/10 border border-[#2DD4BF]/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-[#2DD4BF]" />
                  </div>
                  <h2 className="text-xl font-sora font-bold text-[#F0EDE8]">Post-Procedure Care — First 24 Hours</h2>
                </div>

                <div className="mb-6">
                  <p className="text-sm font-semibold text-[#F0EDE8] mb-3">In the office:</p>
                  <ul className="space-y-2">
                    {[
                      "Treatment area will be wiped with sterile saline.",
                      "A medical professional will review at-home care instructions with you.",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-[#9BA8BB]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF] mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <p className="text-sm font-semibold text-[#F0EDE8] mb-3">At home — day-by-day:</p>
                  <div className="space-y-3">
                    {[
                      { day: "Night of treatment", instruction: "DO NOT cleanse the treatment area. You may rinse with tepid water using fingertips ONLY." },
                      { day: "Day 2 & 3", instruction: "Cleanse with a gentle cleanser (SkinCeuticals Gentle Cleanser, Neutrogena Ultra Gentle Daily Cleanser, or Cetaphil). Apply HydraPeptide Gel. Protect with SPF 30. Repeat as needed." },
                      { day: "Day 4", instruction: "Resume your normal skincare routine." },
                    ].map((d) => (
                      <div key={d.day} className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                        <span className="text-xs font-semibold text-[#2DD4BF] block mb-1">{d.day}</span>
                        <span className="text-sm text-[#9BA8BB]">{d.instruction}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold text-[#F0EDE8] mb-3">Additional restrictions:</p>
                  <ul className="space-y-2">
                    {[
                      "No sun exposure between Days 1 and 3.",
                      "No exercise between Days 1 and 3.",
                      "Do NOT apply hydrocortisone creams to the treatment area within the first 48 hours.",
                      "Do NOT have waxing done on the treatment area for 2 weeks.",
                      "Do NOT have dermal fillers, Botox, laser, or chemical peels on the treatment area for 30 days.",
                      "Do NOT pick any flaking skin.",
                      "Do NOT apply makeup until 24 hours after treatment.",
                      "Wait at least 1 week before using a retinoid.",
                      "You may experience peeling 3–5 days after treatment — this is normal.",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-[#9BA8BB]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF] mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </GlassCard>
          </AnimateOnScroll>

          {/* WHAT TO EXPECT */}
          <AnimateOnScroll className="mb-8">
            <h2 className="text-lg font-sora font-semibold text-[#F0EDE8] mb-4">What to Expect Day by Day</h2>
            <div className="space-y-3">
              {[
                { day: "Day 0 (day of procedure)", expect: "Moderate redness, tightness, sunburned sensation. Apply hyaluronic acid only as needed. Nothing else on face." },
                { day: "Day 1", expect: "Mild to moderate redness and swelling, similar to a sunburn. No sunscreen or makeup." },
                { day: "Day 2", expect: "Some redness and swelling may be present. You may apply sunscreen and makeup." },
                { day: "Day 3", expect: "Most redness, bruising, and swelling almost gone." },
                { day: "Day 4", expect: "Return to normal appearance without makeup." },
              ].map((d, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.04] border border-white/[0.07]">
                  <div className="w-8 h-8 rounded-full bg-[#2DD4BF]/10 border border-[#2DD4BF]/20 flex items-center justify-center flex-shrink-0 text-xs font-bold text-[#2DD4BF]">{i}</div>
                  <div>
                    <p className="text-sm font-semibold text-[#F0EDE8] mb-0.5">{d.day}</p>
                    <p className="text-sm text-[#9BA8BB]">{d.expect}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <div className="p-5 rounded-xl bg-[#2DD4BF]/[0.06] border border-[#2DD4BF]/20 text-center">
              <p className="text-sm text-[#9BA8BB]">Questions about your recovery? Call us: <a href="tel:2816669211" className="text-[#2DD4BF] font-semibold">(281) 666-9211</a></p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
      <CTABanner title="Book Your SkinPen Session" subtitle="FDA-cleared. Real results. Kingwood TX." cta="Book Microneedling" />
    </>
  );
}
