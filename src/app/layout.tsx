import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Cusp Dental Clinic | Multi-Specialty Advanced Digital Dentistry in Gurugram",
  description: "Dr. Mohit Dhiman - Diamond Black Invisalign Provider. Located at Sector-56, Gurugram. Fully Digital Treatment Workflow.",
  keywords: "Dr. Mohit Dhiman, Cusp Dental Clinic, Invisalign Provider Gurugram, Digital Smile Design, Advanced Digital Dentistry",
  authors: [{ name: "Dr. Mohit Dhiman" }],
  creator: "Cusp Dental Clinic",
  publisher: "Cusp Dental Clinic",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://cuspdentalclinic.in'), // Placeholder URL, assumed for Cusp
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Cusp Dental Clinic | Premium Dental Care in Gurugram",
    description: "Dr. Mohit Dhiman - 18+ Years Experience. Sector-56, Gurugram.",
    url: 'https://cuspdentalclinic.in/',
    siteName: "Cusp Dental Clinic",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "Cusp Dental Clinic",
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Cusp Dental Clinic",
    description: "Premium Dental Care in Gurugram",
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
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563EB" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body 
        className={`${inter.variable} font-sans antialiased overflow-x-hidden w-full`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
