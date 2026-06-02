export type TocItem = {
  id: string;
  label: string;
};

export const ISO_TOC: TocItem[] = [
  { id: "introduction", label: "Introduction" },
  { id: "what-is-iso", label: "What is ISO Certification?" },
  { id: "importance", label: "Why ISO Certification Matters" },
  { id: "iso-we-offer", label: "ISO Certifications We Offer" },
  { id: "process", label: "ISO Certification Process" },
  { id: "requirements", label: "ISO Certification Requirements" },
  { id: "documents", label: "Documents Required" },
  { id: "cost", label: "ISO Certification Cost" },
  { id: "validity", label: "Validity & Surveillance" },
  { id: "benefits", label: "Benefits of ISO Certification" },
  { id: "comparison", label: "ISO 9001 vs ISO 14001 vs ISO 45001" },
  { id: "case-study", label: "Case Study (Real Example)" },
  { id: "faq", label: "Frequently Asked Questions" },
  { id: "get-started", label: "Get Expert Assistance" },
];

export const ISO_STANDARDS_ROWS = [
  {
    standard: "ISO 9001:2015",
    focus: "Quality Management System",
    who: "Manufacturers, service providers, traders — anyone who wants to demonstrate quality management",
  },
  {
    standard: "ISO 14001:2015",
    focus: "Environmental Management System",
    who: "Manufacturers, industries with environmental impact, exporters to European markets",
  },
  {
    standard: "ISO 45001:2018",
    focus: "Occupational Health & Safety",
    who: "Manufacturing plants, construction companies, industries with workplace safety obligations",
  },
  {
    standard: "ISO 22000:2018",
    focus: "Food Safety Management",
    who: "Food manufacturers, processors, packagers, restaurants, food supply chain businesses",
  },
  {
    standard: "ISO 27001:2022",
    focus: "Information Security Management",
    who: "IT companies, BPOs, data processors, financial services, any business handling sensitive data",
  },
  {
    standard: "ISO 13485:2016",
    focus: "Medical Devices Quality",
    who: "Medical device manufacturers, importers, distributors, and service providers",
  },
  {
    standard: "ISO 50001:2018",
    focus: "Energy Management",
    who: "Energy-intensive industries, manufacturers with high energy consumption, sustainability-focused businesses",
  },
  {
    standard: "ISO 22301:2019",
    focus: "Business Continuity",
    who: "Financial institutions, IT companies, critical infrastructure operators",
  },
  {
    standard: "IATF 16949:2016",
    focus: "Automotive Quality",
    who: "Automotive parts manufacturers and suppliers to the automotive industry",
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    label: "Gap Analysis",
    color: "#0b57b5",
    title: "Step 1 — Gap Analysis",
    text: "We compare your current processes and documentation with the chosen ISO standard to identify gaps and priorities. The output becomes your implementation roadmap.",
  },
  {
    step: "02",
    label: "Documentation",
    color: "#2563eb",
    title: "Step 2 — Management System Documentation",
    text: "We develop policies, procedures, work instructions, and records tailored to how your business actually operates, so the system is practical and audit-ready.",
  },
  {
    step: "03",
    label: "Implementation",
    color: "#0891b2",
    title: "Step 3 — Implementation & Employee Training",
    text: "We roll out the documented processes, train teams, and establish monitoring and measurement systems required by the standard so implementation is real (not just paperwork).",
  },
  {
    step: "04",
    label: "Internal Audit",
    color: "#059669",
    title: "Step 4 — Internal Audit",
    text: "We train internal auditors and conduct the first internal audit to identify non-conformances before the certification audit, improving first-time success.",
  },
  {
    step: "05",
    label: "Management Review",
    color: "#d97706",
    title: "Step 5 — Management Review",
    text: "We facilitate the formal management review required by ISO, covering audit results, objectives, performance data, customer feedback, and improvement actions.",
  },
  {
    step: "06",
    label: "Stage 1",
    color: "#dc2626",
    title: "Step 6 — Certification Body Selection & Stage 1 Audit",
    text: "We help you select a credible accreditation-backed certification body and prepare for Stage 1, which reviews documentation and readiness before Stage 2.",
  },
  {
    step: "07",
    label: "Stage 2",
    color: "#7c3aed",
    title: "Step 7 — Stage 2 Certification Audit",
    text: "Stage 2 is the main on-site audit that verifies implementation in practice. We support your team to present records and demonstrate process control confidently.",
  },
  {
    step: "08",
    label: "Surveillance",
    color: "#0d9488",
    title: "Step 8 — Certification & Ongoing Surveillance",
    text: "After successful audit closure, the certificate is issued for a 3-year cycle with annual surveillance audits. We help you maintain compliance and prepare each year.",
  },
];

