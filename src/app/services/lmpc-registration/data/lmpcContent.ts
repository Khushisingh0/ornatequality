export type TocItem = {
  id: string;
  label: string;
};

export const LMPC_TOC: TocItem[] = [
  { id: "introduction", label: "Introduction" },
  { id: "what-is-lmpc", label: "What is LMPC Registration?" },
  { id: "importance", label: "Why LMPC Registration Matters" },
  { id: "products-covered", label: "Products Covered Under LMPC" },
  { id: "process", label: "LMPC Registration Process" },
  { id: "requirements", label: "LMPC Registration Requirements" },
  { id: "documents", label: "Documents Required" },
  { id: "cost", label: "LMPC Registration Cost" },
  { id: "validity", label: "Validity & Renewal" },
  { id: "benefits", label: "Benefits of LMPC Registration" },
  { id: "penalties", label: "Penalties for Non-Compliance" },
  { id: "case-study", label: "Case Study (Real Example)" },
  { id: "faq", label: "Frequently Asked Questions" },
  { id: "get-started", label: "Get Expert Assistance" },
];

export const PRODUCTS_COVERED_ROWS = [
  {
    category: "Electronics & IT Products",
    examples: "Mobile phones, laptops, earphones, chargers, power banks",
    declarations:
      "MRP, net quantity, importer details, country of origin, date of import",
  },
  {
    category: "Cosmetics & Personal Care",
    examples: "Skincare, haircare, perfumes, makeup, toiletries",
    declarations:
      "MRP, net quantity, ingredients, importer address, expiry date",
  },
  {
    category: "Food & Beverages",
    examples: "Packaged foods, snacks, beverages, health supplements",
    declarations:
      "MRP, net weight, nutritional info, best before date, importer details",
  },
  {
    category: "Household Products",
    examples: "Cleaning products, kitchenware, small appliances",
    declarations: "MRP, net quantity, country of origin, importer details",
  },
  {
    category: "Toys & Baby Products",
    examples: "Toys, baby care items, infant accessories",
    declarations: "MRP, net quantity, age recommendation, importer address",
  },
  {
    category: "Apparel & Footwear",
    examples: "Branded clothing, shoes, accessories",
    declarations: "MRP, size, country of manufacture, importer details",
  },
  {
    category: "Sports & Fitness",
    examples: "Sports equipment, fitness accessories, outdoor gear",
    declarations: "MRP, net quantity, country of origin, importer details",
  },
  {
    category: "Medical & Health Devices",
    examples: "Non-prescription health devices, wellness products",
    declarations:
      "MRP, net quantity, instructions, importer address, country of origin",
  },
];

export const DOCUMENTS_ROWS = [
  {
    no: "1",
    document: "Business Registration Certificate",
    details:
      "Certificate of Incorporation, Partnership Deed, or proprietorship registration",
  },
  {
    no: "2",
    document: "GST Registration Certificate",
    details: "Valid GSTIN of the importing entity",
  },
  {
    no: "3",
    document: "Import Export Code (IEC)",
    details: "IEC certificate issued by DGFT",
  },
  {
    no: "4",
    document: "PAN Card",
    details: "PAN of the business entity or proprietor",
  },
  {
    no: "5",
    document: "Address Proof of Business Premises",
    details:
      "Rental agreement, ownership deed, or utility bill for the registered business address",
  },
  {
    no: "6",
    document: "Product Details & Description",
    details: "Category-wise list of all imported products covered under the application",
  },
  {
    no: "7",
    document: "Packaging Samples / Photographs",
    details: "Photographs or samples of current packaging showing existing declarations",
  },
  {
    no: "8",
    document: "Proposed Label / Sticker Design",
    details:
      "Draft of the label or sticker to be added showing all mandatory Indian declarations",
  },
  {
    no: "9",
    document: "Authorisation Letter",
    details: "If applying through a consultant — signed authorisation from the importer",
  },
  {
    no: "10",
    document: "Cancelled Cheque / Bank Details",
    details: "Bank account details of the registered business entity",
  },
];

