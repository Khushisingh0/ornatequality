export type TocItem = {
  id: string;
  label: string;
};

export const CDSCO_TOC: TocItem[] = [
  { id: "introduction", label: "Introduction" },
  { id: "what-is-cdsco", label: "What is CDSCO Registration?" },
  { id: "importance", label: "Why CDSCO Registration Matters" },
  { id: "products-covered", label: "Products Covered" },
  { id: "process", label: "CDSCO Registration Process" },
  { id: "requirements", label: "CDSCO Registration Requirements" },
  { id: "documents", label: "Documents Required" },
  { id: "cost", label: "CDSCO Registration Cost" },
  { id: "validity", label: "Validity & Renewal" },
  { id: "benefits", label: "Benefits of CDSCO Registration" },
  { id: "penalties", label: "Penalties for Non-Compliance" },
  { id: "case-study", label: "Case Study (Real Example)" },
  { id: "faq", label: "Frequently Asked Questions" },
  { id: "get-started", label: "Get Expert Assistance" },
];

export const PRODUCTS_COVERED_ROWS = [
  {
    category: "Medical Devices — Class A (Low Risk)",
    products: "Bandages, surgical gloves, tongue depressors, stethoscopes",
    route: "Self-certification with CDSCO registration",
  },
  {
    category: "Medical Devices — Class B (Low-Medium Risk)",
    products: "Hypodermic needles, suction equipment, basic diagnostic devices",
    route: "CDSCO registration with conformity certificate",
  },
  {
    category: "Medical Devices — Class C (Medium-High Risk)",
    products: "Haemodialysis machines, orthopaedic implants, ventilators",
    route: "CDSCO registration with notified body certificate",
  },
  {
    category: "Medical Devices — Class D (High Risk)",
    products: "Active implantable devices, pacemakers, cardiac stents",
    route: "Full CDSCO approval with clinical evidence",
  },
  {
    category: "In-Vitro Diagnostics (IVD)",
    products: "Blood glucose monitors, COVID test kits, biochemistry analysers",
    route: "IVD-specific CDSCO registration pathway",
  },
  {
    category: "Drugs & Pharmaceuticals",
    products: "Prescription drugs, OTC medicines, APIs, biologicals",
    route: "Form 10 import licence or manufacturing licence",
  },
  {
    category: "Cosmetics (Imported)",
    products: "Skincare, haircare, makeup, personal care products",
    route: "Cosmetic registration on CDSCO Sugam portal",
  },
  {
    category: "Software as Medical Device (SaMD)",
    products: "Medical apps, AI diagnostics, clinical decision software",
    route: "Risk-based classification under MDR 2017",
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    label: "Classify",
    color: "#0b57b5",
    title: "Step 1 — Product Classification & Regulatory Pathway Identification",
    text: "The first step is correctly classifying your product under India's Medical Devices Rules, 2017 — determining whether it is Class A, B, C, or D, and identifying whether it is a medical device, IVD, cosmetic, or drug. This determines the entire regulatory pathway. Our team conducts a thorough product classification review based on intended use, mechanism of action, invasiveness, and duration of patient contact.",
  },
  {
    step: "02",
    label: "AIR",
    color: "#2563eb",
    title: "Step 2 — Appointment of Authorised Indian Representative (AIR)",
    text: "Foreign manufacturers applying for CDSCO registration must appoint an Authorised Indian Representative (AIR) — a person or company based in India who acts as the official liaison between the manufacturer and CDSCO. Ornate Quality Services acts as the AIR for international medical device manufacturers — managing all CDSCO interactions, regulatory filings, and compliance obligations in India.",
  },
  {
    step: "03",
    label: "Dossier",
    color: "#0891b2",
    title: "Step 3 — Technical Documentation Preparation",
    text: "CDSCO registration requires comprehensive technical documentation demonstrating that the device is safe, effective, and manufactured to appropriate quality standards. The dossier includes product description, intended use, manufacturing process, risk management, performance testing, clinical evidence, labelling, and quality management system certification. Our team prepares the complete package tailored to your device's risk class.",
  },
  {
    step: "04",
    label: "NB Cert",
    color: "#059669",
    title: "Step 4 — Notified Body Certificate (Class B, C, D)",
    text: "For Class B, C, and D medical devices, CDSCO requires a certificate from an internationally recognised Notified Body or recognised foreign regulatory authority. Accepted certificates include CE Marking under EU MDR, FDA 510(k) clearance or PMA approval, and certificates from other recognised authorities. Our team advises on which certificates are accepted for your device category.",
  },
  {
    step: "05",
    label: "Sugam",
    color: "#d97706",
    title: "Step 5 — CDSCO Sugam Portal Application Filing",
    text: "All CDSCO applications are filed through the CDSCO Sugam portal. We create the applicant's portal account, prepare and upload all required documents in the correct format, complete the application form, and submit the application along with the prescribed fee. Our team manages the complete portal submission and resolves technical issues that arise during filing.",
  },
  {
    step: "06",
    label: "Review",
    color: "#dc2626",
    title: "Step 6 — CDSCO Technical Review & Query Resolution",
    text: "CDSCO's technical reviewers examine the submitted application and documentation. The review timeline varies by device class — from a few weeks for Class A to several months for Class C or D devices. CDSCO may raise technical queries requiring additional information. Our team monitors application status and responds to all queries promptly and comprehensively.",
  },
  {
    step: "07",
    label: "Certificate",
    color: "#7c3aed",
    title: "Step 7 — Grant of CDSCO Registration Certificate",
    text: "Upon satisfactory completion of the technical review, CDSCO issues the Registration Certificate or Import Licence for the device. The certificate specifies the device name, manufacturer details, product description, and validity period. For imported devices, the certificate is required for customs clearance of all commercial shipments.",
  },
  {
    step: "08",
    label: "PMS",
    color: "#be185d",
    title: "Step 8 — Post-Market Surveillance & Renewal",
    text: "CDSCO registration is not a one-time process. Registered manufacturers and importers must maintain post-market surveillance systems, report adverse events to CDSCO through the Vigilance and Risk Assessment cell, and renew registration before expiry. Our team manages the complete post-registration compliance programme.",
  },
];

