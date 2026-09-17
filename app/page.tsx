"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const EMAIL = "gueshkibret@gmail.com";
const GITHUB = "https://github.com/kb-117";
const LOMILAB = "https://lomilab.dev";
const TAGLINE = "Bringing You Tomorrow.";

const WAVE_PATH_WAVY =
  "M0,14 Q15,4 30,14 T60,14 T90,14 T120,14 T150,14 T180,14 T210,14 T240,14 T270,14 T300,14 T330,14 T360,14 T390,14 T420,14 T450,14 T480,14 T510,14 T540,14 T570,14 T600,14 T630,14 T660,14 T690,14 T720,14 T750,14 T780,14 T810,14 T840,14 T870,14 T900,14 T930,14 T960,14 T990,14 T1020,14 T1050,14 T1080,14 T1110,14 T1140,14 T1170,14 T1200,14";
const WAVE_PATH_STRAIGHT =
  "M0,14 Q15,14 30,14 T60,14 T90,14 T120,14 T150,14 T180,14 T210,14 T240,14 T270,14 T300,14 T330,14 T360,14 T390,14 T420,14 T450,14 T480,14 T510,14 T540,14 T570,14 T600,14 T630,14 T660,14 T690,14 T720,14 T750,14 T780,14 T810,14 T840,14 T870,14 T900,14 T930,14 T960,14 T990,14 T1020,14 T1050,14 T1080,14 T1110,14 T1140,14 T1170,14 T1200,14";
const WAVE_MORPH_VALUES = `${WAVE_PATH_WAVY};${WAVE_PATH_STRAIGHT};${WAVE_PATH_WAVY}`;

const NAV_LINKS = [
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
] as const;

const SKILL_GROUPS = [
  {
    title: "Full-stack development",
    items: ["React", "Next.js", "Node.js", "Express", "NestJS", "TypeScript"],
    rail: "amber",
  },
  {
    title: "Data & backend",
    items: ["PostgreSQL", "Prisma", "MongoDB", "REST APIs"],
    rail: "teal",
  },
  {
    title: "Front-end & SEO",
    items: ["Tailwind CSS", "GSAP", "shadcn/ui", "Technical SEO"],
    rail: "vermillion",
  },
  {
    title: "Desktop & mobile",
    items: ["Electron", "React Native", "Capacitor", "Offline-first / PWA"],
    rail: "amber",
  },
  {
    title: "Agency & ops work",
    items: [
      "WordPress development",
      "CRM integrations",
      "Site migrations",
      "DNS / domain configuration",
    ],
    rail: "teal",
  },
  {
    title: "Networking",
    items: ["Cisco & Huawei devices", "SolarWinds Orion NPM", "Cisco CCNA"],
    rail: "vermillion",
  },
] as const;

const RAIL_TEXT: Record<string, string> = {
  amber: "text-amber",
  teal: "text-teal",
  vermillion: "text-vermillion",
};

const RAIL_CHIP: Record<string, string> = {
  amber: "bg-amber/10 text-amber",
  teal: "bg-teal/15 text-teal",
  vermillion: "bg-vermillion/10 text-vermillion",
};

const PROJECTS = [
  {
    name: "Brana Biomedical — company website",
    description:
      "SEO-optimized company website for a biomedical engineering & technology firm.",
    stack: "Next.js, TypeScript, Tailwind CSS, GSAP",
    link: "https://brana-website-flame.vercel.app",
    linkLabel: "View site",
  },
  {
    name: "Brana — stock & financial management system",
    description:
      "Internal desktop application for inventory and financial management, built for daily operational use.",
    stack: "Electron, React, SQLite",
  },
  {
    name: "Clinic management system",
    description:
      "Role-based management system for dental clinic clients, spanning clinical and administrative staff.",
    stack: "Next.js, MongoDB, TypeScript",
    link: "https://dental-clinic-system-ten.vercel.app",
    linkLabel: "View site",
  },
  {
    name: "Barber shop management app",
    description:
      "Booking, POS, and financials for a barbershop, with automated notifications.",
    stack: "Next.js, PostgreSQL, Prisma",
    link: "https://barber.lomilab.dev",
    linkLabel: "View site",
    lomilab: true,
  },
  {
    name: "Spice — point of sale",
    description:
      "Offline-first POS and inventory system for a retail spice business, with a dedicated desktop terminal.",
    stack: "React, Vite, Capacitor, PostgreSQL",
    link: "https://spice.lomilab.dev",
    linkLabel: "View site",
    lomilab: true,
  },
];

