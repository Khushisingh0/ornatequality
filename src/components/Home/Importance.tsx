"use client";

import React, { useMemo } from "react";
import styles from "../../styles/importance.module.css";

function IconCompliance(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" width="34" height="34" aria-hidden="true" {...props}>
      <rect x="10.2" y="13.2" width="23.6" height="25.6" rx="6" fill="rgba(15,95,168,0.10)" />
      <rect x="9" y="12" width="26" height="28" rx="6" fill="none" stroke="currentColor" strokeWidth="2.6" />
      <path
        d="M18 10h10M18 20h10M18 26h10M18 32h8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path
        d="M34 16l5 3v9c0 7-5 12-10 14-5-2-10-7-10-14v-9l5-3"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinejoin="round"
        opacity="0.9"
      />
      <path
        d="M27 27.5l2.2 2.2L34 25"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconPenalty(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" width="34" height="34" aria-hidden="true" {...props}>
      <circle cx="24" cy="24" r="14.4" fill="rgba(0,178,160,0.10)" />
      <path
        d="M24 8a16 16 0 1 0 16 16A16 16 0 0 0 24 8Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
      />
      <path
        d="M24 14v10l7 4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 38h16"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        opacity="0.7"
      />
    </svg>
  );
}

function IconTrust(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" width="34" height="34" aria-hidden="true" {...props}>
      <path
        d="M24 10 12.2 15v9.2c0 8.2 5.2 15.4 11.8 18 6.6-2.6 11.8-9.8 11.8-18V15L24 10Z"
        fill="rgba(255,193,7,0.14)"
      />
      <path
        d="M24 8 10 14v10c0 9.2 6.1 17.5 14 20 7.9-2.5 14-10.8 14-20V14L24 8Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinejoin="round"
      />
      <path
        d="M18.5 24.5 22 28l7.5-8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconApproval(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" width="34" height="34" aria-hidden="true" {...props}>
      <rect x="12" y="12" width="24" height="24" rx="8" fill="rgba(59,130,246,0.10)" />
      <rect x="10" y="10" width="28" height="28" rx="8" fill="none" stroke="currentColor" strokeWidth="2.6" />
      <path
        d="M18 24h12"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path
        d="M24 18v12"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        opacity="0.75"
      />
      <path
        d="M29.5 30.5 32 33l6-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconGrowth(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" width="34" height="34" aria-hidden="true" {...props}>
      <rect x="12" y="14" width="24" height="22" rx="8" fill="rgba(34,197,94,0.10)" />
      <path
        d="M10 38V10"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path
        d="M10 38h28"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path
        d="M14 32l7-8 6 5 9-12"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M33 17h7v7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type Item = {
  title: string;
  desc: string;
  Icon: (props: React.SVGProps<SVGSVGElement>) => React.JSX.Element;
};

const Importance = () => {
  const items = useMemo<Item[]>(
    () => [
      { title: "Legal Compliance", desc: "Meet government regulations", Icon: IconCompliance },
      { title: "Avoid Penalties", desc: "Stay safe from fines & legal actions", Icon: IconPenalty },
      { title: "Market Trust", desc: "Build customer confidence", Icon: IconTrust },
      { title: "Product Approval", desc: "Easy market entry & expansion", Icon: IconApproval },
      { title: "Business Growth", desc: "Increase sales & brand value", Icon: IconGrowth },
    ],
    []
  );

  return (
    <section className={styles.section} aria-label="Why certification is important">
      <div className={styles.container}>
        <div className={styles.headingWrap}>
          <h2 className={styles.heading}>WHY CERTIFICATION IS IMPORTANT</h2>
          <div className={styles.underline} aria-hidden="true" />
        </div>

        <div className={styles.shell}>
          <div className={styles.row} role="list">
            {items.map((it) => (
              <div key={it.title} className={styles.item} role="listitem" data-imp-card="true">
                <div className={styles.icon} aria-hidden="true">
                  <it.Icon />
                </div>
                <div className={styles.text}>
                  <div className={styles.itemTitle}>{it.title}</div>
                  <div className={styles.itemDesc}>{it.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Importance;

