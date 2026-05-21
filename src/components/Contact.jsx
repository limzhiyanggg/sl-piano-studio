import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
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
        <button className={styles.btn}>Message me on WhatsApp</button>
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
