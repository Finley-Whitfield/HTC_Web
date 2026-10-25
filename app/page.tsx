"use client";

import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

const navigationLinks = [
  ["About Hemsworth", "/about"],
  ["Council", "/council"],
  ["News & events", "/news"],
  ["Services", "/services"],
  ["Documents", "/documents"],
  ["Contact", "/contact"],
] as const;

const councilSite = "";

const documentLinks = [
  { icon: "▤", category: "MEETINGS", title: "Agendas & minutes", search: "minutes agendas meetings", href: `${councilSite}/agendas-minutes/` },
  { icon: "£", category: "FINANCE", title: "Budgets & monthly expenditure", search: "finance budget expenditure", href: `${councilSite}/budgets/` },
  { icon: "▧", category: "DOCUMENTS", title: "Documents & reports", search: "documents reports newsletters", href: `${councilSite}/documents-reports/` },
  { icon: "◇", category: "GOVERNANCE", title: "Policies & statements", search: "governance policies statements", href: `${councilSite}/policies-statements/` },
  { icon: "≡", category: "COUNCIL", title: "Committee structure & timetable", search: "council committees timetable", href: `${councilSite}/committee-structure/` },
  { icon: "⌂", category: "COUNCIL", title: "Councillors & interests", search: "councillors interests ward", href: `${councilSite}/councillors/` },
  { icon: "◉", category: "TRANSPARENCY", title: "Corrections & clarifications", search: "corrections clarification", href: `${councilSite}/corrections/` },
  { icon: "✳", category: "PUBLIC NOTICES", title: "Latest news & public notices", search: "news public notices vacancies", href: `${councilSite}/latest-news/` },
] as const;

const events = [
  { icon: "✳", overline: "WHAT'S ON", title: "Local services & events", href: `${councilSite}/local-events/` },
  { icon: "⌂", overline: "COMMUNITY LIFE", title: "Groups & activities", href: `${councilSite}/services-local-amenities/` },
  { icon: "◉", overline: "ROOMS & VENUES", title: "Community centres", href: `${councilSite}/community-centre/` },
] as const;

const services = [
  { number: "01", title: "Contact Hemsworth Town Council", summary: "Phone, email and visit the administration office", href: `${councilSite}/contact-us/` },
  { number: "02", title: "Agendas, minutes & meetings", summary: "Read meeting papers and the 2026/27 timetable", href: `${councilSite}/agendas-minutes/` },
  { number: "03", title: "Councillors & wards", summary: "Find councillors and their register of interests", href: `${councilSite}/councillors/` },
  { number: "04", title: "Resident permits & community grants", summary: "Find out about local resident concessions and grants", href: `${councilSite}/services-local-amenities/` },
  { number: "05", title: "Wakefield Council services", summary: "Council tax, housing, roads, education and more", href: `${councilSite}/hemsworth-council-wakefield-council/` },
] as const;

const timeline = [
  { era: "1894", title: "Local councils", text: "Parish and town councils have been the tier of local government closest to residents since 1894." },
  { era: "1974", title: "Hemsworth Town Council", text: "The council came into existence on 1 April 1974 under the Local Government Act 1972." },
  { era: "2008", title: "Quality Parish Status", text: "Hemsworth Town Council received Quality Parish Status, with re-accreditation in 2012." },
  { era: "TODAY", title: "Three communities", text: "The council serves Hemsworth, Fitzwilliam and Kinsley across five township wards." },
] as const;

const projectCards = [
  {
    className: "project-one",
    id: undefined,
    number: "01 / REPRESENTATION",
    status: "COUNCILLORS & WARDS",
    title: <>Meet your<br />councillors.</>,
    action: "View councillors and interests",
    href: `${councilSite}/councillors/`,
  },
  {
    className: "project-two",
    id: "meetings",
    number: "02 / DEMOCRACY",
    status: "MEETINGS & MINUTES",
    title: <>Council business,<br />in public.</>,
    action: "Read agendas and minutes",
    href: `${councilSite}/agendas-minutes/`,
  },
  {
    className: "project-three",
    id: undefined,
    number: "03 / OPEN GOVERNMENT",
    status: "FINANCE & POLICIES",
    title: <>Budgets, reports<br />and policies.</>,
    action: "Browse official records",
    href: `${councilSite}/documents-reports/`,
  },
] as const;

