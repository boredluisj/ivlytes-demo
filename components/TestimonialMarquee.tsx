"use client";
import { Star } from "lucide-react";

const testimonials = [
  "Very professional 10/10 Would definitely recommend!",
  "Dr. Shahzad and Jennifer go above and beyond for their patients",
  "One of the best wellness experiences I've ever had",
  "Warm and inviting atmosphere",
  "A game changer for chronic constipation — works better than medication",
  "Jennifer made my first experience awesome — so kind and helpful"
];

function TestimonialCard({ quote }: { quote: string }) {
  return (
    <div className="bg-white border border-teal-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow w-[350px] md:w-[400px] shrink-0 mx-4 relative overflow-hidden group">
      <div className="flex gap-1 mb-4 relative z-10">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-[var(--color-primary)] text-[var(--color-primary)]" />
        ))}
      </div>
      <div className="text-7xl text-teal-50 group-hover:text-teal-100 transition-colors font-heading leading-none absolute -top-2 left-4 z-0">"</div>
      <p className="text-slate-700 leading-relaxed font-medium relative z-10 min-h-[80px]">{quote}</p>
      <div className="mt-6 flex items-center gap-3 relative z-10">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center text-white font-bold text-sm shadow-sm">
          VP
        </div>
        <span className="text-slate-500 text-sm font-semibold">Verified Patient</span>
      </div>
    </div>
  );
}

export function TestimonialMarquee() {
  const row1 = testimonials.slice(0, 3);
  const row2 = testimonials.slice(3, 6);

  return (
    <section id="testimonials" className="py-24 bg-[var(--color-neutral-light)] overflow-hidden">
      <div className="text-center max-w-3xl mx-auto mb-16 px-4">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-[var(--color-neutral-dark)]">What Our Patients Say</h2>
      </div>

      <div className="relative flex flex-col gap-8 w-full">
        {/* Row 1 - Left to Right */}
        <div className="flex w-max animate-marqueeLeft hover:[animation-play-state:paused]">
          {[...row1, ...row1, ...row1, ...row1].map((quote, i) => (
            <TestimonialCard key={`r1-${i}`} quote={quote} />
          ))}
        </div>

        {/* Row 2 - Right to Left */}
        <div className="flex w-max animate-marqueeRight hover:[animation-play-state:paused]">
          {[...row2, ...row2, ...row2, ...row2].map((quote, i) => (
            <TestimonialCard key={`r2-${i}`} quote={quote} />
          ))}
        </div>
        
        {/* Gradient fades for edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[var(--color-neutral-light)] to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[var(--color-neutral-light)] to-transparent z-20" />
      </div>

      <style>{`
        @keyframes marqueeLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-25%)); }
        }
        @keyframes marqueeRight {
          0% { transform: translateX(calc(-25%)); }
          100% { transform: translateX(0); }
        }
        .animate-marqueeLeft {
          animation: marqueeLeft 40s linear infinite;
        }
        .animate-marqueeRight {
          animation: marqueeRight 40s linear infinite;
        }
      `}</style>
    </section>
  );
}
