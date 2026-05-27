export type TocItem = {
  id: string;
  label: string;
};

export const WPC_TOC: TocItem[] = [
  { id: "introduction", label: "Introduction" },
  { id: "what-is-wpc", label: "What is WPC ETA Approval?" },
  { id: "importance", label: "Why WPC ETA Is Essential" },
  { id: "products-covered", label: "Products Requiring WPC ETA" },
  { id: "process", label: "WPC ETA Approval Process" },
  { id: "registration-requirements", label: "Registration Requirements" },
  { id: "documents", label: "Documents Required" },
  { id: "cost", label: "WPC ETA Approval Cost" },
  { id: "validity", label: "Validity & Renewal" },
  { id: "benefits", label: "Benefits of WPC ETA Approval" },
  { id: "penalties", label: "Penalties for Non-Compliance" },
  { id: "case-study", label: "Case Study (Real Example)" },
  { id: "faq", label: "Frequently Asked Questions" },
  { id: "get-started", label: "Get Expert Assistance" },
];

export const PRODUCTS_COVERED_ROWS = [
  {
    category: "Mobile & Smart Devices",
    examples: "Mobile phones, tablets, smart watches, fitness bands",
    technology: "GSM, LTE, Wi-Fi, Bluetooth",
  },
  {
    category: "Networking Equipment",
    examples: "Wi-Fi routers, access points, range extenders, mesh systems",
    technology: "Wi-Fi 2.4GHz / 5GHz / 6GHz",
  },
  {
    category: "Audio & Wearables",
    examples: "Wireless earbuds, headphones, speakers, hearing aids",
    technology: "Bluetooth, RF",
  },
  {
    category: "IoT & Smart Home Devices",
    examples: "Smart bulbs, smart plugs, home automation, sensors",
    technology: "Zigbee, Z-Wave, Wi-Fi, BLE",
  },
  {
    category: "CCTV & Security Systems",
    examples: "IP cameras, NVRs, wireless alarm systems",
    technology: "Wi-Fi, cellular, RF",
  },
  {
    category: "Computer Peripherals",
    examples: "Wireless keyboards, mice, dongles, USB adapters",
    technology: "Bluetooth, 2.4GHz RF",
  },
  {
    category: "Medical Devices",
    examples: "Wireless patient monitors, remote health devices",
    technology: "Bluetooth, Wi-Fi, cellular",
  },
  {
    category: "Industrial Wireless",
    examples: "Wireless sensors, SCADA systems, industrial IoT",
    technology: "Various licensed bands",
  },
  {
    category: "Remote Controls & Drones",
    examples: "RC toys, drones, remote control devices",
    technology: "2.4GHz, 5.8GHz RF",
  },
];

export const DOCUMENTS_ROWS = [
  {
    no: "1",
    document: "Business Registration Certificate",
    details: "GST registration, company incorporation certificate, or IEC for importers",
  },
  {
    no: "2",
    document: "Product Technical Specifications",
    details: "Detailed technical data sheet covering wireless technologies and frequency bands used",
  },
  {
    no: "3",
    document: "Block Diagram of Wireless Architecture",
    details: "Circuit block diagram showing all RF modules, antennas, and frequency components",
  },
  {
    no: "4",
    document: "RF Test Reports",
    details: "Test reports from a WPC-designated laboratory confirming compliance with applicable standards",
  },
  {
    no: "5",
    document: "Product Photographs",
    details: "Clear photographs of the product, PCB, antenna, and all external interfaces",
  },
  {
    no: "6",
    document: "User Manual (Draft)",
    details: "Draft user manual confirming intended use, frequency operation, and safety instructions",
  },
  {
    no: "7",
    document: "Authorisation Letter",
    details: "If applying through a consultant or representative — signed authorisation from the applicant",
  },
  {
    no: "8",
    document: "Declaration of Conformity",
    details: "Manufacturer's declaration confirming compliance with WPC technical standards",
  },
  {
    no: "9",
    document: "Model/Part Number List",
    details: "Complete list of product models covered under the application",
  },
];

