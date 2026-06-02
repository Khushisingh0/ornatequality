export type TocItem = {
  id: string;
  label: string;
};

export const EPR_TOC: TocItem[] = [
  { id: "introduction", label: "Introduction" },
  { id: "what-is-epr", label: "What is EPR Registration?" },
  { id: "importance", label: "Why EPR Registration Matters" },
  { id: "products-covered", label: "Who Needs EPR Registration" },
  { id: "process", label: "EPR Registration Process" },
  { id: "requirements", label: "EPR Registration Requirements" },
  { id: "documents", label: "Documents Required" },
  { id: "cost", label: "EPR Registration Cost" },
  { id: "validity", label: "Validity & Annual Compliance" },
  { id: "benefits", label: "Benefits of EPR Registration" },
  { id: "penalties", label: "Penalties for Non-Compliance" },
  { id: "case-study", label: "Case Study (Real Example)" },
  { id: "faq", label: "Frequently Asked Questions" },
  { id: "get-started", label: "Get Expert Assistance" },
];

export const EPR_CATEGORY_ROWS = [
  {
    category: "E-Waste (Electronics)",
    whoMustRegister: "Producers, importers, brand owners of EEE",
    products:
      "Mobile phones, laptops, televisions, ACs, refrigerators, washing machines, lighting equipment",
  },
  {
    category: "Battery Waste",
    whoMustRegister: "Producers, importers, brand owners of batteries",
    products:
      "Lithium-ion batteries, lead-acid batteries, alkaline batteries, nickel-cadmium batteries",
  },
  {
    category: "Plastic Packaging",
    whoMustRegister: "Producers, importers, brand owners using plastic packaging",
    products:
      "All businesses using plastic packaging for products — FMCG, electronics, pharma, food, retail",
  },
  {
    category: "Tyre Waste",
    whoMustRegister: "Producers and importers of tyres",
    products:
      "Passenger car tyres, commercial vehicle tyres, two-wheeler tyres, OTR tyres",
  },
  {
    category: "Used Oil",
    whoMustRegister: "Producers and importers of lubricants and oils",
    products: "Engine oils, industrial lubricants, hydraulic fluids, transformer oils",
  },
];

export const DOCUMENTS_ROWS = [
  {
    no: "1",
    document: "Business Registration Certificate",
    details: "Certificate of Incorporation, GST registration, or equivalent",
  },
  {
    no: "2",
    document: "GST Certificate",
    details: "Valid GSTIN of the registering entity",
  },
  {
    no: "3",
    document: "Import Export Code (IEC)",
    details: "Required for importers — IEC issued by DGFT",
  },
  {
    no: "4",
    document: "PAN Card",
    details: "PAN of the business entity or authorised signatory",
  },
  {
    no: "5",
    document: "Product Category List",
    details:
      "Detailed list of all products covered under the EPR application with category classifications",
  },
  {
    no: "6",
    document: "Sales Volume Data",
    details:
      "Historical sales data showing units placed in the Indian market — used for target calculation",
  },
  {
    no: "7",
    document: "Packaging Material Declaration",
    details:
      "For plastic packaging EPR — declaration of packaging types and weights by category",
  },
  {
    no: "8",
    document: "Address Proof",
    details: "Registered business address proof — rental agreement or utility bill",
  },
  {
    no: "9",
    document: "Authorised Signatory Details",
    details: "Name, designation, and contact details of the person authorised to sign EPR applications",
  },
  {
    no: "10",
    document: "Authorisation Letter",
    details: "If applying through a consultant — signed authorisation from the business entity",
  },
];

