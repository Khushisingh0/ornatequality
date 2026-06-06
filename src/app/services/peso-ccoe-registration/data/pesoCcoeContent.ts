export type TocItem = {
  id: string;
  label: string;
};

export const PESO_CCOE_TOC: TocItem[] = [
  { id: "introduction", label: "Introduction" },
  { id: "what-is-peso", label: "What is PESO / CCOE Registration?" },
  { id: "importance", label: "Why PESO Registration Matters" },
  { id: "products-covered", label: "Products Covered" },
  { id: "process", label: "PESO Registration Process" },
  { id: "requirements", label: "PESO Registration Requirements" },
  { id: "documents", label: "Documents Required" },
  { id: "cost", label: "PESO Registration Cost" },
  { id: "validity", label: "Validity & Renewal" },
  { id: "benefits", label: "Benefits of PESO Registration" },
  { id: "penalties", label: "Penalties for Non-Compliance" },
  { id: "case-study", label: "Case Study (Real Example)" },
  { id: "faq", label: "Frequently Asked Questions" },
  { id: "get-started", label: "Get Expert Assistance" },
];

export const PRODUCTS_COVERED_ROWS = [
  {
    category: "LPG Equipment",
    products: "LPG cylinders, gas regulators, valves, hoses, gas stoves",
    legislation: "Gas Cylinders Rules, 2016",
  },
  {
    category: "Compressed Gas Containers",
    products: "Industrial gas cylinders, oxygen cylinders, CNG cylinders",
    legislation: "Gas Cylinders Rules, 2016",
  },
  {
    category: "Pressure Vessels",
    products: "Static pressure vessels, mobile pressure vessels, autoclaves",
    legislation: "SMPV (Unfired) Rules, 2016",
  },
  {
    category: "Petroleum Storage",
    products: "Petroleum storage tanks, dispensing units, fuel storage facilities",
    legislation: "Petroleum Act, 1934 & Rules",
  },
  {
    category: "Explosives",
    products: "Industrial explosives, blasting agents, detonators, fuses",
    legislation: "Explosives Act, 1884 & Rules",
  },
  {
    category: "Fireworks & Pyrotechnics",
    products: "Fireworks, sparklers, signal flares, theatrical pyrotechnics",
    legislation: "Explosives Rules, 2008",
  },
  {
    category: "Aerosol Products",
    products: "Pressurised aerosol cans, spray products with flammable propellants",
    legislation: "Gas Cylinders Rules, 2016",
  },
  {
    category: "Cryogenic Vessels",
    products: "Liquid nitrogen containers, cryogenic storage tanks",
    legislation: "SMPV Rules, 2016",
  },
  {
    category: "Petroleum Pipelines",
    products: "Cross-country petroleum pipelines, distribution networks",
    legislation: "Petroleum and Minerals Pipelines Act",
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    label: "Assess",
    color: "#0b57b5",
    title: "Step 1 — Product Assessment & Regulatory Route Identification",
    text: "The first step is confirming which PESO legislation and rules apply to your product or activity and identifying the specific licence, approval, or registration required. Different products fall under different Acts and Rules — and the application process, documentation requirements, and issuing authority vary accordingly. Our team conducts a thorough product assessment to identify the exact regulatory pathway before any documentation is prepared.",
  },
  {
    step: "02",
    label: "Design",
    color: "#2563eb",
    title: "Step 2 — Design and Technical Documentation Preparation",
    text: "PESO applications for product registration — particularly for gas cylinders, pressure vessels, and petroleum equipment — require detailed technical and design documentation including design drawings, material specifications, pressure ratings, safety device specifications, and test certificates from approved testing agencies. Our team prepares or coordinates the complete technical documentation package — ensuring all documents meet PESO's specific format and content requirements.",
  },
  {
    step: "03",
    label: "Testing",
    color: "#0891b2",
    title: "Step 3 — Third-Party Inspection & Testing",
    text: "Many PESO approvals require product testing and inspection by a PESO-approved third-party inspection agency. For gas cylinders and pressure vessels, the inspection typically covers material tests, hydraulic pressure tests, leak tests, and visual inspections. Our team identifies the appropriate PESO-approved inspection agency and coordinates the complete inspection and testing process.",
  },
  {
    step: "04",
    label: "Filing",
    color: "#059669",
    title: "Step 4 — Application Preparation & Filing",
    text: "We prepare the complete PESO application package — including the application form, technical drawings, inspection certificates, test reports, business registration documents, and all supporting compliance documentation. PESO applications are filed with the Chief Controller of Explosives or the relevant Deputy / Assistant Controller office. Our team manages both online and physical application processes.",
  },
  {
    step: "05",
    label: "Review",
    color: "#d97706",
    title: "Step 5 — PESO Technical Review & Site Inspection (If Required)",
    text: "PESO's technical team reviews the submitted application and documentation. For manufacturing licences and storage licences, PESO may conduct a site inspection of the facility to verify infrastructure, safety systems, and operational practices. Our team prepares you thoroughly for any site inspection — advising on facility requirements, safety signage, storage conditions, and fire safety systems.",
  },
  {
    step: "06",
    label: "Licence",
    color: "#dc2626",
    title: "Step 6 — Grant of PESO Licence or Approval",
    text: "Upon satisfactory completion of the technical review and any required inspections, PESO grants the licence or approval. The certificate specifies the product or activity covered, the validity period, and any conditions attached to the approval — including requirements for periodic inspections, maintenance schedules, or reporting obligations.",
  },
  {
    step: "07",
    label: "Renewal",
    color: "#7c3aed",
    title: "Step 7 — Periodic Inspections & Renewal",
    text: "PESO licences are subject to periodic inspections throughout their validity period. Pressure vessels and gas cylinders require periodic testing — typically every 5 years — to confirm continued fitness for service. Storage facilities require annual inspections by PESO-approved inspectors. Our team manages the complete periodic inspection schedule and renewal process.",
  },
];

