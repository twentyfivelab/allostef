import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { PhoneIcon } from "@/components/phone-icon";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Plombier Meru (60110) | Dépannage et installation | AlloStef",
  description:
    "AlloStef intervient à Meru pour le dépannage plomberie, la recherche de fuite, l’installation sanitaire et la rénovation. Devis clair et intervention soignée.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/plombier-meru`,
  },
};

const faqItems = [
  {
    question: "Intervenez-vous rapidement à Meru en cas de fuite ?",
    answer:
      "Selon disponibilité, AlloStef étudie en priorité les demandes urgentes à Meru pour limiter les dégâts et sécuriser l’installation.",
  },
  {
    question: "Prenez-vous en charge les remplacements de sanitaires à Meru ?",
    answer:
      "WC, lavabo, robinetterie, raccordements et évacuations peuvent être remplacés ou adaptés selon votre configuration.",
  },
  {
    question: "Puis-je demander un devis pour une rénovation de salle de bain à Meru ?",
    answer:
      "Un devis détaillé peut être établi après étude de votre projet, des contraintes techniques et du niveau de finition souhaité.",
  },
];

export default function PlombierMeruPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${siteConfig.siteUrl}/plombier-meru#service`,
        name: "Plombier à Meru",
        provider: { "@id": `${siteConfig.siteUrl}/#organization` },
        areaServed: [
          { "@type": "City", name: "Meru" },
          { "@type": "AdministrativeArea", name: "Oise" },
        ],
        serviceType: "Dépannage plomberie, installation sanitaire, rénovation",
        url: `${siteConfig.siteUrl}/plombier-meru`,
      },
      {
        "@type": "FAQPage",
        "@id": `${siteConfig.siteUrl}/plombier-meru#faq`,
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteConfig.siteUrl}/plombier-meru#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: siteConfig.siteUrl },
          { "@type": "ListItem", position: 2, name: "Plombier Meru", item: `${siteConfig.siteUrl}/plombier-meru` },
        ],
      },
    ],
  };

  return (
    <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <Script id="schema-plombier-meru" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(structuredData)}
      </Script>

      <nav aria-label="Fil d’Ariane" className="text-sm text-[#5F7484]">
        <Link href="/" className="hover:text-[#397DA9]">Accueil</Link>
        <span> · </span>
        <span>Plombier Meru</span>
      </nav>

      <section className="mt-6 rounded-[2rem] border border-[#DDEFFF] bg-[linear-gradient(135deg,_#F8FCFF_0%,_#EFF8FF_45%,_#DDEFFF_100%)] p-7 sm:p-10">
        <p className="inline-flex rounded-full border border-[#C6E3F7] bg-white/80 px-3 py-1 text-xs font-medium text-[#397DA9]">Meru (60110) - Oise</p>
        <h1 className="mt-4 max-w-[18ch] text-[clamp(2rem,4.2vw,3.2rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-[#173246]">
          Plombier à Meru pour dépannage, installation et rénovation
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-[#5F7484]">
          AlloStef accompagne les habitants et professionnels de Meru pour leurs besoins en plomberie : fuite d’eau, remplacement sanitaire, raccordements et travaux de rénovation. Chaque intervention est préparée avec une approche claire, fiable et adaptée à votre situation.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <a href={`tel:${siteConfig.phoneHref}`} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#397DA9] px-6 py-3 font-semibold text-white hover:bg-[#2F6F98]">
            <PhoneIcon className="h-4 w-4" />
            Appeler AlloStef
          </a>
          <a href="/#devis" className="inline-flex items-center justify-center rounded-full border border-[#C6E3F7] bg-white/80 px-6 py-3 font-semibold text-[#173246] hover:text-[#397DA9]">
            Demander un devis à Meru
          </a>
        </div>
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <article className="rounded-[1.5rem] border border-[#DDEFFF] bg-white p-6">
          <h2 className="text-2xl font-semibold text-[#173246]">Interventions fréquentes à Meru</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-[#5F7484]">
            <li>Dépannage fuite, chasse d’eau, évacuation et robinetterie</li>
            <li>Installation et remplacement de sanitaires</li>
            <li>Recherche de fuite d’eau ou de gaz</li>
            <li>Travaux plomberie en rénovation de salle de bain</li>
          </ul>
        </article>
        <article className="rounded-[1.5rem] border border-[#DDEFFF] bg-white p-6">
          <h2 className="text-2xl font-semibold text-[#173246]">Secteurs proches</h2>
          <p className="mt-3 text-sm leading-7 text-[#5F7484]">
            Selon disponibilité, les interventions peuvent aussi être étudiées sur les secteurs proches de Meru comme Amblainville, Andeville, Bornel et Chambly.
          </p>
          <p className="mt-3 text-sm leading-7 text-[#5F7484]">
            Vérifiez votre commune dans la <a href="/#zones" className="font-semibold text-[#397DA9] hover:text-[#2F6F98]">zone d’intervention</a>.
          </p>
        </article>
      </section>

      <section className="mt-10 rounded-[1.75rem] border border-[#DDEFFF] bg-white p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-[#173246]">Questions fréquentes à Meru</h2>
        <div className="mt-4 space-y-4">
          {faqItems.map((item) => (
            <article key={item.question} className="rounded-xl border border-[#E4F1FC] bg-[#F8FCFF] p-4">
              <h3 className="text-base font-semibold text-[#173246]">{item.question}</h3>
              <p className="mt-2 text-sm leading-7 text-[#5F7484]">{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10 rounded-[1.75rem] border border-[#DDEFFF] bg-white p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-[#173246]">Services complémentaires</h2>
        <p className="mt-3 text-sm leading-7 text-[#5F7484]">
          Selon votre besoin, consultez aussi <Link href="/chauffagiste-oise-val-doise" className="font-semibold text-[#397DA9] hover:text-[#2F6F98]">chauffage</Link> et <Link href="/electricien-oise-val-doise" className="font-semibold text-[#397DA9] hover:text-[#2F6F98]">électricité</Link>.
        </p>
      </section>
    </main>
  );
}
