import React from "react";
import styles from "@/styles/aboutV2.module.css";
import { IconBadge, IconCheck, IconEye, IconTarget, IconUsers } from "./icons";

const values = [
  {
    title: "Integrity",
    desc: "We follow the highest standards of honesty and ethics.",
    icon: <IconBadge />,
    tone: "blue",
  },
  {
    title: "Transparency",
    desc: "We believe in clear communication and consistent updates.",
    icon: <IconEye />,
    tone: "teal",
  },
  { title: "Speed", desc: "We ensure faster approvals with a streamlined process.", icon: <IconTarget />, tone: "amber" },
  { title: "Accuracy", desc: "We ensure precise documentation and compliance.", icon: <IconCheck />, tone: "violet" },
  { title: "Innovation", desc: "We adapt to new technology and evolving methods.", icon: <IconUsers />, tone: "rose" },
  { title: "Client Success", desc: "Your success is our mission. We grow together.", icon: <IconBadge />, tone: "slate" },
];

export function CoreValues() {
  return (
    <section className={styles.section} aria-label="Our core values">
      <div className={styles.container}>
        <div className={styles.centerHead}>
          <h2 className={styles.sectionHeadingCenter}>OUR CORE VALUES</h2>
        </div>

        <div className={styles.valuesGrid} role="list">
          {values.map((v) => (
            <div className={styles.valueCard} role="listitem" key={v.title}>
              <div className={`${styles.valueIcon} ${styles[`tone_${v.tone}`]}`} aria-hidden="true">
                {v.icon}
              </div>
              <div className={styles.valueTitle}>{v.title}</div>
              <div className={styles.valueText}>{v.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

