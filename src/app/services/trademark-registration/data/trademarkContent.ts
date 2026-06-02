export type TocItem = {
  id: string;
  label: string;
};

export const TRADEMARK_TOC: TocItem[] = [
  { id: "introduction", label: "Introduction" },
  { id: "what-is-trademark", label: "What is Trademark Registration?" },
  { id: "importance", label: "Why Trademark Registration Matters" },
  { id: "what-can-be", label: "What Can Be Trademarked" },
  { id: "process", label: "Trademark Registration Process" },
  { id: "requirements", label: "Trademark Registration Requirements" },
  { id: "documents", label: "Documents Required" },
  { id: "cost", label: "Trademark Registration Cost" },
  { id: "validity", label: "Validity & Renewal" },
  { id: "benefits", label: "Benefits of Trademark Registration" },
  { id: "penalties", label: "Penalties for Infringement" },
  { id: "case-study", label: "Case Study (Real Example)" },
  { id: "faq", label: "Frequently Asked Questions" },
  { id: "get-started", label: "Get Expert Assistance" },
];

export const TRADEMARK_TYPES_ROWS = [
  {
    type: "Word Mark",
    description: "Brand name, product name, or slogan in plain text",
    examples: "TATA, Amul, Zomato, Just Do It",
  },
  {
    type: "Logo / Device Mark",
    description: "Stylised logo, design, or graphic symbol",
    examples: "Nike swoosh, Apple logo, Flipkart logo",
  },
  {
    type: "Composite Mark",
    description: "Combination of word and logo / design",
    examples: "Most brand logos with name and symbol",
  },
  {
    type: "Slogan / Tagline",
    description: "Distinctive phrase associated with a brand",
    examples: "'The taste of India', 'Connecting People'",
  },
  {
    type: "Sound Mark",
    description: "A distinctive sound associated with a brand",
    examples: "Intel chime, Nokia ringtone",
  },
  {
    type: "Colour Mark",
    description: "A specific colour or colour combination as a brand identifier",
    examples: "Cadbury purple, Tiffany blue",
  },
  {
    type: "Shape Mark",
    description: "Distinctive shape of a product or packaging",
    examples: "Coca-Cola bottle shape, Toblerone box",
  },
  {
    type: "Series Mark",
    description: "Multiple related marks registered together",
    examples: "Product lines with common name elements",
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    label: "Search",
    color: "#0b57b5",
    title: "Step 1 — Trademark Search",
    text: "Before filing any trademark application, a thorough search of the Trade Marks Registry database is essential. The search identifies existing registered or pending trademarks that are identical or confusingly similar to your proposed mark in the same or related classes.",
  },
  {
    step: "02",
    label: "Classes",
    color: "#2563eb",
    title: "Step 2 — Class Identification",
    text: "Trademarks are registered under one or more of 45 classes (goods and services). Registering in the correct class(es) is critical because protection is limited to the classes you file for.",
  },
  {
    step: "03",
    label: "Filing Prep",
    color: "#0891b2",
    title: "Step 3 — Application Preparation",
    text: "We prepare your trademark application with applicant details, trademark representation (word or device mark), goods/services description, class selection, and supporting documents. Application quality affects examination speed and objection risk.",
  },
  {
    step: "04",
    label: "IP India",
    color: "#059669",
    title: "Step 4 — Online Filing on IP India Portal",
    text: "The trademark application is filed online on the IP India portal. On successful filing, an application number is generated and a priority date is established based on the filing date.",
  },
  {
    step: "05",
    label: "Examination",
    color: "#d97706",
    title: "Step 5 — Examination by Trade Marks Registry",
    text: "After filing, the application is examined by a Trade Marks Examiner. The examiner may accept it for publication or issue an Examination Report citing objections such as similarity with existing marks or descriptiveness.",
  },
  {
    step: "06",
    label: "Response",
    color: "#dc2626",
    title: "Step 6 — Response to Examination Report (If Required)",
    text: "If objections are raised, a response must be filed within 30 days (extensions possible). Our team drafts detailed, legally sound responses addressing each objection with evidence and arguments.",
  },
  {
    step: "07",
    label: "Journal",
    color: "#7c3aed",
    title: "Step 7 — Publication in Trade Marks Journal",
    text: "If the application is accepted, it is published in the Trade Marks Journal. Publication opens a 4-month opposition window during which third parties can challenge the registration.",
  },
  {
    step: "08",
    label: "Opposition",
    color: "#0d9488",
    title: "Step 8 — Opposition Period & Registration",
    text: "During the 4-month window, an opposition can be filed by third parties. If no opposition is filed (or opposition is successfully defended), the trademark proceeds to registration and the Registration Certificate is issued.",
  },
];

