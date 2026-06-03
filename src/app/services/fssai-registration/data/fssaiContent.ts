export type TocItem = {
  id: string;
  label: string;
};

export const FSSAI_TOC: TocItem[] = [
  { id: "introduction", label: "Introduction" },
  { id: "what-is-fssai", label: "What is FSSAI Registration?" },
  { id: "importance", label: "Why FSSAI Registration Matters" },
  { id: "licence-types", label: "Types of FSSAI Registration" },
  { id: "process", label: "FSSAI Registration Process" },
  { id: "requirements", label: "FSSAI Registration Requirements" },
  { id: "documents", label: "Documents Required" },
  { id: "cost", label: "FSSAI Registration Cost" },
  { id: "validity", label: "Validity & Renewal" },
  { id: "benefits", label: "Benefits of FSSAI Registration" },
  { id: "penalties", label: "Penalties for Non-Compliance" },
  { id: "case-study", label: "Case Study (Real Example)" },
  { id: "faq", label: "Frequently Asked Questions" },
  { id: "get-started", label: "Get Expert Assistance" },
];

export const LICENCE_TYPES_ROWS = [
  {
    factor: "Annual Turnover",
    basic: "Up to INR 12 lakh",
    state: "INR 12 lakh to INR 20 crore",
    central: "Above INR 20 crore",
  },
  {
    factor: "Business Type",
    basic: "Petty food manufacturers, small retailers, hawkers",
    state: "Medium manufacturers, processors, storage units",
    central: "Large manufacturers, importers, exporters, multi-state",
  },
  {
    factor: "Issuing Authority",
    basic: "State / District Food Safety Officer",
    state: "State Food Safety Commissioner",
    central: "Central FSSAI, New Delhi",
  },
  {
    factor: "FSSAI Number Prefix",
    basic: "Starts with 1",
    state: "Starts with 2",
    central: "Starts with 3",
  },
  {
    factor: "Validity",
    basic: "1 to 5 years",
    state: "1 to 5 years",
    central: "1 to 5 years",
  },
  {
    factor: "Who Typically Needs It",
    basic: "Home bakers, small dhabas, local retailers",
    state: "Food processors, packaged food makers",
    central: "Food importers, large manufacturers, exporters",
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    label: "Assessment",
    color: "#0b57b5",
    title: "Step 1 — Business Assessment & Licence Type Determination",
    text: "The first and most important step is confirming the correct type of FSSAI registration or licence for your specific business — based on annual turnover, food activity type, production scale, import/export status, and multi-state operations. Getting this wrong wastes time and money, and for importers can result in shipments held at customs. Our team conducts a thorough business assessment before proceeding to the application.",
  },
  {
    step: "02",
    label: "Documents",
    color: "#2563eb",
    title: "Step 2 — Document Preparation",
    text: "We prepare your complete FSSAI application documentation including identity and address proof, business registration documents, food safety management plan, list of food products, layout plan of premises, and all other documents required for your specific licence type and food category. Document requirements vary significantly between Basic Registration, State Licence, and Central Licence.",
  },
  {
    step: "03",
    label: "FoSCoS",
    color: "#0891b2",
    title: "Step 3 — FoSCoS Portal Application Filing",
    text: "The application is filed on FSSAI's FoSCoS portal. We create the applicant's portal account, complete the application form with all required details, upload supporting documents, and submit the application along with the prescribed fee. Upon submission, an application reference number is generated for tracking.",
  },
  {
    step: "04",
    label: "Review",
    color: "#059669",
    title: "Step 4 — Application Review & Inspection (If Required)",
    text: "For Basic Registration, FSSAI typically processes applications through document review without physical inspection. For State Licence and Central Licence applications, a Food Safety Officer may conduct a physical inspection of premises to verify facility, storage conditions, hygiene practices, and food safety infrastructure. Our team prepares you comprehensively for inspection.",
  },
  {
    step: "05",
    label: "Licence",
    color: "#d97706",
    title: "Step 5 — Grant of FSSAI Licence",
    text: "Once the application review — and inspection, where applicable — is satisfactorily completed, FSSAI grants the licence and issues the FSSAI Registration Certificate including the 14-digit FSSAI number, business details, products covered, and validity period. The FSSAI number must be printed on all food product labels and packaging from the date of licence grant.",
  },
  {
    step: "06",
    label: "Labels",
    color: "#dc2626",
    title: "Step 6 — Label Compliance Review",
    text: "FSSAI has detailed labelling requirements under the Food Safety and Standards (Labelling and Display) Regulations, 2020. Our team reviews your product labels against FSSAI requirements — FSSAI licence number, ingredients, nutritional information, allergens, net quantity, dates, and other mandatory declarations — before products go to market.",
  },
  {
    step: "07",
    label: "Returns",
    color: "#7c3aed",
    title: "Step 7 — Annual Return Filing & Renewal",
    text: "FSSAI-licensed businesses must file an Annual Return on the FoSCoS portal before 31st May each year. FSSAI licences must also be renewed before expiry. Our team manages both annual returns and licence renewals proactively — sending reminders and handling complete renewal applications.",
  },
];

