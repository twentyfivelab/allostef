import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { PhoneIcon } from "@/components/phone-icon";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Chauffagiste Cergy (95000) | Depannage et entretien chauffage | AlloStef",
  description:
    "Intervention chauffage a Cergy: depannage, entretien de chaudiere, remplacement d'equipements et optimisation des circuits avec AlloStef.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/chauffagiste-cergy`,
  },
};

const faqItems = [
  {
    question: "Intervenez-vous a Cergy pour une panne de chauffage ?",
    answer:
      "Oui. Les interventions a Cergy sont etudiees selon disponibilite avec un diagnostic clair et une solution adaptee.",
  },
  {
    question: "Pouvez-vous assurer l'entretien de chaudiere a Cergy ?",
    answer:
      "Oui. L'entretien permet d'ameliorer la fiabilite du chauffage et de reduire le risque de panne en saison froide.",
  },
  {
    question: "Intervenez-vous sur radiateurs et circuits de chauffage ?",
    answer:
      "Oui. AlloStef peut ajuster et adapter les circuits ainsi que les radiateurs selon la configuration du logement.",
  },
];

export default function ChauffagisteCergyPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${siteConfig.siteUrl}/chauffagiste-cergy#service`,
        name: "Chauffagiste a Cergy",
        provider: { "@id": `${siteConfig.siteUrl}/#organization` },
        areaServed: [
          { "@type": "City", name: "Cergy" },
          { "@type": "AdministrativeArea", name: "Val-d'Oise" },
        ],
        serviceType: "Depannage, entretien et remplacement chauffage",
        url: `${siteConfig.siteUrl}/chauffagiste-cergy`,
      },
      {
        "@type": "FAQPage",
        "@id": `${siteConfig.siteUrl}/chauffagiste-cergy#faq`,
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteConfig.siteUrl}/chauffagiste-cergy#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: siteConfig.siteUrl },
          { "@type": "ListItem", position: 2, name: "Chauffagiste Cergy", item: `${siteConfig.siteUrl}/chauffagiste-cergy` },
        ],
      },
    ],
  };

  return (
    <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <Script id="schema-chauffagiste-cergy" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(structuredData)}
      </Script>

      <nav aria-label="Fil d'ariane" className="text-sm text-[#5F7484]">
        <Link href="/" className="hover:text-[#397DA9]">Accueil</Link>
        <span> · </span>
        <span>Chauffagiste Cergy</span>
      </nav>

      <section className="mt-6 rounded-[2rem] border border-[#DDEFFF] bg-[linear-gradient(135deg,_#F8FCFF_0%,_#EFF8FF_45%,_#DDEFFF_100%)] p-7 sm:p-10">
        <p className="inline-flex rounded-full border border-[#C6E3F7] bg-white/80 px-3 py-1 text-xs font-medium text-[#397DA9]">Cergy (95000) - Chauffage</p>
        <h1 className="mt-4 max-w-[19ch] text-[clamp(2rem,4.2vw,3.2rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-[#173246]">
          Chauffagiste a Cergy pour depannage, entretien et remplacement
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-[#5F7484]">
          AlloStef intervient a Cergy pour vos besoins en chauffage: depannage, entretien, remplacement d'equipements et adaptation de circuits pour un confort maitrise.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <a href={`tel:${siteConfig.phoneHref}`} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#397DA9] px-6 py-3 font-semibold text-white hover:bg-[#2F6F98]">
            <PhoneIcon className="h-4 w-4" />
            Appeler AlloStef
          </a>
          <a href="/#devis" className="inline-flex items-center justify-center rounded-full border border-[#C6E3F7] bg-white/80 px-6 py-3 font-semibold text-[#173246] hover:text-[#397DA9]">
            Demander un devis chauffage a Cergy
          </a>
        </div>
      </section>

      <section className="mt-10 rounded-[1.75rem] border border-[#DDEFFF] bg-white p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-[#173246]">Interventions chauffage a Cergy</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-[#5F7484]">
          <li>Depannage de chauffage et diagnostic de panne</li>
          <li>Entretien de chaudiere</li>
          <li>Remplacement d'equipements chauffage</li>
          <li>Ajustement de radiateurs et circuits</li>
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

      <section className="mt-10 rounded-[1.75rem] border border-[#DDEFFF] bg-white p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-[#173246]">Autres villes chauffage</h2>
        <p className="mt-3 text-sm leading-7 text-[#5F7484]">
          Consultez aussi: <Link href="/chauffagiste-meru" className="font-semibold text-[#397DA9] hover:text-[#2F6F98]">Meru</Link>, <Link href="/chauffagiste-beauvais" className="font-semibold text-[#397DA9] hover:text-[#2F6F98]">Beauvais</Link>, <Link href="/chauffagiste-pontoise" className="font-semibold text-[#397DA9] hover:text-[#2F6F98]">Pontoise</Link> et <Link href="/chauffagiste-compiegne" className="font-semibold text-[#397DA9] hover:text-[#2F6F98]">Compiegne</Link>.
        </p>
      </section>
    </main>
  );
}