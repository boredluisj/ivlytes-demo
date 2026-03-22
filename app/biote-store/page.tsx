import type { Metadata } from "next";
import { ExternalLink, ShoppingBag } from "lucide-react";
import { bioTeProducts, productCategories } from "@/lib/biote-products-data";
import SectionHeading from "@/components/shared/SectionHeading";
import AnimateOnScroll from "@/components/shared/AnimateOnScroll";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "BioTE Nutraceuticals Store | IV-LYTES & Wellness",
  description: "Shop physician-recommended BioTE nutraceuticals — DIM SGS+, ADK, Omega 3+CoQ10, and 25+ more. Available through our partner portal at patients.shopbiote.com.",
  openGraph: {
    title: "BioTE Nutraceuticals | IV-LYTES & Wellness",
    description: "25+ physician-recommended BioTE supplements for hormone support, cardiovascular health, anti-aging, and more.",
  },
};

export default function BioTeStorePage() {
  return (
    <section className="pt-24 pb-24 bg-[#0B1120]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="mb-6">
          <SectionHeading
            label="BioTE Nutraceuticals"
            title="Physician-Recommended Supplements"
            subtitle="Clinical-grade supplements curated to complement BioTE hormone therapy and support your overall wellness."
          />
        </AnimateOnScroll>

        <AnimateOnScroll className="mb-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 rounded-xl bg-[#2DD4BF]/[0.06] border border-[#2DD4BF]/20">
            <ShoppingBag className="w-5 h-5 text-[#2DD4BF] flex-shrink-0" />
            <p className="text-sm text-[#9BA8BB]">
              All products are purchased through our partner portal at{" "}
              <a href="https://patients.shopbiote.com" target="_blank" rel="noopener noreferrer" className="text-[#2DD4BF] font-semibold hover:underline">
                patients.shopbiote.com
              </a>. Purchases are secured and fulfilled directly by BioTE.
            </p>
          </div>
        </AnimateOnScroll>

        {productCategories.map((category, ci) => {
          const products = bioTeProducts.filter((p) => p.category === category);
          return (
            <div key={category} className="mb-14">
              <AnimateOnScroll className="mb-6">
                <h2 className="text-xl font-sora font-semibold text-[#F0EDE8] flex items-center gap-3">
                  <span className="h-px flex-grow bg-gradient-to-r from-[#2DD4BF]/30 to-transparent" />
                  {category}
                  <span className="h-px flex-grow bg-gradient-to-l from-[#2DD4BF]/30 to-transparent" />
                </h2>
              </AnimateOnScroll>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {products.map((product, i) => (
                  <AnimateOnScroll key={product.id} delay={i * 0.05}>
                    <a
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block h-full"
                    >
                      <GlassCard hover className="p-5 h-full flex flex-col">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="font-sora font-semibold text-[#F0EDE8] text-sm group-hover:text-[#2DD4BF] transition-colors">{product.name}</h3>
                          <ExternalLink className="w-3.5 h-3.5 text-[#9BA8BB] flex-shrink-0 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <p className="text-xs text-[#9BA8BB] leading-relaxed flex-grow mb-4">{product.description}</p>
                        <span className="text-xs text-[#2DD4BF] font-medium">Buy at shopbiote.com →</span>
                      </GlassCard>
                    </a>
                  </AnimateOnScroll>
                ))}
              </div>
            </div>
          );
        })}

        <AnimateOnScroll>
          <div className="text-center mt-8 p-8 rounded-2xl bg-[#2DD4BF]/[0.06] border border-[#2DD4BF]/20">
            <p className="text-[#F0EDE8] font-semibold mb-2">Ready to shop?</p>
            <p className="text-sm text-[#9BA8BB] mb-4">All BioTE products are available through our patient portal. Secure checkout, fast shipping.</p>
            <a href="https://patients.shopbiote.com" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#2DD4BF] text-[#0B1120] font-semibold rounded-xl hover:bg-[#2DD4BF]/90 transition-all">
              Shop at patients.shopbiote.com <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
