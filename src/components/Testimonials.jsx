import styles from './Testimonials.module.css';
import TestimonialCard from './TestimonialCard';

const railItems = [
  <TestimonialCard
    key="kelvin"
    name="Kelvin Ngo"
    quote="My kids have had a wonderful learning experience over the years, especially thanks to the dedication of their teacher Serene. Whenever we are unable to attend a lesson, she always makes time for make-up lessons to keep the momentum going. We recently completed a recital and it was a memorable experience — a real pleasure to see the results of their hard work. Thank you teacher Serene for all your help and dedication."
  />,
  <div key="photo1" className={styles.photo}>
    {/* piano-keys-1: place piano-keys-1.jpg in src/assets/images/ */}
  </div>,
  <div key="photo2" className={styles.photo}>
    {/* piano-keys-2: place piano-keys-2.jpg in src/assets/images/ */}
  </div>,
  <TestimonialCard
    key="michelle"
    name="Michelle Tay"
    quote="Teacher Serene is very patient and gentle, and has been coaching my daughter for a few years already. She will prep and give my child for her recital, which help boost her confidence."
  />,
  <div key="cert" className={`${styles.photo} ${styles.photoTall}`}>
    {/* abrsm-certificate: place abrsm-certificate.jpg in src/assets/images/ */}
  </div>,
  <TestimonialCard key="placeholder" isPlaceholder />,
];

export default function Testimonials() {
  return (
    <section id="testimonials" className={styles.section}>
      <h2 className={styles.heading}>
        Hear it <em>from the others</em>
      </h2>

      <div className={styles.railWrapper}>
        <div className={styles.track}>
          <div className={styles.set}>{railItems}</div>
          <div className={styles.set} aria-hidden="true">{railItems}</div>
        </div>
      </div>
    </section>
  );
}
