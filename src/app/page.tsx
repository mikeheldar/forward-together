import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/lib/site-config';
import { testimonials, aboutContent } from '@/lib/constants';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-background-default flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section with Background Image */}
        <section className="relative bg-primary-700 min-h-[600px] md:min-h-[700px] flex items-center justify-center pb-32 md:pb-40">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
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
          <div className="absolute inset-0 bg-secondary-500/60 z-0"></div>
          
          {/* Content */}
          <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-8">
            <div className="flex flex-col items-center text-center py-16 md:py-20">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight font-heading">
                Forward Together
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl text-white mb-12 max-w-3xl mx-auto leading-relaxed font-sans">
                Compassionate counseling for women at every life stage.
              </p>
              <div className="flex justify-center">
                <Button 
                  href="/contact" 
                  variant="primary" 
                  size="lg"
                  className="border-2 border-white"
                >
                  Request Appointment
                </Button>
              </div>
            </div>
          </div>

          {/* Services Boxes - Floating over the background */}
          <div className="absolute bottom-[40%] left-0 right-0 z-20 w-full -translate-y-[40px]">
            <div className="w-full flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 max-w-6xl px-6 md:px-8">
                {/* Postpartum Support */}
                <div className="bg-secondary-500/50 backdrop-blur-sm rounded-lg p-10 md:p-12 shadow-sm text-center border border-white/30">
                  <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6 font-heading">
                    Postpartum Support
                  </h3>
                  <p className="text-white/90 mb-4 text-lg leading-relaxed">
                    Guidance through motherhood and emotional challenges.
                  </p>
                </div>

                {/* Anxiety Relief */}
                <div className="bg-secondary-500/50 backdrop-blur-sm rounded-lg p-10 md:p-12 shadow-sm text-center border border-white/30">
                  <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6 font-heading">
                    Anxiety Relief
                  </h3>
                  <p className="text-white/90 mb-4 text-lg leading-relaxed">
                    With support and the right tools, you can learn to quiet your mind and move forward with confidence.
                  </p>
                </div>

                {/* Life Transitions */}
                <div className="bg-secondary-500/50 backdrop-blur-sm rounded-lg p-10 md:p-12 shadow-sm text-center border border-white/30">
                  <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6 font-heading">
                    Life Transitions
                  </h3>
                  <p className="text-white/90 mb-4 text-lg leading-relaxed">
                    Change can be overwhelming—but you don't have to navigate it alone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Spacer section to account for the floating boxes */}
        <section className="bg-white pt-24 md:pt-32 w-full">
        </section>

        {/* Who We Are Section - Three Column Layout */}
        <section className="bg-white py-32 md:py-40 w-full">
          <div className="max-w-7xl mx-auto px-6 md:px-8 w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
              {/* Left Image */}
              <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden">
                <Image
                  src="/images/IMG_2286.jpeg"
                  alt="Woman with laptop in comfortable setting"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Center Text Block */}
              <div className="flex flex-col items-start text-left px-4 md:px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-primary-600 mb-6 md:mb-8 font-heading">
                  Who We Are
                </h2>
                <p className="text-lg md:text-xl lg:text-2xl text-neutral-700 leading-relaxed">
                  We offer support with postpartum, anxiety, grief, and family dynamics. Compassionate therapy for women navigating life's transitions.
                </p>
              </div>

              {/* Right Image */}
              <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden">
                <Image
                  src="/images/IMG_2281.jpeg"
                  alt="Supportive connection and community"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-neutral-50 py-32 md:py-40 w-full">
          <div className="max-w-6xl mx-auto px-6 md:px-8 w-full">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-600 mb-20 text-left font-heading">
              What Clients Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
              {testimonials.map((testimonial) => {
                return (
                  <div key={testimonial.id} className="bg-white rounded-xl shadow-sm flex flex-col p-10 md:p-12">
                    <div className="flex items-center justify-center mb-6">
                      {Array.from({ length: testimonial.rating || 5 }).map((_, i) => (
                        <span key={i} className="text-yellow-400 text-2xl">★</span>
                      ))}
                    </div>
                    <p className="text-neutral-700 mb-8 italic flex-grow leading-relaxed text-lg text-left">
                      "{testimonial.quote}"
                    </p>
                    <p className="text-neutral-600 font-semibold text-left text-lg">
                      — {testimonial.author}
                    </p>
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
