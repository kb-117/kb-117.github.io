"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const EMAIL = "gueshkibret@gmail.com";
const GITHUB = "https://github.com/kb-117";
const LOMILAB = "https://lomilab.dev";

const SKILL_GROUPS = [
  {
    title: "Full-stack development",
    items: ["React", "Next.js", "Node.js", "Express", "NestJS", "TypeScript"],
  },
  {
    title: "Data & backend",
    items: ["PostgreSQL", "Prisma", "MongoDB", "REST APIs"],
  },
  {
    title: "Front-end & SEO",
    items: ["Tailwind CSS", "GSAP", "shadcn/ui", "Technical SEO"],
  },
  {
    title: "Desktop & mobile",
    items: ["Electron", "React Native", "Capacitor", "Offline-first / PWA"],
  },
  {
    title: "Agency & ops work",
    items: [
      "WordPress development",
      "CRM integrations",
      "Site migrations",
      "DNS / domain configuration",
    ],
  },
  {
    title: "Networking",
    items: ["Cisco & Huawei devices", "SolarWinds Orion NPM", "Cisco CCNA"],
  },
];

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
  {
    name: "University SuperApp",
    description:
      "Final-year project — led a student team proposing a governed university platform architecture.",
    stack: "React Native, Expo",
  },
  {
    name: "Food delivery platform",
    description:
      "Led a student team conceptualizing a platform integrating restaurants, customers, and delivery.",
    stack: "Concept / architecture",
  },
];

const EXPERIENCE = [
  {
    role: "Web Developer (Remote)",
    org: "Tinova Agency, Maryland, USA",
    period: "Dec 2025 – Present",
    points: [
      "Handle WordPress development, CRM integrations, site migrations, and DNS/infrastructure work for a US-based digital agency's clients, fully remote.",
    ],
  },
  {
    role: "Freelance Web Developer / IT Consultant",
    org: "Self-Employed, Mekelle, Ethiopia",
    period: "Jan 2024 – Present",
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
    points: [
      "Monitored network performance and assisted configuring enterprise Cisco and Huawei devices across client sites.",
    ],
  },
];

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

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-paper/80 backdrop-blur dark:border-white/5 dark:bg-ink/80">
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-semibold tracking-tight">
          Kibret Guesh Bahta
        </a>
        <div className="flex items-center gap-5 text-sm text-muted">
          <a href="#projects" className="hover:text-accent">
            Projects
          </a>
          <a href="#experience" className="hover:text-accent">
            Experience
          </a>
          <a
            href={LOMILAB}
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent"
          >
            Lomilab ↗
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="rounded-full bg-ink px-4 py-1.5 text-paper transition hover:bg-accent dark:bg-paper dark:text-ink"
          >
            Contact
          </a>
        </div>
      </nav>
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
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.35"
        )
        .fromTo(
          "[data-hero-sub]",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.45"
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
      className="mx-auto max-w-4xl px-6 pb-20 pt-16 sm:pt-24"
    >
      <p data-hero-kicker className="section-heading">
        Full-stack developer
      </p>
      <h1
        data-hero-title
        className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl"
      >
        I build full-stack products, end to end.
      </h1>
      <p data-hero-sub className="mt-5 max-w-2xl text-lg text-muted">
        React/Next.js, Node.js, PostgreSQL/Prisma, and MongoDB — with
        hands-on remote work experience and an enterprise networking
        background (Cisco CCNA). Based in Addis Ababa, Ethiopia — open to
        any timezone.
      </p>
      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a
          data-hero-cta
          href={`mailto:${EMAIL}`}
          className="rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition hover:bg-accent dark:bg-paper dark:text-ink"
        >
          Get in touch
        </a>
        <a
          data-hero-cta
          href={GITHUB}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-black/10 px-5 py-2.5 text-sm font-medium transition hover:border-accent hover:text-accent dark:border-white/15"
        >
          GitHub
        </a>
        <a
          data-hero-cta
          href={LOMILAB}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-black/10 px-5 py-2.5 text-sm font-medium transition hover:border-accent hover:text-accent dark:border-white/15"
        >
          Building under Lomilab ↗
        </a>
      </div>
    </section>
  );
}

function About() {
  return (
    <Reveal className="mx-auto max-w-4xl px-6 py-14">
      <p className="section-heading">About</p>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
        I&apos;m a full-stack developer with a working track record on fully
        remote teams — currently handling WordPress development, CRM
        integrations, site migrations, and DNS/infrastructure work for a
        US-based digital agency&apos;s clients, alongside two years running
        freelance and consulting engagements end-to-end for clients I&apos;ve
        never worked with in person. I also build and operate independent
        products — a barbershop management app and a point-of-sale system —
        under my own studio, Lomilab. Final-year IT student (GPA 3.93/4.00),
        graduating 2026, with hands-on enterprise networking experience
        (Cisco CCNA, Huawei, SolarWinds).
      </p>
    </Reveal>
  );
}

function Skills() {
  return (
    <Reveal className="mx-auto max-w-4xl px-6 py-14">
      <p className="section-heading">Skills</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {SKILL_GROUPS.map((group) => (
          <div key={group.title} className="card p-5">
            <h3 className="font-medium">{group.title}</h3>
            <ul className="mt-2 flex flex-wrap gap-1.5 text-sm text-muted">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full bg-black/5 px-2.5 py-1 dark:bg-white/10"
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
    <section id="projects" className="mx-auto max-w-4xl px-6 py-14">
      <Reveal>
        <p className="section-heading">Selected projects</p>
      </Reveal>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {PROJECTS.map((project) => (
          <Reveal key={project.name}>
            <div className="card flex h-full flex-col p-5">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-medium">{project.name}</h3>
                {project.lomilab && (
                  <a
                    href={LOMILAB}
                    target="_blank"
                    rel="noreferrer"
                    className="shrink-0 rounded-full bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent"
                  >
                    Lomilab
                  </a>
                )}
              </div>
              <p className="mt-2 flex-1 text-sm text-muted">
                {project.description}
              </p>
              <p className="mt-3 text-xs uppercase tracking-wide text-muted/80">
                {project.stack}
              </p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex w-fit items-center gap-1 text-sm font-medium text-accent hover:underline"
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
    <section id="experience" className="mx-auto max-w-4xl px-6 py-14">
      <Reveal>
        <p className="section-heading">Experience</p>
      </Reveal>
      <div className="mt-6 space-y-6">
        {EXPERIENCE.map((job) => (
          <Reveal key={job.role + job.org}>
            <div className="card p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-medium">{job.role}</h3>
                <span className="text-xs text-muted">{job.period}</span>
              </div>
              <p className="text-sm text-muted">{job.org}</p>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-muted">
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

function SiteFooter() {
  return (
    <footer className="border-t border-black/5 dark:border-white/5">
      <div className="mx-auto flex max-w-4xl flex-col gap-4 px-6 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Kibret Guesh Bahta</p>
        <div className="flex flex-wrap gap-4">
          <a href={`mailto:${EMAIL}`} className="hover:text-accent">
            {EMAIL}
          </a>
          <a
            href={GITHUB}
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent"
          >
            GitHub
          </a>
          <a
            href={LOMILAB}
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent"
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
      <About />
      <Skills />
      <Projects />
      <Experience />
      <SiteFooter />
    </main>
  );
}
