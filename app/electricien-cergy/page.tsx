import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { PhoneIcon } from "@/components/phone-icon";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Électricien Cergy (95000) | Dépannage et travaux électriques | AlloStef",
  description:
    "AlloStef intervient à Cergy pour dépannage électrique, intervention sur tableau, prises, éclairages et travaux électriques en rénovation.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/electricien-cergy`,
  },
};

const faqItems = [
  {
    question: "Intervenez-vous à Cergy pour coupure ou panne électrique ?",
    answer:
      "AlloStef intervient à Cergy selon disponibilité pour diagnostiquer la panne et remettre l’installation en fonctionnement.",
  },
  {
    question: "Pouvez-vous intervenir sur un tableau électrique ancien ?",
    answer:
      "Un contrôle du tableau est réalisé puis des adaptations ou remplacements sont proposés selon l’état de l’installation.",
  },
  {
    question: "Réalisez-vous des installations de prises et éclairages à Cergy ?",
    answer:
      "Installation et remplacement de prises et éclairages peuvent être réalisés pour améliorer confort et fiabilité d’usage.",
  },
];

export default function ElectricienCergyPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${siteConfig.siteUrl}/electricien-cergy#service`,
        name: "Électricien à Cergy",
        provider: { "@id": `${siteConfig.siteUrl}/#organization` },
        areaServed: [
          { "@type": "City", name: "Cergy" },
          { "@type": "AdministrativeArea", name: "Val-d’Oise" },
        ],
        serviceType: "Dépannage, installation et rénovation électrique",
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
          { "@type": "ListItem", position: 2, name: "Électricien Cergy", item: `${siteConfig.siteUrl}/electricien-cergy` },
        ],
      },
    ],
  };

  return (
    <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <Script id="schema-electricien-cergy" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(structuredData)}
      </Script>

      <nav aria-label="Fil d’Ariane" className="text-sm text-[#5F7484]">
        <Link href="/" className="hover:text-[#397DA9]">Accueil</Link>
        <span> · </span>
        <span>Électricien Cergy</span>
      </nav>

      <section className="mt-6 rounded-[2rem] border border-[#DDEFFF] bg-[linear-gradient(135deg,_#F8FCFF_0%,_#EFF8FF_45%,_#DDEFFF_100%)] p-7 sm:p-10">
        <p className="inline-flex rounded-full border border-[#C6E3F7] bg-white/80 px-3 py-1 text-xs font-medium text-[#397DA9]">Cergy (95000) - Électricité</p>
        <h1 className="mt-4 max-w-[19ch] text-[clamp(2rem,4.2vw,3.2rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-[#173246]">
          Électricien à Cergy pour dépannage et adaptation des installations
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-[#5F7484]">
          À Cergy, AlloStef intervient pour dépannage électrique, modernisation des équipements, prise en charge du tableau électrique et travaux sur circuits dans le cadre d’une rénovation.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <a href={`tel:${siteConfig.phoneHref}`} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#397DA9] px-6 py-3 font-semibold text-white hover:bg-[#2F6F98]">
            <PhoneIcon className="h-4 w-4" />
            Appeler AlloStef
          </a>
          <a href="/#devis" className="inline-flex items-center justify-center rounded-full border border-[#C6E3F7] bg-white/80 px-6 py-3 font-semibold text-[#173246] hover:text-[#397DA9]">
            Demander un devis électricité à Cergy
          </a>
        </div>
      </section>

      <section className="mt-10 rounded-[1.75rem] border border-[#DDEFFF] bg-white p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-[#173246]">Interventions électriques à Cergy</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-[#5F7484]">
          <li>Dépannage électrique avec diagnostic</li>
          <li>Remise en état de prises et éclairages</li>
          <li>Contrôle et adaptation du tableau électrique</li>
          <li>Travaux électriques pour rénovation</li>
        </ul>
      </section>

      <section className="mt-10 rounded-[1.75rem] border border-[#DDEFFF] bg-white p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-[#173246]">Questions fréquentes à Cergy</h2>
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
        <h2 className="text-2xl font-semibold text-[#173246]">Autres villes électricité</h2>
        <p className="mt-3 text-sm leading-7 text-[#5F7484]">
          Consultez aussi: <Link href="/electricien-meru" className="font-semibold text-[#397DA9] hover:text-[#2F6F98]">Meru</Link>, <Link href="/electricien-beauvais" className="font-semibold text-[#397DA9] hover:text-[#2F6F98]">Beauvais</Link> et <Link href="/electricien-pontoise" className="font-semibold text-[#397DA9] hover:text-[#2F6F98]">Pontoise</Link>.
        </p>
      </section>
    </main>
  );
}
