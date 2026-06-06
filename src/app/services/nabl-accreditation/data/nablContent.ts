export type TocItem = {
  id: string;
  label: string;
};

export const NABL_TOC: TocItem[] = [
  { id: "introduction", label: "Introduction" },
  { id: "what-is-nabl", label: "What is NABL Accreditation?" },
  { id: "importance", label: "Why NABL Accreditation Matters" },
  { id: "accreditation-types", label: "Types of NABL Accreditation" },
  { id: "process", label: "NABL Accreditation Process" },
  { id: "requirements", label: "NABL Accreditation Requirements" },
  { id: "documents", label: "Documents Required" },
  { id: "cost", label: "NABL Accreditation Cost" },
  { id: "validity", label: "Validity & Surveillance" },
  { id: "benefits", label: "Benefits of NABL Accreditation" },
  { id: "consequences", label: "Consequences of Non-Accreditation" },
  { id: "case-study", label: "Case Study (Real Example)" },
  { id: "faq", label: "Frequently Asked Questions" },
  { id: "get-started", label: "Get Expert Assistance" },
];

export const ACCREDITATION_TYPES_ROWS = [
  {
    type: "Testing — Chemical",
    laboratories: "Chemical analysis labs, environmental labs, food labs, water testing labs",
    parameters: "Heavy metals, pesticides, nutrients, contaminants, composition analysis",
  },
  {
    type: "Testing — Biological",
    laboratories: "Microbiology labs, food safety labs, water quality labs, pharma labs",
    parameters: "Microbial counts, pathogen detection, sterility testing, bioburden",
  },
  {
    type: "Testing — Mechanical",
    laboratories: "Materials testing labs, structural testing, product safety labs",
    parameters: "Tensile strength, hardness, impact, fatigue, dimensional testing",
  },
  {
    type: "Testing — Electrical",
    laboratories: "Electronics testing labs, EMC labs, safety testing labs",
    parameters: "Voltage, current, power, insulation resistance, dielectric strength",
  },
  {
    type: "Testing — Electronics",
    laboratories: "BIS testing labs, RF labs, telecom labs, IT equipment labs",
    parameters: "EMC, RF emissions, electrical safety, BIS CRS parameters",
  },
  {
    type: "Testing — Fluid Flow",
    laboratories: "Flow measurement labs, hydraulic testing labs",
    parameters: "Flow rate, pressure, viscosity, leak testing",
  },
  {
    type: "Calibration — Dimensional",
    laboratories: "Dimensional calibration labs, metrology labs",
    parameters: "Length, mass, angle, surface finish, form measurement",
  },
  {
    type: "Calibration — Electrical",
    laboratories: "Electrical calibration labs, instrument calibration services",
    parameters: "Voltage, current, resistance, frequency, power calibration",
  },
  {
    type: "Calibration — Thermal",
    laboratories: "Temperature calibration labs, thermocouple calibration",
    parameters: "Temperature, humidity, pressure calibration",
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    label: "Gap",
    color: "#0b57b5",
    title: "Step 1 — Gap Analysis Against ISO/IEC 17025:2017",
    text: "The first step is understanding where your laboratory currently stands relative to ISO/IEC 17025:2017. A Gap Analysis identifies what is already in place and what needs to be developed before the NABL application is filed. Our team conducts a thorough Gap Analysis covering all clauses — from management system requirements and document control to equipment calibration, measurement uncertainty, proficiency testing, and method validation.",
  },
  {
    step: "02",
    label: "QMS",
    color: "#2563eb",
    title: "Step 2 — Quality Management System Documentation",
    text: "ISO/IEC 17025:2017 requires laboratories to implement and document a management system covering all technical and administrative operations. Key documents include the Quality Manual, laboratory policies, standard operating procedures, equipment records, staff competency matrices, and internal audit procedures. Our team develops all required documentation tailored to your laboratory's specific scope, equipment, and operational practices.",
  },
  {
    step: "03",
    label: "Calibrate",
    color: "#0891b2",
    title: "Step 3 — Equipment Calibration & Traceability",
    text: "ISO/IEC 17025 requires that all measurement equipment used in accredited testing or calibration is calibrated with traceability to national or international measurement standards. Our team helps you establish a complete equipment inventory, identify calibration requirements for each instrument, and develop a calibration schedule that meets ISO 17025 requirements.",
  },
  {
    step: "04",
    label: "Validate",
    color: "#059669",
    title: "Step 4 — Method Validation & Measurement Uncertainty",
    text: "ISO/IEC 17025 requires laboratories to validate the test methods they use — demonstrating that methods are fit for purpose and produce reliable results. For calibration laboratories, estimating and documenting measurement uncertainty is a specific technical requirement. Our team provides expert guidance on validation approaches and uncertainty budgeting.",
  },
  {
    step: "05",
    label: "PT",
    color: "#d97706",
    title: "Step 5 — Proficiency Testing Participation",
    text: "ISO/IEC 17025 and NABL requirements mandate that accredited laboratories participate in proficiency testing (PT) or interlaboratory comparison programmes. Laboratories must identify appropriate PT programmes for their scope and participate before and during the accreditation cycle. Our team identifies suitable programmes and helps interpret PT results including corrective action plans.",
  },
  {
    step: "06",
    label: "Audit",
    color: "#dc2626",
    title: "Step 6 — Internal Audit & Management Review",
    text: "Before applying to NABL, the laboratory must complete at least one Internal Audit of its entire management system and conduct a Management Review with laboratory leadership. Our team trains your internal auditors, conducts the pre-application Internal Audit, and facilitates the Management Review — ensuring all findings are addressed before the NABL application is filed.",
  },
  {
    step: "07",
    label: "Apply",
    color: "#7c3aed",
    title: "Step 7 — NABL Application Filing",
    text: "The NABL application is filed online through the NABL portal. The application includes the laboratory's complete scope of accreditation, management system documentation, equipment lists, staff competency records, calibration certificates, proficiency testing records, and all supporting compliance documentation. Our team prepares and files the complete NABL application.",
  },
  {
    step: "08",
    label: "Assess",
    color: "#be185d",
    title: "Step 8 — NABL Assessment & Accreditation",
    text: "After application review, NABL assigns an assessment team consisting of a Lead Assessor and technical experts. The assessment involves a document review and an on-site visit to verify implementation. Non-conformities must be closed before accreditation is granted. Our team prepares your laboratory thoroughly for the NABL assessment and supports corrective action plans.",
  },
];

