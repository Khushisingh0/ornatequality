export type TocItem = {
  id: string;
  label: string;
};

export const CE_TOC: TocItem[] = [
  { id: "introduction", label: "Introduction" },
  { id: "what-is-ce", label: "What is CE Certification?" },
  { id: "importance", label: "Why CE Certification Matters" },
  { id: "products-covered", label: "Products Covered Under CE" },
  { id: "process", label: "CE Marking Process" },
  { id: "requirements", label: "CE Marking Requirements" },
  { id: "documents", label: "Documents Required" },
  { id: "cost", label: "CE Certification Cost" },
  { id: "validity", label: "Validity & Ongoing Compliance" },
  { id: "benefits", label: "Benefits of CE Certification" },
  { id: "penalties", label: "Penalties for Non-Compliance" },
  { id: "case-study", label: "Case Study (Real Example)" },
  { id: "faq", label: "Frequently Asked Questions" },
  { id: "get-started", label: "Get Expert Assistance" },
];

export const PRODUCTS_COVERED_ROWS = [
  {
    category: "Electrical & Electronic Equipment",
    products: "Power tools, home appliances, lighting, chargers",
    directive: "Low Voltage Directive (LVD) 2014/35/EU",
  },
  {
    category: "Radio & Wireless Equipment",
    products: "Wi-Fi devices, Bluetooth products, mobile phones",
    directive: "Radio Equipment Directive (RED) 2014/53/EU",
  },
  {
    category: "Machinery",
    products: "Industrial machines, power equipment, tools",
    directive: "Machinery Directive 2006/42/EC",
  },
  {
    category: "Medical Devices",
    products: "Diagnostic devices, surgical instruments, IVDs",
    directive: "MDR 2017/745 / IVDR 2017/746",
  },
  {
    category: "Toys",
    products: "Children's toys, games, educational toys",
    directive: "Toy Safety Directive 2009/48/EC",
  },
  {
    category: "Personal Protective Equipment",
    products: "Helmets, gloves, safety footwear, eye protection",
    directive: "PPE Regulation 2016/425",
  },
  {
    category: "Construction Products",
    products: "Structural steel, cement, insulation materials",
    directive: "Construction Products Regulation 305/2011",
  },
  {
    category: "Pressure Equipment",
    products: "Boilers, pressure vessels, industrial pipework",
    directive: "PED Directive 2014/68/EU",
  },
  {
    category: "Electromagnetic Compatibility",
    products: "All electronic/electrical equipment",
    directive: "EMC Directive 2014/30/EU",
  },
  {
    category: "Dangerous Substances & Chemicals",
    products: "Industrial chemicals, paints, adhesives",
    directive: "REACH Regulation, CLP Regulation",
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    label: "Directives",
    color: "#0b57b5",
    title: "Step 1 — Identify Applicable EU Directives & Regulations",
    text: "The first and most critical step is identifying all EU Directives and Regulations that apply to your product. Many manufacturers address only one obvious Directive and miss others that apply simultaneously. Our team conducts a thorough Directive identification analysis for your product, ensuring no applicable legislation is missed before proceeding to the next step.",
  },
  {
    step: "02",
    label: "Standards",
    color: "#2563eb",
    title: "Step 2 — Identify Applicable Harmonised Standards",
    text: "Each EU Directive is supported by harmonised European standards (EN standards) that provide specific technical requirements. Compliance with harmonised standards creates a presumption of conformity. Our team identifies all relevant EN standards and prepares a compliance checklist before testing begins.",
  },
  {
    step: "03",
    label: "Route",
    color: "#0891b2",
    title: "Step 3 — Determine the Conformity Assessment Route",
    text: "EU Directives specify different conformity assessment routes depending on the product's risk level. Lower-risk products may allow self-certification, while higher-risk categories require a Notified Body. Our team determines the correct route under each Directive and advises whether Notified Body involvement is required.",
  },
  {
    step: "04",
    label: "Testing",
    color: "#059669",
    title: "Step 4 — Product Testing",
    text: "Products must be tested against the requirements of all applicable harmonised standards. Testing may be conducted at accredited labs in India or Europe; the key is ISO 17025 accreditation for the relevant scope. We coordinate testing, prepare a test plan, and review reports to avoid repeat testing and unnecessary cost.",
  },
  {
    step: "05",
    label: "Technical File",
    color: "#d97706",
    title: "Step 5 — Technical File Preparation",
    text: "The Technical File is the complete body of documentation demonstrating compliance. It must be ready before the CE Mark is affixed and retained for at least 10 years. Our team prepares the Technical File to the standard expected by European market surveillance authorities.",
  },
  {
    step: "06",
    label: "DoC",
    color: "#dc2626",
    title: "Step 6 — Declaration of Conformity (DoC)",
    text: "The Declaration of Conformity is the legal document where the manufacturer declares compliance with all applicable EU requirements. It must reference the applicable Directives and standards and be retained for at least 10 years. We draft the DoC and advise on EU Authorised Representative requirements where applicable.",
  },
  {
    step: "07",
    label: "CE Mark",
    color: "#7c3aed",
    title: "Step 7 — Affix CE Mark & Market Entry",
    text: "Once the Technical File is complete, the DoC is signed, and Notified Body requirements (if any) are satisfied, the CE Mark can be affixed to the product and packaging. We ensure correct CE marking format and accompanying documentation before shipment.",
  },
  {
    step: "08",
    label: "Surveillance",
    color: "#0d9488",
    title: "Step 8 — Post-Market Surveillance Readiness",
    text: "CE Marking is not one-time. EU market surveillance can trigger corrective action or recalls if non-compliance is found. We help keep the Technical File current, assess product changes, and support you in the event of a compliance inquiry.",
  },
];

