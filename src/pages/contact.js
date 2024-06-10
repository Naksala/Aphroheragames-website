import Head from 'next/head';
import { ASSETS } from '../utils/constants';
import { forwardRef, useState } from 'react';

const Contact = forwardRef(function ContactComponent(props, ref) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } else {
      setStatus('Failed to send message.');
    }
  };

  return (
    <div className="bg-fixed bg-cover" style={{ backgroundImage: `url(${ASSETS.images.background})` }}>
      <Head>
        <title>Contact Us - Aphrohera Games</title>
      </Head>
      <main className="p-4">
        <section ref={ref} id="contact" className="py-12 sm:py-24 bg-black bg-opacity-80">
          <h2 className="text-3xl mb-4 text-center">Contact Us</h2>
          <p className="mx-auto max-w-2xl mb-8 text-center">We&apos;re excited to hear from you! Contact us today to discuss your project and explore how we can collaborate to make your next game a success.</p>
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-lg mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-lg mb-2">Comment or Question</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="w-full py-2 px-4 bg-primary text-black font-semibold rounded hover:bg-primary-dark transition duration-300"
              >
                Submit
              </button>
            </div>
            {status && <p className="text-center mt-4">{status}</p>}
          </form>
        </section>
      </main>
    </div>
  );
});

export default Contact;
