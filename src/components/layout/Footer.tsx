import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';

export function Footer() {
  return (
    <footer className="rounded-lg" style={{ backgroundColor: '#383f51', color: '#f4f3ee', fontFamily: 'var(--font-heading), "Open Sans", sans-serif' }}>
      <div className="w-full px-6 md:px-8 py-12 md:py-16">
        {/* Three Column Section - Centered Container */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center mb-8">
            {/* Connect Column */}
            <div>
              <h3 className="text-base md:text-lg font-bold mb-4" style={{ color: '#f4f3ee' }}>
                Connect
              </h3>
              <div className="space-y-2">
                <p className="text-sm md:text-base">
                  <a 
                    href={`tel:${siteConfig.contact.phone.replace(/[^\d]/g, '')}`}
                    className="hover:opacity-80 transition-opacity"
                    style={{ color: '#ebe9e7' }}
                  >
                    {siteConfig.contact.phone}
                  </a>
                </p>
                <p className="text-sm md:text-base">
                  <a 
                    href={`mailto:${siteConfig.contact.email}`}
                    className="hover:opacity-80 transition-opacity"
                    style={{ color: '#ebe9e7' }}
                  >
                    {siteConfig.contact.email}
                  </a>
                </p>
                <div className="pt-2 flex justify-center">
                  <a 
                    href="https://www.linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block hover:opacity-80 transition-opacity"
                    aria-label="LinkedIn"
                  >
                    <svg 
                      className="w-6 h-6" 
                      style={{ fill: '#ebe9e7' }}
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* More Information Column */}
            <div>
              <h3 className="text-base md:text-lg font-bold mb-4" style={{ color: '#f4f3ee' }}>
                More Information
              </h3>
              <div className="space-y-2">
                <p className="text-sm md:text-base">
                  <Link href="/about" className="hover:opacity-80 transition-opacity" style={{ color: '#ebe9e7' }}>
                    About
                  </Link>
                </p>
                <p className="text-sm md:text-base">
                  <Link href="/contact" className="hover:opacity-80 transition-opacity" style={{ color: '#ebe9e7' }}>
                    Contact
                  </Link>
                </p>
                <p className="text-sm md:text-base">
                  <Link href="/faq" className="hover:opacity-80 transition-opacity" style={{ color: '#ebe9e7' }}>
                    FAQ
                  </Link>
                </p>
              </div>
            </div>

            {/* Location Column */}
            <div>
              <h3 className="text-base md:text-lg font-bold mb-4" style={{ color: '#f4f3ee' }}>
                Location
              </h3>
              <div className="space-y-1">
                <div className="flex items-center justify-center gap-2">
                  <svg 
                    className="w-4 h-4 flex-shrink-0" 
                    style={{ fill: '#ebe9e7' }}
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <div className="text-sm md:text-base space-y-1">
                    <p style={{ color: '#ebe9e7' }}>5775 Glenridge Drive</p>
                  </div>
                </div>
                <p className="text-sm md:text-base" style={{ color: '#ebe9e7' }}>Building B; Suite 310</p>
                <p className="text-sm md:text-base" style={{ color: '#ebe9e7' }}>
                  {siteConfig.contact.address.city}, {siteConfig.contact.address.state} {siteConfig.contact.address.zip.split('-')[0]}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center pt-6">
          <p className="text-xs md:text-sm" style={{ color: '#ebe9e7' }}>© 2025. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