export const DOCUMENTS_ROWS = [
  {
    no: "1",
    document: "Product Description",
    details: "Detailed description of the product, intended use, and all variants covered under CE Mark",
  },
  {
    no: "2",
    document: "List of Applicable Directives & Standards",
    details: "Complete list of EU Directives and harmonised EN standards applicable to the product",
  },
  {
    no: "3",
    document: "Design & Engineering Drawings",
    details: "Technical drawings, circuit diagrams, BOM, and component specifications",
  },
  {
    no: "4",
    document: "Risk Assessment",
    details: "Documented hazard identification and risk evaluation for applicable Directives",
  },
  {
    no: "5",
    document: "Test Reports",
    details: "Accredited lab test reports covering required harmonised standard parameters",
  },
  {
    no: "6",
    document: "Declaration of Conformity",
    details: "Signed DoC referencing applicable Directives, standards, and manufacturer details",
  },
  {
    no: "7",
    document: "Instructions for Use / User Manual",
    details: "User manual in the official language(s) of the target EU member countries",
  },
  {
    no: "8",
    document: "Notified Body Certificate",
    details: "Required for high-risk categories — issued by the appointed Notified Body",
  },
  {
    no: "9",
    document: "Product Photographs",
    details: "Photos of the product, CE marking location, and packaging",
  },
  {
    no: "10",
    document: "Business Registration Certificate",
    details: "Company incorporation certificate or equivalent for the manufacturer",
  },
];

export const PENALTIES_ROWS = [
  {
    violation: "Selling non-CE marked products in the EEA",
    consequence: "Product withdrawal from market, import refusal at EU customs",
  },
  {
    violation: "False or incorrect CE Marking",
    consequence: "Heavy financial penalties — up to EUR 100,000+ in some EU member states",
  },
  {
    violation: "Product found non-compliant during surveillance",
    consequence: "Mandatory recall, corrective action, and public notification",
  },
  {
    violation: "Failure to maintain Technical File",
    consequence: "Administrative penalties and potential criminal liability for directors",
  },
  {
    violation: "Repeat violations",
    consequence: "Market ban, blacklisting from EU customs, and reputational damage",
  },
];

export const BENEFITS_ITEMS = [
  "European market access — legally sell in all 30 EEA member countries with a single conformity marking",
  "Single market advantage — one CE Mark opens 450+ million consumers across Europe",
  "Distributor onboarding — meet the mandatory compliance requirement of European importers and retail chains",
  "E-commerce exports — sell on Amazon EU, Otto, and other European platforms without compliance barriers",
  "Premium pricing — European buyers associate the CE Mark with quality, supporting stronger price positioning",
  "Competitive differentiation — CE-certified Indian products stand out where quality credentials matter",
  "Legal protection — a complete Technical File helps reduce product liability exposure",
  "Brand credibility — CE Marking signals commitment to international safety and compliance standards",
  "Foundation for global compliance — CE documentation supports other international certifications",
];

export const FAQ_ITEMS = [
  {
    q: "Is CE Marking the same as a certificate from a certification body?",
    a: "No. CE Marking is a manufacturer's self-declaration of conformity — not a certificate issued by a certifying body. The manufacturer (or their EU Authorised Representative) is responsible for compliance, Technical File, and Declaration of Conformity. For some high-risk categories, a Notified Body must be involved, but the CE Mark remains the manufacturer's declaration.",
  },
  {
    q: "Which EU countries accept CE Marking?",
    a: "CE Marking is accepted in all 30 EEA member countries — the 27 EU member states plus Iceland, Liechtenstein, and Norway. It is also accepted in Turkey for certain categories. The UK requires UKCA following Brexit, though CE may be accepted under transitional arrangements for some products.",
  },
  {
    q: "How long does CE Certification take for Indian manufacturers?",
    a: "Timelines depend on the product category, applicable Directives, and whether a Notified Body is required. For many electronics/electrical products, it typically takes 8 to 14 weeks. High-risk products requiring Notified Body assessment may take 4 to 6 months.",
  },
  {
    q: "Does CE Marking cover Switzerland and the UK?",
    a: "CE Marking covers the 30 EEA member countries. Switzerland accepts CE-marked products for many categories. The UK now generally requires UKCA, though CE may be accepted for some categories under transitional rules. We advise the most efficient approach if you target EU + UK markets.",
  },
  {
    q: "Can CE Marking be done in India, or do we need a European partner?",
    a: "CE Marking can be managed from India. Testing can be performed at accredited labs in India, the Technical File is prepared by the manufacturer (or consultant), and the DoC is signed by the manufacturer. An EU Authorised Representative may be required for certain categories; we help you appoint the right AR when needed.",
  },
];

