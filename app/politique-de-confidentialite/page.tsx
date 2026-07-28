/* eslint-disable react/no-unescaped-entities */

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PhoneIcon } from "@/components/phone-icon";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Politique de confidentialite | AlloStef",
  description: "Politique de confidentialite du site AlloStef.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/politique-de-confidentialite`,
  },
};

export default function PolitiqueDeConfidentialitePage() {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[#DDEFFF] bg-[rgba(248,252,255,0.94)] backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center" aria-label="AlloStef accueil">
            <Image src="/allostef-logo-final-transition-corrigee.png" alt="Logo AlloStef" width={140} height={40} className="h-10 w-auto" priority />
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-medium text-[#5F7484] md:flex">
            {siteConfig.navigation.map((item) => (
              <a key={item.href} href={`/${item.href}`} className="nav-link transition hover:text-[#397DA9]">
                {item.label}
              </a>
            ))}
          </nav>
          <a href={`tel:${siteConfig.phoneHref}`} aria-label="Appeler AlloStef" className="inline-flex items-center gap-2 rounded-full bg-[#397DA9] px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_30px_-16px_rgba(57,125,169,0.7)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#2F6F98] focus:outline-none focus:ring-2 focus:ring-[#C6E3F7] focus:ring-offset-2">
            <PhoneIcon className="h-4 w-4" />
            Appeler
          </a>
        </div>
      </header>

      <main className="mx-auto w-full max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <Link href="/" className="text-sm font-semibold text-[#397DA9] transition hover:text-[#2F6F98]">
          Retour a l'accueil
        </Link>

        <h1 className="mt-5 text-4xl font-semibold tracking-[-0.02em] text-[#173246] sm:text-5xl">Politique de confidentialite</h1>
        <p className="mt-4 text-sm text-[#5F7484]">Derniere mise a jour: {siteConfig.privacyLastUpdated}</p>

        <section className="mt-10 space-y-8 rounded-[1.75rem] border border-[#DDEFFF] bg-white p-6 sm:p-8">
          <div>
            <h2 className="text-2xl font-semibold text-[#173246]">Responsable du traitement</h2>
            <p className="mt-3 leading-7 text-[#5F7484]">
              Le responsable du traitement est l'activite <strong>{siteConfig.legalEntityName}</strong> (nom commercial du site: <strong>{siteConfig.brandName}</strong>), {siteConfig.legalForm}, SIRET {siteConfig.siret}.<br />
              Nom et prenom de l'entrepreneur: [NOM ET PRENOM DE L'ENTREPRENEUR A CONFIRMER]<br />
              Adresse professionnelle: [ADRESSE PROFESSIONNELLE A CONFIRMER]<br />
              Telephone: {siteConfig.phoneDisplay}<br />
              E-mail: {siteConfig.email}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#173246]">Donnees personnelles concernees</h2>
            <p className="mt-3 leading-7 text-[#5F7484]">
              Le site ne propose pas de formulaire en ligne. Les donnees personnelles sont celles que vous transmettez volontairement lors de la prise de contact, notamment par telephone ou par e-mail (identite, coordonnees et contenu de la demande).
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#173246]">Methodes de collecte</h2>
            <ul className="mt-3 space-y-2 leading-7 text-[#5F7484]">
              <li>Contact telephonique via les liens tel: presents sur le site.</li>
              <li>Contact par e-mail via les liens mailto: presents sur le site.</li>
              <li>Aucun formulaire interne n'est soumis depuis le site a ce jour.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#173246]">Finalites des traitements</h2>
            <ul className="mt-3 space-y-2 leading-7 text-[#5F7484]">
              <li>Repondre aux demandes entrantes et recontacter les clients.</li>
              <li>Etudier les besoins et les projets.</li>
              <li>Etablir des devis et assurer le suivi de la relation commerciale.</li>
              <li>Respecter les obligations legales et comptables applicables.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#173246]">Bases legales</h2>
            <ul className="mt-3 space-y-2 leading-7 text-[#5F7484]">
              <li>Mesures precontractuelles a la demande de la personne concernee (reponse a une demande de devis ou de contact).</li>
              <li>Execution contractuelle lorsque la demande donne lieu a une prestation.</li>
              <li>Obligation legale pour les obligations administratives, fiscales et comptables.</li>
              <li>Interet legitime pour l'organisation, la securisation et le suivi des echanges professionnels.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#173246]">Caractere obligatoire ou facultatif des informations</h2>
            <p className="mt-3 leading-7 text-[#5F7484]">
              Les informations strictement necessaires au traitement de votre demande (moyen de contact, description du besoin, localisation du chantier) sont indispensables pour obtenir une reponse utile. Les autres informations sont facultatives.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#173246]">Destinataires et sous-traitants</h2>
            <p className="mt-3 leading-7 text-[#5F7484]">
              Les donnees sont destinees a {siteConfig.legalEntityName}. Elles peuvent egalement etre traitees par les prestataires techniques necessaires au fonctionnement du site et des moyens de communication utilises (hebergeur, messagerie), dans la limite de leurs attributions.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#173246]">Hebergement et eventuels transferts hors de l'Union europeenne</h2>
            <p className="mt-3 leading-7 text-[#5F7484]">
              Le site est heberge sur l'infrastructure de Vercel Inc. (Etats-Unis). Selon la configuration technique de l'hebergeur, certaines donnees techniques (ex. journaux de connexion) peuvent transiter ou etre traitees hors Union europeenne.
              Les garanties contractuelles applicables: [GARANTIES DE TRANSFERT A CONFIRMER LE CAS ECHEANT].
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#173246]">Durees de conservation</h2>
            <p className="mt-3 leading-7 text-[#5F7484]">[DUREE A CONFIRMER]</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#173246]">Securite des donnees</h2>
            <p className="mt-3 leading-7 text-[#5F7484]">
              Des mesures techniques et organisationnelles raisonnables sont mises en oeuvre pour proteger les donnees contre l'acces non autorise, la divulgation, l'alteration ou la destruction.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#173246]">Droits des utilisateurs</h2>
            <p className="mt-3 leading-7 text-[#5F7484]">
              Vous disposez, selon la reglementation applicable, d'un droit d'acces, de rectification, d'effacement, d'opposition et de limitation du traitement de vos donnees personnelles.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#173246]">Exercice des droits</h2>
            <p className="mt-3 leading-7 text-[#5F7484]">
              Pour exercer vos droits, vous pouvez ecrire a: <a href={`mailto:${siteConfig.email}`} className="text-[#397DA9] underline underline-offset-4">{siteConfig.email}</a>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#173246]">Reclamation aupres de la CNIL</h2>
            <p className="mt-3 leading-7 text-[#5F7484]">
              Si vous estimez que vos droits ne sont pas respectes, vous pouvez introduire une reclamation aupres de la CNIL: <a href="https://www.cnil.fr" className="text-[#397DA9] underline underline-offset-4">https://www.cnil.fr</a>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#173246]">Cookies et traceurs</h2>
            <p className="mt-3 leading-7 text-[#5F7484]">
              D'apres l'audit du code au {siteConfig.privacyLastUpdated}, le site n'embarque pas d'outil de mesure d'audience, de publicite ou de suivi tiers, et ne depose pas de traceur non indispensable. Aucun bandeau de consentement supplementaire n'est active a ce stade.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#173246]">Services et liens externes</h2>
            <ul className="mt-3 space-y-2 leading-7 text-[#5F7484]">
              <li>Liens tel: pour initier un appel vers {siteConfig.phoneDisplay}.</li>
              <li>Liens mailto: pour initier un e-mail vers {siteConfig.email}.</li>
              <li>Hebergement du site par Vercel.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#173246]">Mise a jour de la politique</h2>
            <p className="mt-3 leading-7 text-[#5F7484]">
              Cette politique peut evoluer en fonction des changements techniques, legaux ou organisationnels. La date de derniere mise a jour est indiquee en tete de page.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#DDEFFF] bg-[#F8FCFF]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.1fr_0.9fr_0.8fr] lg:px-8">
          <div>
            <div className="flex items-center">
              <Image src="/allostef-logo-final-transition-corrigee.png" alt="Logo AlloStef" width={140} height={40} className="h-10 w-auto" />
            </div>
            <p className="mt-3 max-w-md text-sm leading-7 text-[#5F7484]">
              Installation, depannage et entretien en plomberie, chauffage, electricite, platrerie, carrelage et renovation interieure dans l'Oise et le Val-d'Oise.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#397DA9]">Navigation</p>
            <ul className="mt-4 space-y-2 text-sm text-[#5F7484]">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}><a href={`/${item.href}`} className="transition hover:text-[#397DA9]">{item.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#397DA9]">Coordonnees</p>
            <ul className="mt-4 space-y-2 text-sm text-[#5F7484]">
              <li>
                <a href={`tel:${siteConfig.phoneHref}`} className="inline-flex items-center gap-2 transition hover:text-[#397DA9]">
                  <PhoneIcon className="h-4 w-4" />
                  <span>{siteConfig.phoneDisplay}</span>
                </a>
              </li>
              <li><a href={`mailto:${siteConfig.email}`} className="transition hover:text-[#397DA9]">{siteConfig.email}</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#DDEFFF] px-4 py-6 text-center text-sm text-[#5F7484] sm:px-6 lg:px-8">
          <p>
            © <span>{new Date().getFullYear()}</span> AlloStef. {" "}
            <a href="/mentions-legales" className="transition hover:text-[#397DA9]">Mentions legales</a>
            {" · "}
            <a href="/politique-de-confidentialite" className="transition hover:text-[#397DA9]">Politique de confidentialite</a>
          </p>
          <p className="mt-1 text-xs text-[#7D93A3]">
            <a
              href="https://dzrt.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-[#5F7484] hover:underline focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6E3F7] focus-visible:ring-offset-2"
            >
              Site conçu par DZRT.
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
