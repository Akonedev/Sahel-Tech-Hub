import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sahel Tech Hub - Solutions IT & Transformation Digitale en Afrique de l'Ouest",
  description: "Services IT complets pour entreprises, administrations et ONG au Sahel. Développement web, mobile, e-commerce, ERP/CRM, formations professionnelles et incubateur de startups.",
  keywords: [
    "services informatiques Sahel",
    "transformation digitale Afrique de l'Ouest",
    "développement web Sahel",
    "formation IT",
    "incubateur startups",
    "e-commerce Afrique",
    "ERP CRM",
    "cybersécurité",
  ],
  authors: [{ name: "Sahel Tech Hub" }],
  creator: "Sahel Tech Hub",
  publisher: "Sahel Tech Hub",
  metadataBase: new URL("http://localhost:34500"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sahel Tech Hub - Transformation Digitale",
    description: "Solutions IT complètes pour la zone du Sahel",
    url: "http://localhost:34500",
    siteName: "Sahel Tech Hub",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sahel Tech Hub",
    description: "Solutions IT & Transformation Digitale",
    creator: "@saheltechhub",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
