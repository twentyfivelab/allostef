import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { PhoneIcon } from "@/components/phone-icon";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Plombier Compiègne (60200) | Dépannage et rénovation | AlloStef",
  description:
    "AlloStef intervient à Compiègne pour le dépannage plomberie, l’installation sanitaire, la recherche de fuite et les travaux de rénovation intérieure.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/plombier-compiegne`,
  },
};

const faqItems = [
  {
    question: "Intervenez-vous pour des dépannages plomberie à Compiègne ?",
    answer:
      "AlloStef traite les demandes de dépannage plomberie à Compiègne selon disponibilité et niveau d’urgence.",
  },
  {
    question: "Pouvez-vous intervenir dans un logement ancien à Compiègne ?",
    answer:
      "Les interventions sont adaptées aux contraintes des installations existantes, avec solutions claires avant engagement.",
  },
  {
    question: "Faites-vous aussi les projets de rénovation de salle de bain ?",
    answer:
      "La plomberie de salle de bain peut être rénovée de manière complète avec coordination des métiers utiles au projet.",
  },
];

export default function PlombierCompiegnePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${siteConfig.siteUrl}/plombier-compiegne#service`,
        name: "Plombier à Compiègne",
        provider: { "@id": `${siteConfig.siteUrl}/#organization` },
        areaServed: [
          { "@type": "City", name: "Compiègne" },
          { "@type": "AdministrativeArea", name: "Oise" },
        ],
        serviceType: "Dépannage plomberie, installation sanitaire, rénovation",
        url: `${siteConfig.siteUrl}/plombier-compiegne`,
      },
      {
        "@type": "FAQPage",
        "@id": `${siteConfig.siteUrl}/plombier-compiegne#faq`,
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteConfig.siteUrl}/plombier-compiegne#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: siteConfig.siteUrl },
          { "@type": "ListItem", position: 2, name: "Plombier Compiègne", item: `${siteConfig.siteUrl}/plombier-compiegne` },
        ],
      },
    ],
  };

  return (
    <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <Script id="schema-plombier-compiegne" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(structuredData)}
      </Script>

      <nav aria-label="Fil d’Ariane" className="text-sm text-[#5E7189]">
        <Link href="/" className="hover:text-[#176BC0]">Accueil</Link>
        <span> · </span>
        <span>Plombier Compiègne</span>
      </nav>

      <section className="mt-6 rounded-[2rem] border border-[#E7EDF3] bg-[linear-gradient(135deg,_#FFFFFF_0%,_#F5F9FC_45%,_#EEF7FF_100%)] p-7 shadow-[0_24px_60px_-38px_rgba(13,35,69,0.22)] sm:p-10">
        <p className="inline-flex rounded-full border border-[#D8E6F2] bg-white/80 px-3 py-1 text-xs font-medium text-[#176BC0]">Compiègne (60200) - Oise</p>
        <h1 className="mt-4 max-w-[18ch] text-[clamp(2rem,4.2vw,3.2rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-[#0D2345]">
          Plombier à Compiègne pour dépannage et travaux soignés
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-[#5E7189]">
          À Compiègne, AlloStef accompagne les demandes de plomberie du quotidien comme les projets plus complets. Dépannage, installation, remplacement et rénovation sont traités avec une approche pratique, lisible et adaptée à votre bien.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <a href={`tel:${siteConfig.phoneHref}`} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#176BC0] px-6 py-3 font-semibold text-white shadow-[0_14px_28px_-16px_rgba(23,107,192,0.5)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#105BA7]">
            <PhoneIcon className="h-4 w-4" />
            Appeler AlloStef
          </a>
          <a href="/#devis" className="inline-flex items-center justify-center rounded-full border border-[#D8E6F2] bg-white/80 px-6 py-3 font-semibold text-[#0D2345] transition duration-300 hover:-translate-y-0.5 hover:border-[#176BC0] hover:text-[#176BC0]">
            Demander un devis à Compiègne
          </a>
        </div>
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <article className="rounded-[1.5rem] border border-[#E7EDF3] bg-white p-6 shadow-[0_16px_40px_-32px_rgba(13,35,69,0.16)]">
          <h2 className="text-2xl font-semibold text-[#0D2345]">Interventions courantes</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-[#5E7189]">
            <li>Fuite d’eau, robinetterie, chasses d’eau et évacuations</li>
            <li>Raccordements et remplacements d’équipements sanitaires</li>
            <li>Recherche de fuite et mise en sécurité</li>
            <li>Travaux de plomberie en rénovation de salle de bain</li>
          </ul>
        </article>
        <article className="rounded-[1.5rem] border border-[#E7EDF3] bg-white p-6 shadow-[0_16px_40px_-32px_rgba(13,35,69,0.16)]">
          <h2 className="text-2xl font-semibold text-[#0D2345]">Compiègne et alentours</h2>
          <p className="mt-3 text-sm leading-7 text-[#5E7189]">
            Les interventions peuvent également être étudiées autour de Compiègne vers Margny-lès-Compiègne, Venette, Jaux et Lacroix-Saint-Ouen.
          </p>
          <p className="mt-3 text-sm leading-7 text-[#5E7189]">
            Vérifiez votre secteur sur la <a href="/#zones" className="font-semibold text-[#176BC0] hover:text-[#105BA7]">zone d’intervention</a>.
          </p>
        </article>
      </section>

      <section className="mt-10 rounded-[1.75rem] border border-[#E7EDF3] bg-white p-6 shadow-[0_16px_40px_-32px_rgba(13,35,69,0.16)] sm:p-8">
        <h2 className="text-2xl font-semibold text-[#0D2345]">Questions fréquentes à Compiègne</h2>
        <div className="mt-4 space-y-4">
          {faqItems.map((item) => (
            <article key={item.question} className="rounded-2xl border border-[#EEF7FF] bg-[#FFFFFF] p-4 shadow-[0_10px_26px_-22px_rgba(13,35,69,0.14)]">
              <h3 className="text-base font-semibold text-[#0D2345]">{item.question}</h3>
              <p className="mt-2 text-sm leading-7 text-[#5E7189]">{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10 rounded-[1.75rem] border border-[#E7EDF3] bg-white p-6 shadow-[0_16px_40px_-32px_rgba(13,35,69,0.16)] sm:p-8">
        <h2 className="text-2xl font-semibold text-[#0D2345]">Services complémentaires</h2>
        <p className="mt-3 text-sm leading-7 text-[#5E7189]">
          Vous pouvez aussi consulter <Link href="/chauffagiste-oise-val-doise" className="font-semibold text-[#176BC0] hover:text-[#105BA7]">chauffage</Link> et <Link href="/electricien-oise-val-doise" className="font-semibold text-[#176BC0] hover:text-[#105BA7]">électricité</Link> selon votre besoin.
        </p>
      </section>
    </main>
  );
}
