import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
             <div className="relative rounded-3xl overflow-hidden aspect-[3/4] w-full max-w-md shadow-2xl group">
              <Image
                src="/images/team/dr-shahzad.jpg"
                alt="Dr. Arif Shahzad, MD — Medical Director, IV-LYTES & Wellness"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-teal-950 via-teal-900/80 to-transparent p-8 pt-24 z-10 pointer-events-none">
                <div className="text-white font-heading font-bold text-2xl mb-1 drop-shadow-md">Dr. Arif Shahzad, MD</div>
                <div className="text-teal-200 text-sm font-medium drop-shadow-sm">Board Certified &middot; Internal Medicine & Rheumatology</div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="text-[var(--color-primary)] font-semibold tracking-wider text-sm uppercase">Why IV-LYTES</div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-[var(--color-neutral-dark)] leading-tight">
              Led by a Board-Certified Physician
            </h2>
            <p className="text-lg text-[var(--color-neutral)] leading-relaxed">
              Dr. Arif Shahzad, MD brings 15+ years of Internal Medicine and Rheumatology expertise to every treatment. Unlike most wellness clinics, IV-LYTES is physician-directed — meaning your care is backed by the highest level of medical training.
            </p>
            
            <div className="pt-6">
              <ul className="space-y-4">
                {[
                  "Internal Medicine Board Certified",
                  "Rheumatology Board Certified",
                  "LSU Health Sciences Center",
                  "Ochsner Fellowship"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium bg-slate-50 px-4 py-3 rounded-xl border border-slate-100">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-accent)] shrink-0 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
