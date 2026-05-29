const EVENTS = [
  {
    code: "ISTC 2023",
    date: "June 2023",
    badge: "01 · Inaugural",
    body:
      "The inaugural edition, bringing together pioneering voices in space science and technology to connect Africa with the global space community.",
    cta: "Archive",
    href: "#",
    accent: false,
  },
  {
    code: "ISTC 2024",
    date: "November 2024",
    badge: "02 · Second Edition",
    body:
      "Expanding the conversation, strengthening international partnerships, and spotlighting advancements in aerospace, sustainability, and STEM.",
    cta: "Recap",
    href: "#",
    accent: false,
  },
  {
    code: "Emergence",
    date: "ISTC 2025 · Ongoing",
    badge: "03 · Knowledge Series",
    body:
      "Exploring transformative ideas in space exploration, planetary science, robotics, aviation, and next-generation technologies.",
    cta: "Join the mission",
    href: "#",
    accent: true,
  },
] as const;

export function Events({ heading = true }: { heading?: boolean }) {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {heading && (
          <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="font-display text-xs font-bold uppercase tracking-[0.35em] text-primary">
                Convention series
              </p>
              <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
                The <span className="text-gradient-brand">ISTC</span> series
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-white/55">
              International Space Technology Convention — three editions and counting, bridging
              research, industry, and emerging talent.
            </p>
          </div>
        )}

        <div className="grid gap-6 md:grid-cols-3">
          {EVENTS.map((e) => (
            <article
              key={e.code}
              className={`group relative overflow-hidden rounded-3xl border bg-surface/40 p-8 transition-all hover:-translate-y-1 ${
                e.accent
                  ? "border-accent/40 shadow-[0_0_60px_-30px_oklch(0.66_0.27_18/0.6)]"
                  : "border-white/5 hover:border-white/15"
              }`}
            >
              {e.accent && (
                <span className="absolute right-5 top-5 rounded-full bg-accent px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest text-white animate-pulse-slow">
                  Live
                </span>
              )}
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
                {e.badge}
              </div>
              <h3 className="mt-6 font-display text-3xl font-extrabold tracking-tight">
                {e.code}
              </h3>
              <div className="mt-1 text-xs font-bold uppercase tracking-widest text-white/50">
                {e.date}
              </div>
              <p className="mt-5 text-sm leading-relaxed text-white/65">{e.body}</p>
              <a
                href={e.href}
                className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-bold transition-colors ${
                  e.accent
                    ? "bg-gradient-brand text-white"
                    : "border border-white/10 text-white/80 group-hover:bg-primary group-hover:text-white group-hover:border-transparent"
                }`}
              >
                {e.cta} <span>→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
