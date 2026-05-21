import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.content}>
        <h2 className={styles.heading}>
          I&rsquo;m Serene, a piano teacher with over <em>10 years</em> of
          experience. I hold a <em>degree in piano performance</em> and am{' '}
          <em>ABRSM certified</em>.
        </h2>
        <p className={styles.body}>
          I believe no two learners are the same, in what they want to achieve,
          and in how they learn best. Some want to work toward their ABRSM
          grades. Others just want to play the songs they love. I design every
          lesson around what actually matters to them.
        </p>
      </div>

      <div className={styles.portrait}>
        {/* serene-portrait: place serene-portrait.jpg in src/assets/images/ then set as background-image */}
      </div>
    </section>
  );
}
