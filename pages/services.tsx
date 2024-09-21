// File: pages/services.tsx

import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ServicesPage: React.FC = () => {
  const services = [
    { title: 'Web Development', description: 'Custom websites tailored to your business needs.' },
    { title: 'Mobile App Development', description: 'Native and cross-platform mobile applications.' },
    { title: 'SEO Optimization', description: 'Boost your online visibility and search rankings.' },
    { title: 'AI Integration', description: 'Enhance your software with cutting-edge AI technologies.' },
  ];

  return (
    <>
      <Head>
        <title>Our Services - TechMicro</title>
        <meta name="description" content="Explore our range of tech services including web development, mobile apps, SEO, and AI integration." />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <Header />
        <main className="pt-20 pb-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-8">Our Services</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg">
                  <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ServicesPage;