export const DOCUMENTS_ROWS = [
  {
    no: "1",
    document: "Business Registration Certificate",
    details: "GST registration, company incorporation certificate, or partnership deed",
  },
  {
    no: "2",
    document: "Product Design Drawings",
    details: "Detailed engineering drawings showing dimensions, materials, pressure ratings, and safety devices",
  },
  {
    no: "3",
    document: "Material Test Certificates",
    details: "Mill certificates or material test reports for all pressure-retaining components",
  },
  {
    no: "4",
    document: "Third-Party Inspection Certificate",
    details: "Inspection certificate from a PESO-approved third-party inspection agency",
  },
  {
    no: "5",
    document: "Hydraulic / Pressure Test Reports",
    details: "Test reports confirming the product has passed hydraulic pressure testing at specified test pressure",
  },
  {
    no: "6",
    document: "Country-of-Origin Approval (Importers)",
    details: "Regulatory approval from the country of manufacture for the imported product",
  },
  {
    no: "7",
    document: "Site Plan (Storage / Manufacturing Licence)",
    details: "Scaled layout plan of the facility showing storage areas, safety distances, and safety systems",
  },
  {
    no: "8",
    document: "Fire Safety Certificate",
    details: "NOC from Fire Department for the manufacturing or storage premises",
  },
  {
    no: "9",
    document: "Safety Officer Details",
    details: "Qualifications and appointment letter for the designated Safety Officer",
  },
  {
    no: "10",
    document: "Authorisation Letter",
    details: "If applying through a consultant — signed authorisation from the applicant",
  },
];

export const PENALTIES_ROWS = [
  {
    violation: "Manufacturing regulated products without PESO licence",
    consequence: "Imprisonment up to 3 years and fine under Explosives Act or Petroleum Act",
  },
  {
    violation: "Importing regulated products without PESO approval",
    consequence: "Shipment seized at customs — refused clearance or destroyed",
  },
  {
    violation: "Storage of petroleum / explosives without licence",
    consequence: "Immediate closure of facility and criminal prosecution",
  },
  {
    violation: "Using unregistered pressure vessels or gas cylinders",
    consequence: "Product seizure and prosecution for endangering public safety",
  },
  {
    violation: "Failure to conduct periodic testing of registered products",
    consequence: "Suspension or cancellation of PESO registration",
  },
];

export const BENEFITS_ITEMS = [
  "Legal compliance — manufacture, import, and sell regulated products without risk of enforcement action or prosecution",
  "Customs clearance — PESO-approved products clear Indian customs without regulatory holds",
  "Industrial project access — supply to oil and gas, petrochemical, mining, and construction projects requiring PESO compliance",
  "Government procurement — qualify for government tenders for regulated equipment and industrial supplies",
  "Safety credibility — PESO approval confirms product design and safety compliance to industrial buyers",
  "Distribution access — national distributors and industrial suppliers require PESO documentation before onboarding",
  "Export credibility — PESO approval demonstrates Indian regulatory compliance to overseas buyers",
  "Liability protection — registered products provide legal protection in the event of safety incidents",
  "Long-term market presence — licence renewal ensures continuous legal operation in India's regulated sectors",
];

export const FAQ_ITEMS = [
  {
    q: "What is the difference between PESO and CCOE?",
    a: "PESO — the Petroleum and Explosives Safety Organisation — is the government organisation responsible for safety regulation of petroleum, explosives, and compressed gases in India. CCOE — the Chief Controller of Explosives — is the head of PESO and the statutory authority who issues licences and approvals. In practice, PESO registration and CCOE approval are used interchangeably to refer to the same regulatory approvals.",
  },
  {
    q: "Do aerosol products require PESO registration?",
    a: "Yes. Pressurised aerosol products — including spray paints, deodorants, insecticides, and other products in pressurised containers — fall under the Gas Cylinders Rules, 2016 and require PESO approval before they can be manufactured, imported, or sold in India. The approval covers the pressurised container design and the compatibility of the propellant with the container.",
  },
  {
    q: "Is a separate PESO licence required for each storage location?",
    a: "Yes. PESO storage licences are site-specific — each storage location where petroleum, explosives, or compressed gases are stored above prescribed quantities requires a separate PESO storage licence. The licence specifies the location, products stored, maximum quantities permitted, and safety conditions. Businesses with multiple storage locations must hold separate PESO licences for each site.",
  },
  {
    q: "How often do gas cylinders need to be retested under PESO?",
    a: "The periodic testing frequency varies by cylinder type and the gas contained. For most industrial compressed gas cylinders, PESO requires periodic testing every 5 years. LPG cylinders have their own specific testing schedule. Cylinders that reach their periodic testing due date without being tested must be withdrawn from service until testing is completed and a new certificate is issued.",
  },
  {
    q: "Can a foreign manufacturer get PESO approval directly, or must it go through an Indian importer?",
    a: "Foreign manufacturers can apply for PESO product approval directly or through an authorised Indian representative. The application requires the manufacturer's technical documentation, design drawings, and inspection certificates regardless of who files. Ornate Quality Services acts as the authorised representative for foreign manufacturers seeking PESO approval for products intended for the Indian market.",
  },
];
