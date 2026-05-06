import React from "react";
import styles from "../../styles/common/footer.module.css";

function IconPin(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...props}>
      <path
        d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 14.5 9 2.5 2.5 0 0 1 12 11.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function IconPhone(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...props}>
      <path
        d="M6.6 2.8h.02c.7-.1 1.4.3 1.7 1l1.1 2.7c.2.6.1 1.2-.3 1.6l-1 1c-.1.1-.2.3-.1.5 1 2.1 2.7 3.8 4.8 4.8.2.1.4 0 .5-.1l1-1c.5-.4 1.1-.5 1.6-.3l2.7 1.1c.7.3 1.1 1 1 1.7v.02c-.2 1.6-1.6 2.8-3.2 2.8C10 22.4 1.6 14 1.6 3.9c0-1.6 1.2-3 2.9-3.1Z"
        fill="currentColor"
      />
    </svg>
  );
}

function IconMail(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...props}>
      <path
        d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z"
        fill="currentColor"
      />
    </svg>
  );
}

function IconWhatsApp(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...props}>
      <path
        d="M12.04 2A9.96 9.96 0 0 0 2 11.96a9.85 9.85 0 0 0 1.45 5.16L2 22l5-1.3a10 10 0 0 0 5.04 1.34h.01A9.96 9.96 0 0 0 22 12.04 10.01 10.01 0 0 0 12.04 2Zm5.8 14.46c-.24.67-1.2 1.23-1.95 1.4-.52.11-1.2.2-3.48-.75-2.92-1.21-4.8-4.19-4.95-4.39-.15-.2-1.2-1.6-1.2-3.05 0-1.45.76-2.16 1.03-2.46.27-.3.6-.37.8-.37h.58c.19 0 .45-.07.7.54.24.6.84 2.07.92 2.22.07.15.12.33.02.53-.1.2-.15.33-.3.5-.15.17-.31.38-.44.5-.15.15-.31.31-.14.6.17.3.77 1.27 1.65 2.05 1.13 1 2.08 1.31 2.38 1.46.3.15.47.12.64-.08.17-.2.74-.86.94-1.16.2-.3.4-.25.67-.15.27.1 1.7.8 1.99.95.3.15.5.22.57.34.07.12.07.7-.17 1.37Z"
        fill="currentColor"
      />
    </svg>
  );
}

function IconFacebook(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...props}>
      <path
        d="M13.5 22v-8h2.7l.4-3H13.5V9.1c0-.9.2-1.5 1.6-1.5h1.6V5c-.3 0-1.5-.1-2.8-.1-2.8 0-4.7 1.7-4.7 4.8V11H7v3h2.6v8h3.9Z"
        fill="currentColor"
      />
    </svg>
  );
}

function IconLinkedIn(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...props}>
      <path
        d="M6.5 6.8a2.2 2.2 0 1 1 0-4.4 2.2 2.2 0 0 1 0 4.4ZM4.6 21.5h3.8V9H4.6v12.5ZM9.9 9h3.6v1.7h.1c.5-1 1.9-2 4-2 4.3 0 5.1 2.8 5.1 6.5v6.3h-3.8v-5.6c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9v5.7H9.9V9Z"
        fill="currentColor"
      />
    </svg>
  );
}

function IconYouTube(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...props}>
      <path
        d="M21.6 7.2a2.7 2.7 0 0 0-1.9-1.9C18 4.8 12 4.8 12 4.8s-6 0-7.7.5A2.7 2.7 0 0 0 2.4 7.2 28.2 28.2 0 0 0 2 12a28.2 28.2 0 0 0 .4 4.8 2.7 2.7 0 0 0 1.9 1.9c1.7.5 7.7.5 7.7.5s6 0 7.7-.5a2.7 2.7 0 0 0 1.9-1.9A28.2 28.2 0 0 0 22 12a28.2 28.2 0 0 0-.4-4.8ZM10 15.3V8.7L15.8 12 10 15.3Z"
        fill="currentColor"
      />
    </svg>
  );
}

function IconInstagram(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...props}>
      <path
        d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm-5 4.2A3.8 3.8 0 1 1 8.2 12 3.8 3.8 0 0 1 12 8.2Zm0 2A1.8 1.8 0 1 0 13.8 12 1.8 1.8 0 0 0 12 10.2ZM17.8 6.6a1.1 1.1 0 1 1-1.1 1.1 1.1 1.1 0 0 1 1.1-1.1Z"
        fill="currentColor"
      />
    </svg>
  );
}

