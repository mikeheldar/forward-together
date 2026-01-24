import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/lib/site-config';
import { testimonials, aboutContent } from '@/lib/constants';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section with Background Image */}
        <section className="relative bg-[#284c61] py-32 md:py-40 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/intro-background.jpg"
              alt="Therapy room background"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </div>
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-[#284c61]/70 z-0"></div>
          
          {/* Content */}
          <div className="relative z-10 container mx-auto px-6 md:px-8 max-w-7xl">
            <div className="flex flex-col items-center justify-center text-center py-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Forward Together
              </h1>
              <p className="text-xl md:text-2xl text-white mb-10 max-w-3xl mx-auto px-4">
                Compassionate counseling for women at every life stage.
              </p>
              <div className="flex justify-center">
                <Button href="/contact" variant="primary" size="lg">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-gray-50 py-20 md:py-28">
          <div className="container mx-auto px-6 md:px-8 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
              {/* Postpartum Support */}
              <div className="bg-white rounded-lg p-8 md:p-10 shadow-sm">
                <h3 className="text-2xl font-semibold text-[#284c61] mb-4">
                  Postpartum Support
                </h3>
                <p className="text-gray-700 mb-4">
                  Guidance through motherhood and emotional challenges.
                </p>
                <p className="text-gray-600">
                  With support and the right tools, you can learn to quiet your mind and move forward with confidence.
                </p>
                <p className="text-gray-600 mt-4">
                  Change can be overwhelming—but you don't have to navigate it alone.
                </p>
              </div>

              {/* Anxiety Relief */}
              <div className="bg-white rounded-lg p-8 md:p-10 shadow-sm">
                <h3 className="text-2xl font-semibold text-[#284c61] mb-4">
                  Anxiety Relief
                </h3>
                <p className="text-gray-700 mb-4">
                  Expert support for managing anxiety and stress.
                </p>
                <p className="text-gray-600">
                  Learn effective strategies to manage anxiety and find peace in your daily life.
                </p>
              </div>

              {/* Life Transitions */}
              <div className="bg-white rounded-lg p-8 md:p-10 shadow-sm">
                <h3 className="text-2xl font-semibold text-[#284c61] mb-4">
                  Life Transitions
                </h3>
                <p className="text-gray-700 mb-4">
                  Support through life's major changes and challenges.
                </p>
                <p className="text-gray-600">
                  Navigate career changes, relationships, and personal growth with confidence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="bg-white py-20 md:py-28">
          <div className="container mx-auto px-6 md:px-8 max-w-4xl">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-[#284c61] mb-8">
                Who We Are
              </h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl">
                We offer support with postpartum, anxiety, grief, and family dynamics. Compassionate therapy for women navigating life's transitions.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-gray-50 py-20 md:py-28">
          <div className="container mx-auto px-6 md:px-8 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#284c61] mb-16 text-center">
              What Clients Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
              {testimonials.map((testimonial, index) => {
                // Use different images for each testimonial if available
                const testimonialImages = [
                  '/images/IMG_2291.jpeg',
                  '/images/IMG_2294.jpeg',
                ];
                return (
                  <div key={testimonial.id} className="bg-white rounded-lg overflow-hidden shadow-sm flex flex-col">
                    <div className="relative w-full h-64 md:h-72">
                      <Image
                        src={testimonialImages[index] || '/images/IMG_2291.jpeg'}
                        alt={`${testimonial.author} testimonial`}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <div className="p-8 md:p-10 flex flex-col flex-grow">
                      <div className="flex items-center mb-4">
                        {Array.from({ length: testimonial.rating || 5 }).map((_, i) => (
                          <span key={i} className="text-yellow-400 text-xl">★</span>
                        ))}
                      </div>
                      <p className="text-gray-700 mb-6 italic flex-grow leading-relaxed">
                        "{testimonial.quote}"
                      </p>
                      <p className="text-gray-600 font-semibold">
                        — {testimonial.author}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
