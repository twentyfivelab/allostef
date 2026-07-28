import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { PhoneIcon } from "@/components/phone-icon";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Plombier Oise et Val-d'Oise | Dépannage, installation et rénovation | AlloStef",
  description:
    "Besoin d'un plombier dans l'Oise ou le Val-d'Oise ? AlloStef intervient pour dépannage, recherche de fuite, installation sanitaire et rénovation, avec devis clair et intervention soignee.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/plomberie-oise-val-doise`,
  },
};

const faqItems = [
  {
    question: "Intervenez-vous pour une fuite d'eau en urgence ?",
    answer:
      "Oui. Selon la situation et la zone d'intervention, AlloStef peut etudier une intervention rapide pour limiter les degats et remettre votre installation en sécurité.",
  },
  {
    question: "Realisez-vous le remplacement de WC, lavabos et robinetterie ?",
    answer:
      "Oui. AlloStef prend en charge l'installation et le remplacement de sanitaires, de robinetterie et les raccordements associes.",
  },
  {
    question: "Proposez-vous la rénovation complete de plomberie de salle de bain ?",
    answer:
      "Oui. Le reseau alimentation/evacuation, les équipements sanitaires et les finitions peuvent être coordonnes pour une rénovation complete et coherente.",
  },
  {
    question: "Comment se passe le devis ?",
    answer:
      "Vous decrivez votre besoin par telephone ou e-mail, puis un devis detaille est propose apres etude de la situation et des contraintes techniques.",
  },
  {
    question: "Intervenez-vous en dehors de votre zone habituelle ?",
    answer:
      "Pour certains projets, une intervention hors zone peut être étudiée au cas par cas selon le delai, l'urgence et la nature des travaux.",
  },
];

