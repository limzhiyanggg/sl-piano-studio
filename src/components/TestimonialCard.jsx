import styles from './TestimonialCard.module.css';

export default function TestimonialCard({ name, quote, isPlaceholder = false }) {
  if (isPlaceholder) {
    return (
      <div className={`${styles.card} ${styles.placeholder}`}>
        {/* testimonial-card-placeholder: real name and quote to be added */}
        <div className={styles.header}>
          <div className={styles.avatar} />
          <p className={styles.name}>[Parent name]</p>
        </div>
        <p className={styles.quote}>[Testimonial pull quote — parent voice. Placeholder.]</p>
      </div>
    );
  }

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.avatar} />
        <p className={styles.name}>{name}</p>
      </div>
      <p className={styles.quote}>{quote}</p>
    </div>
  );
}