export const DOCUMENTS_ROWS = [
  {
    no: "1",
    document: "Manufacturing Authorisation Certificate",
    details:
      "Licence from the regulatory authority of the country of manufacture confirming GMP compliance",
  },
  {
    no: "2",
    document: "ISO 13485 Certificate",
    details: "Quality Management System certificate from an accredited certification body (Class B, C, D)",
  },
  {
    no: "3",
    document: "CE / FDA / Equivalent Certificate",
    details: "International regulatory certificate accepted by CDSCO for the device category (Class B, C, D)",
  },
  {
    no: "4",
    document: "Product Technical File",
    details: "Complete technical documentation covering device description, specifications, and performance data",
  },
  {
    no: "5",
    document: "Risk Management Documentation",
    details: "ISO 14971 risk management file covering all identified hazards and risk controls (Class B, C, D)",
  },
  {
    no: "6",
    document: "Clinical Evidence",
    details: "Clinical evaluation report or clinical trial data demonstrating device safety and performance (Class B, C, D)",
  },
  {
    no: "7",
    document: "Instructions for Use (IFU)",
    details: "Complete instructions for use in English — and other Indian languages as required",
  },
  {
    no: "8",
    document: "AIR Appointment Letter",
    details: "Signed appointment letter for the Authorised Indian Representative",
  },
  {
    no: "9",
    document: "Labelling Samples",
    details: "Proposed Indian market labelling showing all mandatory declarations",
  },
  {
    no: "10",
    document: "Free Sale Certificate",
    details: "Certificate confirming the device is freely sold in the country of manufacture",
  },
];

export const PENALTIES_ROWS = [
  {
    violation: "Importing medical devices without CDSCO registration",
    consequence: "Shipment seized at customs — refused clearance or destroyed",
  },
  {
    violation: "Manufacturing or selling unregistered medical devices",
    consequence: "Imprisonment up to 3 years and/or fine under Drugs and Cosmetics Act",
  },
  {
    violation: "Selling substandard or adulterated medical products",
    consequence: "Imprisonment up to life in cases involving serious harm or death",
  },
  {
    violation: "Failure to report adverse events to CDSCO",
    consequence: "Regulatory action including suspension or cancellation of registration",
  },
  {
    violation: "Non-compliant labelling or false claims",
    consequence: "Product recall, seizure, and penalties under D&C Act",
  },
];

export const BENEFITS_ITEMS = [
  "Legal market access — sell medical devices, drugs, and cosmetics in India without risk of seizure or enforcement",
  "Customs clearance — CDSCO-registered products clear Indian customs without regulatory holds",
  "Hospital procurement — supply to hospitals, government medical stores, and healthcare institutions",
  "GeM portal — required for supplying medical devices to government healthcare buyers",
  "E-commerce — list medical devices on Amazon India, Flipkart Health, and other online health platforms",
  "Distributor onboarding — meet mandatory compliance requirements of national medical device distributors",
  "Patient safety — CDSCO registration confirms your device has been assessed for safety and performance",
  "Brand credibility — CDSCO registration signals regulatory compliance to healthcare professionals and institutional buyers",
  "International credibility — CDSCO registration supports market access applications in other South Asian markets",
];

export const FAQ_ITEMS = [
  {
    q: "Is CE Marking sufficient to sell medical devices in India?",
    a: "No. CE Marking is accepted by CDSCO as supporting evidence for Class B, C, and D device registrations — but it does not replace CDSCO registration. Every medical device sold in India must have a valid CDSCO registration certificate, regardless of international certifications. CE Marking makes the CDSCO registration process faster and easier — but it is not a substitute for it.",
  },
  {
    q: "How long does CDSCO registration take for medical devices?",
    a: "Class A device registrations are typically processed within 30 to 60 days. Class B registrations typically take 3 to 6 months. Class C and D registrations can take 6 to 18 months. Thorough preparation, complete documentation, and prompt query responses are the most important factors in keeping the timeline on track.",
  },
  {
    q: "Can an Indian distributor apply for CDSCO registration on behalf of a foreign manufacturer?",
    a: "Yes. An Indian distributor or importer can apply on behalf of a foreign manufacturer — but the manufacturer's cooperation is essential for technical documentation and certificates. Alternatively, the foreign manufacturer can appoint an Authorised Indian Representative and apply directly. Ornate Quality Services advises on the most appropriate registration structure.",
  },
  {
    q: "What is the difference between CDSCO registration for drugs and medical devices?",
    a: "Drugs and medical devices follow separate regulatory pathways under the Drugs and Cosmetics Act. Drug import licences are issued under Form 10 and require a Certificate of Pharmaceutical Product (CoPP) and GMP compliance. Medical device registrations follow the Medical Devices Rules, 2017, with a risk-class-based pathway. Cosmetics follow a third pathway through CDSCO's Sugam portal.",
  },
  {
    q: "Are all medical devices required to be registered with CDSCO?",
    a: "Yes. Under India's Medical Devices Rules, 2017, all medical devices — regardless of risk class — are required to obtain CDSCO registration before being manufactured or imported for sale in India. CDSCO implemented this through a phased schedule covering all device categories. Our team confirms the current registration requirement for your specific device category.",
  },
];
