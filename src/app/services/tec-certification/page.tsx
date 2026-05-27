import type { Metadata } from "next";
import { TecBanner } from "./sections/TecBanner";
import { TecPageContent } from "./sections/TecPageContent";

export const metadata: Metadata = {
  title: "TEC Certification | Ornate Quality Services",
  description:
    "Complete TEC Certification support in India for telecom equipment. MTCTE portal filing, empanelled lab testing, and Interface Approval by Ornate Quality Services.",
};

export default function TecCertificationPage() {
  return (
    <>
      <TecBanner />
      <TecPageContent />
    </>
  );
}
