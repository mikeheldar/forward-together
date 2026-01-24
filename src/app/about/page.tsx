import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { aboutContent } from '@/lib/constants';
import { siteConfig } from '@/lib/site-config';
import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen bg-background-default flex flex-col">
      <Header />
      
      <main className="flex-grow py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center font-heading" style={{ color: '#383f51' }}>
            Welcome to Forward Together Therapy
          </h1>
          
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-16">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              <div>
                <p className="text-base md:text-lg leading-relaxed mb-6" style={{ color: '#383f51' }}>
                  At Forward Together, we provide compassionate counseling for women, specializing in postpartum support, anxiety, and life transitions. Our goal is to foster healing and growth in a nurturing environment.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 font-heading" style={{ color: '#383f51' }}>
                  Our Mission
                </h2>
                <p className="text-base md:text-lg leading-relaxed" style={{ color: '#383f51' }}>
                  {aboutContent.text}
                </p>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative w-full aspect-[3/4] md:aspect-[4/5] rounded-xl overflow-hidden">
              <Image
                src="/images/IMG_2286.jpeg"
                alt="Person in red sweater holding baby's hand"
                fill
                className="object-cover object-center rounded-xl"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Who I Am Section */}
          <div className="bg-background-muted rounded-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 font-heading" style={{ color: '#383f51' }}>
              Who I Am
            </h2>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: '#383f51' }}>
              I am a Licensed Clinical Social Worker (LCSW) dedicated to providing compassionate, evidence-based therapy for women navigating life's challenges. I specialize in working with individuals experiencing anxiety, depression, and life stress, with a special focus on supporting women through pregnancy, postpartum, and the many phases of motherhood. My approach is warm, collaborative, and tailored to your unique needs and goals.
            </p>
          </div>

          {/* Testimonial */}
          <div className="mt-16 max-w-2xl mx-auto text-center">
            <div className="relative w-24 h-24 rounded-full overflow-hidden mx-auto mb-6">
              <Image
                src="/images/IMG_2281.jpeg"
                alt="Emily R."
                fill
                className="object-cover"
                sizes="96px"
              />
            </div>
            <p className="text-base md:text-lg italic leading-relaxed mb-4" style={{ color: '#383f51' }}>
              "Forward Together provided the support I needed during a challenging time. Highly recommend their services!"
            </p>
            <p className="font-semibold" style={{ color: '#3c4f76' }}>
              Emily R.
            </p>
            <div className="flex items-center justify-center mt-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-yellow-400 text-lg">★</span>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
