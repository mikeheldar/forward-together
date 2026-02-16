import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Therapy FAQs | Insurance, Confidentiality & What to Expect | Forward Together`,
  description: `Find answers to common questions about therapy services, insurance, confidentiality, session structure, and payments at Forward Together.`,
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
