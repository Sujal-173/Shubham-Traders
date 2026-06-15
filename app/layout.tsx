import type { Metadata } from "next";
import Script from "next/script";
import { GoogleTagManager } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { absoluteUrl } from "@/lib/utils";
import { brand } from "@/lib/content";

export const metadata: Metadata = {
  verification: {
    google: "K3ryoJP69AMuKwoOGsfPziZ-GlQrkmhMclWCReiY-fo",
  },
  metadataBase: new URL(absoluteUrl()),
  title: {
    default: "Shubham Traders | Solar EPC Company in Madhya Pradesh",
    template: "%s | Shubham Traders",
  },
  description:
    "Premium end-to-end solar EPC services for homes, businesses, factories and farms in Madhya Pradesh.",
  openGraph: {
    title: "Shubham Traders Solar EPC",
    description: brand.tagline,
    url: absoluteUrl(),
    siteName: "Shubham Traders",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shubham Traders Solar EPC",
    description: brand.tagline,
  },
  alternates: {
    canonical: absoluteUrl(),
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: brand.name,
    description: brand.tagline,
    telephone: brand.phones,
    email: brand.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kasrawad",
      addressRegion: "Madhya Pradesh",
      addressCountry: "IN",
    },
    areaServed: ["Khargone", "Kasrawad", "Madhya Pradesh"],
    url: absoluteUrl(),
  };

  return (
    <html lang="en-IN" suppressHydrationWarning>
      <body>
        {/* Google Tag Manager */}
        {process.env.NEXT_PUBLIC_GTM_ID && (
          <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
        )}

        {/* Local Business Schema */}
        <Script
          id="local-business-schema"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify(localBusinessSchema)}
        </Script>

        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:bg-solar focus:px-4 focus:py-2 focus:text-navy focus:font-bold"
        >
          Skip to main content
        </a>

        <SiteHeader />

        <main id="main-content">
          {children}
        </main>

        <SiteFooter />
        <SpeedInsights />
      </body>
    </html>
  );
}
