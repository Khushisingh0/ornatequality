import type { Metadata } from "next";
import { IsoBanner } from "./sections/IsoBanner";
import { IsoPageContent } from "./sections/IsoPageContent";

export const metadata: Metadata = {
  title: "ISO Certification | Ornate Quality Services",
  description:
    "Complete ISO Certification support in India. Gap analysis, documentation, implementation, internal audit, certification body coordination, and surveillance readiness by Ornate Quality Services.",
};

export default function IsoCertificationPage() {
  return (
    <>
      <IsoBanner />
      <IsoPageContent />
    </>
  );
}

