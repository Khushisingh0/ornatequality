import React from "react";
import Image from "next/image";
import styles from "@/styles/aboutV2.module.css";

import aboutTopImg from "@/assests/about3.webp";
import { IconBadge, IconBriefcase, IconGlobe, IconUsers } from "./icons";

export function WhoWeAre() {
  return (
    <section className={styles.section} aria-label="Who we are">
      <div className={styles.container}>
        <div className={styles.whoGrid}>
          <div className={styles.whoMedia} aria-hidden="true">
            <Image
              src={aboutTopImg}
              alt=""
              fill
              priority
              sizes="(max-width: 900px) 92vw, 560px"
              className={styles.whoImg}
            />
          </div>

          <div>
            <div className={styles.kicker}>WHO WE ARE</div>
            <h2 className={styles.whoTitle}>Your Strategic Compliance Partner</h2>
            <p className={styles.p}>
              Ornate Certification is a leading regulatory compliance and certification consultancy. We
              help businesses across industries obtain mandatory approvals and certifications from
              regulatory bodies in India and international markets.
            </p>
            <p className={styles.p} style={{ marginTop: 10 }}>
              With deep expertise and a client-first approach, we ensure fast approvals, reduced risk,
              and complete peace of mind.
            </p>

            <div className={styles.statsRow} aria-label="Company stats">
              <div className={styles.statBox}>
                <div className={styles.statIcon} aria-hidden="true">
                  <IconBriefcase />
                </div>
                <div className={styles.statValue}>13+</div>
                <div className={styles.statLabel}>Years Experience</div>
              </div>
              <div className={styles.statBox}>
                <div className={styles.statIcon} aria-hidden="true">
                  <IconBadge />
                </div>
                <div className={styles.statValue}>5000+</div>
                <div className={styles.statLabel}>Projects Completed</div>
              </div>
              <div className={styles.statBox}>
                <div className={styles.statIcon} aria-hidden="true">
                  <IconGlobe />
                </div>
                <div className={styles.statValue}>100+</div>
                <div className={styles.statLabel}>Global Clients</div>
              </div>
              <div className={styles.statBox}>
                <div className={styles.statIcon} aria-hidden="true">
                  <IconUsers />
                </div>
                <div className={styles.statValue}>25+</div>
                <div className={styles.statLabel}>Industry Experts</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

