import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { absoluteUrl } from "@/lib/utils";
import { brand } from "@/lib/content";

export const metadata: Metadata = {
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
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
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
        {gaId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="ga4" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${gaId}');`}
            </Script>
          </>
        ) : null}
        <Script id="local-business-schema" type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </Script>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
