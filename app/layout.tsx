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
  title: {
    default: "Sahel Tech Hub - Formation & Innovation Technologique",
    template: "%s | Sahel Tech Hub"
  },
  description: "Centre de formation et d'innovation technologique au Mali. Formations en développement web, mobile, data science, cybersécurité et plus encore.",
  keywords: [
    "formation technologie Mali",
    "développement web Sahel",
    "innovation technologique Afrique",
    "coding bootcamp Mali",
    "formation IT Bamako",
    "programmation",
    "data science",
    "cybersécurité",
  ],
  authors: [{ name: "Sahel Tech Hub" }],
  creator: "Sahel Tech Hub",
  publisher: "Sahel Tech Hub",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://sahel-tech-hub.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sahel Tech Hub - Formation & Innovation Technologique",
    description: "Centre de formation et d'innovation technologique au Mali",
    url: "https://sahel-tech-hub.vercel.app",
    siteName: "Sahel Tech Hub",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sahel Tech Hub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sahel Tech Hub - Formation & Innovation Technologique",
    description: "Centre de formation et d'innovation technologique au Mali",
    images: ["/og-image.png"],
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
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
