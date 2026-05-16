import React from "react";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import styles from "@/styles/valuedClients.module.css";

import flipkart from "@/assests/clientslogo/Flipkart.webp";
import croma from "@/assests/clientslogo/Croma.webp";
import hitachi from "@/assests/clientslogo/Hitachi.webp";
import asianet from "@/assests/clientslogo/Aisanet.webp";
import hyundai from "@/assests/clientslogo/Hyundai.webp";
import reliance from "@/assests/clientslogo/Reliance-digital.webp";
import tseries from "@/assests/clientslogo/tseries.webp";
import nokia from "@/assests/clientslogo/Nokia.webp";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const CLIENTS = [
  { name: "Flipkart", src: flipkart },
  { name: "Croma", src: croma },
  { name: "Hitachi", src: hitachi },
  { name: "Asianet", src: asianet },
  { name: "Hyundai", src: hyundai },
  { name: "Reliance Digital", src: reliance },
  { name: "T-Series", src: tseries },
  { name: "Nokia", src: nokia },
] as const;

function LogoStrip({
  ariaHidden,
  stripId,
}: {
  ariaHidden?: boolean;
  stripId: string;
}) {
  return (
    <ul
      className={styles.logoRow}
      aria-hidden={ariaHidden ? true : undefined}
    >
      {CLIENTS.map(({ name, src }) => (
        <li key={`${stripId}-${name}`} className={styles.logoItem}>
          <div className={styles.logoSlot}>
            <Image
              src={src}
              alt={ariaHidden ? "" : `${name} logo`}
              fill
              sizes="(max-width: 640px) 210px, 260px"
              className={styles.logoImg}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default function ValuedClients() {
  return (
    <section className={styles.section} aria-labelledby="valued-clients-heading">
      <div className={styles.container}>
        <div className={styles.headingBlock}>
          <h2 id="valued-clients-heading" className={`${styles.heading} ${playfair.className}`}>
            Our Valued Clients
          </h2>
          <div className={styles.headingUnderline} aria-hidden="true" />
          <p className={styles.subheading}>
            Trusted by leading brands and organizations across multiple industries for reliable
            certification, compliance, and end-to-end regulatory support.
          </p>
        </div>
      </div>

      <div className={styles.marqueeBleed}>
        <div className={styles.marquee} role="presentation">
          <div className={styles.marqueeInner}>
            <div className={styles.track}>
              <LogoStrip stripId="m1" />
              <LogoStrip stripId="m2" ariaHidden />
              <LogoStrip stripId="m3" ariaHidden />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
