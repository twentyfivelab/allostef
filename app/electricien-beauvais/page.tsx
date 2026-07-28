import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { PhoneIcon } from "@/components/phone-icon";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Electricien Beauvais (60000) | Depannage et installation electrique | AlloStef",
  description:
    "A Beauvais, AlloStef intervient pour depannage electrique, tableau, prises, eclairages et travaux de mise a niveau en renovation.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/electricien-beauvais`,
  },
};

const faqItems = [
  {
    question: "Pouvez-vous intervenir en depannage electrique a Beauvais ?",
    answer:
      "Oui. Les demandes de depannage electrique a Beauvais sont traitees selon disponibilite, avec recherche de cause et remise en etat.",
  },
  {
    question: "Intervenez-vous sur le tableau electrique ?",
    answer:
      "Oui. Le tableau electrique peut etre controle, adapte ou remplace selon la configuration et le niveau de securite attendu.",
  },
  {
    question: "Proposez-vous des travaux electriques pour renovation interieure ?",
    answer:
      "Oui. Les travaux electriques sont integres a vos projets de renovation pour une installation plus pratique et fiable.",
  },
];

export default function ElectricienBeauvaisPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${siteConfig.siteUrl}/electricien-beauvais#service`,
        name: "Electricien a Beauvais",
        provider: { "@id": `${siteConfig.siteUrl}/#organization` },
        areaServed: [
          { "@type": "City", name: "Beauvais" },
          { "@type": "AdministrativeArea", name: "Oise" },
        ],
        serviceType: "Depannage, installation et renovation electrique",
        url: `${siteConfig.siteUrl}/electricien-beauvais`,
      },
      {
        "@type": "FAQPage",
        "@id": `${siteConfig.siteUrl}/electricien-beauvais#faq`,
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteConfig.siteUrl}/electricien-beauvais#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: siteConfig.siteUrl },
          { "@type": "ListItem", position: 2, name: "Electricien Beauvais", item: `${siteConfig.siteUrl}/electricien-beauvais` },
        ],
      },
    ],
  };

  return (
    <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <Script id="schema-electricien-beauvais" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(structuredData)}
      </Script>

      <nav aria-label="Fil d'ariane" className="text-sm text-[#5F7484]">
        <Link href="/" className="hover:text-[#397DA9]">Accueil</Link>
        <span> · </span>
        <span>Electricien Beauvais</span>
      </nav>

      <section className="mt-6 rounded-[2rem] border border-[#DDEFFF] bg-[linear-gradient(135deg,_#F8FCFF_0%,_#EFF8FF_45%,_#DDEFFF_100%)] p-7 sm:p-10">
        <p className="inline-flex rounded-full border border-[#C6E3F7] bg-white/80 px-3 py-1 text-xs font-medium text-[#397DA9]">Beauvais (60000) - Electricite</p>
        <h1 className="mt-4 max-w-[19ch] text-[clamp(2rem,4.2vw,3.2rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-[#173246]">
          Electricien a Beauvais pour depannage, tableau et renovation
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-[#5F7484]">
          A Beauvais, AlloStef intervient sur les pannes electriques, le remplacement de prises et eclairages, ainsi que l'adaptation de tableaux et circuits en renovation.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <a href={`tel:${siteConfig.phoneHref}`} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#397DA9] px-6 py-3 font-semibold text-white hover:bg-[#2F6F98]">
            <PhoneIcon className="h-4 w-4" />
            Appeler AlloStef
          </a>
          <a href="/#devis" className="inline-flex items-center justify-center rounded-full border border-[#C6E3F7] bg-white/80 px-6 py-3 font-semibold text-[#173246] hover:text-[#397DA9]">
            Demander un devis electricite a Beauvais
          </a>
        </div>
      </section>

      <section className="mt-10 rounded-[1.75rem] border border-[#DDEFFF] bg-white p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-[#173246]">Interventions electriques a Beauvais</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-[#5F7484]">
          <li>Depannage electrique et recherche de panne</li>
          <li>Remplacement de prises, interrupteurs et eclairages</li>
          <li>Intervention et ajustement du tableau electrique</li>
          <li>Travaux electriques en renovation interieure</li>
        </ul>
      </section>

      <section className="mt-10 rounded-[1.75rem] border border-[#DDEFFF] bg-white p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-[#173246]">Questions frequentes a Beauvais</h2>
        <div className="mt-4 space-y-4">
          {faqItems.map((item) => (
            <article key={item.question} className="rounded-xl border border-[#E4F1FC] bg-[#F8FCFF] p-4">
              <h3 className="text-base font-semibold text-[#173246]">{item.question}</h3>
              <p className="mt-2 text-sm leading-7 text-[#5F7484]">{item.answer}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
