"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState, type KeyboardEvent } from "react";
import { siteConfig } from "@/config/site";
import { serviceAreaCommunes, type ServiceAreaCommune } from "@/data/service-area";

const serviceCards = [
  {
    title: "Plomberie",
    subtitle: "Interventions de plomberie pour le dépannage, l'installation et la rénovation.",
    bullets: [
      "Dépannage de plomberie, quelle que soit la nature du problème",
      "Installation et remplacement de WC, éviers, lavabos et vasques",
      "Installation et remplacement de robinetterie",
      "Raccordements, alimentations et évacuations",
      "Recherche de fuites d’eau ou de gaz, à l’intérieur comme à l’extérieur",
      "Travaux de plomberie pour la création ou la rénovation de salles de bain",
    ],
    imageSrc: "/images/realizations/realisation-plomberie.png",
    imageAlt: "Intervention de plomberie avec équipements sanitaires installés",
    cardClass: "border-[#C6E3F7] bg-[linear-gradient(145deg,_#F8FCFF_0%,_#EFF8FF_100%)]",
  },
  {
    title: "Chauffage",
    subtitle: "Solutions de chauffage pour l'entretien, le dépannage et le remplacement d'équipements.",
    bullets: [
      "Dépannage de systèmes de chauffage",
      "Dépannage et entretien de chaudières de différents types",
      "Installation et remplacement de chaudières",
      "Installation et remplacement de ballons d’eau chaude",
      "Installation et modification de circuits de chauffage",
      "Installation et remplacement de radiateurs",
      "Entretien de climatisations réversibles",
      "La pose de climatisation n’est pas proposée",
    ],
    imageSrc: "/images/realizations/realisation-chauffage.png",
    imageAlt: "Installation de chauffage avec radiateurs et réglages techniques",
    cardClass: "border-[#E2B2A5] bg-[linear-gradient(145deg,_#FFF8F6_0%,_#F6DED7_100%)]",
  },
  {
    title: "Électricité",
    subtitle: "Travaux électriques adaptés aux besoins du logement et des rénovations.",
    bullets: [
      "Dépannage électrique",
      "Installation et remplacement de prises",
      "Installation d’éclairages",
      "Intervention sur les tableaux électriques",
      "Travaux électriques dans le cadre d’une rénovation",
    ],
    imageSrc: "/images/realizations/realisation-electricite.png",
    imageAlt: "Travaux d'électricité sur prises, éclairages et tableau électrique",
    cardClass: "border-[#EBCB8C] bg-[linear-gradient(145deg,_#FFFCF5_0%,_#FBEED4_100%)]",
  },
  {
    title: "Plâtrerie",
    subtitle: "Travaux de plâtrerie intérieure pour structurer et préparer les espaces.",
    bullets: [
      "Création de cloisons",
      "Pose de plaques de plâtre",
      "Création de faux plafonds",
      "Préparation des murs et des plafonds",
      "Travaux de finition intérieure",
    ],
    imageSrc: "/images/realizations/realisation-platrerie.png",
    imageAlt: "Travaux de plâtrerie avec cloisons et finitions intérieures",
    cardClass: "border-[#A7B8DF] bg-[linear-gradient(145deg,_#F9FAFF_0%,_#F0F3FF_100%)]",
  },
  {
    title: "Carrelage et faïence",
    subtitle: "Revêtements et finitions pour les pièces d'eau et les espaces de vie.",
    bullets: [
      "Pose de carrelage",
      "Pose de faïence",
      "Revêtements de sols et de murs",
      "Travaux pour salles de bain et cuisines",
      "Finitions et rénovation des surfaces",
    ],
    imageSrc: "/images/realizations/realisation-carrelage-faience.png",
    imageAlt: "Pose de carrelage et de faïence avec finitions soignées",
    cardClass: "border-[#E2F3F1] bg-[linear-gradient(145deg,_#FCFEFF_0%,_#F3FBFA_100%)]",
  },
];

