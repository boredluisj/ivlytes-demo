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
  title = "Ready to feel your best?",
  subtitle = "Same-day appointments available. No insurance required. Dr. Shahzad sees every patient personally.",
  cta = "Book a Treatment",
  href = "https://www.vagaro.com/ivlytes/book-now",
  external = true,
  secondaryCta,
  secondaryHref,
}: CTABannerProps) {
  const btnClass = "inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#2DD4BF] text-[#0B1120] font-bold rounded-xl hover:bg-[#4FE5D3] transition-colors text-base";

  return (
    <section className="py-24 relative overflow-hidden bg-[#111927]" aria-labelledby="cta-heading">
      {/* Top border glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2DD4BF]/25 to-transparent" />
      {/* Subtle radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at top, rgba(45,212,191,0.08), transparent 70%)" }} />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <AnimateOnScroll>
          <h2 id="cta-heading" className="text-3xl sm:text-4xl lg:text-5xl font-sora font-bold text-[#F0EDE8] mb-4 leading-tight">
            {title}
          </h2>
          <p className="text-lg text-[#9BA8BB] mb-10 max-w-xl mx-auto">{subtitle}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {external ? (
              <a href={href} target="_blank" rel="noopener noreferrer" className={btnClass}>
                {cta} <ArrowRight className="w-4 h-4" />
              </a>
            ) : (
              <a href={href} className={btnClass}>
                {cta} <ArrowRight className="w-4 h-4" />
              </a>
            )}
            {secondaryCta && secondaryHref && (
              <a href={secondaryHref} className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-[#F0EDE8] font-semibold rounded-xl hover:bg-white/[0.06] transition-all text-base">
                {secondaryCta}
              </a>
            )}
          </div>

          <p className="mt-8 text-xs text-[#9BA8BB]/50">
            Cash-pay only. No insurance accepted. Medical disclaimer applies.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
