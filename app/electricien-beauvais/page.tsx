import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { PhoneIcon } from "@/components/phone-icon";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Électricien Beauvais (60000) | Dépannage et installation électrique | AlloStef",
  description:
    "À Beauvais, AlloStef intervient pour dépannage électrique, tableau, prises, éclairages et travaux de mise à niveau en rénovation.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/electricien-beauvais`,
  },
};

const faqItems = [
  {
    question: "Pouvez-vous intervenir en dépannage électrique à Beauvais ?",
    answer:
      "Les demandes de dépannage électrique à Beauvais sont traitées selon disponibilité, avec recherche de cause et remise en état.",
  },
  {
    question: "Intervenez-vous sur le tableau électrique ?",
    answer:
      "Le tableau électrique peut être contrôlé, adapté ou remplacé selon la configuration et le niveau de sécurité attendu.",
  },
  {
    question: "Proposez-vous des travaux électriques pour rénovation intérieure ?",
    answer:
      "Les travaux électriques sont intégrés à vos projets de rénovation pour une installation plus pratique et fiable.",
  },
];

export default function ElectricienBeauvaisPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${siteConfig.siteUrl}/electricien-beauvais#service`,
        name: "Électricien à Beauvais",
        provider: { "@id": `${siteConfig.siteUrl}/#organization` },
        areaServed: [
          { "@type": "City", name: "Beauvais" },
          { "@type": "AdministrativeArea", name: "Oise" },
        ],
        serviceType: "Dépannage, installation et rénovation électrique",
        url: `${siteConfig.siteUrl}/electricien-beauvais`,
      },
      {
        "@type": "FAQPage",
        "@id": `${siteConfig.siteUrl}/electricien-beauvais#faq`,
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteConfig.siteUrl}/electricien-beauvais#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: siteConfig.siteUrl },
          { "@type": "ListItem", position: 2, name: "Électricien Beauvais", item: `${siteConfig.siteUrl}/electricien-beauvais` },
        ],
      },
    ],
  };

  return (
    <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <Script id="schema-electricien-beauvais" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(structuredData)}
      </Script>

      <nav aria-label="Fil d’Ariane" className="text-sm text-[#5E7189]">
        <Link href="/" className="hover:text-[#176BC0]">Accueil</Link>
        <span> · </span>
        <span>Électricien Beauvais</span>
      </nav>

      <section className="mt-6 rounded-[2rem] border border-[#E7EDF3] bg-[linear-gradient(135deg,_#FFFFFF_0%,_#F5F9FC_45%,_#EEF7FF_100%)] p-7 shadow-[0_24px_60px_-38px_rgba(13,35,69,0.22)] sm:p-10">
        <p className="inline-flex rounded-full border border-[#D8E6F2] bg-white/80 px-3 py-1 text-xs font-medium text-[#176BC0]">Beauvais (60000) - Électricité</p>
        <h1 className="mt-4 max-w-[19ch] text-[clamp(2rem,4.2vw,3.2rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-[#0D2345]">
          Électricien à Beauvais pour dépannage, tableau et rénovation
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-[#5E7189]">
          À Beauvais, AlloStef intervient sur les pannes électriques, le remplacement de prises et éclairages, ainsi que l’adaptation de tableaux et circuits en rénovation.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <a href={`tel:${siteConfig.phoneHref}`} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#176BC0] px-6 py-3 font-semibold text-white shadow-[0_14px_28px_-16px_rgba(23,107,192,0.5)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#105BA7]">
            <PhoneIcon className="h-4 w-4" />
            Appeler AlloStef
          </a>
          <a href="/#devis" className="inline-flex items-center justify-center rounded-full border border-[#D8E6F2] bg-white/80 px-6 py-3 font-semibold text-[#0D2345] transition duration-300 hover:-translate-y-0.5 hover:border-[#176BC0] hover:text-[#176BC0]">
            Demander un devis électricité à Beauvais
          </a>
        </div>
      </section>

      <section className="mt-10 rounded-[1.75rem] border border-[#E7EDF3] bg-white p-6 shadow-[0_16px_40px_-32px_rgba(13,35,69,0.16)] sm:p-8">
        <h2 className="text-2xl font-semibold text-[#0D2345]">Interventions électriques à Beauvais</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-[#5E7189]">
          <li>Dépannage électrique et recherche de panne</li>
          <li>Remplacement de prises, interrupteurs et éclairages</li>
          <li>Intervention et ajustement du tableau électrique</li>
          <li>Travaux électriques en rénovation intérieure</li>
        </ul>
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
        <h2 className="text-2xl font-semibold text-[#0D2345]">Autres villes électricité</h2>
        <p className="mt-3 text-sm leading-7 text-[#5E7189]">
          Consultez aussi: <Link href="/electricien-meru" className="font-semibold text-[#176BC0] hover:text-[#105BA7]">Meru</Link>, <Link href="/electricien-cergy" className="font-semibold text-[#176BC0] hover:text-[#105BA7]">Cergy</Link> et <Link href="/electricien-pontoise" className="font-semibold text-[#176BC0] hover:text-[#105BA7]">Pontoise</Link>.
        </p>
      </section>
    </main>
  );
}
