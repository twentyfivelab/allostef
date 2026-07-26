import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: `Plombier, chauffagiste et électricien dans l’Oise et le Val-d’Oise | ${siteConfig.companyName}`,
  description: `Besoin d’un artisan pour vos travaux de plomberie, chauffage, électricité, plâtrerie ou carrelage ? ${siteConfig.companyName} intervient dans l’Oise et le Val-d’Oise. Demandez votre devis.`,
  keywords: [
    "plombier dans l’Oise",
    "plombier dans le Val-d’Oise",
    "chauffagiste dans l’Oise",
    "chauffagiste dans le Val-d’Oise",
    "électricien dans l’Oise",
    "électricien dans le Val-d’Oise",
    "plaquiste dans l’Oise",
    "plaquiste dans le Val-d’Oise",
    "carreleur dans l’Oise",
    "carreleur dans le Val-d’Oise",
    "artisan multiservices",
    "rénovation intérieure",
    "demande de devis travaux",
  ],
  alternates: {
    canonical: siteConfig.websiteUrl,
  },
  openGraph: {
    title: `Plombier, chauffagiste et électricien dans l’Oise et le Val-d’Oise | ${siteConfig.companyName}`,
    description: `Besoin d’un artisan pour vos travaux de plomberie, chauffage, électricité, plâtrerie ou carrelage ? ${siteConfig.companyName} intervient dans l’Oise et le Val-d’Oise. Demandez votre devis.`,
    url: siteConfig.websiteUrl,
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: `Plombier, chauffagiste et électricien dans l’Oise et le Val-d’Oise | ${siteConfig.companyName}`,
    description: `Besoin d’un artisan pour vos travaux de plomberie, chauffage, électricité, plâtrerie ou carrelage ? ${siteConfig.companyName} intervient dans l’Oise et le Val-d’Oise. Demandez votre devis.`,
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900">{children}</body>
    </html>
  );
}
