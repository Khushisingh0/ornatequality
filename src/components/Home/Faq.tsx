"use client";

import React, { useId, useMemo, useState } from "react";
import styles from "../../styles/faq.module.css";

type FaqItem = {
  q: string;
  a: string;
};

const Faq = () => {
  const baseId = useId();
  const items = useMemo<FaqItem[]>(
    () => [
      {
        q: "How long does BIS/ISI certification usually take?",
        a: "Timelines depend on the product category, testing requirements, and document readiness. Once your documents and samples are ready, we guide you through testing, application filing, and follow-ups to reduce avoidable delays.",
      },
      {
        q: "What documents are required to start the process?",
        a: "Generally you’ll need basic business details, product specifications, factory/manufacturing info, and supporting compliance documents. After a quick review, we share a precise checklist tailored to your product to avoid rework.",
      },
      {
        q: "Do you support PAN-India clients and online coordination?",
        a: "Yes. We work with manufacturers, importers, and brands across India. Most coordination can be done online (calls, email, WhatsApp) while we handle documentation, tracking, and updates end-to-end.",
      },
    ],
    []
  );

  const [openIdx, setOpenIdx] = useState<number>(0);

  return (
    <section className={styles.section} aria-label="Frequently Asked Questions">
      <div className={styles.container}>
        <div className={styles.headingWrap}>
          <h2 className={styles.heading}>
            Frequently Asked <span className={styles.accent}>Questions</span>
          </h2>
          <div className={styles.underline} aria-hidden="true" />
        </div>

        <div className={styles.card}>
          {items.map((it, idx) => {
            const isOpen = openIdx === idx;
            const btnId = `${baseId}-btn-${idx}`;
            const panelId = `${baseId}-panel-${idx}`;

            return (
              <div key={it.q} className={styles.item}>
                <button
                  type="button"
                  id={btnId}
                  className={styles.qRow}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIdx((prev) => (prev === idx ? -1 : idx))}
                >
                  <span className={styles.qText}>{it.q}</span>
                  <span className={styles.icon} aria-hidden="true">
                    {isOpen ? "–" : "+"}
                  </span>
                </button>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  className={`${styles.panel} ${isOpen ? styles.panelOpen : ""}`}
                >
                  <p className={styles.answer}>{it.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;

