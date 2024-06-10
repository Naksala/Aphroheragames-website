import Head from 'next/head';
import { ASSETS } from '../utils/constants';
import { forwardRef } from 'react';

const About = forwardRef((props, ref) => {
  return (
    <div className="bg-fixed bg-cover" style={{ backgroundImage: `url(${ASSETS.images.background})` }}>
      <Head>
        <title>About Us - Aphrohera Games</title>
      </Head>
     
      <main className="p-4">
        <section ref={ref} id="about" className="py-12 sm:py-24 bg-black bg-opacity-80">
          <h2 className="text-3xl mb-4 text-center">About Us</h2>
          <p className="mx-auto max-w-2xl">At Aphrohera Games, we transform your vision into reality with our unparalleled expertise in game development. Whether you're an indie developer with a unique idea or a major studio looking to expand your portfolio, we are your dedicated partners from concept to console.</p>
        </section>
      </main>
      
    </div>
  );
});

export default About;