const EXPERIENCE = [
  {
    role: "Web Developer (Remote)",
    org: "Tinova Agency, Maryland, USA",
    period: "Dec 2025 – Present",
    rail: "amber",
    points: [
      "Handle WordPress development, CRM integrations, site migrations, and DNS/infrastructure work for a US-based digital agency's clients, fully remote.",
    ],
  },
  {
    role: "Freelance Web Developer / IT Consultant",
    org: "Self-Employed, Mekelle, Ethiopia",
    period: "Jan 2024 – Present",
    rail: "teal",
    points: [
      "IT consultant for Brana Biomedical Engineering & Technology PLC: built their SEO-optimized company website and their internal stock & financial management system.",
      "Built clinic management systems for dental clinic clients.",
      "Delivered full-cycle freelance engagements — requirements through deployment — as the sole developer on each.",
    ],
  },
  {
    role: "Junior Network Engineer Intern",
    org: "IE Network Solutions, Addis Ababa, Ethiopia",
    period: "Sep 2025 – Jan 2026",
    rail: "vermillion",
    points: [
      "Monitored network performance and assisted configuring enterprise Cisco and Huawei devices across client sites.",
    ],
  },
] as const;

function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

function WaveDivider() {
  return (
    <div aria-hidden className="wave-divider-wrap">
      <svg
        width="100%"
        height="28"
        viewBox="0 0 1200 28"
        preserveAspectRatio="none"
        role="presentation"
      >
        <defs>
          <filter id="wave-glow" x="-20%" y="-300%" width="140%" height="700%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <path id="wave-line-path" d={WAVE_PATH_WAVY} fill="none">
            <animate
              attributeName="d"
              dur="9s"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              keyTimes="0; 0.5; 1"
              values={WAVE_MORPH_VALUES}
            />
          </path>
        </defs>
        <use
          href="#wave-line-path"
          stroke="#E8A33D"
          strokeWidth="5"
          opacity="0.5"
          filter="url(#wave-glow)"
          className="wave-glow-pulse"
        />
        <use href="#wave-line-path" stroke="#E8A33D" strokeWidth="2" />
      </svg>
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-parchment/10 bg-plum/80 backdrop-blur">
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        <a
          href="#top"
          onClick={close}
          className="font-display text-lg italic text-amber sm:text-xl"
          aria-label="Kibret Guesh Bahta"
        >
          KB.
        </a>

        <div className="hidden items-center gap-5 text-sm text-muted md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="link-underline hover:text-parchment"
            >
              {link.label}
            </a>
          ))}
          <a
            href={LOMILAB}
            target="_blank"
            rel="noreferrer"
            className="link-underline hover:text-parchment"
          >
            Lomilab ↗
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="rounded-full bg-parchment px-4 py-1.5 font-medium text-plum transition hover:bg-amber"
          >
            Contact
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
          className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] md:hidden"
        >
          <span className="h-0.5 w-5 rounded-full bg-parchment" />
          <span className="h-0.5 w-5 rounded-full bg-parchment" />
          <span className="h-0.5 w-5 rounded-full bg-parchment" />
        </button>
      </nav>

      {/* Backdrop */}
      <div
        aria-hidden
        onClick={close}
        className={`fixed inset-0 z-40 bg-plumDeep/70 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Off-canvas drawer */}
      <div
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
        className={`fixed inset-y-0 right-0 z-50 flex w-[78%] max-w-xs flex-col border-l border-parchment/10 bg-plum px-6 py-5 shadow-2xl transition-transform duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <span className="font-display text-lg italic text-amber">KB.</span>
          <button
            type="button"
            onClick={close}
            tabIndex={open ? 0 : -1}
            aria-label="Close menu"
            className="flex h-9 w-9 items-center justify-center rounded-full text-parchment transition hover:bg-parchment/10"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M1 1L15 15M15 1L1 15"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <div className="mt-10 flex flex-col gap-1">
          {[...NAV_LINKS, { href: LOMILAB, label: "Lomilab ↗" }].map(
            (link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={close}
                tabIndex={open ? 0 : -1}
                target={link.href === LOMILAB ? "_blank" : undefined}
                rel={link.href === LOMILAB ? "noreferrer" : undefined}
                style={{
                  transitionDelay: open ? `${100 + i * 60}ms` : "0ms",
                }}
                className={`rounded-xl px-2 py-3 text-base text-parchment transition-all duration-300 hover:bg-parchment/5 hover:text-amber ${
                  open
                    ? "translate-x-0 opacity-100"
                    : "translate-x-3 opacity-0"
                }`}
              >
                {link.label}
              </a>
            )
          )}
        </div>

        <a
          href={`mailto:${EMAIL}`}
          onClick={close}
          tabIndex={open ? 0 : -1}
          className="mt-auto rounded-full bg-parchment px-4 py-3 text-center font-medium text-plum transition hover:bg-amber"
        >
          Contact
        </a>
      </div>
    </header>
  );
}

