export type TocItem = {
  id: string;
  label: string;
};

export const BIS_ISI_TOC: TocItem[] = [
  { id: "introduction", label: "Introduction" },
  { id: "what-is-isi", label: "What is ISI Certification?" },
  { id: "isi-registration", label: "What is ISI Registration?" },
  { id: "importance", label: "Why is ISI Certification Important?" },
  { id: "isi-mark", label: "What is the ISI Mark?" },
  { id: "indian-manufacturers", label: "ISI Mark for Indian Manufacturers" },
  { id: "why-important-manufacturers", label: "Why ISI Mark Matters for Manufacturers" },
  { id: "procedure", label: "Procedure to Obtain the ISI Mark" },
  { id: "challenges", label: "Challenges in ISI Certification" },
  { id: "difference", label: "ISI Mark vs BIS Certification" },
  { id: "requirements", label: "Basic Requirements" },
  { id: "mandatory-products", label: "Mandatory Products" },
  { id: "process", label: "ISI Certification Process" },
  { id: "how-to-get", label: "How to Get ISI Certification" },
  { id: "benefits", label: "Benefits of ISI Certification" },
  { id: "documents", label: "Documents Required" },
  { id: "products-list", label: "Products Under ISI Certification" },
  { id: "validity", label: "Validity and Renewal" },
  { id: "documents-india", label: "Documents Required in India" },
  { id: "why-ornate", label: "Why Choose Ornate Quality Services?" },
  { id: "final-thoughts", label: "Final Thoughts" },
  { id: "get-certified", label: "Get Your ISI Certification Now" },
  { id: "faq", label: "Frequently Asked Questions" },
];

export const MANUFACTURER_IMPORTANCE = [
  {
    title: "Compliance with the Law, Avoiding Penalties",
    text: "The Indian government has mandated the ISI mark for several product categories so consumers can be reasonably safe. Selling a product without the ISI mark may result in fines, legal penalties, and product recalls.",
  },
  {
    title: "Consumer Trust",
    text: "The ISI mark tells the consumer that the product meets rigorous safety and performance tests; hence, consumers are inclined to buy an ISI-marked product rather than one that is not marked.",
  },
  {
    title: "Wider Market Opportunities and Growth",
    text: "Products without ISI Certification may find many retailers, distributors, and wholesalers unwilling to stock them. In addition, many government tenders and bulk supply contracts also require ISI-certified products.",
  },
  {
    title: "Industry-Purpose Competitive Advantage",
    text: "ISI Certification gives a product credibility and recognition, making competing in domestic and international markets easier.",
  },
];

export const PROCEDURE_STEPS = [
  {
    title: "Identification of the Relevant Indian Standard (IS Code)",
    text: "Each product category will have its own Indian Standard (code) that gives the testing parameters, quality levels, and safety requirements. Manufacturers have the duty to identify the correct IS code applicable to their products.",
  },
  {
    title: "Application for ISI Certificate",
    text: "Manufacturers must apply through Form V on the BIS portal, mentioning the application ID along with business registration documents, product specification, and manufacturing process information.",
  },
  {
    title: "Testing of the Product in BIS-Recognized Laboratories",
    text: "The product is extensively tested in a BIS-approved lab to check its safety, durability, and quality under the prescribed standards.",
  },
  {
    title: "Factory Inspection by BIS Representatives",
    text: "A team of BIS officers shall visit the manufacturing unit to assess production processes, quality control systems, raw material sourcing, and testing facilities available in the factory.",
  },
  {
    title: "Approval of ISI Certification and Mark Usage",
    text: "If a product passes all tests and inspections, the BIS will grant ISI Certification. Following this, the ISI Mark can be lawfully used by the manufacturers for their products.",
  },
];

export const PROCESS_STEPS = [
  { step: "01", label: "Identify Product Category", color: "#0b57b5" },
  { step: "02", label: "Submit Application", color: "#2563eb" },
  { step: "03", label: "Product Testing", color: "#0891b2" },
  { step: "04", label: "Factory Inspection", color: "#059669" },
  { step: "05", label: "Certification Approval", color: "#7c3aed" },
];

export const HOW_TO_GET_STEPS = [
  "Determine Eligibility – Identify if your product requires mandatory ISI Certification.",
  "Choose the Relevant Indian Standard (IS Code) – Each product category has a specific IS code that defines the testing and quality parameters.",
  "Register on the BIS Portal – Submit the online application on the BIS portal, providing company and product details.",
  "Submit Required Documents – Provide necessary documentation such as business registration, test reports, and manufacturing process details.",
  "Send Product for Testing – A sample must be sent to a BIS-recognized lab for evaluation.",
  "Schedule a Factory Inspection – BIS officials conduct an on-site audit to check manufacturing capabilities and quality control measures.",
  "Receive Certification – If the application is approved, the ISI Certificate is granted, allowing the product to carry the ISI Mark.",
  "Renewal and Compliance Checks – Periodic audits and renewal processes must be followed to maintain the certification.",
];

