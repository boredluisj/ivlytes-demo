import type { Metadata } from "next";
import Link from "next/link";
import { FileText, ExternalLink, Download, Clock, Phone } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import AnimateOnScroll from "@/components/shared/AnimateOnScroll";
import GlassCard from "@/components/ui/GlassCard";

export const metadata: Metadata = {
  title: "Patient Resources | IV-LYTES & Wellness Kingwood TX",
  description: "Patient guides, quick-start sheets for Ozempic, Wegovy, and Mounjaro, SkinPen care instructions, and colonoscopy prep guide — all from IV-LYTES & Wellness.",
  openGraph: {
    title: "Patient Resources | IV-LYTES & Wellness",
    description: "Download patient guides and quick-start sheets from IV-LYTES & Wellness in Kingwood TX.",
  },
};

const guides = [
  { title: "Colonoscopy Prep Guide", desc: "Complete 5-day prep protocol before your colonoscopy procedure.", href: "/colonprep", internal: true },
  { title: "SkinPen Pre & Post Care", desc: "How to prepare for microneedling and care for your skin during recovery.", href: "#", internal: false, todo: true },
  { title: "Mounjaro Quick Start Guide", desc: "Step-by-step instructions for your first Tirzepatide injection.", href: "#", internal: false, todo: true },
  { title: "Ozempic Quick Start Guide", desc: "How to use your semaglutide pen safely and effectively.", href: "#", internal: false, todo: true },
  { title: "Wegovy Quick Start Guide", desc: "Getting started with your Wegovy (semaglutide) weight loss program.", href: "#", internal: false, todo: true },
];

const quickLinks = [
  { title: "Book an Appointment", desc: "Schedule online via Vagaro — same-day often available.", href: "https://www.vagaro.com/ivlytes/book-now", external: true, icon: ExternalLink },
  { title: "BioTE Supplement Store", desc: "Shop physician-recommended nutraceuticals through our partner portal.", href: "https://patients.shopbiote.com", external: true, icon: ExternalLink },
  { title: "ProLon Program (20% Off)", desc: "5-day fasting mimicking diet — amplify your weight loss results.", href: "https://prolonlife.com/ivlytes", external: true, icon: ExternalLink },
  { title: "BioTE Store", desc: "Browse our curated BioTE nutraceuticals selection.", href: "/biote-store", external: false, icon: ExternalLink },
];

export default function ResourcesPage() {
  return (
    <section className="pt-24 pb-24 bg-[#0B1120]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="mb-16">
          <SectionHeading
            label="Patient Resources"
            title="Everything You Need"
            subtitle="Guides, quick-start sheets, and links to make your wellness journey as smooth as possible."
          />
        </AnimateOnScroll>

        {/* Hours reminder */}
        <AnimateOnScroll className="mb-12">
          <div className="flex flex-col sm:flex-row gap-4 p-5 rounded-xl bg-[#2DD4BF]/[0.06] border border-[#2DD4BF]/20">
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-[#2DD4BF] flex-shrink-0" />
              <div>
                <span className="text-sm font-medium text-[#F0EDE8]">Clinic Hours:</span>
                <span className="text-sm text-[#9BA8BB] ml-2">Mon–Thu 9am–6pm | Fri 9am–1pm | Sat–Sun Closed</span>
              </div>
            </div>
            <div className="flex items-center gap-3 sm:ml-auto">
              <Phone className="w-5 h-5 text-[#2DD4BF] flex-shrink-0" />
              <a href="tel:2816669211" className="text-sm text-[#2DD4BF] font-semibold hover:underline">(281) 666-9211</a>
            </div>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Downloads */}
          <div>
            <AnimateOnScroll className="mb-6">
              <h2 className="text-xl font-sora font-semibold text-[#F0EDE8]">Patient Guides &amp; Downloads</h2>
            </AnimateOnScroll>
            <div className="space-y-4">
              {guides.map((guide, i) => (
                <AnimateOnScroll key={guide.title} delay={i * 0.07}>
                  {guide.internal ? (
                    <Link href={guide.href}>
                      <GlassCard hover className="p-5 flex items-center gap-4 cursor-pointer">
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, #2DD4BF20, #2DD4BF20)" }}>
                          <FileText className="w-5 h-5 text-[#2DD4BF]" />
                        </div>
                        <div className="flex-grow">
                          <div className="text-sm font-semibold text-[#F0EDE8]">{guide.title}</div>
                          <div className="text-xs text-[#9BA8BB]">{guide.desc}</div>
                        </div>
                        <ExternalLink className="w-4 h-4 text-[#9BA8BB]" />
                      </GlassCard>
                    </Link>
                  ) : (
                    <GlassCard className="p-5 flex items-center gap-4 opacity-60">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, #9BA8BB20, #9BA8BB20)" }}>
                        <Download className="w-5 h-5 text-[#9BA8BB]" />
                      </div>
                      <div className="flex-grow">
                        <div className="text-sm font-semibold text-[#F0EDE8]">{guide.title}</div>
                        <div className="text-xs text-[#9BA8BB]">{guide.desc}</div>
                      </div>
                      <span className="text-xs text-[#9BA8BB]/60 italic">Coming soon</span>
                      {/* TODO: Add PDF link from client */}
                    </GlassCard>
                  )}
                </AnimateOnScroll>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <AnimateOnScroll className="mb-6">
              <h2 className="text-xl font-sora font-semibold text-[#F0EDE8]">Quick Links</h2>
            </AnimateOnScroll>
            <div className="space-y-4">
              {quickLinks.map((link, i) => (
                <AnimateOnScroll key={link.title} delay={i * 0.07}>
                  {link.external ? (
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                      <GlassCard hover className="p-5 flex items-center gap-4 cursor-pointer">
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, #2DD4BF20, #2DD4BF20)" }}>
                          <link.icon className="w-5 h-5 text-[#2DD4BF]" />
                        </div>
                        <div className="flex-grow">
                          <div className="text-sm font-semibold text-[#F0EDE8]">{link.title}</div>
                          <div className="text-xs text-[#9BA8BB]">{link.desc}</div>
                        </div>
                        <ExternalLink className="w-4 h-4 text-[#9BA8BB]" />
                      </GlassCard>
                    </a>
                  ) : (
                    <Link href={link.href}>
                      <GlassCard hover className="p-5 flex items-center gap-4 cursor-pointer">
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, #2DD4BF20, #2DD4BF20)" }}>
                          <link.icon className="w-5 h-5 text-[#2DD4BF]" />
                        </div>
                        <div className="flex-grow">
                          <div className="text-sm font-semibold text-[#F0EDE8]">{link.title}</div>
                          <div className="text-xs text-[#9BA8BB]">{link.desc}</div>
                        </div>
                      </GlassCard>
                    </Link>
                  )}
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
