import React from "react";
import Image from "next/image";
import styles from "@/styles/aboutV2.module.css";

import bisLogo from "@/assests/certi-img/BIS.webp";
import wpcLogo from "@/assests/certi-img/wpc.webp";
import beeLogo from "@/assests/certi-img/BEElogo.webp";
import tecLogo from "@/assests/certi-img/tec.webp";
import nablLogo from "@/assests/certi-img/nabl.webp";
import msmeLogo from "@/assests/certi-img/msmp.jpeg";
import isoLogo from "@/assests/certi-img/iso.webp";

const logos: Array<{ label: string; src?: any }> = [
  { label: "BIS", src: bisLogo },
  { label: "WPC", src: wpcLogo },
  { label: "BEE", src: beeLogo },
  // CPCB logo asset not present in `src/assests/certi-img/` yet; keep layout consistent with a text fallback.
  { label: "CPCB" },
  { label: "TEC", src: tecLogo },
  { label: "NABL", src: nablLogo },
  { label: "MSME", src: msmeLogo },
  { label: "ISO", src: isoLogo },
];

export function CertificationsAndAssociations() {
  return (
    <section className={styles.section} aria-label="Our certifications and associations">
      <div className={styles.container}>
        <div className={styles.certTitle}>OUR CERTIFICATIONS &amp; ASSOCIATIONS</div>

        <div className={styles.logoRow} role="list" aria-label="Certification logos">
          {logos.map((l) => (
            <div className={styles.logoItem} role="listitem" key={l.label} aria-label={l.label}>
              <div className={styles.logoImgWrap} aria-hidden="true">
                {l.src ? (
                  <Image src={l.src} alt="" fill sizes="90px" className={styles.logoImg} />
                ) : (
                  <div className={styles.logoFallback}>{l.label}</div>
                )}
              </div>
              <div className={styles.logoLabel}>{l.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

