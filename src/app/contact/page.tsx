import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { siteConfig } from '@/lib/site-config';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Contact Forward Together Therapy | Schedule a Session in ${siteConfig.city}`,
  description: `Reach out to Forward Together in ${siteConfig.city} to schedule a consultation or ask questions. Start your therapy journey today.`,
};

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
            <p className="text-lg md:text-xl leading-relaxed mb-4" style={{ color: '#383f51', fontFamily: 'var(--font-lato), "Lato", sans-serif' }}>
              Whether you&apos;re ready to start therapy or just have questions, I&apos;m here to listen and help.
            </p>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: '#383f51', fontFamily: 'var(--font-lato), "Lato", sans-serif' }}>
              We&apos;re here to support you. Reach out for inquiries or to schedule an appointment. Your journey towards healing starts with a conversation.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="bg-background-default py-8 md:py-12">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 font-heading text-center" style={{ color: '#383f51', fontFamily: 'var(--font-open-sans), "Open Sans", sans-serif' }}>
              Contact Information
            </h2>
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

        {/* Send a Message - TODO: Wire up SimplePractice contact widget when available */}
        <section className="bg-background-muted py-16 md:py-20">
          <div className="max-w-2xl mx-auto px-6 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 font-heading" style={{ color: '#383f51', fontFamily: 'var(--font-open-sans), "Open Sans", sans-serif' }}>
              Send a Message
            </h2>
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-semibold mb-2" style={{ color: '#383f51', fontFamily: 'var(--font-open-sans), "Open Sans", sans-serif' }}>
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-lg border text-base"
                  style={{ borderColor: '#d1beb0', fontFamily: 'var(--font-lato), "Lato", sans-serif' }}
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-sm font-semibold mb-2" style={{ color: '#383f51', fontFamily: 'var(--font-open-sans), "Open Sans", sans-serif' }}>
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border text-base"
                  style={{ borderColor: '#d1beb0', fontFamily: 'var(--font-lato), "Lato", sans-serif' }}
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-sm font-semibold mb-2" style={{ color: '#383f51', fontFamily: 'var(--font-open-sans), "Open Sans", sans-serif' }}>
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border text-base resize-y"
                  style={{ borderColor: '#d1beb0', fontFamily: 'var(--font-lato), "Lato", sans-serif' }}
                />
              </div>
              <button
                type="submit"
                className="px-10 py-3.5 rounded-full text-sm font-semibold transition-colors font-sans hover:opacity-90"
                style={{ color: '#f4f3ee', backgroundColor: '#383f51', fontFamily: 'var(--font-lato), Lato, sans-serif' }}
              >
                Send Message
              </button>
            </form>
          </div>
        </section>

        {/* Take the First Step */}
        <section className="bg-background-default py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 font-heading" style={{ color: '#383f51', fontFamily: 'var(--font-open-sans), "Open Sans", sans-serif' }}>
              Take the First Step
            </h2>
            <p className="text-lg md:text-xl mb-8" style={{ color: '#383f51', fontFamily: 'var(--font-lato), "Lato", sans-serif' }}>
              Your healing journey begins with one conversation.
            </p>
            <a 
              href="https://shelly-eisenstadt.clientsecure.me" 
              className="spwidget-button inline-block px-10 py-3.5 rounded-full text-sm font-semibold transition-colors font-sans hover:opacity-90"
              style={{ color: '#f4f3ee', backgroundColor: '#383f51', fontFamily: 'var(--font-lato), Lato, sans-serif' }}
              data-spwidget-scope-id="f051a415-c531-4be3-99c8-807ad6df8c3f" 
              data-spwidget-scope-uri="shelly-eisenstadt" 
              data-spwidget-application-id="7c72cb9f9a9b913654bb89d6c7b4e71a77911b30192051da35384b4d0c6d505b" 
              data-spwidget-type="OAR" 
              data-spwidget-scope-global 
              data-spwidget-autobind
            >
              Schedule a Consultation
            </a>
          </div>
        </section>

        {/* Our Location Section */}
        <section className="bg-background-default py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 font-heading" style={{ color: '#383f51', fontFamily: 'var(--font-open-sans), "Open Sans", sans-serif' }}>
              Our Location
            </h2>
            <p className="text-lg md:text-xl leading-relaxed" style={{ color: '#383f51', fontFamily: 'var(--font-lato), "Lato", sans-serif' }}>
              Visit us for compassionate therapy and support tailored for women and families navigating life&apos;s challenges.
            </p>
          </div>
        </section>

        {/* Client Feedback Section - Purple Background */}
        <section className="bg-background-muted py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
              {/* Testimonial 1 */}
              <div className="flex flex-col items-center text-center">
                {/* Stars at top */}
                <div className="flex items-center justify-center mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-2xl">★</span>
                  ))}
                </div>
                {/* Quote */}
                <p className="text-base md:text-lg italic leading-relaxed mb-8" style={{ color: '#383f51', fontFamily: 'var(--font-lato), "Lato", sans-serif' }}>
                  &quot;Forward Together has been a lifeline for me during my postpartum journey.&quot;
                </p>
                {/* Picture and name */}
                <div className="flex items-center justify-center gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src="/images/IMG_2286.jpeg"
                      alt="Emily J."
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>
                  <div className="text-left">
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
              <div className="flex flex-col items-center text-center">
                {/* Stars at top */}
                <div className="flex items-center justify-center mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-2xl">★</span>
                  ))}
                </div>
                {/* Quote */}
                <p className="text-base md:text-lg italic leading-relaxed mb-8" style={{ color: '#383f51', fontFamily: 'var(--font-lato), "Lato", sans-serif' }}>
                  &quot;The support I received helped me navigate my grief and anxiety beautifully.&quot;
                </p>
                {/* Picture and name */}
                <div className="flex items-center justify-center gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src="/images/IMG_2281.jpeg"
                      alt="Sarah M."
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>
                  <div className="text-left">
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
