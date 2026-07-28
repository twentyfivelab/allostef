"use client";

import Image from "next/image";
import Script from "next/script";
import { useEffect, useMemo, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { siteConfig } from "@/config/site";
import { serviceAreaCommunes, type ServiceAreaCommune } from "@/data/service-area";
import { PhoneIcon } from "@/components/phone-icon";

function DropletIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M12 3.5S6.5 10 6.5 14a5.5 5.5 0 1 0 11 0c0-4-5.5-10.5-5.5-10.5Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FlameIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path
        d="M12 21c3.3 0 6-2.6 6-5.9 0-3.8-2.7-5.7-3.8-8.5-.8 1.9-1 2.9-1.9 3.7-.9-1.9-.9-3.8 0-5.8-2.8 1.9-5.6 5.7-5.6 10.6 0 3.3 2 5.9 5.3 5.9Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BoltIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M13 2.5 4.5 14H10l-1 7.5L18.5 10H13l0-7.5Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function WallIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M4 21V9.5l8-5.5 8 5.5V21" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 21v-6h6v6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TileIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3.75" y="3.75" width="7" height="7" rx="1.2" />
      <rect x="13.25" y="3.75" width="7" height="7" rx="1.2" />
      <rect x="3.75" y="13.25" width="7" height="7" rx="1.2" />
      <rect x="13.25" y="13.25" width="7" height="7" rx="1.2" />
    </svg>
  );
}

function HamburgerIcon({ className, open }: { className?: string; open: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
      {open ? (
        <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" strokeLinejoin="round" />
      ) : (
        <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" strokeLinejoin="round" />
      )}
    </svg>
  );
}

const serviceCards: {
  title: string;
  pageHref: string | null;
  subtitle: string;
  bullets: string[];
  imageSrc: string;
  imageAlt: string;
  icon: ReactNode;
  tintBg: string;
  tintBorder: string;
}[] = [
  {
    title: "Plomberie",
    pageHref: "/plomberie-oise-val-doise",
    subtitle: "Interventions de plomberie pour le dépannage, l’installation et la rénovation.",
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
    icon: <DropletIcon className="h-5 w-5" />,
    tintBg: "bg-[#EEF7FF]",
    tintBorder: "border-[#D9EBFA]",
  },
  {
    title: "Chauffage",
    pageHref: "/chauffagiste-oise-val-doise",
    subtitle: "Solutions de chauffage pour l’entretien, le dépannage et le remplacement d’équipements.",
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
    icon: <FlameIcon className="h-5 w-5" />,
    tintBg: "bg-[#FFF0EC]",
    tintBorder: "border-[#FBDCD3]",
  },
  {
    title: "Électricité",
    pageHref: "/electricien-oise-val-doise",
    subtitle: "Travaux électriques adaptés aux besoins du logement et des rénovations.",
    bullets: [
      "Dépannage électrique",
      "Installation et remplacement de prises",
      "Installation d’éclairages",
      "Intervention sur les tableaux électriques",
      "Travaux électriques dans le cadre d’une rénovation",
    ],
    imageSrc: "/images/realizations/realisation-electricite.png",
    imageAlt: "Travaux d’électricité sur prises, éclairages et tableau électrique",
    icon: <BoltIcon className="h-5 w-5" />,
    tintBg: "bg-[#FFF8E8]",
    tintBorder: "border-[#F7E9C2]",
  },
  {
    title: "Plâtrerie",
    pageHref: null,
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
    icon: <WallIcon className="h-5 w-5" />,
    tintBg: "bg-[#EEF8F1]",
    tintBorder: "border-[#D8ECDF]",
  },
  {
    title: "Carrelage et faïence",
    pageHref: null,
    subtitle: "Revêtements et finitions pour les pièces d’eau et les espaces de vie.",
    bullets: [
      "Pose de carrelage",
      "Pose de faïence",
      "Revêtements de sols et de murs",
      "Travaux pour salles de bain et cuisines",
      "Finitions et rénovation des surfaces",
    ],
    imageSrc: "/images/realizations/realisation-carrelage-faience.png",
    imageAlt: "Pose de carrelage et de faïence avec finitions soignées",
    icon: <TileIcon className="h-5 w-5" />,
    tintBg: "bg-[#F3F0FB]",
    tintBorder: "border-[#E3DAF3]",
  },
];