const Footer = () => {
  return (
    <footer className={styles.footer} aria-label="Footer">
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.col}>
            <div className={styles.colTitle}>Contact Us</div>
            <div className={styles.titleUnderline} aria-hidden="true" />

            <div className={styles.item}>
              <span className={styles.itemIcon} aria-hidden="true">
                <IconPin />
              </span>
              <div>
                <div className={styles.itemLabel}>ADDRESS (CORPORATE OFFICE)</div>
                <div className={styles.itemText}>
                  Office No. 1726, Astralis Tower,
                  <br />
                  Sector 94, Noida, Uttar Pradesh,
                  <br />
                  201301
                </div>
              </div>
            </div>

            <div className={styles.item}>
              <span className={styles.itemIcon} aria-hidden="true">
                <IconPhone />
              </span>
              <div>
                <div className={styles.itemLabel}>PHONE</div>
                <div className={styles.itemText}>
                  <a className={styles.link} href="tel:+919266877738">
                    +91 9266877738
                  </a>
                  <br />
                  <a className={styles.link} href="tel:+918880013897">
                    +91 8880013897
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.item}>
              <span className={styles.itemIcon} aria-hidden="true">
                <IconMail />
              </span>
              <div>
                <div className={styles.itemLabel}>EMAIL</div>
                <div className={styles.itemText}>
                  <a className={styles.link} href="mailto:chetan@ornatequality.com">
                    chetan@ornatequality.com
                  </a>
                  <br />
                  <a className={styles.link} href="mailto:marketing@ornatequality.com">
                    marketing@ornatequality.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.col}>
            <div className={styles.colTitle}>Services</div>
            <div className={styles.titleUnderline} aria-hidden="true" />

            <ul className={styles.list}>
              <li>E-WASTE MANAGEMENT (EPR)</li>
              <li>ISI REGISTRATION</li>
              <li>CE CERTIFICATION</li>
              <li>LMPC REGISTRATION</li>
            </ul>

            <div className={styles.subTitle}>Social Presence</div>
            <div className={styles.socialRow} aria-label="Social links">
              <a className={`${styles.socialBtn} ${styles.whatsapp}`} href="#" aria-label="WhatsApp">
                <IconWhatsApp />
              </a>
              <a className={`${styles.socialBtn} ${styles.facebook}`} href="#" aria-label="Facebook">
                <IconFacebook />
              </a>
              <a className={`${styles.socialBtn} ${styles.linkedin}`} href="#" aria-label="LinkedIn">
                <IconLinkedIn />
              </a>
              <a className={`${styles.socialBtn} ${styles.youtube}`} href="#" aria-label="YouTube">
                <IconYouTube />
              </a>
              <a className={`${styles.socialBtn} ${styles.instagram}`} href="#" aria-label="Instagram">
                <IconInstagram />
              </a>
            </div>
          </div>

          <div className={styles.col}>
            <div className={styles.colTitle}>Useful Links</div>
            <div className={styles.titleUnderline} aria-hidden="true" />

            <ul className={styles.list}>
              <li>ENGINEERING CENTRE</li>
              <li>BUREAU OF INDIAN STANDARDS (BIS)</li>
              <li>WIRELESS PLANNING</li>
              <li>NABL INDIA</li>
              <li>BEE INDIA</li>
              <li>MINISTRY OF STEEL</li>
            </ul>
          </div>

          <div className={styles.col}>
            <div className={styles.colTitle}>Quick Contact</div>
            <div className={styles.titleUnderline} aria-hidden="true" />

            <form className={styles.form} action="#" method="post">
              <input className={styles.input} placeholder="Name" type="text" />
              <input className={styles.input} placeholder="Email Id" type="email" />
              <input className={styles.input} placeholder="10 digit mobile No." type="tel" />
              <textarea className={styles.textarea} placeholder="Let us know..." rows={4} />
              <button type="submit" className={styles.submit}>
                SUBMIT
              </button>
            </form>
          </div>
        </div>

        <div className={styles.bottom}>
          © 2023 Ornate Quality Services. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;