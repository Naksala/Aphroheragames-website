import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import About from '../pages/about';
import Contact from '../pages/contact';
import Home from '../pages/home';
import { ASSETS } from '../utils/constants';
import { useRef } from 'react';

export default function Main() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="bg-fixed bg-cover" style={{ backgroundImage: `url(${ASSETS.images.background})` }}>
      <Head>
        <title>Welcome to Aphrohera Games</title>
      </Head>
      <Header homeRef={homeRef} aboutRef={aboutRef} contactRef={contactRef} />
      <main className="p-4 fade-in">
        <section ref={homeRef}>
          <Home />
        </section>
        <section ref={aboutRef}>
          <About />
        </section>
        <section ref={contactRef}>
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}
