'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { faqItems } from '@/lib/constants';
import { useState } from 'react';

function FAQItem({ item }: { item: typeof faqItems[0] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-neutral-200 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left flex justify-between items-center py-2"
      >
        <h3 className="text-lg font-semibold text-primary-600 pr-4 font-serif">
          {item.question}
        </h3>
        <span className="text-secondary-600 text-2xl font-light flex-shrink-0">
          {isOpen ? '−' : '+'}
        </span>
      </button>
      {isOpen && (
        <div className="mt-4 text-neutral-700 leading-relaxed text-left">
          <p>{item.answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <div className="min-h-screen bg-background-default flex flex-col">
      <Header />
      
      <main className="flex-grow py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-600 mb-12 text-left font-serif">
            Frequently Asked Questions
          </h1>
          
          <div className="bg-white rounded-lg shadow-sm">
            {faqItems.map((item) => (
              <FAQItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
