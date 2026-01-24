'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/faq', label: 'FAQ' },
];

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Header */}
          <Link href="/" className="flex items-center gap-3 md:gap-4 hover:opacity-80 transition-opacity">
            <div className="relative h-16 w-16 flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt="Forward Together Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-2xl md:text-3xl font-extrabold text-primary-600 font-serif">
              Forward Together
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap',
                  pathname === item.href
                    ? 'text-secondary-600 border-b-2 border-secondary-600'
                    : 'text-neutral-700 hover:text-secondary-600'
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-2 px-10 py-3.5 bg-secondary-500 text-white rounded-full hover:bg-secondary-600 transition-colors text-base font-semibold whitespace-nowrap"
            >
              Get Started
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-neutral-700 hover:text-secondary-600 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-neutral-200">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  'block px-4 py-3 rounded-md text-base font-medium',
                  pathname === item.href
                    ? 'bg-secondary-500 text-white'
                    : 'text-neutral-700 hover:bg-neutral-100'
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-10 py-3.5 mt-2 bg-secondary-500 text-white rounded-full text-center text-base font-semibold hover:bg-secondary-600"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
