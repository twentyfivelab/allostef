import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { PhoneIcon } from "@/components/phone-icon";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Chauffagiste Beauvais (60000) | Dépannage et entretien | AlloStef",
  description:
    "À Beauvais, AlloStef intervient pour dépannage chauffage, entretien de chaudière, remplacement d’équipements et réglage des circuits.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/chauffagiste-beauvais`,
  },
};

const faqItems = [
  {
    question: "Pouvez-vous intervenir en dépannage chauffage à Beauvais ?",
    answer:
      "Les pannes de chauffage à Beauvais peuvent être traitées selon disponibilité, avec recherche de cause et solution adaptée.",
  },
  {
    question: "Proposez-vous l’entretien des installations de chauffage ?",
    answer:
      "L’entretien et les contrôles de fonctionnement permettent de fiabiliser l’installation et d’éviter certaines pannes.",
  },
  {
    question: "Intervenez-vous aussi pour remplacement de chaudière ?",
    answer:
      "Le remplacement est étudié selon l’état de votre équipement, vos usages et la configuration du logement.",
  },
];

export default function ChauffagisteBeauvaisPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${siteConfig.siteUrl}/chauffagiste-beauvais#service`,
        name: "Chauffagiste à Beauvais",
        provider: { "@id": `${siteConfig.siteUrl}/#organization` },
        areaServed: [
          { "@type": "City", name: "Beauvais" },
          { "@type": "AdministrativeArea", name: "Oise" },
        ],
        serviceType: "Dépannage, entretien et remplacement chauffage",
        url: `${siteConfig.siteUrl}/chauffagiste-beauvais`,
      },
      {
        "@type": "FAQPage",
        "@id": `${siteConfig.siteUrl}/chauffagiste-beauvais#faq`,
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteConfig.siteUrl}/chauffagiste-beauvais#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: siteConfig.siteUrl },
          { "@type": "ListItem", position: 2, name: "Chauffagiste Beauvais", item: `${siteConfig.siteUrl}/chauffagiste-beauvais` },
        ],
      },
    ],
  };

  return (
    <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <Script id="schema-chauffagiste-beauvais" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(structuredData)}
      </Script>

      <nav aria-label="Fil d’Ariane" className="text-sm text-[#5F7484]">
        <Link href="/" className="hover:text-[#397DA9]">Accueil</Link>
        <span> · </span>
        <span>Chauffagiste Beauvais</span>
      </nav>

      <section className="mt-6 rounded-[2rem] border border-[#DDEFFF] bg-[linear-gradient(135deg,_#F8FCFF_0%,_#EFF8FF_45%,_#DDEFFF_100%)] p-7 sm:p-10">
        <p className="inline-flex rounded-full border border-[#C6E3F7] bg-white/80 px-3 py-1 text-xs font-medium text-[#397DA9]">Beauvais (60000) - Chauffage</p>
        <h1 className="mt-4 max-w-[19ch] text-[clamp(2rem,4.2vw,3.2rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-[#173246]">
          Chauffagiste à Beauvais pour dépannage et entretien soignés
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-[#5F7484]">
          À Beauvais, AlloStef intervient sur les installations de chauffage pour remettre en service, entretenir les équipements et étudier les remplacements nécessaires selon votre usage.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <a href={`tel:${siteConfig.phoneHref}`} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#397DA9] px-6 py-3 font-semibold text-white hover:bg-[#2F6F98]">
            <PhoneIcon className="h-4 w-4" />
            Appeler AlloStef
          </a>
          <a href="/#devis" className="inline-flex items-center justify-center rounded-full border border-[#C6E3F7] bg-white/80 px-6 py-3 font-semibold text-[#173246] hover:text-[#397DA9]">
            Demander un devis chauffage à Beauvais
          </a>
        </div>
      </section>

      <section className="mt-10 rounded-[1.75rem] border border-[#DDEFFF] bg-white p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-[#173246]">Interventions chauffage à Beauvais</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-[#5F7484]">
          <li>Dépannage de chauffage</li>
          <li>Entretien de chaudière</li>
          <li>Remplacement de chaudière et ballon</li>
          <li>Réglage et adaptation de circuits</li>
        </ul>
      </section>

      <section className="mt-10 rounded-[1.75rem] border border-[#DDEFFF] bg-white p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-[#173246]">Questions fréquentes à Beauvais</h2>
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
          Consultez aussi: <Link href="/chauffagiste-meru" className="font-semibold text-[#397DA9] hover:text-[#2F6F98]">Meru</Link>, <Link href="/chauffagiste-cergy" className="font-semibold text-[#397DA9] hover:text-[#2F6F98]">Cergy</Link> et <Link href="/chauffagiste-pontoise" className="font-semibold text-[#397DA9] hover:text-[#2F6F98]">Pontoise</Link>.
        </p>
      </section>
    </main>
  );
}
