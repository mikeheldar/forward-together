import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { siteConfig } from '@/lib/site-config';
import Image from 'next/image';

export default function Contact() {
  return (
    <div className="min-h-screen bg-background-default flex flex-col">
      <Header />
      
      <main className="flex-grow py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          {/* Header */}
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 font-heading" style={{ color: '#383f51' }}>
              Get in Touch
            </h1>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: '#383f51' }}>
              We're here to support you. Reach out for inquiries or to schedule an appointment. Your journey towards healing starts with a conversation.
            </p>
          </div>

          {/* Contact Information Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-20">
            {/* Connect */}
            <div className="text-center">
              <h2 className="text-xl font-bold mb-4 font-heading" style={{ color: '#383f51' }}>
                Connect
              </h2>
              <div className="space-y-2">
                <p className="text-base" style={{ color: '#383f51' }}>
                  <a 
                    href={`tel:${siteConfig.contact.phone.replace(/[^\d]/g, '')}`}
                    className="hover:opacity-80 transition-opacity"
                    style={{ color: '#3c4f76' }}
                  >
                    {siteConfig.contact.phone}
                  </a>
                </p>
              </div>
            </div>

            {/* Reach */}
            <div className="text-center">
              <h2 className="text-xl font-bold mb-4 font-heading" style={{ color: '#383f51' }}>
                Reach
              </h2>
              <div className="space-y-2">
                <p className="text-base">
                  <a 
                    href={`mailto:${siteConfig.contact.email}`}
                    className="hover:opacity-80 transition-opacity"
                    style={{ color: '#3c4f76' }}
                  >
                    {siteConfig.contact.email}
                  </a>
                </p>
              </div>
            </div>

            {/* Address */}
            <div className="text-center">
              <h2 className="text-xl font-bold mb-4 font-heading" style={{ color: '#383f51' }}>
                Address
              </h2>
              <div className="space-y-1">
                <p className="text-base" style={{ color: '#383f51' }}>
                  5775 Glenridge Drive
                </p>
                <p className="text-base" style={{ color: '#383f51' }}>
                  Building B, Suite 310
                </p>
                <p className="text-base" style={{ color: '#383f51' }}>
                  {siteConfig.contact.address.city}, {siteConfig.contact.address.state} {siteConfig.contact.address.zip.split('-')[0]}
                </p>
              </div>
            </div>
          </div>

          {/* Our Location Section */}
          <div className="mb-20 bg-background-muted rounded-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center font-heading" style={{ color: '#383f51' }}>
              Our Location
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-center max-w-3xl mx-auto" style={{ color: '#383f51' }}>
              Visit us for compassionate therapy and support tailored for women and families navigating life's challenges.
            </p>
          </div>

          {/* Client Feedback Section */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center font-heading" style={{ color: '#383f51' }}>
              Client Feedback
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-center max-w-3xl mx-auto mb-12" style={{ color: '#383f51' }}>
              Hear from our clients about their transformative experiences with therapy.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* Testimonial 1 */}
              <div className="flex flex-col items-center text-center">
                <div className="relative w-24 h-24 rounded-full overflow-hidden mb-6">
                  <Image
                    src="/images/IMG_2286.jpeg"
                    alt="Emily J."
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </div>
                <p className="text-base md:text-lg italic leading-relaxed mb-4" style={{ color: '#383f51' }}>
                  "Forward Together has been a lifeline for me during my postpartum journey."
                </p>
                <p className="font-bold text-base" style={{ color: '#3c4f76' }}>
                  Emily J.
                </p>
                <p className="text-sm text-gray-500 mb-2">East Cobb</p>
                <div className="flex items-center justify-center">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="flex flex-col items-center text-center">
                <div className="relative w-24 h-24 rounded-full overflow-hidden mb-6">
                  <Image
                    src="/images/IMG_2281.jpeg"
                    alt="Sarah M."
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </div>
                <p className="text-base md:text-lg italic leading-relaxed mb-4" style={{ color: '#383f51' }}>
                  "The support I received helped me navigate my grief and anxiety beautifully."
                </p>
                <p className="font-bold text-base" style={{ color: '#3c4f76' }}>
                  Sarah M.
                </p>
                <p className="text-sm text-gray-500 mb-2">Sandy Springs</p>
                <div className="flex items-center justify-center">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
