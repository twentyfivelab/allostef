import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { PhoneIcon } from "@/components/phone-icon";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Electricien Meru (60110) | Depannage et renovation electrique | AlloStef",
  description:
    "AlloStef intervient a Meru pour depannage electrique, remplacement de prises, eclairages, tableau electrique et travaux de renovation.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/electricien-meru`,
  },
};

const faqItems = [
  {
    question: "Intervenez-vous a Meru pour une panne electrique ?",
    answer:
      "Oui. Les pannes electriques a Meru sont traitees selon disponibilite, avec diagnostic de l'origine et remise en service en securite.",
  },
  {
    question: "Pouvez-vous remplacer prises et interrupteurs a Meru ?",
    answer:
      "Oui. Le remplacement de prises, interrupteurs et points d'eclairage peut etre realise selon l'etat de l'installation.",
  },
  {
    question: "Realisez-vous les travaux electriques en renovation ?",
    answer:
      "Oui. AlloStef integre les travaux electriques dans un projet de renovation partielle ou complete, avec approche adaptee au logement.",
  },
];

export default function ElectricienMeruPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${siteConfig.siteUrl}/electricien-meru#service`,
        name: "Electricien a Meru",
        provider: { "@id": `${siteConfig.siteUrl}/#organization` },
        areaServed: [
          { "@type": "City", name: "Meru" },
          { "@type": "AdministrativeArea", name: "Oise" },
        ],
        serviceType: "Depannage, installation et renovation electrique",
        url: `${siteConfig.siteUrl}/electricien-meru`,
      },
      {
        "@type": "FAQPage",
        "@id": `${siteConfig.siteUrl}/electricien-meru#faq`,
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteConfig.siteUrl}/electricien-meru#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: siteConfig.siteUrl },
          { "@type": "ListItem", position: 2, name: "Electricien Meru", item: `${siteConfig.siteUrl}/electricien-meru` },
        ],
      },
    ],
  };

  return (
    <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <Script id="schema-electricien-meru" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(structuredData)}
      </Script>

      <nav aria-label="Fil d'ariane" className="text-sm text-[#5F7484]">
        <Link href="/" className="hover:text-[#397DA9]">Accueil</Link>
        <span> · </span>
        <span>Electricien Meru</span>
      </nav>

      <section className="mt-6 rounded-[2rem] border border-[#DDEFFF] bg-[linear-gradient(135deg,_#F8FCFF_0%,_#EFF8FF_45%,_#DDEFFF_100%)] p-7 sm:p-10">
        <p className="inline-flex rounded-full border border-[#C6E3F7] bg-white/80 px-3 py-1 text-xs font-medium text-[#397DA9]">Meru (60110) - Electricite</p>
        <h1 className="mt-4 max-w-[19ch] text-[clamp(2rem,4.2vw,3.2rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-[#173246]">
          Electricien a Meru pour depannage, installation et renovation
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-[#5F7484]">
          AlloStef intervient a Meru pour vos besoins en electricite: recherche de panne, remplacement de prises et eclairages, intervention sur tableau electrique et adaptation des circuits.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <a href={`tel:${siteConfig.phoneHref}`} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#397DA9] px-6 py-3 font-semibold text-white hover:bg-[#2F6F98]">
            <PhoneIcon className="h-4 w-4" />
            Appeler AlloStef
          </a>
          <a href="/#devis" className="inline-flex items-center justify-center rounded-full border border-[#C6E3F7] bg-white/80 px-6 py-3 font-semibold text-[#173246] hover:text-[#397DA9]">
            Demander un devis electricite a Meru
          </a>
        </div>
      </section>

      <section className="mt-10 rounded-[1.75rem] border border-[#DDEFFF] bg-white p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-[#173246]">Interventions electriques a Meru</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-[#5F7484]">
          <li>Depannage electrique et diagnostic de panne</li>
          <li>Installation et remplacement de prises et interrupteurs</li>
          <li>Pose ou remplacement de luminaires</li>
          <li>Intervention sur tableau electrique et circuits</li>
        </ul>
      </section>

      <section className="mt-10 rounded-[1.75rem] border border-[#DDEFFF] bg-white p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-[#173246]">Questions frequentes a Meru</h2>
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
        <h2 className="text-2xl font-semibold text-[#173246]">Autres villes electricite</h2>
        <p className="mt-3 text-sm leading-7 text-[#5F7484]">
          Consultez aussi: <Link href="/electricien-beauvais" className="font-semibold text-[#397DA9] hover:text-[#2F6F98]">Beauvais</Link>, <Link href="/electricien-cergy" className="font-semibold text-[#397DA9] hover:text-[#2F6F98]">Cergy</Link>, <Link href="/electricien-pontoise" className="font-semibold text-[#397DA9] hover:text-[#2F6F98]">Pontoise</Link> et <Link href="/electricien-compiegne" className="font-semibold text-[#397DA9] hover:text-[#2F6F98]">Compiegne</Link>.
        </p>
      </section>
    </main>
  );
}
