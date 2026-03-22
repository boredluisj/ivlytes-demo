import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SkipToContent from "@/components/layout/SkipToContent";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ivlytes.com"),
  title: {
    default: "IV-LYTES & Wellness | Kingwood's Premier IV Therapy Clinic",
    template: "%s | IV-LYTES & Wellness",
  },
  description:
    "Physician-supervised IV hydration therapy, colonic hydrotherapy, BioTE hormone therapy, medical weight loss, and SkinPen microneedling in Kingwood, TX.",
  keywords: [
    "IV therapy Kingwood",
    "IV hydration Houston",
    "colonic hydrotherapy",
    "BioTE hormone therapy",
    "medical weight loss Kingwood",
    "SkinPen microneedling",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ivlytes.com",
    siteName: "IV-LYTES & Wellness",
    title: "IV-LYTES & Wellness | Kingwood's Premier IV Therapy Clinic",
    description:
      "Physician-supervised wellness treatments in Kingwood, TX. IV hydration, hormone therapy, weight loss, and more.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IV-LYTES & Wellness",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IV-LYTES & Wellness",
    description: "Kingwood's Premier IV Therapy & Wellness Clinic",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "IV-LYTES & Wellness",
  description:
    "Kingwood's premier IV therapy and wellness clinic offering IV hydration, colonic hydrotherapy, BioTE hormone therapy, medical weight loss, and SkinPen microneedling.",
  url: "https://ivlytes.com",
  telephone: "+12816669211",
  address: {
    "@type": "PostalAddress",
    streetAddress: "320 Kingwood Executive Dr., Suite D",
    addressLocality: "Kingwood",
    addressRegion: "TX",
    postalCode: "77339",
    addressCountry: "US",
  },
  openingHours: ["Mo-Th 09:00-18:00", "Fr 09:00-13:00"],
  medicalSpecialty: "IV Therapy, Wellness, Anti-Aging",
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#0B1120] text-[#F0EDE8] font-inter antialiased">
        <SkipToContent />
        <Header />
        <main id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
