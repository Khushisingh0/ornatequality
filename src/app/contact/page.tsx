import React from "react";
import styles from "@/styles/contact.module.css";

function PhoneIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...props}>
      <path
        d="M6.6 2.8h.02c.7-.1 1.4.3 1.7 1l1.1 2.7c.2.6.1 1.2-.3 1.6l-1 1c-.1.1-.2.3-.1.5 1 2.1 2.7 3.8 4.8 4.8.2.1.4 0 .5-.1l1-1c.5-.4 1.1-.5 1.6-.3l2.7 1.1c.7.3 1.1 1 1 1.7v.02c-.2 1.6-1.6 2.8-3.2 2.8C10 22.4 1.6 14 1.6 3.9c0-1.6 1.2-3 2.9-3.1Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ClockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...props}>
      <path
        d="M12 2.25c-5.38 0-9.75 4.37-9.75 9.75S6.62 21.75 12 21.75 21.75 17.38 21.75 12 17.38 2.25 12 2.25Zm0 1.5c4.55 0 8.25 3.7 8.25 8.25s-3.7 8.25-8.25 8.25-8.25-3.7-8.25-8.25S7.45 3.75 12 3.75Zm-.75 3.5a.75.75 0 0 1 1.5 0v4.43l3.06 1.77a.75.75 0 1 1-.75 1.3l-3.44-1.98a.75.75 0 0 1-.37-.65V7.25Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <section className={styles.section} aria-label="Contact">
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.left}>
            <h1 className={styles.h1}>Get in touch</h1>
            <p className={styles.lead}>
              For business enquiries, fill out the form and our team will contact you shortly. You can
              also call our support desk during office hours.
            </p>

            <div className={styles.block}>
              <h2 className={styles.h2}>Request a Call Back</h2>
              <p className={styles.p}>
                Share your details and preferred topic. A senior advisor will reach out with the right
                guidance for your certification and compliance requirements.
              </p>

              <div className={styles.infoList} role="list">
                <div className={styles.infoRow} role="listitem">
                  <span className={styles.infoIcon} aria-hidden="true">
                    <PhoneIcon />
                  </span>
                  <div className={styles.infoText}>
                    <div className={styles.infoTitle}>Toll Free / Support</div>
                    <div className={styles.infoValue}>
                      <a className={styles.link} href="tel:+919266877738">
                        +91-9266877738
                      </a>{" "}
                      <span className={styles.sep} aria-hidden="true">
                        |
                      </span>{" "}
                      <a className={styles.link} href="tel:+918800013897">
                        +91-8800013897
                      </a>
                    </div>
                  </div>
                </div>

                <div className={styles.infoRow} role="listitem">
                  <span className={styles.infoIcon} aria-hidden="true">
                    <ClockIcon />
                  </span>
                  <div className={styles.infoText}>
                    <div className={styles.infoTitle}>Office Hours</div>
                    <div className={styles.infoValue}>
                      09:30 AM – 06:00 PM (Mon – Sat)
                      <br />
                      Sunday – Closed
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.card} aria-label="Send message">
            <div className={styles.cardHeader}>
              <h2 className={styles.cardTitle}>Send Message</h2>
              <div className={styles.cardSubtitle}>I would like to discuss:</div>
            </div>

            <form className={styles.form} action="#" method="post">
              <div className={styles.row2}>
                <input className={styles.input} type="text" name="name" placeholder="Your Name *" required />
                <input className={styles.input} type="email" name="email" placeholder="Your Email *" required />
              </div>

              <div className={styles.row2}>
                <input
                  className={styles.input}
                  type="tel"
                  name="phone"
                  inputMode="numeric"
                  placeholder="Phone Number *"
                  required
                />
                <input className={styles.input} type="text" name="city" placeholder="Your City *" required />
              </div>

              <textarea
                className={styles.textarea}
                name="message"
                placeholder="Enter Your Message *"
                rows={5}
                required
              />

              <button className={styles.submit} type="submit">
                Request For Call
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

