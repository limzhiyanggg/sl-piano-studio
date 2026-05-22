import MarqueeLib from 'react-fast-marquee';
const Marquee = MarqueeLib.default ?? MarqueeLib;
import styles from './Testimonials.module.css';
import TestimonialCard from './TestimonialCard';
import img1 from '../assets/images/testimonial-image-1.png';
import img2 from '../assets/images/testimonial-image-2.png';
import img3 from '../assets/images/testimonial-image-3.png';
import img4 from '../assets/images/testimonial-image-4.png';
import avatarCallistia from '../assets/images/avatar-callistia.png';

const railItems = [
  <div key="kelvin" className={styles.item}>
    <TestimonialCard
      name="Kelvin Ngo"
      quote="My kids have had a wonderful learning experience over the years, especially thanks to the dedication of their teacher Serene. Whenever we are unable to attend a lesson, she always makes time for make-up lessons to keep the momentum going. We recently completed a recital and it was a memorable experience — a real pleasure to see the results of their hard work. Thank you teacher Serene for all your help and dedication."
    />
  </div>,
  <div key="michelle" className={styles.item}>
    <TestimonialCard
      name="Michelle Tay"
      quote="Teacher Serene is very patient and gentle, and has been coaching my daughter for a few years already. She will prep and give my child for her recital, which help boost her confidence."
    />
  </div>,
  <div key="photo1" className={styles.item}>
    <div className={styles.photo}>
      <img src={img1} alt="" className={styles.photoImg} />
    </div>
  </div>,
  <div key="eric" className={styles.item}>
    <TestimonialCard
      name="Eric Chong"
      quote="I wanted to take a moment to express my gratitude for the piano Teacher Serene has been giving to my daughter. I've noticed such an improvement in her skills, and it's clear that your patience, dedication, and teaching style have made a big difference. Thank you!"
    />
  </div>,
  <div key="photo2" className={styles.item}>
    <div className={styles.photo}>
      <img src={img2} alt="" className={styles.photoImg} />
    </div>
  </div>,
  <div key="callista" className={styles.item}>
    <TestimonialCard
      name="Callista Lay"
      image={avatarCallistia}
      quote="I'm a student from ms Serene, I would like to express my gratitude because she have helped me alot in my piano journey as a beginner who just started piano. She is really kind and supportive to her students and make my piano lesson really enjoyable. I felt like I improved alot thanks to her :)"
    />
  </div>,
  <div key="photo3" className={styles.item}>
    <div className={styles.photo}>
      <img src={img3} alt="" className={styles.photoImg} />
    </div>
  </div>,
  <div key="linlin" className={styles.item}>
    <TestimonialCard
      name="Lin Lin"
      quote="Ms Serene is very nice, kind and very patient. She teaches my two kids and under her guidance, they learn piano very happily."
    />
  </div>,
  <div key="brenda" className={styles.item}>
    <TestimonialCard
      name="Brenda Jung"
      quote="Ms. Serene has been teaching my son piano for over a year. She is kind and patient, and my son always looks forward to and enjoys her lessons."
    />
  </div>,
  <div key="photo4" className={styles.item}>
    <div className={styles.photo}>
      <img src={img4} alt="" className={styles.photoImg} />
    </div>
  </div>,
  <div key="zhimei" className={styles.item}>
    <TestimonialCard
      name="Zhi Mei Mae"
      quote="Teacher Serene is fantastic; she's very dedicated in class. I would definitely recommend her to everyone learning music."
    />
  </div>,
];

export default function Testimonials() {
  return (
    <section id="testimonials" className={styles.section}>
      <h2 className={styles.heading}>
        Hear it <em>from the others</em>
      </h2>

      <div className={styles.railWrapper}>
        <Marquee speed={65} gradient={false}>
          {railItems}
        </Marquee>
      </div>
    </section>
  );
}