export const PENALTIES_ROWS = [
  {
    violation: "Importing pre-packaged goods without LMPC Registration",
    penalty: "Fine up to INR 25,000 for first offence",
  },
  {
    violation: "Repeat offence without registration",
    penalty: "Fine up to INR 50,000 and possible imprisonment up to 1 year",
  },
  {
    violation: "Selling products without mandatory packaging declarations",
    penalty: "Product seizure and fine up to INR 10,000 per violation",
  },
  {
    violation: "False declarations on packaging",
    penalty: "Fine up to INR 50,000 and possible criminal prosecution",
  },
  {
    violation: "Non-compliance found during e-commerce platform audit",
    penalty: "Product delisting, account suspension, and regulatory notice",
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    label: "Assessment",
    color: "#0b57b5",
    title: "Step 1 — Eligibility Assessment & Product Review",
    text: "The first step is confirming that your products require LMPC Registration and identifying the specific mandatory declarations required for each product category under the Legal Metrology (Packaged Commodities) Rules. Our team reviews your product portfolio, confirms the applicable rules for each category, and prepares a complete compliance checklist covering all mandatory packaging declarations before we proceed to the application.",
  },
  {
    step: "02",
    label: "Packaging",
    color: "#2563eb",
    title: "Step 2 — Packaging Compliance Review",
    text: "Before filing the LMPC application, we review your existing product packaging against the mandatory declaration requirements — MRP, net quantity, country of origin, importer name and address, customer care details, date of import, and category-specific requirements. Where packaging is non-compliant, we advise on the most efficient way to add declarations through sticker labels, re-boxing, or updated packaging from the foreign manufacturer.",
  },
  {
    step: "03",
    label: "Documents",
    color: "#0891b2",
    title: "Step 3 — Document Preparation",
    text: "We prepare the complete LMPC application package including the application form, business registration documents, product details, packaging samples or photographs, and all supporting compliance documentation. The application must be filed in the name of the importer — the entity whose name and address will appear on the product packaging.",
  },
  {
    step: "04",
    label: "Filing",
    color: "#059669",
    title: "Step 4 — Online Application Filing",
    text: "The LMPC Registration application is filed online through the National Single Window System (NSWS) or the dedicated Legal Metrology portal, depending on state jurisdiction. For importers, the application is typically filed with the Controller of Legal Metrology at the central level. We manage the complete portal submission process and confirm correct jurisdiction and product category.",
  },
  {
    step: "05",
    label: "Review",
    color: "#d97706",
    title: "Step 5 — Application Review by Legal Metrology Department",
    text: "The Legal Metrology Department reviews the filed application and supporting documents. The review may include queries on product details, packaging declarations, or business registration. Our team monitors application status and responds to all queries promptly, with preemptive responses prepared for common product categories.",
  },
  {
    step: "06",
    label: "Certificate",
    color: "#dc2626",
    title: "Step 6 — Grant of LMPC Certificate",
    text: "Once the application review is complete and all requirements are satisfied, the Legal Metrology Department issues the LMPC Registration Certificate specifying the importer's details, product categories covered, and validity period. The certificate must be kept available for inspection and a copy should accompany every shipment of covered products entering India.",
  },
  {
    step: "07",
    label: "Compliance",
    color: "#7c3aed",
    title: "Step 7 — Packaging Label Update & Ongoing Compliance",
    text: "After receiving the LMPC Certificate, the importer must ensure all products sold in India carry mandatory declarations on packaging — including the importer's name, address, and LMPC Registration number where required. Our team provides guidance on correct label placement, declaration format, and ongoing compliance requirements.",
  },
];

export const BENEFITS_ITEMS = [
  "Legal compliance — import and sell pre-packaged products in India without risk of enforcement action",
  "Customs clearance — LMPC-registered importers face fewer compliance-related delays at Indian ports",
  "E-commerce access — meet compliance requirements for listing imported products on Amazon India and Flipkart",
  "Retail onboarding — satisfy compliance requirements of organised retail chains and national distributors",
  "Consumer trust — mandatory packaging declarations build buyer confidence and reduce return rates",
  "Protection from seizure — legally compliant products cannot be seized by Legal Metrology officers during market surveillance",
  "Government procurement — registered importers can supply to government buyers who require compliance documentation",
  "Business credibility — LMPC Registration demonstrates a serious, compliant approach to the Indian market",
];

export const FAQ_ITEMS = [
  {
    q: "Is LMPC Registration required for every importer of packaged goods?",
    a: "Yes. Under the Legal Metrology (Packaged Commodities) Rules, 2011, every importer of pre-packaged commodities sold in India must obtain LMPC Registration. There is no exemption based on company size, import volume, or product value.",
  },
  {
    q: "What is the difference between LMPC Registration and BIS Certification?",
    a: "BIS Certification confirms a product meets specific Indian Standards for quality and safety. LMPC Registration is a packaging compliance registration ensuring imported pre-packaged products carry all mandatory consumer information declarations. Many imported products require both.",
  },
  {
    q: "Can existing stock be sold in India without LMPC Registration?",
    a: "No. Products sold in pre-packaged form must comply with the Packaged Commodities Rules at the time of sale. You can apply compliant sticker labels before selling, but selling without required declarations is a violation regardless of when stock was imported.",
  },
  {
    q: "How long does LMPC Registration take?",
    a: "The process typically takes 15 to 30 working days from the date of application, depending on the issuing authority and workload. With complete documentation, many applications are processed within 2 to 3 weeks.",
  },
  {
    q: "Does LMPC Registration cover all my imported products or just specific ones?",
    a: "LMPC Registration covers the product categories specified in your application. You can cover multiple categories under a single registration by including them in your initial application. New categories added later require an amendment.",
  },
];
