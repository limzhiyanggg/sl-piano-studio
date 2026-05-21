import { useState } from 'react';
import styles from './FAQItem.module.css';

export default function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.item}>
      <button className={styles.question} onClick={() => setOpen(!open)}>
        <span className={styles.questionText}>{question}</span>
        <span className={styles.icon}>{open ? '−' : '+'}</span>
      </button>
      {open && <p className={styles.answer}>{answer}</p>}
    </div>
  );
}
