import { useRef, useEffect } from 'react';
import styles from './Testimonials.module.css';
import TestimonialCard from './TestimonialCard';
import img1 from '../assets/images/testimonial-image-1.png';
import img2 from '../assets/images/testimonial-image-2.png';
import img3 from '../assets/images/testimonial-image-3.png';
import img4 from '../assets/images/testimonial-image-4.png';
import avatarCallistia from '../assets/images/avatar-callistia.png';

const railItems = [
  <TestimonialCard
    key="kelvin"
    name="Kelvin Ngo"
    quote="My kids have had a wonderful learning experience over the years, especially thanks to the dedication of their teacher Serene. Whenever we are unable to attend a lesson, she always makes time for make-up lessons to keep the momentum going. We recently completed a recital and it was a memorable experience — a real pleasure to see the results of their hard work. Thank you teacher Serene for all your help and dedication."
  />,
  <TestimonialCard
    key="michelle"
    name="Michelle Tay"
    quote="Teacher Serene is very patient and gentle, and has been coaching my daughter for a few years already. She will prep and give my child for her recital, which help boost her confidence."
  />,
  <div key="photo1" className={styles.photo}>
    <img src={img1} alt="" className={styles.photoImg} />
  </div>,
  <TestimonialCard
    key="eric"
    name="Eric Chong"
    quote="I wanted to take a moment to express my gratitude for the piano Teacher Serene has been giving to my daughter. I've noticed such an improvement in her skills, and it's clear that your patience, dedication, and teaching style have made a big difference. Thank you!"
  />,
  <div key="photo2" className={styles.photo}>
    <img src={img2} alt="" className={styles.photoImg} />
  </div>,
  <TestimonialCard
    key="callista"
    name="Callista Lay"
    image={avatarCallistia}
    quote="I'm a student from ms Serene, I would like to express my gratitude because she have helped me alot in my piano journey as a beginner who just started piano. She is really kind and supportive to her students and make my piano lesson really enjoyable. I felt like I improved alot thanks to her :)"
  />,
  <div key="photo3" className={styles.photo}>
    <img src={img3} alt="" className={styles.photoImg} />
  </div>,
  <TestimonialCard
    key="linlin"
    name="Lin Lin"
    quote="Ms Serene is very nice, kind and very patient. She teaches my two kids and under her guidance, they learn piano very happily."
  />,
  <TestimonialCard
    key="brenda"
    name="Brenda Jung"
    quote="Ms. Serene has been teaching my son piano for over a year. She is kind and patient, and my son always looks forward to and enjoys her lessons."
  />,
  <div key="photo4" className={styles.photo}>
    <img src={img4} alt="" className={styles.photoImg} />
  </div>,
  <TestimonialCard
    key="zhimei"
    name="Zhi Mei Mae"
    quote="Teacher Serene is fantastic; she's very dedicated in class. I would definitely recommend her to everyone learning music."
  />,
];

export default function Testimonials() {
  const trackRef = useRef(null);
  const set1Ref  = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    const set1  = set1Ref.current;
    if (!track || !set1) return;

    let x = 0;
    let raf;
    let lastTs = null;
    const SPEED = 65; // px per second

    const step = (ts) => {
      if (lastTs !== null) {
        const dt = Math.min(ts - lastTs, 50);
        x -= (SPEED * dt) / 1000;
        const setW = set1.offsetWidth;
        if (x <= -setW) x += setW;
        track.style.transform = `translateX(${x}px)`;
      }
      lastTs = ts;
      raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section id="testimonials" className={styles.section}>
      <h2 className={styles.heading}>
        Hear it <em>from the others</em>
      </h2>

      <div className={styles.railWrapper}>
        <div className={styles.track} ref={trackRef}>
          <div className={styles.set} ref={set1Ref}>{railItems}</div>
          <div className={styles.set} aria-hidden="true">{railItems}</div>
        </div>
      </div>
    </section>
  );
}
