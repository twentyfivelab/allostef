"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState, type KeyboardEvent } from "react";
import { siteConfig } from "@/config/site";
import communesData from "@/data/service-area-communes.json";

const serviceCards = [
  {
    title: "Plomberie",
    subtitle: "Fuites, robinetterie, sanitaires, raccordements",
    description:
      "Des interventions soignées pour les installations, réparations et rénovations de salle de bain ou de cuisine.",
    bullets: ["Sanitaires", "Robinetterie", "Raccordements"],
    imageSrc: "/images/realizations/realisation-plomberie.png",
    imageAlt: "Illustration d’une intervention de plomberie dans une salle de bain moderne",
    cardClass: "border-[#C6E3F7] bg-[linear-gradient(145deg,_#F8FCFF_0%,_#EFF8FF_100%)]",
    iconWrapClass: "bg-[#EAF6FF] text-[#397DA9]",
    pillClass: "text-[#397DA9]",
    dotClass: "bg-[#8CC4E7]",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M8 4h8v4l-2 2v4l2 2v4H8v-4l2-2V8L8 6V4Z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Chauffage",
    subtitle: "Radiateurs, entretien, confort thermique",
    description:
      "Nous étudions les besoins de chauffage pour proposer des solutions adaptées, claires et durables.",
    bullets: ["Radiateurs", "Maintenance", "Confort"],
    imageSrc: "/images/realizations/realisation-chauffage.png",
    imageAlt: "Illustration d’une installation de chauffage soignée et moderne",
    cardClass: "border-[#F3E4CE] bg-[linear-gradient(145deg,_#FFFDF9_0%,_#F8F3E9_100%)]",
    iconWrapClass: "bg-[#F9EEDC] text-[#DDAA62]",
    pillClass: "text-[#DDAA62]",
    dotClass: "bg-[#DDAA62]",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M6 4h12M8 8h8v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V8Z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Électricité",
    subtitle: "Prises, éclairage, tableaux électriques",
    description:
      "Installation, rénovation et dépannage pour des circuits fiables et des espaces plus fonctionnels.",
    bullets: ["Prises", "Éclairage", "Tableaux"],
    imageSrc: "/images/realizations/realisation-electricite.png",
    imageAlt: "Illustration d’une intervention électrique professionnelle",
    cardClass: "border-[#F3E4CE] bg-[linear-gradient(145deg,_#FFFDF8_0%,_#F7F0E3_100%)]",
    iconWrapClass: "bg-[#F7EFD8] text-[#C89A46]",
    pillClass: "text-[#C89A46]",
    dotClass: "bg-[#C89A46]",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M10 2h4l-2 6h3l-6 10 1-7H7l3-9Z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Plâtrerie",
    subtitle: "Cloisons, faux plafonds, finitions",
    description:
      "Des murs et plafonds préparés avec soin pour des chantiers plus propres et plus précis.",
    bullets: ["Cloisons", "Faux plafonds", "Finitions"],
    imageSrc: "/images/realizations/realisation-platrerie.png",
    imageAlt: "Illustration d’une réalisation de plâtrerie et de finition",
    cardClass: "border-[#A7B8DF] bg-[linear-gradient(145deg,_#F9FAFF_0%,_#F0F3FF_100%)]",
    iconWrapClass: "bg-[#EEF2FF] text-[#718493]",
    pillClass: "text-[#718493]",
    dotClass: "bg-[#A7B8DF]",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M5 4h14M7 4v16m10-16v16" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Carrelage",
    subtitle: "Sol, murs, crédences, salles d’eau",
    description:
      "Pose de revêtements avec une attention particulière au rendu, à la propreté et à la cohérence du projet.",
    bullets: ["Sol", "Murs", "Crédences"],
    imageSrc: "/images/realizations/realisation-carrelage-faience.png",
    imageAlt: "Illustration d’une pose de carrelage et de faïence précise",
    cardClass: "border-[#E2F3F1] bg-[linear-gradient(145deg,_#FCFEFF_0%,_#F3FBFA_100%)]",
    iconWrapClass: "bg-[#EAF8F7] text-[#67B4B0]",
    pillClass: "text-[#67B4B0]",
    dotClass: "bg-[#67B4B0]",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M4 6h16v12H4zM4 10h16" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Rénovation intérieure",
    subtitle: "Coordination de plusieurs travaux",
    description:
      "Un interlocuteur unique pour accompagner un chantier plus global avec une vraie cohérence de réalisation.",
    bullets: ["Coordination", "Cohérence", "Suivi"],
    imageSrc: "/images/realizations/realisation-renovation-interieure.png",
    imageAlt: "Illustration d’un intérieur moderne, lumineux et abouti",
    cardClass: "border-[#C6E3F7] bg-[linear-gradient(145deg,_#F7FBFF_0%,_#ECF7FF_100%)]",
    iconWrapClass: "bg-[#E6F3FF] text-[#397DA9]",
    pillClass: "text-[#397DA9]",
    dotClass: "bg-[#397DA9]",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M6 5h12v14H6zM9 9h6M9 13h4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
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

type Commune = {
  name: string;
  postalCodes: string[];
  departmentCode: string;
  departmentName: string;
  latitude?: number;
  longitude?: number;
};

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
    const items = communesData as Commune[];
    return [...items].sort((a, b) => a.name.localeCompare(b.name, "fr", { sensitivity: "base" }));
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
    if (!trimmed) return "Saisissez une commune ou un code postal.";
    if (exactMatch) {
      const postalCode = exactMatch.postalCodes[0] ?? "";
      return `AlloStef intervient dans votre secteur : ${exactMatch.name}${postalCode ? ` (${postalCode})` : ""}.`;
    }
    return "Cette commune ne figure pas dans notre zone habituelle. Contactez tout de même AlloStef : selon l’urgence ou l’ampleur des travaux, une solution peut être envisagée.";
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

  const handleSelect = (commune: Commune) => {
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
            <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="max-w-2xl">
                <p className="mb-5 inline-flex rounded-full border border-[#C6E3F7] bg-white/80 px-3.5 py-1.5 text-sm font-semibold text-[#397DA9]">
                  Plomberie, chauffage et rénovation dans l’Oise et le Val-d’Oise
                </p>
                <h1 className="text-4xl font-semibold leading-[1.03] tracking-[-0.03em] text-[#173246] sm:text-5xl lg:text-6xl">
                  Plomberie, chauffage et rénovation dans l’Oise et le Val-d’Oise
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-8 text-[#5F7484]">
                  AlloStef intervient pour vos travaux de plomberie, chauffage, électricité, plâtrerie, carrelage et rénovation intérieure. Un seul interlocuteur pour des travaux cohérents et soignés.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a href={`tel:${siteConfig.phoneHref}`} className="btn-display inline-flex items-center justify-center gap-2 rounded-full bg-[#397DA9] px-6 py-3 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#2F6F98] focus:outline-none focus:ring-2 focus:ring-[#C6E3F7]" aria-label="Appeler AlloStef">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
                      <path d="M7.4 4.5c.4-.8 1.7-.4 2.3.2l.8 1c.3.4.4.9.2 1.3l-.8 1.6a1 1 0 0 0 .2 1.1l2.1 2.1a1 1 0 0 0 1.1.2l1.6-.8c.4-.2.9-.1 1.3.2l1 1c.6.6.9 1.8.2 2.3l-.8.7a3.1 3.1 0 0 1-2.8.8c-2.5-.4-4.8-1.7-6.6-3.5-1.8-1.8-3.1-4.1-3.5-6.6a3.1 3.1 0 0 1 .8-2.8l.7-.8Z" />
                    </svg>
                    Appeler AlloStef
                  </a>
                  <a href="#devis" className="btn-display inline-flex items-center justify-center rounded-full border border-[#C6E3F7] bg-white/80 px-6 py-3 font-semibold text-[#173246] transition duration-300 hover:-translate-y-0.5 hover:border-[#8CC4E7] hover:text-[#397DA9]">
                    Demander un devis
                  </a>
                </div>
                <div className="mt-8 flex flex-wrap gap-3 text-sm text-[#5F7484]">
                  <span className="rounded-full border border-[#DDEFFF] bg-white/90 px-3 py-2">Oise et Val-d’Oise</span>
                  <span className="rounded-full border border-[#DDEFFF] bg-white/90 px-3 py-2">Particuliers et professionnels</span>
                  <span className="rounded-full border border-[#DDEFFF] bg-white/90 px-3 py-2">Plusieurs corps de métier</span>
                </div>
              </div>

              <div className="rounded-[1.75rem] border border-[#DDEFFF] bg-white/80 p-6 shadow-[0_20px_60px_-35px_rgba(23,50,70,0.3)]">
                <div className="rounded-[1.25rem] border border-[#DDEFFF] bg-[linear-gradient(120deg,_#FFFFFF_0%,_#EAF6FF_55%,_#CFE8F8_100%)] p-6">
                  <div className="flex items-center justify-between border-b border-[#DDEFFF] pb-4">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5CA6D2]">Intervention</p>
                      <p className="mt-2 text-xl font-semibold text-[#173246]">Une vraie continuité de chantier</p>
                    </div>
                    <div className="rounded-full bg-[#397DA9] p-3 text-white">
                      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                        <path d="M6 8.5h12M6 12h12M6 15.5h8" strokeLinecap="round" />
                      </svg>
                    </div>
                  </div>
                  <div className="mt-6 space-y-3 text-sm leading-7 text-[#5F7484]">
                    <p>• Plomberie, chauffage, électricité, plâtrerie, carrelage et rénovation intérieure.</p>
                    <p>• Une approche claire pour les travaux de petite ou grande ampleur.</p>
                    <p>• Un cadre de travail soigné jusqu’à la fin des travaux.</p>
                  </div>
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
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-[#173246] sm:text-4xl">
              Une offre complète pour les travaux du quotidien et les projets plus ambitieux
            </h2>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {serviceCards.map((service, index) => (
              <article key={service.title} className={`group overflow-hidden rounded-[1.75rem] border shadow-[0_18px_45px_-28px_rgba(23,50,70,0.2)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_-24px_rgba(23,50,70,0.25)] ${service.cardClass}`}>
                <div className="flex items-center justify-between p-7">
                  <div className={`inline-flex rounded-full p-2.5 shadow-sm ${service.iconWrapClass}`}>
                    {service.icon}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`h-2.5 w-2.5 rounded-full ${service.dotClass}`} />
                    <span className={`text-sm font-semibold uppercase tracking-[0.2em] ${service.pillClass}`}>0{index + 1}</span>
                  </div>
                </div>
                <div className="grid gap-5 px-7 pb-7 lg:grid-cols-[minmax(0,1fr)_minmax(220px,0.4fr)] lg:items-center">
                  <div>
                    <h3 className="text-xl font-semibold text-[#173246]">{service.title}</h3>
                    <p className="mt-2 text-sm font-medium text-[#397DA9]">{service.subtitle}</p>
                    <p className="mt-4 text-sm leading-7 text-[#5F7484]">{service.description}</p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {service.bullets.map((bullet) => (
                        <li key={bullet} className="rounded-full border border-[#DDEFFF] bg-white/80 px-3 py-1.5 text-xs font-medium text-[#5F7484]">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="overflow-hidden rounded-[1.25rem] border border-[#DDEFFF] bg-[#F8FCFF]">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={service.imageSrc}
                        alt={service.imageAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 35vw"
                        className="object-cover transition duration-500 group-hover:scale-[1.03]"
                        loading={index < 2 ? "eager" : "lazy"}
                      />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="method" className="bg-[linear-gradient(135deg,_#173246_0%,_#1f4354_100%)] py-20 text-[#F8FCFF]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8CC4E7]">Notre méthode</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl">
                Un parcours clair et rassurant, de la première prise de contact à la fin des travaux
              </h2>
            </div>
            <div className="mt-10 grid gap-4 lg:grid-cols-4">
              {methodSteps.map((step, index) => (
                <div key={step.title} className="rounded-[1.5rem] border border-white/10 bg-white/10 p-6">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-[#8CC4E7]">0{index + 1}</p>
                    <div className="ml-3 h-px flex-1 bg-white/10" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#CFE8F8]">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="zones" className="bg-[linear-gradient(120deg,_#F8FCFF_0%,_#EFF8FF_55%,_#F3E4CE_100%)] py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5CA6D2]">Zone d’intervention</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-[#173246] sm:text-4xl">
                AlloStef se déplace dans l’Oise et le Val-d’Oise pour étudier et réaliser vos projets de plomberie, chauffage, électricité, plâtrerie, carrelage et rénovation intérieure.
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
              {query.trim() && isSuggestionsOpen ? (
                <div id="commune-list" className="mt-4 max-h-64 overflow-auto rounded-[1.25rem] border border-[#DDEFFF] bg-white" role="listbox" aria-label="Communes disponibles">
                  {filteredCommunes.length > 0 ? (
                    filteredCommunes.map((commune, index) => (
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
                    ))
                  ) : (
                    <div className="px-4 py-3 text-sm text-[#5F7484]">Aucune commune ne correspond à votre recherche.</div>
                  )}
                </div>
              ) : null}
              <div className="mt-5 flex flex-wrap gap-3">
                <a href={`tel:${siteConfig.phoneHref}`} className="inline-flex items-center gap-2 rounded-full bg-[#397DA9] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#2F6F98]" aria-label="Appeler AlloStef">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
                    <path d="M7.4 4.5c.4-.8 1.7-.4 2.3.2l.8 1c.3.4.4.9.2 1.3l-.8 1.6a1 1 0 0 0 .2 1.1l2.1 2.1a1 1 0 0 0 1.1.2l1.6-.8c.4-.2.9-.1 1.3.2l1 1c.6.6.9 1.8.2 2.3l-.8.7a3.1 3.1 0 0 1-2.8.8c-2.5-.4-4.8-1.7-6.6-3.5-1.8-1.8-3.1-4.1-3.5-6.6a3.1 3.1 0 0 1 .8-2.8l.7-.8Z" />
                  </svg>
                  Appeler AlloStef
                </a>
                <a href={`mailto:${siteConfig.email}?subject=Demande%20de%20devis%20AlloStef`} className="inline-flex items-center gap-2 rounded-full border border-[#DDEFFF] bg-white px-4 py-2.5 text-sm font-semibold text-[#173246] transition hover:border-[#8CC4E7] hover:text-[#397DA9]">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
                    <path d="M4.5 7.5h15v9a1 1 0 0 1-1 1h-13a1 1 0 0 1-1-1v-9Zm0 0 7.5 6 7.5-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Écrire pour un devis
                </a>
              </div>
              <div className="mt-4 rounded-[1.25rem] border border-[#DDEFFF] bg-[#F8FCFF] px-4 py-3 text-sm leading-7 text-[#5F7484]">
                Votre commune ne figure pas dans notre zone d’intervention habituelle ? Contactez tout de même AlloStef. Selon le degré d’urgence ou l’ampleur des travaux, une intervention peut être étudiée au cas par cas.
              </div>
              <p className="mt-4 text-sm leading-7 text-[#5F7484]" aria-live="polite">
                {statusMessage}
              </p>
            </div>
          </div>
        </section>

        <section id="devis" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2rem] border border-[#DDEFFF] bg-[linear-gradient(135deg,_#173246_0%,_#1f4354_100%)] p-8 text-[#F8FCFF] shadow-[0_25px_70px_-35px_rgba(23,50,70,0.35)] sm:p-10">
            <div className="absolute right-6 top-6 h-24 w-24 rounded-full bg-[#DDAA62]/20 blur-3xl" />
            <div className="absolute bottom-8 left-8 h-20 w-20 rounded-full bg-[#67B4B0]/20 blur-3xl" />
            <div className="relative">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8CC4E7]">Devis</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl">
              Un projet ? Parlons-en.
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#DDEFFF]">
              Pour présenter votre besoin et obtenir un premier échange, contactez directement AlloStef par téléphone ou par e-mail.
            </p>
            <div className="mt-8 grid gap-4 lg:grid-cols-2">
              <a href={`tel:${siteConfig.phoneHref}`} className="flex items-center gap-4 rounded-[1.5rem] border border-white/10 bg-white/10 p-5 transition duration-300 hover:-translate-y-0.5" aria-label="Appeler AlloStef">
                <div className="rounded-full bg-[#397DA9] p-3 text-white">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
                    <path d="M7.4 4.5c.4-.8 1.7-.4 2.3.2l.8 1c.3.4.4.9.2 1.3l-.8 1.6a1 1 0 0 0 .2 1.1l2.1 2.1a1 1 0 0 0 1.1.2l1.6-.8c.4-.2.9-.1 1.3.2l1 1c.6.6.9 1.8.2 2.3l-.8.7a3.1 3.1 0 0 1-2.8.8c-2.5-.4-4.8-1.7-6.6-3.5-1.8-1.8-3.1-4.1-3.5-6.6a3.1 3.1 0 0 1 .8-2.8l.7-.8Z" />
                  </svg>
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

      <footer className="border-t border-[#DDEFFF] bg-[#F8FCFF]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.1fr_0.9fr_0.8fr] lg:px-8">
          <div>
            <div className="flex items-center">
              <Image src="/allostef-logo-final-transition-corrigee.png" alt="Logo AlloStef" width={140} height={40} className="h-10 w-auto" />
            </div>
            <p className="mt-3 max-w-md text-sm leading-7 text-[#5F7484]">
              Plomberie, chauffage, électricité, plâtrerie, carrelage et rénovation intérieure dans l’Oise et le Val-d’Oise.
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
          <p>© <span>{new Date().getFullYear()}</span> AlloStef. Mentions légales et politique de confidentialité à compléter.</p>
        </div>
      </footer>

      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#DDEFFF] bg-[rgba(248,252,255,0.95)] backdrop-blur md:hidden">
        <div className="mx-auto flex max-w-7xl gap-3 px-3 py-3">
          <a href={`tel:${siteConfig.phoneHref}`} className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-[#397DA9] px-4 py-3 text-sm font-semibold text-white" aria-label="Appeler AlloStef">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
              <path d="M7.4 4.5c.4-.8 1.7-.4 2.3.2l.8 1c.3.4.4.9.2 1.3l-.8 1.6a1 1 0 0 0 .2 1.1l2.1 2.1a1 1 0 0 0 1.1.2l1.6-.8c.4-.2.9-.1 1.3.2l1 1c.6.6.9 1.8.2 2.3l-.8.7a3.1 3.1 0 0 1-2.8.8c-2.5-.4-4.8-1.7-6.6-3.5-1.8-1.8-3.1-4.1-3.5-6.6a3.1 3.1 0 0 1 .8-2.8l.7-.8Z" />
            </svg>
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