function Hero() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .fromTo(
          "[data-hero-kicker]",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.6 }
        )
        .fromTo(
          "[data-hero-title]",
          { opacity: 0, y: 28 },
          { opacity: 1, y: 0, duration: 0.9 },
          "-=0.35"
        )
        .fromTo(
          "[data-hero-sub]",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.5"
        )
        .fromTo(
          "[data-hero-cta]",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.08 },
          "-=0.4"
        );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="top"
      ref={rootRef}
      className="relative isolate w-full overflow-hidden bg-dusk"
    >
      <div className="mx-auto max-w-4xl px-4 pb-20 pt-12 sm:px-6 sm:pb-28 sm:pt-24">
        <p data-hero-kicker className="section-heading">
          Kibret Guesh Bahta · Full-stack developer, remote
        </p>

        <div className="relative isolate mt-5 sm:mt-6">
          <div
            aria-hidden
            className="absolute -inset-x-6 -inset-y-10 rounded-full bg-gradient-to-br from-amber via-vermillion to-teal opacity-50 blur-3xl"
          />
          <h1
            data-hero-title
            className="relative font-display text-[clamp(2.25rem,10vw,6.5rem)] font-medium italic leading-[0.95] tracking-tight text-parchment mix-blend-difference"
          >
            {TAGLINE}
          </h1>
        </div>

        <p
          data-hero-sub
          className="mt-6 max-w-2xl text-base text-muted sm:mt-8 sm:text-lg"
        >
          I build full-stack products end to end — React/Next.js, Node.js,
          PostgreSQL/Prisma, and MongoDB — with hands-on remote work experience
          and an enterprise networking background (Cisco CCNA). Based in Addis
          Ababa, Ethiopia. Open to any timezone.
        </p>
        <div className="mt-8 flex flex-col gap-2.5 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
          <a
            data-hero-cta
            href={`mailto:${EMAIL}`}
            className="rounded-full bg-parchment px-4 py-2.5 text-center text-xs font-medium text-plum transition hover:bg-amber sm:w-auto sm:px-5 sm:py-2.5 sm:text-sm"
          >
            Get in touch
          </a>
          <a
            data-hero-cta
            href={GITHUB}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-parchment/20 px-4 py-2.5 text-center text-xs font-medium text-parchment transition hover:border-amber hover:text-amber sm:w-auto sm:px-5 sm:py-2.5 sm:text-sm"
          >
            GitHub
          </a>
          <a
            data-hero-cta
            href={LOMILAB}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-parchment/20 px-4 py-2.5 text-center text-xs font-medium text-parchment transition hover:border-teal hover:text-teal sm:w-auto sm:px-5 sm:py-2.5 sm:text-sm"
          >
            Building under Lomilab ↗
          </a>
        </div>
      </div>

      {/* Smooth fade into the flat page background instead of a hard cutoff */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-16 bg-gradient-to-b from-transparent to-plum sm:h-24"
      />
    </section>
  );
}

function About() {
  return (
    <Reveal className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14">
      <p className="section-heading">About</p>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
        I&apos;m a full-stack developer with a working track record on fully
        remote teams — currently handling WordPress development, CRM
        integrations, site migrations, and DNS/infrastructure work for a
        US-based digital agency&apos;s clients, alongside two years running
        freelance and consulting engagements end-to-end for clients I&apos;ve
        never worked with in person. I also build and operate independent
        products — a barbershop management app and a point-of-sale system —
        under my own studio, Lomilab. BSc in Information Technology (GPA
        3.93/4.00), with hands-on enterprise networking experience (Cisco
        CCNA, Huawei, SolarWinds).
      </p>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
        That&apos;s the throughline, whatever the stack: figure out what
        comes next, then ship it — bringing you tomorrow, today.
      </p>
    </Reveal>
  );
}

