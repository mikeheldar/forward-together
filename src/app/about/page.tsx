import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { aboutContent } from '@/lib/constants';
import { siteConfig } from '@/lib/site-config';

export default function About() {
  return (
    <div className="min-h-screen bg-background-default flex flex-col">
      <Header />
      
      <main className="flex-grow py-16 md:py-24">
        <div className="w-full max-w-6xl mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-600 mb-8 text-left font-serif">
              About Forward Together
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-semibold text-primary-600 mb-6 font-serif text-left">
                {aboutContent.heading}
              </h2>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6 text-left">
                {aboutContent.text}
              </p>

              <div className="mt-12 bg-neutral-50 rounded-lg p-8 md:p-10 text-left">
                <h3 className="text-2xl font-semibold text-primary-600 mb-4 font-serif">
                  {siteConfig.therapist.name}, {siteConfig.therapist.credentials}
                </h3>
                <p className="text-neutral-700">
                  I am a Licensed Clinical Social Worker (LCSW) dedicated to providing compassionate, 
                  evidence-based therapy for women navigating life's challenges. My approach is warm, 
                  collaborative, and tailored to your unique needs and goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
