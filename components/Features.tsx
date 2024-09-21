// File: components/Features.tsx

import React from 'react';

import { FaUserCheck, FaRocket, FaClock, FaLightbulb } from 'react-icons/fa';

interface FeatureProps {
  title: string;
  description: string;
  icon: React.ElementType;
}

const Feature: React.FC<FeatureProps> = ({ title, description, icon: Icon }) => (
  <div className="flex items-start">
    <div className="flex-shrink-0 mr-4">
      <Icon className="text-3xl text-blue-400" />
    </div>
    <div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  </div>
);

const Features: React.FC = () => {
  const features: FeatureProps[] = [
    {
      title: "Expert Team",
      description: "Our seasoned professionals bring years of industry experience to every project.",
      icon: FaUserCheck,
    },
    {
      title: "Cutting-edge Tech",
      description: "We leverage the latest technologies to deliver innovative solutions.",
      icon: FaRocket,
    },
    {
      title: "Fast Turnaround",
      description: "We pride ourselves on efficient delivery without compromising quality.",
      icon: FaClock,
    },
    {
      title: "Tailored Solutions",
      description: "Every solution is customized to meet your unique business needs.",
      icon: FaLightbulb,
    },
  ];

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
