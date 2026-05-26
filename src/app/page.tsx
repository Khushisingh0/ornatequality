import type { Metadata } from "next";
import About from "@/components/Home/About";
import Hero from "@/components/Home/Hero";
import Services from "@/components/Home/Services";
import TrustProcess from "@/components/Home/TrustProcess";
import Query from "@/components/Home/Query";
import Faq from "@/components/Home/Faq";
import ValuedClients from "@/components/Home/ValuedClients";
import BlogPage from "./blog/page";
import Importance from "@/components/Home/Importance";
import { HomeJsonLd } from "@/components/seo/HomeJsonLd";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const HOME_TITLE =
  "BIS Certification Consultant in India | WPC, TEC, CRS & Compliance Services";

const HOME_DESCRIPTION =
  "Ornate Quality Services provides BIS Certification, CRS Registration, ISI Certification, WPC Approval, TEC Certification, LMPC Registration, FMCS Certification, product testing, and regulatory compliance services for manufacturers, importers, and global brands.";

export const metadata: Metadata = {
  title: HOME_TITLE,
  description: HOME_DESCRIPTION,
  authors: [{ name: SITE_NAME }],
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    title: HOME_TITLE,
    description:
      "Expert consultants for BIS Certification, CRS Registration, WPC Approval, TEC Certification, FMCS, LMPC, and compliance services in India.",
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: SITE_NAME }],
    locale: "en_IN",
  },
  other: {
    language: "English",
    "geo.region": "IN-UP",
    "geo.placename": "Noida",
  },
};

export default function Home() {
  return (
    <>
      <HomeJsonLd />
      <Hero />
      <About />
      <Importance />
      <Services />
      <TrustProcess />
      <BlogPage />
      <ValuedClients />
      <Query />
      <Faq />
    </>
  );
}
