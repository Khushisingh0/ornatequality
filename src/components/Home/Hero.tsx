import React from "react";
import Image from "next/image";
import styles from "../../styles/hero.module.css";
import heroImg from "../../assests/heroimg-transparent.png";

function IconShield(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M12 2 4 5.5V11c0 5.25 3.45 10.2 8 11 4.55-.8 8-5.75 8-11V5.5L12 2Zm-1 13.1-3.2-3.2 1.4-1.4L11 12.3l4.8-4.8 1.4 1.4L11 15.1Z"
      />
    </svg>
  );
}

function IconClock(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm1 11h5v-2h-4V6h-2v7Z"
      />
    </svg>
  );
}

function IconDoc(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Zm0 2.5L19.5 10H14V4.5ZM7 13h10v2H7v-2Zm0 4h10v2H7v-2Zm0-8h6v2H7V9Z"
      />
    </svg>
  );
}

function IconUsers(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M16 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4ZM8 11a3 3 0 1 0-3-3 3 3 0 0 0 3 3Zm8 2c-3 0-6 1.5-6 4v3h12v-3c0-2.5-3-4-6-4ZM8 13c-2.65 0-5 1.2-5 3.2V20h6v-2.6c0-1.35.65-2.5 1.7-3.35A8.7 8.7 0 0 0 8 13Z"
      />
    </svg>
  );
}

function IconTrophy(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 4h8v2a4 4 0 0 1-8 0V4Zm-3 2h3v2a3 3 0 0 1-3-3V6Zm14 0h-3v2a3 3 0 0 0 3-3V6ZM10 14h4M9 20h6M10 20v-3.2c0-.9.7-1.6 1.6-1.6h.8c.9 0 1.6.7 1.6 1.6V20"
      />
    </svg>
  );
}

function IconBriefcase(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 6V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1M4 9.5A2.5 2.5 0 0 1 6.5 7h11A2.5 2.5 0 0 1 20 9.5V18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9.5ZM10 12h4"
      />
    </svg>
  );
}

function IconGlobe(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21a9 9 0 1 0-9-9 9 9 0 0 0 9 9Zm0-18c2.6 2.7 2.6 15.3 0 18M3 12h18M5.5 7.5h13M5.5 16.5h13"
      />
    </svg>
  );
}

function IconWhatsApp(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M12.04 2A9.96 9.96 0 0 0 2 11.96a9.85 9.85 0 0 0 1.45 5.16L2 22l5-1.3a10 10 0 0 0 5.04 1.34h.01A9.96 9.96 0 0 0 22 12.04 10.01 10.01 0 0 0 12.04 2Zm5.8 14.46c-.24.67-1.2 1.23-1.95 1.4-.52.11-1.2.2-3.48-.75-2.92-1.21-4.8-4.19-4.95-4.39-.15-.2-1.2-1.6-1.2-3.05 0-1.45.76-2.16 1.03-2.46.27-.3.6-.37.8-.37h.58c.19 0 .45-.07.7.54.24.6.84 2.07.92 2.22.07.15.12.33.02.53-.1.2-.15.33-.3.5-.15.17-.31.38-.44.5-.15.15-.31.31-.14.6.17.3.77 1.27 1.65 2.05 1.13 1 2.08 1.31 2.38 1.46.3.15.47.12.64-.08.17-.2.74-.86.94-1.16.2-.3.4-.25.67-.15.27.1 1.7.8 1.99.95.3.15.5.22.57.34.07.12.07.7-.17 1.37Z"
      />
    </svg>
  );
}

function Badge({ label }: { label: string }) {
  return (
    <span className={styles.badge} aria-label={label}>
      <svg
        className={styles.badgeSvg}
        viewBox="0 0 80 80"
        width="44"
        height="44"
        role="img"
        aria-hidden="true"
      >
        <rect x="6" y="6" width="68" height="68" rx="16" fill="white" />
        <path
          d="M14 54c12-10 40-10 52 0"
          stroke="rgba(0,0,0,0.08)"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        <text
          x="40"
          y="44"
          textAnchor="middle"
          fontSize="18"
          fontWeight="800"
          fill="#1b3a57"
          fontFamily="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto"
        >
          {label}
        </text>
      </svg>
    </span>
  );
}

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.pill}>Your Trusted Partner</div>

          <h1 className={styles.title}>
              India's Leading
            <span className={styles.titleAccent}> BIS,ISI </span>
                & Compliance certification <span className={styles.titleAccent}>Experts</span>

          </h1>

          <p className={styles.subtitle}>
 Helping Manufacturers, Importers & Brands Get
Government Approvals Faster — Without Hassle .          </p>

          <div className={styles.stats} role="list" aria-label="Highlights">
            <div className={styles.statItem} role="listitem">
              <span className={styles.statIcon} aria-hidden="true">
                <IconTrophy />
              </span>
              <div className={styles.statText}>
                <div className={styles.statValue}>5000+</div>
                <div className={styles.statLabel}>Certifications Done</div>
              </div>
            </div>

            <div className={styles.statItem} role="listitem">
              <span className={styles.statIcon} aria-hidden="true">
                <IconBriefcase />
              </span>
              <div className={styles.statText}>
                <div className={styles.statValue}>15+</div>
                <div className={styles.statLabel}>Years Experience</div>
              </div>
            </div>

            <div className={styles.statItem} role="listitem">
              <span className={styles.statIcon} aria-hidden="true">
                <IconGlobe />
              </span>
              <div className={styles.statText}>
                <div className={styles.statValue}>PAN India</div>
                <div className={styles.statLabel}>Service</div>
              </div>
            </div>
          </div>

          <div className={styles.ctaRow}>
            <a className={styles.primaryBtn} href="#">
              Get Free Consultation
              <span className={styles.btnArrow} aria-hidden="true">
                →
              </span>
            </a>
            <a
              className={styles.secondaryBtn}
              href="https://wa.me/919266877738"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconWhatsApp className={styles.whatsappIcon} />
              WhatsApp
              <span className={styles.btnArrowMuted} aria-hidden="true">
                →
              </span>
            </a>
          </div>
        </div>

        <div className={styles.right} aria-hidden="true">
          <div className={styles.visual}>
            <svg className={styles.orbit} viewBox="0 0 420 260">
              <path
                d="M40 210c70-120 270-160 340-60"
                fill="none"
                stroke="rgba(15, 95, 168, 0.28)"
                strokeWidth="2.5"
                strokeDasharray="3 8"
                strokeLinecap="round"
              />
            </svg>

            <div className={styles.heroImageWrap}>
              <Image
                src={heroImg}
                alt="Trusted Certification & Compliance Partner"
                fill
                priority
                className={styles.heroImage}
              />
            </div>

            {/* <div className={styles.shield}>
              <span className={styles.shieldInner}>
                <IconShield />
              </span>
            </div> */}

            {/* <div className={styles.badgeIso}>
              <Badge label="ISO" />
            </div>
            <div className={styles.badgeWpc}>
              <Badge label="WPC" />
            </div>
            <div className={styles.badgeBis}>
              <Badge label="BIS" />
            </div>
            <div className={styles.badgeCe}>
              <Badge label="CE" />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;