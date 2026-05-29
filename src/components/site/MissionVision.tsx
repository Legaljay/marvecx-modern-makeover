export function MissionVision() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="font-display text-xs font-bold uppercase tracking-[0.35em] text-primary">
            Why we exist
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            Mission &amp; <span className="text-gradient-brand">Vision</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <article className="group relative overflow-hidden rounded-3xl border border-white/5 bg-surface/50 p-10 backdrop-blur-md transition-colors hover:border-primary/40">
            <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-primary/20 blur-3xl transition-opacity group-hover:opacity-100 opacity-60" aria-hidden />
            <div className="font-display text-xs font-bold uppercase tracking-[0.3em] text-primary">
              Mission
            </div>
            <p className="mt-4 text-lg leading-relaxed text-white/80">
              To develop world-class aerospace technologies, promote research for a sustainable and
              multiplanetary future, and empower individuals globally through education,
              collaboration, and innovation.
            </p>
          </article>

          <article className="group relative overflow-hidden rounded-3xl border border-white/5 bg-surface/50 p-10 backdrop-blur-md transition-colors hover:border-accent/40">
            <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-accent/20 blur-3xl opacity-60" aria-hidden />
            <div className="font-display text-xs font-bold uppercase tracking-[0.3em] text-accent">
              Vision
            </div>
            <p className="mt-4 text-lg leading-relaxed text-white/80">
              To position Africa as a major player in global aerospace and technological
              advancement while leading the transition toward a sustainable and spacefaring
              civilization.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
