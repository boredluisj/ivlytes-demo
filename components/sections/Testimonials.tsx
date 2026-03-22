"use client";

import { useReducedMotion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials } from "@/lib/testimonials-data";
import AvatarPlaceholder from "@/components/shared/AvatarPlaceholder";
import SectionHeading from "@/components/shared/SectionHeading";
import AnimateOnScroll from "@/components/shared/AnimateOnScroll";

function TestimonialCard({ name, initials, rating, text, service, location }: typeof testimonials[0] & { location?: string }) {
  return (
    <div className="flex-shrink-0 w-[320px] sm:w-[340px] p-6 rounded-xl bg-white/[0.04] border border-white/[0.07] backdrop-blur-xl mx-3">
      {/* Stars */}
      <div className="flex gap-0.5 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-[#2DD4BF] text-[#2DD4BF]" />
        ))}
      </div>
      {/* Text */}
      <p className="text-sm text-[#9BA8BB] leading-relaxed mb-5 italic">&ldquo;{text}&rdquo;</p>
      {/* Author */}
      <div className="flex items-center gap-3">
        <AvatarPlaceholder initials={initials} size="sm" />
        <div>
          <div className="text-sm font-semibold text-[#F0EDE8]">{name}</div>
          <div className="text-xs text-[#2DD4BF]">{service}</div>
          {location && <div className="text-xs text-[#9BA8BB]/70">{location}</div>}
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const prefersReducedMotion = useReducedMotion();
  const doubled = [...testimonials, ...testimonials];

  return (
    <section className="py-24 bg-[#0B1120] overflow-hidden" aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <AnimateOnScroll>
          <SectionHeading
            label="Patient Stories"
            title="What Our Patients Say"
            subtitle="Real experiences from real Kingwood residents. Authentic results, no stock photos."
            centered
          />
        </AnimateOnScroll>
        {/* TODO: replace with real Google reviews from client */}
      </div>

      {/* Scrolling marquee */}
      <div className="relative">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #0B1120, transparent)" }}
        />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #0B1120, transparent)" }}
        />

        <div
          className={`flex ${prefersReducedMotion ? "flex-wrap gap-6 px-6 justify-center" : ""}`}
          style={
            prefersReducedMotion
              ? {}
              : {
                  display: "flex",
                  width: "max-content",
                  animation: "scroll 40s linear infinite",
                }
          }
          onMouseEnter={(e) => {
            if (!prefersReducedMotion) {
              (e.currentTarget as HTMLDivElement).style.animationPlayState = "paused";
            }
          }}
          onMouseLeave={(e) => {
            if (!prefersReducedMotion) {
              (e.currentTarget as HTMLDivElement).style.animationPlayState = "running";
            }
          }}
        >
          {(prefersReducedMotion ? testimonials : doubled).map((t, i) => (
            <TestimonialCard key={`${t.id}-${i}`} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
