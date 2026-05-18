import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import styles from "../../styles/about.module.css";

import aboutImg1 from "../../assests/supernova.png";
import aboutImg2 from "../../assests/abt22.png";
import {
  IconEndToEnd,
  IconExpertTeam,
  IconGlobalStandards,
  IconPanIndia,
} from "./AboutFeatureIcons";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const FEATURES = [
  {
    title: "Expert Team",
    desc: "Industry experts at your service",
    Icon: IconExpertTeam,
  },
  {
    title: "End-to-End Support",
    desc: "From consultation to certification",
    Icon: IconEndToEnd,
  },
  {
    title: "Pan India Presence",
    desc: "Serving clients across India",
    Icon: IconPanIndia,
  },
  {
    title: "Global Standards",
    desc: "Aligned with international regulations.",
    Icon: IconGlobalStandards,
  },
] as const;

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
            <h2 className={`${styles.title} ${playfair.className}`}>
              Your Strategic
              <br />
              Compliance Partner
            </h2>
            <p className={styles.text}>
              Ornate Certification is a leading regulatory compliance and certification consultancy. We
              help businesses across industries obtain mandatory approvals and certifications from
              regulatory bodies in India and international markets.
            </p>
            <p className={styles.text}>
              With deep expertise and a client-first approach, we ensure fast approvals, reduced risk,
              and complete peace of mind.{" "}
              <Link href="/about" className={styles.inlineReadMore}>
                 Read More 
              </Link>
            </p>

            <div className={styles.features} role="list">
              {FEATURES.map(({ title, desc, Icon }) => (
                <div key={title} className={styles.featureItem} role="listitem">
                  <div className={styles.featureIcon} aria-hidden="true">
                    <Icon />
                  </div>
                  <div className={styles.featureText}>
                    <div className={styles.featureTitle}>{title}</div>
                    <p className={styles.featureDesc}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>

           
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;