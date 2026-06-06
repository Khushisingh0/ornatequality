export type TocItem = {
  id: string;
  label: string;
};

export const ROHS_TOC: TocItem[] = [
  { id: "introduction", label: "Introduction" },
  { id: "what-is-rohs", label: "What is RoHS Certification?" },
  { id: "importance", label: "Why RoHS Certification Matters" },
  { id: "products-covered", label: "Products Covered" },
  { id: "process", label: "RoHS Certification Process" },
  { id: "requirements", label: "RoHS Compliance Requirements" },
  { id: "documents", label: "Documents Required" },
  { id: "cost", label: "RoHS Certification Cost" },
  { id: "validity", label: "Validity & Ongoing Compliance" },
  { id: "benefits", label: "Benefits of RoHS Certification" },
  { id: "penalties", label: "Consequences of Non-Compliance" },
  { id: "case-study", label: "Case Study (Real Example)" },
  { id: "faq", label: "Frequently Asked Questions" },
  { id: "get-started", label: "Get Expert Assistance" },
];

export const PRODUCTS_COVERED_ROWS = [
  {
    category: "Consumer Electronics",
    products: "Mobile phones, laptops, tablets, TVs, audio equipment",
    concern: "Lead in solder, cadmium in batteries, phthalates in cables",
  },
  {
    category: "Large Household Appliances",
    products: "Refrigerators, washing machines, dishwashers, air conditioners",
    concern: "Lead in PCBs, mercury in switches, hexavalent chromium",
  },
  {
    category: "Small Household Appliances",
    products: "Toasters, irons, hair dryers, vacuum cleaners",
    concern: "Lead in solder joints, cadmium in contacts",
  },
  {
    category: "IT & Telecom Equipment",
    products: "Computers, printers, servers, networking equipment",
    concern: "Lead in solder, PBBs in plastics, phthalates",
  },
  {
    category: "Lighting Equipment",
    products: "LED lights, fluorescent lamps, control gear",
    concern: "Mercury in lamps, lead in solder",
  },
  {
    category: "Electronic & Electrical Tools",
    products: "Power tools, electric drills, sewing machines",
    concern: "Lead, cadmium, hexavalent chromium",
  },
  {
    category: "Medical Devices",
    products: "Non-implantable medical devices, in-vitro diagnostics",
    concern: "Lead in PCBs, cadmium in sensors",
  },
  {
    category: "Electronic Components",
    products: "PCBs, cables, connectors, capacitors, resistors",
    concern: "Lead in solder, cadmium, phthalates",
  },
  {
    category: "Monitoring & Control Equipment",
    products: "Industrial sensors, data loggers, control panels",
    concern: "Lead in solder, mercury in sensors",
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    label: "Scope",
    color: "#0b57b5",
    title: "Step 1 — Product Scope Assessment",
    text: "The first step is confirming that your product falls within the scope of the RoHS Directive and identifying any applicable exemptions. Our team conducts a scope assessment — confirming applicability, identifying relevant exemptions, and establishing the compliance baseline before testing begins.",
  },
  {
    step: "02",
    label: "BOM",
    color: "#2563eb",
    title: "Step 2 — Bill of Materials (BOM) Review & Substance Mapping",
    text: "A complete Bill of Materials review is the foundation of RoHS compliance. Every material, component, and sub-assembly must be assessed for restricted substances. Our team conducts a systematic BOM review — identifying components that may contain restricted substances and requesting supplier declarations and test data. Where supplier data is unavailable, we identify components requiring physical testing.",
  },
  {
    step: "03",
    label: "Testing",
    color: "#0891b2",
    title: "Step 3 — Laboratory Testing",
    text: "Components that cannot be confirmed compliant through supplier declarations must be physically tested at an accredited laboratory. RoHS testing typically uses XRF screening followed by ICP-OES or other destructive analysis for confirmation. We coordinate testing at NABL-accredited or internationally accredited laboratories to IEC 62321 series standards.",
  },
  {
    step: "04",
    label: "Suppliers",
    color: "#059669",
    title: "Step 4 — Supplier Compliance Management",
    text: "For products with complex supply chains, managing supplier RoHS compliance is an ongoing process. Suppliers must provide material declarations in IPC-1752A or IEC 62474 format. Our team helps manufacturers establish a supplier compliance management process — including questionnaire templates, declaration formats, and systematic maintenance of compliance data.",
  },
  {
    step: "05",
    label: "Tech File",
    color: "#d97706",
    title: "Step 5 — Technical Documentation Preparation",
    text: "RoHS compliance requires a complete technical documentation package — BOM with substance compliance data, supplier declarations, laboratory test reports, exemption justifications, and product-level assessment. The technical documentation must be maintained and made available to EU market surveillance authorities upon request.",
  },
  {
    step: "06",
    label: "DoC",
    color: "#dc2626",
    title: "Step 6 — Declaration of Conformity (DoC)",
    text: "The manufacturer must issue a Declaration of Conformity confirming RoHS compliance. For products requiring CE Marking, the RoHS DoC is typically incorporated into the CE Declaration of Conformity. Our team drafts the RoHS Declaration of Conformity in the correct format and advises on CE Marking integration where applicable.",
  },
  {
    step: "07",
    label: "Monitor",
    color: "#7c3aed",
    title: "Step 7 — Ongoing Compliance Monitoring",
    text: "RoHS compliance must be maintained throughout the product lifecycle. Component changes, new suppliers, updated formulations, and Directive amendments can all affect compliance status. Our team provides ongoing compliance monitoring — ensuring your RoHS documentation stays current as your products and supply chain evolve.",
  },
];

