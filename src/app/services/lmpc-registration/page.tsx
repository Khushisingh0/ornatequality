import type { Metadata } from "next";
import { LmpcBanner } from "./sections/LmpcBanner";
import { LmpcPageContent } from "./sections/LmpcPageContent";

export const metadata: Metadata = {
  title: "LMPC Registration | Ornate Quality Services",
  description:
    "Complete LMPC Registration support for importers of pre-packaged products in India. Packaging compliance review, documentation, NSWS filing, and certificate delivery by Ornate Quality Services.",
};

export default function LmpcRegistrationPage() {
  return (
    <>
      <LmpcBanner />
      <LmpcPageContent />
    </>
  );
}
