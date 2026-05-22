import styles from './FAQ.module.css';
import FAQItem from './FAQItem';
import policyUrl from '../files/Studio Policy - v1.0.pdf?url';

const faqs = [
  {
    question: 'Does my child need a piano at home?',
    answer: 'Yes. Students should have an upright or digital piano with weighted keys and a sustain pedal.',
  },
  {
    question: 'What age can my child start?',
    answer:
      'I teach from age 5 onwards. If you are unsure whether your child is ready, feel free to reach out and we can have a quick chat.',
  },
  {
    question: 'Do you follow the ABRSM syllabus?',
    answer:
      'Yes, for learners working toward exams. I guide them through the full ABRSM curriculum and prepare them properly for graded assessments.',
  },
  {
    question: "Is it okay if my child doesn't want to take exams?",
    answer:
      'Absolutely. Plenty of learners come purely for the joy of it. Lessons will still remain structured and intentional, just without the exam pressure.',
  },
  {
    question: 'Do you teach adults with zero experience?',
    answer:
      'Yes. It is never too late to start, and we go at whatever pace works for you.',
  },
  {
    question: 'What is your lesson policy?',
    answer: (
      <>
        For details on cancellation, rescheduling, and payment, you can read the{' '}
        <a href={policyUrl} target="_blank" rel="noopener noreferrer">
          full details here
        </a>
        .
      </>
    ),
  },
  {
    question: 'When and how do I make payment?',
    answer:
      'Payment is collected at the start of each month, via PayNow, bank transfer, or cash, whichever works best for you.',
  },
];

export default function FAQ() {
  return (
    <section id="faq" className={styles.section}>
      <div className={styles.grid}>
        <div className={styles.aside}>
          <h2 className={styles.heading}>
            Frequently asked <em>questions</em>
          </h2>
          <p className={styles.subtext}>
            If yours isn&rsquo;t here, drop me a message on WhatsApp and I&rsquo;ll get back to you.
          </p>
        </div>

        <div className={styles.list}>
          {faqs.map((faq) => (
            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