export const PENALTIES_ROWS = [
  {
    violation: "Operating without EPR Registration",
    consequence: "Environmental Compensation notice from CPCB based on estimated sales volume",
  },
  {
    violation: "Failure to set annual EPR targets",
    consequence: "Non-compliance notice and Environmental Compensation levy",
  },
  {
    violation: "Shortfall against annual EPR targets",
    consequence:
      "Environmental Compensation calculated on shortfall volume at prescribed rates",
  },
  {
    violation: "Failure to file annual compliance report",
    consequence:
      "Enhanced Environmental Compensation and listing on CPCB non-compliant register",
  },
  {
    violation: "Repeat violations",
    consequence:
      "Legal proceedings under Environment Protection Act, public listing, and business disruption",
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    label: "Assessment",
    color: "#0b57b5",
    title: "Step 1 — EPR Obligation Assessment",
    text: "The first step is identifying which EPR categories apply to your business and estimating your annual EPR targets. Our team conducts a thorough EPR obligation assessment based on your sales volumes, product categories, and packaging types — giving you a clear picture of your registration requirements and annual targets before we begin the application.",
  },
  {
    step: "02",
    label: "Documents",
    color: "#2563eb",
    title: "Step 2 — Document Preparation",
    text: "We prepare your complete EPR Registration application package including business registration documents, GST certificate, product and sales data, packaging material details, and all other documents required by the CPCB portal for your specific EPR category. For businesses registering under multiple EPR categories, we manage all registrations in parallel.",
  },
  {
    step: "03",
    label: "Portal",
    color: "#0891b2",
    title: "Step 3 — CPCB Portal Registration & Application Filing",
    text: "The EPR Registration application is filed on the CPCB EPR portal with separate registrations for each EPR category. We manage the complete portal registration and application filing process — ensuring all documents are correctly uploaded and product categories are correctly classified before submission.",
  },
  {
    step: "04",
    label: "Certificate",
    color: "#059669",
    title: "Step 4 — CPCB Review & Registration Certificate",
    text: "CPCB reviews the filed application. For straightforward applications with complete documentation, registration is typically granted within 15 to 30 working days. Our team monitors application status and responds to all queries promptly with preemptive responses prepared for common CPCB queries.",
  },
  {
    step: "05",
    label: "Targets",
    color: "#d97706",
    title: "Step 5 — EPR Target Setting",
    text: "After registration, the entity must set annual EPR targets on the CPCB portal specifying the volume of waste committed to collection and recycling in each financial year. Our team assists with target calculation and filing, ensuring declared targets are compliant with CPCB requirements and accurately reflect your market sales volumes.",
  },
  {
    step: "06",
    label: "PRO",
    color: "#dc2626",
    title: "Step 6 — PRO or Recycler Onboarding",
    text: "To fulfil EPR targets, registered entities must work with a CPCB-registered Producer Responsibility Organisation (PRO) or directly onboard CPCB-registered recyclers. Ornate Quality Services helps you identify and onboard the right PRO for your business — ensuring targets are fulfilled efficiently with proper documentation for annual compliance reporting.",
  },
  {
    step: "07",
    label: "Reporting",
    color: "#7c3aed",
    title: "Step 7 — Annual Compliance Reporting",
    text: "Registered entities must file annual compliance reports on the CPCB portal confirming waste collected and recycled against declared targets. Our team manages the complete annual compliance reporting cycle — from collating recycling certificates to filing the annual report before the deadline.",
  },
];

export const BENEFITS_ITEMS = [
  "Legal compliance — meet India's environmental law obligations and avoid CPCB enforcement action",
  "E-commerce access — meet EPR compliance requirements for product listings on Amazon India and Flipkart",
  "Environmental Compensation avoidance — proactive compliance eliminates the risk of quantified financial penalties",
  "CPCB non-compliant list avoidance — registered and compliant entities are not listed on CPCB's public non-compliance register",
  "ESG credibility — demonstrates responsible environmental management to investors, partners, and institutional buyers",
  "Supply chain compliance — meet EPR requirements demanded by retail chains and corporate procurement teams",
  "Brand reputation — EPR compliance signals environmental responsibility to Indian consumers",
  "Future-proofing — EPR scope is expanding; early registration prepares your business for tighter requirements ahead",
];

export const FAQ_ITEMS = [
  {
    q: "Is EPR Registration required for small businesses and startups?",
    a: "Yes. EPR Registration is mandatory for all producers, importers, and brand owners in covered product categories — regardless of company size, sales volume, or years of operation. The practical cost of compliance is proportional to sales volume — modest quantities mean modest EPR targets and correspondingly modest PRO fees.",
  },
  {
    q: "What is a Producer Responsibility Organisation (PRO) and do I need one?",
    a: "A PRO is a CPCB-registered organisation that manages waste collection, segregation, and recycling on behalf of multiple registered producers. Working with a PRO is the most practical way for most businesses to fulfil annual EPR targets. Our team helps you onboard the right PRO for your categories and volumes.",
  },
  {
    q: "My products are sold by an Indian distributor. Do I still need EPR Registration?",
    a: "It depends on your business structure. If you are the importer of record or the brand owner whose name appears on the product, EPR obligations are yours. If your Indian distributor imports under their own IEC and their name appears on the product, the obligation may rest with them. Our team assesses your structure before you register.",
  },
  {
    q: "What happens if I miss the annual EPR compliance report deadline?",
    a: "Missing the deadline results in a non-compliance flag on the CPCB portal and triggers an Environmental Compensation notice calculated based on target volume. CPCB has been consistent in issuing compensation notices even when recycling targets were met but the report was not filed on time.",
  },
  {
    q: "How is EPR different for E-Waste, Battery Waste, and Plastic Packaging?",
    a: "Each EPR category operates under different rules, target calculation methodologies, and recycler categories. A business with products across multiple categories needs separate registrations for each — but our team manages all categories as a single coordinated compliance project.",
  },
];
