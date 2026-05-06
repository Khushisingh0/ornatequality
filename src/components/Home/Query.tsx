import React from "react";
import styles from "../../styles/query.module.css";

function PhoneIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" {...props}>
      <path
        d="M6.6 2.8h.02c.7-.1 1.4.3 1.7 1l1.1 2.7c.2.6.1 1.2-.3 1.6l-1 1c-.1.1-.2.3-.1.5 1 2.1 2.7 3.8 4.8 4.8.2.1.4 0 .5-.1l1-1c.5-.4 1.1-.5 1.6-.3l2.7 1.1c.7.3 1.1 1 1 1.7v.02c-.2 1.6-1.6 2.8-3.2 2.8C10 22.4 1.6 14 1.6 3.9c0-1.6 1.2-3 2.9-3.1Z"
        fill="currentColor"
      />
    </svg>
  );
}

const Query = () => {
  return (
    <section className={styles.section} aria-label="Request a call back">
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.left}>
            <div className={styles.titleRow}>
              <span className={styles.phoneIcon} aria-hidden="true">
                <PhoneIcon />
              </span>
              <h2 className={styles.title}>
                Request a call <br />
                back
              </h2>
            </div>

            <p className={styles.subtitle}>
              Would you like to speak to one of our Senior Technical advisers over the phone? Just
              submit your details and we'll be in touch shortly. You can also email us if you would
              prefer.
            </p>
          </div>

          <form className={styles.form} action="#" method="post">
            <div className={styles.field}>
              <label className={styles.label}>Would you like to know more about this</label>
              <select className={styles.control} defaultValue="">
                <option value="" disabled>
                  Select
                </option>
                <option>BIS CRS Registration</option>
                <option>ISI Mark Certification</option>
                <option>WPC ETA Approval</option>
                <option>EPR Registration</option>
                <option>BEE Certification</option>
                <option>Other / More Certifications</option>
              </select>
            </div>

            <div className={styles.field}>
              <label className={styles.label}>Your Name</label>
              <input className={styles.control} type="text" placeholder="Your Name" />
            </div>

            <div className={styles.field}>
              <label className={styles.label}>10 digit Mobile No</label>
              <input className={styles.control} type="tel" inputMode="numeric" placeholder="10 digit Mobile No" />
            </div>

            <div className={styles.field}>
              <label className={styles.label} aria-hidden="true">
                &nbsp;
              </label>
              <button type="submit" className={styles.submit}>
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Query;

