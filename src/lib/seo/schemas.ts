import { DEFAULT_PHONE, SITE_NAME, SITE_URL } from "@/lib/site";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description:
    "Ornate Quality Services provides BIS Certification, CRS Registration, WPC Approval, TEC Certification, FMCS Certification, LMPC Registration, product testing, and regulatory compliance services in India.",
  sameAs: ["https://www.linkedin.com/", "https://www.facebook.com/"],
};

export const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE_NAME,
  image: `${SITE_URL}/logo.png`,
  "@id": SITE_URL,
  url: SITE_URL,
  telephone: DEFAULT_PHONE,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Office No. 1726, Astralis Tower, Sector 94",
    addressLocality: "Noida",
    addressRegion: "Uttar Pradesh",
    postalCode: "201301",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 28.5511,
    longitude: 77.3246,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    opens: "09:00",
    closes: "18:30",
  },
  serviceType: [
    "BIS Certification",
    "CRS Registration",
    "ISI Certification",
    "WPC Approval",
    "TEC Certification",
    "FMCS Certification",
    "LMPC Registration",
    "Product Testing",
    "Regulatory Compliance Services",
  ],
};

export const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  description:
    "BIS Certification, CRS Registration, WPC Approval, TEC Certification, FMCS, LMCS and regulatory compliance consultancy in India.",
  publisher: {
    "@type": "Organization",
    name: SITE_NAME,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo.png`,
    },
  },
};

/** Pretty-printed JSON-LD for readable “View Page Source” (like classic PHP sites). */
export function jsonLdScript(schema: object): string {
  return JSON.stringify(schema, null, 4);
}
