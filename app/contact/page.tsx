import type { Metadata } from "next";
import { Phone, MapPin, Clock, Mail } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import AnimateOnScroll from "@/components/shared/AnimateOnScroll";
import GlassCard from "@/components/ui/GlassCard";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact IV-LYTES & Wellness | Kingwood TX (281) 666-9211",
  description: "Contact IV-LYTES & Wellness in Kingwood TX. Call (281) 666-9211, visit 320 Kingwood Executive Dr Suite D, or book online. Mon–Thu 9am–6pm, Fri 9am–1pm.",
  openGraph: {
    title: "Contact | IV-LYTES & Wellness Kingwood TX",
    description: "Reach us at (281) 666-9211 or 320 Kingwood Executive Dr Suite D, Kingwood TX 77339.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "IV-LYTES & Wellness",
  telephone: "+12816669211",
  address: {
    "@type": "PostalAddress",
    streetAddress: "320 Kingwood Executive Dr., Suite D",
    addressLocality: "Kingwood",
    addressRegion: "TX",
    postalCode: "77339",
    addressCountry: "US",
  },
  openingHours: ["Mo-Th 09:00-18:00", "Fr 09:00-13:00"],
  url: "https://ivlytes.com/contact",
};

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="pt-24 pb-16 bg-[#0B1120]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="mb-12">
            <SectionHeading label="Get In Touch" title="Contact Us" subtitle="Have questions or ready to book? Reach out — we're here Mon–Thu 9am–6pm and Fri 9am–1pm." />
          </AnimateOnScroll>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-5">
              <AnimateOnScroll>
                <GlassCard className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, #2DD4BF20, #2DD4BF20)" }}>
                      <Phone className="w-5 h-5 text-[#2DD4BF]" />
                    </div>
                    <div>
                      <div className="text-xs text-[#9BA8BB] mb-1">Phone</div>
                      <a href="tel:2816669211" className="text-[#F0EDE8] font-semibold hover:text-[#2DD4BF] transition-colors">(281) 666-9211</a>
                    </div>
                  </div>
                </GlassCard>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.1}>
                <GlassCard className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, #2DD4BF20, #2DD4BF20)" }}>
                      <MapPin className="w-5 h-5 text-[#2DD4BF]" />
                    </div>
                    <div>
                      <div className="text-xs text-[#9BA8BB] mb-1">Address</div>
                      <a href="https://maps.app.goo.gl/4wPahohkfhe7Lv1M7" target="_blank" rel="noopener noreferrer" className="text-[#F0EDE8] hover:text-[#2DD4BF] transition-colors text-sm leading-relaxed block">
                        320 Kingwood Executive Dr.<br />Suite D<br />Kingwood, TX 77339
                      </a>
                      <a href="https://maps.app.goo.gl/4wPahohkfhe7Lv1M7" target="_blank" rel="noopener noreferrer" className="text-xs text-[#2DD4BF] mt-2 inline-block hover:underline">
                        Get Directions →
                      </a>
                    </div>
                  </div>
                </GlassCard>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.2}>
                <GlassCard className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, #2DD4BF20, #2DD4BF20)" }}>
                      <Clock className="w-5 h-5 text-[#2DD4BF]" />
                    </div>
                    <div>
                      <div className="text-xs text-[#9BA8BB] mb-2">Hours</div>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between gap-6">
                          <span className="text-[#9BA8BB]">Mon–Thu</span>
                          <span className="text-[#F0EDE8]">9am–6pm</span>
                        </div>
                        <div className="flex justify-between gap-6">
                          <span className="text-[#9BA8BB]">Friday</span>
                          <span className="text-[#F0EDE8]">9am–1pm</span>
                        </div>
                        <div className="flex justify-between gap-6">
                          <span className="text-[#9BA8BB]">Sat–Sun</span>
                          <span className="text-[#9BA8BB]/60">Closed</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.3}>
                <a href="https://www.vagaro.com/ivlytes/book-now" target="_blank" rel="noopener noreferrer"
                  className="block w-full text-center py-3.5 bg-[#2DD4BF] text-[#0B1120] font-semibold rounded-xl hover:bg-[#2DD4BF]/90 hover:shadow-[0_0_20px_rgba(45,212,191,0.4)] transition-all">
                  Book Online Now
                </a>
              </AnimateOnScroll>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <AnimateOnScroll delay={0.1}>
                <GlassCard className="p-8">
                  <h2 className="text-xl font-sora font-semibold text-[#F0EDE8] mb-6">Send Us a Message</h2>
                  <ContactForm />
                </GlassCard>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="bg-[#0B1120] pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="rounded-2xl overflow-hidden border border-white/[0.08]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.3!2d-95.1928!3d30.0566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640a8b57c96fba7%3A0x1234567890abcdef!2s320%20Kingwood%20Executive%20Dr%20Suite%20D%2C%20Kingwood%2C%20TX%2077339!5e0!3m2!1sen!2sus!4v1700000000000"
                width="100%"
                height="450"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="IV-LYTES & Wellness location map"
              />
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
