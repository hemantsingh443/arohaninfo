// File: components/Footer.tsx

import React from 'react';
import Link from 'next/link';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">TechMicro</h3>
            <p className="text-gray-400">Empowering businesses with innovative tech solutions.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-blue-400 transition-colors">Services</Link></li>
              <li><Link href="/case-studies" className="hover:text-blue-400 transition-colors">Case Studies</Link></li>
              <li><Link href="/blog" className="hover:text-blue-400 transition-colors">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-gray-400">123 Tech Street, San Francisco, CA 94122</p>
            <p className="text-gray-400">contact@techmicro.com</p>
            <p className="text-gray-400">(555) 123-4567</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-400 transition-colors">
                <FaTwitter />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-400 transition-colors">
                <FaLinkedin />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-400 transition-colors">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">&copy; 2024 TechMicro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