function Skills() {
  return (
    <Reveal className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14">
      <p className="section-heading">Skills</p>
      <div className="mt-5 grid gap-3 sm:mt-6 sm:gap-4 sm:grid-cols-2">
        {SKILL_GROUPS.map((group) => (
          <div key={group.title} className="card p-4 sm:p-5">
            <h3 className={`text-sm font-medium sm:text-base ${RAIL_TEXT[group.rail]}`}>
              {group.title}
            </h3>
            <ul className="mt-3 flex flex-wrap gap-1.5 text-xs text-parchment sm:text-sm">
              {group.items.map((item) => (
                <li
                  key={item}
                  className={`rounded-full px-2 py-0.5 sm:px-2.5 sm:py-1 ${RAIL_CHIP[group.rail]}`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Reveal>
  );
}

function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14">
      <Reveal>
        <p className="section-heading">Selected projects</p>
      </Reveal>
      <div className="mt-5 grid gap-3 sm:mt-6 sm:gap-4 sm:grid-cols-2">
        {PROJECTS.map((project) => (
          <Reveal key={project.name}>
            <div className="card flex h-full flex-col p-4 sm:p-5">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-sm font-medium text-parchment sm:text-base">
                  {project.name}
                </h3>
                {project.lomilab && (
                  <a
                    href={LOMILAB}
                    target="_blank"
                    rel="noreferrer"
                    className="shrink-0 rounded-full bg-teal/15 px-2 py-0.5 text-[10px] font-medium text-teal sm:text-xs"
                  >
                    Lomilab
                  </a>
                )}
              </div>
              <p className="mt-2 flex-1 text-xs text-muted sm:text-sm">
                {project.description}
              </p>
              <p className="mt-3 text-[10px] uppercase tracking-wide text-muted/70 sm:text-xs">
                {project.stack}
              </p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline mt-3 inline-flex w-fit items-center gap-1 text-xs font-medium text-amber sm:text-sm"
                >
                  {project.linkLabel} ↗
                </a>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14">
      <Reveal>
        <p className="section-heading">Experience</p>
      </Reveal>
      <div className="mt-6 space-y-6 sm:mt-8 sm:space-y-8">
        {EXPERIENCE.map((job) => (
          <Reveal key={job.role + job.org}>
            <div className={`timeline-rail rail-${job.rail} pl-5 sm:pl-6`}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-sm font-medium text-parchment sm:text-base">
                  {job.role}
                </h3>
                <span className="text-xs text-muted">{job.period}</span>
              </div>
              <p className={`text-xs sm:text-sm ${RAIL_TEXT[job.rail]}`}>
                {job.org}
              </p>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-xs text-muted sm:text-sm">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <Reveal className="mx-auto max-w-4xl px-4 py-10 text-center sm:px-6 sm:py-14">
      <h2 className="font-display text-xl italic tracking-tight text-parchment sm:text-2xl md:text-3xl">
        Let&apos;s build what&apos;s next.
      </h2>
      <p className="mx-auto mt-3 max-w-md text-sm text-muted sm:text-base">
        Tell me what you&apos;re trying to ship — I&apos;ll tell you what it
        takes to get there.
      </p>
      <a
        href={`mailto:${EMAIL}`}
        className="mt-6 inline-flex rounded-full bg-parchment px-5 py-2.5 text-xs font-medium text-plum transition hover:bg-amber sm:px-6 sm:py-3 sm:text-sm"
      >
        {EMAIL}
      </a>
    </Reveal>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-parchment/10">
      <div className="mx-auto flex max-w-4xl flex-col gap-3 px-4 py-8 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-6 sm:py-10 sm:text-sm">
        <p>
          © {new Date().getFullYear()} Kibret Guesh Bahta
          <span className="text-muted/60"> — {TAGLINE}</span>
        </p>
        <div className="flex flex-wrap gap-3 sm:gap-4">
          <a href={`mailto:${EMAIL}`} className="link-underline hover:text-parchment">
            {EMAIL}
          </a>
          <a
            href={GITHUB}
            target="_blank"
            rel="noreferrer"
            className="link-underline hover:text-parchment"
          >
            GitHub
          </a>
          <a
            href={LOMILAB}
            target="_blank"
            rel="noreferrer"
            className="link-underline hover:text-parchment"
          >
            Lomilab ↗
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <WaveDivider />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <CTA />
      <SiteFooter />
    </main>
  );
}
