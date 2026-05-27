import type { Metadata } from "next";
import { CeBanner } from "./sections/CeBanner";
import { CePageContent } from "./sections/CePageContent";

export const metadata: Metadata = {
  title: "CE Certification | Ornate Quality Services",
  description:
    "Complete CE Certification support for Indian manufacturers exporting to Europe. Directive identification, testing, Technical File preparation, and CE Marking assistance by Ornate Quality Services.",
};

export default function CeCertificationPage() {
  return (
    <>
      <CeBanner />
      <CePageContent />
    </>
  );
}

