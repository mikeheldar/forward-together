import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { siteConfig } from '@/lib/site-config';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `About Shelly Eisenstadt, LCSW | Women's Therapy Specialist in ${siteConfig.city}`,
  description: `Meet Shelly Eisenstadt, LCSW, a compassionate therapist specializing in maternal mental health, anxiety, and life transitions for women in ${siteConfig.city}. Learn more about her approach.`,
};

export default function About() {
  return (
    <div className="min-h-screen bg-background-default flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section with Image Background */}
        <section className="relative bg-primary-500 min-h-[500px] md:min-h-[600px] flex items-center justify-center">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/IMG_2286.jpeg"
              alt="Person in red sweater holding baby's hand"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </div>
          {/* Overlay */}
          <div className="absolute inset-0 bg-accent-500/40 z-0"></div>
          
          {/* Content */}
          <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight font-heading" style={{ color: '#f4f3ee', fontFamily: 'var(--font-open-sans), "Open Sans", sans-serif' }}>
              Meet Shelly Eisenstadt, {siteConfig.therapist.credentials}
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed" style={{ color: '#f4f3ee', fontFamily: 'var(--font-lato), "Lato", sans-serif' }}>
              At Forward Together, we provide compassionate counseling for women, specializing in postpartum support, anxiety, and life transitions. Our goal is to foster healing and growth in a nurturing environment.
            </p>
          </div>
        </section>

        {/* Main Content Section with Headshot */}
        <section className="bg-background-default py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            {/* TODO: Replace with shelly-headshot.jpg when available */}
            <div className="flex justify-center mb-12">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-xl overflow-hidden">
                <Image
                  src="/images/IMG_2286.jpeg"
                  alt="Shelly Eisenstadt, LCSW - therapist counseling women in Atlanta"
                  fill
                  className="object-cover rounded-xl"
                  sizes="320px"
                />
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading" style={{ color: '#383f51', fontFamily: 'var(--font-open-sans), "Open Sans", sans-serif' }}>
              Therapy Tailored to Women&apos;s Unique Journeys
            </h2>
            <p className="text-base md:text-lg leading-relaxed mb-12" style={{ color: '#383f51', fontFamily: 'var(--font-lato), "Lato", sans-serif' }}>
              I believe healing happens when you feel truly seen, heard, and supported. My approach blends empathy with evidence-based methods tailored to your unique needs, creating a collaborative and safe space for growth.
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading" style={{ color: '#383f51', fontFamily: 'var(--font-open-sans), "Open Sans", sans-serif' }}>
              About Shelly
            </h2>
            <p className="text-base md:text-lg leading-relaxed mb-12" style={{ color: '#383f51', fontFamily: 'var(--font-lato), "Lato", sans-serif' }}>
              With specialized training in maternal mental health, anxiety, grief, and life transitions, I have the experience to guide women through pivotal moments. Whether you&apos;re a new mother or facing a significant life change, I&apos;m here to help you discover your resilience and clarity.
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading" style={{ color: '#383f51', fontFamily: 'var(--font-open-sans), "Open Sans", sans-serif' }}>
              How I Work
            </h2>
            <ul className="list-disc pl-6 space-y-4 mb-12" style={{ color: '#383f51', fontFamily: 'var(--font-lato), "Lato", sans-serif' }}>
              <li className="text-base md:text-lg leading-relaxed">Collaborative goal-setting focused on your values.</li>
              <li className="text-base md:text-lg leading-relaxed">Evidence-based practices like CBT and mindfulness.</li>
              <li className="text-base md:text-lg leading-relaxed">Compassionate support at your pace.</li>
            </ul>

            <div className="text-center">
              <a 
                href="https://shelly-eisenstadt.clientsecure.me" 
                className="spwidget-button inline-block px-10 py-3.5 rounded-full text-sm font-semibold transition-colors font-sans"
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
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="bg-background-muted py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-6 md:px-8">
            <div className="text-center">
              {/* Stars at top */}
              <div className="flex items-center justify-center mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">★</span>
                ))}
              </div>
              {/* Quote */}
              <p className="text-lg md:text-xl italic leading-relaxed mb-8" style={{ color: '#383f51', fontFamily: 'var(--font-lato), "Lato", sans-serif' }}>
                &quot;Forward Together provided the support I needed during a challenging time. Highly recommend their services!&quot;
              </p>
              {/* Picture and name */}
              <div className="flex items-center justify-center gap-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src="/images/IMG_2281.jpeg"
                    alt="Emily R."
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <p className="font-semibold text-lg" style={{ color: '#3c4f76', fontFamily: 'var(--font-lato), "Lato", sans-serif' }}>
                  Emily R.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Image Section */}
        <section className="bg-background-default py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-6 md:px-8">
            <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-xl overflow-hidden">
              <Image
                src="/images/intro-background.jpg"
                alt="A living room with two chairs and a couch"
                fill
                className="object-cover rounded-xl"
                sizes="(max-width: 768px) 100vw, 80vw"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
