import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { PhoneIcon } from "@/components/phone-icon";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Plombier Compiegne (60200) | Depannage et renovation | AlloStef",
  description:
    "AlloStef intervient a Compiegne pour le depannage plomberie, l'installation sanitaire, la recherche de fuite et les travaux de renovation interieure.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/plombier-compiegne`,
  },
};

const faqItems = [
  {
    question: "Intervenez-vous pour des depannages plomberie a Compiegne ?",
    answer:
      "Oui. AlloStef traite les demandes de depannage plomberie a Compiegne selon disponibilite et niveau d'urgence.",
  },
  {
    question: "Pouvez-vous intervenir dans un logement ancien a Compiegne ?",
    answer:
      "Oui. Les interventions sont adaptees aux contraintes des installations existantes, avec solutions claires avant engagement.",
  },
  {
    question: "Faites-vous aussi les projets de renovation de salle de bain ?",
    answer:
      "Oui. La plomberie de salle de bain peut etre renovee de maniere complete avec coordination des metiers utiles au projet.",
  },
];

export default function PlombierCompiegnePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${siteConfig.siteUrl}/plombier-compiegne#service`,
        name: "Plombier a Compiegne",
        provider: { "@id": `${siteConfig.siteUrl}/#organization` },
        areaServed: [
          { "@type": "City", name: "Compiegne" },
          { "@type": "AdministrativeArea", name: "Oise" },
        ],
        serviceType: "Depannage plomberie, installation sanitaire, renovation",
        url: `${siteConfig.siteUrl}/plombier-compiegne`,
      },
      {
        "@type": "FAQPage",
        "@id": `${siteConfig.siteUrl}/plombier-compiegne#faq`,
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteConfig.siteUrl}/plombier-compiegne#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: siteConfig.siteUrl },
          { "@type": "ListItem", position: 2, name: "Plombier Compiegne", item: `${siteConfig.siteUrl}/plombier-compiegne` },
        ],
      },
    ],
  };

  return (
    <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <Script id="schema-plombier-compiegne" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(structuredData)}
      </Script>

      <nav aria-label="Fil d'ariane" className="text-sm text-[#5F7484]">
        <Link href="/" className="hover:text-[#397DA9]">Accueil</Link>
        <span> · </span>
        <span>Plombier Compiegne</span>
      </nav>

      <section className="mt-6 rounded-[2rem] border border-[#DDEFFF] bg-[linear-gradient(135deg,_#F8FCFF_0%,_#EFF8FF_45%,_#DDEFFF_100%)] p-7 sm:p-10">
        <p className="inline-flex rounded-full border border-[#C6E3F7] bg-white/80 px-3 py-1 text-xs font-medium text-[#397DA9]">Compiegne (60200) - Oise</p>
        <h1 className="mt-4 max-w-[18ch] text-[clamp(2rem,4.2vw,3.2rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-[#173246]">
          Plombier a Compiegne pour depannage et travaux soignes
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-[#5F7484]">
          A Compiegne, AlloStef accompagne les demandes de plomberie du quotidien comme les projets plus complets. Depannage, installation, remplacement et renovation sont traites avec une approche pratique, lisible et adaptee a votre bien.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <a href={`tel:${siteConfig.phoneHref}`} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#397DA9] px-6 py-3 font-semibold text-white hover:bg-[#2F6F98]">
            <PhoneIcon className="h-4 w-4" />
            Appeler AlloStef
          </a>
          <a href="/#devis" className="inline-flex items-center justify-center rounded-full border border-[#C6E3F7] bg-white/80 px-6 py-3 font-semibold text-[#173246] hover:text-[#397DA9]">
            Demander un devis a Compiegne
          </a>
        </div>
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <article className="rounded-[1.5rem] border border-[#DDEFFF] bg-white p-6">
          <h2 className="text-2xl font-semibold text-[#173246]">Interventions courantes</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-[#5F7484]">
            <li>Fuite d'eau, robinetterie, chasses d'eau et evacuations</li>
            <li>Raccordements et remplacements d'equipements sanitaires</li>
            <li>Recherche de fuite et mise en securite</li>
            <li>Travaux de plomberie en renovation de salle de bain</li>
          </ul>
        </article>
        <article className="rounded-[1.5rem] border border-[#DDEFFF] bg-white p-6">
          <h2 className="text-2xl font-semibold text-[#173246]">Compiegne et alentours</h2>
          <p className="mt-3 text-sm leading-7 text-[#5F7484]">
            Les interventions peuvent egalement etre etudiees autour de Compiegne vers Margny-les-Compiegne, Venette, Jaux et Lacroix-Saint-Ouen.
          </p>
          <p className="mt-3 text-sm leading-7 text-[#5F7484]">
            Verifiez votre secteur sur la <a href="/#zones" className="font-semibold text-[#397DA9] hover:text-[#2F6F98]">zone d'intervention</a>.
          </p>
        </article>
      </section>

      <section className="mt-10 rounded-[1.75rem] border border-[#DDEFFF] bg-white p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-[#173246]">Questions frequentes a Compiegne</h2>
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
          Vous pouvez aussi consulter <Link href="/chauffagiste-oise-val-doise" className="font-semibold text-[#397DA9] hover:text-[#2F6F98]">chauffage</Link> et <Link href="/electricien-oise-val-doise" className="font-semibold text-[#397DA9] hover:text-[#2F6F98]">electricite</Link> selon votre besoin.
        </p>
      </section>
    </main>
  );
}