import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { PhoneIcon } from "@/components/phone-icon";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Plombier Pontoise (95300) | Dépannage plomberie et installation | AlloStef",
  description:
    "AlloStef intervient à Pontoise pour dépannage plomberie, recherche de fuite, remplacement sanitaire et travaux de rénovation intérieure.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/plombier-pontoise`,
  },
};

const faqItems = [
  {
    question: "Intervenez-vous à Pontoise pour les dépannages plomberie ?",
    answer:
      "Les demandes de dépannage plomberie à Pontoise peuvent être traitées en priorité selon disponibilité.",
  },
  {
    question: "Proposez-vous le remplacement de robinetterie et sanitaires ?",
    answer:
      "Les remplacements de robinetterie, WC, lavabos et raccordements sont pris en charge avec contrôle de fonctionnement.",
  },
  {
    question: "Pouvez-vous étudier un projet de rénovation de salle de bain à Pontoise ?",
    answer:
      "Le projet est étudié globalement pour proposer une solution cohérente entre plomberie, implantation des équipements et usage quotidien.",
  },
];

export default function PlombierPontoisePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${siteConfig.siteUrl}/plombier-pontoise#service`,
        name: "Plombier à Pontoise",
        provider: { "@id": `${siteConfig.siteUrl}/#organization` },
        areaServed: [
          { "@type": "City", name: "Pontoise" },
          { "@type": "AdministrativeArea", name: "Val-d’Oise" },
        ],
        serviceType: "Dépannage plomberie, installation sanitaire, rénovation",
        url: `${siteConfig.siteUrl}/plombier-pontoise`,
      },
      {
        "@type": "FAQPage",
        "@id": `${siteConfig.siteUrl}/plombier-pontoise#faq`,
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteConfig.siteUrl}/plombier-pontoise#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: siteConfig.siteUrl },
          { "@type": "ListItem", position: 2, name: "Plombier Pontoise", item: `${siteConfig.siteUrl}/plombier-pontoise` },
        ],
      },
    ],
  };

  return (
    <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <Script id="schema-plombier-pontoise" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(structuredData)}
      </Script>

      <nav aria-label="Fil d’Ariane" className="text-sm text-[#5F7484]">
        <Link href="/" className="hover:text-[#397DA9]">Accueil</Link>
        <span> · </span>
        <span>Plombier Pontoise</span>
      </nav>

      <section className="mt-6 rounded-[2rem] border border-[#DDEFFF] bg-[linear-gradient(135deg,_#F8FCFF_0%,_#EFF8FF_45%,_#DDEFFF_100%)] p-7 sm:p-10">
        <p className="inline-flex rounded-full border border-[#C6E3F7] bg-white/80 px-3 py-1 text-xs font-medium text-[#397DA9]">Pontoise (95300) - Val-d’Oise</p>
        <h1 className="mt-4 max-w-[18ch] text-[clamp(2rem,4.2vw,3.2rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-[#173246]">
          Plombier à Pontoise pour dépannage et installation sanitaire
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-[#5F7484]">
          AlloStef intervient à Pontoise pour les besoins de plomberie des particuliers et professionnels : dépannage, remplacement d’équipements, recherche de fuite et travaux de rénovation selon les contraintes du bien.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <a href={`tel:${siteConfig.phoneHref}`} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#397DA9] px-6 py-3 font-semibold text-white hover:bg-[#2F6F98]">
            <PhoneIcon className="h-4 w-4" />
            Appeler AlloStef
          </a>
          <a href="/#devis" className="inline-flex items-center justify-center rounded-full border border-[#C6E3F7] bg-white/80 px-6 py-3 font-semibold text-[#173246] hover:text-[#397DA9]">
            Demander un devis à Pontoise
          </a>
        </div>
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <article className="rounded-[1.5rem] border border-[#DDEFFF] bg-white p-6">
          <h2 className="text-2xl font-semibold text-[#173246]">Interventions typiques</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-[#5F7484]">
            <li>Dépannage de fuites et incidents de plomberie</li>
            <li>Remplacement de sanitaires et robinetterie</li>
            <li>Recherche de fuite et mise en sécurité</li>
            <li>Plomberie de rénovation pour salle de bain</li>
          </ul>
        </article>
        <article className="rounded-[1.5rem] border border-[#DDEFFF] bg-white p-6">
          <h2 className="text-2xl font-semibold text-[#173246]">Pontoise et communes proches</h2>
          <p className="mt-3 text-sm leading-7 text-[#5F7484]">
            Les interventions peuvent être étudiées autour de Pontoise, notamment vers Cergy, Saint-Ouen-l’Aumône, Osny et Éragny selon disponibilité et délai.
          </p>
          <p className="mt-3 text-sm leading-7 text-[#5F7484]">
            Vérifiez votre zone depuis la <a href="/#zones" className="font-semibold text-[#397DA9] hover:text-[#2F6F98]">zone d’intervention</a>.
          </p>
        </article>
      </section>

      <section className="mt-10 rounded-[1.75rem] border border-[#DDEFFF] bg-white p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-[#173246]">Questions fréquentes à Pontoise</h2>
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
        <h2 className="text-2xl font-semibold text-[#173246]">Services complémentaires</h2>
        <p className="mt-3 text-sm leading-7 text-[#5F7484]">
          Pour un besoin global, consultez aussi <Link href="/chauffagiste-oise-val-doise" className="font-semibold text-[#397DA9] hover:text-[#2F6F98]">chauffage</Link> et <Link href="/electricien-oise-val-doise" className="font-semibold text-[#397DA9] hover:text-[#2F6F98]">électricité</Link>.
        </p>
      </section>
    </main>
  );
}
