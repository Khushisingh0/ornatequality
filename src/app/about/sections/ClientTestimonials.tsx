"use client";

import React, { useMemo, useRef, useState } from "react";
import Image from "next/image";
import styles from "@/styles/aboutV2.module.css";
import manPng from "@/assests/man.png";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

function ArrowLeftIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" {...props}>
      <path
        d="M14.8 5.3a.8.8 0 0 1 0 1.14L10.25 11l4.55 4.55a.8.8 0 1 1-1.14 1.14l-5.12-5.12a.8.8 0 0 1 0-1.14l5.12-5.12a.8.8 0 0 1 1.14 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ArrowRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" {...props}>
      <path
        d="M9.2 18.7a.8.8 0 0 1 0-1.14L13.75 13 9.2 8.45a.8.8 0 1 1 1.14-1.14l5.12 5.12c.3.31.3.82 0 1.14l-5.12 5.12a.8.8 0 0 1-1.14 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function ClientTestimonials() {
  const listRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);

  const items = useMemo<Testimonial[]>(
    () => [
      {
        quote:
          "Ornate Certification helped us obtain BIS certification within a very short time. Their team is professional and extremely supportive.",
        name: "Rajeev Mehta",
        role: "Procurement Head, Noida",
      },
      {
        quote:
          "Excellent service and transparent communication throughout the process. Highly recommended for all compliance needs.",
        name: "Sneha Kapoor",
        role: "Compliance Manager, Hitachi",
      },
      {
        quote:
          "Their expertise in regulatory compliance is unmatched. They truly care about their clients.",
        name: "Ankit Verma",
        role: "Director, Wipro",
      },
      {
        quote:
          "Fast turnaround and clear guidance. The whole journey was smooth from start to finish.",
        name: "Pooja Sharma",
        role: "Operations Lead",
      },
      {
        quote:
          "Reliable team with strong domain knowledge. We received timely updates at every stage.",
        name: "Vikram Singh",
        role: "Business Head",
      },
    ],
    []
  );

  function scrollTo(index: number) {
    const el = listRef.current;
    if (!el) return;
    const clamped = Math.max(0, Math.min(items.length - 1, index));
    const firstCard = el.querySelector<HTMLElement>(`[data-card-index="${clamped}"]`);
    if (firstCard) {
      firstCard.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      setActive(clamped);
    }
  }

  return (
    <section className={styles.section} aria-label="What our clients say">
      <div className={styles.container}>
        <h2 className={styles.sectionHeadingCenter}>WHAT OUR CLIENTS SAY</h2>

        <div className={styles.testimonialsWrapV2}>
          <div className={styles.testimonialsListV2} ref={listRef}>
            {items.map((t, idx) => (
              <article
                className={styles.testimonialCardV2}
                data-card-index={idx}
                key={`${t.name}-${idx}`}
              >
                <div className={styles.quoteMarkV2} aria-hidden="true">
                  “
                </div>
                <p className={styles.testimonialTextV2}>{t.quote}</p>

                <div className={styles.testimonialFooterV2}>
                  <div className={styles.testimonialAvatarV2} aria-hidden="true">
                    <Image src={manPng} alt="" fill sizes="64px" className={styles.testimonialAvatarImgV2} />
                  </div>
                  <div className={styles.testimonialMetaV2}>
                    <div className={styles.testimonialNameV2}>{t.name}</div>
                    <div className={styles.testimonialRoleV2}>{t.role}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

