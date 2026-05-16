import React from "react";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import styles from "../../styles/trustProcess.module.css";
import manImg from "../../assests/man.png";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...props}>
      <path
        d="M9.2 16.6 4.9 12.3l1.4-1.4 2.9 2.9 8.5-8.5 1.4 1.4-9.9 9.9Z"
        fill="currentColor"
      />
    </svg>
  );
}

function IconConsult(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" width="26" height="26" aria-hidden="true" {...props}>
      <path
        d="M18 25c-4.4 0-8 3-8 6.6V36h16v-4.4C26 28 22.4 25 18 25Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinejoin="round"
      />
      <path
        d="M18 23a6 6 0 1 0-6-6 6 6 0 0 0 6 6Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
      />
      <path
        d="M29 14h9v8c0 1.1-.9 2-2 2h-7l-4 4v-4h-1c-1.1 0-2-.9-2-2v-6c0-1.1.9-2 2-2h5Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconDocs(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" width="26" height="26" aria-hidden="true" {...props}>
      <path
        d="M16 10h12l6 6v22H16a4 4 0 0 1-4-4V14a4 4 0 0 1 4-4Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinejoin="round"
      />
      <path
        d="M28 10v8h8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinejoin="round"
      />
      <path
        d="M18 24h12M18 30h12"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconTest(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" width="26" height="26" aria-hidden="true" {...props}>
      <path
        d="M16 12h16M18 12v-2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path
        d="M14 14h20v24a4 4 0 0 1-4 4H18a4 4 0 0 1-4-4V14Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinejoin="round"
      />
      <path
        d="M19 22h10M19 28h10M19 34h6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path
        d="M34.5 22.5 38 26l7-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.9"
      />
    </svg>
  );
}

function IconApprove(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" width="26" height="26" aria-hidden="true" {...props}>
      <path
        d="M24 8c7 0 14 2 14 10 0 9-6.5 17-14 22-7.5-5-14-13-14-22 0-8 7-10 14-10Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinejoin="round"
      />
      <path
        d="M19 24.5l3.2 3.2L29.8 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const TrustProcess = () => {
  return (
    <section className={styles.section} aria-label="Why trust us and our process">
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.left}>
            <h2 className={`${styles.title} ${playfair.className}`}>
              Why Businesses Trust{" "}
              <span className={styles.brand}>Ornate Certification</span>
            </h2>

            <div className={styles.leftGrid}>
              <ul className={styles.bullets}>
                <li className={styles.bullet}>
                  <span className={styles.bulletIcon} aria-hidden="true">
                    <CheckIcon />
                  </span>
                  <span className={styles.bulletText}>100% Compliance Guarantee</span>
                </li>
                <li className={styles.bullet}>
                  <span className={styles.bulletIcon} aria-hidden="true">
                    <CheckIcon />
                  </span>
                  <span className={styles.bulletText}>Fast Processing &amp; Approval</span>
                </li>
                <li className={styles.bullet}>
                  <span className={styles.bulletIcon} aria-hidden="true">
                    <CheckIcon />
                  </span>
                  <span className={styles.bulletText}>Expert Documentation Support</span>
                </li>
                <li className={styles.bullet}>
                  <span className={styles.bulletIcon} aria-hidden="true">
                    <CheckIcon />
                  </span>
                  <span className={styles.bulletText}>Dedicated Account Manager</span>
                </li>
                <li className={styles.bullet}>
                  <span className={styles.bulletIcon} aria-hidden="true">
                    <CheckIcon />
                  </span>
                  <span className={styles.bulletText}>Transparent Pricing</span>
                </li>
                <li className={styles.bullet}>
                  <span className={styles.bulletIcon} aria-hidden="true">
                    <CheckIcon />
                  </span>
                  <span className={styles.bulletText}>PAN India Service</span>
                </li>
              </ul>

              <div className={styles.manWrap} aria-hidden="true">
                <Image
                  src={manImg}
                  alt=""
                  priority={false}
                  className={styles.manImg}
                  sizes="(max-width: 1000px) 70vw, 320px"
                />
              </div>
            </div>
          </div>

          <div className={styles.right}>
            <h2 className={`${styles.titleRight} ${playfair.className}`}>Our Simple 4-Step Process</h2>

            <div className={styles.steps} role="list" aria-label="Process steps">
              <div className={styles.connector} aria-hidden="true" />

              <div className={styles.step} role="listitem">
                <div className={styles.stepTop}>
                  <div className={styles.stepCircleBlue} aria-hidden="true">
                    <IconConsult />
                  </div>
                  <div className={styles.stepNo} aria-hidden="true">
                    1
                  </div>
                </div>
                <div className={styles.stepTitle}>Free Consultation</div>
                <div className={styles.stepText}>Share your requirements with our experts.</div>
              </div>

              <div className={styles.step} role="listitem">
                <div className={styles.stepTop}>
                  <div className={styles.stepCircleGold} aria-hidden="true">
                    <IconDocs />
                  </div>
                  <div className={styles.stepNo} aria-hidden="true">
                    2
                  </div>
                </div>
                <div className={styles.stepTitle}>Document Preparation</div>
                <div className={styles.stepText}>We prepare and verify all necessary documents.</div>
              </div>

              <div className={styles.step} role="listitem">
                <div className={styles.stepTop}>
                  <div className={styles.stepCircleBlue} aria-hidden="true">
                    <IconTest />
                  </div>
                  <div className={styles.stepNo} aria-hidden="true">
                    3
                  </div>
                </div>
                <div className={styles.stepTitle}>Testing &amp; Application</div>
                <div className={styles.stepText}>
                  Product testing (if required) and application filing.
                </div>
              </div>

              <div className={styles.step} role="listitem">
                <div className={styles.stepTop}>
                  <div className={styles.stepCircleGold} aria-hidden="true">
                    <IconApprove />
                  </div>
                  <div className={styles.stepNo} aria-hidden="true">
                    4
                  </div>
                </div>
                <div className={styles.stepTitle}>Certification Approval</div>
                <div className={styles.stepText}>Get your certificate with complete support.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustProcess;
