import { useState } from 'react';
import styles from './Nav.module.css';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const close = () => setMenuOpen(false);

  return (
    <>
      <nav className={styles.nav}>
        <p className={styles.logo}>Serene Piano Studio</p>
        <ul className={styles.links}>
          <li><a href="#about">About</a></li>
          <li><a href="#what-to-expect">What to expect</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#how-it-works">How it works</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
        <a href="#contact" className={styles.cta}>Enquire</a>
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {menuOpen && (
        <div className={styles.mobileMenu} onClick={close}>
          <button
            className={styles.closeBtn}
            onClick={close}
            aria-label="Close menu"
          >
            ✕
          </button>
          <ul className={styles.mobileLinks} onClick={e => e.stopPropagation()}>
            <li><a href="#about" onClick={close}>About</a></li>
            <li><a href="#what-to-expect" onClick={close}>What to expect</a></li>
            <li><a href="#testimonials" onClick={close}>Testimonials</a></li>
            <li><a href="#how-it-works" onClick={close}>How it works</a></li>
            <li><a href="#faq" onClick={close}>FAQ</a></li>
          </ul>
          <a href="#contact" className={styles.mobileCta} onClick={close}>Enquire</a>
        </div>
      )}
    </>
  );
}
