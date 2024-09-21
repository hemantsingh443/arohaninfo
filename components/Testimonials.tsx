// File: components/Testimonials.tsx

/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  avatarUrl: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, role, avatarUrl }) => (
  <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
    <p className="text-gray-300 italic mb-4">"{quote}"</p>
    <div className="flex items-center">
      <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
        <Image src={avatarUrl} alt={author} width={48} height={48} objectFit="cover" />
      </div>
      <div>
        <h4 className="font-semibold">{author}</h4>
        <p className="text-gray-400 text-sm">{role}</p>
      </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  const testimonials: TestimonialProps[] = [
    {
      quote: "TechMicro transformed our business with their innovative solutions. Highly recommended!",
      author: "Jane Doe",
      role: "CEO, Tech Innovators Inc.",
      avatarUrl: "/images/avatar1.jpg",
    },
    {
      quote: "The team's expertise in AI integration gave us a significant competitive advantage.",
      author: "John Smith",
      role: "CTO, Future Systems",
      avatarUrl: "/images/avatar2.jpg",
    },
    {
      quote: "Their SEO services doubled our organic traffic in just three months. Impressive results!",
      author: "Emily Brown",
      role: "Marketing Director, GrowFast",
      avatarUrl: "/images/avatar3.jpg",
    },
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
