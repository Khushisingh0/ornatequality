export type TocItem = {
  id: string;
  label: string;
};

export const BIS_FMCS_TOC: TocItem[] = [
  { id: "introduction", label: "Introduction" },
  { id: "what-is-fmcs", label: "What is BIS FMCS Certification?" },
  { id: "why-matters", label: "Why FMCS Matters for Your Business" },
  { id: "products", label: "Products Requiring FMCS" },
  { id: "process", label: "FMCS Certification Process" },
  { id: "requirements", label: "Registration Requirements" },
  { id: "documents", label: "Documents Required" },
  { id: "cost", label: "FMCS Certification Cost" },
  { id: "validity", label: "Licence Validity and Renewal" },
  { id: "benefits", label: "Key Benefits of FMCS" },
  { id: "penalties", label: "Penalties for Non-Compliance" },
  { id: "case-study", label: "Real Example — Case Study" },
  { id: "faq", label: "Frequently Asked Questions" },
  { id: "get-started", label: "Get Started Today" },
];

export const WHY_FMCS_MATTERS = [
  {
    title: "Mandatory for Hundreds of Product Categories",
    text: "The Indian government has notified over 500 product categories under compulsory BIS certification — including electronics, IT products, electrical goods, toys, chemicals, and more. Importing these products without a valid BIS licence is a violation of Indian law. Customs authorities are increasingly checking for BIS compliance at ports of entry, and non-compliant shipments are being held, returned, or destroyed.",
  },
  {
    title: "Access to India's Growing Consumer Market",
    text: "India is the world's most populous country and one of its fastest-growing economies. E-commerce platforms like Amazon India, Flipkart, and Meesho require BIS certification for several product categories. Retail chains, government procurement portals like GeM, and institutional buyers all demand valid BIS licences before placing orders. Without FMCS certification, international brands are locked out of these channels.",
  },
  {
    title: "Direct Brand Ownership of the BIS Licence",
    text: "One of the most important advantages of FMCS over alternatives is that the BIS licence is issued directly in the name of the foreign manufacturer. This means you retain full control over your brand, your product, and your compliance status — without depending on an Indian importer or agent to hold the licence on your behalf.",
  },
  {
    title: "Stronger Market Position Against Local Competition",
    text: "Indian consumers and buyers recognise the BIS Standard Mark as a symbol of product quality and safety. A foreign manufacturer with a valid BIS FMCS licence stands on equal footing with certified Indian manufacturers — and often ahead of uncertified competitors, both domestic and international.",
  },
];

