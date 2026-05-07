import React from "react";
import styles from "@/styles/aboutV2.module.css";

import { AboutHero } from "./sections/AboutHero";
import { WhoWeAre } from "./sections/WhoWeAre";
import { Journey } from "./sections/Journey";
import { MissionVision } from "./sections/MissionVision";
import { CoreValues } from "./sections/CoreValues";
import { Team } from "./sections/Team";
import { WhyBrandsTrustUs } from "./sections/WhyBrandsTrustUs";
import { CertificationsAndAssociations } from "./sections/CertificationsAndAssociations";
import { ClientTestimonials } from "./sections/ClientTestimonials";
import { HandshakeCta } from "./sections/HandshakeCta";

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <AboutHero />
      <WhoWeAre />
      <Journey />
      <MissionVision />
      <CoreValues />
      <Team />
      <WhyBrandsTrustUs />
      <CertificationsAndAssociations />
      <ClientTestimonials />
      <HandshakeCta />
    </div>
  );
}

