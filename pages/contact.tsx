// File: pages/contact.tsx

import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ContactPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
  };

  return (
    <>
      <Head>
        <title>Contact Us - TechMicro</title>
        <meta name="description" content="Get in touch with us for your tech needs and inquiries." />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <Header />
        <main className="pt-20 pb-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block mb-2">Name</label>
                    <input type="text" id="name" name="name" required className="w-full p-2 rounded bg-gray-700 text-white" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2">Email</label>
                    <input type="email" id="email" name="email" required className="w-full p-2 rounded bg-gray-700 text-white" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block mb-2">Message</label>
                    <textarea id="message" name="message" required className="w-full p-2 rounded bg-gray-700 text-white" rows={4}></textarea>
                  </div>
                  <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                    Send Message
                  </button>
                </form>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-4">Our Contact Information</h2>
                <p>123 Tech Street</p>
                <p>San Francisco, CA 94122</p>
                <p>Email: contact@techmicro.com</p>
                <p>Phone: (555) 123-4567</p>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
