import React from "react";
import styles from "@/styles/aboutV2.module.css";
import { IconBadge, IconBriefcase, IconCalendar, IconGlobe, IconTarget, IconUsers } from "./icons";

const milestones = [
  { year: "2013", label: "Company Founded", icon: <IconBriefcase />, tone: "blue" },
  { year: "2015", label: "1000+ Certifications", icon: <IconBadge />, tone: "amber" },
  { year: "2018", label: "Pan India Expansion", icon: <IconUsers />, tone: "teal" },
  { year: "2021", label: "Global Client Network", icon: <IconGlobe />, tone: "violet" },
  { year: "2026", label: "Premium Digital Compliance Platform", icon: <IconTarget />, tone: "rose" },
  { year: "—", label: "Continuous Growth", icon: <IconCalendar />, tone: "slate" },
];

export function Journey() {
  return (
    <section className={styles.journeyWrap} aria-label="Our journey">
      <div className={styles.container}>
        <div className={styles.journeyTitle}>OUR JOURNEY</div>

        <div className={styles.timeline} role="list" aria-label="Milestones timeline">
          {milestones.map((m) => (
            <div className={styles.milestone} role="listitem" key={`${m.year}-${m.label}`}>
              <div className={`${styles.milestoneDot} ${styles[`tone_${m.tone}`]}`} aria-hidden="true">
                {m.icon}
              </div>
              <div className={styles.milestoneYear}>{m.year}</div>
              <div className={styles.milestoneText}>{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

