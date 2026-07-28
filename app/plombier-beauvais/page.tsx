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
    question: "Pouvez-vous intervenir en plomberie sur Beauvais et sa peripherie ?",
    answer:
      "Oui. Les demandes sur Beauvais et les alentours peuvent être traitees selon disponibilité et priorité des interventions.",
  },
  {
    question: "Faites-vous le remplacement de ballon d'eau chaude et raccordements ?",
    answer:
      "Oui. Le remplacement et les raccordements associes peuvent être pris en charge avec contrôle du bon fonctionnement.",
  },
  {
    question: "Prenez-vous en charge les projets de salle de bain à Beauvais ?",
    answer:
      "Oui. Les travaux de plomberie pour rénovation de salle de bain sont étudiés avec une vision complete de l'installation.",
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

      <nav aria-label="Fil d'ariane" className="text-sm text-[#5F7484]">
        <Link href="/" className="hover:text-[#397DA9]">Accueil</Link>
        <span> · </span>
        <span>Plombier Beauvais</span>
      </nav>

      <section className="mt-6 rounded-[2rem] border border-[#DDEFFF] bg-[linear-gradient(135deg,_#F8FCFF_0%,_#EFF8FF_45%,_#DDEFFF_100%)] p-7 sm:p-10">
        <p className="inline-flex rounded-full border border-[#C6E3F7] bg-white/80 px-3 py-1 text-xs font-medium text-[#397DA9]">Beauvais (60000) - Oise</p>
        <h1 className="mt-4 max-w-[18ch] text-[clamp(2rem,4.2vw,3.2rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-[#173246]">
          Plombier à Beauvais pour dépannage et travaux d'installation
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-[#5F7484]">
          À Beauvais, AlloStef intervient sur les besoins de plomberie du quotidien et les projets plus complets : dépannage, remplacement d'équipements sanitaires, recherche de fuite et adaptation des reseaux en rénovation.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <a href={`tel:${siteConfig.phoneHref}`} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#397DA9] px-6 py-3 font-semibold text-white hover:bg-[#2F6F98]">
            <PhoneIcon className="h-4 w-4" />
            Appeler AlloStef
          </a>
          <a href="/#devis" className="inline-flex items-center justify-center rounded-full border border-[#C6E3F7] bg-white/80 px-6 py-3 font-semibold text-[#173246] hover:text-[#397DA9]">
            Demander un devis à Beauvais
          </a>
        </div>
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <article className="rounded-[1.5rem] border border-[#DDEFFF] bg-white p-6">
          <h2 className="text-2xl font-semibold text-[#173246]">Besoins traités regulierement</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-[#5F7484]">
            <li>Fuites d'eau, robinets et mecanismes de chasse</li>
            <li>Problemes d'alimentation et d'evacuation</li>
            <li>Remplacement de sanitaires et raccordements</li>
            <li>Reprise de plomberie dans un projet de rénovation</li>
          </ul>
        </article>
        <article className="rounded-[1.5rem] border border-[#DDEFFF] bg-white p-6">
          <h2 className="text-2xl font-semibold text-[#173246]">Beauvais et communes proches</h2>
          <p className="mt-3 text-sm leading-7 text-[#5F7484]">
            Les interventions peuvent aussi être étudiées autour de Beauvais, notamment vers Tille, Allonne, Saint-Paul et Goincourt, selon les besoins et les délais.
          </p>
          <p className="mt-3 text-sm leading-7 text-[#5F7484]">
            Consultez la <a href="/#zones" className="font-semibold text-[#397DA9] hover:text-[#2F6F98]">zone d'intervention</a> pour confirmer votre secteur.
          </p>
        </article>
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
        <h2 className="text-2xl font-semibold text-[#173246]">Services complementaires</h2>
        <p className="mt-3 text-sm leading-7 text-[#5F7484]">
          Si votre besoin depasse la plomberie, consultez aussi <Link href="/chauffagiste-oise-val-doise" className="font-semibold text-[#397DA9] hover:text-[#2F6F98]">chauffage</Link> et <Link href="/electricien-oise-val-doise" className="font-semibold text-[#397DA9] hover:text-[#2F6F98]">électricité</Link>.
        </p>
      </section>
    </main>
  );
}