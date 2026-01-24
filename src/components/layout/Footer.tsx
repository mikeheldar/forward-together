import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';

export function Footer() {
  return (
    <footer className="bg-[#284c61] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* More Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">More Information</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-[#0b8aa6] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#0b8aa6] transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-[#0b8aa6] transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Location</h3>
            <p className="text-gray-300">
              {siteConfig.contact.address.street}<br />
              {siteConfig.contact.address.city}, {siteConfig.contact.address.state} {siteConfig.contact.address.zip}
            </p>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <p className="text-gray-300 mb-2">
              <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-[#0b8aa6] transition-colors">
                {siteConfig.contact.email}
              </a>
            </p>
            <p className="text-gray-300">
              <a href={`tel:${siteConfig.contact.phone.replace(/[^\d]/g, '')}`} className="hover:text-[#0b8aa6] transition-colors">
                {siteConfig.contact.phone}
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-8 text-center text-gray-300">
          <p>© 2025. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

