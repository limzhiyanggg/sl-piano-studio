import styles from './WhatToExpect.module.css';
import iconPersonalisedLearning from '../assets/images/icon-personalised-learning.svg';
import iconRightAtYourHome from '../assets/images/icon-right-at-your-home.svg';
import iconProvenResult from '../assets/images/icon-proven-result.svg';
import iconPerformanceOpportunity from '../assets/images/icon-performance-opportunity.svg';
import iconCollaborativeApproach from '../assets/images/icon-collaboratove-approach.svg';

const benefits = [
  {
    icon: iconPersonalisedLearning,
    title: 'Personalized learning',
    description: 'Every learner gets a lesson designed around their goals, pace, and interests.',
  },
  {
    icon: iconRightAtYourHome,
    title: 'Right at your home',
    description:
      'Based in northeast: Sengkang, Serangoon, Bishan, and surrounding areas. Skip the commute. Lessons come to you.',
  },
  {
    icon: iconProvenResult,
    title: 'Proven results',
    description:
      'Learners working toward ABRSM exams have gone on to achieve results they are genuinely proud of.',
  },
  {
    icon: iconPerformanceOpportunity,
    title: 'Performance opportunities',
    description:
      'Recitals to give learners a stage to shine, celebrate progress, and build a confidence that practice alone never quite can.',
  },
  {
    icon: iconCollaborativeApproach,
    title: 'Collaborative approach',
    description:
      'I keep parents in the loop. You will always know what your child is working on and how they are getting on.',
  },
];

function BenefitCard({ benefit }) {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>
        <img src={benefit.icon} alt="" aria-hidden="true" />
      </div>
      <h3 className={styles.cardTitle}>{benefit.title}</h3>
      <p className={styles.cardBody}>{benefit.description}</p>
    </div>
  );
}

export default function WhatToExpect() {
  return (
    <section id="what-to-expect" className={styles.section}>
      <h2 className={styles.heading}>
        What to <em>expect</em>
      </h2>

      <div className={styles.row}>
        {benefits.slice(0, 3).map((benefit) => (
          <BenefitCard key={benefit.title} benefit={benefit} />
        ))}
      </div>

      <div className={styles.rowCenter}>
        {benefits.slice(3).map((benefit) => (
          <BenefitCard key={benefit.title} benefit={benefit} />
        ))}
      </div>
    </section>
  );
}
