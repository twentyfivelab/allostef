import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { PhoneIcon } from "@/components/phone-icon";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Chauffagiste Oise et Val-d’Oise | Dépannage, entretien, installation | AlloStef",
  description:
    "AlloStef, chauffagiste dans l’Oise et le Val-d’Oise : dépannage chauffage, entretien et remplacement de chaudières, adaptation de circuits et solutions durables pour votre confort.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/chauffagiste-oise-val-doise`,
  },
};

const faqItems = [
  {
    question: "Proposez-vous l’entretien de chaudière ?",
    answer:
      "AlloStef intervient pour l’entretien et le suivi des installations de chauffage afin de maintenir performance, sécurité et confort au quotidien.",
  },
  {
    question: "Quand faut-il envisager un remplacement de chaudière ?",
    answer:
      "Un remplacement peut être pertinent en cas de pannes répétées, surconsommation, performances en baisse ou impossibilité de réparation durable.",
  },
  {
    question: "Intervenez-vous sur radiateurs et circuits de chauffage ?",
    answer:
      "AlloStef peut adapter, modifier ou remplacer des éléments du circuit de chauffage et des radiateurs selon la configuration du logement.",
  },
  {
    question: "Faites-vous du dépannage chauffage en période hivernale ?",
    answer:
      "Les demandes de dépannage chauffage sont traitées en priorité selon disponibilité et zone afin de limiter les inconforts.",
  },
  {
    question: "Quels délais pour un devis chauffage ?",
    answer:
      "Après prise d’information, un devis est établi rapidement avec un niveau de détail adapté au projet d’entretien, de dépannage ou de remplacement.",
  },
];

