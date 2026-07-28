import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { PhoneIcon } from "@/components/phone-icon";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Electricien Cergy (95000) | Depannage et travaux electriques | AlloStef",
  description:
    "AlloStef intervient a Cergy pour depannage electrique, intervention sur tableau, prises, eclairages et travaux electriques en renovation.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/electricien-cergy`,
  },
};

const faqItems = [
  {
    question: "Intervenez-vous a Cergy pour coupure ou panne electrique ?",
    answer:
      "Oui. AlloStef intervient a Cergy selon disponibilite pour diagnostiquer la panne et remettre l'installation en fonctionnement.",
  },
  {
    question: "Pouvez-vous intervenir sur un tableau electrique ancien ?",
    answer:
      "Oui. Un controle du tableau est realise puis des adaptations ou remplacements sont proposes selon l'etat de l'installation.",
  },
  {
    question: "Realisez-vous des installations de prises et eclairages a Cergy ?",
    answer:
      "Oui. Installation et remplacement de prises et eclairages peuvent etre realises pour ameliorer confort et fiabilite d'usage.",
  },
];

export default function ElectricienCergyPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${siteConfig.siteUrl}/electricien-cergy#service`,
        name: "Electricien a Cergy",
        provider: { "@id": `${siteConfig.siteUrl}/#organization` },
        areaServed: [
          { "@type": "City", name: "Cergy" },
          { "@type": "AdministrativeArea", name: "Val-d'Oise" },
        ],
        serviceType: "Depannage, installation et renovation electrique",
        url: `${siteConfig.siteUrl}/electricien-cergy`,
      },
      {
        "@type": "FAQPage",
        "@id": `${siteConfig.siteUrl}/electricien-cergy#faq`,
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteConfig.siteUrl}/electricien-cergy#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: siteConfig.siteUrl },
          { "@type": "ListItem", position: 2, name: "Electricien Cergy", item: `${siteConfig.siteUrl}/electricien-cergy` },
        ],
      },
    ],
  };

  return (
    <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <Script id="schema-electricien-cergy" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(structuredData)}
      </Script>

      <nav aria-label="Fil d'ariane" className="text-sm text-[#5F7484]">
        <Link href="/" className="hover:text-[#397DA9]">Accueil</Link>
        <span> · </span>
        <span>Electricien Cergy</span>
      </nav>

      <section className="mt-6 rounded-[2rem] border border-[#DDEFFF] bg-[linear-gradient(135deg,_#F8FCFF_0%,_#EFF8FF_45%,_#DDEFFF_100%)] p-7 sm:p-10">
        <p className="inline-flex rounded-full border border-[#C6E3F7] bg-white/80 px-3 py-1 text-xs font-medium text-[#397DA9]">Cergy (95000) - Electricite</p>
        <h1 className="mt-4 max-w-[19ch] text-[clamp(2rem,4.2vw,3.2rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-[#173246]">
          Electricien a Cergy pour depannage et adaptation des installations
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-[#5F7484]">
          A Cergy, AlloStef intervient pour depannage electrique, modernisation des equipements, prise en charge du tableau electrique et travaux sur circuits dans le cadre d'une renovation.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <a href={`tel:${siteConfig.phoneHref}`} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#397DA9] px-6 py-3 font-semibold text-white hover:bg-[#2F6F98]">
            <PhoneIcon className="h-4 w-4" />
            Appeler AlloStef
          </a>
          <a href="/#devis" className="inline-flex items-center justify-center rounded-full border border-[#C6E3F7] bg-white/80 px-6 py-3 font-semibold text-[#173246] hover:text-[#397DA9]">
            Demander un devis electricite a Cergy
          </a>
        </div>
      </section>

      <section className="mt-10 rounded-[1.75rem] border border-[#DDEFFF] bg-white p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-[#173246]">Interventions electriques a Cergy</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-[#5F7484]">
          <li>Depannage electrique avec diagnostic</li>
          <li>Remise en etat de prises et eclairages</li>
          <li>Controle et adaptation du tableau electrique</li>
          <li>Travaux electriques pour renovation</li>
        </ul>
      </section>

      <section className="mt-10 rounded-[1.75rem] border border-[#DDEFFF] bg-white p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-[#173246]">Questions frequentes a Cergy</h2>
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
