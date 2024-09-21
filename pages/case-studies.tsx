// File: pages/case-studies.tsx

import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    { title: 'E-commerce Platform Overhaul', description: 'Increased conversion rates by 40% through UX improvements.' },
    { title: 'AI-Powered Chatbot Integration', description: 'Reduced customer service costs by 30% for a major retailer.' },
    { title: 'Mobile App for Fitness Tracking', description: 'Developed a cross-platform app with over 1 million downloads.' },
  ];

  return (
    <>
      <Head>
        <title>Case Studies - TechMicro</title>
        <meta name="description" content="Explore our successful tech projects and solutions for various industries." />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <Header />
        <main className="pt-20 pb-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-8">Case Studies</h1>
            <div className="space-y-8">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg">
                  <h2 className="text-2xl font-semibold mb-4">{study.title}</h2>
                  <p>{study.description}</p>
                  <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                    Read More
                  </button>
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

export default CaseStudiesPage;
