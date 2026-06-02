import type { Metadata } from "next";
import { EprBanner } from "./sections/EprBanner";
import { EprPageContent } from "./sections/EprPageContent";

export const metadata: Metadata = {
  title: "EPR Registration | Ornate Quality Services",
  description:
    "Complete EPR Registration support for producers, importers and brand owners in India. CPCB portal filing, PRO onboarding, target setting, and annual compliance reporting by Ornate Quality Services.",
};

export default function EprRegistrationPage() {
  return (
    <>
      <EprBanner />
      <EprPageContent />
    </>
  );
}
