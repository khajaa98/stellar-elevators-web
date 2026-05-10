import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/ui/FloatingCTA";

export const metadata: Metadata = {
  metadataBase: new URL('https://stellarelevators.com'), // Replace with actual domain later
  title: {
    default: 'Stellar Elevators | Luxury Elevator Solutions in Hyderabad & South India',
    template: '%s | Stellar Elevators'
  },
  description: 'Hyderabad\'s premier luxury elevator company. Specializing in villa elevators, passenger lifts, and custom vertical mobility solutions across Telangana and South India. Reliable engineering with our signature "Smile" service.',
  keywords: ['luxury elevators Hyderabad', 'villa elevators Telangana', 'home lifts Hyderabad', 'best elevator company South India', 'elevator installation Telangana', 'premium passenger lifts'],
  authors: [{ name: 'Stellar Elevators' }],
  creator: 'Stellar Elevators',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://stellarelevators.com',
    siteName: 'Stellar Elevators',
    title: 'Stellar Elevators | Premium Vertical Mobility',
    description: 'Engineering excellence meets architectural elegance. Discover our range of luxury villa and passenger elevators in Hyderabad.',
    images: [
      {
        url: '/og-image.jpg', // Placeholder for actual OG image
        width: 1200,
        height: 630,
        alt: 'Stellar Elevators Luxury Installation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stellar Elevators | Luxury Lifts',
    description: 'Elevating luxury living across South India. Premium elevator solutions with reliable engineering.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#1A1A1A] text-white antialiased selection:bg-[#2E3192] selection:text-white min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
