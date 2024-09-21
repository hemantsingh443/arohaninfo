// File: components/CaseStudies.tsx

import React from 'react';
import Image from 'next/image';

interface CaseStudyProps {
  title: string;
  description: string;
  imageUrl: string;
}

const CaseStudy: React.FC<CaseStudyProps> = ({ title, description, imageUrl }) => (
  <div className="bg-gray-800 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105">
    <div className="relative h-48">
      <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <button className="text-blue-400 hover:text-blue-300 transition-colors">
        Read More →
      </button>
    </div>
  </div>
);

const CaseStudies: React.FC = () => {
  const caseStudies: CaseStudyProps[] = [
    {
      title: "E-commerce Platform Overhaul",
      description: "Increased conversion rates by 40% through UX improvements and AI-powered recommendations.",
      imageUrl: "/images/case-study-1.jpg",
    },
    {
      title: "Mobile App for Fitness Tracking",
      description: "Developed a cross-platform app with over 1 million downloads and 4.8 star rating.",
      imageUrl: "/images/case-study-2.jpg",
    },
    {
      title: "AI-Powered Customer Service Chatbot",
      description: "Reduced support ticket volume by 60% and improved customer satisfaction scores.",
      imageUrl: "/images/case-study-3.jpg",
    },
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Case Studies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <CaseStudy key={index} {...study} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
