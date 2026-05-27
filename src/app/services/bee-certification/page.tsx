import type { Metadata } from "next";
import { BeeBanner } from "./sections/BeeBanner";
import { BeePageContent } from "./sections/BeePageContent";

export const metadata: Metadata = {
  title: "BEE Certification | Ornate Quality Services",
  description:
    "Complete BEE Certification and star label registration support in India. Product testing, documentation, BEE portal filing, and renewal assistance by Ornate Quality Services.",
};

export default function BeeCertificationPage() {
  return (
    <>
      <BeeBanner />
      <BeePageContent />
    </>
  );
}
