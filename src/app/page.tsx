import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { siteConfig } from '@/lib/site-config';
import { testimonials } from '@/lib/constants';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Therapy for Women in ${siteConfig.city} | Postpartum & Anxiety Support | Forward Together`,
  description: `Forward Together offers compassionate therapy for women in ${siteConfig.city}, specializing in postpartum support, anxiety relief, and life transitions. Begin your healing journey today.`,
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background-default flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section with Background Image */}
        <section className="relative bg-primary-500 min-h-[600px] md:min-h-[700px] flex items-center justify-center pb-32 md:pb-40 rounded-lg">
          {/* Background Image */}
          <div className="absolute inset-0 z-0 rounded-lg overflow-hidden">
            <Image
              src="/images/intro-background.jpg"
              alt="A living room with two chairs and a couch"
              fill
              className="object-cover rounded-lg"
              priority
              sizes="100vw"
            />
          </div>
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-accent-500/30 z-0 rounded-lg"></div>
          
          {/* Content */}
          <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-8">
            <div className="flex flex-col items-center text-center py-16 md:py-20">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight font-heading" style={{ color: '#f4f3ee', fontFamily: 'var(--font-open-sans), "Open Sans", sans-serif' }}>
                Therapy for Women — Support at Every Stage of Life
              </h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6 font-heading" style={{ color: '#f4f3ee', fontFamily: 'var(--font-open-sans), "Open Sans", sans-serif' }}>
                You Don&apos;t Have to Walk This Journey Alone
              </h2>
              <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-sans" style={{ color: '#f4f3ee', marginBottom: '20px', fontFamily: 'var(--font-lato), "Lato", sans-serif' }}>
                Life brings seasons of joy, challenge, and change — sometimes all at once. Whether you&apos;re adjusting to new motherhood, managing anxiety, navigating grief, or facing a major life transition, Forward Together is here to support you with empathy and practical tools in a safe, welcoming space.
              </p>
              <div className="flex justify-center" style={{ marginBottom: '20px' }}>
                <div className="spwidget-button-wrapper">
                  <a 
                    href="https://shelly-eisenstadt.clientsecure.me" 
                    className="spwidget-button" 
                    data-spwidget-scope-id="f051a415-c531-4be3-99c8-807ad6df8c3f" 
                    data-spwidget-scope-uri="shelly-eisenstadt" 
                    data-spwidget-application-id="7c72cb9f9a9b913654bb89d6c7b4e71a77911b30192051da35384b4d0c6d505b" 
                    data-spwidget-type="OAR" 
                    data-spwidget-scope-global 
                    data-spwidget-autobind
                  >
                    Schedule a Free Consultation
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Services Boxes - Floating over the background */}
          <div className="absolute bottom-[10%] md:bottom-[40%] left-0 right-0 z-20 w-full md:-translate-y-[20px]">
            <div className="w-full flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 max-w-6xl px-6 md:px-8">
                {/* Postpartum Support */}
                <div className="backdrop-blur-sm rounded-lg p-10 md:p-12 shadow-sm text-center" style={{ backgroundColor: 'rgba(230, 220, 190, 0.2)', border: '1px solid rgba(244, 243, 238, 0.3)' }}>
                  <h3 className="text-xl md:text-2xl font-semibold mb-6 font-heading" style={{ color: '#f4f3ee', fontFamily: 'var(--font-open-sans), "Open Sans", sans-serif' }}>
                    Postpartum Support
                  </h3>
                  <p className="mb-4 text-lg leading-relaxed" style={{ color: '#f4f3ee', fontFamily: 'var(--font-lato), "Lato", sans-serif' }}>
                    Guidance through motherhood and emotional challenges.
                  </p>
                </div>

                {/* Anxiety Relief */}
                <div className="backdrop-blur-sm rounded-lg p-10 md:p-12 shadow-sm text-center" style={{ backgroundColor: 'rgba(230, 220, 190, 0.2)', border: '1px solid rgba(244, 243, 238, 0.3)' }}>
                  <h3 className="text-xl md:text-2xl font-semibold mb-6 font-heading" style={{ color: '#f4f3ee', fontFamily: 'var(--font-open-sans), "Open Sans", sans-serif' }}>
                    Anxiety Relief
                  </h3>
                  <p className="mb-4 text-lg leading-relaxed" style={{ color: '#f4f3ee', fontFamily: 'var(--font-lato), "Lato", sans-serif' }}>
                    With support and the right tools, you can learn to quiet your mind and move forward with confidence.
                  </p>
                </div>

                {/* Life Transitions */}
                <div className="backdrop-blur-sm rounded-lg p-10 md:p-12 shadow-sm text-center" style={{ backgroundColor: 'rgba(230, 220, 190, 0.2)', border: '1px solid rgba(244, 243, 238, 0.3)' }}>
                  <h3 className="text-xl md:text-2xl font-semibold mb-6 font-heading" style={{ color: '#f4f3ee', fontFamily: 'var(--font-open-sans), "Open Sans", sans-serif' }}>
                    Life Transitions
                  </h3>
                  <p className="mb-4 text-lg leading-relaxed" style={{ color: '#f4f3ee', fontFamily: 'var(--font-lato), "Lato", sans-serif' }}>
                    Change can be overwhelming—but you don&apos;t have to navigate it alone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Spacer section to account for the floating boxes */}
        <section className="bg-background-default w-full rounded-lg">
        </section>

        {/* Who We Are Section */}
        <section className="bg-background-default w-full" style={{ paddingTop: '40px', paddingBottom: '40px', paddingLeft: '20px', paddingRight: '20px' }}>
          <div className="max-w-7xl mx-auto w-full">
            {/* Mobile: Stacked Layout */}
            <div className="md:hidden space-y-6">
              <div className="flex flex-col items-center text-center">
                <h2 className="text-3xl font-bold mb-6 font-heading" style={{ color: '#383f51', fontFamily: 'var(--font-open-sans), "Open Sans", sans-serif' }}>
                  Who We Are
                </h2>
                <p className="text-base leading-relaxed" style={{ color: '#383f51', fontFamily: 'var(--font-lato), "Lato", sans-serif' }}>
                  We offer support with postpartum, anxiety, grief, and family dynamics. Compassionate therapy for women navigating life&apos;s transitions.
                </p>
              </div>
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
                <Image
                  src="/images/IMG_2286.jpeg"
                  alt="Woman with laptop in comfortable setting"
                  fill
                  className="object-cover object-center rounded-xl"
                  sizes="100vw"
                />
              </div>
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
                <Image
                  src="/images/IMG_2281.jpeg"
                  alt="Supportive connection and community"
                  fill
                  className="object-cover object-center rounded-xl"
                  sizes="100vw"
                />
              </div>
            </div>

            {/* Desktop: Image - Text - Image Layout */}
            <div className="hidden md:grid md:grid-cols-3 gap-8 lg:gap-12 items-center">
              {/* Left Image */}
              <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden">
                <Image
                  src="/images/IMG_2286.jpeg"
                  alt="Woman with laptop in comfortable setting"
                  fill
                  className="object-cover object-center rounded-xl"
                  sizes="33vw"
                />
              </div>

              {/* Center Text Block */}
              <div className="flex flex-col items-center text-center">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 font-heading" style={{ color: '#383f51', fontFamily: 'var(--font-open-sans), "Open Sans", sans-serif' }}>
                  Who We Are
                </h2>
                <p className="text-base lg:text-lg leading-relaxed" style={{ color: '#383f51', fontFamily: 'var(--font-lato), "Lato", sans-serif' }}>
                  We offer support with postpartum, anxiety, grief, and family dynamics. Compassionate therapy for women navigating life&apos;s transitions.
                </p>
              </div>

              {/* Right Image */}
              <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden">
                <Image
                  src="/images/IMG_2281.jpeg"
                  alt="Supportive connection and community"
                  fill
                  className="object-cover object-center rounded-xl"
                  sizes="33vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Services Section */}
        <section className="bg-background-default py-16 md:py-24 w-full">
          <div className="max-w-5xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-heading" style={{ color: '#383f51', fontFamily: 'var(--font-open-sans), "Open Sans", sans-serif' }}>
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-4 font-heading" style={{ color: '#383f51', fontFamily: 'var(--font-open-sans), "Open Sans", sans-serif' }}>
                  Postpartum & Motherhood Support
                </h3>
                <p className="text-base leading-relaxed" style={{ color: '#383f51', fontFamily: 'var(--font-lato), "Lato", sans-serif' }}>
                  Guidance and emotional care to help you navigate the early months of motherhood and beyond.
                </p>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-4 font-heading" style={{ color: '#383f51', fontFamily: 'var(--font-open-sans), "Open Sans", sans-serif' }}>
                  Anxiety & Stress Counseling
                </h3>
                <p className="text-base leading-relaxed" style={{ color: '#383f51', fontFamily: 'var(--font-lato), "Lato", sans-serif' }}>
                  Personalized strategies to calm your mind, reduce stress, and restore balance.
                </p>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-4 font-heading" style={{ color: '#383f51', fontFamily: 'var(--font-open-sans), "Open Sans", sans-serif' }}>
                  Life Transitions Therapy
                </h3>
                <p className="text-base leading-relaxed" style={{ color: '#383f51', fontFamily: 'var(--font-lato), "Lato", sans-serif' }}>
                  Support through life&apos;s milestones, changes, and new beginnings.
                </p>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-4 font-heading" style={{ color: '#383f51', fontFamily: 'var(--font-open-sans), "Open Sans", sans-serif' }}>
                  Grief & Loss Support
                </h3>
                <p className="text-base leading-relaxed" style={{ color: '#383f51', fontFamily: 'var(--font-lato), "Lato", sans-serif' }}>
                  A compassionate environment to process loss and begin healing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-background-muted py-16 md:py-24 w-full rounded-lg">
          <div className="max-w-6xl mx-auto px-6 md:px-8 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
              {testimonials.map((testimonial) => {
                return (
                  <div key={testimonial.id} className="flex flex-col items-center text-center">
                    {/* Stars at the top - centered */}
                    <div className="flex items-center justify-center mb-6">
                      {Array.from({ length: testimonial.rating || 5 }).map((_, i) => (
                        <span key={i} className="text-yellow-400 text-2xl">★</span>
                      ))}
                    </div>
                    {/* Quote in the middle - centered */}
                    <p className="mb-8 italic leading-relaxed text-base md:text-lg" style={{ color: '#383f51', fontFamily: 'var(--font-lato), "Lato", sans-serif' }}>
                      {testimonial.quote}
                    </p>
                    {/* Picture and name at the bottom - centered */}
                    <div className="flex items-center justify-center gap-4">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src={testimonial.image || '/images/IMG_2286.jpeg'}
                          alt={testimonial.author}
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                      </div>
                      <div className="text-left">
                        <p className="font-semibold text-base md:text-lg" style={{ color: '#3c4f76', fontFamily: 'var(--font-lato), "Lato", sans-serif' }}>
                          {testimonial.author}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="text-center mt-12">
              <a
                href={siteConfig.psychologyTodayUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 rounded-lg text-sm font-semibold transition-colors hover:opacity-90 font-sans"
                style={{ color: '#f4f3ee', backgroundColor: '#3c4f76', fontFamily: 'var(--font-lato), Lato, sans-serif' }}
              >
                Read more reviews on Psychology Today
              </a>
            </div>
          </div>
        </section>

        {/* Ready to Take the First Step */}
        <section className="bg-background-default py-16 md:py-24 w-full">
          <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 font-heading" style={{ color: '#383f51', fontFamily: 'var(--font-open-sans), "Open Sans", sans-serif' }}>
              Ready to Take the First Step?
            </h2>
            <p className="text-lg md:text-xl mb-8" style={{ color: '#383f51', fontFamily: 'var(--font-lato), "Lato", sans-serif' }}>
              Let&apos;s move forward together.
            </p>
            <div className="spwidget-button-wrapper">
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
                Schedule a Free Consultation
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
