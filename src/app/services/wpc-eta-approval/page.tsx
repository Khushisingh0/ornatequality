import type { Metadata } from "next";
import { WpcBanner } from "./sections/WpcBanner";
import { WpcPageContent } from "./sections/WpcPageContent";

export const metadata: Metadata = {
  title: "WPC ETA Approval | Ornate Quality Services",
  description:
    "Complete WPC ETA Approval support in India for wireless and telecom products. Frequency assessment, lab testing, SACFA portal filing, and certificate delivery by Ornate Quality Services.",
};

export default function WpcEtaApprovalPage() {
  return (
    <>
      <WpcBanner />
      <WpcPageContent />
    </>
  );
}