export const REQUIREMENTS_BULLETS = [
  "Applicants can apply for trademark registration in India as individuals, companies, LLPs, partnerships, foreign entities, or eligible government bodies.",
  "The mark must be capable of being represented graphically and must be distinctive for the relevant goods/services.",
  "The mark must not be identical or confusingly similar to an existing registered trademark in the same class.",
  "Generic, purely descriptive, or common geographical names generally cannot be registered without acquired distinctiveness.",
];

export const DOCUMENTS_ROWS = [
  {
    no: "1",
    document: "Applicant Identity Proof",
    details: "PAN card of individual or company (individual PAN for proprietors; company PAN for companies).",
  },
  {
    no: "2",
    document: "Business Registration Certificate",
    details:
      "For companies: Certificate of Incorporation; for proprietors: GST or Shop Act registration.",
  },
  {
    no: "3",
    document: "Address Proof",
    details: "Aadhaar, passport, or utility bill for individuals; registered office proof for companies.",
  },
  {
    no: "4",
    document: "Trademark Representation",
    details: "Clear, high-resolution image of the logo/device mark (TIF format, 8cm x 8cm).",
  },
  {
    no: "5",
    document: "User Affidavit (Prior Use)",
    details: "Affidavit declaring the date of first use if the application is based on prior use.",
  },
  {
    no: "6",
    document: "Power of Attorney (Form TM-48)",
    details: "Signed authorization if filing through an agent/consultant.",
  },
  {
    no: "7",
    document: "MSME / Startup Certificate (If Claiming Concessional Fees)",
    details: "Udyam Registration or DPIIT Startup recognition certificate (as applicable).",
  },
  {
    no: "8",
    document: "Priority Document (If Applicable)",
    details: "For Convention applications: certified copy of foreign application within 6 months of filing.",
  },
];

export const PENALTIES_ROWS = [
  {
    violation: "Using a registered trademark without authorisation",
    consequence: "Civil suit for infringement — injunction, damages, and account of profits.",
  },
  {
    violation: "Selling counterfeit goods bearing a registered trademark",
    consequence: "Criminal prosecution — imprisonment (commonly 6 months to 3 years) and fine up to INR 2 lakh.",
  },
  {
    violation: "Repeat trademark infringement",
    consequence: "Enhanced criminal penalties — imprisonment up to 3 years and fine up to INR 2 lakh per offence.",
  },
  {
    violation: "False representation of trademark registration",
    consequence: "Criminal proceedings under Section 107 of the Trade Marks Act.",
  },
  {
    violation: "Infringement on e-commerce platforms",
    consequence: "Platform delisting, account suspension, and civil/criminal action by the trademark owner.",
  },
];

export const BENEFITS_ITEMS = [
  "Exclusive rights — exclusive legal right to use your brand name/logo across India in registered classes",
  "Legal protection — right to sue for infringement and claim damages under the Trade Marks Act",
  "® symbol usage — right to use the registered trademark symbol after registration",
  "E-commerce brand protection — eligibility for Amazon Brand Registry, Flipkart Brand Protection, etc.",
  "Counterfeit prevention — legal tools to stop counterfeit products and copycat brands",
  "Business asset — trademark is an IP asset that increases company valuation",
  "Licensing revenue — registered trademarks can be licensed for royalty income",
  "10-year validity — long protection period with simple renewal every decade",
  "International expansion — Indian registration supports Madrid Protocol applications",
];

export const FAQ_ITEMS = [
  {
    q: "How long does trademark registration take in India?",
    a: "From filing to registration certificate, the process typically takes 18 to 36 months. This includes examination, responses to objections (if any), publication, the 4-month opposition window, and final registration. You can use the TM symbol from the filing date, but the ® symbol is available only after registration.",
  },
  {
    q: "Can I use the ® symbol before my trademark is registered?",
    a: "No. The ® symbol can only be used after registration. Before registration (while your application is pending), you may use the TM symbol to indicate an application is filed.",
  },
  {
    q: "Word mark vs logo/device mark — what is the difference?",
    a: "A word mark protects the text of your brand name/slogan in any font/colour. A device mark protects the specific visual representation (design, font, colour combination and overall look). Many businesses register both for broader protection.",
  },
  {
    q: "Can a foreign company register a trademark in India?",
    a: "Yes. Foreign individuals and companies can file in India. Under the Paris Convention, you can claim priority date in India if you file within 6 months of the first filing in your home country (Convention application). Foreign applicants need a registered trademark agent in India.",
  },
  {
    q: "What happens if someone opposes my trademark application?",
    a: "If a third party files a Notice of Opposition during the publication window, the applicant can file a Counter Statement and defend the application in a quasi-judicial process before the Trade Marks Registry. We manage the opposition defence, including evidence, hearing preparation, and final submissions.",
  },
];

