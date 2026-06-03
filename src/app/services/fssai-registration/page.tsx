import type { Metadata } from "next";
import { FssaiBanner } from "./sections/FssaiBanner";
import { FssaiPageContent } from "./sections/FssaiPageContent";

export const metadata: Metadata = {
  title: "FSSAI Registration | Ornate Quality Services",
  description:
    "Complete FSSAI Registration and licence support in India. Basic, State and Central licence filing on FoSCoS, inspection support, label compliance, and renewals by Ornate Quality Services.",
};

export default function FssaiRegistrationPage() {
  return (
    <>
      <FssaiBanner />
      <FssaiPageContent />
    </>
  );
}
