import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { PhoneIcon } from "@/components/phone-icon";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Plombier Beauvais (60000) | Dépannage et travaux plomberie | AlloStef",
  description:
    "Intervention plomberie à Beauvais : dépannage, remplacement sanitaire, recherche de fuite et rénovation. AlloStef propose des solutions claires et adaptées.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/plombier-beauvais`,
  },
};

const faqItems = [
  {
    question: "Pouvez-vous intervenir en plomberie sur Beauvais et sa périphérie ?",
    answer:
      "Les demandes sur Beauvais et les alentours peuvent être traitées selon disponibilité et priorité des interventions.",
  },
  {
    question: "Faites-vous le remplacement de ballon d’eau chaude et raccordements ?",
    answer:
      "Le remplacement et les raccordements associés peuvent être pris en charge avec contrôle du bon fonctionnement.",
  },
  {
    question: "Prenez-vous en charge les projets de salle de bain à Beauvais ?",
    answer:
      "Les travaux de plomberie pour rénovation de salle de bain sont étudiés avec une vision complète de l’installation.",
  },
];

export default function PlombierBeauvaisPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${siteConfig.siteUrl}/plombier-beauvais#service`,
        name: "Plombier à Beauvais",
        provider: { "@id": `${siteConfig.siteUrl}/#organization` },
        areaServed: [
          { "@type": "City", name: "Beauvais" },
          { "@type": "AdministrativeArea", name: "Oise" },
        ],
        serviceType: "Dépannage plomberie, installation sanitaire, rénovation",
        url: `${siteConfig.siteUrl}/plombier-beauvais`,
      },
      {
        "@type": "FAQPage",
        "@id": `${siteConfig.siteUrl}/plombier-beauvais#faq`,
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteConfig.siteUrl}/plombier-beauvais#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: siteConfig.siteUrl },
          { "@type": "ListItem", position: 2, name: "Plombier Beauvais", item: `${siteConfig.siteUrl}/plombier-beauvais` },
        ],
      },
    ],
  };

  return (
    <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <Script id="schema-plombier-beauvais" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(structuredData)}
      </Script>

      <nav aria-label="Fil d’Ariane" className="text-sm text-[#5E7189]">
        <Link href="/" className="hover:text-[#176BC0]">Accueil</Link>
        <span> · </span>
        <span>Plombier Beauvais</span>
      </nav>

      <section className="mt-6 rounded-[2rem] border border-[#E7EDF3] bg-[linear-gradient(135deg,_#FFFFFF_0%,_#F5F9FC_45%,_#EEF7FF_100%)] p-7 shadow-[0_24px_60px_-38px_rgba(13,35,69,0.22)] sm:p-10">
        <p className="inline-flex rounded-full border border-[#D8E6F2] bg-white/80 px-3 py-1 text-xs font-medium text-[#176BC0]">Beauvais (60000) - Oise</p>
        <h1 className="mt-4 max-w-[18ch] text-[clamp(2rem,4.2vw,3.2rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-[#0D2345]">
          Plombier à Beauvais pour dépannage et travaux d’installation
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-[#5E7189]">
          À Beauvais, AlloStef intervient sur les besoins de plomberie du quotidien et les projets plus complets : dépannage, remplacement d’équipements sanitaires, recherche de fuite et adaptation des réseaux en rénovation.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <a href={`tel:${siteConfig.phoneHref}`} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#176BC0] px-6 py-3 font-semibold text-white shadow-[0_14px_28px_-16px_rgba(23,107,192,0.5)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#105BA7]">
            <PhoneIcon className="h-4 w-4" />
            Appeler AlloStef
          </a>
          <a href="/#devis" className="inline-flex items-center justify-center rounded-full border border-[#D8E6F2] bg-white/80 px-6 py-3 font-semibold text-[#0D2345] transition duration-300 hover:-translate-y-0.5 hover:border-[#176BC0] hover:text-[#176BC0]">
            Demander un devis à Beauvais
          </a>
        </div>
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <article className="rounded-[1.5rem] border border-[#E7EDF3] bg-white p-6 shadow-[0_16px_40px_-32px_rgba(13,35,69,0.16)]">
          <h2 className="text-2xl font-semibold text-[#0D2345]">Besoins traités régulièrement</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-[#5E7189]">
            <li>Fuites d’eau, robinets et mécanismes de chasse</li>
            <li>Problèmes d’alimentation et d’évacuation</li>
            <li>Remplacement de sanitaires et raccordements</li>
            <li>Reprise de plomberie dans un projet de rénovation</li>
          </ul>
        </article>
        <article className="rounded-[1.5rem] border border-[#E7EDF3] bg-white p-6 shadow-[0_16px_40px_-32px_rgba(13,35,69,0.16)]">
          <h2 className="text-2xl font-semibold text-[#0D2345]">Beauvais et communes proches</h2>
          <p className="mt-3 text-sm leading-7 text-[#5E7189]">
            Les interventions peuvent aussi être étudiées autour de Beauvais, notamment vers Tillé, Allonne, Saint-Paul et Goincourt, selon les besoins et les délais.
          </p>
          <p className="mt-3 text-sm leading-7 text-[#5E7189]">
            Consultez la <a href="/#zones" className="font-semibold text-[#176BC0] hover:text-[#105BA7]">zone d’intervention</a> pour confirmer votre secteur.
          </p>
        </article>
      </section>

      <section className="mt-10 rounded-[1.75rem] border border-[#E7EDF3] bg-white p-6 shadow-[0_16px_40px_-32px_rgba(13,35,69,0.16)] sm:p-8">
        <h2 className="text-2xl font-semibold text-[#0D2345]">Questions fréquentes à Beauvais</h2>
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
          Si votre besoin dépasse la plomberie, consultez aussi <Link href="/chauffagiste-oise-val-doise" className="font-semibold text-[#176BC0] hover:text-[#105BA7]">chauffage</Link> et <Link href="/electricien-oise-val-doise" className="font-semibold text-[#176BC0] hover:text-[#105BA7]">électricité</Link>.
        </p>
      </section>
    </main>
  );
}
