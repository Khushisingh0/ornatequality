import { SITE_NAME, SITE_URL } from "@/lib/site";

export const HOME_TITLE =
  "BIS Certification Consultant in India | WPC, TEC, CRS & Compliance Services";

export const HOME_DESCRIPTION =
  "Ornate Quality Services provides BIS Certification, CRS Registration, ISI Certification, WPC Approval, TEC Certification, LMPC Registration, BEE Certification, FMCS Certification, product testing, and regulatory compliance services for manufacturers, importers, and global brands.";

export const HOME_KEYWORDS = [
  "BIS Certification",
  "BIS consultant India",
  "CRS Registration",
  "ISI Mark Certification",
  "WPC Approval",
  "TEC Certification",
  "FMCS Certification",
  "LMPC Registration",
  "BEE Certification",
  "EPR Registration",
  "product certification India",
  "regulatory compliance India",
  "Ornate Quality Services",
  "compliance consultant Noida",
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
