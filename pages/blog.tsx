// File: pages/blog.tsx

import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

const BlogPage: React.FC = () => {
  const blogPosts = [
    { title: 'The Future of AI in Business', excerpt: 'Explore how AI is reshaping industries and creating new opportunities for growth.' },
    { title: '5 Web Design Trends for 2024', excerpt: 'Stay ahead of the curve with these cutting-edge web design trends for the coming year.' },
    { title: 'Optimizing Mobile App Performance', excerpt: 'Learn key strategies to enhance the speed and efficiency of your mobile applications.' },
  ];

  return (
    <>
      <Head>
        <title>Blog - TechMicro</title>
        <meta name="description" content="Read our latest insights on tech trends, development tips, and industry news." />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <Header />
        <main className="pt-20 pb-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-8">Blog</h1>
            <div className="space-y-8">
              {blogPosts.map((post, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg">
                  <h2 className="text-2xl font-semibold mb-4">{post.title}</h2>
                  <p className="mb-4">{post.excerpt}</p>
                  <a href="#" className="text-blue-400 hover:underline">Read More</a>
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

export default BlogPage;
