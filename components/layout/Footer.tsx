import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Clock, Shield } from "lucide-react";

const serviceLinks = [
  { label: "IV Hydration Therapy", href: "/ivfluids" },
  { label: "Colonic Hydrotherapy", href: "/colonic" },
  { label: "BioTE Hormone Therapy", href: "/biote" },
  { label: "Medical Weight Loss", href: "/weight-loss" },
  { label: "SkinPen Microneedling", href: "/skinpen" },
];

const infoLinks = [
  { label: "Our Team", href: "/staff" },
  { label: "Patient Resources", href: "/resources" },
  { label: "Blog", href: "/blog" },
  { label: "BioTE Store", href: "/biote-store" },
  { label: "Colonoscopy Prep", href: "/colonprep" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Use", href: "/terms-of-use" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#080C10] border-t border-white/[0.06]">
      {/* Gradient accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#00D9FF]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <div className="relative w-36 h-10">
              <Image
                src="/images/logo.png"
                alt="IV-LYTES & Wellness"
                fill
                className="object-contain"
                style={{ mixBlendMode: "screen" }}
              />
            </div>
            <p className="text-sm text-[#A0AEC0] leading-relaxed">
              Kingwood&apos;s premier physician-supervised IV therapy and wellness clinic. Cash-pay, no insurance required.
            </p>
            <div className="flex items-center gap-1">
              <Shield className="w-4 h-4 text-[#00D9FF]" />
              <span className="text-xs text-[#A0AEC0]">HIPAA Compliant</span>
            </div>
            {/* Social Icons */}
            <div className="flex gap-3 pt-2">
              <a
                href="https://www.facebook.com/IVLytesWellness"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="IV-LYTES on Facebook"
                className="w-9 h-9 rounded-lg bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-[#A0AEC0] hover:text-[#00D9FF] hover:border-[#00D9FF]/30 transition-all"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/ivlyteswellness/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="IV-LYTES on Instagram"
                className="w-9 h-9 rounded-lg bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-[#A0AEC0] hover:text-[#00D9FF] hover:border-[#00D9FF]/30 transition-all"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-sm font-semibold font-sora text-[#F5F5F5] uppercase tracking-wider mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#A0AEC0] hover:text-[#00D9FF] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Info */}
          <div>
            <h3 className="text-sm font-semibold font-sora text-[#F5F5F5] uppercase tracking-wider mb-5">
              Information
            </h3>
            <ul className="space-y-3">
              {infoLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#A0AEC0] hover:text-[#00D9FF] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-sm font-semibold font-sora text-[#F5F5F5] uppercase tracking-wider mb-5">
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:2816669211"
                  className="flex items-start gap-3 text-sm text-[#A0AEC0] hover:text-[#00D9FF] transition-colors"
                >
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>(281) 666-9211</span>
                </a>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/4wPahohkfhe7Lv1M7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-[#A0AEC0] hover:text-[#00D9FF] transition-colors"
                >
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>320 Kingwood Executive Dr., Suite D<br />Kingwood, TX 77339</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#A0AEC0]">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <div>Mon–Thu: 9am–6pm</div>
                  <div>Fri: 9am–1pm</div>
                  <div>Sat–Sun: Closed</div>
                </div>
              </li>
            </ul>

            <a
              href="https://www.vagaro.com/ivlytes/book-now"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block w-full text-center px-4 py-2.5 bg-[#00D9FF]/10 border border-[#00D9FF]/30 text-[#00D9FF] text-sm font-semibold rounded-xl hover:bg-[#00D9FF] hover:text-[#0F1419] transition-all duration-200"
            >
              Book Appointment
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#A0AEC0]/60">
            © {new Date().getFullYear()} IV-LYTES & Wellness — BAABA LLC. All rights reserved.
          </p>
          <p className="text-xs text-[#A0AEC0]/60 text-center sm:text-right max-w-md">
            IV-LYTES does not accept insurance. All services are cash-pay. Services not evaluated by the FDA.
          </p>
        </div>
      </div>
    </footer>
  );
}
