import React from "react";
import { Inter } from "next/font/google";
import styles from "@/styles/aboutV2.module.css";
import { IconBadge, IconBriefcase, IconGlobe, IconUsers } from "./icons";

const inter = Inter({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

/** Full-width stats strip — same layout/colors as home Hero stats bar; copy from Who-we-are metrics */
export function AboutStatsBar() {
  return (
    <section
      className={`${styles.aboutStatsSection} ${inter.className}`}
      aria-label="Company highlights"
    >
      <div className={styles.aboutStatsInner} role="list">
        <div className={styles.aboutBarStat} role="listitem">
          <span className={styles.aboutBarStatIcon} aria-hidden="true">
            <IconBriefcase />
          </span>
          <div className={styles.aboutBarStatText}>
            <span className={styles.aboutBarStatValue}>13+</span>
            <span className={styles.aboutBarStatLabel}>Years Experience</span>
          </div>
        </div>

        <div className={styles.aboutBarStat} role="listitem">
          <span className={styles.aboutBarStatIcon} aria-hidden="true">
            <IconBadge />
          </span>
          <div className={styles.aboutBarStatText}>
            <span className={styles.aboutBarStatValue}>5000+</span>
            <span className={styles.aboutBarStatLabel}>Projects Completed</span>
          </div>
        </div>

        <div className={styles.aboutBarStat} role="listitem">
          <span className={styles.aboutBarStatIcon} aria-hidden="true">
            <IconGlobe />
          </span>
          <div className={styles.aboutBarStatText}>
            <span className={styles.aboutBarStatValue}>100+</span>
            <span className={styles.aboutBarStatLabel}>Global Clients</span>
          </div>
        </div>

        <div className={styles.aboutBarStat} role="listitem">
          <span className={styles.aboutBarStatIcon} aria-hidden="true">
            <IconUsers />
          </span>
          <div className={styles.aboutBarStatText}>
            <span className={styles.aboutBarStatValue}>25+</span>
            <span className={styles.aboutBarStatLabel}>Industry Experts</span>
          </div>
        </div>
      </div>
    </section>
  );
}
