
// File: components/Hero.tsx

import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="h-screen flex items-center justify-center text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-5xl font-bold mb-6">Empowering Your Business with Innovative Tech Solutions</h1>
        <p className="text-xl mb-8">Custom web development, mobile apps, SEO, and AI integration tailored to your needs</p>
        <div className="space-x-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full text-lg">
            Explore Our Services
          </button>
          <button className="bg-transparent border border-white hover:bg-white hover:text-gray-900 text-white px-6 py-3 rounded-full text-lg transition-colors duration-300">
            View Case Studies
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
