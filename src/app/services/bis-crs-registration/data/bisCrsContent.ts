export type TocItem = {
  id: string;
  label: string;
};

export const BIS_CRS_TOC: TocItem[] = [
  { id: "introduction", label: "Introduction" },
  { id: "what-is-bis", label: "What is BIS Certification?" },
  { id: "importance", label: "Importance of BIS Certification" },
  { id: "types", label: "Types of BIS Certification" },
  { id: "products-covered", label: "Products Covered Under BIS" },
  { id: "process", label: "BIS Certification Process" },
  { id: "documents", label: "Documents Required for BIS" },
  { id: "fees", label: "BIS Certification Fees" },
  { id: "validity", label: "Validity and Renewal" },
  { id: "difference", label: "Difference Between ISI, CRS & FMCS" },
  { id: "who-needs", label: "Who Needs BIS Certification?" },
  { id: "penalties", label: "Penalties for Non-Compliance" },
  { id: "why-ornate", label: "Why Choose Ornate Quality Services?" },
  { id: "faq", label: "Frequently Asked Questions" },
  { id: "get-started", label: "Get Started Today" },
];

export const WHY_ORNATE_ITEMS = [
  "15+ Years of Compliance Expertise",
  "Dedicated BIS Certification Team",
  "End-to-End Documentation Support",
  "Faster Testing & Approval Timelines",
  "Trusted by 5000+ Manufacturers & Importers",
  "Transparent Pricing with No Hidden Costs",
  "Post-Certification Renewal Assistance",
];

export const LATEST_NOTIFICATIONS = [
  {
    date: "12 May 2026",
    title: "BIS CRS timeline update for wireless products",
  },
  {
    date: "28 Apr 2026",
    title: "New Indian Standard amendments for LED lighting products",
  },
  {
    date: "15 Apr 2026",
    title: "BIS portal update: revised factory inspection guidelines",
  },
  {
    date: "02 Apr 2026",
    title: "Mandatory CRS registration expanded for smart wearables",
  },
];

export const OUR_SERVICES_LINKS = [
  { label: "BIS CRS Registration", href: "/services/bis-crs-registration" },
  { label: "BIS ISI Mark Certification", href: "/services/bis-isi-mark-certification" },
  { label: "BIS FMCS Certification", href: "/services/bis-fmcs-certification" },
  { label: "WPC-ETA Approval", href: "/services#wpc-approval" },
  { label: "BEE Registration", href: "/services/bee-certification" },
  { label: "EPR Registration", href: "/services#epr-registration" },
  { label: "LMPC Registration", href: "/services#lmpc-registration" },
  { label: "TEC Certification", href: "/services#tec-certification" },
  { label: "CE Certification", href: "/services#ce-certification" },
];

export const IMPORTANCE_ITEMS = [
  { icon: "shield", label: "Product Safety" },
  { icon: "legal", label: "Legal Compliance" },
  { icon: "trust", label: "Brand Trust" },
  { icon: "market", label: "Market Acceptance" },
  { icon: "customs", label: "Smooth Customs Clearance" },
  { icon: "consumer", label: "Consumer Confidence" },
];

export const CERT_TYPES = [
  {
    title: "ISI Certification",
    subtitle: "Industrial & Consumer Products",
    description:
      "Mandatory for products listed under the Compulsory Registration Scheme (CRS) and Quality Control Orders. Covers domestic manufacturing and import of regulated goods.",
    tone: "isi",
  },
  {
    title: "CRS Registration",
    subtitle: "Electronics & IT Products",
    description:
      "Compulsory Registration Scheme for electronic and IT goods. Required before manufacturing, importing, or selling covered products in the Indian market.",
    tone: "crs",
  },
  {
    title: "FMCS Certification",
    subtitle: "For Foreign Manufacturers",
    description:
      "Foreign Manufacturers Certification Scheme enables overseas manufacturers to obtain BIS certification through authorized Indian representatives.",
    tone: "fmcs",
  },
];

export const PRODUCTS_COVERED = [
  { label: "Mobile Phones", emoji: "📱" },
  { label: "LED Lights", emoji: "💡" },
  { label: "Laptops", emoji: "💻" },
  { label: "Power Adapters", emoji: "🔌" },
  { label: "Batteries", emoji: "🔋" },
  { label: "CCTV Cameras", emoji: "📷" },
  { label: "Smart Watches", emoji: "⌚" },
  { label: "Televisions", emoji: "📺" },
];

export const PROCESS_STEPS = [
  { step: "01", label: "Product Identification", color: "#0b57b5" },
  { step: "02", label: "Documentation", color: "#2563eb" },
  { step: "03", label: "Product Testing", color: "#0891b2" },
  { step: "04", label: "Application Submission", color: "#059669" },
  { step: "05", label: "Factory Inspection", color: "#d97706" },
  { step: "06", label: "BIS Review", color: "#dc2626" },
  { step: "07", label: "Grant of Certificate", color: "#7c3aed" },
];

export const FAQ_ITEMS = [
  {
    q: "What is BIS CRS Registration?",
    a: "BIS CRS (Compulsory Registration Scheme) is a mandatory certification for electronic and IT products sold in India. It ensures products meet Indian safety and quality standards before market entry.",
  },
  {
    q: "How long does BIS CRS certification take?",
    a: "Typically 4–8 weeks depending on product category, testing requirements, and documentation completeness. Ornate helps expedite timelines with pre-submission review.",
  },
  {
    q: "Who needs BIS CRS certification?",
    a: "Manufacturers, importers, and sellers of electronic and IT products covered under BIS orders must obtain CRS registration before placing products in the Indian market.",
  },
  {
    q: "What is the validity of a BIS CRS certificate?",
    a: "BIS CRS certificates are generally valid for two years and must be renewed before expiry to continue legal sale of the product in India.",
  },
];
