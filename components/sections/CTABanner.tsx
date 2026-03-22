import { ArrowRight } from "lucide-react";
import AnimateOnScroll from "@/components/shared/AnimateOnScroll";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  cta?: string;
  href?: string;
  external?: boolean;
  secondaryCta?: string;
  secondaryHref?: string;
}

export default function CTABanner({
  title = "Ready to Feel Your Best?",
  subtitle = "Join hundreds of Kingwood residents who've optimized their health with IV-LYTES. Same-day appointments available.",
  cta = "Book Your First Session",
  href = "https://www.vagaro.com/ivlytes/book-now",
  external = true,
  secondaryCta,
  secondaryHref,
}: CTABannerProps) {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{
        background: "conic-gradient(from 180deg at 50% 80%, #002626 0deg, #0F1419 180deg, #0F1419 360deg)",
      }}
      aria-labelledby="cta-heading"
    >
      {/* Spotlight glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at top, #00D9FF, transparent)" }}
      />

      {/* Gradient accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00D9FF]/30 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimateOnScroll>
          <h2
            id="cta-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-sora font-bold text-[#F5F5F5] mb-4 leading-tight"
          >
            {title}
          </h2>
          <p className="text-lg text-[#A0AEC0] mb-10 max-w-2xl mx-auto">{subtitle}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {external ? (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#00D9FF] text-[#0F1419] font-semibold rounded-xl hover:bg-[#00D9FF]/90 hover:shadow-[0_0_30px_rgba(0,217,255,0.4)] transition-all duration-200 text-base"
              >
                {cta}
                <ArrowRight className="w-4 h-4" />
              </a>
            ) : (
              <a
                href={href}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#00D9FF] text-[#0F1419] font-semibold rounded-xl hover:bg-[#00D9FF]/90 hover:shadow-[0_0_30px_rgba(0,217,255,0.4)] transition-all duration-200 text-base"
              >
                {cta}
                <ArrowRight className="w-4 h-4" />
              </a>
            )}

            {secondaryCta && secondaryHref && (
              <a
                href={secondaryHref}
                className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-[#F5F5F5] font-medium rounded-xl hover:border-[#00D9FF]/40 hover:text-[#00D9FF] transition-all duration-200 text-base"
              >
                {secondaryCta}
              </a>
            )}
          </div>

          <p className="mt-8 text-xs text-[#A0AEC0]/60">
            Cash-pay only. No insurance accepted. Medical disclaimer applies.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
