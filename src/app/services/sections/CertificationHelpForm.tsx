"use client";

import React, { useState } from "react";
import { Playfair_Display } from "next/font/google";
import styles from "@/styles/servicesPage.module.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const CERT_OPTIONS = [
  "Not sure — recommend the right one for me",
  "BIS Certification",
  "WPC Approval",
  "TEC Certification",
  "LMPC Registration",
  "BEE Registration",
  "EPR Registration",
  "CE Certification",
  "Testing & Documentation",
  "Other / Multiple certifications",
] as const;

type MarketOption = "domestic" | "unsure";

export function CertificationHelpForm() {
  const [submitted, setSubmitted] = useState(false);
  const [market, setMarket] = useState<MarketOption>("domestic");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className={styles.certGuide} role="region" aria-label="Certification guidance">
        <div className={styles.certGuideSuccess}>
          <span className={styles.certGuideSuccessIcon} aria-hidden="true">
            ✓
          </span>
          <div>
            <p className={styles.certGuideSuccessTitle}>Thank you — we&apos;ve got your request</p>
            <p className={styles.certGuideSuccessText}>
              Our certification expert will review your product details and contact you shortly
              with the right compliance path.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.certGuide} role="region" aria-label="Find your certification">
      <div className={styles.certGuideHead}>
        <p className={styles.certGuideKicker}>Not sure which certification you need?</p>
        <h2 className={`${styles.certGuideTitle} ${playfair.className}`}>
          Tell us about your product — we&apos;ll guide you to the right certification
        </h2>
        <p className={styles.certGuideIntro}>
          Share a few details below. Our team will recommend whether you need BIS, WPC, BEE, EPR,
          CE, or another approval for your product and target market.
        </p>
      </div>

      <form className={styles.certGuideForm} onSubmit={handleSubmit} noValidate>
        <div className={styles.certGuideFields}>
          <div className={styles.certGuideField}>
            <label className={styles.certGuideLabel} htmlFor="cert-product">
              Product name or category <span className={styles.certGuideReq}>*</span>
            </label>
            <input
              id="cert-product"
              className={styles.certGuideInput}
              type="text"
              name="product"
              required
              placeholder="e.g. Bluetooth speaker, LED TV, packaged food"
              autoComplete="off"
            />
          </div>

          <div className={styles.certGuideField}>
            <label className={styles.certGuideLabel} htmlFor="cert-market">
              Target market <span className={styles.certGuideReq}>*</span>
            </label>
            <select
              id="cert-market"
              className={styles.certGuideSelect}
              name="market"
              required
              value={market}
              onChange={(e) => setMarket(e.target.value as MarketOption)}
            >
              <option value="domestic">India (Domestic)</option>
              <option value="unsure">Not sure yet</option>
            </select>
          </div>

          <div className={`${styles.certGuideField} ${styles.certGuideFieldWide}`}>
            <label className={styles.certGuideLabel} htmlFor="cert-type">
              Certification you&apos;re looking for
            </label>
            <select
              id="cert-type"
              className={styles.certGuideSelect}
              name="certification"
              defaultValue={CERT_OPTIONS[0]}
            >
              {CERT_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.certGuideField}>
            <label className={styles.certGuideLabel} htmlFor="cert-name">
              Your name <span className={styles.certGuideReq}>*</span>
            </label>
            <input
              id="cert-name"
              className={styles.certGuideInput}
              type="text"
              name="name"
              required
              autoComplete="name"
              placeholder="Full name"
            />
          </div>

          <div className={styles.certGuideField}>
            <label className={styles.certGuideLabel} htmlFor="cert-phone">
              Mobile number <span className={styles.certGuideReq}>*</span>
            </label>
            <input
              id="cert-phone"
              className={styles.certGuideInput}
              type="tel"
              name="phone"
              required
              inputMode="tel"
              autoComplete="tel"
              placeholder="10-digit mobile number"
            />
          </div>

          <div className={styles.certGuideField}>
            <label className={styles.certGuideLabel} htmlFor="cert-email">
              Email
            </label>
            <input
              id="cert-email"
              className={styles.certGuideInput}
              type="email"
              name="email"
              autoComplete="email"
              placeholder="you@company.com"
            />
          </div>

          <div className={`${styles.certGuideField} ${styles.certGuideFieldFull}`}>
            <label className={styles.certGuideLabel} htmlFor="cert-notes">
              Anything else we should know?
            </label>
            <textarea
              id="cert-notes"
              className={`${styles.certGuideInput} ${styles.certGuideTextarea}`}
              name="notes"
              rows={3}
              placeholder="Model number, launch timeline, import vs manufacture, etc."
            />
          </div>
        </div>

        <div className={styles.certGuideActions}>
          <button type="submit" className={styles.certGuideSubmit}>
            Get expert recommendation
            <span aria-hidden="true">→</span>
          </button>
          <p className={styles.certGuideNote}>
            Free guidance — no obligation. We typically respond within one business day.
          </p>
        </div>
      </form>
    </div>
  );
}

