"use client";

import { useMemo, useState } from "react";
import { siteConfig } from "@/config/site";

const serviceCards = [
  {
    title: "Plomberie",
    description:
      "Installation et remplacement d’équipements, recherche et réparation de fuites, robinetterie, sanitaires, raccordements et rénovation de salle de bain.",
  },
  {
    title: "Chauffage",
    description:
      "Installation d’équipements, remplacement de radiateurs, entretien courant, recherche de dysfonctionnements et amélioration du confort thermique.",
  },
  {
    title: "Électricité",
    description:
      "Installation électrique, remplacement de prises et interrupteurs, éclairage, tableau électrique, rénovation électrique et recherche de pannes.",
  },
  {
    title: "Plâtrerie",
    description:
      "Pose de plaques de plâtre, création de cloisons, doublage, faux plafonds, isolation intérieure et préparation des surfaces.",
  },
  {
    title: "Carrelage",
    description:
      "Pose de carrelage au sol, pose de faïence, crédence, salle de bain, cuisine et rénovation des revêtements.",
  },
  {
    title: "Rénovation intérieure",
    description:
      "Un interlocuteur polyvalent pour coordonner plusieurs travaux au sein d’une même pièce avec une vision globale du chantier.",
  },
];

const reassuranceItems = [
  "Un interlocuteur unique",
  "Plusieurs corps de métier",
  "Des travaux réalisés avec soin",
  "Une intervention locale",
];

const faqItems = [
  {
    question: "Dans quelles zones intervenez-vous ?",
    answer:
      "Nous intervenons dans l’Oise et le Val-d’Oise, ainsi que dans les communes et secteurs environnants selon le projet.",
  },
  {
    question: "Réalisez-vous des projets comprenant plusieurs corps de métier ?",
    answer:
      "Oui, cette polyvalence permet de mieux coordonner les travaux et d’apporter une réponse plus cohérente à vos projets de rénovation intérieure.",
  },
  {
    question: "Comment demander un devis ?",
    answer:
      "Vous pouvez remplir le formulaire de contact, nous appeler directement ou nous écrire par e-mail. Nous étudions ensuite votre besoin avec attention.",
  },
  {
    question: "Intervenez-vous auprès des particuliers et des professionnels ?",
    answer:
      "Oui, nous recevons les demandes de particuliers comme de professionnels, selon la nature du projet et la zone d’intervention.",
  },
  {
    question: "Puis-je vous contacter pour une rénovation complète ?",
    answer:
      "Oui, nous pouvons accompagner des projets plus globaux et proposer une approche cohérente entre plusieurs prestations.",
  },
  {
    question: "Comment préparer ma demande ?",
    answer:
      "Précisez votre besoin, la nature des travaux, votre localisation et les éléments déjà présents sur place si vous les avez. Cela nous aide à mieux étudier votre demande.",
  },
  {
    question: "Quels éléments dois-je transmettre pour obtenir une première estimation ?",
    answer:
      "Le type de travaux, la surface ou la pièce concernée, vos attentes et des photos si possible constituent un bon point de départ pour un premier échange.",
  },
];

const initialFormState = {
  name: "",
  email: "",
  phone: "",
  city: "",
  service: "",
  priority: "",
  contactPreference: "",
  description: "",
  consent: false,
};

