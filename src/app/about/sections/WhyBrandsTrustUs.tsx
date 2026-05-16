import React from "react";
import { Inter, Playfair_Display } from "next/font/google";
import styles from "@/styles/aboutV2.module.css";
import {
  IconBriefcase,
  IconCheck,
  IconDoc,
  IconFactory,
  IconTarget,
  IconUsers,
} from "./icons";

const inter = Inter({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const items = [
  {
    title: "Fast Approvals",
    desc: "Accelerated certification process with timely execution and proactive follow-up.",
    icon: <IconTarget />,
    tone: "amber",
  },
  {
    title: "Regulatory Expertise",
    desc: "Deep understanding of national and international compliance frameworks.",
    icon: <IconBriefcase />,
    tone: "blue",
  },
  {
    title: "End-to-End Support",
    desc: "Complete assistance from consultation, documentation, testing to final approval.",
    icon: <IconDoc />,
    tone: "teal",
  },
  {
    title: "Dedicated Project Manager",
    desc: "A single expert point of contact throughout your compliance journey.",
    icon: <IconUsers />,
    tone: "violet",
  },
  {
    title: "Industry-Specific Knowledge",
    desc: "Specialized expertise across electronics, manufacturing, telecom, and consumer products.",
    icon: <IconFactory />,
    tone: "rose",
  },
  {
    title: "Transparent Process",
    desc: "Real-time updates, clear communication, and complete project visibility.",
    icon: <IconCheck />,
    tone: "slate",
  },
];

export function WhyBrandsTrustUs() {
  return (
    <section className={`${styles.trustBar} ${inter.className}`} aria-label="Why brands trust us">
      <div className={styles.container}>
        <div className={styles.trustTitle}>Why brands trust us</div>

        <div className={styles.trustGrid} role="list">
          {items.map((it) => (
            <div className={styles.trustItem} role="listitem" key={it.title}>
              <div className={`${styles.trustIcon} ${styles[`tone_${it.tone}`]}`} aria-hidden="true">
                {it.icon}
              </div>
              <div className={`${styles.trustH} ${playfair.className}`}>{it.title}</div>
              <div className={styles.trustP}>{it.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
