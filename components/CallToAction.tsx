// File: components/CallToAction.tsx

/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Link from 'next/link';

const CallToAction: React.FC = () => {
  return (
    <section className="py-20 bg-blue-600">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
        <p className="text-xl mb-8">Let's build the future together. Our team of experts is ready to help you succeed.</p>
        <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold transition-colors">
          Get Started Now
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;
