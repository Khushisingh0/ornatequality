import type { Metadata } from "next";
import { NablBanner } from "./sections/NablBanner";
import { NablPageContent } from "./sections/NablPageContent";

export const metadata: Metadata = {
  title: "NABL Accreditation | Ornate Quality Services",
  description:
    "Complete NABL Accreditation support for testing and calibration laboratories in India. ISO 17025 implementation, gap analysis, application filing, and assessment preparation by Ornate Quality Services.",
};

export default function NablAccreditationPage() {
  return (
    <>
      <NablBanner />
      <NablPageContent />
    </>
  );
}
