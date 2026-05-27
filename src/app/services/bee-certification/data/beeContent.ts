export type TocItem = {
  id: string;
  label: string;
};

export const BEE_TOC: TocItem[] = [
  { id: "introduction", label: "Introduction" },
  { id: "what-is-bee", label: "What is BEE Certification?" },
  { id: "process", label: "BEE Certification Process" },
  { id: "products-covered", label: "Products Covered Under BEE" },
  { id: "registration-requirements", label: "BEE Registration Requirements" },
  { id: "documents", label: "Documents Required" },
  { id: "cost", label: "BEE Certification Cost" },
  { id: "timeline", label: "Timeline to Obtain BEE License" },
  { id: "validity", label: "Validity & Renewal" },
  { id: "benefits", label: "Benefits of BEE Certification" },
  { id: "penalties", label: "Penalties for Non-Compliance" },
  { id: "case-study", label: "Case Study (Real Example)" },
  { id: "conclusion", label: "Conclusion" },
  { id: "faq", label: "Frequently Asked Questions" },
  { id: "get-started", label: "Get Expert Assistance" },
];

export const PRODUCTS_COVERED_ROWS = [
  { category: "Cooling Appliances", examples: "Air Conditioners, Refrigerators" },
  { category: "Lighting Products", examples: "LED Lamps, Tube Lights" },
  { category: "Home Appliances", examples: "Washing Machines, Geysers" },
  { category: "Electronics", examples: "Televisions, Set-Top Boxes" },
  { category: "Fans & Ventilation", examples: "Ceiling Fans" },
  { category: "Industrial Equipment", examples: "Distribution Transformers" },
  { category: "Kitchen Appliances", examples: "Induction Cooktops" },
  { category: "Commercial Equipment", examples: "Commercial Refrigeration Units" },
];

export const REGISTRATION_REQUIREMENTS_ROWS = [
  { type: "Business Registration", details: "Company incorporation, GST, trademark details" },
  { type: "Product Testing", details: "Testing in BEE-recognized laboratory" },
  { type: "Technical Documents", details: "Product specifications and energy data" },
  { type: "Authorized Signatory", details: "Identity and authorization documents" },
  { type: "Online Registration", details: "Registration on official BEE portal" },
  { type: "Compliance Standards", details: "Meeting prescribed energy efficiency requirements" },
  { type: "Government Fees", details: "Applicable application and registration fees" },
  { type: "Product Labeling", details: "Proper use of BEE Star Rating Label" },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    label: "Identify Category",
    color: "#0b57b5",
    title: "Step 1: Identify Applicable Product Category",
    text: "The first step is to determine whether the product falls under the mandatory or voluntary BEE labeling scheme. Manufacturers must also identify the applicable energy efficiency standards and technical requirements for their product category.",
  },
  {
    step: "02",
    label: "Product Testing",
    color: "#2563eb",
    title: "Step 2: Product Testing in Approved Laboratory",
    text: "The product must be tested in a NABL-accredited or BEE-recognized laboratory. Testing is conducted to evaluate energy consumption, performance, and efficiency levels according to BEE guidelines. The laboratory issues a test report after successful testing.",
  },
  {
    step: "03",
    label: "Documentation",
    color: "#0891b2",
    title: "Step 3: Documentation Preparation",
    text: "Manufacturers need to prepare necessary documents such as company registration certificates, trademark details, product specifications, authorized signatory documents, test reports, and manufacturing details. Proper documentation is essential for smooth application processing.",
  },
  {
    step: "04",
    label: "BEE Portal",
    color: "#059669",
    title: "Step 4: Online Registration on BEE Portal",
    text: "The applicant must register on the official BEE portal and create a manufacturer account. Required company details, technical information, and supporting documents are uploaded during the registration process.",
  },
  {
    step: "05",
    label: "Application",
    color: "#d97706",
    title: "Step 5: Application Submission",
    text: "After completing registration, the manufacturer submits the BEE Certification application along with product details, test reports, and applicable government fees. The application is reviewed by BEE authorities for compliance verification.",
  },
  {
    step: "06",
    label: "BEE Review",
    color: "#dc2626",
    title: "Step 6: Review and Approval by BEE",
    text: "BEE officials verify the submitted documents, laboratory reports, and technical information. If the product successfully meets energy efficiency requirements, approval is granted for the use of the BEE Star Label.",
  },
  {
    step: "07",
    label: "Star Label",
    color: "#7c3aed",
    title: "Step 7: Grant of BEE Star Label",
    text: "Once approved, the manufacturer receives permission to display the BEE Star Rating Label on certified products. The label indicates the energy efficiency level of the product, ranging from 1 Star to 5 Star.",
  },
  {
    step: "08",
    label: "Renewal",
    color: "#0d9488",
    title: "Step 8: Renewal and Compliance Monitoring",
    text: "Manufacturers must renew BEE Certification periodically and ensure continuous compliance with updated energy efficiency standards. Authorities may also conduct surveillance checks and product verification when required.",
  },
];

export const BENEFITS_ITEMS = [
  "Improved consumer trust through transparent energy efficiency ratings",
  "Compliance with Indian energy efficiency regulations for mandatory categories",
  "Better market acceptance among residential and commercial buyers",
  "Stronger brand credibility and competitive positioning",
  "Reduced electricity consumption supports environmental sustainability",
  "Helps businesses avoid legal issues and market restrictions",
];

export const FAQ_ITEMS = [
  {
    q: "What is BEE Certification?",
    a: "BEE Certification is an energy efficiency certification program managed by the Bureau of Energy Efficiency. It helps consumers identify energy-efficient electrical appliances through the BEE Star Rating Label system.",
  },
  {
    q: "Is BEE Certification mandatory in India?",
    a: "Yes, BEE Certification is mandatory for certain electrical and electronic products notified under the mandatory labeling scheme. Products covered under these regulations cannot be legally sold in India without BEE approval.",
  },
  {
    q: "Which products require BEE Certification?",
    a: "Products such as air conditioners, refrigerators, ceiling fans, LED lamps, televisions, washing machines, and other notified appliances may require BEE Star Label registration depending on applicable regulations.",
  },
  {
    q: "Who can apply for BEE Registration?",
    a: "Manufacturers and authorized representatives of manufacturers can apply for BEE Certification. Importers may also apply if they have proper authorization from the product manufacturer.",
  },
  {
    q: "What is the purpose of the BEE Star Rating Label?",
    a: "The BEE Star Rating Label helps consumers compare the energy efficiency of products. Higher star ratings indicate lower electricity consumption and better energy performance.",
  },
  {
    q: "How long does the BEE Certification process take?",
    a: "The timeline generally depends on product testing, documentation, and application review. In most cases, the process may take approximately 4 to 8 weeks.",
  },
  {
    q: "What documents are required for BEE Certification?",
    a: "Common documents include company registration certificates, GST details, product specifications, trademark documents, laboratory test reports, and authorized signatory documents.",
  },
  {
    q: "Is product testing mandatory for BEE Registration?",
    a: "Yes, products must be tested in NABL-accredited or BEE-recognized laboratories to verify compliance with energy efficiency standards.",
  },
  {
    q: "What happens if products are sold without mandatory BEE Certification?",
    a: "Non-compliance may lead to penalties, fines, product restrictions, or legal action by regulatory authorities.",
  },
  {
    q: "Can BEE Certification be renewed?",
    a: "Yes, manufacturers must renew BEE Certification before expiry by submitting updated documents, applicable fees, and compliance details through the official BEE portal.",
  },
];
