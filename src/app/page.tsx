import Link from "next/link";

export default function HomePage() {
  return (
    <main className="space-y-24">
      {/* Hero */}
      <section className="pt-6">
        <div className="neo-card relative overflow-hidden">
          <div
            className="absolute inset-0 -z-10 bg-[linear-gradient(120deg,#fde04733,#f472b633,#22d3ee33)]"
            aria-hidden
          />
          <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            Hi, I’m Sam — building delightful software experiences.
          </h1>
          <p className="mt-4 max-w-prose text-pretty text-[var(--muted)]">
            I’m a software engineer focused on product, performance, and clean
            design. This site is a small collection of work and writing.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="#projects" className="neo-btn">
              View Projects
            </Link>
            <a href="mailto:hello@samwal.sh" className="neo-btn-ghost">
              Get in touch
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="grid gap-6 md:grid-cols-[1fr,1.2fr]">
        <div className="neo-card">
          <h2 className="text-xl font-semibold">About</h2>
          <p className="mt-2 text-[var(--muted)]">
            I enjoy shipping elegant, reliable UIs and APIs. Lately I’m working
            with Next.js, TypeScript, and Tailwind.
          </p>
        </div>
        <ul className="grid gap-6">
          <li className="neo-card">
            <h3 className="font-medium">What I value</h3>
            <p className="mt-2 text-[var(--muted)]">
              Focus, clarity, and momentum.
            </p>
          </li>
          <li className="neo-card">
            <h3 className="font-medium">Currently</h3>
            <p className="mt-2 text-[var(--muted)]">
              Exploring edge rendering and AI tooling.
            </p>
          </li>
        </ul>
      </section>

      {/* Projects */}
      <section id="projects" className="space-y-6">
        <div className="flex items-end justify-between">
          <h2 className="text-xl font-semibold">Projects</h2>
          <a
            href="https://github.com/samjw"
            target="_blank"
            rel="noreferrer"
            className="text-sm hover:opacity-80"
          >
            See all
          </a>
        </div>
        <ul className="grid gap-6 sm:grid-cols-2">
          {[
            {
              title: "Personal Site",
              desc: "This site. Next.js + Tailwind + TypeScript.",
              href: "#",
            },
            {
              title: "Starter Kit",
              desc: "A minimal Next.js starter with sensible defaults.",
              href: "#",
            },
          ].map((p) => (
            <li key={p.title} className="neo-card">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-medium">{p.title}</h3>
                  <p className="mt-1 text-[var(--muted)]">{p.desc}</p>
                </div>
                <a href={p.href} className="neo-btn-ghost px-3 py-1.5 text-xs">
                  View
                </a>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
