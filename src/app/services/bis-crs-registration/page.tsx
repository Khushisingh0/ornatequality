import type { Metadata } from "next";
import { BisCrsBanner } from "./sections/BisCrsBanner";
import { BisCrsPageContent } from "./sections/BisCrsPageContent";

export const metadata: Metadata = {
  title: "BIS CRS Registration | Ornate Quality Services",
  description:
    "Complete BIS CRS, ISI & FMCS registration support for manufacturers and importers in India. End-to-end documentation, testing, and certification by Ornate Quality Services.",
};

export default function BisCrsRegistrationPage() {
  return (
    <>
      <BisCrsBanner />
      <BisCrsPageContent />
    </>
  );
}
