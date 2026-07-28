import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { PhoneIcon } from "@/components/phone-icon";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Mentions légales | AlloStef",
  description: "Mentions légales du site AlloStef.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/mentions-legales`,
  },
};

export default function MentionsLegalesPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${siteConfig.siteUrl}/mentions-legales#webpage`,
        url: `${siteConfig.siteUrl}/mentions-legales`,
        name: "Mentions légales | AlloStef",
        inLanguage: "fr-FR",
        isPartOf: {
          "@id": `${siteConfig.siteUrl}/#website`,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteConfig.siteUrl}/mentions-legales#breadcrumb`,
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
            name: "Mentions légales",
            item: `${siteConfig.siteUrl}/mentions-legales`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <Script id="schema-mentions-legales" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(structuredData)}
      </Script>
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
          Retour à l’accueil
        </Link>

        <h1 className="mt-5 text-4xl font-semibold tracking-[-0.02em] text-[#173246] sm:text-5xl">Mentions légales</h1>
        <p className="mt-4 text-sm text-[#5F7484]">Dernière mise à jour: {siteConfig.legalLastUpdated}</p>

        <section className="mt-10 space-y-8 rounded-[1.75rem] border border-[#DDEFFF] bg-white p-6 sm:p-8">
          <div>
            <h2 className="text-2xl font-semibold text-[#173246]">Éditeur du site</h2>
            <p className="mt-3 leading-7 text-[#5F7484]">
              Le site est exploité sous le nom commercial <strong>AlloStef</strong>. L’activité professionnelle est exercée par <strong>{siteConfig.legalEntityName}</strong>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#173246]">Informations sur l’entreprise</h2>
            <ul className="mt-3 space-y-2 leading-7 text-[#5F7484]">
              <li>Activité / entreprise: {siteConfig.legalEntityName}</li>
              <li>Nom commercial: {siteConfig.brandName}</li>
              <li>Forme juridique: {siteConfig.legalForm}</li>
              <li>SIRET: {siteConfig.siret}</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#173246]">Hébergement</h2>
            <p className="mt-3 leading-7 text-[#5F7484]">
              Vercel Inc.<br />
              440 N Barranca Avenue #4133<br />
              Covina, CA 91723<br />
              États-Unis<br />
              Site: <a href="https://vercel.com" className="text-[#397DA9] underline underline-offset-4">https://vercel.com</a><br />
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#173246]">Conception et réalisation du site</h2>
            <p className="mt-3 leading-7 text-[#5F7484]">
              Site vitrine conçu et développé pour l’activité {siteConfig.legalEntityName} exploitée sous le nom commercial AlloStef.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#173246]">Propriété intellectuelle</h2>
            <p className="mt-3 leading-7 text-[#5F7484]">
              Les contenus (textes, logos, éléments visuels, images et structure) sont protégés par le droit de la propriété intellectuelle. Toute reproduction, adaptation ou diffusion sans autorisation préalable est interdite, sauf exceptions légales.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#173246]">Responsabilité</h2>
            <p className="mt-3 leading-7 text-[#5F7484]">
              Les informations publiées sur ce site sont fournies à titre indicatif. Elles peuvent évoluer et être mises à jour. L’éditeur ne peut garantir l’absence totale d’erreurs ou d’interruptions.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#173246]">Liens externes</h2>
            <p className="mt-3 leading-7 text-[#5F7484]">
              Le site peut contenir des liens vers des sites tiers. L’éditeur n’exerce aucun contrôle sur ces contenus et décline toute responsabilité quant à leur disponibilité ou leur politique.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#173246]">Droit applicable</h2>
            <p className="mt-3 leading-7 text-[#5F7484]">
              Le présent site est soumis au droit français. En cas de litige et à défaut de résolution amiable, les juridictions compétentes seront saisies selon les règles légales applicables.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#173246]">Contact</h2>
            <ul className="mt-3 space-y-2 leading-7 text-[#5F7484]">
              <li>Téléphone: <a href={`tel:${siteConfig.phoneHref}`} className="text-[#397DA9] underline underline-offset-4">{siteConfig.phoneDisplay}</a></li>
              <li>E-mail: <a href={`mailto:${siteConfig.email}`} className="text-[#397DA9] underline underline-offset-4">{siteConfig.email}</a></li>
            </ul>
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
              Installation, dépannage et entretien en plomberie, chauffage, électricité, plâtrerie, carrelage et rénovation intérieure dans l’Oise et le Val-d’Oise.
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
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#397DA9]">Coordonnées</p>
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
            <a href="/mentions-legales" className="transition hover:text-[#397DA9]">Mentions légales</a>
            {" · "}
            <a href="/politique-de-confidentialite" className="transition hover:text-[#397DA9]">Politique de confidentialité</a>
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