export const MANDATORY_PRODUCTS = [
  { label: "Electrical Wires & Cables", emoji: "🔌" },
  { label: "Cement & Steel", emoji: "🏗️" },
  { label: "Packaged Drinking Water", emoji: "💧" },
  { label: "Gas Stoves & LPG", emoji: "🔥" },
  { label: "Automobiles & Helmets", emoji: "🏍️" },
  { label: "Pressure Cookers", emoji: "🍳" },
  { label: "Toys & Child Products", emoji: "🧸" },
  { label: "Water Heaters", emoji: "♨️" },
];

export const PRODUCTS_LIST = [
  "Electrical appliances include switches, cables, and motors.",
  "Cement and construction raw materials.",
  "Steel products.",
  "Household and industrial gas stoves.",
  "Automobile components.",
  "Packaged drinking water.",
  "Toys and child care items.",
];

export const BENEFITS_ITEMS = [
  { icon: "legal", label: "Legal Compliance" },
  { icon: "trust", label: "Consumer Trust" },
  { icon: "market", label: "Market Competitiveness" },
  { icon: "shield", label: "Reduced Market Rejection Risk" },
];

export const COMPARISON_ROWS = [
  {
    feature: "Definition",
    isi: "Product-specific quality mark",
    bis: "Covers various certification schemes",
  },
  {
    feature: "Scope",
    isi: "Applies to mandatory ISI-certified products",
    bis: "Includes ISI Mark, Hallmarking, and FMCS",
  },
  {
    feature: "Issued by",
    isi: "Bureau of Indian Standards (BIS)",
    bis: "Bureau of Indian Standards (BIS)",
  },
  {
    feature: "Purpose",
    isi: "Ensures product safety and quality compliance",
    bis: "Ensures industry-wide standard compliance",
  },
];

export const DOCUMENTS_INDIA_SECTIONS = [
  {
    title: "Business Registration Documents",
    items: [
      "Certificate of Incorporation",
      "GST Registration Certificate",
      "Factory License or MSME Registration",
    ],
  },
  {
    title: "Manufacturing Facility Details",
    items: [
      "Address and layout plan of the factory",
      "Machinery and equipment list used in production",
      "Quality control and testing facilities available in-house",
    ],
  },
  {
    title: "Product Specifications & Testing Reports",
    items: [
      "Technical specification of products",
      "Testing report from a BIS-recognised laboratory",
      "Details of raw materials used in the manufacture",
    ],
  },
  {
    title: "Trademark & Brand Ownership",
    items: [
      "Trademark registration certificate",
      "Authorisation letter (if the brand is registered under a different entity)",
    ],
  },
  {
    title: "Authorized Signatory Documents",
    items: [
      "An authorisation letter from the company",
      "Valid ID proof (Aadhaar Card, PAN Card, Passport, etc.)",
    ],
  },
  {
    title: "Other Compliance Certificates",
    items: [
      "Environmental clearance certificate, if applicable",
      "Previous BIS certifications, if any",
      "Import-export papers, in the case of foreign manufacturers",
    ],
  },
];

export const WHY_ORNATE_ISI = [
  "Expert Guidance: Our specialists simplify the ISI Certification process, ensuring smooth approvals.",
  "Faster Processing: We speed up the application and renewal process to help you avoid business disruptions.",
  "End-to-End Support: From documentation to audits, we manage everything for a seamless experience.",
  "Trusted by Manufacturers: Hundreds of businesses trust us for their certification needs.",
];

export const FAQ_ITEMS = [
  {
    q: "What is BIS ISI Certification?",
    a: "ISI Certification is a quality mark issued by BIS that confirms a product meets Indian safety and quality standards.",
  },
  {
    q: "Is the ISI mark mandatory in India?",
    a: "Yes, the ISI mark is mandatory for many products, such as electronics, cement, and steel, as per BIS regulations.",
  },
  {
    q: "How do you get a BIS ISI Certification?",
    a: "Apply to BIS, inspect your factory, and test your product at a BIS-approved lab. If all meets standards, you get certified.",
  },
  {
    q: "Who can apply for ISI Certification?",
    a: "Only manufacturers with a functional factory in India can apply. Traders or importers cannot apply directly.",
  },
  {
    q: "Is BIS Certification different from ISI?",
    a: "Yes. BIS is the authority. ISI is a type of certification under BIS for Indian standard-compliant products.",
  },
  {
    q: "What happens if I sell without the ISI mark?",
    a: "You can face fines and legal action, and your products may be banned from the market.",
  },
  {
    q: "How do you check if a product is ISI certified?",
    a: "Visit the BIS website and use their license search to verify ISI-marked products.",
  },
];
