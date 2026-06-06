import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Hero from "@/components/Home/Hero";
import About from "@/components/Home/About";
import Services from "@/components/Home/Services";
import Importance from "@/components/Home/Importance";

const TrustProcess = dynamic(() => import("@/components/Home/TrustProcess"));
const BlogSection = dynamic(() => import("@/components/Home/BlogSection"));
const ValuedClients = dynamic(() => import("@/components/Home/ValuedClients"));
const Query = dynamic(() => import("@/components/Home/Query"));
const Faq = dynamic(() => import("@/components/Home/Faq"));
import { JsonLdList } from "@/components/seo/JsonLdScripts";
import {
  HOME_DESCRIPTION,
  HOME_KEYWORDS,
  HOME_TITLE,
  homeWebPageSchema,
} from "@/lib/seo/home";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: HOME_TITLE,
  description: HOME_DESCRIPTION,
  keywords: HOME_KEYWORDS,
  authors: [{ name: SITE_NAME }],
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: HOME_TITLE,
    description:
      "Expert consultants for BIS Certification, CRS Registration, WPC Approval, TEC Certification, FMCS, LMPC, and compliance services in India.",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/favicon.ico",
        width: 256,
        height: 256,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: HOME_TITLE,
    description:
      "Expert consultants for BIS Certification, CRS Registration, WPC Approval, TEC Certification, FMCS, LMPC, and compliance services in India.",
  },
  other: {
    language: "English",
    "geo.region": "IN-UP",
    "geo.placename": "Noida",
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLdList schemas={[homeWebPageSchema]} />
      <Hero />
      <About />
      <Importance />
      <Services />
      <TrustProcess />
      <BlogSection />
      <ValuedClients />
      <Query />
      <Faq />
    </>
  );
}
