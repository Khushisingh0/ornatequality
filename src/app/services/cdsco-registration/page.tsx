import type { Metadata } from "next";
import { CdscoBanner } from "./sections/CdscoBanner";
import { CdscoPageContent } from "./sections/CdscoPageContent";

export const metadata: Metadata = {
  title: "CDSCO Registration | Ornate Quality Services",
  description:
    "Complete CDSCO Registration support in India for medical devices, drugs, and cosmetics. Product classification, AIR services, Sugam portal filing, and post-market compliance by Ornate Quality Services.",
};

export default function CdscoRegistrationPage() {
  return (
    <>
      <CdscoBanner />
      <CdscoPageContent />
    </>
  );
}
