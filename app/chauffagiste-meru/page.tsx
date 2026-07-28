import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { PhoneIcon } from "@/components/phone-icon";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Chauffagiste Meru (60110) | Dépannage et entretien chauffage | AlloStef",
  description:
    "AlloStef intervient à Meru pour dépannage chauffage, entretien de chaudière, remplacement d’équipements et ajustement des circuits.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/chauffagiste-meru`,
  },
};

const faqItems = [
  {
    question: "Intervenez-vous pour une panne de chauffage à Meru ?",
    answer:
      "Les pannes de chauffage à Meru sont traitées selon disponibilité et priorité, avec diagnostic et remise en service si possible.",
  },
  {
    question: "Faites-vous l’entretien de chaudière à Meru ?",
    answer:
      "AlloStef réalise l’entretien et les contrôles de base pour maintenir le confort et limiter les pannes récurrentes.",
  },
  {
    question: "Pouvez-vous remplacer une chaudière ou un ballon d’eau chaude ?",
    answer:
      "Le remplacement peut être étudié selon l’état de l’installation et les besoins de votre logement.",
  },
];

export default function ChauffagisteMeruPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${siteConfig.siteUrl}/chauffagiste-meru#service`,
        name: "Chauffagiste à Meru",
        provider: { "@id": `${siteConfig.siteUrl}/#organization` },
        areaServed: [
          { "@type": "City", name: "Meru" },
          { "@type": "AdministrativeArea", name: "Oise" },
        ],
        serviceType: "Dépannage, entretien et remplacement chauffage",
        url: `${siteConfig.siteUrl}/chauffagiste-meru`,
      },
      {
        "@type": "FAQPage",
        "@id": `${siteConfig.siteUrl}/chauffagiste-meru#faq`,
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteConfig.siteUrl}/chauffagiste-meru#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: siteConfig.siteUrl },
          { "@type": "ListItem", position: 2, name: "Chauffagiste Meru", item: `${siteConfig.siteUrl}/chauffagiste-meru` },
        ],
      },
    ],
  };

  return (
    <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <Script id="schema-chauffagiste-meru" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(structuredData)}
      </Script>

      <nav aria-label="Fil d’Ariane" className="text-sm text-[#5E7189]">
        <Link href="/" className="hover:text-[#176BC0]">Accueil</Link>
        <span> · </span>
        <span>Chauffagiste Meru</span>
      </nav>

      <section className="mt-6 rounded-[2rem] border border-[#E7EDF3] bg-[linear-gradient(135deg,_#FFFFFF_0%,_#F5F9FC_45%,_#EEF7FF_100%)] p-7 shadow-[0_24px_60px_-38px_rgba(13,35,69,0.22)] sm:p-10">
        <p className="inline-flex rounded-full border border-[#D8E6F2] bg-white/80 px-3 py-1 text-xs font-medium text-[#176BC0]">Meru (60110) - Chauffage</p>
        <h1 className="mt-4 max-w-[19ch] text-[clamp(2rem,4.2vw,3.2rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-[#0D2345]">
          Chauffagiste à Meru pour dépannage, entretien et remplacement
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-[#5E7189]">
          AlloStef intervient à Meru pour le chauffage: dépannage, entretien de chaudière, remplacement de ballon d’eau chaude et adaptation de circuits. L’objectif est de rétablir rapidement un confort durable.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <a href={`tel:${siteConfig.phoneHref}`} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#176BC0] px-6 py-3 font-semibold text-white shadow-[0_14px_28px_-16px_rgba(23,107,192,0.5)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#105BA7]">
            <PhoneIcon className="h-4 w-4" />
            Appeler AlloStef
          </a>
          <a href="/#devis" className="inline-flex items-center justify-center rounded-full border border-[#D8E6F2] bg-white/80 px-6 py-3 font-semibold text-[#0D2345] transition duration-300 hover:-translate-y-0.5 hover:border-[#176BC0] hover:text-[#176BC0]">
            Demander un devis chauffage à Meru
          </a>
        </div>
      </section>

      <section className="mt-10 rounded-[1.75rem] border border-[#E7EDF3] bg-white p-6 shadow-[0_16px_40px_-32px_rgba(13,35,69,0.16)] sm:p-8">
        <h2 className="text-2xl font-semibold text-[#0D2345]">Interventions chauffage à Meru</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-[#5E7189]">
          <li>Dépannage de systèmes de chauffage</li>
          <li>Entretien et suivi de chaudière</li>
          <li>Remplacement de chaudière et ballon d’eau chaude</li>
          <li>Adaptation de circuits et radiateurs</li>
        </ul>
      </section>

      <section className="mt-10 rounded-[1.75rem] border border-[#E7EDF3] bg-white p-6 shadow-[0_16px_40px_-32px_rgba(13,35,69,0.16)] sm:p-8">
        <h2 className="text-2xl font-semibold text-[#0D2345]">Questions fréquentes à Meru</h2>
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
        <h2 className="text-2xl font-semibold text-[#0D2345]">Autres villes chauffage</h2>
        <p className="mt-3 text-sm leading-7 text-[#5E7189]">
          Consultez aussi: <Link href="/chauffagiste-beauvais" className="font-semibold text-[#176BC0] hover:text-[#105BA7]">Beauvais</Link>, <Link href="/chauffagiste-cergy" className="font-semibold text-[#176BC0] hover:text-[#105BA7]">Cergy</Link> et <Link href="/chauffagiste-pontoise" className="font-semibold text-[#176BC0] hover:text-[#105BA7]">Pontoise</Link>.
        </p>
      </section>
    </main>
  );
}
