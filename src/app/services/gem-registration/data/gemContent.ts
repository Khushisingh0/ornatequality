export type TocItem = {
  id: string;
  label: string;
};

export const GEM_TOC: TocItem[] = [
  { id: "introduction", label: "Introduction" },
  { id: "what-is-gem", label: "What is GeM Portal Registration?" },
  { id: "importance", label: "Why GeM Registration Matters" },
  { id: "process", label: "GeM Registration Process" },
  { id: "requirements", label: "GeM Registration Requirements" },
  { id: "documents", label: "Documents Required" },
  { id: "cost", label: "GeM Registration Cost" },
  { id: "validity", label: "Validity & Profile Maintenance" },
  { id: "benefits", label: "Benefits of GeM Registration" },
  { id: "challenges", label: "Common Challenges & How We Help" },
  { id: "case-study", label: "Case Study (Real Example)" },
  { id: "faq", label: "Frequently Asked Questions" },
  { id: "get-started", label: "Get Expert Assistance" },
];

export const GEM_CATEGORY_ROWS = [
  {
    category: "Electronics & IT",
    products: "Laptops, desktops, printers, scanners, UPS",
    certification: "BIS CRS Registration",
  },
  {
    category: "Electrical Equipment",
    products: "LED lights, fans, cables, switches, MCBs",
    certification: "BIS ISI Mark Certification",
  },
  {
    category: "Office Furniture & Supplies",
    products: "Chairs, tables, stationery, storage systems",
    certification: "Quality certification as applicable",
  },
  {
    category: "Medical Equipment",
    products: "Patient monitors, hospital beds, diagnostic devices",
    certification: "BIS / CDSCO certification",
  },
  {
    category: "Safety & Security",
    products: "CCTV cameras, access control, fire safety",
    certification: "BIS CRS / relevant certification",
  },
  {
    category: "Vehicles & Transport",
    products: "Buses, utility vehicles, EVs, bicycles",
    certification: "AIS / BIS certification",
  },
  {
    category: "Construction Materials",
    products: "TMT bars, cement, pipes, hardware",
    certification: "BIS ISI Mark Certification",
  },
  {
    category: "Apparel & Uniforms",
    products: "Uniforms, PPE, workwear, footwear",
    certification: "BIS certification where applicable",
  },
  {
    category: "Services",
    products: "IT services, cleaning, security, consulting",
    certification: "Service-specific compliance",
  },
  {
    category: "Agricultural Products",
    products: "Seeds, fertilisers, farm equipment",
    certification: "FSSAI / BIS certification",
  },
];

export const DOCUMENTS_ROWS = [
  {
    no: "1",
    document: "Business Registration Certificate",
    details:
      "Certificate of Incorporation, Partnership Deed, or Shop Act licence for proprietors",
  },
  {
    no: "2",
    document: "GST Registration Certificate",
    details: "Valid GSTIN of the selling entity",
  },
  {
    no: "3",
    document: "PAN Card",
    details: "Individual PAN for proprietors / company PAN for companies",
  },
  {
    no: "4",
    document: "Aadhaar Card",
    details: "Aadhaar of the primary contact / authorised signatory",
  },
  {
    no: "5",
    document: "Cancelled Cheque / Bank Statement",
    details: "Active bank account in the business name for GeM payment processing",
  },
  {
    no: "6",
    document: "MSME / Udyam Registration Certificate",
    details: "If applicable — for MSME purchase preference benefits",
  },
  {
    no: "7",
    document: "Product Certifications",
    details:
      "BIS CRS, ISI Mark, or other mandatory certifications for listed product categories",
  },
  {
    no: "8",
    document: "Brand / Trade Mark Certificate",
    details: "If listing under own brand — trade mark registration or brand ownership proof",
  },
  {
    no: "9",
    document: "ITR / Financial Statements",
    details: "Income Tax Return or audited accounts — may be required for higher turnover categories",
  },
  {
    no: "10",
    document: "Product Photographs",
    details: "High-quality photographs of all products to be listed on the GeM catalogue",
  },
];