export const DOCUMENTS_ROWS = [
  {
    no: "1",
    document: "Identity Proof",
    details: "Aadhaar card, PAN card, or passport of the applicant / authorised signatory",
  },
  {
    no: "2",
    document: "Address Proof of Business",
    details: "Rental agreement, electricity bill, or property ownership document for premises",
  },
  {
    no: "3",
    document: "Business Registration Certificate",
    details: "GST registration, company incorporation, partnership deed, or Shop Act licence",
  },
  {
    no: "4",
    document: "PAN Card",
    details: "PAN of business entity or individual proprietor",
  },
  {
    no: "5",
    document: "Food Product List",
    details: "Complete list of all food products to be manufactured, processed, stored, or sold",
  },
  {
    no: "6",
    document: "Premises Layout Plan",
    details: "Scaled layout drawing of the food processing, manufacturing, or storage facility (State & Central Licence)",
  },
  {
    no: "7",
    document: "Equipment List",
    details: "List of all machinery and equipment used in food processing or manufacturing (State & Central Licence)",
  },
  {
    no: "8",
    document: "Water Test Report",
    details: "Water quality test report from a NABL-accredited lab for food processing units (State & Central Licence)",
  },
  {
    no: "9",
    document: "Food Safety Management Plan",
    details: "HACCP or equivalent food safety plan covering hazard analysis and control measures (State & Central Licence)",
  },
  {
    no: "10",
    document: "IEC Certificate (Importers)",
    details: "Mandatory for food importers applying for Central Licence",
  },
];

export const PENALTIES_ROWS = [
  {
    violation: "Operating food business without FSSAI registration",
    penalty: "Imprisonment up to 6 months and/or fine up to INR 5 lakh",
  },
  {
    violation: "Manufacturing or selling unsafe food",
    penalty: "Imprisonment up to 7 years and fine up to INR 10 lakh for serious cases",
  },
  {
    violation: "Selling food with false or misleading labels",
    penalty: "Fine up to INR 3 lakh and product recall",
  },
  {
    violation: "Failure to file Annual Return",
    penalty: "Penalty of INR 100 per day of delay",
  },
  {
    violation: "Selling food after licence expiry",
    penalty: "Treated as operating without licence — same penalties as above",
  },
];

export const BENEFITS_ITEMS = [
  "Legal compliance — operate your food business without risk of enforcement action, seizure, or prosecution",
  "E-commerce access — list food products on Swiggy, Zomato, Amazon Fresh, BigBasket, and all online food platforms",
  "Retail onboarding — supply to supermarkets, organised retail chains, and institutional food buyers",
  "Export clearance — Central Licence enables export of food products through Indian ports",
  "Consumer trust — FSSAI logo on packaging builds buyer confidence in food safety and quality",
  "Brand credibility — FSSAI registration signals a professional, compliant food business",
  "GeM portal — required for supplying food products to government institutions through GeM",
  "Investor confidence — FSSAI compliance is a basic due diligence requirement for food business funding",
  "Protection from liability — registered food businesses demonstrate regulatory compliance, reducing product liability exposure",
];

export const FAQ_ITEMS = [
  {
    q: "Is FSSAI registration required for home-based food businesses?",
    a: "Yes. Home-based food businesses — including home bakers and cottage food producers — require FSSAI Basic Registration if annual turnover is below INR 12 lakh. The FSS Act applies to all food business operators regardless of where they operate. Food delivery platforms commonly require an FSSAI number during seller onboarding.",
  },
  {
    q: "What is the difference between FSSAI Registration and FSSAI Licence?",
    a: "Basic Registration is for petty food manufacturers and small businesses with turnover below INR 12 lakh. State Licence and Central Licence are for medium and large food businesses with more detailed application processes, fees, and requirements. All three are commonly referred to as FSSAI Registration in everyday language.",
  },
  {
    q: "Do food importers need a separate FSSAI registration for each product?",
    a: "No. A single FSSAI Central Licence covers all food products listed in the licence. New products added after initial licensing must be added through a modification application. Importing products not listed in the licence can lead to customs clearance issues.",
  },
  {
    q: "How long does FSSAI registration take?",
    a: "Basic Registration is typically processed within 7 to 15 working days. State Licence applications typically take 30 to 60 days including inspection where required. Central Licence applications typically take 30 to 45 days for importers. With complete documentation, timelines are often at the faster end of these ranges.",
  },
  {
    q: "Is FSSAI registration required for restaurants and food service businesses?",
    a: "Yes. All food service businesses — restaurants, cafes, cloud kitchens, catering companies, and canteens — require FSSAI registration or licence based on turnover. FSSAI registration is also required for listing on Swiggy, Zomato, and other food delivery platforms.",
  },
];
