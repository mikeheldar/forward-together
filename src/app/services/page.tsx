import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { siteConfig } from '@/lib/site-config';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Women's Counseling Services | Postpartum, Anxiety & Life Transitions | Forward Together",
  description: `Explore specialized therapy services for women, including postpartum support, anxiety management, life transition counseling, and grief support in ${siteConfig.city}.`,
};

export default function Services() {
  return (
    <div className="min-h-screen bg-background-default flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Header Section */}
        <section className="bg-background-default py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight font-heading" style={{ color: '#383f51', fontFamily: 'var(--font-open-sans), "Open Sans", sans-serif' }}>
              Specialized Therapy Services for Women
            </h1>
            <p className="text-lg md:text-xl leading-relaxed" style={{ color: '#383f51', fontFamily: 'var(--font-lato), "Lato", sans-serif' }}>
              Supporting women through life&apos;s transitions with compassion and expertise. We specialize in postpartum support, anxiety, grief, and more, creating a safe space for healing and growth.
            </p>
          </div>
        </section>

        {/* Services Sections */}
        <section className="bg-background-default py-8 md:py-16">
          <div className="max-w-5xl mx-auto px-6 md:px-8 space-y-16 md:space-y-24">
            {/* Postpartum & Motherhood Support */}
            <div>
              <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden mb-8">
                <Image
                  src="/images/IMG_2286.jpeg"
                  alt="Mother holding baby - postpartum support therapy in Atlanta"
                  fill
                  className="object-cover rounded-xl"
                  sizes="(max-width: 768px) 100vw, 80vw"
                />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading" style={{ color: '#383f51', fontFamily: 'var(--font-open-sans), "Open Sans", sans-serif' }}>
                Postpartum & Motherhood Support
              </h2>
              <p className="text-base md:text-lg leading-relaxed" style={{ color: '#383f51', fontFamily: 'var(--font-lato), "Lato", sans-serif' }}>
                Motherhood is transformative, filled with joy and challenge. Receive compassionate guidance and practical tools to support your emotional well-being during this time.
              </p>
            </div>

            {/* Anxiety & Stress Counseling */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading" style={{ color: '#383f51', fontFamily: 'var(--font-open-sans), "Open Sans", sans-serif' }}>
                Anxiety & Stress Counseling
              </h2>
              <p className="text-base md:text-lg leading-relaxed" style={{ color: '#383f51', fontFamily: 'var(--font-lato), "Lato", sans-serif' }}>
                Manage anxiety and stress with personalized strategies designed to help you feel grounded and in control.
              </p>
            </div>

            {/* Life Transitions Therapy */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading" style={{ color: '#383f51', fontFamily: 'var(--font-open-sans), "Open Sans", sans-serif' }}>
                Life Transitions Therapy
              </h2>
              <p className="text-base md:text-lg leading-relaxed" style={{ color: '#383f51', fontFamily: 'var(--font-lato), "Lato", sans-serif' }}>
                Navigate major life changes such as career shifts, relationship changes, and personal reinvention with confidence and resilience.
              </p>
            </div>

            {/* Grief & Loss Support */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading" style={{ color: '#383f51', fontFamily: 'var(--font-open-sans), "Open Sans", sans-serif' }}>
                Grief & Loss Support
              </h2>
              <p className="text-base md:text-lg leading-relaxed" style={{ color: '#383f51', fontFamily: 'var(--font-lato), "Lato", sans-serif' }}>
                Find gentle support to process grief, honor your feelings, and heal in a safe, understanding environment.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-background-muted py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 font-heading" style={{ color: '#383f51', fontFamily: 'var(--font-open-sans), "Open Sans", sans-serif' }}>
              Learn More or Get Started
            </h2>
            <Link
              href="/contact"
              className="inline-block px-10 py-3.5 rounded-full text-sm font-semibold transition-colors hover:opacity-90 font-sans"
              style={{ color: '#f4f3ee', backgroundColor: '#383f51', fontFamily: 'var(--font-lato), Lato, sans-serif' }}
            >
              Contact Us to Begin Your Journey
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
