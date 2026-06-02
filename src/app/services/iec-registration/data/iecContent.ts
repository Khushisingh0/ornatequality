export type TocItem = {
  id: string;
  label: string;
};

export const IEC_TOC: TocItem[] = [
  { id: "introduction", label: "Introduction" },
  { id: "what-is-iec", label: "What is IEC Registration?" },
  { id: "importance", label: "Why IEC Registration Matters" },
  { id: "who-needs", label: "Who Needs IEC Registration" },
  { id: "process", label: "IEC Registration Process" },
  { id: "requirements", label: "IEC Registration Requirements" },
  { id: "documents", label: "Documents Required" },
  { id: "cost", label: "IEC Registration Cost" },
  { id: "validity", label: "Validity & Annual Update" },
  { id: "benefits", label: "Benefits of IEC Registration" },
  { id: "penalties", label: "Penalties for Non-Compliance" },
  { id: "case-study", label: "Case Study (Real Example)" },
  { id: "faq", label: "Frequently Asked Questions" },
  { id: "get-started", label: "Get Expert Assistance" },
];

export const WHO_NEEDS_ROWS = [
  {
    businessType: "Manufacturer",
    activity: "Importing raw materials, components, or machinery from overseas",
    required: "Yes — mandatory",
  },
  {
    businessType: "Importer / Trader",
    activity: "Importing finished goods for sale in India",
    required: "Yes — mandatory",
  },
  {
    businessType: "Exporter",
    activity: "Exporting goods manufactured or sourced in India to overseas buyers",
    required: "Yes — mandatory",
  },
  {
    businessType: "E-Commerce Seller",
    activity: "Selling products to overseas buyers through platforms like Amazon Global",
    required: "Yes — required for cross-border e-commerce",
  },
  {
    businessType: "Service Exporter",
    activity: "Providing services to overseas clients with foreign currency remittances",
    required: "Yes — required for most service exports",
  },
  {
    businessType: "Startup / New Business",
    activity: "Planning to import components or export products in the future",
    required: "Yes — get IEC before first shipment",
  },
  {
    businessType: "Individual Entrepreneur",
    activity: "Importing or exporting goods in personal or business capacity",
    required: "Yes — IEC can be issued to individuals",
  },
  {
    businessType: "MSME",
    activity: "Importing machinery, exporting handicrafts, textiles, or manufactured goods",
    required: "Yes — mandatory regardless of size",
  },
];

export const DOCUMENTS_ROWS = [
  {
    no: "1",
    document: "PAN Card",
    proprietor: "Individual PAN",
    company: "Company PAN",
  },
  {
    no: "2",
    document: "Aadhaar Card",
    proprietor: "Mandatory — OTP auth",
    company: "Authorised signatory's Aadhaar",
  },
  {
    no: "3",
    document: "Address Proof",
    proprietor: "Aadhaar / Passport / Utility Bill",
    company: "Registered office address proof",
  },
  {
    no: "4",
    document: "Business Registration",
    proprietor: "Shop Act / GST Certificate",
    company: "Certificate of Incorporation / LLP Agreement",
  },
  {
    no: "5",
    document: "Bank Account Details",
    proprietor: "Cancelled cheque / bank certificate",
    company: "Cancelled cheque in company name",
  },
  {
    no: "6",
    document: "Photograph",
    proprietor: "Passport-size photograph",
    company: "Passport-size photo of signatory",
  },
  {
    no: "7",
    document: "Digital Signature",
    proprietor: "Not required for individual",
    company: "DSC of authorised signatory",
  },
  {
    no: "8",
    document: "Authorisation",
    proprietor: "Not applicable",
    company: "Board Resolution / authorisation letter",
  },
];

