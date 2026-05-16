"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/common/servicesMegaMenu.module.css";
import {
  servicesMegaMenuColumns,
  serviceHref,
  type MegaMenuIcon,
  type MegaMenuColumn,
} from "./servicesMegaMenu.data";

function ColumnHeaderIcon({ column }: { column: MegaMenuColumn }) {
  if (column.headerGlyph === "reg") {
    return (
      <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
        <path
          d="M4 20V8l8-4 8 4v12H4Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path d="M9 20v-6h6v6" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    );
  }
  if (column.headerGlyph === "cert") {
    return (
      <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
        <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="m8 12 2.5 2.5L16 9"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <rect x="4" y="5" width="16" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 10h8M8 14h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function MenuItemIcon({ icon }: { icon: MegaMenuIcon }) {
  if (icon.type === "image") {
    return (
      <span className={styles.itemIcon}>
        <Image src={icon.src} alt={icon.alt} width={28} height={28} className={styles.itemIconImg} />
      </span>
    );
  }

  return (
    <span className={`${styles.itemIcon} ${styles[`glyph_${icon.tone}`]}`} aria-hidden="true">
      <span className={styles.glyphText}>{icon.glyph}</span>
    </span>
  );
}

type ServicesMegaMenuProps = {
  variant?: "desktop" | "mobile";
  onNavigate?: () => void;
};

export function ServicesMegaMenu({ variant = "desktop", onNavigate }: ServicesMegaMenuProps) {
  return (
    <div
      className={variant === "mobile" ? styles.mobilePanel : styles.panel}
      role="navigation"
      aria-label="Services menu"
    >
      <div className={styles.columns}>
        {servicesMegaMenuColumns.map((column) => (
          <div key={column.id} className={styles.column}>
            <div className={styles.columnHead}>
              <span className={styles.columnHeadIcon} aria-hidden="true">
                <ColumnHeaderIcon column={column} />
              </span>
              <h3 className={styles.columnTitle}>{column.title}</h3>
            </div>
            <div
              className={`${styles.columnRule} ${column.accent === "teal" ? styles.columnRuleTeal : styles.columnRuleRed}`}
              aria-hidden="true"
            />

            <ul className={styles.itemList}>
              {column.items.map((item) => (
                <li key={item.label}>
                  <Link href={serviceHref(item.slug)} className={styles.itemLink} onClick={onNavigate}>
                    <MenuItemIcon icon={item.icon} />
                    <span className={styles.itemLabel}>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className={styles.panelFooter}>
        <Link href="/services#services-list" className={styles.viewAllLink} onClick={onNavigate}>
          View all services <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );
}
