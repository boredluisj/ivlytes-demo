import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const heading = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "600", "700"],
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "IV-LYTES & Wellness | Kingwood's Premier IV Therapy & Wellness Clinic",
  description: "MD-led IV therapy, hormone optimization, colonic hydrotherapy, and wellness treatments in Kingwood, TX.",
  openGraph: {
    title: "IV-LYTES & Wellness",
    description: "Kingwood's Premier Wellness Clinic",
    url: "https://ivlytes.com",
    siteName: "IV-LYTES & Wellness",
    images: [{ url: "/api/og", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalClinic",
              name: "IV-LYTES & Wellness",
              url: "https://ivlytes.com",
              telephone: "+12816669211",
              address: {
                "@type": "PostalAddress",
                streetAddress: "320 Kingwood Executive Dr, Suite D",
                addressLocality: "Kingwood",
                addressRegion: "TX",
                postalCode: "77339",
                addressCountry: "US",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
                  opens: "09:00",
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Friday",
                  opens: "09:00",
                  closes: "13:00",
                },
              ],
              medicalSpecialty: "IV Therapy",
              description:
                "MD-led IV therapy, hormone optimization, colonic hydrotherapy, and wellness treatments in Kingwood, TX.",
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
