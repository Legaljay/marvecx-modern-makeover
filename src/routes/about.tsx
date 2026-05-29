import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { MissionVision } from "@/components/site/MissionVision";
import { Sectors } from "@/components/site/Sectors";

const VALUES = [
  { t: "Innovation", b: "Pioneering creative solutions for aerospace and sustainability." },
  { t: "Excellence", b: "Upholding the highest standards in education, research, and engineering." },
  { t: "Collaboration", b: "Building global partnerships that unite talent and technology." },
  { t: "Sustainability", b: "Promoting green engineering and responsible development." },
  { t: "Empowerment", b: "Inspiring and equipping the next generation of innovators." },
] as const;

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — MARVECX Aerospace" },
      {
        name: "description",
        content:
          "MARVECX bridges aerospace engineering, environmental responsibility, and technological development across Africa and the global community.",
      },
      { property: "og:title", content: "About MARVECX" },
      {
        property: "og:description",
        content: "Mission, vision, sectors, and values of MARVECX Aerospace.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageShell>
      <section className="px-6 pt-40 pb-16">
        <div className="mx-auto max-w-4xl text-center animate-fade-up">
          <p className="font-display text-xs font-bold uppercase tracking-[0.35em] text-primary">
            About us
          </p>
          <h1 className="mt-4 font-display text-5xl font-extrabold tracking-tight sm:text-7xl">
            An African company building <span className="text-gradient-brand">beyond Earth</span>.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/65">
            MARVECX advances aerospace design, research, and education with a deep focus on
            sustainability and innovation — bridging engineering, environmental responsibility,
            and human capacity development.
          </p>
        </div>
      </section>

      <MissionVision />
      <Sectors />

      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <p className="font-display text-xs font-bold uppercase tracking-[0.35em] text-primary">
              How we operate
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
              Core <span className="text-gradient-brand">values</span>
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((v, i) => (
              <div
                key={v.t}
                className="group rounded-2xl border border-white/5 bg-surface/40 p-6 transition-colors hover:border-white/15"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-white/30">0{i + 1}</span>
                  <span className="h-2 w-2 rounded-full bg-gradient-brand" />
                </div>
                <h3 className="mt-4 font-display text-xl font-bold">{v.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{v.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 bg-surface/20 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="font-display text-xs font-bold uppercase tracking-[0.35em] text-primary">
            Roadmap
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            Future <span className="text-gradient-brand">outlook</span>
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              { tag: "Short-term", body: "Strengthen the Education Sector and expand global partnerships." },
              { tag: "Mid-term · 2026", body: "Launch the Research Sector to drive breakthrough discoveries." },
              { tag: "Long-term", body: "Establish Design & Manufacturing to build aerospace systems on the continent." },
            ].map((m) => (
              <div key={m.tag} className="rounded-2xl border border-white/5 bg-background/50 p-6">
                <div className="text-xs font-bold uppercase tracking-widest text-accent">
                  {m.tag}
                </div>
                <p className="mt-3 text-base leading-relaxed text-white/75">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
