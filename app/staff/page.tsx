import type { Metadata } from "next";
import { Award } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import AnimateOnScroll from "@/components/shared/AnimateOnScroll";
import GlassCard from "@/components/ui/GlassCard";
import AvatarPlaceholder from "@/components/shared/AvatarPlaceholder";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Our Team | IV-LYTES & Wellness Kingwood TX",
  description: "Meet Dr. Arif Shahzad MD — Owner and Medical Director of IV-LYTES & Wellness in Kingwood TX. Physician-supervised IV therapy, hormone therapy, and medical weight loss.",
  openGraph: {
    title: "Our Team | IV-LYTES & Wellness",
    description: "Physician-supervised care led by Dr. Arif Shahzad MD in Kingwood TX.",
  },
};

export default function StaffPage() {
  return (
    <>
      <section className="pt-24 pb-16 bg-[#0F1419]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="mb-16">
            <SectionHeading
              label="Our Team"
              title="Physician-Led Care"
              subtitle="Every treatment at IV-LYTES is supervised by Dr. Arif Shahzad MD. Physician oversight isn't a marketing claim — it's how we operate every single day."
            />
          </AnimateOnScroll>

          {/* Dr. Shahzad */}
          <AnimateOnScroll>
            <GlassCard className="p-8 lg:p-12 mb-8 max-w-4xl">
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="flex-shrink-0 text-center lg:text-left">
                  {/* TODO: client to provide headshot — replace AvatarPlaceholder with real photo */}
                  <AvatarPlaceholder initials="AS" size="xl" className="mx-auto lg:mx-0" />
                  <div className="mt-4 space-y-2">
                    {["MD", "BioTE Certified", "GLP-1 Specialist", "IV Therapy Expert"].map((cred) => (
                      <div key={cred} className="flex items-center justify-center lg:justify-start gap-1.5">
                        <Award className="w-3.5 h-3.5 text-[#D4AF37]" />
                        <span className="text-xs text-[#D4AF37] font-medium">{cred}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-sora font-bold text-[#F5F5F5] mb-1">Dr. Arif Shahzad MD</h2>
                  <p className="text-[#00D9FF] font-medium mb-6">Owner &amp; Medical Director</p>
                  <div className="space-y-4 text-[#A0AEC0] leading-relaxed">
                    <p>
                      Dr. Shahzad founded IV-LYTES &amp; Wellness with a singular mission: bring physician-level integrative
                      medicine to Kingwood, TX. With deep expertise in IV therapy, bioidentical hormone replacement, and
                      GLP-1 medically supervised weight loss, he provides the kind of individualized care that the standard
                      medical system rarely offers.
                    </p>
                    <p>
                      His approach is evidence-based and results-oriented. Every patient receives a thorough health history
                      review before treatment. Every protocol is designed around your specific labs, goals, and health
                      history — not a one-size-fits-all menu.
                    </p>
                    <p>
                      Dr. Shahzad is BioTE certified and a GLP-1 specialist, bringing advanced training in bioidentical
                      hormone replacement and medical weight loss to a community that has been underserved by these
                      emerging therapies.
                    </p>
                  </div>
                  <div className="mt-6 pt-6 border-t border-white/[0.06] flex flex-wrap gap-3">
                    <a href="tel:2816669211" className="px-4 py-2 bg-[#00D9FF]/10 border border-[#00D9FF]/30 text-[#00D9FF] text-sm font-medium rounded-lg hover:bg-[#00D9FF] hover:text-[#0F1419] transition-all">
                      Free BioTE Consultation
                    </a>
                    <a href="https://www.vagaro.com/ivlytes/book-now" target="_blank" rel="noopener noreferrer"
                      className="px-4 py-2 border border-white/20 text-[#F5F5F5] text-sm font-medium rounded-lg hover:border-[#00D9FF]/40 hover:text-[#00D9FF] transition-all">
                      Book Appointment
                    </a>
                  </div>
                </div>
              </div>
            </GlassCard>
          </AnimateOnScroll>

          {/* Placeholder staff */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2].map((i) => (
              <AnimateOnScroll key={i} delay={i * 0.1}>
                <GlassCard className="p-6 text-center">
                  <AvatarPlaceholder initials="?" size="lg" className="mx-auto mb-4 opacity-40" />
                  <div className="h-4 bg-white/[0.06] rounded mb-2 mx-8" />
                  <div className="h-3 bg-white/[0.04] rounded mb-4 mx-12" />
                  <p className="text-xs text-[#A0AEC0]/60 italic">
                    {/* TODO: client to provide staff names, photos, and bios */}
                    Staff member information coming soon.
                  </p>
                </GlassCard>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="Meet the Team In Person" subtitle="Book an appointment and experience physician-supervised care firsthand." cta="Book Your Appointment" />
    </>
  );
}
