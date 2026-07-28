import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { PhoneIcon } from "@/components/phone-icon";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Electricien Oise et Val-d'Oise | Dépannage et rénovation électrique | AlloStef",
  description:
    "Besoin d'un electricien dans l'Oise ou le Val-d'Oise ? AlloStef intervient pour dépannage, prises, éclairages, tableau électrique et travaux de rénovation en toute fiabilité.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/electricien-oise-val-doise`,
  },
};

const faqItems = [
  {
    question: "Intervenez-vous pour une panne partielle ou totale ?",
    answer:
      "Oui. AlloStef intervient pour diagnostiquer l'origine de la panne et remettre l'installation en etat de fonctionnement en sécurité.",
  },
  {
    question: "Pouvez-vous moderniser un tableau électrique ?",
    answer:
      "Oui. Le tableau peut être adapte ou remplace selon l'etat de l'installation et les besoins en sécurité et en distribution.",
  },
  {
    question: "Faites-vous les travaux électriques en rénovation ?",
    answer:
      "Oui. Les travaux électriques peuvent être integres à une rénovation partielle ou globale en coordination avec les autres interventions.",
  },
  {
    question: "Comment obtenir un devis électricité ?",
    answer:
      "Il suffit d'expliquer votre besoin par telephone ou e-mail. Une etude est realisee pour fournir un devis clair et adapte au projet.",
  },
  {
    question: "Travaillez-vous pour particuliers et professionnels ?",
    answer:
      "Oui. AlloStef accompagne les particuliers comme les professionnels dans l'Oise et le Val-d'Oise.",
  },
];

