import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ASSETS } from '../utils/constants';

export default function Services() {
  return (
    <div className="bg-fixed bg-cover" style={{ backgroundImage: `url(${ASSETS.images.background})` }}>
      <Head>
        <title>Our Services - Aphrohera Games</title>
      </Head>
      <Header />
      <main className="p-4">
        <section className="py-12 sm:py-24 bg-black bg-opacity-80">
          <h2 className="text-3xl mb-4 text-center">Our Services</h2>
          <ul className="mx-auto max-w-2xl">
            <li className="mb-4">Game Design:</li>
            <li className="mb-4">Game Development:</li>
            <li className="mb-4">Art and Animation:</li>
            <li className="mb-4">Audio and Music:</li>
            <li className="mb-4">Quality Assurance:</li>
            <li className="mb-4">Launch and Post-Launch Support:</li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}
