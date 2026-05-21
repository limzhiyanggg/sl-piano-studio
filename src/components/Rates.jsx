import styles from './Rates.module.css';

const rates = [
  {
    label: 'Trial',
    suffix: 'lesson',
    description:
      'A one-off session to get to know your child, understand their goals, and see if we are a good fit.',
  },
  {
    label: '45 min',
    suffix: 'lesson',
    description:
      'Great for beginners and younger learners. Enough time to build technique, explore repertoire, and develop confidence at a comfortable pace.',
  },
  {
    label: '60 min',
    suffix: 'lesson',
    description:
      'Suited for exam preparation and more advanced learners. The extra time allows for theory, sight-reading, more complex pieces, and the kind of detail that makes the difference at higher grades.',
  },
];

export default function Rates() {
  return (
    <section id="rates" className={styles.section}>
      <h2 className={styles.heading}>
        Find the <em>right lesson</em> for you
      </h2>

      <div className={styles.grid}>
        {rates.map((rate) => (
          <div key={rate.label} className={styles.card}>
            <h3 className={styles.title}>
              <em>{rate.label}</em> {rate.suffix}
            </h3>
            <p className={styles.body}>{rate.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