export const PENALTIES_ROWS = [
  {
    violation: "Importing without IEC",
    consequence: "Shipment held at customs — not cleared until IEC is provided",
  },
  {
    violation: "Exporting without IEC",
    consequence: "Export shipment blocked at port — cannot be processed by customs",
  },
  {
    violation: "Using incorrect or fraudulent IEC",
    consequence: "Seizure of goods and legal proceedings under Foreign Trade Act",
  },
  {
    violation: "Inactive IEC used for customs clearance",
    consequence: "Shipment flagged and held — IEC must be reactivated before clearance",
  },
  {
    violation: "Failure to update IEC annually",
    consequence: "IEC becomes inactive — blocks all import and export activity until updated",
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    label: "PAN Check",
    color: "#0b57b5",
    title: "Step 1 — PAN Verification & Eligibility Check",
    text: "IEC is issued against the applicant's PAN. The first step is verifying that the PAN is active, correctly linked to the applicant's current address and bank account details, and that there are no existing IEC registrations against the same PAN. Our team verifies all PAN-linked details before beginning the application.",
  },
  {
    step: "02",
    label: "Documents",
    color: "#2563eb",
    title: "Step 2 — Document Preparation",
    text: "We prepare the complete IEC application documentation including identity and address proof, business registration documents, bank account details, and digital photograph. Our team verifies that the name and address on the PAN, bank account, and business registration documents match exactly before filing.",
  },
  {
    step: "03",
    label: "DGFT Filing",
    color: "#0891b2",
    title: "Step 3 — DGFT Portal Registration & Application Filing",
    text: "The IEC application is filed on the DGFT portal at dgft.gov.in. We create the applicant's DGFT portal account, complete the application form, upload supporting documents, and submit with government fee payment using DSC or Aadhaar-based OTP authentication as applicable.",
  },
  {
    step: "04",
    label: "Issuance",
    color: "#059669",
    title: "Step 4 — Application Review & IEC Issuance",
    text: "DGFT processes IEC applications automatically for most straightforward cases where documents are consistent. In such cases, the IEC is issued digitally within 24 to 48 hours. For applications requiring manual review, our team monitors status and responds to DGFT queries promptly.",
  },
  {
    step: "05",
    label: "Certificate",
    color: "#d97706",
    title: "Step 5 — IEC Certificate Download & Verification",
    text: "Once issued, we download and provide the official IEC certificate and verify all details — IEC number, entity name, address, and PAN — before handing it over. The IEC number should be shared with your customs broker, bank, and all relevant parties immediately after issuance.",
  },
  {
    step: "06",
    label: "Update",
    color: "#7c3aed",
    title: "Step 6 — Annual IEC Update on DGFT Portal",
    text: "DGFT requires all IEC holders to update their IEC profile every financial year between April and June. IECs not updated within the prescribed period are marked inactive. Our team sends annual update reminders and manages the renewal process to keep your IEC active.",
  },
];

export const BENEFITS_ITEMS = [
  "Legal authorisation — import and export goods legally with customs clearance from day one",
  "Prerequisite for downstream compliance — LMPC, EPR, WPC, GeM, and other registrations require valid IEC",
  "Export incentives — access to RoDTEP, duty drawback, and other government export benefit schemes",
  "Foreign currency transactions — enable international payments through Indian banks without compliance issues",
  "Global market access — establish legal credibility with international buyers, suppliers, and trade partners",
  "No renewal fee — lifetime registration with only a free annual update required",
  "Fast issuance — straightforward applications approved within 24 to 48 hours",
  "Cross-border e-commerce — required for selling on Amazon Global, Flipkart Global, and other export platforms",
  "Trade finance access — enables letter of credit, export financing, and other trade finance facilities from banks",
];

export const FAQ_ITEMS = [
  {
    q: "Is IEC required for importing products for personal use?",
    a: "IEC is not required for imports of goods for personal use — items imported for individual personal consumption and not for commercial sale. However, customs authorities determine personal use based on quantity, value, and nature of goods. For any import in commercial quantities — even for testing or certification — IEC is required.",
  },
  {
    q: "Can I have more than one IEC?",
    a: "No. Only one IEC can be issued against a single PAN. If an IEC has already been issued against your PAN, you must resolve the situation with DGFT before a new application can be filed. Our team handles IEC deactivation and transfer situations as part of our registration service.",
  },
  {
    q: "Is IEC required for service exports?",
    a: "Yes, in most cases. Service exporters who receive foreign currency remittances for services rendered to overseas clients require IEC. Certain exempt categories may apply. Our team confirms whether your service export activity requires IEC during the initial consultation.",
  },
  {
    q: "How do I update my IEC if my business address or bank account changes?",
    a: "IEC details can be updated at any time on the DGFT portal. Changes to address, bank account, mobile number, and contact details can all be updated online. Changes involving legal entity name or PAN change require additional documentation and DGFT review. Our team manages all IEC updates.",
  },
  {
    q: "Does IEC need to be renewed every year?",
    a: "IEC itself does not need renewal with a fee — it is a lifetime registration. However, DGFT requires an annual update between April and June each year. If the annual update is not completed, the IEC becomes inactive. Our team manages this annual update as part of our ongoing compliance support.",
  },
];