export const CHALLENGES_ROWS = [
  {
    challenge: "Profile rejection due to document inconsistencies",
    solution:
      "We review all documents before submission and ensure names, addresses, and details match exactly",
  },
  {
    challenge: "Missing product certifications for GeM categories",
    solution:
      "We identify required certifications upfront and initiate certification alongside GeM registration",
  },
  {
    challenge: "Difficulty completing OEM verification",
    solution: "We manage the complete OEM documentation process and coordinate with GeM support",
  },
  {
    challenge: "Product listing rejected due to specification gaps",
    solution:
      "We prepare detailed, compliant product specifications that meet GeM catalogue standards",
  },
  {
    challenge: "Confusion about MSME benefits and eligibility",
    solution:
      "We confirm Udyam registration status and ensure all applicable MSME benefits are activated",
  },
  {
    challenge: "Profile suspended due to lapsed certifications",
    solution: "Our renewal tracking system ensures certifications are renewed before expiry",
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    label: "Assessment",
    color: "#0b57b5",
    title: "Step 1 — Eligibility Check & Business Assessment",
    text: "The first step is confirming your eligibility as a GeM seller and reviewing your business registration type, product categories, and existing certifications. Many GeM product categories require BIS, ISI, or other regulatory certifications as mandatory listing requirements. If certifications are needed, we initiate both GeM registration and product certification in parallel.",
  },
  {
    step: "02",
    label: "Documents",
    color: "#2563eb",
    title: "Step 2 — Document Preparation",
    text: "We prepare your complete GeM seller registration documentation including business registration certificates, GST and PAN details, bank account information, MSME/Udyam registration if applicable, trade mark details, and product certification documents. Our team reviews all documents for accuracy and consistency before submission.",
  },
  {
    step: "03",
    label: "Profile",
    color: "#0891b2",
    title: "Step 3 — GeM Portal Registration & Profile Creation",
    text: "We register your business on the GeM portal using your Aadhaar-linked mobile number or PAN-linked email, complete identity verification, bank account verification, and build a comprehensive seller profile including business description, product categories, certifications, turnover details, and MSME status.",
  },
  {
    step: "04",
    label: "Listing",
    color: "#059669",
    title: "Step 4 — Product Listing & Catalogue Creation",
    text: "Once your seller profile is active, we create your product listings with detailed specifications, photographs, pricing, delivery terms, and compliance documentation. For categories where BIS or ISI certification is mandatory, certification documents are uploaded at the listing stage.",
  },
  {
    step: "05",
    label: "OEM",
    color: "#d97706",
    title: "Step 5 — OEM / Brand Registration (If Applicable)",
    text: "Manufacturers who want to list products under their own brand must complete OEM registration with proof of manufacturing capability, brand ownership, and quality certifications. Our team manages the complete OEM registration process from document preparation to verification support.",
  },
  {
    step: "06",
    label: "Orders",
    color: "#dc2626",
    title: "Step 6 — Bid Participation & Order Management",
    text: "After successful registration and product listing, you can participate in GeM bids, reverse auctions, and direct purchase orders. Our team provides guidance on responding to bids effectively, competitive pricing, and managing orders, delivery confirmations, and payment requests through the GeM portal.",
  },
  {
    step: "07",
    label: "Maintenance",
    color: "#7c3aed",
    title: "Step 7 — Annual Profile Maintenance",
    text: "GeM seller profiles require periodic updates including renewal of certifications, updated turnover declarations, and profile information updates. Our team manages your GeM profile on an ongoing basis, ensuring everything remains current and listings stay active.",
  },
];

export const BENEFITS_ITEMS = [
  "Direct government access — sell to 50,000+ government buyer organisations across India from a single platform",
  "No middlemen — direct orders and structured payments without agents, brokers, or intermediaries",
  "Mandatory procurement channel — government departments must buy through GeM above specified thresholds",
  "MSME preference — purchase preference provisions for registered MSMEs in qualifying categories",
  "Transparent pricing — competitive pricing visibility improves negotiating position with all buyers",
  "Pan India reach — a single GeM listing is visible to buyers across all states and union territories",
  "Credibility boost — GeM registration signals a verified, compliant business to both government and private buyers",
  "Fast payment cycle — structured payment timelines improve cash flow compared to traditional government procurement",
  "New market segment — government procurement is largely recession-proof and provides revenue stability",
];

export const FAQ_ITEMS = [
  {
    q: "Is GeM registration free?",
    a: "Yes, GeM seller registration is completely free on the official GeM portal at gem.gov.in. There is no government fee for registering as a seller. The only costs are the platform's convenience fee on actual transactions, costs for required product certifications, and any professional service fees for registration support.",
  },
  {
    q: "Do I need BIS certification to sell on GeM?",
    a: "It depends on your product category. Many categories require mandatory certifications — BIS CRS for electronics, BIS ISI Mark for electrical goods and construction materials, FSSAI for food products, and others. You must hold a valid certificate before your listing can be approved. Ornate Quality Services manages both GeM registration and all required product certifications.",
  },
  {
    q: "Can a trader or reseller register on GeM, or is it only for manufacturers?",
    a: "Both manufacturers and traders can register on GeM. Manufacturers can register as OEMs and get a verified OEM badge. Traders can register as resellers. For many high-demand categories, government buyers prefer OEM-verified sellers. If you are a manufacturer, OEM registration on GeM is strongly recommended.",
  },
  {
    q: "How long does it take to complete GeM registration?",
    a: "A straightforward GeM registration with all documents in order typically takes 7 to 15 working days. If product certifications are required alongside GeM registration, the overall timeline depends on the certification process, which can take 30 to 90 days. Our team manages both processes in parallel to minimise time to market.",
  },
  {
    q: "What happens after GeM registration — how do I get orders?",
    a: "After registration and product listing, government buyers can find your products through GeM's search and catalogue system. Buyers can place direct purchase orders for lower-value items or float bids for higher-value procurement. You will receive notifications for relevant bids. Keeping listings updated, pricing competitive, and your profile complete are key factors that drive order flow.",
  },
];
