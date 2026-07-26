"use client";

import { useEffect, useMemo, useState } from "react";
import { siteConfig } from "@/config/site";
import communesData from "@/data/service-area-communes.json";

const serviceCards = [
  {
    title: "Plomberie",
    subtitle: "Fuites, robinetterie, sanitaires, raccordements",
    description:
      "Des interventions soignées pour les installations, réparations et rénovations de salle de bain ou de cuisine.",
    accent: "from-[#132E2A] to-[#1f4b45]",
  },
  {
    title: "Chauffage",
    subtitle: "Radiateurs, entretien, confort thermique",
    description:
      "Nous étudions les besoins de chauffage pour proposer des solutions claires, cohérentes et adaptées au logement.",
    accent: "from-[#1f4b45] to-[#2d6b5b]",
  },
  {
    title: "Électricité",
    subtitle: "Prises, éclairage, tableaux électriques",
    description:
      "Installation, rénovation et dépannage pour des circuits fiables et des espaces plus fonctionnels.",
    accent: "from-[#2d6b5b] to-[#4f7e6e]",
  },
  {
    title: "Plâtrerie",
    subtitle: "Cloisons, faux plafonds, finitions",
    description:
      "Des murs et plafonds préparés avec soin pour des chantiers plus propres et plus précis.",
    accent: "from-[#4f7e6e] to-[#6d8e84]",
  },
  {
    title: "Carrelage",
    subtitle: "Sol, murs, crédences, salles d’eau",
    description:
      "Pose de revêtements pour les pièces humides comme pour les espaces de vie avec un rendu soigné.",
    accent: "from-[#6d8e84] to-[#93A89D]",
  },
  {
    title: "Rénovation intérieure",
    subtitle: "Coordination de plusieurs travaux",
    description:
      "Un interlocuteur unique pour accompagner un projet plus global dans une même pièce ou dans toute la maison.",
    accent: "from-[#93A89D] to-[#B96F45]",
  },
];

const reassuranceItems = [
  { title: "Un interlocuteur unique", text: "Une seule personne pour comprendre le besoin et suivre l’avancement." },
  { title: "Plusieurs corps de métier", text: "Plomberie, chauffage, électricité, plâtrerie et carrelage, réunis autour d’un même projet." },
  { title: "Des projets étudiés avec soin", text: "Chaque intervention est pensée pour être cohérente, propre et adaptée au logement." },
  { title: "Une intervention locale", text: "AlloStef intervient dans l’Oise et le Val-d’Oise selon la zone du chantier." },
];

const methodSteps = [
  { title: "Prise de contact", text: "Nous recevons votre besoin et repérons les priorités d’intervention." },
  { title: "Étude du besoin", text: "Nous examinons la situation, les contraintes et la nature des travaux à prévoir." },
  { title: "Proposition et devis", text: "Nous vous présentons une approche claire avant toute réalisation." },
  { title: "Réalisation des travaux", text: "Nous mettons en œuvre les interventions avec méthode et respect du logement." },
];

const realizations = [
  { title: "Plomberie", category: "Raccordements et sanitaires" },
  { title: "Chauffage", category: "Remplacement et confort thermique" },
  { title: "Électricité", category: "Éclairage et mise à niveau" },
  { title: "Plâtrerie", category: "Cloisons et finitions" },
  { title: "Carrelage", category: "Revêtements de sol et murs" },
  { title: "Rénovation intérieure", category: "Projets plus globaux" },
];

type Commune = {
  name: string;
  postalCodes: string[];
  departmentCode: string;
  departmentName: string;
  distanceKm: number;
};

const normalize = (value: string) =>
  value
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase();

