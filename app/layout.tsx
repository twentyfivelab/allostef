import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: `AlloStef | Plombier, chauffagiste et électricien dans l’Oise et le Val-d’Oise`,
  description:
    "AlloStef intervient dans l’Oise et le Val-d’Oise pour vos travaux de plomberie, chauffage, électricité, plâtrerie, carrelage et rénovation intérieure. Contactez-nous pour votre projet.",
  keywords: [
    "plombier Oise",
    "plombier Val-d’Oise",
    "chauffagiste Oise",
    "chauffagiste Val-d’Oise",
    "électricien Oise",
    "électricien Val-d’Oise",
    "plaquiste Oise",
    "plaquiste Val-d’Oise",
    "carreleur Oise",
    "carreleur Val-d’Oise",
    "rénovation intérieure Oise",
    "rénovation intérieure Val-d’Oise",
    "artisan multiservices Oise",
    "artisan multiservices Val-d’Oise",
    "demande de devis travaux",
  ],
  alternates: {
    canonical: siteConfig.siteUrl,
  },
  openGraph: {
    title: `AlloStef | Plombier, chauffagiste et électricien dans l’Oise et le Val-d’Oise`,
    description:
      "AlloStef intervient dans l’Oise et le Val-d’Oise pour vos travaux de plomberie, chauffage, électricité, plâtrerie, carrelage et rénovation intérieure. Contactez-nous pour votre projet.",
    url: siteConfig.siteUrl,
    type: "website",
    locale: "fr_FR",
    images: [{ url: "/icon.svg", width: 1200, height: 630, alt: "AlloStef" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `AlloStef | Plombier, chauffagiste et électricien dans l’Oise et le Val-d’Oise`,
    description:
      "AlloStef intervient dans l’Oise et le Val-d’Oise pour vos travaux de plomberie, chauffage, électricité, plâtrerie, carrelage et rénovation intérieure. Contactez-nous pour votre projet.",
    images: ["/icon.svg"],
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
    <html lang="fr" className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#F8FCFF] text-[#173246]">{children}</body>
    </html>
  );
}
