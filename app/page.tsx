import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import About from "@/components/sections/About";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTABanner from "@/components/sections/CTABanner";
import BlogPreview from "@/components/sections/BlogPreview";

export const metadata: Metadata = {
  title: "IV-LYTES & Wellness | Kingwood's Premier IV Therapy Clinic",
  description:
    "Physician-supervised IV hydration therapy, colonic hydrotherapy, BioTE hormone therapy, medical weight loss, and SkinPen microneedling in Kingwood, TX. Same-day appointments available.",
  openGraph: {
    title: "IV-LYTES & Wellness | Kingwood TX",
    description:
      "Kingwood's premier IV therapy and wellness clinic. Physician-supervised. Cash-pay. Same-day appointments.",
    url: "https://ivlytes.com",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <About />
      <Testimonials />
      <FAQ />
      <BlogPreview />
      <CTABanner />
    </>
  );
}
