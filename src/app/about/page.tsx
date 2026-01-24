import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { aboutContent } from '@/lib/constants';
import { siteConfig } from '@/lib/site-config';

export default function About() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-grow py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-[#284c61] mb-8 text-center">
              About Forward Together
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-semibold text-[#284c61] mb-6">
                {aboutContent.heading}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {aboutContent.text}
              </p>

              <div className="mt-12 bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-semibold text-[#284c61] mb-4">
                  {siteConfig.therapist.name}, {siteConfig.therapist.credentials}
                </h3>
                <p className="text-gray-700">
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

