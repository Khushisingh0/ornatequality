import type { Metadata } from "next";
import { TrademarkBanner } from "./sections/TrademarkBanner";
import { TrademarkPageContent } from "./sections/TrademarkPageContent";

export const metadata: Metadata = {
  title: "Trademark Registration | Ornate Quality Services",
  description:
    "Complete Trademark Registration support in India. Trademark search, class identification, IP India filing, examination response, opposition handling, and renewal management by Ornate Quality Services.",
};

export default function TrademarkRegistrationPage() {
  return (
    <>
      <TrademarkBanner />
      <TrademarkPageContent />
    </>
  );
}

