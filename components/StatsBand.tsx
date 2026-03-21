"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

function AnimatedCounter({ target }: { target: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (inView) {
      let current = 0;
      const step = Math.ceil(target / 40);
      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          setDisplayValue(target);
          clearInterval(timer);
        } else {
          setDisplayValue(current);
        }
      }, 40);
      return () => clearInterval(timer);
    }
  }, [inView, target]);

  return <span ref={ref}>{displayValue}</span>;
}

export function StatsBand() {
  return (
    <section className="bg-[var(--color-neutral-dark)] text-white py-16 md:py-20 relative z-10 -mt-1 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center divide-x-0 lg:divide-x divide-slate-800">
          
          <div className="flex flex-col items-center justify-center space-y-2">
            <div className="text-4xl md:text-5xl font-heading font-bold text-[var(--color-primary-light)]">
              <AnimatedCounter target={62} />
            </div>
            <div className="text-slate-400 font-medium tracking-wide text-sm md:text-base">Services & Treatments</div>
          </div>

          <div className="flex flex-col items-center justify-center space-y-2">
            <div className="text-4xl md:text-5xl font-heading font-bold text-[var(--color-primary-light)]">
              MD-Led
            </div>
            <div className="text-slate-400 font-medium tracking-wide text-sm md:text-base">Board Certified Care</div>
          </div>

          <div className="flex flex-col items-center justify-center space-y-2">
            <div className="text-4xl md:text-5xl font-heading font-bold text-[var(--color-primary-light)] flex items-center">
              <AnimatedCounter target={5} /><span className="text-3xl ml-1 text-[var(--color-accent)]">★</span>
            </div>
            <div className="text-slate-400 font-medium tracking-wide text-sm md:text-base">Patient Experience</div>
          </div>

          <div className="flex flex-col items-center justify-center space-y-2">
            <div className="text-4xl md:text-5xl font-heading font-bold text-[var(--color-primary-light)]">
              Same-Day
            </div>
            <div className="text-slate-400 font-medium tracking-wide text-sm md:text-base">Appointments Available</div>
          </div>

        </div>
      </div>
    </section>
  );
}
