import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { siteConfig } from '@/lib/site-config';
import Image from 'next/image';

export default function Contact() {
  return (
    <div className="min-h-screen bg-background-default flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Header Section */}
        <section className="bg-background-default py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 font-heading" style={{ color: '#383f51', fontFamily: 'var(--font-open-sans), "Open Sans", sans-serif' }}>
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl leading-relaxed" style={{ color: '#383f51', fontFamily: 'var(--font-lato), "Lato", sans-serif' }}>
              We're here to support you. Reach out for inquiries or to schedule an appointment. Your journey towards healing starts with a conversation.
            </p>
          </div>
        </section>

        {/* Contact Information Grid */}
        <section className="bg-background-default py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
              {/* Connect */}
              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 font-heading" style={{ color: '#383f51', fontFamily: 'var(--font-open-sans), "Open Sans", sans-serif' }}>
                  Connect
                </h2>
                <div className="space-y-2">
                  <p className="text-base md:text-lg" style={{ fontFamily: 'var(--font-lato), "Lato", sans-serif' }}>
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
                <h2 className="text-2xl md:text-3xl font-bold mb-6 font-heading" style={{ color: '#383f51', fontFamily: 'var(--font-open-sans), "Open Sans", sans-serif' }}>
                  Reach
                </h2>
                <div className="space-y-2">
                  <p className="text-base md:text-lg" style={{ fontFamily: 'var(--font-lato), "Lato", sans-serif' }}>
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
                <h2 className="text-2xl md:text-3xl font-bold mb-6 font-heading" style={{ color: '#383f51', fontFamily: 'var(--font-open-sans), "Open Sans", sans-serif' }}>
                  Address
                </h2>
                <div className="space-y-2">
                  <p className="text-base md:text-lg" style={{ color: '#383f51', fontFamily: 'var(--font-lato), "Lato", sans-serif' }}>
                    5775 Glenridge Drive
                  </p>
                  <p className="text-base md:text-lg" style={{ color: '#383f51', fontFamily: 'var(--font-lato), "Lato", sans-serif' }}>
                    Building B, Suite 310
                  </p>
                  <p className="text-base md:text-lg" style={{ color: '#383f51', fontFamily: 'var(--font-lato), "Lato", sans-serif' }}>
                    {siteConfig.contact.address.city}, {siteConfig.contact.address.state} {siteConfig.contact.address.zip.split('-')[0]}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Location Section */}
        <section className="bg-background-default py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 font-heading" style={{ color: '#383f51', fontFamily: 'var(--font-open-sans), "Open Sans", sans-serif' }}>
              Our Location
            </h2>
            <p className="text-lg md:text-xl leading-relaxed" style={{ color: '#383f51', fontFamily: 'var(--font-lato), "Lato", sans-serif' }}>
              Visit us for compassionate therapy and support tailored for women and families navigating life's challenges.
            </p>
          </div>
        </section>

        {/* Client Feedback Section - Purple Background */}
        <section className="bg-background-muted py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center font-heading" style={{ color: '#383f51', fontFamily: 'var(--font-open-sans), "Open Sans", sans-serif' }}>
              Client Feedback
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-center max-w-3xl mx-auto mb-16" style={{ color: '#383f51', fontFamily: 'var(--font-lato), "Lato", sans-serif' }}>
              Hear from our clients about their transformative experiences with therapy.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
              {/* Testimonial 1 */}
              <div className="flex flex-col items-start text-left">
                {/* Stars at top */}
                <div className="flex items-center mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                {/* Quote */}
                <p className="text-base md:text-lg italic leading-relaxed mb-6" style={{ color: '#383f51', fontFamily: 'var(--font-lato), "Lato", sans-serif' }}>
                  "Forward Together has been a lifeline for me during my postpartum journey."
                </p>
                {/* Picture and name */}
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src="/images/IMG_2286.jpeg"
                      alt="Emily J."
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-base md:text-lg" style={{ color: '#3c4f76', fontFamily: 'var(--font-lato), "Lato", sans-serif' }}>
                      Emily J.
                    </p>
                    <p className="text-sm" style={{ color: '#7d726a', fontFamily: 'var(--font-lato), "Lato", sans-serif' }}>
                      East Cobb
                    </p>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="flex flex-col items-start text-left">
                {/* Stars at top */}
                <div className="flex items-center mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                {/* Quote */}
                <p className="text-base md:text-lg italic leading-relaxed mb-6" style={{ color: '#383f51', fontFamily: 'var(--font-lato), "Lato", sans-serif' }}>
                  "The support I received helped me navigate my grief and anxiety beautifully."
                </p>
                {/* Picture and name */}
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src="/images/IMG_2281.jpeg"
                      alt="Sarah M."
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-base md:text-lg" style={{ color: '#3c4f76', fontFamily: 'var(--font-lato), "Lato", sans-serif' }}>
                      Sarah M.
                    </p>
                    <p className="text-sm" style={{ color: '#7d726a', fontFamily: 'var(--font-lato), "Lato", sans-serif' }}>
                      Sandy Springs
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
