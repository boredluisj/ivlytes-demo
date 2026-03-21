"use client";
import Image from "next/image";
import { Droplets, Activity, Zap, Sparkles, TrendingDown } from "lucide-react";

export function ServicesBento() {
  return (
    <section id="services" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-[var(--color-neutral-dark)] mb-6">Everything Your Body Needs</h2>
          <p className="text-lg text-[var(--color-neutral)]">From IV nutrient therapy to hormone optimization — comprehensive wellness care under one roof.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div className="group bg-white/80 backdrop-blur-sm shadow-sm rounded-3xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 md:col-span-2 lg:col-span-2 flex flex-col md:flex-row relative z-10">
            <div className="relative h-64 md:h-full w-full md:w-1/2 overflow-hidden">
              <Image src="/images/services/iv-therapy.jpg" alt="IV Nutrient Therapy" fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/60 via-teal-900/10 to-transparent" />
              <div className="absolute bottom-4 left-4 inline-flex items-center px-3 py-1 rounded-full bg-[var(--color-primary)] text-white text-xs font-semibold uppercase tracking-wider">Most Popular</div>
            </div>
            <div className="p-8 md:p-10 flex flex-col justify-center w-full md:w-1/2 border-t md:border-t-0 md:border-l-[4px] border-teal-400 bg-white">
              <div className="w-12 h-12 bg-teal-50 rounded-full justify-center items-center flex mb-6 shadow-inner">
                <Droplets className="w-6 h-6 text-[var(--color-primary)]" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-[var(--color-neutral-dark)] mb-4">IV Nutrient Therapy</h3>
              <p className="text-[var(--color-neutral)] mb-8">Deliver vitamins, minerals, and hydration directly to your bloodstream — bypassing oral absorption for immediate, powerful results.</p>
              <a href="#cta" className="text-[var(--color-primary)] font-semibold hover:text-[var(--color-primary-dark)] inline-flex items-center">
                Learn More <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-6 lg:col-span-1">
            <div className="group bg-white backdrop-blur-sm border-t-[4px] border-teal-400 shadow-sm rounded-3xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
              <div className="relative h-40 w-full overflow-hidden">
                <Image src="/images/services/colonics.jpg" alt="Colonic Hydrotherapy" fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 1024px) 100vw, 33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/40 to-transparent" />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <Activity className="w-5 h-5 text-[var(--color-primary)] shrink-0" />
                  <h3 className="text-xl font-bold text-[var(--color-neutral-dark)]">Colonic Hydrotherapy</h3>
                </div>
                <p className="text-sm text-[var(--color-neutral)]">FDA-approved Angel of Water system for safe, effective colon cleansing and toxin elimination.</p>
              </div>
            </div>

            <div className="group bg-white backdrop-blur-sm border-t-[4px] border-teal-400 shadow-sm rounded-3xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
              <div className="relative h-40 w-full overflow-hidden">
                <Image src="/images/services/biote.jpg" alt="BioTE Hormone Therapy" fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 1024px) 100vw, 33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/40 to-transparent" />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="w-5 h-5 text-[var(--color-primary)] shrink-0" />
                  <h3 className="text-xl font-bold text-[var(--color-neutral-dark)]">BioTE Hormone Therapy</h3>
                </div>
                <p className="text-sm text-[var(--color-neutral)]">Bio-identical hormone pellet therapy for lasting balance, energy, and vitality.</p>
              </div>
            </div>
          </div>
          
          <div className="group bg-white backdrop-blur-sm border-t-[4px] border-teal-400 shadow-sm rounded-3xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 md:col-span-1 lg:col-span-1 flex flex-col">
            <div className="relative h-48 w-full overflow-hidden">
              <Image src="/images/services/skinpen.jpg" alt="SkinPen Microneedling" fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 1024px) 100vw, 33vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/40 to-transparent" />
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <div className="flex items-center gap-3 mb-3">
                <Sparkles className="w-5 h-5 text-[var(--color-primary)] shrink-0" />
                <h3 className="text-xl font-bold text-[var(--color-neutral-dark)]">SkinPen Microneedling</h3>
              </div>
              <p className="text-sm text-[var(--color-neutral)]">Collagen induction therapy that rejuvenates skin texture and tone with minimal downtime.</p>
            </div>
          </div>

          <div className="group bg-white backdrop-blur-sm shadow-sm rounded-3xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 md:col-span-2 lg:col-span-2 flex flex-col flex-col-reverse sm:flex-row border-t border-slate-100">
            <div className="p-8 sm:p-10 flex flex-col justify-center w-full sm:w-1/2 border-t-[4px] lg:border-t-0 lg:border-l-[4px] border-emerald-400">
               <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-emerald-50 rounded-full justify-center items-center flex">
                    <TrendingDown className="w-5 h-5 text-[var(--color-accent)] shrink-0" />
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-[var(--color-neutral-dark)]">Medical Weight Loss</h3>
                </div>
              <p className="text-[var(--color-neutral)] mb-6">Evidence-based programs combining prescription support, nutritional coaching, and monthly monitoring.</p>
              <a href="https://www.vagaro.com/us04/ivlytes" target="_blank" rel="noopener noreferrer" className="inline-flex max-w-max px-6 py-2.5 bg-[var(--color-accent)] text-white rounded-full font-semibold hover:bg-emerald-600 transition-colors shadow-sm text-sm">
                Start Your Journey
              </a>
            </div>
            <div className="relative h-64 sm:h-full w-full sm:w-1/2 overflow-hidden">
              <Image src="/images/services/weight-loss.jpg" alt="Medical Weight Loss" fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 via-emerald-900/10 to-transparent flex sm:hidden" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
