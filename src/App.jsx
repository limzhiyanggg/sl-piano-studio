import './global.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import WhatToExpect from './components/WhatToExpect';
import Testimonials from './components/Testimonials';
import Rates from './components/Rates';
import HowItWorks from './components/HowItWorks';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import WhatsAppFAB from './components/WhatsAppFAB';

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <WhatToExpect />
      <Testimonials />
      <Rates />
      <HowItWorks />
      <FAQ />
      <Contact />
      <WhatsAppFAB />
    </>
  );
}