export const PRODUCT_CATEGORIES = [
  {
    category: "Electronics & IT",
    products: "Laptops, tablets, printers, monitors, set-top boxes",
    standard: "IS 13252, IS 616",
  },
  {
    category: "Mobile & Wireless Devices",
    products: "Mobile phones, smart watches, wireless earbuds, routers",
    standard: "IS 13252, IS 616",
  },
  {
    category: "Power Products",
    products: "Power banks, chargers, adaptors, UPS, inverters",
    standard: "IS 13252",
  },
  {
    category: "Electrical Appliances",
    products: "LED lights, fans, air conditioners, refrigerators",
    standard: "IS 10322, IS 1570",
  },
  {
    category: "Toys & Baby Products",
    products: "Toys, baby gear, infant care products",
    standard: "IS 9873, IS 15644",
  },
  {
    category: "Batteries & Energy",
    products: "Lithium batteries, dry cell batteries, solar cells",
    standard: "IS 16046, IS 1651",
  },
  {
    category: "Safety Equipment",
    products: "Helmets, fire extinguishers, safety footwear",
    standard: "IS 4151, IS 2171",
  },
  {
    category: "Chemical Products",
    products: "Disinfectants, household cleaners, certain chemicals",
    standard: "Various IS codes",
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    label: "Eligibility Check",
    color: "#0b57b5",
    title: "Step 1 — Eligibility Check & Product Assessment",
    text: "The first step is confirming that your product falls under a notified BIS category and identifying the applicable Indian Standard. We review your product specifications, intended use, and target market to determine the exact certification requirements and the correct FMCS application route.",
  },
  {
    step: "02",
    label: "Appoint AIR",
    color: "#2563eb",
    title: "Step 2 — Appointment of Authorised Indian Representative (AIR)",
    text: "BIS requires every foreign manufacturer applying under FMCS to appoint an Authorised Indian Representative (AIR). The AIR acts as the official liaison between the foreign manufacturer and BIS in India. Ornate Quality Services can act as your Authorised Indian Representative, or we can help you appoint the right entity based on your business structure in India.",
  },
  {
    step: "03",
    label: "Document Filing",
    color: "#0891b2",
    title: "Step 3 — Document Preparation & Application Filing",
    text: "We prepare your complete FMCS application package including all technical documents, business registration proofs, product specifications, manufacturing process details, quality control plan, and factory layout. The application is filed on the BIS online portal along with the prescribed fee. Getting the documentation right the first time is critical — incomplete or incorrect applications are a leading cause of delays.",
  },
  {
    step: "04",
    label: "Product Testing",
    color: "#059669",
    title: "Step 4 — Product Testing at BIS-Recognised Laboratory",
    text: "Product samples must be tested at a BIS-recognised laboratory against the parameters specified in the applicable Indian Standard. For foreign manufacturers, samples can be tested at BIS-recognised labs in India or at internationally accredited laboratories that BIS accepts for specific product categories. We coordinate the complete testing process — from sample selection and shipment logistics to test report submission.",
  },
  {
    step: "05",
    label: "Factory Inspection",
    color: "#d97706",
    title: "Step 5 — Factory Inspection at Overseas Manufacturing Facility",
    text: "A team of BIS officials travels to your manufacturing facility outside India to conduct a physical inspection. Ornate prepares a complete inspection readiness report for your facility, conducts a pre-inspection audit, and helps you address every gap before the BIS team arrives. We also coordinate travel and logistics support for the BIS inspection team where required.",
  },
  {
    step: "06",
    label: "Licence Grant",
    color: "#dc2626",
    title: "Step 6 — BIS Review & Licence Grant",
    text: "After the factory inspection and testing are completed satisfactorily, BIS reviews all the documentation and inspection findings. If everything is in order, BIS grants the FMCS licence with a unique CM/L number. The licence must be renewed periodically, and BIS conducts ongoing surveillance inspections.",
  },
  {
    step: "07",
    label: "Post-Licence Compliance",
    color: "#7c3aed",
    title: "Step 7 — Post-Licence Compliance & Surveillance",
    text: "After receiving your BIS FMCS licence, you must ensure that every product exported to India carries the BIS Standard Mark with your CM/L number. BIS conducts market surveillance and periodic factory inspections throughout the licence period. Our team provides ongoing compliance support and renewal management so your licence stays current.",
  },
];

export const FACILITY_REQUIREMENTS = [
  "A permanent, owned or leased manufacturing facility with documented production processes",
  "In-house testing equipment as specified in the relevant Indian Standard — calibrated and functional",
  "A documented quality management system covering raw material inspection, in-process checks, and finished goods testing",
  "Qualified technical personnel responsible for product quality and compliance",
  "Ability to consistently produce products that conform to the applicable Indian Standard",
];

export const BUSINESS_REQUIREMENTS = [
  "Valid business registration in the country of manufacture",
  "Product liability insurance (recommended, may be required for specific categories)",
  "Appointment of an Authorised Indian Representative (AIR) with a valid address in India",
  "Agreement to allow BIS inspectors to conduct factory visits at any time during the licence period",
  "Commitment to use the BIS Standard Mark only on products covered under the licence",
];

