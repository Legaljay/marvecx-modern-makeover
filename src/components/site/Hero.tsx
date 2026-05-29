import heroEarth from "@/assets/hero-earth.jpg";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-center justify-center overflow-hidden px-6 pt-32 pb-24">
      <img
        src={heroEarth}
        alt="Earth viewed from low orbit above the African continent"
        width={1920}
        height={1280}
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-70"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-background/40 via-background/30 to-background"
        aria-hidden
      />

      <div className="mx-auto max-w-4xl text-center animate-fade-up">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-white/70 backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-slow" />
          African Aerospace · ISTC 2025 Live
        </span>

        <h1 className="mt-6 font-display text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-7xl md:text-8xl">
          Engineering the
          <br />
          <span className="text-gradient-brand">multiplanetary</span> future
          <br />
          from Africa.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg">
          MARVECX bridges aerospace design, research, and education — building a sustainable
          spacefaring civilization grounded in African talent and global collaboration.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="/events"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition-transform active:scale-95"
          >
            Explore ISTC 2025
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="/about"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-bold text-white backdrop-blur transition-colors hover:bg-white/10"
          >
            About Marvecx
          </a>
        </div>

        {/* Mission control HUD strip */}
        <div className="mx-auto mt-16 grid max-w-3xl grid-cols-3 divide-x divide-white/10 rounded-2xl border border-white/10 bg-surface/40 backdrop-blur">
          {[
            { k: "3", v: "ISTC Editions" },
            { k: "2026", v: "Research Sector Launch" },
            { k: "1", v: "Continent. Global mission." },
          ].map((s) => (
            <div key={s.v} className="px-4 py-5">
              <div className="font-display text-2xl font-bold text-gradient-brand">{s.k}</div>
              <div className="mt-1 text-[10px] sm:text-xs font-medium uppercase tracking-widest text-white/50">
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
