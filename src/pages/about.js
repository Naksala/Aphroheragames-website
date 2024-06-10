import Head from 'next/head';
import { forwardRef } from 'react';

const About = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <Head>
        <title>About Us - Aphrohera Games</title>
      </Head>
      <main className="p-4">
        <section className="py-12 sm:py-24 bg-black bg-opacity-80">
          <h2 className="text-3xl mb-4 text-center">About Us</h2>
          <p className="mx-auto max-w-2xl">
            Welcome to Aphrohera Games, where creativity meets technology to deliver outstanding gaming experiences.
          </p>
        </section>
      </main>
    </div>
  );
});

About.displayName = 'About';

export default About;
