import type { Metadata } from "next";
import { GemBanner } from "./sections/GemBanner";
import { GemPageContent } from "./sections/GemPageContent";

export const metadata: Metadata = {
  title: "GeM Portal Registration | Ornate Quality Services",
  description:
    "Complete GeM seller registration support for manufacturers, suppliers and service providers in India. Profile setup, product listing, OEM registration, and BIS certification coordination by Ornate Quality Services.",
};

export default function GemRegistrationPage() {
  return (
    <>
      <GemBanner />
      <GemPageContent />
    </>
  );
}
