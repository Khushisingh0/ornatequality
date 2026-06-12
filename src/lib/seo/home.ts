import { SITE_NAME, SITE_URL } from "@/lib/site";

export const HOME_TITLE =
  "BIS Certification Consultant India | Ornate Quality Services";

export const HOME_DESCRIPTION =
  "India's trusted BIS Certification Consultant. Expert support for WPC, TEC, CRS, BEE, EPR & LMPC. 13+ years · 5000+ certifications · 98% success rate. Free consultation.";

export const HOME_KEYWORDS = [
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
];

export const HOME_OG_IMAGE_ALT =
  "Ornate Quality Services — BIS Certification Consultant India";

export type HomeFaqItem = {
  q: string;
  a: string;
};

/** Shared by FAQ UI and FAQPage JSON-LD — edit here only */
export const HOME_FAQS: HomeFaqItem[] = [
  {
    q: "What is BIS certification and why is it mandatory in India?",
    a: "BIS certification is a mandatory quality mark required by the Government of India for specific product categories under the BIS Act, 2016. Products like electronics, appliances, steel, cement, and toys must carry the ISI mark or CRS registration before they can be legally sold in India. Selling without BIS certification can result in penalties or product seizure.",
  },
  {
    q: "How long does it take to get BIS CRS registration in India?",
    a: "BIS CRS registration typically takes 4–8 weeks once all documents and test reports are ready. The timeline depends on product category, testing lab availability, and document completeness. Ornate Quality Services helps clients reduce avoidable delays through accurate documentation and direct coordination with testing labs and BIS authorities.",
  },
  {
    q: "What is WPC ETA approval and which products require it?",
    a: "WPC ETA is mandatory certification required in India for all wireless communication devices such as Wi-Fi routers, Bluetooth devices, mobile phones, drones, and IoT equipment. It ensures the device operates on approved frequency bands and does not interfere with other communications. Importers and manufacturers must obtain WPC ETA before market entry.",
  },
  {
    q: "What is EPR registration and who needs it in India?",
    a: "EPR (Extended Producer Responsibility) registration is mandatory for producers, importers, and brand owners of electronics and plastic packaging. It requires registering with the Central Pollution Control Board (CPCB) and meeting annual collection and recycling targets. Non-compliance can result in fines and import bans.",
  },
  {
    q: "Can foreign companies or importers apply for BIS certification in India?",
    a: "Yes, foreign manufacturers can apply for BIS certification through an Authorized Indian Representative (AIR). Ornate Quality Services assists foreign manufacturers and importers in appointing an AIR, preparing foreign test reports from BIS-recognized labs, and managing the entire BIS application process for Indian market entry.",
  },
  {
    q: "Why should I use a BIS certification consultant instead of applying directly?",
    a: "A BIS certification consultant accelerates approvals by preparing accurate documentation, coordinating with BIS-recognized testing labs, and managing follow-ups with regulatory authorities. Ornate Quality Services has a 98% first-time approval rate and has delivered 5000+ certifications over 13+ years, significantly reducing time-to-market.",
  },
];

export const homeWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: HOME_TITLE,
  description: HOME_DESCRIPTION,
  url: SITE_URL,
  isPartOf: {
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
  },
};

export const homeFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: HOME_FAQS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export const homeBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: `${SITE_URL}/`,
    },
  ],
};
