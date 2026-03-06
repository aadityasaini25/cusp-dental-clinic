import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Face Max Dental Clinic | Best Implantologist & Oral Surgeon in Pune",
  description: "Dr. Shubham Sunil Salunkhe (Oral & Maxillofacial Surgeon | Implantologist). Located at Bhekrai Nagar Road, Pune. 100% Digital Workflow Implantology.",
  keywords: "Dr. Shubham Sunil Salunkhe, Implantologist, Oral Surgeon, Face Max Dental Clinic, Dental Implants Pune, Wisdom Tooth Removal",
  authors: [{ name: "Dr. Shubham Sunil Salunkhe" }],
  creator: "Face Max Dental Clinic",
  publisher: "Face Max Dental Clinic",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://face-max-clinic.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Face Max Dental Clinic | Expert Implant & Surgical Care",
    description: "Dr. Shubham Sunil Salunkhe - 7+ Years Experience. Bhekrai Nagar Road, Pune.",
    url: 'https://face-max-clinic.vercel.app/',
    siteName: "Face Max Dental Clinic",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "Face Max Dental Clinic",
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Face Max Dental Clinic",
    description: "Expert Implant & Surgical Care in Pune",
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
        <meta name="theme-color" content="#485b51" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
