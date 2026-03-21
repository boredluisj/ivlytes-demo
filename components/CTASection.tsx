"use client";
import { useLuxuryClick } from "@/hooks/useLuxuryClick";
import { MapPin, Phone } from "lucide-react";

export function CTASection() {
  const playClick = useLuxuryClick();

  return (
    <section className="py-24 bg-gradient-to-br from-teal-600 to-emerald-700 relative overflow-hidden bg-fixed">
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")'}}></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-10 md:p-16 text-center shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Ready to Feel Your Best?</h2>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            Book your appointment online — same-day availability often open. 62 services available.
          </p>
          
          <a
            href="https://www.vagaro.com/us04/ivlytes"
            target="_blank"
            rel="noopener noreferrer"
            onClick={playClick}
            className="inline-flex py-4 px-10 md:px-12 bg-white text-[var(--color-primary-dark)] font-bold text-lg rounded-full shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] hover:scale-[1.02] transition-all duration-300"
          >
            Book Your Appointment
          </a>

          <div className="mt-14 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-white/80 text-sm font-medium">
            <div className="flex items-center gap-2">
               <MapPin className="w-4 h-4 shrink-0" />
               <span>320 Kingwood Executive Dr, Suite D, Kingwood TX</span>
            </div>
            <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-white/40"></div>
            <div className="flex items-center gap-2">
               <Phone className="w-4 h-4 shrink-0" />
               <a href="tel:+12816669211" className="hover:text-white transition-colors">(281) 666-9211</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