export default function Home() {
  const [query, setQuery] = useState("");
  const [selectedCommune, setSelectedCommune] = useState<Commune | null>(null);
  const [statusMessage, setStatusMessage] = useState<string>("Saisissez une commune ou un code postal.");
  const [activeIndex, setActiveIndex] = useState(-1);

  const communes = useMemo(() => {
    const items = communesData as Commune[];
    return items.sort((a, b) => a.name.localeCompare(b.name, "fr", { sensitivity: "base" }));
  }, []);

  const filteredCommunes = useMemo(() => {
    const trimmed = query.trim();
    if (!trimmed) return communes.slice(0, 8);

    const normalized = normalize(trimmed);
    return communes.filter((commune) => {
      const searchable = [commune.name, commune.departmentName, ...commune.postalCodes].map(normalize).join(" ");
      return searchable.includes(normalized);
    });
  }, [communes, query]);

  useEffect(() => {
    if (!query.trim()) {
      setSelectedCommune(null);
      setStatusMessage("Saisissez une commune ou un code postal.");
      return;
    }

    const exactMatch = communes.find((entry) => {
      const normalizedInput = normalize(query.trim());
      const normalizedName = normalize(entry.name);
      const normalizedPostal = entry.postalCodes.map(normalize);
      return normalizedName === normalizedInput || normalizedPostal.includes(normalizedInput);
    });

    if (exactMatch) {
      setSelectedCommune(exactMatch);
      setStatusMessage(`AlloStef intervient dans votre secteur : ${exactMatch.name}. Distance indicative depuis Méru : ${exactMatch.distanceKm.toFixed(1)} km.`);
      return;
    }

    setSelectedCommune(null);
    setStatusMessage("Cette commune ne figure pas dans notre zone habituelle de 40 km. Contactez AlloStef pour vérifier si une intervention reste possible.");
  }, [communes, query]);

  const handleSelect = (commune: Commune) => {
    setQuery(commune.name);
    setSelectedCommune(commune);
    setActiveIndex(-1);
    setStatusMessage(`AlloStef intervient dans votre secteur : ${commune.name}. Distance indicative depuis Méru : ${commune.distanceKm.toFixed(1)} km.`);
  };

  const structuredData = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": ["HomeAndConstructionBusiness", "LocalBusiness"],
      name: siteConfig.companyName,
      url: siteConfig.siteUrl,
      telephone: siteConfig.phoneHref,
      email: siteConfig.email,
      areaServed: siteConfig.serviceAreas,
      serviceType: siteConfig.services,
      description:
        "AlloStef intervient dans l’Oise et le Val-d’Oise pour vos travaux de plomberie, chauffage, électricité, plâtrerie, carrelage et rénovation intérieure.",
    }),
    [],
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <header className="sticky top-0 z-50 border-b border-[#D9DDD8] bg-[#FCFBF7]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#top" className="text-xl font-semibold tracking-[-0.02em] text-[#132E2A]" aria-label="AlloStef accueil">
            AlloStef
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium text-[#293633] md:flex">
            {siteConfig.navigation.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-[#B96F45]">
                {item.label}
              </a>
            ))}
          </nav>
          <a href={`tel:${siteConfig.phoneHref}`} aria-label="Appeler AlloStef" className="inline-flex items-center gap-2 rounded-full bg-[#1F7A58] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#176446]">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
              <path d="M7.4 4.5c.4-.8 1.7-.4 2.3.2l.8 1c.3.4.4.9.2 1.3l-.8 1.6a1 1 0 0 0 .2 1.1l2.1 2.1a1 1 0 0 0 1.1.2l1.6-.8c.4-.2.9-.1 1.3.2l1 1c.6.6.9 1.8.2 2.3l-.8.7a3.1 3.1 0 0 1-2.8.8c-2.5-.4-4.8-1.7-6.6-3.5-1.8-1.8-3.1-4.1-3.5-6.6a3.1 3.1 0 0 1 .8-2.8l.7-.8Z" />
            </svg>
            <span className="hidden sm:inline">Appeler</span>
          </a>
        </div>
      </header>

      <main id="top">
        <section className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <p className="mb-5 inline-flex rounded-full border border-[#D7CFC4] bg-[#F4F1EA] px-3.5 py-1.5 text-sm font-medium text-[#4E5A53]">
              Plomberie, chauffage et rénovation dans l’Oise et le Val-d’Oise
            </p>
            <h1 className="text-4xl font-semibold leading-[1.03] tracking-[-0.03em] text-[#132E2A] sm:text-5xl lg:text-6xl">
              Plomberie, chauffage et rénovation dans l’Oise et le Val-d’Oise
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#4F5D58]">
              AlloStef intervient pour vos travaux de plomberie, chauffage, électricité, plâtrerie, carrelage et rénovation intérieure. Un seul interlocuteur pour des travaux cohérents et soignés.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={`tel:${siteConfig.phoneHref}`} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1F7A58] px-6 py-3 font-semibold text-white transition hover:bg-[#176446]" aria-label="Appeler AlloStef">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
                  <path d="M7.4 4.5c.4-.8 1.7-.4 2.3.2l.8 1c.3.4.4.9.2 1.3l-.8 1.6a1 1 0 0 0 .2 1.1l2.1 2.1a1 1 0 0 0 1.1.2l1.6-.8c.4-.2.9-.1 1.3.2l1 1c.6.6.9 1.8.2 2.3l-.8.7a3.1 3.1 0 0 1-2.8.8c-2.5-.4-4.8-1.7-6.6-3.5-1.8-1.8-3.1-4.1-3.5-6.6a3.1 3.1 0 0 1 .8-2.8l.7-.8Z" />
                </svg>
                Appeler AlloStef
              </a>
              <a href="#devis" className="inline-flex items-center justify-center rounded-full border border-[#CFC5B7] bg-[#FCFBF7] px-6 py-3 font-semibold text-[#23322F] transition hover:border-[#B96F45] hover:text-[#B96F45]">
                Demander un devis
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-3 text-sm text-[#4E5A53]">
              <span className="rounded-full border border-[#DCD9D3] bg-white px-3 py-2">Oise et Val-d’Oise</span>
              <span className="rounded-full border border-[#DCD9D3] bg-white px-3 py-2">Particuliers et professionnels</span>
              <span className="rounded-full border border-[#DCD9D3] bg-white px-3 py-2">Plusieurs corps de métier</span>
            </div>
          </div>
          <div className="rounded-[2rem] border border-[#E7E0D7] bg-[#F4F1EA] p-8 shadow-[0_20px_70px_-40px_rgba(19,46,42,0.35)]">
            <div className="rounded-[1.5rem] border border-[#D8CDBB] bg-[#FCFBF7] p-6">
              <div className="flex items-center justify-between border-b border-[#EEE8DD] pb-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B96F45]">Intervention</p>
                  <p className="mt-2 text-xl font-semibold text-[#132E2A]">Travailler avec un seul interlocuteur</p>
                </div>
                <div className="rounded-full bg-[#132E2A] p-3 text-[#F4F1EA]">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                    <path d="M6 8.5h12M6 12h12M6 15.5h8" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
              <div className="mt-6 space-y-3 text-sm leading-7 text-[#4F5D58]">
                <p>• Plomberie, chauffage, électricité, plâtrerie, carrelage et rénovation intérieure.</p>
                <p>• Une approche claire pour les travaux de petite ou grande ampleur.</p>
                <p>• Un cadre de travail soigné du premier contact jusqu’à la fin des travaux.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-[#E7E0D7] bg-[#F4F1EA]">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-3 px-4 py-6 text-sm text-[#3B4A45] sm:px-6 lg:px-8">
            <span className="rounded-full border border-[#D7CFC4] bg-[#FCFBF7] px-4 py-2">Un interlocuteur unique</span>
            <span className="rounded-full border border-[#D7CFC4] bg-[#FCFBF7] px-4 py-2">Plusieurs corps de métier</span>
            <span className="rounded-full border border-[#D7CFC4] bg-[#FCFBF7] px-4 py-2">Des projets étudiés avec soin</span>
            <span className="rounded-full border border-[#D7CFC4] bg-[#FCFBF7] px-4 py-2">Une intervention locale</span>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B96F45]">Services</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-[#132E2A] sm:text-4xl">
              Une offre complète pour les travaux du quotidien et les projets plus ambitieux
            </h2>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {serviceCards.map((service, index) => (
              <article key={service.title} className="group rounded-[1.75rem] border border-[#E7E0D7] bg-[#FCFBF7] p-7 shadow-[0_15px_45px_-28px_rgba(19,46,42,0.25)] transition hover:-translate-y-1">
                <div className={`inline-flex rounded-full bg-gradient-to-r ${service.accent} px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white`}>
                  0{index + 1}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-[#132E2A]">{service.title}</h3>
                <p className="mt-2 text-sm font-medium text-[#B96F45]">{service.subtitle}</p>
                <p className="mt-4 text-sm leading-7 text-[#4F5D58]">{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="method" className="bg-[#132E2A] py-20 text-[#F4F1EA]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#93A89D]">Notre méthode</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl">
                Un parcours clair et rassurant, de la première prise de contact à la fin des travaux
              </h2>
            </div>
            <div className="mt-10 grid gap-4 lg:grid-cols-4">
              {methodSteps.map((step, index) => (
                <div key={step.title} className="rounded-[1.5rem] border border-white/10 bg-white/10 p-6">
                  <p className="text-sm font-semibold text-[#93A89D]">0{index + 1}</p>
                  <h3 className="mt-3 text-lg font-semibold text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#DDE3DF]">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="realisations" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B96F45]">Réalisations</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-[#132E2A] sm:text-4xl">
              Des chantiers soignés, des finitions de qualité, une vision globale du projet
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {realizations.map((item) => (
              <article key={item.title} className="overflow-hidden rounded-[1.75rem] border border-[#E7E0D7] bg-[#FCFBF7] shadow-[0_15px_45px_-28px_rgba(19,46,42,0.2)]">
                <div className="aspect-[4/3] bg-[linear-gradient(135deg,_#132E2A,_#93A89D)]" />
                <div className="p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B96F45]">{item.category}</p>
                  <h3 className="mt-3 text-lg font-semibold text-[#132E2A]">{item.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="zones" className="bg-[#F4F1EA] py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B96F45]">Zone d’intervention</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-[#132E2A] sm:text-4xl">
                AlloStef se déplace dans l’Oise et le Val-d’Oise pour étudier et réaliser vos projets de plomberie, chauffage, électricité, plâtrerie, carrelage et rénovation intérieure.
              </h2>
            </div>
            <div className="mt-10 rounded-[2rem] border border-[#E7E0D7] bg-[#FCFBF7] p-6 shadow-[0_20px_60px_-35px_rgba(19,46,42,0.18)] sm:p-8">
              <label htmlFor="commune-search" className="text-sm font-semibold text-[#132E2A]">
                Rechercher une commune ou un code postal
              </label>
              <div className="mt-4 flex flex-col gap-3 rounded-[1.25rem] border border-[#E7E0D7] bg-white p-3 sm:flex-row">
                <input
                  id="commune-search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Ex. Méru, 60000, Senlis"
                  className="flex-1 rounded-[0.9rem] border border-[#E7E0D7] bg-[#FCFBF7] px-4 py-3 text-sm outline-none ring-0 focus:border-[#B96F45]"
                  role="combobox"
                  aria-autocomplete="list"
                  aria-expanded={filteredCommunes.length > 0}
                  aria-controls="commune-list"
                  aria-label="Rechercher une commune"
                />
              </div>
              <div id="commune-list" className="mt-4 max-h-64 overflow-auto rounded-[1.25rem] border border-[#E7E0D7] bg-white" role="listbox" aria-label="Communes disponibles">
                {filteredCommunes.map((commune, index) => (
                  <button
                    key={`${commune.name}-${commune.postalCodes[0]}`}
                    type="button"
                    role="option"
                    aria-selected={query === commune.name}
                    onClick={() => handleSelect(commune)}
                    onMouseEnter={() => setActiveIndex(index)}
                    className={`flex w-full items-center justify-between px-4 py-3 text-left text-sm transition ${activeIndex === index ? "bg-[#F4F1EA]" : "bg-white"}`}
                  >
                    <span>
                      <span className="block font-semibold text-[#132E2A]">{commune.name}</span>
                      <span className="mt-1 block text-[#6A7A74]">{commune.departmentName} · {commune.postalCodes.join(", ")}</span>
                    </span>
                    <span className="text-[#B96F45]">{commune.distanceKm.toFixed(1)} km</span>
                  </button>
                ))}
              </div>
              <p className="mt-4 text-sm leading-7 text-[#4F5D58]" aria-live="polite">
                {statusMessage}
              </p>
              {selectedCommune ? (
                <div className="mt-5 flex flex-wrap gap-3">
                  <a href={`tel:${siteConfig.phoneHref}`} className="inline-flex items-center gap-2 rounded-full bg-[#1F7A58] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#176446]" aria-label="Appeler AlloStef">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
                      <path d="M7.4 4.5c.4-.8 1.7-.4 2.3.2l.8 1c.3.4.4.9.2 1.3l-.8 1.6a1 1 0 0 0 .2 1.1l2.1 2.1a1 1 0 0 0 1.1.2l1.6-.8c.4-.2.9-.1 1.3.2l1 1c.6.6.9 1.8.2 2.3l-.8.7a3.1 3.1 0 0 1-2.8.8c-2.5-.4-4.8-1.7-6.6-3.5-1.8-1.8-3.1-4.1-3.5-6.6a3.1 3.1 0 0 1 .8-2.8l.7-.8Z" />
                    </svg>
                    Appeler AlloStef
                  </a>
                  <a href={`mailto:${siteConfig.email}?subject=Demande%20de%20devis%20AlloStef`} className="inline-flex items-center gap-2 rounded-full border border-[#CFC5B7] bg-white px-4 py-2.5 text-sm font-semibold text-[#23322F] transition hover:border-[#B96F45] hover:text-[#B96F45]">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
                      <path d="M4.5 7.5h15v9a1 1 0 0 1-1 1h-13a1 1 0 0 1-1-1v-9Zm0 0 7.5 6 7.5-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Écrire pour un devis
                  </a>
                </div>
              ) : null}
            </div>
          </div>
        </section>

        <section id="devis" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-[#E7E0D7] bg-[#132E2A] p-8 text-[#F4F1EA] shadow-[0_20px_70px_-35px_rgba(19,46,42,0.5)] sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#93A89D]">Devis</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl">
              Un projet ? Parlons-en.
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#DDE3DF]">
              Pour présenter votre besoin et obtenir un premier échange, contactez directement AlloStef par téléphone ou par e-mail.
            </p>
            <div className="mt-8 grid gap-4 lg:grid-cols-2">
              <a href={`tel:${siteConfig.phoneHref}`} className="flex items-center gap-4 rounded-[1.5rem] border border-white/10 bg-white/10 p-5 transition hover:bg-white/15" aria-label="Appeler AlloStef">
                <div className="rounded-full bg-[#1F7A58] p-3 text-white">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
                    <path d="M7.4 4.5c.4-.8 1.7-.4 2.3.2l.8 1c.3.4.4.9.2 1.3l-.8 1.6a1 1 0 0 0 .2 1.1l2.1 2.1a1 1 0 0 0 1.1.2l1.6-.8c.4-.2.9-.1 1.3.2l1 1c.6.6.9 1.8.2 2.3l-.8.7a3.1 3.1 0 0 1-2.8.8c-2.5-.4-4.8-1.7-6.6-3.5-1.8-1.8-3.1-4.1-3.5-6.6a3.1 3.1 0 0 1 .8-2.8l.7-.8Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#93A89D]">Appel</p>
                  <p className="mt-1 text-lg font-semibold text-white">{siteConfig.phoneDisplay}</p>
                </div>
              </a>
              <a href={`mailto:${siteConfig.email}?subject=Demande%20de%20devis%20AlloStef`} className="flex items-center gap-4 rounded-[1.5rem] border border-white/10 bg-white/10 p-5 transition hover:bg-white/15">
                <div className="rounded-full bg-[#B96F45] p-3 text-white">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
                    <path d="M4.5 7.5h15v9a1 1 0 0 1-1 1h-13a1 1 0 0 1-1-1v-9Zm0 0 7.5 6 7.5-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#93A89D]">E-mail</p>
                  <p className="mt-1 text-lg font-semibold text-white">{siteConfig.email}</p>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#E7E0D7] bg-[#FCFBF7]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.1fr_0.9fr_0.8fr] lg:px-8">
          <div>
            <p className="text-xl font-semibold tracking-[-0.02em] text-[#132E2A]">AlloStef</p>
            <p className="mt-3 max-w-md text-sm leading-7 text-[#4F5D58]">
              Plomberie, chauffage, électricité, plâtrerie, carrelage et rénovation intérieure dans l’Oise et le Val-d’Oise.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B96F45]">Contact</p>
            <ul className="mt-4 space-y-2 text-sm text-[#4F5D58]">
              <li><a href={`tel:${siteConfig.phoneHref}`} className="transition hover:text-[#B96F45]">{siteConfig.phoneDisplay}</a></li>
              <li><a href={`mailto:${siteConfig.email}`} className="transition hover:text-[#B96F45]">{siteConfig.email}</a></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B96F45]">Navigation</p>
            <ul className="mt-4 space-y-2 text-sm text-[#4F5D58]">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}><a href={item.href} className="transition hover:text-[#B96F45]">{item.label}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-[#E7E0D7] px-4 py-6 text-center text-sm text-[#6A7A74] sm:px-6 lg:px-8">
          <p>© <span>{new Date().getFullYear()}</span> AlloStef. Mentions légales et politique de confidentialité à compléter.</p>
        </div>
      </footer>

      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#E7E0D7] bg-[#FCFBF7]/95 backdrop-blur md:hidden">
        <div className="mx-auto flex max-w-7xl gap-3 px-3 py-3">
          <a href={`tel:${siteConfig.phoneHref}`} className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-[#1F7A58] px-4 py-3 text-sm font-semibold text-white" aria-label="Appeler AlloStef">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
              <path d="M7.4 4.5c.4-.8 1.7-.4 2.3.2l.8 1c.3.4.4.9.2 1.3l-.8 1.6a1 1 0 0 0 .2 1.1l2.1 2.1a1 1 0 0 0 1.1.2l1.6-.8c.4-.2.9-.1 1.3.2l1 1c.6.6.9 1.8.2 2.3l-.8.7a3.1 3.1 0 0 1-2.8.8c-2.5-.4-4.8-1.7-6.6-3.5-1.8-1.8-3.1-4.1-3.5-6.6a3.1 3.1 0 0 1 .8-2.8l.7-.8Z" />
            </svg>
            Appeler
          </a>
          <a href="#devis" className="flex-1 rounded-full border border-[#CFC5B7] px-4 py-3 text-center text-sm font-semibold text-[#23322F]">
            Devis
          </a>
        </div>
      </div>
    </>
  );
}
