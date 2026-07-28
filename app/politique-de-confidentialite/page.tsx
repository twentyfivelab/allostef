import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { PhoneIcon } from "@/components/phone-icon";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité | AlloStef",
  description: "Politique de confidentialité du site AlloStef.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/politique-de-confidentialite`,
  },
};

export default function PolitiqueDeConfidentialitePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${siteConfig.siteUrl}/politique-de-confidentialite#webpage`,
        url: `${siteConfig.siteUrl}/politique-de-confidentialite`,
        name: "Politique de confidentialité | AlloStef",
        inLanguage: "fr-FR",
        isPartOf: {
          "@id": `${siteConfig.siteUrl}/#website`,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteConfig.siteUrl}/politique-de-confidentialite#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Accueil",
            item: siteConfig.siteUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Politique de confidentialité",
            item: `${siteConfig.siteUrl}/politique-de-confidentialite`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <Script id="schema-politique-confidentialite" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(structuredData)}
      </Script>
      <header className="sticky top-0 z-50 border-b border-[#E7EDF3] bg-[rgba(255,255,255,0.92)] backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center" aria-label="AlloStef accueil">
            <Image src="/allostef-logo-final-transition-corrigee.png" alt="Logo AlloStef" width={140} height={40} className="h-10 w-auto" priority />
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-medium text-[#5E7189] md:flex">
            {siteConfig.navigation.map((item) => (
              <a key={item.href} href={`/${item.href}`} className="nav-link transition hover:text-[#176BC0]">
                {item.label}
              </a>
            ))}
          </nav>
          <a href={`tel:${siteConfig.phoneHref}`} aria-label="Appeler AlloStef" className="inline-flex items-center gap-2 rounded-full bg-[#176BC0] px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_30px_-16px_rgba(23,107,192,0.55)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#105BA7] focus:outline-none focus:ring-2 focus:ring-[#D8E6F2] focus:ring-offset-2">
            <PhoneIcon className="h-4 w-4" />
            Appeler
          </a>
        </div>
      </header>

      <main className="mx-auto w-full max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <Link href="/" className="text-sm font-semibold text-[#176BC0] transition hover:text-[#105BA7]">
          Retour à l’accueil
        </Link>

        <h1 className="mt-5 text-4xl font-semibold tracking-[-0.02em] text-[#0D2345] sm:text-5xl">Politique de confidentialité</h1>
        <p className="mt-4 text-sm text-[#5E7189]">Dernière mise à jour: {siteConfig.privacyLastUpdated}</p>

        <section className="mt-10 space-y-8 rounded-[1.75rem] border border-[#E7EDF3] bg-white p-6 shadow-[0_16px_40px_-32px_rgba(13,35,69,0.16)] sm:p-8">
          <div>
            <h2 className="text-2xl font-semibold text-[#0D2345]">Responsable du traitement</h2>
            <p className="mt-3 leading-7 text-[#5E7189]">
              Le responsable du traitement est l’activité <strong>{siteConfig.legalEntityName}</strong> (nom commercial du site: <strong>{siteConfig.brandName}</strong>), {siteConfig.legalForm}, SIRET {siteConfig.siret}.<br />
              Nom et prénom de l’entrepreneur: [NOM ET PRÉNOM DE L’ENTREPRENEUR À CONFIRMER]<br />
              Adresse professionnelle: [ADRESSE PROFESSIONNELLE À CONFIRMER]<br />
              Téléphone: {siteConfig.phoneDisplay}<br />
              E-mail: {siteConfig.email}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#0D2345]">Données personnelles concernées</h2>
            <p className="mt-3 leading-7 text-[#5E7189]">
              Le site ne propose pas de formulaire en ligne. Les données personnelles sont celles que vous transmettez volontairement lors de la prise de contact, notamment par téléphone ou par e-mail (identité, coordonnées et contenu de la demande).
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#0D2345]">Méthodes de collecte</h2>
            <ul className="mt-3 space-y-2 leading-7 text-[#5E7189]">
              <li>Contact téléphonique via les liens tel: présents sur le site.</li>
              <li>Contact par e-mail via les liens mailto: présents sur le site.</li>
              <li>Aucun formulaire interne n’est soumis depuis le site à ce jour.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#0D2345]">Finalités des traitements</h2>
            <ul className="mt-3 space-y-2 leading-7 text-[#5E7189]">
              <li>Répondre aux demandes entrantes et recontacter les clients.</li>
              <li>Étudier les besoins et les projets.</li>
              <li>Établir des devis et assurer le suivi de la relation commerciale.</li>
              <li>Respecter les obligations légales et comptables applicables.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#0D2345]">Bases légales</h2>
            <ul className="mt-3 space-y-2 leading-7 text-[#5E7189]">
              <li>Mesures précontractuelles à la demande de la personne concernée (réponse à une demande de devis ou de contact).</li>
              <li>Exécution contractuelle lorsque la demande donne lieu à une prestation.</li>
              <li>Obligation légale pour les obligations administratives, fiscales et comptables.</li>
              <li>Intérêt légitime pour l’organisation, la sécurisation et le suivi des échanges professionnels.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#0D2345]">Caractère obligatoire ou facultatif des informations</h2>
            <p className="mt-3 leading-7 text-[#5E7189]">
              Les informations strictement nécessaires au traitement de votre demande (moyen de contact, description du besoin, localisation du chantier) sont indispensables pour obtenir une réponse utile. Les autres informations sont facultatives.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#0D2345]">Destinataires et sous-traitants</h2>
            <p className="mt-3 leading-7 text-[#5E7189]">
              Les données sont destinées à {siteConfig.legalEntityName}. Elles peuvent également être traitées par les prestataires techniques nécessaires au fonctionnement du site et des moyens de communication utilisés (hébergeur, messagerie), dans la limite de leurs attributions.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#0D2345]">Hébergement et éventuels transferts hors de l’Union européenne</h2>
            <p className="mt-3 leading-7 text-[#5E7189]">
              Le site est hébergé sur l’infrastructure de Vercel Inc. (États-Unis). Selon la configuration technique de l’hébergeur, certaines données techniques (ex. journaux de connexion) peuvent transiter ou être traitées hors Union européenne.
              Les garanties contractuelles applicables: [GARANTIES DE TRANSFERT À CONFIRMER LE CAS ÉCHÉANT].
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#0D2345]">Durées de conservation</h2>
            <p className="mt-3 leading-7 text-[#5E7189]">[DURÉE À CONFIRMER]</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#0D2345]">Sécurité des données</h2>
            <p className="mt-3 leading-7 text-[#5E7189]">
              Des mesures techniques et organisationnelles raisonnables sont mises en œuvre pour protéger les données contre l’accès non autorisé, la divulgation, l’altération ou la destruction.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#0D2345]">Droits des utilisateurs</h2>
            <p className="mt-3 leading-7 text-[#5E7189]">
              Vous disposez, selon la réglementation applicable, d’un droit d’accès, de rectification, d’effacement, d’opposition et de limitation du traitement de vos données personnelles.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#0D2345]">Exercice des droits</h2>
            <p className="mt-3 leading-7 text-[#5E7189]">
              Pour exercer vos droits, vous pouvez écrire à: <a href={`mailto:${siteConfig.email}`} className="text-[#176BC0] underline underline-offset-4">{siteConfig.email}</a>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#0D2345]">Réclamation auprès de la CNIL</h2>
            <p className="mt-3 leading-7 text-[#5E7189]">
              Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de la CNIL: <a href="https://www.cnil.fr" className="text-[#176BC0] underline underline-offset-4">https://www.cnil.fr</a>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#0D2345]">Cookies et traceurs</h2>
            <p className="mt-3 leading-7 text-[#5E7189]">
              D’après l’audit du code au {siteConfig.privacyLastUpdated}, le site n’embarque pas d’outil de mesure d’audience, de publicité ou de suivi tiers, et ne dépose pas de traceur non indispensable. Aucun bandeau de consentement supplémentaire n’est activé à ce stade.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#0D2345]">Services et liens externes</h2>
            <ul className="mt-3 space-y-2 leading-7 text-[#5E7189]">
              <li>Liens tel: pour initier un appel vers {siteConfig.phoneDisplay}.</li>
              <li>Liens mailto: pour initier un e-mail vers {siteConfig.email}.</li>
              <li>Hébergement du site par Vercel.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#0D2345]">Mise à jour de la politique</h2>
            <p className="mt-3 leading-7 text-[#5E7189]">
              Cette politique peut évoluer en fonction des changements techniques, légaux ou organisationnels. La date de dernière mise à jour est indiquée en tête de page.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#E7EDF3] bg-[#FFFFFF]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.1fr_0.9fr_0.8fr] lg:px-8">
          <div>
            <div className="flex items-center">
              <Image src="/allostef-logo-final-transition-corrigee.png" alt="Logo AlloStef" width={140} height={40} className="h-10 w-auto" />
            </div>
            <p className="mt-3 max-w-md text-sm leading-7 text-[#5E7189]">
              Installation, dépannage et entretien en plomberie, chauffage, électricité, plâtrerie, carrelage et rénovation intérieure dans l’Oise et le Val-d’Oise.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#176BC0]">Navigation</p>
            <ul className="mt-4 space-y-2 text-sm text-[#5E7189]">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}><a href={`/${item.href}`} className="transition hover:text-[#176BC0]">{item.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#176BC0]">Coordonnées</p>
            <ul className="mt-4 space-y-2 text-sm text-[#5E7189]">
              <li>
                <a href={`tel:${siteConfig.phoneHref}`} className="inline-flex items-center gap-2 transition hover:text-[#176BC0]">
                  <PhoneIcon className="h-4 w-4" />
                  <span>{siteConfig.phoneDisplay}</span>
                </a>
              </li>
              <li><a href={`mailto:${siteConfig.email}`} className="transition hover:text-[#176BC0]">{siteConfig.email}</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#E7EDF3] px-4 py-6 text-center text-sm text-[#5E7189] sm:px-6 lg:px-8">
          <p>
            © <span>{new Date().getFullYear()}</span> AlloStef. {" "}
            <a href="/mentions-legales" className="transition hover:text-[#176BC0]">Mentions légales</a>
            {" · "}
            <a href="/politique-de-confidentialite" className="transition hover:text-[#176BC0]">Politique de confidentialité</a>
          </p>
          <p className="mt-1 text-xs text-[#7D93A3]">
            <a
              href="https://dzrt.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-[#5E7189] hover:underline focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D8E6F2] focus-visible:ring-offset-2"
            >
              Site conçu par DZRT.
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