export const PENALTIES_ROWS = [
  {
    violation: "Importing wireless products without WPC ETA",
    consequence: "Shipment held or refused entry at Indian customs port",
  },
  {
    violation: "Possessing or selling unapproved wireless devices",
    consequence: "Fine up to INR 1,00,000 and/or imprisonment under IWT Act",
  },
  {
    violation: "Causing radio frequency interference",
    consequence: "Product recall, seizure, and liability for damage caused by interference",
  },
  {
    violation: "Repeat violation after prior enforcement",
    consequence: "Enhanced penalties, blacklisting from imports, and criminal proceedings",
  },
  {
    violation: "Selling on e-commerce without WPC approval",
    consequence: "Listing removal, account suspension, and possible legal notice from platform",
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    label: "Assessment",
    color: "#0b57b5",
    title: "Step 1 — Product Assessment & Frequency Band Identification",
    text: "The first step is identifying the exact frequency bands and radio technologies used in your product. This determines the applicable WPC technical standards, the required test parameters, and whether your product falls under a licensed or unlicensed frequency band category. A single product may use multiple frequency bands, and each must be separately assessed and documented. Our team reviews your product's technical specifications and prepares a complete frequency band assessment before we proceed to the application.",
  },
  {
    step: "02",
    label: "Testing",
    color: "#2563eb",
    title: "Step 2 — Testing at Designated Laboratory",
    text: "Your product must be tested at a laboratory designated by WPC for radio frequency testing. The tests confirm that the product's radio emissions are within the permitted limits for each frequency band, that the product does not cause interference, and that it meets all technical specifications required under the applicable WPC standards. We coordinate the complete testing process — from identifying the right designated lab based on your product category and location, to managing sample submission, test scheduling, and test report collection.",
  },
  {
    step: "03",
    label: "Documents",
    color: "#0891b2",
    title: "Step 3 — Application Preparation & Document Compilation",
    text: "Once test reports are ready, we prepare your complete WPC ETA application package. This includes the application form, technical documentation, test reports, product photographs, a block diagram of the wireless architecture, and all supporting business and product documents. Our team ensures every document is accurate, complete, and formatted correctly before submission — minimising the risk of queries or rejections.",
  },
  {
    step: "04",
    label: "Portal Filing",
    color: "#059669",
    title: "Step 4 — Online Application Filing on WPC Portal",
    text: "The WPC ETA application is filed online through WPC's SACFA (Standing Advisory Committee on Radio Frequency Allocation) portal. The application includes all technical documents, test reports, and the prescribed application fee. Once submitted, a unique application reference number is generated for tracking. We manage the complete portal submission process, including handling technical issues with the portal and ensuring the application is correctly categorised for the fastest possible processing route.",
  },
  {
    step: "05",
    label: "WPC Review",
    color: "#d97706",
    title: "Step 5 — WPC Technical Review",
    text: "WPC's technical team reviews the submitted application and documents. During this stage, WPC may raise clarification queries or request additional technical information. Response time to WPC queries is critical — delays in responding can push your application back in the queue. Our team monitors your application status on the WPC portal and responds to all queries within the required timeframe.",
  },
  {
    step: "06",
    label: "Certificate",
    color: "#dc2626",
    title: "Step 6 — Grant of WPC ETA Certificate",
    text: "Once the application review is complete and all requirements are satisfied, WPC issues the Equipment Type Approval certificate. The certificate includes your product's model number, the approved frequency bands, and a unique approval reference number that must accompany your product in India.",
  },
  {
    step: "07",
    label: "Compliance",
    color: "#7c3aed",
    title: "Step 7 — Post-Approval Compliance",
    text: "The WPC ETA certificate has a validity period and must be renewed before expiry. Any changes to the product's wireless specifications — including firmware updates that affect radio emissions — may require a fresh or amended approval. Our team manages renewal reminders and compliance updates so your approval stays current.",
  },
];

export const BENEFITS_ITEMS = [
  "Legal compliance — sell wireless products in India without risk of customs holds or enforcement action",
  "Customs clearance — WPC-approved products pass through Indian customs without frequency-related delays",
  "E-commerce access — list products on Amazon India, Flipkart, and other platforms without compliance issues",
  "Retail & distribution — meet the compliance requirements of organised retail chains and national distributors",
  "Government contracts — supply to government institutions and public sector buyers who require WPC approval",
  "Brand protection — avoid interference complaints and reputational damage from unapproved frequency use",
  "Consumer confidence — WPC approval signals product quality and regulatory compliance to Indian buyers",
  "Export credibility — WPC ETA strengthens your product's compliance credentials for buyers evaluating Indian regulatory standards",
  "Five-year validity — long validity period reduces recurring compliance costs compared to annual certifications",
];

export const FAQ_ITEMS = [
  {
    q: "Is WPC ETA Approval mandatory for all wireless products?",
    a: "Yes. Any product that uses radio frequency technology — including Wi-Fi, Bluetooth, Zigbee, cellular, or any other wireless standard — requires WPC ETA Approval before it can be legally imported, manufactured, or sold in India. There are very few exceptions, and even low-power devices operating on ISM bands typically require approval. Our team will confirm the exact requirement for your product.",
  },
  {
    q: "How long does WPC ETA Approval take?",
    a: "The timeline for WPC ETA Approval typically ranges from 30 to 90 days, depending on the product category, the number of frequency bands involved, lab testing availability, and WPC's current processing queue. With proper preparation and parallel processing of testing and documentation — which is how Ornate manages it — many approvals are completed in 45 to 60 days.",
  },
  {
    q: "Can one WPC ETA certificate cover multiple product models?",
    a: "Yes, in some cases multiple product models with identical or very similar wireless architectures can be covered under a single WPC ETA application. This depends on WPC's assessment of the technical similarity between models. Our team reviews your product range and advises on the most cost-efficient application structure — whether a single multi-model application or separate applications per model.",
  },
  {
    q: "Does WPC ETA replace BIS CRS Registration for wireless products?",
    a: "No. WPC ETA Approval and BIS CRS Registration are two separate mandatory certifications — and most wireless consumer electronics products require both. WPC ETA covers radio frequency compliance, while BIS CRS covers electrical safety and electromagnetic compatibility. Many products also require TEC Certification. Our team provides a complete compliance assessment so you know exactly which certifications apply to your product.",
  },
  {
    q: "What happens if my product's firmware is updated after WPC approval?",
    a: "Firmware updates that affect the product's radio frequency behaviour — such as changes to transmit power, frequency channels, or wireless protocols — may require an amendment to the existing WPC ETA or a fresh approval. Updates that do not affect RF performance typically do not require reapproval. Our team advises clients on a case-by-case basis when product changes are planned.",
  },
];
