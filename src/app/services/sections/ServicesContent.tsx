"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import styles from "@/styles/servicesPage.module.css";

import heroArt from "@/assests/service.png";
import faqArt from "@/assests/Faqs.png";

import bisLogo from "@/assests/certi-img/BIS.webp";
import wpcLogo from "@/assests/certi-img/wpc.webp";
import beeLogo from "@/assests/certi-img/BEElogo.webp";
import tecLogo from "@/assests/certi-img/tec.webp";
import nablLogo from "@/assests/certi-img/nabl.webp";
import msmeLogo from "@/assests/certi-img/msmp.jpeg";
import isoLogo from "@/assests/certi-img/iso.webp";
import lmpcLogo from "@/assests/certi-img/lmpc.webp";

type TabKey = "domestic" | "international";

type ServiceItem = {
  title: string;
  description: string;
  icon: any;
};

function TabIcon({ type }: { type: TabKey }) {
  if (type === "domestic") {
    return (
      <svg
        viewBox="0 0 24 24"
        width="18"
        height="18"
        aria-hidden="true"
        focusable="false"
      >
        <rect x="3" y="6" width="18" height="12" rx="6" fill="#ffffff" />
        <clipPath id="flagClip">
          <rect x="3" y="6" width="18" height="12" rx="6" />
        </clipPath>
        <g clipPath="url(#flagClip)">
          <rect x="3" y="6" width="18" height="4" fill="#FF9933" />
          <rect x="3" y="10" width="18" height="4" fill="#FFFFFF" />
          <rect x="3" y="14" width="18" height="4" fill="#138808" />
          <circle cx="12" cy="12" r="1.6" fill="#1A5FB4" />
        </g>
        <rect
          x="3"
          y="6"
          width="18"
          height="12"
          rx="6"
          fill="none"
          stroke="rgba(10, 27, 43, 0.14)"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="globeG" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2C7EFF" />
          <stop offset="100%" stopColor="#22C55E" />
        </linearGradient>
      </defs>
      <circle cx="12" cy="12" r="9" fill="url(#globeG)" opacity="0.18" />
      <circle cx="12" cy="12" r="8" fill="none" stroke="url(#globeG)" strokeWidth="2" />
      <path
        d="M4 12h16"
        stroke="url(#globeG)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M12 4c2.8 2.6 4.4 5.4 4.4 8S14.8 17.4 12 20c-2.8-2.6-4.4-5.4-4.4-8S9.2 6.6 12 4Z"
        fill="none"
        stroke="url(#globeG)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PillIcon({ type }: { type: "guidance" | "support" | "speed" | "compliance" }) {
  const common = {
    viewBox: "0 0 24 24",
    width: 16,
    height: 16,
    "aria-hidden": true,
    focusable: false,
  } as const;

  if (type === "guidance") {
    return (
      <svg {...common}>
        <path
          d="M12 2a7 7 0 0 0-4 12.74V19a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4.26A7 7 0 0 0 12 2Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M10 22h4M10 17h4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (type === "support") {
    return (
      <svg {...common}>
        <path
          d="M4 12a8 8 0 1 1 16 0v5a3 3 0 0 1-3 3h-2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M6 12v3M18 12v3"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (type === "speed") {
    return (
      <svg {...common}>
        <path
          d="M12 3a9 9 0 1 0 9 9"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M12 12l5-3"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path
        d="M12 2 5 5v6c0 5 3.4 9.6 7 11 3.6-1.4 7-6 7-11V5l-7-3Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="m9 12 2 2 4-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ServicesContent() {
  const [tab, setTab] = useState<TabKey>("domestic");
  const [openFaq, setOpenFaq] = useState<number>(0);

  const items = useMemo<ServiceItem[]>(() => {
    const base: ServiceItem[] = [
      {
        title: "BIS CRS Certification",
        description:
          "Mandatory registration for electronic and IT products under BIS CRS Scheme.",
        icon: bisLogo,
      },
      {
        title: "ISI Certification",
        description: "ISI Mark certification for various products as per Indian Standards.",
        icon: isoLogo,
      },
      {
        title: "WPC ETA Approval",
        description: "Mandatory approval for wireless and telecom products.",
        icon: wpcLogo,
      },
      {
        title: "BEE Registration",
        description: "BEE registration for energy efficient appliances and equipment.",
        icon: beeLogo,
      },
      {
        title: "EPR Registration",
        description: "EPR authorization for producers as per CPCB guidelines.",
        icon: lmpcLogo,
      },
      {
        title: "CE Certification",
        description: "Conformité Européenne certification for global market access.",
        icon: tecLogo,
      },
      {
        title: "Product Testing",
        description: "Accredited lab testing for safety, performance and compliance.",
        icon: nablLogo,
      },
      {
        title: "Factory Audit & Inspection",
        description: "Factory audit and inspection as per regulatory requirements.",
        icon: msmeLogo,
      },
    ];

    if (tab === "domestic") return base;

    // International tab keeps the same layout; content can be tuned later.
    return base.map((x) => ({
      ...x,
      description: x.description.replace("Indian", "international"),
    }));
  }, [tab]);

  const faqs = useMemo(
    () => [
      {
        q: "What is BIS CRS certification?",
        a: "BIS CRS certification is mandatory for electronic and IT products to ensure they meet the safety and quality standards as per the Compulsory Registration Scheme implemented by BIS.",
      },
      {
        q: "How long does the certification process take?",
        a: "Timelines vary by product category and documentation readiness. Our team shares a clear plan and helps you move faster through testing, filings and approvals.",
      },
      {
        q: "Can you help with both Domestic and International certifications?",
        a: "Yes. We support domestic certifications and also guide brands through international approvals and compliance requirements for global markets.",
      },
      {
        q: "What documents are required for certification?",
        a: "Typically you’ll need product details, test reports, technical documentation and manufacturer information. We provide a checklist based on the exact certification you need.",
      },
    ],
    []
  );

  return (
    <main className={styles.main}>
      <section className={styles.hero} aria-label="Services hero">
        <div className={styles.heroInner}>
          <div className={styles.heroLeft}>
            <div className={styles.heroKicker}>OUR SERVICES</div>
            <h1 className={styles.heroTitle}>
              <span className={styles.heroTitleLine}>Certification &amp; Compliance</span>
              <br />
              Solutions
            </h1>
            <p className={styles.heroText}>
              We provide end-to-end support for mandatory certifications, approvals &amp;
              registrations for your products in domestic and international markets.
            </p>

            <div className={styles.heroTabs} role="tablist" aria-label="Service scope">
              <button
                type="button"
                className={tab === "domestic" ? styles.tabActive : styles.tab}
                onClick={() => setTab("domestic")}
                role="tab"
                aria-selected={tab === "domestic"}
              >
                <span className={styles.flag} aria-hidden="true">
                  <TabIcon type="domestic" />
                </span>
                Domestic
              </button>
              <button
                type="button"
                className={tab === "international" ? styles.tabActive : styles.tab}
                onClick={() => setTab("international")}
                role="tab"
                aria-selected={tab === "international"}
              >
                <span className={styles.flag} aria-hidden="true">
                  <TabIcon type="international" />
                </span>
                International
              </button>
            </div>
          </div>

          <div className={styles.heroRight} aria-hidden="true">
            <Image
              src={heroArt}
              alt=""
              priority
              className={styles.heroArt}
              sizes="(max-width: 980px) 92vw, 520px"
            />
          </div>
        </div>
      </section>

      <section className={styles.section} aria-label="Services list">
        <div className={styles.sectionHead}>
          <div className={styles.sectionTitleRow}>
            <div className={styles.sectionTitleLeft}>
              <span className={styles.sectionFlag} aria-hidden="true">
                  <TabIcon type={tab} />
              </span>
              <div>
                <div className={styles.sectionTitle}>
                  {tab === "domestic" ? "Domestic Certifications" : "International Certifications"}
                </div>
                <div className={styles.sectionSubtitle}>
                  {tab === "domestic"
                    ? "Mandatory certifications, registrations & approvals for Indian market."
                    : "Approvals & certifications to sell in global markets."}
                </div>
              </div>
            </div>

            <div className={styles.pills} aria-label="Highlights">
              <div className={styles.pill}>
                <PillIcon type="guidance" />
                Expert Guidance
              </div>
              <div className={styles.pill}>
                <PillIcon type="support" />
                End-to-End Support
              </div>
              <div className={styles.pill}>
                <PillIcon type="speed" />
                Faster Approvals
              </div>
              <div className={styles.pill}>
                <PillIcon type="compliance" />
                Regulatory Compliance
              </div>
            </div>
          </div>
        </div>

        <div className={styles.grid} role="list">
          {items.map((s) => (
            <article className={styles.card} key={s.title} role="listitem">
              <div className={styles.cardTop}>
                <div className={styles.cardIconWrap} aria-hidden="true">
                  <Image
                    src={s.icon}
                    alt=""
                    fill
                    sizes="48px"
                    className={styles.cardIcon}
                  />
                </div>
                <div className={styles.cardTitle}>{s.title}</div>
              </div>
              <div className={styles.cardDesc}>{s.description}</div>
              <a className={styles.cardLink} href="/contact">
                Learn More <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>

        <div className={styles.helpBar} role="region" aria-label="Help choosing">
          <div className={styles.helpLeft}>
            <div className={styles.helpIcon} aria-hidden="true">
              ?
            </div>
            <div>
              <div className={styles.helpTitle}>Need help choosing the right certification?</div>
              <div className={styles.helpText}>
                Our experts will guide you to the correct certification for your product.
              </div>
            </div>
          </div>

          <a className={styles.helpBtn} href="/contact">
            Talk to an Expert <span aria-hidden="true">→</span>
          </a>
        </div>

        <section className={styles.faqWrap} aria-label="Frequently asked questions">
          <div className={styles.faqCard}>
            <div className={styles.faqGrid}>
              <div className={styles.faqLeft}>
                <div className={styles.faqKicker}>FAQ</div>
                <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
                <div className={styles.faqUnderline} aria-hidden="true" />
                <p className={styles.faqSub}>
                  Find quick answers to the most common queries about our certification and
                  compliance services.
                </p>

                <div className={styles.faqList} role="list">
                  {faqs.map((f, idx) => {
                    const open = idx === openFaq;
                    return (
                      <div
                        key={f.q}
                        className={open ? styles.faqItemOpen : styles.faqItem}
                        role="listitem"
                      >
                        <button
                          type="button"
                          className={styles.faqQ}
                          onClick={() => setOpenFaq((v) => (v === idx ? -1 : idx))}
                          aria-expanded={open}
                        >
                          <span
                            className={open ? styles.faqIconOpen : styles.faqIcon}
                            aria-hidden="true"
                          >
                            {idx + 1}
                          </span>
                          <span className={styles.faqQText}>{f.q}</span>
                          <span className={open ? styles.faqChevronOpen : styles.faqChevron} aria-hidden="true">
                            <svg viewBox="0 0 24 24" width="18" height="18">
                              <path
                                d="m7 10 5 5 5-5"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                        </button>
                        {open ? <div className={styles.faqA}>{f.a}</div> : null}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className={styles.faqRight}>
                <div className={styles.faqArtWrap} aria-hidden="true">
                  <Image
                    src={faqArt}
                    alt=""
                    className={styles.faqArt}
                    sizes="(max-width: 980px) 92vw, 520px"
                  />
                </div>

                <div className={styles.faqSideCard}>
                  <div className={styles.faqSideTop}>
                    <div className={styles.faqShield} aria-hidden="true">
                      <svg viewBox="0 0 24 24" width="18" height="18">
                        <path
                          d="M12 2 5 5v6c0 5 3.4 9.6 7 11 3.6-1.4 7-6 7-11V5l-7-3Z"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinejoin="round"
                        />
                        <path
                          d="m9 12 2 2 4-5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className={styles.faqSideTitle}>Trusted. Certified. Compliant.</div>
                      <div className={styles.faqSideText}>
                        We ensure your products meet all regulatory requirements seamlessly.
                      </div>
                    </div>
                  </div>
                </div>

               
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}

