import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/aboutV2.module.css";

import aboutHeroImg from "@/assests/about11.png";

export function AboutHero() {
  return (
    <section className={styles.aboutHero} aria-label="About hero">
      <div className={styles.aboutHeroMedia} aria-hidden="true">
        <Image
          src={aboutHeroImg}
          alt=""
          fill
          priority
          sizes="100vw"
          className={styles.aboutHeroImg}
        />
      </div>

      <div className={styles.container}>
        <div className={styles.aboutHeroInner}>
          <div className={styles.aboutHeroKicker}>ABOUT US</div>

          <h1 className={styles.aboutHeroTitle}>
            Building Trust Through
            <br />
            Compliance Excellence
            <br />
            Since 2013
          </h1>

          <p className={styles.aboutHeroText}>
            Helping manufacturers, importers, and global brands navigate regulatory requirements with
            confidence and speed.
          </p>

          <div className={styles.aboutHeroCtaRow}>
            <a className={styles.aboutHeroBtnPrimary} href="#">
              TALK TO EXPERT →
            </a>
            <a className={styles.aboutHeroBtnSecondary} href="#">
              OUR SERVICES →
            </a>
          </div>

          <div className={styles.aboutHeroCrumbs} aria-label="Breadcrumb">
            <Link className={styles.aboutHeroCrumbLink} href="/">
              Home
            </Link>
            <span className={styles.aboutHeroCrumbSep} aria-hidden="true">
              {"›"}
            </span>
            <span className={styles.aboutHeroCrumbCurrent}>About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
}

