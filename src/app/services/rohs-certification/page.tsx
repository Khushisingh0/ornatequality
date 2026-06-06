import type { Metadata } from "next";
import { RohsBanner } from "./sections/RohsBanner";
import { RohsPageContent } from "./sections/RohsPageContent";

export const metadata: Metadata = {
  title: "RoHS Certification | Ornate Quality Services",
  description:
    "Complete RoHS Certification and compliance support for Indian electronics manufacturers. BOM review, substance testing, technical documentation, and Declaration of Conformity by Ornate Quality Services.",
};

export default function RohsCertificationPage() {
  return (
    <>
      <RohsBanner />
      <RohsPageContent />
    </>
  );
}