const resourceGroups = [
  {
    title: "Council & democracy",
    links: [
      ["Councillors and registers of interests", "/councillors/"],
      ["Committee structure", "/committee-structure/"],
      ["Council meeting timetable", "/committee-timetable/"],
      ["Agendas, minutes and recordings", "/agendas-minutes/"],
      ["Casual vacancies and co-option", "/vacancies/"],
      ["Latest news and public notices", "/latest-news/"],
    ],
  },
  {
    title: "Finance & documents",
    links: [
      ["Monthly expenditure and budgets", "/budgets/"],
      ["Documents and reports", "/documents-reports/"],
      ["Policies and statements", "/policies-statements/"],
      ["Newsletters", "/newsletters/"],
      ["Accessibility statement", "/accessibility/"],
      ["Privacy policy", "/privacy-policy/"],
    ],
  },
  {
    title: "Services & places",
    links: [
      ["Services and local amenities", "/services-local-amenities/"],
      ["Community Centre", "/community-centre/"],
      ["Hemsworth Water Park and Playworld", "/hemsworth-waterpark-playworld/"],
      ["The Boathouse Café", "/lakeside-cafe-bar/"],
      ["Football facilities", "/football-facilities/"],
      ["Allotments", "/allotments/"],
      ["Fitzwilliam Centre", "/fitzwilliam-centre/"],
      ["Gallery", "/gallery/"],
    ],
  },
  {
    title: "More information",
    links: [
      ["Contact the council", "/contact-us/"],
      ["Hemsworth and Wakefield Council responsibilities", "/hemsworth-council-wakefield-council/"],
      ["Local events and community groups", "/local-events/"],
      ["Wakefield District Local Plan 2036", "/wakefield-district-council-local-plan-2036/"],
      ["Corrections and clarifications", "/corrections/"],
      ["Accessibility issue form", "/accessibility-issue-form/"],
      ["Hemsworth Town Council on Facebook", "/hemsworth-town-council-facebook/"],
      ["Queen Elizabeth II archive", "/queen/"],
    ],
  },
] as const;

const latestUpdates = [
  {
    date: "14 October 2026",
    title: "Community Centre opening time — 12 November",
    summary: "The Community Centre will open at 9:30am on Thursday 12 November.",
    href: `${councilSite}/thursday-12th-november-2026/`,
  },
  {
    date: "7 October 2026",
    title: "Christmas Bingo & Brass Band Evening",
    summary: "Tickets go on sale at the Community Centre on 19 November.",
    href: `${councilSite}/christmas-bingo-brass-band-evening-2026/`,
  },
  {
    date: "17 September 2026",
    title: "Town Council recruitment notices",
    summary: "Recruitment notices for the Responsible Finance Officer and Town Clerk are published online; check the council page for current status.",
    href: `${councilSite}/job-vacancies/`,
  },
] as const;

