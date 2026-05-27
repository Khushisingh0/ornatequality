export type TocItem = {
  id: string;
  label: string;
};

export const TEC_TOC: TocItem[] = [
  { id: "introduction", label: "Introduction" },
  { id: "what-is-tec", label: "What is TEC Certification?" },
  { id: "importance", label: "Why TEC Certification Is Essential" },
  { id: "products-covered", label: "Products Covered Under TEC" },
  { id: "process", label: "TEC Certification Process" },
  { id: "registration-requirements", label: "Registration Requirements" },
  { id: "documents", label: "Documents Required" },
  { id: "cost", label: "TEC Certification Cost" },
  { id: "validity", label: "Validity & Renewal" },
  { id: "benefits", label: "Benefits of TEC Certification" },
  { id: "penalties", label: "Penalties for Non-Compliance" },
  { id: "case-study", label: "Case Study (Real Example)" },
  { id: "faq", label: "Frequently Asked Questions" },
  { id: "get-started", label: "Get Expert Assistance" },
];

export const PRODUCTS_COVERED_ROWS = [
  {
    category: "Terminal Equipment",
    products: "IP phones, PBX systems, ISDN terminals, VoIP adapters",
    standard: "IAS/TEC/IP-TEL",
  },
  {
    category: "Broadband Equipment",
    products: "DSL modems, GPON ONUs, FTTH CPE devices",
    standard: "IAS/TEC/BB",
  },
  {
    category: "Networking Equipment",
    products: "Routers, switches, Ethernet hubs, LAN equipment",
    standard: "IAS/TEC/NET",
  },
  {
    category: "Mobile Network Equipment",
    products: "Base stations, RAN equipment, small cells, repeaters",
    standard: "TEC/ETA/MOBILE",
  },
  {
    category: "VSAT & Satellite Equipment",
    products: "VSAT terminals, satellite modems, earth station equipment",
    standard: "IAS/TEC/SAT",
  },
  {
    category: "Public Address & Emergency Systems",
    products: "IP-based PA systems, emergency communication devices",
    standard: "IAS/TEC/PA",
  },
  {
    category: "Security & Surveillance Telecom",
    products: "IP surveillance systems with telecom interfaces",
    standard: "TEC/ETA/SEC",
  },
  {
    category: "Power & Support Equipment",
    products: "Telecom power systems, rectifiers, UPS for telecom",
    standard: "IAS/TEC/PWR",
  },
  {
    category: "IoT & M2M Devices",
    products: "M2M modules, IoT gateways with cellular connectivity",
    standard: "TEC/ETA/IoT",
  },
];

export const DOCUMENTS_ROWS = [
  {
    no: "1",
    document: "Business Registration Certificate",
    details: "GST registration, IEC for importers, or company incorporation certificate",
  },
  {
    no: "2",
    document: "Product Technical Specifications",
    details:
      "Detailed technical data sheet covering all network interfaces and performance parameters",
  },
  {
    no: "3",
    document: "Block Diagram",
    details: "Complete block diagram showing all hardware modules, interfaces, and connectivity",
  },
  {
    no: "4",
    document: "Interface Description Document",
    details:
      "Detailed description of all telecom interfaces — electrical, physical, and protocol specifications",
  },
  {
    no: "5",
    document: "Test Reports from Empanelled Lab",
    details: "Test reports confirming compliance with all applicable TEC standard parameters",
  },
  {
    no: "6",
    document: "User Manual",
    details:
      "Complete user manual in English covering installation, operation, and safety instructions",
  },
  {
    no: "7",
    document: "Product Photographs",
    details: "Clear photographs of the product exterior, PCB, ports, and all interface connections",
  },
  {
    no: "8",
    document: "Authorisation Letter",
    details:
      "If applying through a representative — signed authorisation from the manufacturer or importer",
  },
  {
    no: "9",
    document: "Declaration of Conformity",
    details: "Manufacturer's declaration confirming compliance with the applicable TEC standard",
  },
  {
    no: "10",
    document: "Test Plan (Pre-Testing)",
    details:
      "Proposed test plan covering all parameters to be tested — reviewed before lab testing begins",
  },
];

