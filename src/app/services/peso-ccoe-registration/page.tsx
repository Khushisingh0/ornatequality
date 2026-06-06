import type { Metadata } from "next";
import { PesoCcoeBanner } from "./sections/PesoCcoeBanner";
import { PesoCcoePageContent } from "./sections/PesoCcoePageContent";

export const metadata: Metadata = {
  title: "PESO / CCOE Registration | Ornate Quality Services",
  description:
    "Complete PESO / CCOE Registration support in India for explosives, petroleum, LPG, compressed gas, and pressure vessel products. Application filing, inspection coordination, and compliance by Ornate Quality Services.",
};

export default function PesoCcoeRegistrationPage() {
  return (
    <>
      <PesoCcoeBanner />
      <PesoCcoePageContent />
    </>
  );
}
