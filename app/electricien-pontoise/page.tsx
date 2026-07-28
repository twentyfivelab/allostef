import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { PhoneIcon } from "@/components/phone-icon";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Electricien Pontoise (95300) | Depannage et installation electrique | AlloStef",
  description:
    "A Pontoise, AlloStef intervient pour depannage electrique, prises, eclairages, tableau electrique et travaux de renovation.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/electricien-pontoise`,
  },
};

const faqItems = [
  {
    question: "Intervenez-vous a Pontoise pour une panne electrique ?",
    answer:
      "Oui. Les interventions a Pontoise sont traitees selon disponibilite avec diagnostic de la panne et remise en service en securite.",
  },
  {
    question: "Pouvez-vous remplacer un tableau electrique a Pontoise ?",
    answer:
      "Oui. Un controle est realise puis une solution d'adaptation ou de remplacement est proposee selon l'installation existante.",
  },
  {
    question: "Realisez-vous les travaux electriques lors d'une renovation ?",
    answer:
      "Oui. AlloStef peut integrer l'electricite a une renovation pour ameliorer fonctionnalite, confort et fiabilite des usages.",
  },
];

export default function ElectricienPontoisePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${siteConfig.siteUrl}/electricien-pontoise#service`,
        name: "Electricien a Pontoise",
        provider: { "@id": `${siteConfig.siteUrl}/#organization` },
        areaServed: [
          { "@type": "City", name: "Pontoise" },
          { "@type": "AdministrativeArea", name: "Val-d'Oise" },
        ],
        serviceType: "Depannage, installation et renovation electrique",
        url: `${siteConfig.siteUrl}/electricien-pontoise`,
      },
      {
        "@type": "FAQPage",
        "@id": `${siteConfig.siteUrl}/electricien-pontoise#faq`,
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteConfig.siteUrl}/electricien-pontoise#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: siteConfig.siteUrl },
          { "@type": "ListItem", position: 2, name: "Electricien Pontoise", item: `${siteConfig.siteUrl}/electricien-pontoise` },
        ],
      },
    ],
  };

  return (
    <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <Script id="schema-electricien-pontoise" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(structuredData)}
      </Script>

      <nav aria-label="Fil d'ariane" className="text-sm text-[#5F7484]">
        <Link href="/" className="hover:text-[#397DA9]">Accueil</Link>
        <span> · </span>
        <span>Electricien Pontoise</span>
      </nav>

      <section className="mt-6 rounded-[2rem] border border-[#DDEFFF] bg-[linear-gradient(135deg,_#F8FCFF_0%,_#EFF8FF_45%,_#DDEFFF_100%)] p-7 sm:p-10">
        <p className="inline-flex rounded-full border border-[#C6E3F7] bg-white/80 px-3 py-1 text-xs font-medium text-[#397DA9]">Pontoise (95300) - Electricite</p>
        <h1 className="mt-4 max-w-[19ch] text-[clamp(2rem,4.2vw,3.2rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-[#173246]">
          Electricien a Pontoise pour depannage, installation et modernisation
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-[#5F7484]">
          AlloStef accompagne les besoins electriques a Pontoise: depannage, remplacement de prises et eclairages, intervention sur tableau et adaptation des circuits en renovation.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <a href={`tel:${siteConfig.phoneHref}`} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#397DA9] px-6 py-3 font-semibold text-white hover:bg-[#2F6F98]">
            <PhoneIcon className="h-4 w-4" />
            Appeler AlloStef
          </a>
          <a href="/#devis" className="inline-flex items-center justify-center rounded-full border border-[#C6E3F7] bg-white/80 px-6 py-3 font-semibold text-[#173246] hover:text-[#397DA9]">
            Demander un devis electricite a Pontoise
          </a>
        </div>
      </section>

      <section className="mt-10 rounded-[1.75rem] border border-[#DDEFFF] bg-white p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-[#173246]">Interventions electriques a Pontoise</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-[#5F7484]">
          <li>Depannage electrique et recherche de panne</li>
          <li>Remplacement de prises, interrupteurs et eclairages</li>
          <li>Intervention sur tableau electrique</li>
          <li>Travaux electriques pour renovation</li>
        </ul>
      </section>

      <section className="mt-10 rounded-[1.75rem] border border-[#DDEFFF] bg-white p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-[#173246]">Questions frequentes a Pontoise</h2>
        <div className="mt-4 space-y-4">
          {faqItems.map((item) => (
            <article key={item.question} className="rounded-xl border border-[#E4F1FC] bg-[#F8FCFF] p-4">
              <h3 className="text-base font-semibold text-[#173246]">{item.question}</h3>
              <p className="mt-2 text-sm leading-7 text-[#5F7484]">{item.answer}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