const reassuranceItems = [
  { title: "Un interlocuteur unique", text: "Une seule personne pour comprendre le besoin et suivre l’avancement." },
  { title: "Plusieurs corps de métier", text: "Plomberie, chauffage, électricité, plâtrerie et carrelage, réunis autour d’un même projet." },
  { title: "Des projets étudiés avec soin", text: "Chaque intervention est pensée pour être cohérente, propre et adaptée au logement." },
  { title: "Une intervention locale", text: "AlloStef intervient dans l’Oise et le Val-d’Oise selon la zone du chantier." },
];

function PhoneIcon({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path
        d="M2.25 4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .964.351 1.091.852l1.106 4.423a1.125 1.125 0 0 1-.417 1.131l-1.293 1.034a11.038 11.038 0 0 0 5.516 5.516l1.034-1.293a1.125 1.125 0 0 1 1.13-.417l4.424 1.106c.501.125.852.575.852 1.091V19.5A2.25 2.25 0 0 1 18.75 21.75h-1.5C9.656 21.75 2.25 14.344 2.25 5.25V4.5Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const normalize = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[\u2019’']/g, "")
    .replace(/[-\s/.,()]/g, "")
    .toLowerCase();

export default function Home() {
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isSuggestionsOpen, setIsSuggestionsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const communes = useMemo(() => {
    return serviceAreaCommunes;
  }, []);

  const filteredCommunes = useMemo(() => {
    const trimmed = query.trim();
    if (!trimmed) return [];

    const normalized = normalize(trimmed);
    return communes.filter((commune) => {
      const searchable = [commune.name, ...commune.postalCodes, commune.departmentName].map(normalize).join(" ");
      return searchable.includes(normalized);
    });
  }, [communes, query]);

  const exactMatch = useMemo(() => {
    const trimmed = query.trim();
    if (!trimmed) return null;

    return communes.find((entry) => {
      const normalizedInput = normalize(trimmed);
      const normalizedName = normalize(entry.name);
      const normalizedPostal = entry.postalCodes.map(normalize);
      return normalizedName === normalizedInput || normalizedPostal.includes(normalizedInput);
    }) ?? null;
  }, [communes, query]);

  const statusMessage = useMemo(() => {
    const trimmed = query.trim();
    if (!trimmed) return null;

    if (exactMatch) {
      const postalCode = exactMatch.postalCodes[0] ?? "";
      return `AlloStef intervient dans votre secteur : ${exactMatch.name}${postalCode ? ` (${postalCode})` : ""}.`;
    }

    return null;
  }, [exactMatch, query]);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
        setIsSuggestionsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const handleSelect = (commune: ServiceAreaCommune) => {
    setQuery(commune.name);
    setActiveIndex(-1);
    setIsSuggestionsOpen(false);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (!query.trim() || filteredCommunes.length === 0) {
      if (event.key === "Escape") {
        setIsSuggestionsOpen(false);
      }
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((current) => (current + 1) % filteredCommunes.length);
      setIsSuggestionsOpen(true);
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((current) => (current - 1 + filteredCommunes.length) % filteredCommunes.length);
      setIsSuggestionsOpen(true);
      return;
    }

    if (event.key === "Enter" && activeIndex >= 0) {
      event.preventDefault();
      handleSelect(filteredCommunes[activeIndex]);
      return;
    }

    if (event.key === "Escape") {
      setActiveIndex(-1);
      setIsSuggestionsOpen(false);
    }
  };

  const structuredData = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": ["HomeAndConstructionBusiness", "LocalBusiness"],
      name: siteConfig.brandName,
      url: siteConfig.siteUrl,
      telephone: siteConfig.phoneHref,
      email: siteConfig.email,
      areaServed: siteConfig.serviceAreas,
      serviceType: siteConfig.services,
      description:
        "AlloStef intervient dans l’Oise et le Val-d’Oise pour l’installation, le dépannage, l’entretien et la rénovation en plomberie, chauffage, électricité, plâtrerie, carrelage et salle de bain.",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services AlloStef",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Installation et dépannage de plomberie" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Installation de sanitaires" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Recherche de fuite d’eau et de gaz" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Installation, entretien et dépannage de chauffage" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Entretien et dépannage de chaudières" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Remplacement de chaudières et de ballons d’eau chaude" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Installation de circuits de chauffage" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Entretien de climatisation réversible sans pose" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Installation et dépannage électrique" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Création et rénovation de salles de bain" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Plâtrerie" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pose de carrelage et de faïence" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Rénovation intérieure" } },
        ],
      },
    }),
    [],
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <header className="sticky top-0 z-50 border-b border-[#DDEFFF] bg-[rgba(248,252,255,0.94)] backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center" aria-label="AlloStef accueil">
            <Image src="/allostef-logo-final-transition-corrigee.png" alt="Logo AlloStef" width={140} height={40} className="h-10 w-auto" priority />
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium text-[#5F7484] md:flex">
            {siteConfig.navigation.map((item) => (
              <a key={item.href} href={item.href} className="nav-link transition hover:text-[#397DA9]">
                {item.label}
              </a>
            ))}
          </nav>
          <a href={`tel:${siteConfig.phoneHref}`} aria-label="Appeler AlloStef" className="btn-display inline-flex items-center gap-2 rounded-full bg-[#397DA9] px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_30px_-16px_rgba(57,125,169,0.7)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#2F6F98] focus:outline-none focus:ring-2 focus:ring-[#C6E3F7] focus:ring-offset-2">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
              <path d="M7.4 4.5c.4-.8 1.7-.4 2.3.2l.8 1c.3.4.4.9.2 1.3l-.8 1.6a1 1 0 0 0 .2 1.1l2.1 2.1a1 1 0 0 0 1.1.2l1.6-.8c.4-.2.9-.1 1.3.2l1 1c.6.6.9 1.8.2 2.3l-.8.7a3.1 3.1 0 0 1-2.8.8c-2.5-.4-4.8-1.7-6.6-3.5-1.8-1.8-3.1-4.1-3.5-6.6a3.1 3.1 0 0 1 .8-2.8l.7-.8Z" />
            </svg>
            <span className="hidden sm:inline">Appeler</span>
          </a>
        </div>
      </header>

      <main id="top">
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="relative overflow-hidden rounded-[2rem] border border-[#DDEFFF] bg-[linear-gradient(135deg,_#F8FCFF_0%,_#EFF8FF_45%,_#DDEFFF_100%)] p-8 shadow-[0_25px_80px_-40px_rgba(23,50,70,0.45)] sm:p-10 lg:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(103,180,176,0.14),_transparent_42%)]" />
            <div className="absolute right-6 top-6 h-24 w-24 rounded-full bg-[#DDAA62]/18 blur-3xl" />
            <div className="absolute bottom-8 left-4 h-20 w-20 rounded-full bg-[#C6E3F7]/70 blur-3xl" />
            <div className="absolute bottom-8 right-12 h-px w-28 bg-[#8CC4E7]/70" />
            <div className="relative max-w-3xl">
              <div className="max-w-2xl">
                <p className="mb-5 inline-flex rounded-full border border-[#C6E3F7] bg-white/80 px-3.5 py-1.5 text-sm font-semibold text-[#397DA9]">
                  Plomberie, chauffage, électricité et rénovation dans l’Oise et le Val-d’Oise
                </p>
                <h1 className="max-w-[18ch] text-[clamp(2.1rem,4.5vw,3.6rem)] font-semibold leading-[1.06] tracking-[-0.03em] text-[#173246]" style={{ textWrap: "balance" }}>
                  Installation, dépannage et rénovation dans l’Oise et le Val-d’Oise
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-8 text-[#5F7484]" style={{ textWrap: "pretty" }}>
                  AlloStef accompagne les particuliers et les professionnels pour leurs installations, dépannages, entretiens et projets de rénovation. Plomberie, chauffage, électricité ou aménagement intérieur : vous bénéficiez d’un interlocuteur unique pour des travaux étudiés et réalisés avec soin.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a href={`tel:${siteConfig.phoneHref}`} className="btn-display inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#397DA9] px-6 py-3 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#2F6F98] focus:outline-none focus:ring-2 focus:ring-[#C6E3F7]" aria-label="Appeler AlloStef">
                    <PhoneIcon className="h-4 w-4" />
                    Appeler AlloStef
                  </a>
                  <a href="#devis" className="btn-display inline-flex items-center justify-center whitespace-nowrap rounded-full border border-[#C6E3F7] bg-white/80 px-6 py-3 font-semibold text-[#173246] transition duration-300 hover:-translate-y-0.5 hover:border-[#8CC4E7] hover:text-[#397DA9]">
                    Demander un devis
                  </a>
                </div>
                <div className="mt-8 flex flex-wrap gap-3 text-sm text-[#5F7484]">
                  <span className="rounded-full border border-[#DDEFFF] bg-white/90 px-3 py-2">Oise et Val-d’Oise</span>
                  <span className="rounded-full border border-[#DDEFFF] bg-white/90 px-3 py-2">Particuliers et professionnels</span>
                  <span className="rounded-full border border-[#DDEFFF] bg-white/90 px-3 py-2">Plusieurs corps de métier</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-[#DDEFFF] bg-[linear-gradient(90deg,_#FFFFFF_0%,_#F8FCFF_55%,_#EFF8FF_100%)]">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-3 px-4 py-6 text-sm text-[#5F7484] sm:px-6 lg:px-8">
            {reassuranceItems.map((item, index) => (
              <div key={item.title} className="flex items-center gap-3 rounded-full border border-[#DDEFFF] bg-white px-4 py-2">
                {index > 0 ? <span className="h-1.5 w-1.5 rounded-full bg-[#8CC4E7]" /> : null}
                <span className="font-medium text-[#173246]">{item.title}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl rounded-[2rem] border border-[#DDEFFF] bg-[linear-gradient(180deg,_#FFFFFF_0%,_#F7FBFF_100%)] px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5CA6D2]">Services</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-[#173246] sm:text-4xl" style={{ textWrap: "balance" }}>
              Une offre complète pour les installations, le dépannage et l’entretien
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#5F7484]" style={{ textWrap: "pretty" }}>
              AlloStef intervient également dans le cadre de projets de rénovation intérieure, en réunissant plusieurs corps de métier selon les besoins du chantier.
            </p>
          </div>
          <div className="mt-10 space-y-6 sm:space-y-7 lg:space-y-8">
            {serviceCards.map((service) => (
              <article key={service.title} className={`group overflow-hidden rounded-[1.75rem] border shadow-[0_18px_45px_-28px_rgba(23,50,70,0.2)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_-24px_rgba(23,50,70,0.25)] ${service.cardClass}`}>
                <div className="grid gap-6 p-6 sm:p-7 lg:grid-cols-[58%_42%] lg:items-center lg:gap-8">
                  <div className="min-w-0">
                    <h3 className="text-xl font-semibold text-[#173246]" style={{ textWrap: "balance" }}>{service.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-[#5F7484]" style={{ textWrap: "pretty" }}>{service.subtitle}</p>
                    <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-[#5F7484]">
                      {service.bullets.map((bullet) => (
                        <li key={bullet}>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="overflow-hidden rounded-[1.25rem] border border-[#DDEFFF] bg-[#F8FCFF]">
                    <div className="relative aspect-[4/3] min-h-[220px] overflow-hidden sm:min-h-[260px]">
                      <Image
                        src={service.imageSrc}
                        alt={service.imageAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 42vw"
                        className="object-cover transition duration-500 group-hover:scale-[1.03]"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="zones" className="bg-[linear-gradient(120deg,_#F8FCFF_0%,_#EFF8FF_55%,_#F3E4CE_100%)] py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5CA6D2]">Zone d’intervention</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-[#173246] sm:text-4xl" style={{ textWrap: "balance" }}>
                AlloStef se déplace dans l’Oise et le Val-d’Oise pour étudier et réaliser vos installations, dépannages, entretiens et projets de rénovation.
              </h2>
            </div>
            <div className="mt-10 rounded-[2rem] border border-[#DDEFFF] bg-white p-6 shadow-[0_20px_60px_-35px_rgba(23,50,70,0.2)] sm:p-8">
              <label htmlFor="commune-search" className="text-sm font-semibold text-[#173246]">
                Rechercher une commune ou un code postal
              </label>
              <div className="mt-4 rounded-[1.25rem] border border-[#DDEFFF] bg-[#F8FCFF] p-3">
                <input
                  ref={inputRef}
                  id="commune-search"
                  value={query}
                  onChange={(event) => {
                    const nextValue = event.target.value;
                    setQuery(nextValue);
                    setIsSuggestionsOpen(nextValue.trim().length > 0);
                  }}
                  onFocus={() => {
                    if (query.trim()) {
                      setIsSuggestionsOpen(true);
                    }
                  }}
                  onKeyDown={handleKeyDown}
                  placeholder="Ex. Méru, 60000, Senlis"
                  className="w-full rounded-[0.9rem] border border-[#DDEFFF] bg-white px-4 py-3 text-sm text-[#173246] outline-none focus:border-[#5CA6D2]"
                  role="combobox"
                  aria-autocomplete="list"
                  aria-expanded={isSuggestionsOpen && filteredCommunes.length > 0}
                  aria-controls="commune-list"
                  aria-label="Rechercher une commune"
                />
              </div>
              {query.trim() && isSuggestionsOpen && filteredCommunes.length > 0 ? (
                <div id="commune-list" className="mt-4 max-h-64 overflow-auto rounded-[1.25rem] border border-[#DDEFFF] bg-white" role="listbox" aria-label="Communes disponibles">
                  {filteredCommunes.map((commune, index) => (
                    <button
                      key={`${commune.name}-${commune.postalCodes[0]}`}
                      type="button"
                      role="option"
                      aria-selected={activeIndex === index}
                      onMouseDown={(event) => event.preventDefault()}
                      onClick={() => handleSelect(commune)}
                      onMouseEnter={() => setActiveIndex(index)}
                      className={`flex w-full items-center justify-between px-4 py-3 text-left text-sm transition ${activeIndex === index ? "bg-[#EFF8FF]" : "bg-white"}`}
                    >
                      <span>
                        <span className="block font-semibold text-[#173246]">{commune.name}</span>
                        <span className="mt-1 block text-[#5F7484]">{commune.departmentName} · {commune.postalCodes.join(", ")}</span>
                      </span>
                    </button>
                  ))}
                </div>
              ) : null}
              <div className="mt-5 flex flex-wrap gap-3">
                <a href={`tel:${siteConfig.phoneHref}`} className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-[#397DA9] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#2F6F98]" aria-label="Appeler AlloStef">
                  <PhoneIcon className="h-4 w-4" />
                  Appeler AlloStef
                </a>
                <a href={`mailto:${siteConfig.email}?subject=Demande%20de%20devis%20AlloStef`} className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-[#DDEFFF] bg-white px-4 py-2.5 text-sm font-semibold text-[#173246] transition hover:border-[#8CC4E7] hover:text-[#397DA9]">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
                    <path d="M4.5 7.5h15v9a1 1 0 0 1-1 1h-13a1 1 0 0 1-1-1v-9Zm0 0 7.5 6 7.5-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Écrire pour un devis
                </a>
              </div>
              <div className="mt-4 rounded-[1.25rem] border border-[#BBDDF4] bg-[linear-gradient(145deg,_#F3FAFF_0%,_#EAF6FF_100%)] px-4 py-4 text-sm leading-7 text-[#2B4E66] shadow-[0_10px_24px_-20px_rgba(23,50,70,0.45)] sm:px-5" aria-label="Information sur la zone d’intervention">
                <div className="flex items-start gap-3">
                  <span className="mt-1 inline-flex rounded-full bg-white p-1.5 text-[#397DA9]" aria-hidden="true">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.9">
                      <path d="M12 8.5v.1M12 11.5V16" strokeLinecap="round" />
                      <circle cx="12" cy="12" r="8.5" />
                    </svg>
                  </span>
                  <p>
                    Votre commune ne figure pas dans notre zone d’intervention habituelle ? <strong>Contactez tout de même AlloStef</strong>. Selon le degré d’urgence ou l’ampleur des travaux, une intervention peut être étudiée au cas par cas.
                  </p>
                </div>
              </div>
              {statusMessage ? (
                <p className="mt-4 text-sm leading-7 text-[#5F7484]" aria-live="polite">
                  {statusMessage}
                </p>
              ) : null}
            </div>
          </div>
        </section>

        <section id="devis" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2rem] border border-[#DDEFFF] bg-[linear-gradient(135deg,_#173246_0%,_#1f4354_100%)] p-8 text-[#F8FCFF] shadow-[0_25px_70px_-35px_rgba(23,50,70,0.35)] sm:p-10">
            <div className="absolute right-6 top-6 h-24 w-24 rounded-full bg-[#DDAA62]/20 blur-3xl" />
            <div className="absolute bottom-8 left-8 h-20 w-20 rounded-full bg-[#67B4B0]/20 blur-3xl" />
            <div className="relative">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8CC4E7]">Devis</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl" style={{ textWrap: "balance" }}>
              Un projet ? Parlons-en.
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#DDEFFF]" style={{ textWrap: "pretty" }}>
              Besoin d’une installation, d’un dépannage, d’un entretien ou d’un projet de rénovation ? Présentez votre demande à AlloStef par téléphone ou par e-mail afin d’étudier la solution la plus adaptée.
            </p>
            <div className="mt-8 grid gap-4 lg:grid-cols-2">
              <a href={`tel:${siteConfig.phoneHref}`} className="flex items-center gap-4 rounded-[1.5rem] border border-white/10 bg-white/10 p-5 transition duration-300 hover:-translate-y-0.5" aria-label="Appeler AlloStef">
                <div className="rounded-full bg-[#397DA9] p-3 text-white">
                  <PhoneIcon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8CC4E7]">Appel</p>
                  <p className="mt-1 text-lg font-semibold text-white">{siteConfig.phoneDisplay}</p>
                </div>
              </a>
              <a href={`mailto:${siteConfig.email}?subject=Demande%20de%20devis%20AlloStef`} className="flex items-center gap-4 rounded-[1.5rem] border border-white/10 bg-white/10 p-5 transition duration-300 hover:-translate-y-0.5">
                <div className="rounded-full bg-[#DDAA62] p-3 text-white">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
                    <path d="M4.5 7.5h15v9a1 1 0 0 1-1 1h-13a1 1 0 0 1-1-1v-9Zm0 0 7.5 6 7.5-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8CC4E7]">E-mail</p>
                  <p className="mt-1 text-lg font-semibold text-white">{siteConfig.email}</p>
                </div>
              </a>
            </div>
          </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#DDEFFF] bg-[#F8FCFF] pb-[calc(5.5rem+env(safe-area-inset-bottom))] md:pb-0">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.1fr_0.9fr_0.8fr] lg:px-8">
          <div>
            <div className="flex items-center">
              <Image src="/allostef-logo-final-transition-corrigee.png" alt="Logo AlloStef" width={140} height={40} className="h-10 w-auto" />
            </div>
            <p className="mt-3 max-w-md text-sm leading-7 text-[#5F7484]" style={{ textWrap: "pretty" }}>
              Installation, dépannage et entretien en plomberie, chauffage, électricité, plâtrerie, carrelage et rénovation intérieure dans l’Oise et le Val-d’Oise.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#397DA9]">Navigation</p>
            <ul className="mt-4 space-y-2 text-sm text-[#5F7484]">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}><a href={item.href} className="transition hover:text-[#397DA9]">{item.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#397DA9]">Coordonnées</p>
            <ul className="mt-4 space-y-2 text-sm text-[#5F7484]">
              <li><a href={`tel:${siteConfig.phoneHref}`} className="transition hover:text-[#397DA9]">{siteConfig.phoneDisplay}</a></li>
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

      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#DDEFFF] bg-[rgba(248,252,255,0.95)] backdrop-blur md:hidden">
        <div className="mx-auto flex max-w-7xl gap-3 px-3 py-3">
          <a href={`tel:${siteConfig.phoneHref}`} className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-[#397DA9] px-4 py-3 text-sm font-semibold text-white" aria-label="Appeler AlloStef">
            <PhoneIcon className="h-4 w-4" />
            Appeler
          </a>
          <a href="#devis" className="flex-1 rounded-full border border-[#DDEFFF] bg-white px-4 py-3 text-center text-sm font-semibold text-[#173246]">
            Devis
          </a>
        </div>
      </div>
    </>
  );
}
