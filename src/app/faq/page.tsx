'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { faqItems } from '@/lib/constants';
import { useState } from 'react';

function FAQItem({ item, defaultOpen }: { item: typeof faqItems[0], defaultOpen: boolean }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-neutral-300 py-6 rounded-lg">
      {/* Collapsible button for all screen sizes */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left flex justify-between items-center"
      >
        <h3 className="text-lg md:text-xl font-semibold pr-4 font-heading" style={{ color: '#383f51', fontFamily: 'var(--font-open-sans), "Open Sans", sans-serif' }}>
          {item.question}
        </h3>
        <span className="text-2xl flex-shrink-0" style={{ color: '#3c4f76' }}>
          {isOpen ? '▼' : '▶'}
        </span>
      </button>

      {/* Answer - shown when open */}
      <div className={`${isOpen ? 'block' : 'hidden'} mt-6 leading-relaxed text-left rounded-lg text-base md:text-lg`} style={{ color: '#383f51', fontFamily: 'var(--font-lato), "Lato", sans-serif' }}>
        <p>{item.answer}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <div className="min-h-screen bg-background-default flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Header Section */}
        <section className="bg-background-default py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 font-heading" style={{ color: '#383f51', fontFamily: 'var(--font-open-sans), "Open Sans", sans-serif' }}>
              Frequently Asked Questions
            </h1>
            <p className="text-lg md:text-xl leading-relaxed" style={{ color: '#383f51', fontFamily: 'var(--font-lato), "Lato", sans-serif' }}>
              Find answers to common questions about our therapy services, insurance, and getting started.
            </p>
          </div>
        </section>

        {/* FAQ Items Section */}
        <section className="bg-background-default pb-16 md:pb-24">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <div className="bg-white rounded-lg shadow-sm p-6 md:p-10">
              {faqItems.map((item, index) => (
                <FAQItem key={item.id} item={item} defaultOpen={false} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
