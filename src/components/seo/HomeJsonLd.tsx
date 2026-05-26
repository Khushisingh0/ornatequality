import { DEFAULT_PHONE, SITE_NAME, SITE_URL } from "@/lib/site";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description:
    "Ornate Quality Services provides BIS Certification, CRS Registration, WPC Approval, TEC Certification, FMCS Certification, LMPC Registration, product testing, and regulatory compliance services in India.",
  sameAs: ["https://www.linkedin.com/", "https://www.facebook.com/"],
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE_NAME,
  image: `${SITE_URL}/logo.png`,
  "@id": SITE_URL,
  url: SITE_URL,
  telephone: DEFAULT_PHONE,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Noida",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 28.5355,
    longitude: 77.391,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
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

export function HomeJsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
    </>
  );
}
