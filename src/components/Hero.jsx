import styles from './Hero.module.css';

export default function Hero() {
  const handleEnquireClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.hero}>
      {/* hero-bg: place hero-bg.jpg in src/assets/images/ then set as background-image in Hero.module.css */}
      <div className={styles.overlay} />
      <div className={styles.content}>
        <h1 className={styles.heading}>
          Private piano lessons{' '}
          <em>in northeast Singapore</em>{' '}
          🇸🇬
        </h1>
        <p className={styles.subtext}>
          Piano lessons for kids and adults, in the comfort of your home,
          personalised for every learner.
        </p>
        <div className={styles.actions}>
          <button className={styles.btn} onClick={handleEnquireClick}>Enquire</button>
          <span className={styles.trial}>• Trial lesson available</span>
        </div>
      </div>
    </section>
  );
}
