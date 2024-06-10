import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ASSETS } from '../utils/constants';

export default function Portfolio() {
  return (
    <div className="bg-fixed bg-cover" style={{ backgroundImage: `url(${ASSETS.images.background})` }}>
      <Head>
        <title>Portfolio - Aphrohera Games</title>
      </Head>
      <Header />
      <main className="p-4">
        <section className="py-12 sm:py-24 bg-black bg-opacity-80">
          <h2 className="text-3xl mb-4 text-center">Portfolio</h2>
          <p className="mx-auto max-w-2xl">Here are some of our recent successes:</p>
          <ul className="mx-auto max-w-2xl">
            <li className="mb-4">"Mystic Realms": An epic fantasy RPG captivating players with rich storytelling and stunning visuals.</li>
            <li className="mb-4">"Galactic Conquest": A space strategy game beloved for its deep mechanics and engaging gameplay.</li>
            <li className="mb-4">"Dreamweaver's Quilt": A cozy, imaginative puzzle game charming players with its unique concept and beautiful art.</li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}