import React from "react";
import styles from "@/styles/aboutV2.module.css";
import { IconBadge, IconBriefcase, IconCheck, IconTarget, IconUsers } from "./icons";

const items = [
  { title: "Fast Approvals", desc: "Shorter turnaround time for certifications.", icon: <IconTarget />, tone: "amber" },
  {
    title: "Government Expertise",
    desc: "Deep knowledge of regulatory processes.",
    icon: <IconBriefcase />,
    tone: "blue",
  },
  { title: "End-to-End Support", desc: "From consultation to certification delivery.", icon: <IconUsers />, tone: "teal" },
  { title: "Dedicated RM", desc: "Single point of contact throughout the process.", icon: <IconUsers />, tone: "violet" },
  { title: "Industry Knowledge", desc: "Expert across diverse industry verticals.", icon: <IconBadge />, tone: "rose" },
  { title: "Transparent Process", desc: "Real-time updates and complete transparency.", icon: <IconCheck />, tone: "slate" },
];

export function WhyBrandsTrustUs() {
  return (
    <section className={styles.trustBar} aria-label="Why brands trust us">
      <div className={styles.container}>
        <div className={styles.trustTitle}>WHY BRANDS TRUST US</div>

        <div className={styles.trustGrid} role="list">
          {items.map((it) => (
            <div className={styles.trustItem} role="listitem" key={it.title}>
              <div className={`${styles.trustIcon} ${styles[`tone_${it.tone}`]}`} aria-hidden="true">
                {it.icon}
              </div>
              <div className={styles.trustH}>{it.title}</div>
              <div className={styles.trustP}>{it.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

