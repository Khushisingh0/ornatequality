import type { Metadata } from "next";
import { IecBanner } from "./sections/IecBanner";
import { IecPageContent } from "./sections/IecPageContent";

export const metadata: Metadata = {
  title: "IEC Registration | Ornate Quality Services",
  description:
    "Import Export Code (IEC) registration support in India. DGFT portal filing, document preparation, certificate delivery, and annual IEC updates by Ornate Quality Services.",
};

export default function IecRegistrationPage() {
  return (
    <>
      <IecBanner />
      <IecPageContent />
    </>
  );
}
