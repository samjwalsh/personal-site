import Link from "next/link";
import TextLink from "@/components/text-link";

export default function HomePage() {
  const skills = [
    "JavaScript / TypeScript",
    "React",
    "Next.js",
    "Svelte",
    "SQL / NoSQL",
    "PostgreSQL",
    "Docker",
    "Git",
  ];

  const experience = [
    {
      company: "Eaton Corporation",
      role: "Full Stack Engineering Intern",
      location: "Dublin",
      period: "May 2025 - Aug 2025",
      bullets: [
        "Built new and enhanced existing React/Next.js applications.",
        "Collaborated with UI/UX and engineers to develop reusable components and utilities.",
        "Proposed and implemented strategic improvements.",
        "Noticed and fixed security issues.",
        "Worked within an agile team.",
      ],
    },
    {
      company: "Maths Tuition",
      role: "Tutor",
      location: "Dublin - Wicklow",
      period: "Sep 2023 - Present",
      bullets: [
        "Teaching Leaving and Junior Cert Maths.",
        "Currently tutoring 11 students weekly.",
      ],
    },
    {
      company: "Teddy's Ice Cream",
      role: "Manager / Server",
      location: "Dún Laoghaire",
      period: "Server 2021 - 2023, Manager 2024 - May 2025",
      bullets: [
        "Trained staff, managed deliveries and website, served customers.",
        "Opened/closed units and handled cash operations.",
      ],
    },
  ];

  const projects = [
    {
      title: "Teddy's POS",
      period: "Sep 2023 - Mar 2024",
      desc: "Point-of-sale system replacing the legacy setup. Electron + React client, Svelte + PostgreSQL backend/admin. Deployed to and currently in use at 5 locations.",
    },
    {
      title: "Home Server",
      period: "Jan 2019 - Present",
      desc: "Unraid server for media storage and utilities. Automated deployments, virtualization, sysadmin and Docker experience. Experimenting with different software and configurations.",
    },
  ];

  const education = [
    {
      school: "Trinity College Dublin",
      degree: "BA (Mod.) Computer Science & Economics",
      period: "Sep 2023 - Present",
      notes:
        "Joint Honours with intention to major in CS and minor in Economics (May 2027). Currently averaging a first.",
    },
    {
      school: "St. Gerard's Secondary School",
      degree: "Leaving Certificate — 625 Points (7 H1s)",
      period: "Sep 2017 - Jun 2023",
      notes:
        "H1 in English, Maths, Spanish, Economics, DCG, Physics, Applied Maths; O3 in Irish. School Prefect.",
    },
  ];

  const awards = [
    {
      name: "Entrance Exhibition Award",
      org: "Trinity College Dublin",
      year: "2023",
    },
    { name: "Physics Award", org: "St. Gerard's", year: "2023" },
    { name: "Economics Award", org: "St. Gerard's", year: "2023" },
    { name: "Bronze Gaisce", org: "Gaisce", year: "2021" },
  ];

  const volunteering = [
    {
      name: "Steps For Charity",
      period: "Feb 2021",
      desc: "Organised a fundraiser in St. Gerard's; raised €7,588 for Laura Lynn.",
    },
    {
      name: "Homeless Mobile Run",
      period: "Jan 2021 - May 2021",
      desc: "Baked goods weekly for distribution to ~200 homeless people around Grafton Street, Dublin.",
    },
    {
      name: "Light Up Greystones",
      period: "Dec 2020",
      desc: "Distributed leaflets for a community day of activities leading up to Christmas.",
    },
    {
      name: "Clean Coasts",
      period: "Nov 2020 - Feb 2021",
      desc: "Picked up litter on Wicklow coasts for 13 weeks as part of An Taisce's project.",
    },
  ];

  return (
    <main className="space-y-12">
      {/* Hero */}
      <section>
        <div className="neo-card relative overflow-hidden">
          <div
            className="absolute inset-0 -z-10 bg-[linear-gradient(120deg,#fde04733,#f472b633,#22d3ee33)]"
            aria-hidden
          />
          <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            Sam Walsh
          </h1>
          <p className="mt-2 text-[var(--muted)]">Kilpedder, Wicklow</p>
          <p className="mt-4 max-w-prose text-pretty text-[var(--muted)]">
            3rd Year Computer Science & Economics student in Trinity College
            Dublin. Experienced with web development using JS/TS, React,
            Next.js, Svelte, SQL/NoSQL, Docker and Git. I enjoy solving
            real-world problems. Built a POS system currently in use in 5
            locations.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="#experience" className="neo-btn-ghost">
              Experience
            </Link>
            <Link href="#projects" className="neo-btn-ghost">
              Projects
            </Link>
            <Link href="#education" className="neo-btn-ghost">
              Education
            </Link>
            <a href="mailto:sam@samjw.ie" className="neo-btn">
              Get in touch
            </a>
          </div>
          <h3 className="mt-4 font-medium">Skills</h3>
          <ul className="mt-2 flex flex-wrap gap-2">
            {skills.map((s) => (
              <li
                key={s}
                className="rounded border-2 border-black bg-[var(--card-bg)] px-2 py-1 text-xs shadow-[4px_4px_0_0_var(--elev)]"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="scroll-mt-24 space-y-6">
        <h2 className="text-xl font-semibold">Experience</h2>
        <ul className="grid gap-6">
          {experience.map((e) => (
            <li key={`${e.company}-${e.role}`} className="neo-card">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="font-medium">
                    {e.role} — {e.company}
                  </h3>
                  <p className="text-sm text-[var(--muted)]">
                    {e.location} • {e.period}
                  </p>
                </div>
              </div>
              <ul className="mt-3 grid list-disc gap-1 pl-5 text-sm text-[var(--muted)]">
                {e.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      {/* Projects */}
      <section id="projects" className="scroll-mt-24 space-y-6">
        <div className="flex items-end justify-between">
          <h2 className="text-xl font-semibold">Projects</h2>
          <TextLink
            external
            text="GitHub"
            link="https://github.com/samjwalsh"
          />
        </div>
        <ul className="grid gap-6 sm:grid-cols-2">
          {projects.map((p) => (
            <li key={p.title} className="neo-card">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-medium">{p.title}</h3>
                  <p className="text-xs text-[var(--muted)]">{p.period}</p>
                  <p className="mt-1 text-[var(--muted)]">{p.desc}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Education */}
      <section id="education" className="scroll-mt-24 space-y-6">
        <h2 className="text-xl font-semibold">Education</h2>
        <ul className="grid gap-6">
          {education.map((ed) => (
            <li key={ed.school} className="neo-card">
              <h3 className="font-medium">{ed.school}</h3>
              <p className="text-sm text-[var(--muted)]">{ed.degree}</p>
              <p className="text-sm text-[var(--muted)]">{ed.period}</p>
              <p className="mt-2 text-[var(--muted)]">{ed.notes}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Awards */}
      <section id="awards" className="scroll-mt-24 space-y-6">
        <h2 className="text-xl font-semibold">Awards</h2>
        <ul className="grid gap-6 sm:grid-cols-2">
          {awards.map((a) => (
            <li key={`${a.name}-${a.year}`} className="neo-card">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-medium">{a.name}</h3>
                  <p className="text-sm text-[var(--muted)]">
                    {a.org} • {a.year}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Volunteering */}
      <section id="volunteering" className="space-y-6">
        <h2 className="text-xl font-semibold">Volunteering</h2>
        <ul className="grid gap-6">
          {volunteering.map((v) => (
            <li key={`${v.name}-${v.period}`} className="neo-card">
              <h3 className="font-medium">{v.name}</h3>
              <p className="text-sm text-[var(--muted)]">{v.period}</p>
              <p className="mt-2 text-[var(--muted)]">{v.desc}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
