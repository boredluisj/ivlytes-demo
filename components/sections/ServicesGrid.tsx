import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import { services } from "@/lib/services-data";
import SectionHeading from "@/components/shared/SectionHeading";
import AnimateOnScroll from "@/components/shared/AnimateOnScroll";

export default function ServicesGrid() {
  return (
    <section className="py-24 bg-[#0B1120]" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="mb-12">
          <SectionHeading
            label="Our Treatments"
            title="Physician-Led Wellness Services"
            subtitle="Every treatment at IV-LYTES is physician-supervised by Dr. Arif Shahzad MD. Cash-pay, no insurance required."
          />
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <AnimateOnScroll key={service.id} delay={i * 0.07}>
              <Link
                href={service.href}
                className="group block relative rounded-2xl overflow-hidden bg-white/[0.05] border border-white/[0.08] hover:border-[#2DD4BF]/30 hover:shadow-[0_0_30px_rgba(0,217,255,0.15)] transition-all duration-300 hover:-translate-y-1 h-72"
                aria-label={`Learn about ${service.name}`}
              >
                {/* Image */}
                <div className="absolute inset-0">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover opacity-40 group-hover:opacity-50 group-hover:scale-105 transition-all duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/60 to-transparent" />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-[#2DD4BF] font-medium">{service.price}</span>
                    <span className="text-xs text-[#9BA8BB]">{service.duration}</span>
                  </div>
                  <h3 className="font-sora font-semibold text-[#F0EDE8] text-lg mb-1 group-hover:text-[#2DD4BF] transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-sm text-[#9BA8BB] line-clamp-2">{service.shortDesc}</p>
                  <div className="flex items-center gap-1 mt-3 text-xs text-[#2DD4BF] opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>See this treatment</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </Link>
            </AnimateOnScroll>
          ))}

          {/* Patient Resources card */}
          <AnimateOnScroll delay={services.length * 0.07}>
            <Link
              href="/resources"
              className="group block relative rounded-2xl overflow-hidden bg-white/[0.05] border border-white/[0.08] hover:border-[#2DD4BF]/30 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] transition-all duration-300 hover:-translate-y-1 h-72 flex flex-col items-center justify-center text-center p-8"
              aria-label="Patient Resources"
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
                style={{ background: "linear-gradient(135deg, #2DD4BF20, #2DD4BF20)" }}
              >
                <FileText className="w-7 h-7 text-[#2DD4BF]" />
              </div>
              <h3 className="font-sora font-semibold text-[#F0EDE8] text-lg mb-2 group-hover:text-[#2DD4BF] transition-colors">
                Patient Resources
              </h3>
              <p className="text-sm text-[#9BA8BB]">
                Guides, quick-start sheets, and everything you need to prepare for your treatment.
              </p>
              <div className="flex items-center gap-1 mt-4 text-xs text-[#2DD4BF] opacity-0 group-hover:opacity-100 transition-opacity">
                <span>View resources</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </Link>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
