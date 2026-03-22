import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import AnimateOnScroll from "@/components/shared/AnimateOnScroll";
import GlassCard from "@/components/ui/GlassCard";

const stats = [
  { value: "5+", label: "Years in Kingwood" },
  { value: "9", label: "IV Drip Formulas" },
  { value: "5", label: "Core Services" },
  { value: "100%", label: "Physician Supervised" },
];

export default function About() {
  return (
    <section className="py-24 bg-[#0B1120]" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Stats */}
          <AnimateOnScroll>
            <div>
              <SectionHeading
                label="About Us"
                title="Physician-Led Wellness in Kingwood"
                subtitle="Founded by Dr. Arif Shahzad MD, IV-LYTES brings evidence-based integrative medicine to Kingwood, TX. Every treatment is physician-supervised. Not delegated to staff."
                className="mb-10"
              />

              <div className="grid grid-cols-2 gap-4 mb-10">
                {stats.map((stat) => (
                  <div key={stat.label} className="p-4 rounded-xl bg-white/[0.04] border border-white/[0.07]">
                    <div
                      className="text-3xl font-sora font-bold mb-1"
                      style={{
                        background: "linear-gradient(135deg, #2DD4BF, #4FE5D3)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-sm text-[#9BA8BB]">{stat.label}</div>
                  </div>
                ))}
              </div>

              <Link
                href="/staff"
                className="inline-flex items-center gap-2 text-[#2DD4BF] hover:text-[#2DD4BF]/80 font-semibold text-sm transition-colors"
              >
                Meet Our Team
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimateOnScroll>

          {/* Right: Dr. Shahzad card */}
          <AnimateOnScroll delay={0.2}>
            <GlassCard className="p-8">
              <div className="flex items-start gap-5 mb-6">
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 border border-white/[0.10]">
                  <Image
                    src="/images/team/dr-shahzad.jpg"
                    alt="Dr. Arif Shahzad MD"
                    fill
                    className="object-cover object-top"
                    sizes="80px"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-sora font-bold text-[#F0EDE8]">Dr. Arif Shahzad MD</h3>
                  <p className="text-sm text-[#2DD4BF] mb-3">Owner & Medical Director</p>
                  <div className="flex flex-wrap gap-2">
                    {["MD", "BioTE Certified", "GLP-1 Specialist"].map((cred) => (
                      <span
                        key={cred}
                        className="px-2.5 py-0.5 text-xs rounded-full bg-[#2DD4BF]/10 border border-[#2DD4BF]/20 text-[#2DD4BF] font-medium"
                      >
                        {cred}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm text-[#9BA8BB] leading-relaxed">
                Dr. Shahzad opened IV-LYTES in Kingwood after 15+ years practicing medicine. He got tired of the 10-minute appointment model, where patients leave with a prescription and no real answers. At IV-LYTES, he personally oversees every protocol. Being cash-pay means no insurance company gets to decide what care you receive.
              </p>
              <div className="mt-6 pt-5 border-t border-white/[0.06]">
                <a
                  href="tel:2816669211"
                  className="text-sm text-[#9BA8BB] hover:text-[#2DD4BF] transition-colors"
                >
                  Free BioTE consultations: <span className="text-[#2DD4BF]">(281) 666-9211</span>
                </a>
              </div>
            </GlassCard>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
