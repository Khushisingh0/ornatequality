import type { Metadata, Viewport } from "next";
import "./globals.css";

import TopBar from "@/components/common/Topbar";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import { JsonLdScripts } from "@/components/seo/JsonLdScripts";
import { inter, playfair } from "@/lib/fonts";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "BIS Certification Consultant India | Ornate Quality Services",
    template: `%s | Ornate Quality Services`,
  },

  description:
    "India's trusted BIS Certification Consultant. Expert support for WPC, TEC, CRS, BEE, EPR & LMPC. 13+ years · 5000+ certifications · 98% success rate. Free consultation.",

  keywords: [
    "BIS Certification Consultant India",
    "BIS CRS Registration",
    "ISI Mark Certification",
    "WPC ETA Approval",
    "TEC Certification",
    "BEE Certification",
    "EPR Registration",
    "LMPC Registration",
    "FMCS Certification",
    "product compliance India",
    "regulatory compliance consultant India",
  ],

  authors: [{ name: "Ornate Quality Services Pvt. Ltd." }],

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

 alternates: {
  canonical: SITE_URL,
    languages: {
      "en-IN": "/",
      "x-default": "/",
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Ornate Quality Services",
    url: SITE_URL,

    title: "BIS Certification Consultant India | Ornate Quality Services",

    description:
      "India's trusted BIS Certification Consultant. Expert support for WPC, TEC, CRS, BEE, EPR & LMPC. 13+ years · 5000+ certifications · 98% success rate. Free consultation.",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ornate Quality Services — BIS Certification Consultant India",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    creator: "@OrnateQuality",
    site: "@OrnateQuality",

    title: "BIS Certification Consultant India | Ornate Quality Services",

    description:
      "India's trusted BIS Certification Consultant. Expert support for WPC, TEC, CRS, BEE, EPR & LMPC. 13+ years · 5000+ certifications · 98% success rate.",

    images: ["/og-image.jpg"],
  },

  verification: {
    google: "REPLACE_WITH_GOOGLE_SEARCH_CONSOLE_TOKEN",
    other: {
      "msvalidate.01": "REPLACE_WITH_BING_WEBMASTER_TOKEN",
    },
  },

  formatDetection: {
    telephone: false,
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A2540",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
          <meta name="geo.region" content="IN-UP" />
  <meta name="geo.placename" content="Noida, Uttar Pradesh, India" />
  <meta name="geo.position" content="28.5510933;77.3245904" />
  <meta name="ICBM" content="28.5510933,77.3245904" />
        <JsonLdScripts />
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <TopBar />
        <Header />
        <main className="grow bg-white">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

 