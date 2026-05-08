"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/common/header.module.css";
import logo from "../../assests/logo.png";

const Header = () => {
  const [open, setOpen] = useState(false);

  const navItems = useMemo(
    () => [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Knowledge Hub", href: "#knowledge hub" },
      { label: "Contact Us", href: "/contact" },
    ],
    []
  );

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logoLink} aria-label="Ornate home">
          <Image
            src={logo}
            alt="Ornate"
            priority
            className={styles.logo}
          />
        </Link>

        <nav className={styles.nav} aria-label="Primary">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className={styles.navLink}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <Link href="#login" className={styles.loginBtn}>
            LOGIN
          </Link>

          <button
            type="button"
            className={styles.menuBtn}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={styles.menuIcon} aria-hidden="true" />
          </button>
        </div>
      </div>

      {open ? (
        <div className={styles.mobileMenu} role="dialog" aria-label="Menu">
          <div className={styles.mobileNav}>
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={styles.mobileLink}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#login"
              className={styles.mobileLoginBtn}
              onClick={() => setOpen(false)}
            >
              LOGIN
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default Header;