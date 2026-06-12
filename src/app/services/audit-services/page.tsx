import type { Metadata } from "next";
import { AuditBanner } from "./sections/AuditBanner";
import { AuditPageContent } from "./sections/AuditPageContent";

export const metadata: Metadata = {
  title: "Audit & Certification Services | Ornate Quality Services",
  description:
    "Professional audit and certification support in India — BIS factory audit preparation, ISO audit readiness, supplier audits, compliance verification, and corrective action support by Ornate Quality Services.",
};

export default function AuditServicesPage() {
  return (
    <>
      <AuditBanner />
      <AuditPageContent />
    </>
  );
}
