import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { aboutContent } from '@/lib/constants';
import { siteConfig } from '@/lib/site-config';

export default function About() {
  return (
    <div className="min-h-screen bg-background-default flex flex-col">
      <Header />
      
      <main className="flex-grow py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-left font-heading" style={{ color: '#383f51' }}>
            About Forward Together
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-semibold mb-6 font-heading text-left" style={{ color: '#383f51' }}>
              {aboutContent.heading}
            </h2>
            <p className="text-lg leading-relaxed mb-6 text-left" style={{ color: '#383f51' }}>
              {aboutContent.text}
            </p>

            <div className="mt-12 bg-background-muted rounded-lg p-8 md:p-10 text-left">
              <h3 className="text-2xl font-semibold mb-4 font-heading" style={{ color: '#383f51' }}>
                {siteConfig.therapist.name}, {siteConfig.therapist.credentials}
              </h3>
              <p style={{ color: '#383f51' }}>
                I am a Licensed Clinical Social Worker (LCSW) dedicated to providing compassionate, 
                evidence-based therapy for women navigating life's challenges. My approach is warm, 
                collaborative, and tailored to your unique needs and goals.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
