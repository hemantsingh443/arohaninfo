// File: components/Blog.tsx

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface BlogPostProps {
  title: string;
  excerpt: string;
  imageUrl: string;
  slug: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ title, excerpt, imageUrl, slug }) => (
  <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
    <div className="relative h-48">
      <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{excerpt}</p>
      <Link href={`/blog/${slug}`} className="text-blue-400 hover:text-blue-300 transition-colors">
        Read More →
      </Link>
    </div>
  </div>
);

const Blog: React.FC = () => {
  const blogPosts: BlogPostProps[] = [
    {
      title: "The Future of AI in Business",
      excerpt: "Explore how AI is reshaping industries and creating new opportunities for growth.",
      imageUrl: "/images/blog-ai.jpg",
      slug: "future-of-ai-in-business",
    },
    {
      title: "5 Web Design Trends for 2024",
      excerpt: "Stay ahead of the curve with these cutting-edge web design trends for the coming year.",
      imageUrl: "/images/blog-web-design.jpg",
      slug: "web-design-trends-2024",
    },
    {
      title: "Optimizing Mobile App Performance",
      excerpt: "Learn key strategies to enhance the speed and efficiency of your mobile applications.",
      imageUrl: "/images/blog-mobile-app.jpg",
      slug: "optimizing-mobile-app-performance",
    },
  ];

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Latest Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogPost key={index} {...post} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/blog" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full text-lg transition-colors">
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