export const DOCUMENTS_ROWS = [
  {
    no: "1",
    document: "Quality Manual",
    details: "Top-level document defining the laboratory's management system, scope, and policies",
  },
  {
    no: "2",
    document: "Standard Operating Procedures",
    details: "Detailed procedures for all accredited tests and calibrations — method-specific",
  },
  {
    no: "3",
    document: "Equipment Calibration Records",
    details: "Calibration certificates for all measurement equipment with traceability to national standards",
  },
  {
    no: "4",
    document: "Staff Competency Records",
    details: "Qualifications, training records, and authorisation documentation for all technical staff",
  },
  {
    no: "5",
    document: "Method Validation Records",
    details: "Validation data demonstrating fitness-for-purpose of all test methods in scope",
  },
  {
    no: "6",
    document: "Measurement Uncertainty Estimates",
    details: "Documented uncertainty budgets for all calibration parameters (calibration labs)",
  },
  {
    no: "7",
    document: "Proficiency Testing Records",
    details: "PT participation records with satisfactory performance results",
  },
  {
    no: "8",
    document: "Internal Audit Records",
    details: "Internal audit plan, checklists, findings, and corrective action records",
  },
  {
    no: "9",
    document: "Management Review Records",
    details: "Minutes and decisions from management review meeting",
  },
  {
    no: "10",
    document: "Scope of Accreditation Draft",
    details: "Proposed scope listing specific tests / calibrations, methods, and measurement ranges",
  },
];

export const CONSEQUENCES_ROWS = [
  {
    situation: "BIS CRS product testing",
    consequence: "Test reports not accepted by BIS — product cannot be certified",
  },
  {
    situation: "FSSAI food safety testing",
    consequence: "Reports not accepted for FSSAI compliance — food business cannot demonstrate compliance",
  },
  {
    situation: "Government tender qualification",
    consequence: "Disqualified from tenders requiring NABL-accredited lab reports",
  },
  {
    situation: "Export testing for CE / FDA",
    consequence: "Reports may not be accepted by overseas regulatory authorities",
  },
  {
    situation: "WPC RF testing",
    consequence: "Designated lab status requires accreditation — not eligible without NABL",
  },
];

export const BENEFITS_ITEMS = [
  "Regulatory acceptance — test reports accepted for BIS, FSSAI, CDSCO, WPC, BEE, and other regulatory certifications",
  "International recognition — ILAC MRA membership means NABL reports are accepted in 100+ countries",
  "Government contracts — eligibility for government, PSU, and institutional testing contracts requiring NABL accreditation",
  "Commercial credibility — NABL accreditation differentiates your laboratory in India's competitive testing market",
  "Higher fee realisation — accredited laboratories command better pricing than non-accredited competitors",
  "Technical improvement — ISO 17025 implementation genuinely improves data reliability and reduces errors",
  "Staff competency — structured training and authorisation systems build a more capable technical team",
  "Customer confidence — accreditation provides independent assurance of your laboratory's technical competence",
  "Export testing market — eligibility to perform export testing for manufacturers targeting international markets",
];

export const FAQ_ITEMS = [
  {
    q: "What is the difference between NABL accreditation and ISO 17025 certification?",
    a: "ISO/IEC 17025 is the international standard for laboratory competence. NABL accreditation is the formal recognition granted by India's national accreditation body based on an assessment of whether the laboratory meets ISO 17025 requirements. ISO 17025 certification from a private certification body does not carry the same regulatory recognition or international standing. For regulatory purposes in India and for international MRA recognition, NABL accreditation is required.",
  },
  {
    q: "How long does NABL accreditation take?",
    a: "For a laboratory starting from a well-organised base with some existing documentation, the process typically takes 9 to 15 months. For laboratories starting from scratch or with significant gaps, 12 to 18 months is more realistic. Our team provides a realistic timeline estimate after the Gap Analysis.",
  },
  {
    q: "Can a small laboratory with limited scope get NABL accreditation?",
    a: "Yes. NABL accreditation is available to laboratories of all sizes — from large multi-disciplinary testing facilities to small specialist laboratories with a narrow scope. A small laboratory with a focused scope has the same fundamental requirements as a large laboratory, but the implementation complexity is proportionally lower.",
  },
  {
    q: "Is NABL accreditation mandatory for all testing laboratories in India?",
    a: "NABL accreditation is not legally mandatory for all laboratories. However, for laboratories providing testing services for regulatory purposes — including BIS, FSSAI, CDSCO, and government procurement testing — NABL accreditation is a practical requirement because regulatory authorities only accept reports from NABL-accredited labs.",
  },
  {
    q: "What happens if a NABL-accredited laboratory fails a surveillance assessment?",
    a: "If significant non-conformities are identified during a surveillance assessment, NABL may place the accreditation on hold — suspending the laboratory's right to issue NABL-accredited reports until non-conformities are closed. In serious cases, NABL may withdraw the accreditation. Our team provides ongoing maintenance support to keep accredited laboratories in continuous compliance.",
  },
];
