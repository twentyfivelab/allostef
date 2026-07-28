import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { PhoneIcon } from "@/components/phone-icon";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Chauffagiste Cergy (95000) | Dépannage et entretien chauffage | AlloStef",
  description:
    "Intervention chauffage à Cergy: dépannage, entretien de chaudière, remplacement d’équipements et optimisation des circuits avec AlloStef.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/chauffagiste-cergy`,
  },
};

const faqItems = [
  {
    question: "Intervenez-vous à Cergy pour une panne de chauffage ?",
    answer:
      "Les interventions à Cergy sont étudiées selon disponibilité avec un diagnostic clair et une solution adaptée.",
  },
  {
    question: "Pouvez-vous assurer l’entretien de chaudière à Cergy ?",
    answer:
      "L’entretien permet d’améliorer la fiabilité du chauffage et de réduire le risque de panne en saison froide.",
  },
  {
    question: "Intervenez-vous sur radiateurs et circuits de chauffage ?",
    answer:
      "AlloStef peut ajuster et adapter les circuits ainsi que les radiateurs selon la configuration du logement.",
  },
];

export default function ChauffagisteCergyPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${siteConfig.siteUrl}/chauffagiste-cergy#service`,
        name: "Chauffagiste à Cergy",
        provider: { "@id": `${siteConfig.siteUrl}/#organization` },
        areaServed: [
          { "@type": "City", name: "Cergy" },
          { "@type": "AdministrativeArea", name: "Val-d’Oise" },
        ],
        serviceType: "Dépannage, entretien et remplacement chauffage",
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

      <nav aria-label="Fil d’Ariane" className="text-sm text-[#5F7484]">
        <Link href="/" className="hover:text-[#397DA9]">Accueil</Link>
        <span> · </span>
        <span>Chauffagiste Cergy</span>
      </nav>

      <section className="mt-6 rounded-[2rem] border border-[#DDEFFF] bg-[linear-gradient(135deg,_#F8FCFF_0%,_#EFF8FF_45%,_#DDEFFF_100%)] p-7 sm:p-10">
        <p className="inline-flex rounded-full border border-[#C6E3F7] bg-white/80 px-3 py-1 text-xs font-medium text-[#397DA9]">Cergy (95000) - Chauffage</p>
        <h1 className="mt-4 max-w-[19ch] text-[clamp(2rem,4.2vw,3.2rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-[#173246]">
          Chauffagiste à Cergy pour dépannage, entretien et remplacement
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-[#5F7484]">
          AlloStef intervient à Cergy pour vos besoins en chauffage: dépannage, entretien, remplacement d’équipements et adaptation de circuits pour un confort maîtrisé.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <a href={`tel:${siteConfig.phoneHref}`} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#397DA9] px-6 py-3 font-semibold text-white hover:bg-[#2F6F98]">
            <PhoneIcon className="h-4 w-4" />
            Appeler AlloStef
          </a>
          <a href="/#devis" className="inline-flex items-center justify-center rounded-full border border-[#C6E3F7] bg-white/80 px-6 py-3 font-semibold text-[#173246] hover:text-[#397DA9]">
            Demander un devis chauffage à Cergy
          </a>
        </div>
      </section>

      <section className="mt-10 rounded-[1.75rem] border border-[#DDEFFF] bg-white p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-[#173246]">Interventions chauffage à Cergy</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-[#5F7484]">
          <li>Dépannage de chauffage et diagnostic de panne</li>
          <li>Entretien de chaudière</li>
          <li>Remplacement d’équipements chauffage</li>
          <li>Ajustement de radiateurs et circuits</li>
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
        <h2 className="text-2xl font-semibold text-[#173246]">Autres villes chauffage</h2>
        <p className="mt-3 text-sm leading-7 text-[#5F7484]">
          Consultez aussi: <Link href="/chauffagiste-meru" className="font-semibold text-[#397DA9] hover:text-[#2F6F98]">Meru</Link>, <Link href="/chauffagiste-beauvais" className="font-semibold text-[#397DA9] hover:text-[#2F6F98]">Beauvais</Link> et <Link href="/chauffagiste-pontoise" className="font-semibold text-[#397DA9] hover:text-[#2F6F98]">Pontoise</Link>.
        </p>
      </section>
    </main>
  );
}