export const DOCUMENTS_ROWS = [
  {
    no: "1",
    document: "Quality / Management Policy",
    details:
      "Top management commitment statement defining objectives for the management system",
  },
  {
    no: "2",
    document: "Scope of Certification",
    details: "Statement defining the boundaries and applicability of the management system",
  },
  {
    no: "3",
    document: "Risk and Opportunity Register",
    details: "Identification and assessment of risks/opportunities relevant to the system",
  },
  {
    no: "4",
    document: "Objectives and Targets",
    details: "Measurable objectives with plans for achieving them",
  },
  {
    no: "5",
    document: "Process Documentation",
    details: "Procedures and work instructions for key processes in scope",
  },
  {
    no: "6",
    document: "Internal Audit Records",
    details: "Audit plans, checklists, findings, corrective actions",
  },
  {
    no: "7",
    document: "Management Review Records",
    details: "Minutes and decisions from management review meetings",
  },
  {
    no: "8",
    document: "Corrective Action Records",
    details: "Non-conformance records and corrective action evidence",
  },
  {
    no: "9",
    document: "Training Records",
    details: "Competence and training evidence for relevant roles",
  },
  {
    no: "10",
    document: "Performance Monitoring Data",
    details: "KPIs and measurements tracking key process performance",
  },
];

export const COMPARISON_ROWS = [
  {
    factor: "Focus",
    iso9001: "Quality of products and services",
    iso14001: "Environmental impact and management",
    iso45001: "Worker health, safety, and wellbeing",
  },
  {
    factor: "Primary Benefit",
    iso9001: "Customer satisfaction, tender eligibility",
    iso14001: "Environmental compliance, export markets",
    iso45001: "Legal compliance, accident prevention",
  },
  {
    factor: "Most Needed By",
    iso9001: "All businesses, manufacturers, exporters",
    iso14001: "Manufacturing, industrial, export businesses",
    iso45001: "Manufacturing, construction, industrial",
  },
  {
    factor: "Mandatory For",
    iso9001: "Many government tenders and PSU contracts",
    iso14001: "European export, ESG reporting (often)",
    iso45001: "Factories Act regulated facilities (often)",
  },
  {
    factor: "Implementation Timeline",
    iso9001: "3 to 6 months typically",
    iso14001: "4 to 8 months typically",
    iso45001: "4 to 8 months typically",
  },
  {
    factor: "Can Be Combined?",
    iso9001: "Yes — IMS with 14001 and 45001",
    iso14001: "Yes — IMS with 9001 and 45001",
    iso45001: "Yes — IMS with 9001 and 14001",
  },
];

export const BENEFITS_ITEMS = [
  "Tender eligibility — meet mandatory ISO requirements for government, PSU, and corporate tenders",
  "Export credibility — satisfy international buyer requirements for quality management certification",
  "Operational improvement — documented processes, reduced errors, and systematic quality control",
  "Customer satisfaction — structured complaint handling and feedback processes",
  "Employee confidence — clear roles, responsibilities, and safety systems improve workplace culture",
  "Risk management — systematic risk identification and mitigation reduces disruptions",
  "Regulatory compliance — ISO 14001 and ISO 45001 support compliance with environmental and safety obligations",
  "Business valuation — ISO certification signals management maturity in due diligence",
  "Continuous improvement — built-in improvement cycle drives ongoing enhancement",
];

export const FAQ_ITEMS = [
  {
    q: "Is ISO Certification mandatory in India?",
    a: "ISO certification is voluntary in most cases, but it is often practically mandatory for businesses supplying to government, PSUs, and large corporates because tenders and vendor qualifications frequently specify ISO requirements (especially ISO 9001).",
  },
  {
    q: "How long does ISO 9001 Certification take?",
    a: "Typical timelines range from 3 to 9 months depending on documentation maturity, operational complexity, and team availability. After a gap analysis, we provide a realistic timeline and implementation roadmap.",
  },
  {
    q: "Can a small business get ISO Certification?",
    a: "Yes. ISO certification is available to businesses of all sizes. Requirements scale to organisational size and complexity. We tailor documentation and implementation to avoid unnecessary bureaucracy.",
  },
  {
    q: "What is an Integrated Management System (IMS)?",
    a: "IMS is a combined implementation of multiple ISO standards (commonly ISO 9001, ISO 14001, ISO 45001) into one unified system. Because these standards share a common structure, IMS is more efficient to implement and maintain than separate systems.",
  },
  {
    q: "Does ISO Certification guarantee product quality?",
    a: "ISO 9001 certifies the management system, not individual products. It confirms the organisation has systematic processes for quality control, monitoring, corrective action, customer feedback handling, and continuous improvement.",
  },
];

