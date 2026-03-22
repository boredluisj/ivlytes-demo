import type { Metadata } from "next";
import Image from "next/image";
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
      <section className="pt-24 pb-16 bg-[#0B1120]">
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
                  <div className="relative w-36 h-36 rounded-2xl overflow-hidden mx-auto lg:mx-0 border border-white/[0.10] shadow-lg">
                    <Image
                      src="/images/team/dr-shahzad.jpg"
                      alt="Dr. Arif Shahzad MD"
                      fill
                      className="object-cover object-top"
                      sizes="144px"
                    />
                  </div>
                  <div className="mt-4 space-y-2">
                    {["MD", "BioTE Certified", "GLP-1 Specialist", "IV Therapy Expert"].map((cred) => (
                      <div key={cred} className="flex items-center justify-center lg:justify-start gap-1.5">
                        <Award className="w-3.5 h-3.5 text-[#2DD4BF]" />
                        <span className="text-xs text-[#2DD4BF] font-medium">{cred}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-sora font-bold text-[#F0EDE8] mb-1">Dr. Arif Shahzad MD</h2>
                  <p className="text-[#2DD4BF] font-medium mb-6">Owner &amp; Medical Director</p>
                  <div className="space-y-4 text-[#9BA8BB] leading-relaxed">
                    <p>
                      Dr. Shahzad opened IV-LYTES in Kingwood after 15+ years in medicine. He saw too many patients stuck in the revolving-door system: 10-minute appointments, a prescription, and no real answers. IV-LYTES is his answer to that.
                    </p>
                    <p>
                      Every patient gets a personal review before treatment. Every protocol is built around your labs, your goals, and your history. He does not run a one-size-fits-all clinic.
                    </p>
                    <p>
                      BioTE certified and trained in GLP-1 weight loss protocols. He runs IV therapy, hormone therapy, and aesthetics from one clinic because, in his view, your health does not fit into specialty buckets.
                    </p>
                  </div>
                  <div className="mt-6 pt-6 border-t border-white/[0.06] flex flex-wrap gap-3">
                    <a href="tel:2816669211" className="px-4 py-2 bg-[#2DD4BF]/10 border border-[#2DD4BF]/30 text-[#2DD4BF] text-sm font-medium rounded-lg hover:bg-[#2DD4BF] hover:text-[#0B1120] transition-all">
                      Free BioTE Consultation
                    </a>
                    <a href="https://www.vagaro.com/ivlytes/book-now" target="_blank" rel="noopener noreferrer"
                      className="px-4 py-2 border border-white/20 text-[#F0EDE8] text-sm font-medium rounded-lg hover:border-[#2DD4BF]/40 hover:text-[#2DD4BF] transition-all">
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
                  <p className="text-xs text-[#9BA8BB]/60 italic">
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
