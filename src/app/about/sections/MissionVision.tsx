import React from "react";
import styles from "@/styles/aboutV2.module.css";
import { IconEye, IconTarget } from "./icons";

export function MissionVision() {
  return (

<section className={`${styles.section} ${styles.mvSection}`} aria-label="Mission and vision">
      <div className={styles.container}>
        <div className={styles.mvGrid}>
          <div className={styles.mvCard}>
            <div className={`${styles.mvIcon} ${styles.tone_amber}`} aria-hidden="true">
              <IconTarget />
            </div>
            <div>
              <div className={styles.mvTitle}>OUR MISSION</div>
              <p className={styles.mvText}>
                To simplify <strong>regulatory compliance</strong> for manufacturers, importers, and
                brands by delivering fast, accurate, and affordable certification solutions across{" "}
                <strong>BIS</strong>, <strong>WPC</strong>, <strong>TEC</strong>, <strong>ISO</strong>,
                and other statutory approvals. We focus on end-to-end support—documentation, testing
                coordination, application filing, and timely follow-ups—so businesses can launch
                products confidently and stay audit-ready.
              </p>
            </div>
          </div>

          <div className={styles.mvCard}>
            <div className={`${styles.mvIcon} ${styles.tone_blue}`} aria-hidden="true">
              <IconEye />
            </div>
            <div>
              <div className={styles.mvTitle}>OUR VISION</div>
              <p className={styles.mvText}>
                To become India&apos;s most trusted compliance and certification partner—known for
                transparency, speed, and accuracy—and to empower businesses to expand in India and
                global markets with confidence. We aim to set a new benchmark in customer experience by
                combining domain expertise with a modern, process-driven approach.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

