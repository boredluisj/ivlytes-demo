import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import AvatarPlaceholder from "@/components/shared/AvatarPlaceholder";
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
    <section className="py-24 bg-[#0F1419]" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Stats */}
          <AnimateOnScroll>
            <div>
              <SectionHeading
                label="About Us"
                title="Physician-Led Wellness in Kingwood"
                subtitle="Founded by Dr. Arif Shahzad MD, IV-LYTES brings evidence-based integrative medicine to Kingwood, TX. Every treatment is physician-supervised — not delegated to staff."
                className="mb-10"
              />

              <div className="grid grid-cols-2 gap-4 mb-10">
                {stats.map((stat) => (
                  <div key={stat.label} className="p-4 rounded-xl bg-white/[0.04] border border-white/[0.07]">
                    <div
                      className="text-3xl font-sora font-bold mb-1"
                      style={{
                        background: "linear-gradient(135deg, #00D9FF, #D4AF37)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-sm text-[#A0AEC0]">{stat.label}</div>
                  </div>
                ))}
              </div>

              <Link
                href="/staff"
                className="inline-flex items-center gap-2 text-[#00D9FF] hover:text-[#00D9FF]/80 font-semibold text-sm transition-colors"
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
                {/* TODO: Replace with real photo from client */}
                <AvatarPlaceholder initials="AS" size="xl" />
                <div>
                  <h3 className="text-xl font-sora font-bold text-[#F5F5F5]">Dr. Arif Shahzad MD</h3>
                  <p className="text-sm text-[#00D9FF] mb-3">Owner & Medical Director</p>
                  <div className="flex flex-wrap gap-2">
                    {["MD", "BioTE Certified", "GLP-1 Specialist"].map((cred) => (
                      <span
                        key={cred}
                        className="px-2.5 py-0.5 text-xs rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] font-medium"
                      >
                        {cred}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm text-[#A0AEC0] leading-relaxed">
                Dr. Shahzad leads IV-LYTES & Wellness with a commitment to evidence-based integrative medicine.
                Specializing in IV therapy, bioidentical hormone replacement, and medical weight loss, he brings
                physician-level oversight to every treatment at our Kingwood clinic. His approach: science-backed
                protocols, individualized care, and results that actually show.
              </p>
              <div className="mt-6 pt-5 border-t border-white/[0.06]">
                <a
                  href="tel:2816669211"
                  className="text-sm text-[#A0AEC0] hover:text-[#00D9FF] transition-colors"
                >
                  Free BioTE consultations: <span className="text-[#00D9FF]">(281) 666-9211</span>
                </a>
              </div>
            </GlassCard>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
