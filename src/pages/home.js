import Head from 'next/head';
import { ASSETS } from '../utils/constants';
import { forwardRef } from 'react';

const Home = forwardRef((props, ref) => {
  return (
    <div className="bg-fixed bg-cover" style={{ backgroundImage: `url(${ASSETS.images.background})` }}>
      <main className="p-4">
      <section ref={ref} id="home" className="w-full h-screen bg-black bg-opacity-70 text-center flex items-center justify-center">
          <h2 className="text-4xl mb-4">Welcome to Aphrohera Games</h2>
          <div>
          <p className="text-2xl mb-4 text-center">Your Trusted Partner in Game Development</p>
          </div>
    </section>

    </main>

    </div>
  );
});

export default Home;