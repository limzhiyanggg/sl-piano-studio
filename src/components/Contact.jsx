import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <svg
        className={styles.divider}
        viewBox="0 0 1440 72"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0,0 Q720,72 1440,0 Z" fill="#FFFFFF" />
      </svg>
      {/* contact-bg: place contact-bg.jpg in src/assets/images/ then set as background-image in Contact.module.css */}
      <div className={styles.overlay} />

      <div className={styles.content}>
        <h2 className={styles.heading}>
          Ready to <em>get started</em>?
        </h2>
        <p className={styles.body}>
          Whether you have questions or you&rsquo;re ready to book a trial
          lesson, just drop me a message. I typically get back within a day or
          two.
        </p>
        <a
          href="https://wa.me/6589199100"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.btn}
        >
          Message me on WhatsApp
        </a>
        <p className={styles.email}>
          Or email me at{' '}
          <a href="mailto:serene.pianostudio@gmail.com">
            serene.pianostudio@gmail.com
          </a>
        </p>
      </div>

      <p className={styles.footer}>© 2026 Serene Piano Studio.</p>
    </section>
  );
}
