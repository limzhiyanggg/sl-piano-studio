import styles from './HowItWorks.module.css';

const steps = [
  {
    number: '01',
    title: 'Say hello',
    description:
      'Drop me a message on WhatsApp or email. Just tell me a little about your child or yourself, no forms, no fuss.',
  },
  {
    number: '02',
    title: 'Trial lesson',
    description:
      "I'll come to you for a 45-minute trial lesson, get to know your child and where they're at, and we'll figure out the best way forward together.",
  },
  {
    number: '03',
    title: 'Set a plan',
    description:
      'We agree on a schedule, lesson length, and a learning direction that suits your child.',
  },
  {
    number: '04',
    title: 'Start learning',
    description:
      'Regular lessons from there, with progress updates so you always know how things are going.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className={styles.section}>
      <h2 className={styles.heading}>
        How to <em>get started</em>
      </h2>

      <div className={styles.steps}>
        {steps.map((step) => (
          <div key={step.number} className={styles.step}>
            <p className={styles.num}>{step.number}</p>
            <h3 className={styles.title}>{step.title}</h3>
            <p className={styles.body}>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
