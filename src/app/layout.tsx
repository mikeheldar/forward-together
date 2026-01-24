import type { Metadata } from "next";
import { Open_Sans, Lato } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Forward Together - Therapy for Women",
  description: "Compassionate counseling for women at every life stage. Specializing in anxiety, motherhood, and life transitions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} ${lato.variable} antialiased`}
      >
        {children}
        <Script 
          src="https://widget-cdn.simplepractice.com/assets/integration-1.0.js" 
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