export default function Home() {
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [mailAlert, setMailAlert] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }));
      return;
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const nextErrors: Record<string, string> = {};
    if (!formData.name.trim()) nextErrors.name = "Veuillez renseigner votre nom et prénom.";
    if (!formData.email.trim()) nextErrors.email = "Veuillez renseigner votre adresse e-mail.";
    if (!formData.phone.trim()) nextErrors.phone = "Veuillez renseigner votre numéro de téléphone.";
    if (!formData.city.trim()) nextErrors.city = "Veuillez renseigner votre ville ou code postal.";
    if (!formData.service) nextErrors.service = "Veuillez choisir un type de prestation.";
    if (!formData.priority) nextErrors.priority = "Veuillez sélectionner une priorité.";
    if (!formData.contactPreference) nextErrors.contactPreference = "Veuillez choisir une préférence de contact.";
    if (!formData.description.trim()) nextErrors.description = "Veuillez décrire votre projet.";
    if (!formData.consent) nextErrors.consent = "Veuillez accepter l’utilisation de vos informations.";
    return nextErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setMailAlert("");
      return;
    }

    const subject = `Demande de devis - ${formData.service} - ${formData.name}`;
    const body = [
      `Nom : ${formData.name}`,
      `E-mail : ${formData.email}`,
      `Téléphone : ${formData.phone}`,
      `Ville : ${formData.city}`,
      `Prestation : ${formData.service}`,
      `Priorité : ${formData.priority}`,
      `Préférence de contact : ${formData.contactPreference}`,
      `Description : ${formData.description}`,
    ].join("\n");

    const mailtoLink = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setMailAlert("Votre application de messagerie va s’ouvrir avec votre demande préremplie. Il vous suffira de vérifier les informations et d’envoyer l’e-mail.");
    window.location.href = mailtoLink;
  };

  const structuredData = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": ["HomeAndConstructionBusiness", "LocalBusiness"],
      name: siteConfig.companyName,
      telephone: siteConfig.phoneHref,
      email: siteConfig.email,
      url: siteConfig.websiteUrl,
      areaServed: siteConfig.serviceAreas,
      serviceType: siteConfig.services,
      description:
        "Artisan multiservices spécialisé dans la plomberie, le chauffage, l’électricité, la plâtrerie, le carrelage et la rénovation intérieure dans l’Oise et le Val-d’Oise.",
      openingHoursSpecification: siteConfig.businessHours.values.map((slot) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: slot.day,
        opens: "00:00",
        closes: "23:59",
      })),
      address: {
        "@type": "PostalAddress",
        addressLocality: siteConfig.baseCity,
        addressRegion: "FR",
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
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-[rgba(248,250,252,0.96)] backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#top" className="text-lg font-semibold tracking-tight text-slate-900">
            {siteConfig.companyName}
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
            {siteConfig.navigation.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-amber-600">
                {item.label}
              </a>
            ))}
          </nav>
          <div className="hidden items-center gap-3 md:flex">
            <a href={`tel:${siteConfig.phoneHref}`} className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-amber-500 hover:text-amber-600" aria-label={`Appeler ${siteConfig.companyName}`}>
              Appeler maintenant
            </a>
            <a href="#devis" className="rounded-full bg-amber-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-amber-700">
              Demander un devis
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="mx-auto grid max-w-7xl gap-8 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="mb-4 inline-flex rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-sm font-medium text-amber-700">
              Artisan multiservices dans l’Oise et le Val-d’Oise
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Vos travaux, un seul artisan de confiance
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Plomberie, chauffage, électricité, plâtrerie et carrelage dans l’Oise et le Val-d’Oise. Une intervention soignée pour vos installations, rénovations et travaux de finition.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#devis" className="rounded-full bg-amber-600 px-6 py-3 text-center font-semibold text-white shadow-sm transition hover:bg-amber-700">
                Demander un devis
              </a>
              <a href={`tel:${siteConfig.phoneHref}`} className="rounded-full border border-slate-300 px-6 py-3 text-center font-semibold text-slate-800 transition hover:border-amber-500 hover:text-amber-600" aria-label={`Appeler ${siteConfig.companyName}`}>
                Appeler maintenant
              </a>
            </div>
            <ul className="mt-8 grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
              <li>• Intervention dans l’Oise et le Val-d’Oise</li>
              <li>• Accompagnement personnalisé</li>
              <li>• Prestations pour particuliers et professionnels</li>
              <li>• Étude de chaque demande</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-900 p-8 text-white shadow-[0_20px_60px_-20px_rgba(15,23,42,0.35)]">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">Pourquoi nous contacter</p>
            <h2 className="mt-4 text-2xl font-semibold">Une approche claire pour vos projets</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Nous étudions chaque besoin avec attention pour proposer une solution adaptée, coordonnée et adaptée à votre situation.
            </p>
            <div className="mt-8 space-y-4">
              {[
                "Un interlocuteur unique pour comprendre votre besoin",
                "Des interventions coordonnées selon les pièces et les travaux",
                "Une communication claire à chaque étape",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/10 p-4 text-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-slate-50/80">
          <div className="mx-auto grid max-w-7xl gap-4 px-4 py-8 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
            {reassuranceItems.map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm">
                <p className="text-sm font-semibold text-slate-900">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">Services</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Des prestations variées pour des projets cohérents
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Que votre besoin concerne une installation, une réparation, une rénovation ou une mise en conformité, nous pouvons vous accompagner avec un interlocuteur unique.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {serviceCards.map((service) => (
              <article key={service.title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-8">
            <a href="#devis" className="inline-flex rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-amber-500 hover:text-amber-600">
              Parler de mon projet
            </a>
          </div>
        </section>

        <section id="about" className="bg-slate-900 py-20 text-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">L’entreprise</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Un artisan de proximité, à l’écoute de vos besoins
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                Chaque projet mérite une solution claire, adaptée et réalisée avec soin. De la première prise de contact jusqu’à la fin des travaux, vous bénéficiez d’un interlocuteur unique pour comprendre vos besoins et vous proposer une intervention cohérente.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/10 p-8">
              <h3 className="text-xl font-semibold">Nos engagements de travail</h3>
              <ul className="mt-6 space-y-3 text-sm text-slate-300">
                {[
                  "Écoute",
                  "Clarté",
                  "Soin",
                  "Ponctualité",
                  "Respect du logement",
                  "Solutions adaptées",
                  "Communication régulière",
                ].map((value) => (
                  <li key={value} className="rounded-2xl border border-white/10 bg-slate-800/70 px-4 py-3">
                    {value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">Méthode de travail</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Un parcours simple, organisé et rassurant
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              ["Prise de contact", "Nous recevons votre demande et identifions rapidement le besoin principal."],
              ["Étude du besoin", "Nous analysons la situation, vos attentes et la nature des travaux à prévoir."],
              ["Proposition et devis", "Nous vous présentons une approche cohérente et les éléments nécessaires à l’étude du projet."],
              ["Réalisation des travaux", "Nous mettons en œuvre les interventions avec soin et un suivi clair."],
            ].map(([title, text], index) => (
              <div key={title} className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
                <p className="text-sm font-semibold text-amber-600">0{index + 1}</p>
                <h3 className="mt-3 text-xl font-semibold text-slate-900">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="realisations" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">Réalisations</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Une galerie prête à accueillir vos futures réalisations
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Les photos seront ajoutées ultérieurement. Les blocs ci-dessous sont conçus pour être remplacés facilement par de vraies réalisations.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {[
              ["Plomberie", "Installation et rénovation"],
              ["Chauffage", "Remplacement et entretien"],
              ["Électricité", "Mise à niveau et dépannage"],
              ["Plâtrerie", "Cloisons et finitions"],
              ["Carrelage", "Revêtements de sol et murs"],
              ["Rénovation", "Travaux intérieurs coordonnés"],
            ].map(([title, text]) => (
              <div key={title} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                <div className="aspect-[4/3] bg-[linear-gradient(135deg,_#0f172a,_#475569)]" />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="zones" className="bg-slate-50 py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">Zone d’intervention</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Interventions dans l’Oise et le Val-d’Oise
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Basé à {siteConfig.baseCity}, {siteConfig.companyName} se déplace dans l’Oise et le Val-d’Oise pour étudier et réaliser vos projets de plomberie, chauffage, électricité, plâtrerie, carrelage et rénovation intérieure.
              </p>
              <a href="#devis" className="mt-8 inline-flex rounded-full bg-amber-600 px-6 py-3 font-semibold text-white transition hover:bg-amber-700">
                Vérifier si nous intervenons dans votre commune
              </a>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">Zone d’intervention</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Nous étudions les projets en fonction de la localisation, de la technicité des travaux et de l’organisation du chantier. L’objectif est de vous proposer une intervention claire et cohérente.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">Pourquoi nous contacter</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Un artisan polyvalent pour simplifier votre chantier
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {[
              "Avoir un interlocuteur unique",
              "Simplifier l’organisation du chantier",
              "Obtenir une vision globale du projet",
              "Assurer une meilleure cohérence entre les différents travaux",
              "Limiter les échanges avec plusieurs intervenants",
              "Faciliter le suivi du projet",
            ].map((item) => (
              <div key={item} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm leading-7 text-slate-600">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="devis" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">Demande de devis</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Décrivez votre projet en quelques lignes
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Votre application de messagerie va s’ouvrir avec votre demande préremplie. Il vous suffira de vérifier les informations et d’envoyer l’e-mail.
              </p>
              <form className="mt-8 space-y-5" onSubmit={handleSubmit} noValidate>
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700">Nom et prénom *</label>
                    <input id="name" name="name" value={formData.name} onChange={handleChange} className="w-full rounded-2xl border border-slate-300 px-4 py-3 focus:border-amber-500 focus:outline-none" />
                    {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">Adresse e-mail *</label>
                    <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} className="w-full rounded-2xl border border-slate-300 px-4 py-3 focus:border-amber-500 focus:outline-none" />
                    {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
                  </div>
                </div>
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-medium text-slate-700">Téléphone *</label>
                    <input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} className="w-full rounded-2xl border border-slate-300 px-4 py-3 focus:border-amber-500 focus:outline-none" />
                    {errors.phone && <p className="mt-2 text-sm text-red-600">{errors.phone}</p>}
                  </div>
                  <div>
                    <label htmlFor="city" className="mb-2 block text-sm font-medium text-slate-700">Ville ou code postal *</label>
                    <input id="city" name="city" value={formData.city} onChange={handleChange} className="w-full rounded-2xl border border-slate-300 px-4 py-3 focus:border-amber-500 focus:outline-none" />
                    {errors.city && <p className="mt-2 text-sm text-red-600">{errors.city}</p>}
                  </div>
                </div>
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label htmlFor="service" className="mb-2 block text-sm font-medium text-slate-700">Type de prestation *</label>
                    <select id="service" name="service" value={formData.service} onChange={handleChange} className="w-full rounded-2xl border border-slate-300 px-4 py-3 focus:border-amber-500 focus:outline-none">
                      <option value="">Sélectionner</option>
                      <option>Plomberie</option>
                      <option>Chauffage</option>
                      <option>Électricité</option>
                      <option>Plâtrerie ou plaques de plâtre</option>
                      <option>Carrelage</option>
                      <option>Rénovation intérieure</option>
                      <option>Plusieurs prestations</option>
                      <option>Autre</option>
                    </select>
                    {errors.service && <p className="mt-2 text-sm text-red-600">{errors.service}</p>}
                  </div>
                  <div>
                    <label htmlFor="priority" className="mb-2 block text-sm font-medium text-slate-700">Niveau de priorité *</label>
                    <select id="priority" name="priority" value={formData.priority} onChange={handleChange} className="w-full rounded-2xl border border-slate-300 px-4 py-3 focus:border-amber-500 focus:outline-none">
                      <option value="">Sélectionner</option>
                      <option>Demande urgente</option>
                      <option>Intervention souhaitée rapidement</option>
                      <option>Projet prévu prochainement</option>
                      <option>Projet à l’étude</option>
                    </select>
                    {errors.priority && <p className="mt-2 text-sm text-red-600">{errors.priority}</p>}
                  </div>
                </div>
                <div>
                  <label htmlFor="description" className="mb-2 block text-sm font-medium text-slate-700">Description du projet *</label>
                  <textarea id="description" name="description" rows={5} value={formData.description} onChange={handleChange} className="w-full rounded-2xl border border-slate-300 px-4 py-3 focus:border-amber-500 focus:outline-none" />
                  {errors.description && <p className="mt-2 text-sm text-red-600">{errors.description}</p>}
                </div>
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label htmlFor="contactPreference" className="mb-2 block text-sm font-medium text-slate-700">Préférence de contact *</label>
                    <select id="contactPreference" name="contactPreference" value={formData.contactPreference} onChange={handleChange} className="w-full rounded-2xl border border-slate-300 px-4 py-3 focus:border-amber-500 focus:outline-none">
                      <option value="">Sélectionner</option>
                      <option>Téléphone</option>
                      <option>E-mail</option>
                      <option>Indifférent</option>
                    </select>
                    {errors.contactPreference && <p className="mt-2 text-sm text-red-600">{errors.contactPreference}</p>}
                  </div>
                </div>
                <label className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                  <input type="checkbox" name="consent" checked={formData.consent} onChange={handleChange} className="mt-1 h-4 w-4 rounded border-slate-300 text-amber-600 focus:ring-amber-500" />
                  <span>J’accepte que mes informations soient utilisées pour traiter ma demande de devis.</span>
                </label>
                {errors.consent && <p className="mt-2 text-sm text-red-600">{errors.consent}</p>}
                {mailAlert ? <p className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">{mailAlert}</p> : null}
                <button type="submit" className="rounded-full bg-amber-600 px-6 py-3 font-semibold text-white transition hover:bg-amber-700">
                  Envoyer ma demande
                </button>
              </form>
            </div>
            <aside className="rounded-3xl border border-slate-200 bg-slate-900 p-8 text-white shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">Contact</p>
              <h3 className="mt-3 text-2xl font-semibold">Une réponse claire et rapide</h3>
              <div className="mt-8 space-y-4 text-sm text-slate-300">
                <div>
                  <p className="font-semibold text-white">Téléphone</p>
                  <a href={`tel:${siteConfig.phoneHref}`} className="mt-1 inline-block text-amber-400" aria-label={`Appeler ${siteConfig.companyName}`}>
                    {siteConfig.phoneDisplay}
                  </a>
                </div>
                <div>
                  <p className="font-semibold text-white">E-mail</p>
                  <a href={`mailto:${siteConfig.email}`} className="mt-1 inline-block text-amber-400">
                    {siteConfig.email}
                  </a>
                </div>
                <div>
                  <p className="font-semibold text-white">Zone d’intervention</p>
                  <p className="mt-1">{siteConfig.serviceAreas.join(" et ")}</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Horaires</p>
                  <p className="mt-1">{siteConfig.businessHours.label}</p>
                </div>
                <a href={`tel:${siteConfig.phoneHref}`} className="mt-6 inline-flex rounded-full bg-amber-600 px-5 py-3 font-semibold text-white transition hover:bg-amber-700" aria-label={`Appeler ${siteConfig.companyName}`}>
                  Appeler directement
                </a>
              </div>
            </aside>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">FAQ</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Questions fréquentes
            </h2>
          </div>
          <div className="mt-10 space-y-4">
            {faqItems.map((item, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={item.question} className="rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between px-6 py-5 text-left"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                  >
                    <span className="text-base font-semibold text-slate-900">{item.question}</span>
                    <span className="text-2xl text-amber-600">{isOpen ? "−" : "+"}</span>
                  </button>
                  {isOpen ? <p className="px-6 pb-6 text-sm leading-7 text-slate-600">{item.answer}</p> : null}
                </div>
              );
            })}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-slate-200 bg-slate-900 px-8 py-16 text-center text-white shadow-sm sm:px-12">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Un projet de travaux dans l’Oise ou le Val-d’Oise ?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-300">
              Présentez-nous votre besoin et bénéficiez d’un premier échange pour étudier la solution la plus adaptée à votre projet.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a href="#devis" className="rounded-full bg-amber-600 px-6 py-3 font-semibold text-white transition hover:bg-amber-700">
                Demander un devis
              </a>
              <a href={`tel:${siteConfig.phoneHref}`} className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-amber-400 hover:text-amber-400" aria-label={`Appeler ${siteConfig.companyName}`}>
                Appeler maintenant
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">{siteConfig.companyName}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Artisan multiservices dans l’Oise et le Val-d’Oise pour la plomberie, le chauffage, l’électricité, la plâtrerie, le carrelage et la rénovation intérieure.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">Contact</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li><a href={`tel:${siteConfig.phoneHref}`} className="hover:text-amber-600">{siteConfig.phoneDisplay}</a></li>
              <li><a href={`mailto:${siteConfig.email}`} className="hover:text-amber-600">{siteConfig.email}</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">Navigation</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}><a href={item.href} className="hover:text-amber-600">{item.label}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-200 px-4 py-6 text-center text-sm text-slate-500 sm:px-6 lg:px-8">
          <p>© <span>{new Date().getFullYear()}</span> {siteConfig.companyName}. Mentions légales et politique de confidentialité à compléter.</p>
        </div>
      </footer>

      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white/95 backdrop-blur md:hidden">
        <div className="mx-auto flex max-w-7xl gap-3 px-3 py-3">
          <a href={`tel:${siteConfig.phoneHref}`} className="flex-1 rounded-full bg-amber-600 px-4 py-3 text-center text-sm font-semibold text-white" aria-label={`Appeler ${siteConfig.companyName}`}>
            Appeler
          </a>
          <a href="#devis" className="flex-1 rounded-full border border-slate-300 px-4 py-3 text-center text-sm font-semibold text-slate-800">
            Demander un devis
          </a>
        </div>
      </div>
    </>
  );
}
