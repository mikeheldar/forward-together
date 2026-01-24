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
        <section className="relative bg-[#284c61] min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/intro-background.jpg"
              alt="A living room with two chairs and a couch"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </div>
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-[#284c61]/70 z-0"></div>
          
          {/* Content */}
          <div className="relative z-10 container mx-auto px-6 md:px-8 max-w-5xl">
            <div className="flex flex-col items-center justify-center text-center py-16 md:py-20">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                Forward Together
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl text-white mb-12 max-w-3xl mx-auto leading-relaxed">
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
        <section className="bg-gray-50 py-24 md:py-32">
          <div className="container mx-auto px-6 md:px-8 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
              {/* Postpartum Support */}
              <div className="bg-white rounded-lg p-10 md:p-12 shadow-sm text-center">
                <h3 className="text-2xl md:text-3xl font-semibold text-[#284c61] mb-6">
                  Postpartum Support
                </h3>
                <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                  Guidance through motherhood and emotional challenges.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  With support and the right tools, you can learn to quiet your mind and move forward with confidence.
                </p>
                <p className="text-gray-600 mt-6 leading-relaxed">
                  Change can be overwhelming—but you don't have to navigate it alone.
                </p>
              </div>

              {/* Anxiety Relief */}
              <div className="bg-white rounded-lg p-10 md:p-12 shadow-sm text-center">
                <h3 className="text-2xl md:text-3xl font-semibold text-[#284c61] mb-6">
                  Anxiety Relief
                </h3>
                <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                  Expert support for managing anxiety and stress.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Learn effective strategies to manage anxiety and find peace in your daily life.
                </p>
              </div>

              {/* Life Transitions */}
              <div className="bg-white rounded-lg p-10 md:p-12 shadow-sm text-center">
                <h3 className="text-2xl md:text-3xl font-semibold text-[#284c61] mb-6">
                  Life Transitions
                </h3>
                <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                  Support through life's major changes and challenges.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Navigate career changes, relationships, and personal growth with confidence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="bg-white py-24 md:py-32">
          <div className="container mx-auto px-6 md:px-8 max-w-4xl">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-[#284c61] mb-10">
                Who We Are
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-3xl">
                We offer support with postpartum, anxiety, grief, and family dynamics. Compassionate therapy for women navigating life's transitions.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-gray-50 py-24 md:py-32">
          <div className="container mx-auto px-6 md:px-8 max-w-6xl">
            <h2 className="text-4xl md:text-5xl font-bold text-[#284c61] mb-20 text-center">
              What Clients Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
              {testimonials.map((testimonial, index) => {
                // Use different images for each testimonial if available
                const testimonialImages = [
                  '/images/IMG_2291.jpeg',
                  '/images/IMG_2294.jpeg',
                ];
                return (
                  <div key={testimonial.id} className="bg-white rounded-lg overflow-hidden shadow-sm flex flex-col">
                    <div className="relative w-full aspect-[4/3]">
                      <Image
                        src={testimonialImages[index] || '/images/IMG_2291.jpeg'}
                        alt={`${testimonial.author} testimonial`}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <div className="p-10 md:p-12 flex flex-col flex-grow">
                      <div className="flex items-center justify-center mb-6">
                        {Array.from({ length: testimonial.rating || 5 }).map((_, i) => (
                          <span key={i} className="text-yellow-400 text-2xl">★</span>
                        ))}
                      </div>
                      <p className="text-gray-700 mb-8 italic flex-grow leading-relaxed text-lg text-center">
                        "{testimonial.quote}"
                      </p>
                      <p className="text-gray-600 font-semibold text-center text-lg">
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
