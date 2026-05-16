"use client"
import React, { useMemo } from "react";
import { Playfair_Display } from "next/font/google";
import styles from "../../styles/services.module.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

function IconBis(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" width="44" height="44" aria-hidden="true" {...props}>
      <defs>
        <linearGradient id="bisG" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0f5fa8" />
          <stop offset="55%" stopColor="#0b79c9" />
          <stop offset="100%" stopColor="#e12007" />
        </linearGradient>
      </defs>
      <path
        d="M32 6 8 18v15c0 14 9.2 27.2 24 31 14.8-3.8 24-17 24-31V18L32 6Z"
        fill="rgba(15,95,168,0.12)"
        stroke="url(#bisG)"
        strokeWidth="2"
      />
      <path
        d="M24 34c3-6 13-6 16 0"
        fill="none"
        stroke="url(#bisG)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M22 26h20"
        fill="none"
        stroke="url(#bisG)"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconIsi(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" width="44" height="44" aria-hidden="true" {...props}>
      <rect
        x="10"
        y="10"
        width="44"
        height="44"
        rx="12"
        fill="#ffffff"
        stroke="rgba(10,27,43,0.22)"
        strokeWidth="2"
      />
      <path
        d="M22 22h20M22 32h20M22 42h20"
        stroke="#111827"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M24 22v20"
        stroke="#0b79c9"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconWpc(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" width="44" height="44" aria-hidden="true" {...props}>
      <circle cx="32" cy="32" r="22" fill="rgba(148,163,184,0.18)" />
      <path
        d="M20 34c4-7 20-7 24 0"
        fill="none"
        stroke="#0f5fa8"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M24 28c3-4 13-4 16 0"
        fill="none"
        stroke="#64748b"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M28 22c2-2 6-2 8 0"
        fill="none"
        stroke="#0b79c9"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconEpr(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" width="44" height="44" aria-hidden="true" {...props}>
      <circle cx="32" cy="32" r="22" fill="rgba(34,197,94,0.14)" />
      <path
        d="M32 12c6 0 10 4 10 10 0 4-2 7-5 9"
        fill="none"
        stroke="#16a34a"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M32 52c-6 0-10-4-10-10 0-4 2-7 5-9"
        fill="none"
        stroke="#16a34a"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M26 18l-6 2 3 5"
        fill="none"
        stroke="#16a34a"
        strokeWidth="3"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        d="M38 46l6-2-3-5"
        fill="none"
        stroke="#16a34a"
        strokeWidth="3"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        d="M24 34h16"
        stroke="rgba(22,163,74,0.55)"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

type ServiceItem = {
  title: string;
  description: string;
  Icon: (props: React.SVGProps<SVGSVGElement>) => React.JSX.Element;
};

const Services = () => {
  const services = useMemo<ServiceItem[]>(
    () => [
      {
        title: "BIS CRS Registration",
        description: "Complete support for BIS CRS certification for electronic products.",
        Icon: IconBis,
      },
      {
        title: "ISI Mark Certification",
        description: "Get ISI Mark for your products as per Indian Standards.",
        Icon: IconIsi,
      },
      {
        title: "WPC ETA Approval",
        description: "WPC approval for wireless & telecom products.",
        Icon: IconWpc,
      },
      {
        title: "EPR Registration",
        description: "EPR compliance for producers, importers & brands.",
        Icon: IconEpr,
      },
    ],
    []
  );

  return (
    <section className={styles.services} aria-label="Our core certification services">
      <div className={styles.container}>
        <div className={styles.headerRow}>
          <p className={styles.sectionTagline}>Your compliance partner —</p>
          <h2 className={`${styles.heading} ${playfair.className}`}>
            Our Core Certification Services
          </h2>
          <div className={styles.headingUnderline} aria-hidden="true" />
        </div>

        <div className={styles.carouselWrap}>
          <div className={styles.carousel} role="list">
            {services.map((s) => (
              <article
                key={s.title}
                className={styles.card}
                role="listitem"
                data-service-card="true"
              >
                <div className={styles.iconWrap} aria-hidden="true">
                  <s.Icon />
                </div>
                <h3 className={styles.cardTitle}>{s.title}</h3>
                <p className={styles.cardText}>{s.description}</p>
                <a className={styles.learnMore} href="#">
                  Learn More <span aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>
        </div>

        <div className={styles.ctaRow}>
          <a className={styles.ctaBtn} href="#">
            Explore All Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