const facilityHighlights = [
  {
    title: "Water Park & Playworld",
    detail: "Parking is £3 per vehicle for all-day parking on weekends and school holidays, 9am–5pm. Playworld entry is £3 per child. Playworld hours vary by school term and weather.",
    href: `${councilSite}/hemsworth-waterpark-playworld/`,
  },
  {
    title: "Residents’ permits",
    detail: "Residents of Hemsworth, Fitzwilliam and Kinsley can apply for free Water Park parking and free Playworld entry. Take proof of your name and address to Hemsworth Community Centre.",
    href: `${councilSite}/services-local-amenities/`,
  },
  {
    title: "Fishing & pedaloes",
    detail: "Day fishing permits are £4.50 per adult peg and £2.50 per child peg. Pedalo hire is £8.50 per boat (seats four). Opening is weather-dependent; fishing requires a rod licence.",
    href: `${councilSite}/hemsworth-waterpark-playworld/`,
  },
  {
    title: "Community Centre",
    detail: "Public opening hours are Monday–Thursday 8am–4pm, Friday 8am–3:30pm and Saturday 8am–10am. Room hire starts at £20 per hour, plus VAT.",
    href: `${councilSite}/community-centre/`,
  },
  {
    title: "The Boathouse Café",
    detail: "The café is listed as open daily from 9am–5:30pm. Current drinks, breakfast and main menus are published on the council website.",
    href: `${councilSite}/lakeside-cafe-bar/`,
  },
  {
    title: "Grants & celebrations",
    detail: "The council grant scheme supports eligible community organisations serving township residents. The council also recognises residents’ milestone birthdays.",
    href: `${councilSite}/services-local-amenities/`,
  },
] as const;

type RevealProps = {
  reducedMotion: boolean | null;
};

function Reveal({ reducedMotion }: RevealProps) {
  return reducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 22 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.12 },
        transition: { duration: 0.7, ease: [0.2, 0.7, 0.2, 1] as const },
      };
}

function AnimatedCount({ target }: { target: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.8 });
  const reducedMotion = useReducedMotion();
  const [count, setCount] = useState(target);

  useEffect(() => {
    if (!isInView) return;
    if (reducedMotion) {
      setCount(target);
      return;
    }

    const duration = 1300;
    let frame = 0;
    const startTime = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - (1 - progress) ** 4;
      setCount(Math.round(target * eased));
      if (progress < 1) frame = window.requestAnimationFrame(animate);
    };

    setCount(0);
    frame = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(frame);
  }, [isInView, reducedMotion, target]);

  return <span ref={ref}>{new Intl.NumberFormat("en-GB").format(count)}</span>;
}

