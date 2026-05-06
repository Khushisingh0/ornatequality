import React from "react";
import Image from "next/image";
import styles from "../../styles/about.module.css";

import aboutImg1 from "../../assests/about.jpg";
import aboutImg2 from "../../assests/about2.webp";

const About = () => {
  return (
    <section className={styles.about} aria-label="About company">
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.media} aria-hidden="true">
            <div className={styles.imgCardPrimary}>
              <Image
                src={aboutImg1}
                alt=""
                fill
                sizes="(max-width: 900px) 92vw, 520px"
                className={styles.img}
                quality={80}
              />
            </div>

            <div className={styles.imgCardSecondary}>
              <Image
                src={aboutImg2}
                alt=""
                fill
                sizes="(max-width: 900px) 78vw, 420px"
                className={styles.img}
                quality={80}
              />
            </div>
          </div>

          <div className={styles.content}>
            <div className={styles.kicker}>ABOUT COMPANY</div>
            <h2 className={styles.title}>India's Trusted Compliance & Certification Partner</h2>
            <p className={styles.text}>
              At Ornate Quality Services Pvt. Ltd., popularly known as Ornate Certification, we specialize in delivering reliable, transparent, and end-to-end compliance, certification, and regulatory approval solutions for businesses across India and global markets.
            </p>
            <p className={styles.textMuted}>
             With a strong commitment to quality, accuracy, and client satisfaction, we help manufacturers, importers, startups, and enterprises navigate complex certification procedures with ease. Our expertise includes BIS Certification, ISO Certification, WPC Approval, CE Marking, TEC Certification, EPR Registration, LMPC Registration, and other regulatory compliance services.
            </p>

            <a className={styles.readMoreBtn} href="#">
              Read More
              <span className={styles.btnArrow} aria-hidden="true">
                →
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className={styles.wave} aria-hidden="true">
        <svg viewBox="0 0 1440 220" preserveAspectRatio="none">
          <path
            d="M0,120 C180,70 360,190 540,150 C720,110 900,60 1080,100 C1260,140 1350,175 1440,150 L1440,220 L0,220 Z"
            fill="rgba(216, 236, 255, 0.95)"
          />
          <path
            d="M0,150 C220,195 420,95 620,130 C820,165 980,220 1180,180 C1320,155 1400,135 1440,145 L1440,220 L0,220 Z"
            fill="rgba(216, 236, 255, 0.65)"
          />
        </svg>
      </div>
    </section>
  );
};

export default About;