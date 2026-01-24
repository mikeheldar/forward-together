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
    <nav className="bg-white shadow-md sticky top-0 z-50 rounded-lg">
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
            <span className="text-2xl md:text-3xl font-extrabold font-heading" style={{ color: '#383f51' }}>
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
                  'px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap font-sans rounded-lg',
                  pathname === item.href
                    ? 'underline'
                    : ''
                )}
                style={{
                  color: '#8b7e74',
                  textDecoration: pathname === item.href ? 'underline' : 'none',
                  textUnderlineOffset: pathname === item.href ? '4px' : '0'
                }}
                onMouseEnter={(e) => {
                  if (pathname !== item.href) {
                    e.currentTarget.style.opacity = '0.8';
                  }
                }}
                onMouseLeave={(e) => {
                  if (pathname !== item.href) {
                    e.currentTarget.style.opacity = '1';
                  }
                }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-2 px-10 py-3.5 rounded-full transition-colors text-sm font-semibold whitespace-nowrap font-sans"
              style={{ 
                paddingLeft: '2.5rem', 
                paddingRight: '2.5rem', 
                paddingTop: '0.875rem', 
                paddingBottom: '0.875rem', 
                fontSize: '0.875rem', 
                color: '#f4f3ee', 
                backgroundColor: '#6f655d',
                fontFamily: 'var(--font-lato), Lato, sans-serif'
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#534c46';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#6f655d';
                }}
            >
              Get Started
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md focus:outline-none"
            style={{ color: '#8b7e74' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '0.8';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '1';
            }}
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
                    ? ''
                    : ''
                )}
                style={{
                  backgroundColor: pathname === item.href ? '#6f655d' : 'transparent',
                  color: pathname === item.href ? '#f4f3ee' : '#8b7e74',
                  textDecoration: pathname === item.href ? 'underline' : 'none',
                  textUnderlineOffset: pathname === item.href ? '4px' : '0'
                }}
                onMouseEnter={(e) => {
                  if (pathname !== item.href) {
                    e.currentTarget.style.backgroundColor = '#d7d3d3';
                  }
                }}
                onMouseLeave={(e) => {
                  if (pathname !== item.href) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-10 py-3.5 mt-2 rounded-full text-center text-sm font-semibold font-sans hover:opacity-90"
              style={{ 
                paddingLeft: '2.5rem', 
                paddingRight: '2.5rem', 
                paddingTop: '0.875rem', 
                paddingBottom: '0.875rem', 
                fontSize: '0.875rem', 
                color: '#f4f3ee', 
                backgroundColor: '#6f655d',
                fontFamily: 'var(--font-lato), Lato, sans-serif'
              }}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