function HeroBackground() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 700], [0, 70], { clamp: true });
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className="hero-image"
      role="img"
      aria-label="Hemsworth Community Centre"
      style={reducedMotion ? undefined : { y }}
      initial={reducedMotion ? false : { scale: 1.09 }}
      animate={{ scale: 1.025 }}
      transition={{ duration: reducedMotion ? 0 : 1.4, ease: [0.2, 0.75, 0.2, 1] }}
    />
  );
}

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [documentQuery, setDocumentQuery] = useState("");
  const timelineRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const reducedMotion = useReducedMotion();
  const reveal = Reveal({ reducedMotion });
  const filteredDocuments = documentLinks.filter((document) =>
    `${document.title} ${document.category} ${document.search}`
      .toLocaleLowerCase("en-GB")
      .includes(documentQuery.trim().toLocaleLowerCase("en-GB")),
  );

  useEffect(() => {
    if (!menuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  const moveTimeline = (direction: -1 | 1) => {
    timelineRef.current?.scrollBy({
      left: direction * 220,
      behavior: reducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="announcement">
        <span className="announcement-dot" aria-hidden="true" />
        <span>Your town, your voice. <a href="#contact">Get in touch with the council <span aria-hidden="true">↗</span></a></span>
      </div>

      <header className="site-header">
        <a className="brand" href="#home" aria-label="Hemsworth Town Council home">
          <BrandMark />
          <span className="brand-copy"><strong>HEMSWORTH</strong><small>TOWN COUNCIL</small></span>
        </a>
        <button
          ref={menuButtonRef}
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="menu-toggle-label">Menu</span>
          <span className="menu-icon" aria-hidden="true"><i /><i /></span>
        </button>
        <nav
          className={`primary-navigation${menuOpen ? " is-open" : ""}`}
          id="primary-navigation"
          aria-label="Main navigation"
        >
          {navigationLinks.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
          <a className="nav-cta" href="#services" onClick={() => setMenuOpen(false)}>
            Find a service <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      <main id="main" className="min-h-screen">
        <section className="hero" id="home" aria-labelledby="hero-title">
          <HeroBackground />
          <div className="hero-grain" aria-hidden="true" />
          <motion.div
            className="hero-content"
            initial={reducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
          >
            <p className="eyebrow light"><span className="eyebrow-line" /> Hemsworth · Fitzwilliam · Kinsley</p>
            <h1 id="hero-title">HEMS<span>W</span>ORTH</h1>
            <p className="hero-subtitle">Your Town Council for<br />Hemsworth, Fitzwilliam &amp; Kinsley.</p>
            <div className="hero-actions">
              <a className="button button-light" href="#services">Find a council service <span aria-hidden="true">↗</span></a>
              <a className="button button-outline" href="/news">Latest news <span aria-hidden="true">→</span></a>
            </div>
          </motion.div>
          <div className="hero-bottom">
            <span>HEMSWORTH · WEST YORKSHIRE</span>
            <a href="#community">SCROLL TO DISCOVER <span aria-hidden="true">↓</span></a>
          </div>
          <span className="hero-index" aria-hidden="true">01 <i /> 04</span>
        </section>

        <motion.section className="intro section-wrap" id="community" {...reveal}>
          <div className="intro-label"><span className="eyebrow">Your local council</span><span className="label-rule" /></div>
          <div className="intro-copy">
            <h2>Serving three communities.<br /><span>Working close to home.</span></h2>
            <div className="intro-bottom">
              <p>Hemsworth Town Council serves Hemsworth, Fitzwilliam and Kinsley. It is the independent local council responsible for community-level services and representing the people of the township.</p>
              <a className="text-link" href="/about">About the council <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </motion.section>

        <section className="numbers" aria-label="Hemsworth at a glance">
          <div className="numbers-heading"><span className="eyebrow light">Hemsworth Town Council</span><span className="numbers-aside">THE TOWNSHIP AT A GLANCE</span></div>
          <div className="stat-grid">
          {[{ value: 3, suffix: "", label: "Communities served" }, { value: 5, suffix: "", label: "Township wards" }, { value: 1974, suffix: "", label: "Council established" }].map((stat) => (
              <motion.div key={stat.label} className="stat" {...reveal}>
                <strong><AnimatedCount target={stat.value} />{stat.suffix && <b>{stat.suffix}</b>}</strong><span>{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </section>

        <motion.section className="section-wrap events-section" id="events" {...reveal}>
          <div className="section-heading">
            <div><p className="eyebrow"><span className="eyebrow-line dark" /> Community life</p><h2>Places to meet.<br />Things to do.</h2></div>
            <div className="heading-aside"><p>Find local facilities, community groups and events published by the Town Council.</p>            <a className="text-link" href="/news">Local events &amp; services <span aria-hidden="true">↗</span></a></div>
          </div>
          <div className="event-feature">
            <div className="event-photo photo-event" role="img" aria-label="Families enjoying the boating lake at Hemsworth Water Park" />
            <div className="event-overlay" />
            <div className="event-feature-content">
              <span className="tag tag-green">TOWN COUNCIL FACILITIES</span>
              <h3>Community<br />spaces, right<br />here at home.</h3>
              <p>Explore the Community Centre, Fitzwilliam Centre, Water Park, Playworld and more.</p>
              <a className="round-link" href="/services" aria-label="Explore council services and facilities">↗</a>
            </div>
            <span className="event-caption">LOCAL PLACES &amp; SERVICES</span>
          </div>
          <div className="event-tiles" id="community-groups">
            {events.map((event) => (
              <a key={event.title} className="event-tile" href={event.href}>
                <span className="tile-icon" aria-hidden="true">{event.icon}</span>
                <span><small>{event.overline}</small><strong>{event.title}</strong></span>
                <span className="tile-arrow" aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </motion.section>

        <section className="facility-information section-wrap" id="facilities">
          <div className="section-heading">
            <div><p className="eyebrow"><span className="eyebrow-line dark" /> Council services &amp; facilities</p><h2>Useful local<br />information.</h2></div>
            <div className="heading-aside"><p>A quick guide to the services and facilities managed or supported by Hemsworth Town Council. Prices and seasonal opening can change; confirm details with the council before travelling.</p></div>
          </div>
          <div className="facility-grid">
            {facilityHighlights.map((facility) => (
              <article className="facility-card" key={facility.title}>
                <h3>{facility.title}</h3>
                <p>{facility.detail}</p>
                <a href={facility.href}>Full details <span aria-hidden="true">↗</span></a>
              </article>
            ))}
          </div>
          <p className="facility-note">The council advises that Water Park and Playworld opening is weather-dependent. Call <a href="tel:+441977617617">01977 617617</a> to confirm availability.</p>
        </section>

        <section className="explore" id="explore">
          <div className="explore-image" role="img" aria-label="Boating lake and parkland at Hemsworth Water Park" />
          <motion.div className="explore-content" id="facilities" {...reveal}>
            <p className="eyebrow light"><span className="eyebrow-line" /> Local services</p>
            <h2>Explore your<br />local facilities.</h2>
            <p>The Town Council manages local amenities and provides services for residents across the township.</p>
            <div className="explore-links">
              <a href="/water-park"><span>01</span> Hemsworth Water Park &amp; Playworld <b aria-hidden="true">↗</b></a>
              <a href="/community-centre"><span>02</span> Hemsworth Community Centre <b aria-hidden="true">↗</b></a>
              <a href="/fitzwilliam-centre"><span>03</span> Fitzwilliam Centre <b aria-hidden="true">↗</b></a>
              <a href="/football-facilities"><span>04</span> Football facilities <b aria-hidden="true">↗</b></a>
            </div>
            <a className="button button-light" href="/services">All council services <span aria-hidden="true">↗</span></a>
          </motion.div>
          <span className="explore-coordinates" aria-hidden="true">HEMSWORTH · YORKSHIRE</span>
        </section>

        <motion.section className="section-wrap stories-section" id="stories" {...reveal}>
          <div className="section-heading">
            <div><p className="eyebrow"><span className="eyebrow-line dark" /> Council announcements</p><h2>News from<br />your council.</h2></div>
            <div className="heading-aside"><p>Recent notices and events from Hemsworth Town Council. Follow the links for full details and updates.</p><a className="text-link" href="/news">All news &amp; updates <span aria-hidden="true">↗</span></a></div>
          </div>
          <a className="story-feature" href={latestUpdates[1].href}>
            <div className="story-photo photo-story" role="img" aria-label="Hemsworth Community Centre" />
            <div className="story-copy"><span className="story-category">COMMUNITY EVENT <i /> 7 OCTOBER 2026</span><h3>Christmas Bingo<br />&amp; Brass Band.</h3><p>Tickets for the 2026 Christmas event go on sale at the Community Centre on 19 November.</p><span className="story-read">View the notice <b aria-hidden="true">↗</b></span></div>
          </a>
          <div className="story-bottom" id="news">
            {latestUpdates.map((update, index) => (
              <a className="story-mini" href={update.href} key={update.title}>
                <span className="mini-number">0{index + 1}</span>
                <span><small>{update.date.toUpperCase()}</small><strong>{update.title}</strong></span>
                <b aria-hidden="true">↗</b>
              </a>
            ))}
          </div>
          <div className="update-details">
            {latestUpdates.map((update) => (
              <article key={update.title}>
                <small>{update.date}</small>
                <h3><a href={update.href}>{update.title}</a></h3>
                <p>{update.summary}</p>
              </article>
            ))}
          </div>
        </motion.section>

        <section className="projects" id="council">
          <div className="projects-top section-wrap" id="councillors">
            <motion.div className="projects-heading" {...reveal}><p className="eyebrow light"><span className="eyebrow-line" /> Hemsworth Town Council</p><h2>Local council.<br /><span>Local people.</span></h2></motion.div>
            <motion.div className="projects-intro" {...reveal}><p>Five wards serve Hemsworth, Fitzwilliam and Kinsley. The council is made up of three councillors for each ward and works on services and matters that affect the local community.</p><a className="button button-outline" href="/council">Council committees <span aria-hidden="true">↗</span></a></motion.div>
          </div>
          <div className="project-cards section-wrap" id="projects">
            {projectCards.map((project) => (
              <motion.a key={project.number} id={project.id} className={`project-card ${project.className}`} href={project.href} {...reveal}>
                <span className="project-count">{project.number}</span>
                <div><span className="project-status"><i /> {project.status}</span><h3>{project.title}</h3><span className="project-cta">{project.action}<b aria-hidden="true">↗</b></span></div>
              </motion.a>
            ))}
          </div>
        </section>

        <motion.section className="history section-wrap" id="history" {...reveal}>
          <div className="history-heading">
            <div><p className="eyebrow"><span className="eyebrow-line dark" /> About the council</p><h2>Local roots.<br />Public service.</h2></div>
            <p>The Town Council is an independent local authority, governed by statute, and funded in part through the parish precept collected with council tax.</p>
          </div>
          <div className="history-timeline" aria-label="Hemsworth history timeline">
            <div className="timeline-track"><span className="timeline-progress" /></div>
            <div className="timeline-items" ref={timelineRef}>
              {timeline.map((item) => (
                <article className="timeline-item" key={item.era}><span className="timeline-dot" /><small>{item.era}</small><h3>{item.title}</h3><p>{item.text}</p></article>
              ))}
            </div>
            <div className="timeline-controls"><span>HEMSWORTH THROUGH TIME</span><div><button type="button" className="timeline-prev" aria-label="Scroll timeline left" onClick={() => moveTimeline(-1)}>←</button><button type="button" className="timeline-next" aria-label="Scroll timeline right" onClick={() => moveTimeline(1)}>→</button></div></div>
          </div>
        </motion.section>

        <section className="document-section" id="documents">
          <div className="document-inner section-wrap">
            <motion.div className="document-intro" {...reveal}><p className="eyebrow light"><span className="eyebrow-line" /> Council records</p><h2>Documents,<br />minutes &amp; reports.</h2><p>Browse meeting papers, expenditure, policies and reports on the council’s document pages.</p><a className="button button-light" href="/documents">Browse council documents <span aria-hidden="true">↗</span></a></motion.div>
            <motion.div className="document-panel" id="document-search" {...reveal}>
              <div className="document-search-head"><span>DOCUMENT CENTRE</span><span className="search-icon" aria-hidden="true">⌕</span></div>
              <label className="visually-hidden" htmlFor="doc-search">Search document categories</label>
              <div className="search-box"><input type="search" id="doc-search" placeholder="Search documents & categories" value={documentQuery} onChange={(event) => setDocumentQuery(event.currentTarget.value)} /><button type="button" aria-label="Clear search" onClick={() => setDocumentQuery("")}>↗</button></div>
              <div className="document-categories" role="list">
                {filteredDocuments.map((document) => (
                  <a key={document.title} href={document.href} className="document-category" data-search={document.search}>
                    <span className="doc-icon" aria-hidden="true">{document.icon}</span><span><small>{document.category}</small><strong>{document.title}</strong></span><b aria-hidden="true">↗</b>
                  </a>
                ))}
              </div>
              {filteredDocuments.length === 0 && <p className="search-empty">No matching categories. Try a different search.</p>}
              <a className="document-all" href="/documents">View all council documents <span aria-hidden="true">↗</span></a>
            </motion.div>
          </div>
        </section>

        <motion.section className="services-section section-wrap" id="services" {...reveal}>
          <div className="services-title" id="elections"><p className="eyebrow"><span className="eyebrow-line dark" /> Start here</p><h2>What do you<br />need help with?</h2></div>
          <div className="services-list">
            {services.map((service) => (
              <a key={service.number} href={service.href}><span>{service.number}</span><strong>{service.title}</strong><small>{service.summary}</small><b aria-hidden="true">↗</b></a>
            ))}
          </div>
        </motion.section>

        <section className="resource-directory section-wrap" id="council-information">
          <div className="section-heading">
            <div><p className="eyebrow"><span className="eyebrow-line dark" /> Hemsworthcouncil.co.uk</p><h2>All council<br />information.</h2></div>
            <div className="heading-aside"><p>Explore council services, local facilities, public notices, and information about elected representatives.</p><a className="text-link" href="/services">Browse council services <span aria-hidden="true">↗</span></a></div>
          </div>
          <div className="resource-grid">
            {resourceGroups.map((group) => (
              <section className="resource-group" key={group.title} aria-labelledby={`resource-${group.title.replaceAll(" ", "-").toLowerCase()}`}>
                <h3 id={`resource-${group.title.replaceAll(" ", "-").toLowerCase()}`}>{group.title}</h3>
                <ul>
                  {group.links.map(([label, path]) => (
                    <li key={path}><a href={path}>{label}<span aria-hidden="true">↗</span></a></li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
          <p className="resource-note">Council information and published notices may change. Contact the council to confirm current details.</p>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-image" role="img" aria-label="Hemsworth Community Centre" />
          <div className="contact-content section-wrap">
            <motion.div className="contact-copy" {...reveal}><p className="eyebrow light"><span className="eyebrow-line" /> Hemsworth Town Council</p><h2>Get in touch<br />with your local<br /><span>council team.</span></h2><a className="button button-light" href="mailto:webenquiry@hemsworthcouncil.co.uk">Email the council <span aria-hidden="true">↗</span></a></motion.div>
            <motion.div className="contact-info" {...reveal}>
              <span>ADMINISTRATION OFFICE</span>
              <address>Hemsworth Town Council Community Centre<br />Bullenshaw Road, Hemsworth<br />Pontefract, WF9 4NE</address>
              <p><a href="tel:+441977617617">01977 617617</a><br /><a href="mailto:webenquiry@hemsworthcouncil.co.uk">webenquiry@hemsworthcouncil.co.uk</a></p>
              <p>Monday–Thursday: 8am–4pm<br />Friday: 8am–3:30pm</p>
              <a className="contact-call" href="/contact">Contact details &amp; map <span aria-hidden="true">↗</span></a>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main">
          <a className="brand footer-brand" href="#home" aria-label="Hemsworth Town Council home"><BrandMark /><span className="brand-copy"><strong>HEMSWORTH</strong><small>TOWN COUNCIL</small></span></a>
          <p>Hemsworth · Fitzwilliam · Kinsley<br /><span>Your Town Council</span></p>
          <div className="footer-links"><a href="/news">Latest news</a><a href="/meetings">Meetings</a><a href="/documents">Documents</a><a href="/contact">Contact</a></div>
        </div>
        <p className="photo-credit">
          Hemsworth Water Park photo by Carol Walker via{" "}
          <a href="https://commons.wikimedia.org/wiki/File:Hemsworth_Water_Park_-_geograph.org.uk_-_2361968.jpg" target="_blank" rel="noreferrer">Geograph / Wikimedia Commons</a>, licensed under{" "}
          <a href="https://creativecommons.org/licenses/by-sa/2.0/" target="_blank" rel="noreferrer">CC BY-SA 2.0</a>. Community Centre photo provided by the site owner.
        </p>
        <div className="footer-bottom"><span>HEMSWORTH TOWN COUNCIL</span><span>Hemsworth · Fitzwilliam · Kinsley</span><a href="#home">BACK TO TOP ↑</a></div>
      </footer>
    </>
  );
}

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <svg viewBox="0 0 44 44" fill="none">
        <path d="M22 3 39 13v18L22 41 5 31V13L22 3Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="m13 29 9-16 9 16M17 23h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}