export const PENALTIES_ROWS = [
  {
    violation: "Importing notified telecom products without TEC certification",
    consequence: "Shipment detained or refused entry at Indian customs",
  },
  {
    violation: "Selling uncertified telecom equipment in India",
    consequence: "Product recall, market withdrawal, and penalties under Indian Telegraph Act",
  },
  {
    violation: "Connecting uncertified equipment to public telecom network",
    consequence: "Disconnection order from DoT and potential criminal proceedings",
  },
  {
    violation: "Network operators using uncertified equipment",
    consequence: "Regulatory action by TRAI and DoT against the operator",
  },
  {
    violation: "Continued non-compliance after prior enforcement",
    consequence: "Enhanced penalties, import bans, and blacklisting from government procurement",
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    label: "Classification",
    color: "#0b57b5",
    title: "Step 1 — Product Classification & Standard Identification",
    text: "The first step is identifying the correct TEC Interface Approval Standard (IAS) or Equipment Type Approval specification for your product. TEC has published standards for dozens of product categories — and using the wrong standard for your application is one of the most common causes of rejection and delay. Our team reviews your product's technical specifications, intended use, and network interface type to identify the precise applicable TEC standard. This forms the foundation of everything that follows.",
  },
  {
    step: "02",
    label: "Portal",
    color: "#2563eb",
    title: "Step 2 — Registration on TEC's MTCTE Portal",
    text: "Applicants must register on TEC's MTCTE online portal before filing an application. Both manufacturers and their authorised representatives can register. Our team handles the complete portal registration process, including setting up the applicant profile, product listing, and application workflow.",
  },
  {
    step: "03",
    label: "Testing",
    color: "#0891b2",
    title: "Step 3 — Empanelled Lab Identification & Testing",
    text: "Product testing must be conducted at a laboratory empanelled by TEC for the relevant product category. We identify the most appropriate empanelled lab for your product, coordinate sample submission and test scheduling, and manage the complete testing process from sample dispatch to test report collection. We prepare the test plan in advance so the lab knows exactly which parameters to test — avoiding the back-and-forth that commonly delays testing.",
  },
  {
    step: "04",
    label: "Documents",
    color: "#059669",
    title: "Step 4 — Technical Document Preparation",
    text: "While testing is underway, our team prepares your complete technical documentation package. This includes the application form, product technical specifications, block diagrams, interface descriptions, user manual, test plan, and all supporting business documents. Our team has prepared hundreds of TEC applications and understands exactly what TEC expects.",
  },
  {
    step: "05",
    label: "Filing",
    color: "#d97706",
    title: "Step 5 — Application Filing on MTCTE Portal",
    text: "Once testing is complete and test reports are ready, we file the complete TEC certification application on the MTCTE portal. The application includes all technical documents, lab test reports, product photographs, and the prescribed application fee. A unique application reference number is generated upon successful submission.",
  },
  {
    step: "06",
    label: "TEC Review",
    color: "#dc2626",
    title: "Step 6 — TEC Technical Review & Query Resolution",
    text: "TEC's technical team reviews the submitted application. TEC may raise technical queries requesting additional information or clarification on specific aspects of the product's design or test results. Our team monitors the application status on the MTCTE portal daily and responds to all TEC queries promptly and accurately.",
  },
  {
    step: "07",
    label: "Certificate",
    color: "#7c3aed",
    title: "Step 7 — Grant of TEC Certificate",
    text: "Once the technical review is satisfactorily completed, TEC issues the certification — either an Interface Approval or an Equipment Type Approval, depending on the product category. The certificate is issued digitally through the MTCTE portal and includes the product's model details, applicable standard, and validity period.",
  },
  {
    step: "08",
    label: "Compliance",
    color: "#0d9488",
    title: "Step 8 — Post-Certification Compliance",
    text: "After receiving TEC certification, manufacturers and importers must ensure that all products sold in India carry the TEC certification mark and reference number. TEC conducts market surveillance to verify ongoing compliance. Our team manages renewal reminders and keeps you informed of any changes to applicable TEC standards that may affect your certification.",
  },
];

export const BENEFITS_ITEMS = [
  "Legal compliance — sell telecom equipment in India without risk of enforcement action or customs holds",
  "Network operator access — supply to Jio, Airtel, Vi, BSNL, and other telecom operators who require TEC-certified equipment",
  "Government procurement — qualify for tenders from government departments, railways, defence, and PSUs",
  "Customs clearance — TEC-certified products pass through Indian customs without telecom compliance delays",
  "Market credibility — TEC certification signals technical excellence and regulatory compliance to Indian buyers",
  "Competitive differentiation — stand out from uncertified competitors in India's large and growing telecom market",
  "Import access — avoid the cost and reputational damage of shipments held at Indian ports",
  "MTCTE compliance — meet DoT's mandatory testing and certification policy requirements for all notified product categories",
  "Long-term market presence — certification renewal ensures continuous legal access to the Indian telecom market",
];

export const FAQ_ITEMS = [
  {
    q: "What is the difference between TEC Certification and WPC ETA Approval?",
    a: "TEC Certification covers compliance with India's telecom network interface standards — ensuring your product connects safely and correctly to India's public telecom infrastructure. WPC ETA Approval covers radio frequency compliance — ensuring your product's wireless emissions are within permitted limits. Many telecom products require both. TEC is issued by the Telecommunications Engineering Centre under DoT, while WPC ETA is issued by the Wireless Planning and Coordination Wing. Our team will confirm which approvals apply to your specific product.",
  },
  {
    q: "Is TEC Certification required for all networking products?",
    a: "Not all networking products require TEC certification — it depends on whether the product category is listed under the MTCTE mandatory certification policy. Products that connect to or interface with India's public telecom network are more likely to require TEC approval. The MTCTE list is updated periodically by DoT. Our team monitors all updates and will confirm whether your specific product requires TEC certification during your free consultation.",
  },
  {
    q: "How long does TEC Certification take?",
    a: "The TEC certification process typically takes 60 to 120 days, depending on the product category, the complexity of the applicable TEC standard, lab testing availability, and TEC's current review queue. Proper preparation — including a well-structured test plan and complete documentation — is the most important factor in keeping the timeline on track. With Ornate's end-to-end management, many applications are completed within 75 to 90 days.",
  },
  {
    q: "Can an importer apply for TEC Certification on behalf of a foreign manufacturer?",
    a: "Yes, an Indian importer with a valid IEC can apply for TEC certification for products manufactured by a foreign company. However, the application requires an authorisation letter from the foreign manufacturer confirming the importer's right to certify and sell the product in India. Foreign manufacturers can also apply directly through the MTCTE portal with an authorised Indian representative. Ornate Quality Services handles both routes.",
  },
  {
    q: "Does TEC Certification need to be renewed?",
    a: "Yes. TEC certifications have a defined validity period — typically three to five years. Renewal must be filed before expiry to ensure continuous compliance. Product changes that affect network interface behaviour during the validity period may require fresh testing or an amendment to the existing certificate. Our team manages renewal proactively and advises on the impact of product changes on certification status.",
  },
];
