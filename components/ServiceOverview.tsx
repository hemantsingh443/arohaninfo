// File: components/ServiceOverview.tsx

import React from 'react';
import { IconType } from 'react-icons';
import { FaCode, FaMobile, FaSearch, FaPalette, FaRobot, FaChartLine } from 'react-icons/fa';

interface ServiceProps {
  title: string;
  description: string;
  icon: IconType;
}

const Service: React.FC<ServiceProps> = ({ title, description, icon: Icon }) => (
  <div className="bg-gray-800 p-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105">
    <Icon className="text-4xl mb-4 text-blue-400" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);

const ServiceOverview: React.FC = () => {
  const services: ServiceProps[] = [
    {
      title: "Web Development",
      description: "Custom websites tailored to your business needs.",
      icon: FaCode,
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications.",
      icon: FaMobile,
    },
    {
      title: "SEO Optimization",
      description: "Boost your online visibility and search rankings.",
      icon: FaSearch,
    },
    {
      title: "Graphic Design",
      description: "Eye-catching visuals for your brand and products.",
      icon: FaPalette,
    },
    {
      title: "AI/LLM Integration",
      description: "Enhance your software with cutting-edge AI technologies.",
      icon: FaRobot,
    },
    {
      title: "Tech Consulting",
      description: "Expert advice on technology strategies and solutions.",
      icon: FaChartLine,
    },
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Service key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;
