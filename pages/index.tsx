// File: pages/index.tsx

import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ServiceOverview from '../components/ServiceOverview';
import CaseStudies from '../components/CaseStudies';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Blog from '../components/Blog';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>TechMicro - Empowering Your Business with Innovative Tech Solutions</title>
        <meta name="description" content="Custom web development, mobile apps, SEO, AI integration, and more." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <Header />
        
        <main>
          <Hero />
          <ServiceOverview />
          <CaseStudies />
          <Features />
          <Testimonials />
          <Blog />
          <CallToAction />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Home;
