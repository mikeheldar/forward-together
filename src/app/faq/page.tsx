'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { faqItems } from '@/lib/constants';
import { useState } from 'react';

function FAQItem({ item }: { item: typeof faqItems[0] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-neutral-300 py-4 rounded-lg">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left flex justify-between items-center py-2 rounded-lg"
      >
        <h3 className="text-lg font-semibold pr-4 font-heading" style={{ color: '#383f51' }}>
          {item.question}
        </h3>
        <span className="text-2xl font-light flex-shrink-0" style={{ color: '#3c4f76' }}>
          {isOpen ? '−' : '+'}
        </span>
      </button>
      {isOpen && (
        <div className="mt-4 leading-relaxed text-left rounded-lg" style={{ color: '#383f51' }}>
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
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-left font-heading" style={{ color: '#383f51' }}>
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