export const DOCUMENTS_ROWS = [
  {
    no: "1",
    document: "Bill of Materials (BOM)",
    details: "Complete list of all materials, components, and sub-assemblies in the product",
  },
  {
    no: "2",
    document: "Supplier Declarations of Conformity",
    details: "RoHS compliance declarations from all component and material suppliers",
  },
  {
    no: "3",
    document: "Material Data Sheets",
    details: "Technical data sheets confirming material composition for all critical components",
  },
  {
    no: "4",
    document: "Laboratory Test Reports",
    details: "XRF screening and ICP-OES or equivalent test reports for physically tested components",
  },
  {
    no: "5",
    document: "Product Substance Assessment",
    details: "Overall RoHS compliance assessment document covering all restricted substances",
  },
  {
    no: "6",
    document: "Exemption Justification",
    details: "Technical justification for any exemptions claimed under the RoHS Directive",
  },
  {
    no: "7",
    document: "Declaration of Conformity",
    details: "Signed DoC confirming product compliance with RoHS Directive 2011/65/EU",
  },
  {
    no: "8",
    document: "Business Registration Certificate",
    details: "Company incorporation certificate or equivalent",
  },
  {
    no: "9",
    document: "Product Photographs",
    details: "Clear photographs of product, labelling, and RoHS compliance marking",
  },
  {
    no: "10",
    document: "Change Control Records",
    details: "Records of any component or material changes and their impact on RoHS compliance",
  },
];

export const PENALTIES_ROWS = [
  {
    violation: "Selling non-RoHS compliant EEE in the EU",
    consequence: "Product withdrawal from market, import refusal at EU customs",
  },
  {
    violation: "False or misleading RoHS compliance declaration",
    consequence: "Financial penalties — up to EUR 50,000+ in some EU member states",
  },
  {
    violation: "Product found non-compliant during surveillance",
    consequence: "Mandatory recall, corrective action, and public notification across EU",
  },
  {
    violation: "Failure to maintain RoHS technical documentation",
    consequence: "Administrative penalties and potential criminal liability for company directors",
  },
  {
    violation: "Repeated violations",
    consequence: "Market ban, enhanced penalties, and reputational damage across EU market",
  },
];

export const BENEFITS_ITEMS = [
  "EU market access — mandatory for selling EEE in all 27 EU member states and EEA countries",
  "Global supply chain access — meet RoHS requirements of multinational electronics OEMs and contract manufacturers",
  "Multiple market compliance — EU RoHS compliance supports access to UK, China, South Korea, and other RoHS-equivalent markets",
  "CE Marking prerequisite — RoHS compliance is required for CE Marking of most electrical and electronic products",
  "ESG credentials — demonstrates commitment to hazardous substance reduction and responsible manufacturing",
  "Buyer confidence — RoHS documentation reduces buyer risk assessment burden and speeds up supplier qualification",
  "Export competitiveness — RoHS-certified Indian manufacturers compete on equal terms with European and Asian suppliers",
  "Legal protection — documented RoHS compliance provides protection in the event of EU market surveillance action",
  "Future-proofing — early RoHS compliance builds the supply chain transparency infrastructure needed for REACH and other chemical regulations",
];

export const FAQ_ITEMS = [
  {
    q: "Is RoHS the same as CE Marking?",
    a: "No, but they are closely related. RoHS compliance is one of the requirements for CE Marking of applicable electrical and electronic products. CE Marking covers multiple EU Directives simultaneously — including LVD, EMC, and RoHS. A CE-marked EEE product must be RoHS compliant. For Indian manufacturers exporting EEE to Europe, both RoHS compliance and CE Marking are typically required.",
  },
  {
    q: "Does RoHS apply to components and sub-assemblies, or only finished products?",
    a: "RoHS applies to finished electrical and electronic equipment — not to individual components sold separately. However, OEM manufacturers must ensure finished products are RoHS compliant — meaning all components used must be compliant. Indian component manufacturers are required by customers to provide RoHS compliance declarations and test data as a supply chain requirement.",
  },
  {
    q: "What is the difference between RoHS and REACH?",
    a: "RoHS restricts ten specific hazardous substances in electrical and electronic equipment with defined concentration limits. REACH is a broader EU chemical regulation covering import and use of chemical substances in all products. Many manufacturers need to comply with both RoHS and REACH. Our team handles both compliance programmes.",
  },
  {
    q: "How do I know if my product has restricted substances?",
    a: "The most reliable way is through physical testing — XRF screening followed by confirmatory chemical analysis for components that screen positive. For existing products, a BOM review followed by targeted testing is the standard approach. Our team conducts BOM reviews and coordinates testing to give you a complete picture of your product's RoHS compliance status.",
  },
  {
    q: "Does RoHS apply to products exported from India to non-EU countries?",
    a: "RoHS is an EU requirement for products sold in the EU market. Many non-EU countries — including China, the UK, South Korea, and Turkey — have adopted RoHS-equivalent regulations. Additionally, multinational buyers and global supply chains often require RoHS compliance from all suppliers regardless of the end market.",
  },
];
