const SECTORS = [
  {
    n: "01",
    title: "Education",
    status: "Active",
    statusColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/30",
    body:
      "Training, outreach, and knowledge development across Africa and the global aerospace community — our operating engine today.",
  },
  {
    n: "02",
    title: "Research",
    status: "Launching 2026",
    statusColor: "text-primary bg-primary/10 border-primary/30",
    body:
      "Driving new scientific exploration in orbital science, sustainability, and planetary systems.",
  },
  {
    n: "03",
    title: "Design & Manufacturing",
    status: "Near future",
    statusColor: "text-accent bg-accent/10 border-accent/30",
    body:
      "Expanding the technological infrastructure to design and build aerospace systems on the continent.",
  },
] as const;

export function Sectors() {
  return (
    <section className="border-y border-white/5 bg-surface/20 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="font-display text-xs font-bold uppercase tracking-[0.35em] text-primary">
              What we do
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
              Three <span className="text-gradient-brand">sectors</span>, one ecosystem
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-white/55">
            A holistic aerospace ecosystem integrating engineering excellence, scientific
            discovery, and human capacity development.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {SECTORS.map((s) => (
            <article
              key={s.title}
              className="group relative flex flex-col rounded-3xl border border-white/5 bg-background/40 p-8 transition-all hover:-translate-y-1 hover:border-white/15"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-white/30">{s.n}</span>
                <span
                  className={`rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest ${s.statusColor}`}
                >
                  {s.status}
                </span>
              </div>
              <h3 className="mt-8 font-display text-2xl font-bold">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">{s.body}</p>
              <div className="mt-8 h-px w-full bg-gradient-to-r from-white/10 via-white/5 to-transparent" />
              <div className="mt-4 flex items-center text-xs font-bold uppercase tracking-widest text-white/40 transition-colors group-hover:text-white">
                Learn more <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
