// File: components/Header.tsx

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header: React.FC = () => {
  const router = useRouter();

  const isActive = (pathname: string) => router.pathname === pathname;

  return (
    <header className="fixed w-full bg-opacity-90 bg-gray-900 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Arohan.infotech
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className={`hover:text-blue-400 transition-colors ${isActive('/') ? 'text-blue-400' : ''}`}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className={`hover:text-blue-400 transition-colors ${isActive('/services') ? 'text-blue-400' : ''}`}>
                Services
              </Link>
            </li>
            <li>
              <Link href="/case-studies" className={`hover:text-blue-400 transition-colors ${isActive('/case-studies') ? 'text-blue-400' : ''}`}>
                Case Studies
              </Link>
            </li>
            <li>
              <Link href="/blog" className={`hover:text-blue-400 transition-colors ${isActive('/blog') ? 'text-blue-400' : ''}`}>
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className={`hover:text-blue-400 transition-colors ${isActive('/contact') ? 'text-blue-400' : ''}`}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <Link href="/contact" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors">
          Get a Quote
        </Link>
      </div>
    </header>
  );
};

export default Header;
