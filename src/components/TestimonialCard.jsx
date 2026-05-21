import styles from './TestimonialCard.module.css';

function getInitials(name) {
  return name
    .split(' ')
    .map(w => w[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

export default function TestimonialCard({ name, quote, image, isPlaceholder = false }) {
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
        <div className={styles.avatar}>
          {image
            ? <img src={image} alt={name} className={styles.avatarImg} />
            : <span className={styles.avatarInitials}>{getInitials(name)}</span>
          }
        </div>
        <p className={styles.name}>{name}</p>
      </div>
      <p className={styles.quote}>{quote}</p>
    </div>
  );
}
