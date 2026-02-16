import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { aboutContent } from '@/lib/constants';
import { siteConfig } from '@/lib/site-config';
import Image from 'next/image';

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
              Welcome to Forward Together Therapy
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed" style={{ color: '#f4f3ee', fontFamily: 'var(--font-lato), "Lato", sans-serif' }}>
              At Forward Together, we provide compassionate counseling for women, specializing in postpartum support, anxiety, and life transitions. Our goal is to foster healing and growth in a nurturing environment.
            </p>
          </div>
        </section>

        {/* Our Mission & Who I Am Section */}
        <section className="bg-background-default py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
              {/* Our Mission */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading" style={{ color: '#383f51', fontFamily: 'var(--font-open-sans), "Open Sans", sans-serif' }}>
                  Our Mission
                </h2>
                <p className="text-base md:text-lg leading-relaxed" style={{ color: '#383f51', fontFamily: 'var(--font-lato), "Lato", sans-serif' }}>
                  {aboutContent.text}
                </p>
              </div>

              {/* Who I Am */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading" style={{ color: '#383f51', fontFamily: 'var(--font-open-sans), "Open Sans", sans-serif' }}>
                  Who I Am
                </h2>
                <p className="text-base md:text-lg leading-relaxed" style={{ color: '#383f51', fontFamily: 'var(--font-lato), "Lato", sans-serif' }}>
                  I specialize in working with individuals experiencing anxiety, depression, and life stress, with a special focus on supporting women through pregnancy, postpartum, and the many phases of motherhood.
                </p>
              </div>
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
                "Forward Together provided the support I needed during a challenging time. Highly recommend their services!"
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