export default function ChauffagePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${siteConfig.siteUrl}/chauffagiste-oise-val-doise#service`,
        name: "Chauffage dans l’Oise et le Val-d’Oise",
        provider: {
          "@id": `${siteConfig.siteUrl}/#organization`,
        },
        areaServed: [{ "@type": "AdministrativeArea", name: "Oise" }, { "@type": "AdministrativeArea", name: "Val-d’Oise" }],
        serviceType: "Dépannage, entretien et installation chauffage",
        url: `${siteConfig.siteUrl}/chauffagiste-oise-val-doise`,
      },
      {
        "@type": "FAQPage",
        "@id": `${siteConfig.siteUrl}/chauffagiste-oise-val-doise#faq`,
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteConfig.siteUrl}/chauffagiste-oise-val-doise#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: siteConfig.siteUrl },
          { "@type": "ListItem", position: 2, name: "Chauffage", item: `${siteConfig.siteUrl}/chauffagiste-oise-val-doise` },
        ],
      },
    ],
  };

  return (
    <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <Script id="schema-chauffage" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(structuredData)}
      </Script>

      <nav aria-label="Fil d’Ariane" className="text-sm text-[#5F7484]">
        <Link href="/" className="hover:text-[#397DA9]">Accueil</Link>
        <span> · </span>
        <span>Chauffage</span>
      </nav>

      <section className="mt-6 rounded-[2rem] border border-[#DDEFFF] bg-[linear-gradient(135deg,_#F8FCFF_0%,_#EFF8FF_45%,_#DDEFFF_100%)] p-7 sm:p-10">
        <p className="inline-flex rounded-full border border-[#C6E3F7] bg-white/80 px-3 py-1 text-xs font-medium text-[#397DA9]">
          Chauffagiste Oise et Val-d’Oise
        </p>
        <h1 className="mt-4 max-w-[20ch] text-[clamp(2rem,4.4vw,3.3rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-[#173246]">
          Chauffage dans l’Oise et le Val-d’Oise : dépannage, entretien et installation
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-[#5F7484]">
          AlloStef intervient sur les installations de chauffage pour le dépannage, l’entretien et le remplacement d’équipements. L’objectif est de rétablir votre confort rapidement et d’améliorer la fiabilité de votre système dans la durée.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <a href={`tel:${siteConfig.phoneHref}`} className="btn-display inline-flex items-center justify-center gap-2 rounded-full bg-[#397DA9] px-6 py-3 font-semibold text-white hover:bg-[#2F6F98]">
            <PhoneIcon className="h-4 w-4" />
            Appeler AlloStef
          </a>
          <a href="/#devis" className="btn-display inline-flex items-center justify-center rounded-full border border-[#C6E3F7] bg-white/80 px-6 py-3 font-semibold text-[#173246] hover:text-[#397DA9]">
            Demander un devis chauffage
          </a>
        </div>
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <article className="rounded-[1.5rem] border border-[#DDEFFF] bg-white p-6">
          <h2 className="text-2xl font-semibold text-[#173246]">Dépannage de systèmes de chauffage</h2>
          <p className="mt-3 text-sm leading-7 text-[#5F7484]">
            Diagnostic de panne, remise en route, contrôle des points critiques et recherche de cause pour limiter les récurrences.
          </p>
        </article>
        <article className="rounded-[1.5rem] border border-[#DDEFFF] bg-white p-6">
          <h2 className="text-2xl font-semibold text-[#173246]">Entretien et suivi de chaudières</h2>
          <p className="mt-3 text-sm leading-7 text-[#5F7484]">
            Entretien courant et vérifications pour conserver rendement, sécurité de fonctionnement et confort thermique régulier.
          </p>
        </article>
        <article className="rounded-[1.5rem] border border-[#DDEFFF] bg-white p-6">
          <h2 className="text-2xl font-semibold text-[#173246]">Remplacement de chaudière et ballon d’eau chaude</h2>
          <p className="mt-3 text-sm leading-7 text-[#5F7484]">
            Étude de solution adaptée, remplacement des équipements et adaptation des raccordements pour une installation cohérente.
          </p>
        </article>
        <article className="rounded-[1.5rem] border border-[#DDEFFF] bg-white p-6">
          <h2 className="text-2xl font-semibold text-[#173246]">Circuits de chauffage et radiateurs</h2>
          <p className="mt-3 text-sm leading-7 text-[#5F7484]">
            Intervention sur circuits, émetteurs et réglages pour équilibrer la diffusion de chaleur et optimiser le confort des occupants.
          </p>
        </article>
      </section>

      <section className="mt-10 rounded-[1.75rem] border border-[#DDEFFF] bg-white p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-[#173246]">Zone d’intervention en Oise et Val-d’Oise</h2>
        <p className="mt-3 text-sm leading-7 text-[#5F7484]">
          AlloStef intervient principalement dans l’Oise et le Val-d’Oise. Vérifiez votre secteur via la <a href="/#zones" className="font-semibold text-[#397DA9] hover:text-[#2F6F98]">zone d’intervention</a> et demandez votre <a href="/#devis" className="font-semibold text-[#397DA9] hover:text-[#2F6F98]">devis chauffage</a>.
        </p>
      </section>

      <section className="mt-10 rounded-[1.75rem] border border-[#DDEFFF] bg-white p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-[#173246]">Questions fréquentes chauffage</h2>
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
        <h2 className="text-2xl font-semibold text-[#173246]">Autres services utiles</h2>
        <p className="mt-3 text-sm leading-7 text-[#5F7484]">
          Pour un besoin connexe, consultez la page <Link href="/plomberie-oise-val-doise" className="font-semibold text-[#397DA9] hover:text-[#2F6F98]">plomberie</Link> ou la page <Link href="/electricien-oise-val-doise" className="font-semibold text-[#397DA9] hover:text-[#2F6F98]">électricité</Link>.
        </p>
        <p className="mt-3 text-sm leading-7 text-[#5F7484]">
          Pages locales chauffage prioritaires: <Link href="/chauffagiste-meru" className="font-semibold text-[#397DA9] hover:text-[#2F6F98]">Meru</Link>, <Link href="/chauffagiste-beauvais" className="font-semibold text-[#397DA9] hover:text-[#2F6F98]">Beauvais</Link>, <Link href="/chauffagiste-cergy" className="font-semibold text-[#397DA9] hover:text-[#2F6F98]">Cergy</Link> et <Link href="/chauffagiste-pontoise" className="font-semibold text-[#397DA9] hover:text-[#2F6F98]">Pontoise</Link>.
        </p>
      </section>
    </main>
  );
}
