import { SITE_NAME, SITE_URL } from "@/lib/site";

export const BLOG_TITLE = "Blogs & Articles | Compliance Insights";
export const BLOG_DESCRIPTION =
  "Read expert articles on BIS certification, CRS registration, WPC ETA, EPR, FMCS, and regulatory compliance for manufacturers and importers in India.";

export const BLOG_KEYWORDS = [
  "BIS certification blog",
  "compliance articles India",
  "CRS registration guide",
  "WPC ETA approval",
  "EPR compliance",
  "product certification insights",
  SITE_NAME,
];

export const blogWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: BLOG_TITLE,
  description: BLOG_DESCRIPTION,
  url: `${SITE_URL}/blog`,
  isPartOf: {
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
  },
};