export const DOCUMENTS_REQUIRED = [
  { no: "1", document: "Business Registration Certificate", details: "Company incorporation certificate or equivalent from country of origin" },
  { no: "2", document: "Factory Address Proof", details: "Ownership or lease agreement for the manufacturing facility" },
  { no: "3", document: "Product Technical Specifications", details: "Detailed specs, dimensions, materials, ratings, and performance data" },
  { no: "4", document: "Manufacturing Process Flow Chart", details: "Step-by-step diagram of the complete production process" },
  { no: "5", document: "Quality Control Plan", details: "Documented QC procedures — incoming, in-process, and outgoing inspection" },
  { no: "6", document: "In-House Testing Equipment List", details: "Complete list with calibration certificates and test standards" },
  { no: "7", document: "Product Test Reports", details: "Test reports from a BIS-recognised or BIS-accepted international laboratory" },
  { no: "8", document: "AIR Appointment Letter", details: "Signed authorisation letter appointing the Indian Representative" },
  { no: "9", document: "AIR Identity & Address Proof", details: "PAN card, Aadhaar, and address proof of the Authorised Indian Representative" },
  { no: "10", document: "Product Photographs", details: "Clear photographs of the product, packaging, and any existing certification marks" },
];

export const BENEFITS_ITEMS = [
  "Legal market entry — sell products in India without risk of customs clearance issues or seizure",
  "Direct brand ownership — BIS licence issued in your name, not an intermediary's",
  "Access to e-commerce — list products on Amazon India, Flipkart, and other major platforms",
  "Government procurement — eligible to supply to government buyers through GeM and institutional tenders",
  "Consumer confidence — the BIS Standard Mark is recognised and trusted across India",
  "Competitive advantage — stand out from uncertified international and domestic competitors",
  "Long-term market access — licence renewal ensures continuous legal presence in the Indian market",
  "Protection from enforcement — avoid product seizure, port holds, and legal liability",
  "Structured compliance — BIS FMCS creates a compliance framework that strengthens your overall quality systems",
];

export const PENALTY_ROWS = [
  {
    violation: "Importing notified products without BIS licence",
    consequence: "Shipment held at customs, refused entry, or destroyed",
  },
  {
    violation: "Selling uncertified products in Indian market",
    consequence: "Product seizure, penalties up to INR 2,00,000, and possible imprisonment",
  },
  {
    violation: "Misuse of BIS Standard Mark",
    consequence: "Criminal prosecution under BIS Act with enhanced penalties",
  },
  {
    violation: "Repeated violation after first offence",
    consequence: "Fine up to INR 5,00,000 and extended legal proceedings",
  },
];

export const FAQ_ITEMS = [
  {
    q: "Who needs BIS FMCS Certification?",
    a: "Any manufacturer based outside India who wants to sell products in notified categories in the Indian market needs BIS FMCS Certification. This includes manufacturers from China, South Korea, Taiwan, Germany, the USA, and any other country. If your product falls under a mandatory BIS category and you want to export it to India, FMCS is your route.",
  },
  {
    q: "Can an Indian importer hold the BIS licence on behalf of a foreign manufacturer?",
    a: "Yes, in some cases Indian importers can hold a BIS licence for products they import and sell under their own brand. However, if you want the BIS licence to be in your company's name — which protects your brand and gives you full control — you need to apply directly under the FMCS scheme. Ornate will advise on the best structure for your specific business situation.",
  },
  {
    q: "How long does BIS FMCS Certification take?",
    a: "The BIS FMCS process typically takes 4 to 8 months from the date of application, depending on the product category, document completeness, BIS inspection scheduling, and laboratory testing timelines. Cross-border coordination can add complexity, but with experienced support, many applications are completed within 5 to 6 months.",
  },
  {
    q: "Does BIS really come to our factory outside India for inspection?",
    a: "Yes. BIS sends a team of inspectors to conduct a physical factory inspection at your manufacturing facility — regardless of the country. The manufacturer is responsible for bearing the travel and accommodation costs of the BIS inspection team. Our team coordinates all logistics and prepares your facility thoroughly before the BIS visit.",
  },
  {
    q: "Can Ornate Quality Services act as our Authorised Indian Representative?",
    a: "Yes. Ornate Quality Services regularly acts as the Authorised Indian Representative (AIR) for foreign manufacturers applying under the BIS FMCS scheme. As your AIR, we manage all BIS communications, receive official correspondence, and handle compliance matters in India on your behalf — giving you complete visibility without the need to set up a local entity.",
  },
];