const normalize = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[’’']/g, "")
    .replace(/[-\s/.,()]/g, "")
    .toLowerCase();

const getSearchVariants = (value: string) => {
  const normalizedSource = value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[’’']/g, " ")
    .replace(/[-/.,()]/g, " ")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, " ");

  const compact = (input: string) => input.replace(/\s+/g, "");

  const expandedTokens = normalizedSource.split(" ").map((token) => {
    if (token === "st") return "saint";
    if (token === "ste") return "sainte";
    if (token.startsWith("ste") && token.length > 3) return `sainte${token.slice(3)}`;
    if (token.startsWith("st") && token.length > 2) return `saint${token.slice(2)}`;
    return token;
  });

  return [...new Set([compact(normalizedSource), compact(expandedTokens.join(" "))])].filter(Boolean);
};

export default function Home() {
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isSuggestionsOpen, setIsSuggestionsOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const communes = useMemo(() => {
    return serviceAreaCommunes;
  }, []);

  const filteredCommunes = useMemo(() => {
    const trimmed = query.trim();
    if (!trimmed) return [];

    const normalizedQueries = getSearchVariants(trimmed);
    return communes.filter((commune) => {
      const searchable = [commune.name, ...commune.postalCodes, commune.departmentName].map(normalize).join(" ");
      return normalizedQueries.some((normalizedQuery) => searchable.includes(normalizedQuery));
    });
  }, [communes, query]);

  const exactMatch = useMemo(() => {
    const trimmed = query.trim();
    if (!trimmed) return null;

    const normalizedQueries = getSearchVariants(trimmed);

    return communes.find((entry) => {
      const normalizedName = normalize(entry.name);
      const normalizedPostal = entry.postalCodes.map(normalize);
      return normalizedQueries.some((normalizedInput) => normalizedName === normalizedInput || normalizedPostal.includes(normalizedInput));
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
      "@graph": [
        {
          "@type": ["ProfessionalService", "LocalBusiness", "HomeAndConstructionBusiness"],
          "@id": `${siteConfig.siteUrl}/#localbusiness`,
          name: siteConfig.brandName,
          url: siteConfig.siteUrl,
          telephone: siteConfig.phoneHref,
          email: siteConfig.email,
          areaServed: siteConfig.serviceAreas.map((area) => ({ "@type": "AdministrativeArea", name: area })),
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
        },
        {
          "@type": "WebPage",
          "@id": `${siteConfig.siteUrl}/#webpage`,
          url: siteConfig.siteUrl,
          name: "AlloStef | Plombier chauffagiste dans l’Oise et le Val-d’Oise",
          isPartOf: {
            "@id": `${siteConfig.siteUrl}/#website`,
          },
          about: {
            "@id": `${siteConfig.siteUrl}/#localbusiness`,
          },
          inLanguage: "fr-FR",
        },
        {
          "@type": "BreadcrumbList",
          "@id": `${siteConfig.siteUrl}/#breadcrumb`,
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Accueil",
              item: siteConfig.siteUrl,
            },
          ],
        },
      ],
    }),
    [],
  );

  return (
    <>
      <Script id="schema-home" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(structuredData)}
      </Script>
      <header className="sticky top-0 z-50 border-b border-[#E7EDF3] bg-[rgba(255,255,255,0.96)] backdrop-blur">
        <div className="mx-auto grid max-w-[1200px] grid-cols-[auto_1fr_auto] items-center gap-4 px-4 py-3.5 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center justify-self-start" aria-label="AlloStef accueil">
            <Image src="/allostef-logo-final-transition-corrigee.png" alt="Logo AlloStef" width={140} height={40} className="h-9 w-auto" priority />
          </a>
          <nav className="hidden items-center justify-center gap-8 text-sm font-medium text-[#5E7189] md:flex">
            {siteConfig.navigation.map((item) => (
              <a key={item.href} href={item.href} className="nav-link transition hover:text-[#176BC0]">
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center justify-self-end gap-2">
            <a href={`tel:${siteConfig.phoneHref}`} aria-label="Appeler AlloStef" className="btn-display inline-flex items-center gap-2 rounded-full bg-[#176BC0] px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_24px_-12px_rgba(23,107,192,0.6)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#105BA7] focus:outline-none focus:ring-2 focus:ring-[#D8E6F2] focus:ring-offset-2">
              <PhoneIcon className="h-4 w-4" />
              <span className="hidden sm:inline">Appeler</span>
            </a>
            <button
              type="button"
              onClick={() => setIsMobileNavOpen((open) => !open)}
              aria-label={isMobileNavOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isMobileNavOpen}
              aria-controls="mobile-nav"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#E7EDF3] text-[#0D2345] transition hover:border-[#D8E6F2] hover:text-[#176BC0] md:hidden"
            >
              <HamburgerIcon className="h-5 w-5" open={isMobileNavOpen} />
            </button>
          </div>
        </div>
        {isMobileNavOpen ? (
          <nav id="mobile-nav" className="border-t border-[#E7EDF3] bg-white px-4 py-3 md:hidden">
            <ul className="flex flex-col gap-1">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setIsMobileNavOpen(false)}
                    className="block rounded-xl px-3 py-2.5 text-sm font-medium text-[#0D2345] transition hover:bg-[#F5F9FC] hover:text-[#176BC0]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}
      </header>

      <main id="top">
        <section className="mx-auto max-w-[1200px] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-8">
            <div className="max-w-2xl space-y-5 md:space-y-6 lg:space-y-7">
              <p className="inline-flex rounded-full border border-[#D8E6F2] bg-[#F5F9FC] px-3 py-1 text-[0.78rem] font-medium leading-5 text-[#176BC0] sm:text-xs">
                Plomberie, chauffage, électricité et rénovation dans l’Oise et le Val-d’Oise
              </p>
              <h1 className="max-w-[18ch] text-[clamp(2.1rem,4.5vw,3.6rem)] font-semibold leading-[1.06] tracking-[-0.03em] text-[#0D2345]" style={{ textWrap: "balance" }}>
                Installation, dépannage et rénovation dans l’Oise et le Val-d’Oise
              </h1>
              <p className="max-w-xl text-lg leading-8 text-[#5E7189]" style={{ textWrap: "pretty" }}>
                AlloStef accompagne les particuliers et les professionnels dans l’Oise et le Val-d’Oise pour leurs installations, dépannages, entretiens et projets de rénovation. Artisan plombier, chauffagiste et électricien, AlloStef coordonne les métiers nécessaires pour des travaux étudiés et réalisés avec soin.
              </p>
              <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:gap-3.5">
                <a href={`tel:${siteConfig.phoneHref}`} className="btn-display inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#176BC0] px-6 py-3 font-semibold text-white shadow-[0_14px_28px_-16px_rgba(23,107,192,0.5)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#105BA7] focus:outline-none focus:ring-2 focus:ring-[#D8E6F2]" aria-label="Appeler AlloStef">
                  <PhoneIcon className="h-4 w-4" />
                  Appeler AlloStef
                </a>
                <a href="#devis" className="btn-display inline-flex items-center justify-center whitespace-nowrap rounded-full border border-[#D8E6F2] bg-white px-6 py-3 font-semibold text-[#0D2345] transition duration-300 hover:-translate-y-0.5 hover:border-[#176BC0] hover:text-[#176BC0]">
                  Demander un devis
                </a>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              <div
                className="service-visual relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] lg:aspect-[5/4] lg:[mask-image:linear-gradient(to_right,transparent_0%,black_16%,black_100%)] lg:[-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_16%,black_100%)]"
              >
                <Image
                  src="/images/realizations/realisation-plomberie.png"
                  alt="Intervention de plomberie avec équipements sanitaires installés"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#176BC0]">Services</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-[#0D2345] sm:text-4xl" style={{ textWrap: "balance" }}>
              Une offre complète pour les installations, le dépannage et l’entretien
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#5E7189]" style={{ textWrap: "pretty" }}>
              AlloStef intervient également dans le cadre de projets de rénovation intérieure, avec coordination des métiers nécessaires selon les besoins du chantier.
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-[#5E7189]" style={{ textWrap: "pretty" }}>
              Vous pouvez vérifier votre commune dans la <a href="#zones" className="font-semibold text-[#176BC0] hover:text-[#105BA7]">zone d’intervention</a> et demander rapidement un <a href="#devis" className="font-semibold text-[#176BC0] hover:text-[#105BA7]">devis</a> selon votre besoin.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {serviceCards.map((service) => (
              <article
                key={service.title}
                className={`group flex h-full flex-col overflow-hidden rounded-[1.5rem] border ${service.tintBorder} ${service.tintBg} p-5 shadow-[0_14px_34px_-26px_rgba(13,35,69,0.22)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_-22px_rgba(13,35,69,0.28)] sm:p-6`}
              >
                <div className="flex items-center gap-2.5">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#176BC0] shadow-[0_6px_16px_-10px_rgba(13,35,69,0.3)]">
                    {service.icon}
                  </span>
                  <h3 className="text-lg font-semibold text-[#0D2345]" style={{ textWrap: "balance" }}>{service.title}</h3>
                </div>
                <div className="mt-4 overflow-hidden rounded-[1.1rem] border border-white/70 bg-white">
                  <div className="service-visual relative aspect-[4/3] min-h-[180px]">
                    <Image
                      src={service.imageSrc}
                      alt={service.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-center transition duration-500 group-hover:scale-[1.04]"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="mt-4 flex flex-1 flex-col">
                  <p className="text-sm leading-7 text-[#5E7189]" style={{ textWrap: "pretty" }}>{service.subtitle}</p>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-[#5E7189]">
                    {service.bullets.map((bullet) => (
                      <li key={bullet}>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  {service.pageHref ? (
                    <p className="mt-4 text-sm font-semibold">
                      <a href={service.pageHref} className="text-[#176BC0] transition hover:text-[#105BA7]">
                        En savoir plus sur {service.title.toLowerCase()}
                      </a>
                    </p>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="zones" className="bg-[#F5F9FC] py-16">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#176BC0]">Zone d’intervention</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-[#0D2345] sm:text-4xl" style={{ textWrap: "balance" }}>
                AlloStef se déplace dans l’Oise et le Val-d’Oise pour étudier et réaliser vos installations, dépannages, entretiens et projets de rénovation.
              </h2>
            </div>
            <div className="mt-10 rounded-[1.75rem] border border-[#E7EDF3] bg-white p-6 shadow-[0_20px_50px_-36px_rgba(13,35,69,0.2)] sm:p-8">
              <label htmlFor="commune-search" className="text-sm font-semibold text-[#0D2345]">
                Rechercher une commune ou un code postal
              </label>
              <div className="mt-4 rounded-[1.1rem] border border-[#E7EDF3] bg-[#F5F9FC] p-3">
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
                  placeholder="Ex. Méru, 60000, Cergy"
                  className="w-full rounded-[0.85rem] border border-[#E7EDF3] bg-white px-4 py-3 text-base text-[#0D2345] outline-none focus:border-[#176BC0]"
                  role="combobox"
                  aria-autocomplete="list"
                  aria-expanded={isSuggestionsOpen && filteredCommunes.length > 0}
                  aria-controls="commune-list"
                  aria-label="Rechercher une commune"
                />
              </div>
              {query.trim() && isSuggestionsOpen && filteredCommunes.length > 0 ? (
                <div id="commune-list" className="mt-4 max-h-64 overflow-auto rounded-[1.1rem] border border-[#E7EDF3] bg-white" role="listbox" aria-label="Communes disponibles">
                  {filteredCommunes.map((commune, index) => (
                    <button
                      key={`${commune.name}-${commune.postalCodes[0]}`}
                      type="button"
                      role="option"
                      aria-selected={activeIndex === index}
                      onMouseDown={(event) => event.preventDefault()}
                      onClick={() => handleSelect(commune)}
                      onMouseEnter={() => setActiveIndex(index)}
                      className={`flex w-full items-center justify-between px-4 py-3 text-left text-sm transition ${activeIndex === index ? "bg-[#F5F9FC]" : "bg-white"}`}
                    >
                      <span>
                        <span className="block font-semibold text-[#0D2345]">{commune.name}</span>
                        <span className="mt-1 block text-[#5E7189]">{commune.departmentName} · {commune.postalCodes.join(", ")}</span>
                      </span>
                    </button>
                  ))}
                </div>
              ) : null}
              <div className="mt-5 flex flex-wrap gap-3">
                <a href={`tel:${siteConfig.phoneHref}`} className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-[#176BC0] px-4 py-2.5 text-sm font-semibold text-white shadow-[0_10px_20px_-12px_rgba(23,107,192,0.5)] transition hover:bg-[#105BA7]" aria-label="Appeler AlloStef">
                  <PhoneIcon className="h-4 w-4" />
                  Appeler AlloStef
                </a>
                <a href={`mailto:${siteConfig.email}?subject=Demande%20de%20devis%20AlloStef`} className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-[#E7EDF3] bg-white px-4 py-2.5 text-sm font-semibold text-[#0D2345] transition hover:border-[#D8E6F2] hover:text-[#176BC0]">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
                    <path d="M4.5 7.5h15v9a1 1 0 0 1-1 1h-13a1 1 0 0 1-1-1v-9Zm0 0 7.5 6 7.5-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Écrire pour un devis
                </a>
              </div>
              <div className="mt-4 rounded-[1.1rem] border border-[#D9EBFA] bg-[#EEF7FF] px-4 py-4 text-sm leading-7 text-[#0D2345] sm:px-5" aria-label="Information sur la zone d’intervention">
                <div className="flex items-start gap-3">
                  <span className="mt-1 inline-flex rounded-full bg-white p-1.5 text-[#176BC0]" aria-hidden="true">
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
                <p className="mt-4 text-sm leading-7 text-[#5E7189]" aria-live="polite">
                  {statusMessage}
                </p>
              ) : null}
              <div className="mt-5 rounded-xl border border-[#E7EDF3] bg-[#F5F9FC] p-4">
                <p className="text-sm font-semibold text-[#0D2345]">Villes les plus recherchées</p>
                <p className="mt-2 text-sm leading-7 text-[#5E7189]">
                  Consultez aussi nos pages locales: <a href="/plombier-meru" className="font-semibold text-[#176BC0] hover:text-[#105BA7]">Meru</a>, <a href="/plombier-beauvais" className="font-semibold text-[#176BC0] hover:text-[#105BA7]">Beauvais</a>, <a href="/plombier-cergy" className="font-semibold text-[#176BC0] hover:text-[#105BA7]">Cergy</a> et <a href="/plombier-pontoise" className="font-semibold text-[#176BC0] hover:text-[#105BA7]">Pontoise</a>.
                </p>
                <p className="mt-2 text-sm leading-7 text-[#5E7189]">
                  En électricité: <a href="/electricien-meru" className="font-semibold text-[#176BC0] hover:text-[#105BA7]">Meru</a>, <a href="/electricien-beauvais" className="font-semibold text-[#176BC0] hover:text-[#105BA7]">Beauvais</a>, <a href="/electricien-cergy" className="font-semibold text-[#176BC0] hover:text-[#105BA7]">Cergy</a> et <a href="/electricien-pontoise" className="font-semibold text-[#176BC0] hover:text-[#105BA7]">Pontoise</a>.
                </p>
                <p className="mt-2 text-sm leading-7 text-[#5E7189]">
                  En chauffage: <a href="/chauffagiste-meru" className="font-semibold text-[#176BC0] hover:text-[#105BA7]">Meru</a>, <a href="/chauffagiste-beauvais" className="font-semibold text-[#176BC0] hover:text-[#105BA7]">Beauvais</a>, <a href="/chauffagiste-cergy" className="font-semibold text-[#176BC0] hover:text-[#105BA7]">Cergy</a> et <a href="/chauffagiste-pontoise" className="font-semibold text-[#176BC0] hover:text-[#105BA7]">Pontoise</a>.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="devis" className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-[1.75rem] border border-[#D9EBFA] bg-[linear-gradient(135deg,_#FFFFFF_0%,_#EEF7FF_100%)] p-8 shadow-[0_20px_50px_-36px_rgba(13,35,69,0.2)] sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#176BC0]">Devis</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-[#0D2345] sm:text-4xl" style={{ textWrap: "balance" }}>
              Un projet ? Parlons-en.
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#5E7189]" style={{ textWrap: "pretty" }}>
              Besoin d’une installation, d’un dépannage, d’un entretien ou d’un projet de rénovation ? Présentez votre demande à AlloStef par téléphone ou par e-mail afin d’étudier la solution la plus adaptée.
            </p>
            <div className="mt-8 grid gap-4 lg:grid-cols-2">
              <a href={`tel:${siteConfig.phoneHref}`} className="flex items-center gap-4 rounded-[1.25rem] border border-[#E7EDF3] bg-white p-5 shadow-[0_10px_24px_-18px_rgba(13,35,69,0.18)] transition duration-300 hover:-translate-y-0.5" aria-label="Appeler AlloStef">
                <div className="rounded-full bg-[#176BC0] p-3 text-white">
                  <PhoneIcon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#176BC0]">Appel</p>
                  <p className="mt-1 text-lg font-semibold text-[#0D2345]">{siteConfig.phoneDisplay}</p>
                </div>
              </a>
              <a href={`mailto:${siteConfig.email}?subject=Demande%20de%20devis%20AlloStef`} className="flex items-center gap-4 rounded-[1.25rem] border border-[#E7EDF3] bg-white p-5 shadow-[0_10px_24px_-18px_rgba(13,35,69,0.18)] transition duration-300 hover:-translate-y-0.5">
                <div className="rounded-full bg-[#DDAA62] p-3 text-white">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
                    <path d="M4.5 7.5h15v9a1 1 0 0 1-1 1h-13a1 1 0 0 1-1-1v-9Zm0 0 7.5 6 7.5-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#176BC0]">E-mail</p>
                  <p className="mt-1 text-lg font-semibold text-[#0D2345]">{siteConfig.email}</p>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#E7EDF3] bg-white pb-[calc(5.5rem+env(safe-area-inset-bottom))] md:pb-0">
        <div className="mx-auto grid max-w-[1200px] gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.1fr_0.9fr_0.8fr] lg:px-8">
          <div>
            <div className="flex items-center">
              <Image src="/allostef-logo-final-transition-corrigee.png" alt="Logo AlloStef" width={140} height={40} className="h-10 w-auto" />
            </div>
            <p className="mt-3 max-w-md text-sm leading-7 text-[#5E7189]" style={{ textWrap: "pretty" }}>
              Installation, dépannage et entretien en plomberie, chauffage, électricité, plâtrerie, carrelage et rénovation intérieure dans l’Oise et le Val-d’Oise.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#176BC0]">Navigation</p>
            <ul className="mt-4 space-y-2 text-sm text-[#5E7189]">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}><a href={item.href} className="transition hover:text-[#176BC0]">{item.label}</a></li>
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

      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#E7EDF3] bg-[rgba(255,255,255,0.96)] backdrop-blur md:hidden">
        <div className="mx-auto flex max-w-[1200px] gap-3 px-3 py-3">
          <a href={`tel:${siteConfig.phoneHref}`} className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-[#176BC0] px-4 py-3 text-sm font-semibold text-white shadow-[0_10px_20px_-12px_rgba(23,107,192,0.5)]" aria-label="Appeler AlloStef">
            <PhoneIcon className="h-4 w-4" />
            Appeler
          </a>
          <a href="#devis" className="flex-1 rounded-full border border-[#E7EDF3] bg-white px-4 py-3 text-center text-sm font-semibold text-[#0D2345]">
            Devis
          </a>
        </div>
      </div>
    </>
  );
}
