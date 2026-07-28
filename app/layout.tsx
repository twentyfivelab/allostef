import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Script from "next/script";
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
  title: `AlloStef | Plombier chauffagiste dans l’Oise et le Val-d’Oise`,
  description:
    "Installation, dépannage et entretien en plomberie, chauffage et électricité dans l’Oise et le Val-d’Oise : fuites, chaudières, sanitaires et salles de bain.",
  keywords: [
    "plombier Oise",
    "plombier Val-d’Oise",
    "dépannage plomberie Oise",
    "dépannage plomberie Val-d’Oise",
    "chauffagiste Oise",
    "chauffagiste Val-d’Oise",
    "dépannage chauffage",
    "dépannage chaudière",
    "entretien chaudière",
    "remplacement chaudière",
    "remplacement ballon d’eau chaude",
    "installation circuit de chauffage",
    "recherche de fuite d’eau",
    "recherche de fuite de gaz",
    "installation WC",
    "pose évier",
    "pose lavabo",
    "électricien Oise",
    "électricien Val-d’Oise",
    "dépannage électrique",
    "création salle de bain",
    "rénovation salle de bain",
    "pose de carrelage et faïence",
    "artisan rénovation intérieure",
  ],
  alternates: {
    canonical: siteConfig.siteUrl,
  },
  openGraph: {
    title: `AlloStef | Plombier chauffagiste dans l’Oise et le Val-d’Oise`,
    description:
      "Installation, dépannage et entretien en plomberie, chauffage et électricité dans l’Oise et le Val-d’Oise : fuites, chaudières, sanitaires et salles de bain.",
    url: siteConfig.siteUrl,
    type: "website",
    locale: "fr_FR",
    images: [{ url: "/icon.svg", width: 1200, height: 630, alt: "AlloStef" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `AlloStef | Plombier chauffagiste dans l’Oise et le Val-d’Oise`,
    description:
      "Installation, dépannage et entretien en plomberie, chauffage et électricité dans l’Oise et le Val-d’Oise : fuites, chaudières, sanitaires et salles de bain.",
    images: ["/icon.svg"],
  },
  icons: {
    icon: "/icon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const globalStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteConfig.siteUrl}/#organization`,
      name: siteConfig.brandName,
      legalName: siteConfig.legalEntityName,
      url: siteConfig.siteUrl,
      telephone: siteConfig.phoneHref,
      email: siteConfig.email,
      areaServed: siteConfig.serviceAreas,
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.siteUrl}/#website`,
      url: siteConfig.siteUrl,
      name: siteConfig.brandName,
      inLanguage: "fr-FR",
      publisher: {
        "@id": `${siteConfig.siteUrl}/#organization`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#FFFFFF] text-[#0D2345]">
        <Script id="schema-global" type="application/ld+json" strategy="beforeInteractive">
          {JSON.stringify(globalStructuredData)}
        </Script>
        {children}
      </body>
    </html>
  );
}
