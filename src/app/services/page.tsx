import React from "react";
import styles from "@/styles/servicesPage.module.css";

import { ServicesContent } from "./sections/ServicesContent";

export default function ServicesPage() {
  return (
    <div className={styles.page}>
      <ServicesContent />
    </div>
  );
}