export default function PlomberiePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${siteConfig.siteUrl}/plomberie-oise-val-doise#service`,
        name: "Plomberie dans l'Oise et le Val-d'Oise",
        provider: {
          "@id": `${siteConfig.siteUrl}/#organization`,
        },
        areaServed: [{ "@type": "AdministrativeArea", name: "Oise" }, { "@type": "AdministrativeArea", name: "Val-d'Oise" }],
        serviceType: "Dépannage, installation et rénovation plomberie",
        url: `${siteConfig.siteUrl}/plomberie-oise-val-doise`,
      },
      {
        "@type": "FAQPage",
        "@id": `${siteConfig.siteUrl}/plomberie-oise-val-doise#faq`,
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
        "@id": `${siteConfig.siteUrl}/plomberie-oise-val-doise#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: siteConfig.siteUrl },
          { "@type": "ListItem", position: 2, name: "Plomberie", item: `${siteConfig.siteUrl}/plomberie-oise-val-doise` },
        ],
      },
    ],
  };

  return (
    <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <Script id="schema-plomberie" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(structuredData)}
      </Script>

      <nav aria-label="Fil d'ariane" className="text-sm text-[#5F7484]">
        <Link href="/" className="hover:text-[#397DA9]">Accueil</Link>
        <span> · </span>
        <span>Plomberie</span>
      </nav>

      <section className="mt-6 rounded-[2rem] border border-[#DDEFFF] bg-[linear-gradient(135deg,_#F8FCFF_0%,_#EFF8FF_45%,_#DDEFFF_100%)] p-7 sm:p-10">
        <p className="inline-flex rounded-full border border-[#C6E3F7] bg-white/80 px-3 py-1 text-xs font-medium text-[#397DA9]">
          Plomberie Oise et Val-d'Oise
        </p>
        <h1 className="mt-4 max-w-[20ch] text-[clamp(2rem,4.4vw,3.3rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-[#173246]">
          Plomberie dans l'Oise et le Val-d'Oise : dépannage, installation et rénovation
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-[#5F7484]">
          AlloStef accompagne particuliers et professionnels pour leurs besoins en plomberie : dépannage, installation sanitaire, recherche de fuite et rénovation de salle de bain. Chaque intervention est étudiée pour proposer une solution fiable, lisible et adaptée à votre logement ou local.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <a href={`tel:${siteConfig.phoneHref}`} className="btn-display inline-flex items-center justify-center gap-2 rounded-full bg-[#397DA9] px-6 py-3 font-semibold text-white hover:bg-[#2F6F98]">
            <PhoneIcon className="h-4 w-4" />
            Appeler AlloStef
          </a>
          <a href="/#devis" className="btn-display inline-flex items-center justify-center rounded-full border border-[#C6E3F7] bg-white/80 px-6 py-3 font-semibold text-[#173246] hover:text-[#397DA9]">
            Demander un devis plomberie
          </a>
        </div>
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <article className="rounded-[1.5rem] border border-[#DDEFFF] bg-white p-6">
          <h2 className="text-2xl font-semibold text-[#173246]">Dépannage plomberie rapide et soigne</h2>
          <p className="mt-3 text-sm leading-7 text-[#5F7484]">
            Fuite, probleme d'evacuation, pression instable ou équipement defaillant : AlloStef intervient pour diagnostiquer la panne, securiser l'installation et remettre en service dans les meilleures conditions.
          </p>
        </article>
        <article className="rounded-[1.5rem] border border-[#DDEFFF] bg-white p-6">
          <h2 className="text-2xl font-semibold text-[#173246]">Installation et remplacement de sanitaires</h2>
          <p className="mt-3 text-sm leading-7 text-[#5F7484]">
            Pose et remplacement de WC, lavabos, eviers, vasques et robinetterie, avec verifications des raccordements alimentation et evacuation pour un fonctionnement durable.
          </p>
        </article>
        <article className="rounded-[1.5rem] border border-[#DDEFFF] bg-white p-6">
          <h2 className="text-2xl font-semibold text-[#173246]">Recherche de fuite et mise en sécurité</h2>
          <p className="mt-3 text-sm leading-7 text-[#5F7484]">
            Detection de fuites d'eau ou de gaz, interventions de mise en sécurité, et recommandations claires pour eviter aggravation, pertes et dommages supplementaires.
          </p>
        </article>
        <article className="rounded-[1.5rem] border border-[#DDEFFF] bg-white p-6">
          <h2 className="text-2xl font-semibold text-[#173246]">Plomberie pour rénovation de salle de bain</h2>
          <p className="mt-3 text-sm leading-7 text-[#5F7484]">
            Reprise ou création des reseaux plomberie dans le cadre d'une rénovation, coordination des autres corps de metier et priorité donnee à la fonctionnalité quotidienne.
          </p>
        </article>
      </section>

      <section className="mt-10 rounded-[1.75rem] border border-[#DDEFFF] bg-white p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-[#173246]">Zone d'intervention en Oise et Val-d'Oise</h2>
        <p className="mt-3 text-sm leading-7 text-[#5F7484]">
          AlloStef intervient principalement dans l'Oise et le Val-d'Oise. Consultez la <a href="/#zones" className="font-semibold text-[#397DA9] hover:text-[#2F6F98]">zone d'intervention</a> pour verifier votre commune, puis presentez votre besoin via la section <a href="/#devis" className="font-semibold text-[#397DA9] hover:text-[#2F6F98]">devis</a>.
        </p>
      </section>

      <section className="mt-10 rounded-[1.75rem] border border-[#DDEFFF] bg-white p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-[#173246]">Questions fréquentes plomberie</h2>
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
          Selon votre projet, vous pouvez aussi consulter la page <Link href="/chauffagiste-oise-val-doise" className="font-semibold text-[#397DA9] hover:text-[#2F6F98]">chauffage</Link> ou la page <Link href="/electricien-oise-val-doise" className="font-semibold text-[#397DA9] hover:text-[#2F6F98]">électricité</Link>.
        </p>
      </section>
    </main>
  );
}