export default function ElectricitePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${siteConfig.siteUrl}/electricien-oise-val-doise#service`,
        name: "Électricité dans l'Oise et le Val-d'Oise",
        provider: {
          "@id": `${siteConfig.siteUrl}/#organization`,
        },
        areaServed: [{ "@type": "AdministrativeArea", name: "Oise" }, { "@type": "AdministrativeArea", name: "Val-d'Oise" }],
        serviceType: "Dépannage, installation et rénovation électrique",
        url: `${siteConfig.siteUrl}/electricien-oise-val-doise`,
      },
      {
        "@type": "FAQPage",
        "@id": `${siteConfig.siteUrl}/electricien-oise-val-doise#faq`,
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
        "@id": `${siteConfig.siteUrl}/electricien-oise-val-doise#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: siteConfig.siteUrl },
          { "@type": "ListItem", position: 2, name: "Électricité", item: `${siteConfig.siteUrl}/electricien-oise-val-doise` },
        ],
      },
    ],
  };

  return (
    <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <Script id="schema-électricité" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(structuredData)}
      </Script>

      <nav aria-label="Fil d'ariane" className="text-sm text-[#5F7484]">
        <Link href="/" className="hover:text-[#397DA9]">Accueil</Link>
        <span> · </span>
        <span>Électricité</span>
      </nav>

      <section className="mt-6 rounded-[2rem] border border-[#DDEFFF] bg-[linear-gradient(135deg,_#F8FCFF_0%,_#EFF8FF_45%,_#DDEFFF_100%)] p-7 sm:p-10">
        <p className="inline-flex rounded-full border border-[#C6E3F7] bg-white/80 px-3 py-1 text-xs font-medium text-[#397DA9]">
          Electricien Oise et Val-d'Oise
        </p>
        <h1 className="mt-4 max-w-[20ch] text-[clamp(2rem,4.4vw,3.3rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-[#173246]">
          Électricité dans l'Oise et le Val-d'Oise : dépannage, installation et rénovation
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-[#5F7484]">
          AlloStef realise les travaux électriques indispensables au bon fonctionnement du logement : dépannage, prise et éclairage, intervention sur tableau électrique et adaptation en rénovation.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <a href={`tel:${siteConfig.phoneHref}`} className="btn-display inline-flex items-center justify-center gap-2 rounded-full bg-[#397DA9] px-6 py-3 font-semibold text-white hover:bg-[#2F6F98]">
            <PhoneIcon className="h-4 w-4" />
            Appeler AlloStef
          </a>
          <a href="/#devis" className="btn-display inline-flex items-center justify-center rounded-full border border-[#C6E3F7] bg-white/80 px-6 py-3 font-semibold text-[#173246] hover:text-[#397DA9]">
            Demander un devis électricité
          </a>
        </div>
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <article className="rounded-[1.5rem] border border-[#DDEFFF] bg-white p-6">
          <h2 className="text-2xl font-semibold text-[#173246]">Dépannage électrique du quotidien</h2>
          <p className="mt-3 text-sm leading-7 text-[#5F7484]">
            Recherche de panne, remise en fonctionnement et contrôles de sécurité pour retablir l'usage normal de l'installation.
          </p>
        </article>
        <article className="rounded-[1.5rem] border border-[#DDEFFF] bg-white p-6">
          <h2 className="text-2xl font-semibold text-[#173246]">Installation et remplacement de prises et éclairages</h2>
          <p className="mt-3 text-sm leading-7 text-[#5F7484]">
            Pose ou remplacement d'équipements électriques avec attention portee au confort d'usage et à la fiabilité des branchements.
          </p>
        </article>
        <article className="rounded-[1.5rem] border border-[#DDEFFF] bg-white p-6">
          <h2 className="text-2xl font-semibold text-[#173246]">Intervention sur tableau électrique</h2>
          <p className="mt-3 text-sm leading-7 text-[#5F7484]">
            Diagnostic du tableau, ajustement de la distribution et securisation des circuits selon la configuration de votre bien.
          </p>
        </article>
        <article className="rounded-[1.5rem] border border-[#DDEFFF] bg-white p-6">
          <h2 className="text-2xl font-semibold text-[#173246]">Électricité pour rénovation intérieure</h2>
          <p className="mt-3 text-sm leading-7 text-[#5F7484]">
            Integration des travaux électriques dans un projet de rénovation pour une installation plus pratique, plus sure et mieux adaptée aux usages.
          </p>
        </article>
      </section>

      <section className="mt-10 rounded-[1.75rem] border border-[#DDEFFF] bg-white p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-[#173246]">Zone d'intervention en Oise et Val-d'Oise</h2>
        <p className="mt-3 text-sm leading-7 text-[#5F7484]">
          AlloStef intervient principalement dans l'Oise et le Val-d'Oise. Utilisez la <a href="/#zones" className="font-semibold text-[#397DA9] hover:text-[#2F6F98]">zone d'intervention</a> pour verifier votre secteur et la section <a href="/#devis" className="font-semibold text-[#397DA9] hover:text-[#2F6F98]">devis</a> pour presenter votre besoin.
        </p>
      </section>

      <section className="mt-10 rounded-[1.75rem] border border-[#DDEFFF] bg-white p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-[#173246]">Questions fréquentes électricité</h2>
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
          Selon votre projet, vous pouvez aussi consulter la page <Link href="/plomberie-oise-val-doise" className="font-semibold text-[#397DA9] hover:text-[#2F6F98]">plomberie</Link> ou la page <Link href="/chauffagiste-oise-val-doise" className="font-semibold text-[#397DA9] hover:text-[#2F6F98]">chauffage</Link>.
        </p>
        <p className="mt-3 text-sm leading-7 text-[#5F7484]">
          Pages locales électricité prioritaires: <Link href="/electricien-meru" className="font-semibold text-[#397DA9] hover:text-[#2F6F98]">Meru</Link>, <Link href="/electricien-beauvais" className="font-semibold text-[#397DA9] hover:text-[#2F6F98]">Beauvais</Link>, <Link href="/electricien-cergy" className="font-semibold text-[#397DA9] hover:text-[#2F6F98]">Cergy</Link> et <Link href="/electricien-pontoise" className="font-semibold text-[#397DA9] hover:text-[#2F6F98]">Pontoise</Link>.
        </p>
      </section>
    </main>
  );
}