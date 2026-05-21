import styles from './Nav.module.css';

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <p className={styles.logo}>Serene Piano Studio</p>
      <ul className={styles.links}>
        <li><a href="#about">About</a></li>
        <li><a href="#what-to-expect">What to expect</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#how-it-works">How it works</a></li>
        <li><a href="#faq">FAQ</a></li>
      </ul>
      <button className={styles.cta}>Enquire</button>
    </nav>
  );
}
